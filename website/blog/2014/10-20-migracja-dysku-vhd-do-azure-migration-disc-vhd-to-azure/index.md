---
slug: migracja-dysku-vhd-do-azure-migration-disc-vhd-to-azure
title: "Migracja dysku .vhd do Azure – Migration disc .vhd to Azure"
description: "Praktyczny poradnik, jak przenieść dysk VHD z infrastruktury on-premises do Microsoft Azure. Migracja obrazu maszyny wirtualnej z konwersją VHDX do VHD przy użyciu PowerShell oraz upload do Azure Storage."
authors: [progala]
date: "2014-10-20"
tags:
  - "Microsoft Azure"
  - "Migracja do Azure"
  - "PowerShell"
  - "Dysk VHD"
  - "VHDX"
keywords:
  - "Azure migracja dysku"
  - "migracja VHD do Azure"
  - "Azure Storage VHD"
  - "PowerShell Azure VHD"
  - "konwersja VHDX do VHD"
hide_table_of_contents: true
---

W tym artykule opiszę, jak możemy przemigrować do Azure dysk z Windows 10 Tech Preview.

1. Przygotowujemy dysk .vhd.
    - Jeśli posiadamy dysk .vhdx, możemy użyć polecenia PS w celu jego przekonwertowania:

Convert-VHD -Path "D:\Hyper-V\Windows10\Virtual Hard Disks\Windows10.vhdx" -DestinationPath "D:\Hyper-V\Windows10\Virtual Hard Disks\Windows10.vhd"

![Migracja dysku VHD do Azure - konwersja VHDX do VHD](images/102014_1550_Migracjadys1.png)

<!--truncate-->

![Migracja dysku VHD do Azure - wybór dysku](images/102014_1550_Migracjadys2.png)

1. Wybieramy storage, na który będziemy migrować dysk. Najbardziej interesują nas linki do blobs.
2. Odpalamy PowerShell dla Azure.
    - Jeśli nie masz przystawki Azure-owej, możesz pobrać ją tutaj: [http://go.microsoft.com/?linkid=9811175](http://go.microsoft.com/?linkid=9811175)
3. W konsoli wklepujemy:

```powershell
$cred = Get-Credential  
Add-AzureAccount -Credential $cred
$sourceVHD = “D:\Hyper-V\Windows10\Virtual Hard Disks\Windows10.vhdx"
$destinationVHD="https://test-storage.blob.core.windows.net/vhds/Windows10-Test.vhd"
Add-AzureVhd -LocalFilePath $sourceVHD -Destination $destinationVHD -NumberOfUploaderThreads 5
```

**Dla $source i $destination zmieniamy wartości analogicznie do naszych potrzeb**

5. Efekt przenoszenia do Azure.

![Migracja dysku VHD do Azure - przesyłanie do Azure Storage](images/azure10prew.png)

6. Przechodzimy do Virtual Machines > Disk

    - Tutaj wybieramy nasz .vhd i klikamy Create.

    - Wypełniamy nazwę obrazu oraz wskazujemy go w naszym kontenerze z dyskami.

![Migracja dysku VHD do Azure - tworzenie obrazu dysku](images/102014_1550_Migracjadys4.png)

7. Chcąc teraz skorzystać z naszego dysku, przechodzimy do galerii z systemami: New > Compute > Virtual Machine > From Gallery.
    - Klikając na My Images, zobaczymy nasz przygotowany dysk.

I tak udało nam się przenieść wirtualkę do Azure - może to być skonfigurowana, gotowa do pracy maszyna bądź dysk bazowy "template", który możemy wykorzystywać przy tworzeniu innych maszyn.

**Opcja ściągnięcia dysku .vhd z Azure:**

1. Odpalamy konsolę PowerShell Azure.
    - Wklepujemy:
```powershell
$cred = Get-Credential
Add-AzureAccount -Credential $cred
$sourceVHD = "https://storage-test.blob.core.windows.net/vhds/Windows10Test.vhd"
$destinationVHD = "D:\Hyper-V\Windows10\Virtual Hard Disks\Windows10.vhd"
Save-AzureVhd -Source $sourceVHD -LocalFilePath $destinationVHD -NumberOfThreads 5
```