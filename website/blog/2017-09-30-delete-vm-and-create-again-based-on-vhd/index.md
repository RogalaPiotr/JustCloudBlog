---
authors:
  - progala
date: "2017-09-30"
description: Rekreowanie maszyny z istniejącego dysku może być konieczne kiedy mamy migrację lub problemy z maszyną. Ten artykuł opisuje jak sprawnie przejść przed ten proces.
hide_table_of_contents: true
keywords:
  - powershell
  - azure
  - microsoft azure
  - storage account
  - vhd
  - migracja
  - migration
  - network
  - sieć
  - blog
slug: delete-vm-and-create-again-based-on-vhd
tags:
  - azure
  - blob
  - devops
  - powershell
  - storage
  - vm
  - migracja
title: Delete VM and create again based on .vhd
---

W tej części tytuł jest angielski, ponieważ nie stosuje spolszczeń dla technicznego języka. Ten post jest spowodowany tym co Microsoft niestety przestał wspierać w Azure a mianowicie breaklease dla blobów podpiętych do wirtualnej maszyny.

<!-- truncate -->

Było mi to potrzebne do jednego zadania, dlatego byłem zmuszony zrobić coś innego. Mianowicie potrzebne mi było usunięcie maszyny i stworzenie jej bazując na istniejących vhd'kach w innym kontenerze dodatkowo moje założenie wymagało powershell'a. W skrócie odtworzenie maszyny z jakiegoś stanu, który jest przechowywany jako kopia dysków wirtualnej maszyny. Myślę, że są osoby, którym się to przyda.

Krótki opis:

1. Podajemy nazwę maszyny lub listę maszyn z naszej subskrypcji.
2. Na podstawie nazwy maszyny znajdujemy resource groupe.
3. Wyłączamy maszynę.
4. Na podstawie RG i nazwy VM sprawdzamy jakie dyski są podpięte do maszyny.
5. Znajdujemy sobie context dla dysków.
6. Mając wszystkie dane przechodzimy do usuwania maszyny.
7. Usuwany obecny vhd z OS.
8. Kopiujemy w jego miejsce wcześniej skopiowany vhd z kontenera "images".
9. Przeprowadzamy dalej tą samą operacje dla wszystkich podpiętych dysków data.
10. Na podstawie wszystkich zebranych wcześniej danych tworzymy wirtualną maszynę.

<!--truncate-->

Puenta jest taka. Jeśli okaże się, że któregoś razu Microsoft Support powie wam, że trzeba usunąć maszynę i stworzyć ją ponownie dzięki temu skryptowi możecie to zrobić zaledwie w 5 minut i potwierdzić, czy to pomogło czy diagnoza Supportu była niewłaściwa. Zdarza się, że MS sugeruje usunięcie maszyny i stworzenie jej ponownie i mając np. 5 maszyn wiecie, że nie jest to zabawa na 5 minut. Ale teraz wykorzystując ten skrypt możecie to zrobić. Wcześniejszym etapem będzie poprawienie skryptu, aby nie usuwać dysków vhd tylko użyć obecnych. Natomiast jeśli chcecie zrobić sobie kopie bezpieczeństwa dysków vhd to będzie należeć przeprowadzić procedurę wyłączenia maszyn skopiowania vhd'ków np. do kontenera "images" i puścić poniższy skrypt.

