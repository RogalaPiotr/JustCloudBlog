---
authors:
  - progala
date: "2019-09-15"
description: Walidacja szablonów ARM przy użyciu modułu PowerShell - sprawdź poprawność szablonu i przewidywane zmiany przed wdrożeniem w Azure. Test-ARMExistingResource pomaga kontrolować IaC.
keywords:
  - ARM
  - PowerShell
  - walidacja
  - template
  - Azure
  - IaC
  - ARMHelper
  - automatyzacja
  - deploy
  - szablon
  - test
  - moduł
slug: iac-control-via-powershell-module-for-arm-templates
tags:
  - arm
  - azure
  - iac
  - module
  - powershell
  - templates
  - armhelper
  - walidacja
title: IaC control via PowerShell module for ARM templates
---

Debug natywnych szablonów ARM jest ciężkim procesem dla wielu osób. Utrzymanie infrastruktury jako kod również nie jest prostą sprawą, dlatego często używa się Terraform-a dla wdrożeń w Microsoft Azure.

Szablony ARM nie posiadają pliku stanu, jak to jest w Terraform, dlatego często spotykam się z opinią, że ARM-y są beznadziejne. Po wdrożeniu trudno jest utrzymać stały rozwój infrastruktury z tego samego szablonu oraz często problemem jest przewidywalność, co się stanie z obiektami, które już masz. Nie będę się rozwodził, co lepsze, co gorsze, ponieważ wiele zależy od naszej wiedzy, podejścia, problemu lub zlecenia, które wykonujemy. Jako inżynier nie przywiązuję się do rozwiązań i uważam, że do każdego problemu należy podchodzić indywidualnie. Moim zdaniem najlepsze rozwiązania to rozwiązania natywne, nie wymagające tworzenia koła na nowo. Stąd zachęcam do pisania szablonów ARM dla Azure.

Jako pomoc w tworzeniu infrastruktury jako kod (IaC) w Microsoft Azure polecam zapoznać się z modułem PowerShell: **ARMHelper**

[https://www.powershellgallery.com/packages/ARMHelper/0.6.2](https://www.powershellgallery.com/packages/ARMHelper/0.6.2)

Za pomocą komendy Test-ARMExistingResource możemy zbudować polecenie, które sprawdzi nam wskazany szablon w kontekście deployowanych zasobów w Azure i wyświetli, co się stanie. Przykład poniżej przedstawia stworzoną resource group bez zasobów:

Użyłem szablonu z mojego repo: [https://github.com/RogalaPiotr/JustCloudPublic/tree/master/simple-vm-shutdown-on-time](https://github.com/RogalaPiotr/JustCloudPublic/tree/master/simple-vm-shutdown-on-time)  
Wykonuję kolejno komendy:
<!--truncate-->

Tworzenie nowej resource grupy:

`New-AzResourceGroup -Name 'simple-vm-shutdown-on-time' -Location westeurope`

Sprawdzenie, co wyświetli polecenie Test-ARMExistingResource:

`Test-ARMExistingResource -ResourceGroupName 'simple-vm-shutdown-on-time' -TemplateFile .\azuredeploy.json -TemplateParameterFile .\azuredeploy.parameters.json -Verbose`

![IaC control via PowerShell module for ARM templates - brak zasobów](images/2019-09-15_12h46_05.png)

Wynikiem jest informacja, co zostanie utworzone. Super sprawa, to teraz zrobię deployment szablonu i sprawdzimy ponownie.

`New-AzResourceGroupDeployment -ResourceGroupName 'simple-vm-shutdown-on-time' -TemplateFile .\azuredeploy.json -TemplateParameterFile .\azuredeploy.parameters.json -Verbose`

Niestety miałem problem z modułem Shutdown i szablon wdrożył się niepoprawnie, dlatego sprawdziłem, co wyświetli Test-ARMExistResource.

`Test-ARMExistingResource -ResourceGroupName 'simple-vm-shutdown-on-time' -TemplateFile .\azuredeploy.json -TemplateParameterFile .\azuredeploy.parameters.json -Verbose`

![IaC control via PowerShell module for ARM templates - problemy modułu Shutdown](images/2019-09-15_13h01_42.png)

Jak widać, polecenie poprawnie zwróciło, co jest do poprawienia i co zostanie zmienione (inkrementalnie).

Ostatni test to z argumentem "-Mode Complete", czyli wykonanie szablonu, który dostosuje wszystkie zasoby, niezależnie od tego, co jest stworzone w resource group, do mojego szablonu.

`Test-ARMExistingResource -ResourceGroupName 'simple-vm-shutdown-on-time' -TemplateFile .\azuredeploy.json -TemplateParameterFile .\azuredeploy.parameters.json -Verbose -Mode Complete`

![IaC control via PowerShell module for ARM templates - tryb Complete](images/2019-09-15_13h02_32.png)

Teraz można być pewniejszym, co się stanie z wdrożeniem po małych zmianach w szablonie.

Mam nadzieję, że przyda Ci się ta wiedza 😊
