---
slug: logowanie-do-azure-powershell
title: "Logowanie do Azure - Powershell"
description: "Jak zalogować się do Microsoft Azure przez PowerShell? Przewodnik krok po kroku po Azure Resource Manager (ARM) i automatyzacji w chmurze."
authors: [progala]
date: "2016-01-10"
tags: 
  - "arm"
  - "azure-resource-manager"
  - "powershell"
keywords:
  - "azure powershell"
  - "arm"
  - "azure resource manager"
  - "logowanie azure"
  - "powershell azure"
hide_table_of_contents: true
---

Każdy prawdziwy admin powinien korzystać nie tylko z okienek, ale między innymi z PowerShell. Dlatego napiszę parę słów na temat zarządzania Azure oraz zaprezentuje, jak łatwo można się połączyć z Azure za pomocą konsoli PS. W dwóch krokach opiszę, co należy zrobić, aby zrobić to szybko i ze zrozumieniem tematu.

Małe wprowadzenie: Azure przechodzi domyślnie w tryb kontenerowy, tak zwany Resource Groups, nazywany też ARM, czyli Azure Resource Manager. Z punktu widzenia architekta, admina, specjalisty IT zmienia to wiele rzeczy, począwszy od poleceń PowerShell, aż po budowanie aplikacji w chmurze. Wszystkich szczegółowych informacji dowiemy się na stronach MS, natomiast my skupimy się, jak postawić pierwsze kroki w Azure poprzez konsolę PS.

**Step 1:** Po pierwsze potrzebujemy Powershell dla Azure, który ściągniemy tutaj: [https://github.com/Azure/azure-powershell/releases/download/v1.0.2-December2015/azure-powershell.1.0.2.msi](https://github.com/Azure/azure-powershell/releases/download/v1.0.2-December2015/azure-powershell.1.0.2.msi "https://github.com/Azure/azure-powershell/releases/download/v1.0.2-December2015/azure-powershell.1.0.2.msi")

**Step 2:** Podłączyć się do Azure możemy dwoma komendami, które umożliwią nam zarządzanie naszymi subskrypcjami.

- Add-AzureAccount (tryb normalny ASM)
- Login-AzureRmAccount (tryb kontenerowy ARM)

<!--truncate-->

![Logowanie do Azure PowerShell - grafika 1](images/image.png)

W zależności, czy korzystamy z Live ID, czy Azure AD, wybieramy, za pomocą jakiego konta chcemy się logować, podajemy dane i gotowe!

Aby pobrać informacje na temat subskrypcji, korzystamy z poleceń:

- Get-AzureSubscription (ASM)
- Get-AzureRMSubscription (ARM)

Gdy korzystamy z wielu subskrypcji, należy wybrać, na której będziemy pracować:

- Set-AzureSubscription (ASM)
- Select-AzureRMSubscription (ARM)

![Logowanie do Azure PowerShell - grafika 2](images/image1.png)

Nowe wersje PowerShell możemy śledzić na stronie: [https://github.com/Azure/azure-powershell/releases](https://github.com/Azure/azure-powershell/releases)

To jest jedna z możliwości podpięcia się do zasobów w Azure. Jeśli podoba wam się powyższa treść, zapraszam do komentowania, gdyż to zachęci mnie do pisania kolejnych postów, i nie tylko wprowadzających do PowerShell 😊