Skrpyt w bardziej czytelnej formie na github: [https://github.com/RogalaPiotr/JustCloudPublic/tree/master/recreate-vm-from-vhd](https://github.com/RogalaPiotr/JustCloudPublic/tree/master/recreate-vm-from-vhd)

```ps1
$vms = @("SimpleWindowsVM")
$sourcecontainerimage = "images"
function recreatevms {
    foreach ($vm in $vms) {
        Write-Host "VM name: "$vm
        $vmrg = Get-AzureRmResource | Where-Object {$_.Name -like $vm}
        Write-Host "VM Resource Group: "$vmrg.ResourceGroupName
        $vmsize = (Get-AzureRmVM -ResourceGroupName $vmrg.ResourceGroupName -VMName $vm).HardwareProfile.VmSize
        Write-Host "VM size: "$vmsize
        $nicvm = Get-AzureRmNetworkInterface -ResourceGroupName $vmrg.ResourceGroupName | Where-Object {$_.VirtualMachine.Id -like "*$vm*"}
        Write-Host "VM NIC name: "$nicvm.Name
        $vmstatus = Get-AzureRmVM -ResourceGroupName $vmrg.ResourceGroupName -Name $vm -Status
        Write-Host "VM status is: "$vmstatus.Statuses.DisplayStatus[1]
        if($vmstatus.Statuses.DisplayStatus -like "*running*"){
            Write-Host "VM stopping: "$vm
            $tmp = Stop-AzureRmVM -ResourceGroupName $vmrg.ResourceGroupName -Name $vm -Force
        }
        $vmdiskos = ((Get-AzureRmVM -ResourceGroupName $vmrg.ResourceGroupName -Name $vm).StorageProfile).OsDisk 3> $null
        $vmdisksdata = ((Get-AzureRmVM -ResourceGroupName $vmrg.ResourceGroupName -Name $vm).StorageProfile).DataDisks 3> $null
        Write-Host "Get VM disk os: "$vmdiskos.Name 
        Write-Host "Get VM disk data: "$vmdisksdata.Name
        Write-Host "Get VM disk data count: "$vmdisksdata.Count

        $storagediskosname = ($vmdiskos.Vhd.Uri.Split("/")[2]).Replace(".blob.core.windows.net","")
        $containerdiskos = ($vmdiskos.Vhd.Uri.Split("/")[3])
        $vmdiskosname = ($vmdiskos.Vhd.Uri.Split("/")[4])
        $storageaccountos = Get-AzureRmResource | Where-Object {$_.Name -like "$storagediskosname"}
        $storageaccountkeyos = (Get-AzureRmStorageAccountKey -Name $storageaccountos.Name -ResourceGroupName $storageaccountos.ResourceGroupName).Value[0]
        $storagecontext = New-AzureStorageContext -StorageAccountName $storageaccountos.Name -StorageAccountKey $storageaccountkeyos
        $container = Get-AzureStorageContainer -Name $containerdiskos -context $storagecontext

        $containerdiskosimage = $vmdiskos.Vhd.Uri -replace("vhds",$sourcecontainerimage)
        
        Remove-AzureRmVM -Name $vm -ResourceGroupName $vmrg.ResourceGroupName -Force
        Write-Host "Removing VM: "$vm
        Remove-AzureStorageBlob -Blob $vmdiskosname -Container vhds -Context $storagecontext
        Write-Host "Removing VM os disk uri: "$vmdiskos.Vhd.Uri
        $tmp = Start-AzureStorageBlobCopy -srcUri $containerdiskosimage -SrcContext $storagecontext -DestContainer $containerdiskos -DestBlob $vmdiskosname -DestContext $storagecontext
        Write-Host  "Copying new os disk uri: "$containerdiskosimage

        if (![string]::IsNullOrEmpty($vmdisksdata)){
            foreach ($vmdiskdata in $vmdisksdata){

                $storagediskdataname = ($vmdiskdata.Vhd.Uri.Split("/")[2]).Replace(".blob.core.windows.net","")
                $containerdiskdata = ($vmdiskdata.Vhd.Uri.Split("/")[3])
                $vmdiskdataname = ($vmdiskdata.Vhd.Uri.Split("/")[4])
                $storageaccountdata = Get-AzureRmResource | Where-Object {$_.Name -like "$storagediskdataname"}
                $storageaccountkeydata = (Get-AzureRmStorageAccountKey -Name $storageaccountdata.Name -ResourceGroupName $storageaccountdata.ResourceGroupName).Value[0]
                $storagecontext = New-AzureStorageContext -StorageAccountName $storageaccountdata.Name -StorageAccountKey $storageaccountkeydata
                $container = Get-AzureStorageContainer -Name $containerdiskdata -context $storagecontext
                
                $containerdiskdataimage = $vmdiskdata.Vhd.Uri -replace("vhds",$sourcecontainerimage)
                        
                Remove-AzureStorageBlob -Blob $vmdiskdataname -Container vhds -Context $storagecontext
                Write-Host "Removing VM data disk uri: "$vmdiskdata.Vhd.Uri
                $tmp = Start-AzureStorageBlobCopy -srcUri $containerdiskdataimage -SrcContext $storagecontext -DestContainer $containerdiskdata -DestBlob $vmdiskdataname -DestContext $storagecontext
                Write-Host  "Copying new os disk uri: "$containerdiskdataimage
            }  
        }
        Write-Host "Creating VM"
        $vmConfig = New-AzureRmVMConfig -VMName $vm -VMSize $vmsize
        $vmConfig = Set-AzureRmVMOSDisk -VM $vmConfig -Name $vmdiskos.Name -VhdUri $vmdiskos.Vhd.Uri -CreateOption Attach -Windows
        if ($vmdisksdata.count -ge 0){
            $i = 0
            foreach ($vmdiskdatavm in $vmdisksdata){
                $vmConfig = Add-AzureRmVMDataDisk -VM $vmConfig -VhdUri $vmdiskdatavm.Vhd.Uri -CreateOption Attach -Lun $i -Name $vmdiskdatavm.Name -Caching ReadWrite
                $i++
            }
        }
        $vmConfig = Add-AzureRmVMNetworkInterface -VM $vmConfig -Id $nicvm.Id
        $vmConfig = Set-AzureRmVMBootDiagnostics -VM $vmConfig -Disable
        $vm = New-AzureRmVM -VM $vmConfig -Location $vmrg.Location -ResourceGroupName $vmrg.ResourceGroupName
    }   
}
############################################################################################################
# Recreate VM
############################################################################################################

recreatevms

```