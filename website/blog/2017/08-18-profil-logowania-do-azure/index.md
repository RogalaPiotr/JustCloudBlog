---
authors:
  - progala
date: "2017-08-18"
description: Pracujesz dużo w konsoli PowerShell? Nie chcesz logować się co chwilę? Wykorzystaj plik z kontekstem, który ułatwi Ci pracę z konsolą!
hide_table_of_contents: true
keywords:
  - azure
  - azurermaccount
  - azurermcontext
  - import-azurermcontext
  - powershell
  - subscryption
slug: profil-logowania-do-azure
tags:
  - azure
  - azurermaccount
  - azurermcontext
  - import-azurermcontext
  - powershell
  - subscryption
title: Profil logowania do Azure
---

Spotkałem się ostatnio z bardzo ciekawym featurem związanym z zapisaniem swojego profilu logowania do Azure. W skrócie opisując, jeśli używasz często PowerShella, a dodatkowo masz MFA, zapewne wiesz, jak denerwujące jest ciągłe pytanie o login i hasło.

<!-- truncate -->

Kiedyś pojawiła się opcja związana z zapisaniem credentiali do pliku, a następnie za pomocą skryptu można było sobie zautomatyzować proces logowania. Jednakże przestało to działać po wprowadzeniu ARM itd. Aby nie rozwodzić się nad tym, przedstawię Ci, jak możemy sobie ułatwić życie i pracę ze skryptami, ale o tym później. Na początku proszę Cię o wykonanie aktualizacji PowerShell Azure, ponieważ poniższe polecenia są dostępne od wersji 3.8.0 oraz 4.2.0, w celu aktualizacji możesz użyć Web Installera z linku poniżej.

**Dokumentacja:** Add-AzureRmAccount: [https://docs.microsoft.com/en-us/powershell/module/azurerm.profile/add-azurermaccount?view=azurermps-3.8.0](https://docs.microsoft.com/en-us/powershell/module/azurerm.profile/add-azurermaccount?view=azurermps-3.8.0) Save-AzureRmContext: [https://docs.microsoft.com/en-us/powershell/module/azurerm.profile/save-azurermcontext?view=azurermps-3.8.0](https://docs.microsoft.com/en-us/powershell/module/azurerm.profile/save-azurermcontext?view=azurermps-3.8.0) Import-AzureRmContext: [https://docs.microsoft.com/en-us/powershell/module/azurerm.profile/import-azurermcontext?view=azurermps-4.2.0](https://docs.microsoft.com/en-us/powershell/module/azurerm.profile/import-azurermcontext?view=azurermps-4.2.0) WebInstaller: [https://www.microsoft.com/web/downloads/platform.aspx](https://www.microsoft.com/web/downloads/platform.aspx)

<!--truncate-->

W moim przypadku mamy dwie subskrypcje i zapisując swój profil, mogę zdefiniować, jaka ma zostać wybrana subskrypcja w momencie, kiedy będę go importował w dalszej części. Na początku pobiorę ID Subskrypcji w klasyczny sposób: otwieram okno PowerShella, loguję się używając _Login-AzureRmAccount_, a następnie wpisuję _Get-AzureRmSubscryption_ i dostaję taki wynik:

![Profil logowania do Azure - grafika 1](images/loginazure1.jpg)

Następnie mogę przejść do wykonania polecenia, które mnie zaloguje, a później umożliwi mi zapisanie profilu:

```sh
Add-AzureRmAccount -SubscriptionId "yyyy-yyyy-yyyy-yyyy"

```

Wynik:

![Profil logowania do Azure - grafika 2](images/loginazure2.jpg)

Następne polecenie - zapisanie profilu:

```sh
Save-AzureRmContext -Path C:\\temp\\progala-mas.json

```

![Profil logowania do Azure - grafika 3](images/loginazure3.jpg)

W tym momencie zapisałem swój profil z odwołaniem do wcześniej wskazanej subskrypcji. Jako hint mogę powiedzieć, że możemy użyć funkcji 2w1 jak poniżej:

```sh
Save-AzureRmContext -Profile (Add-AzureRmAccount -SubscriptionId "yyyy-yyyy-yyyy-yyyy") -Path C:\temp\progala-mas.json

```

Żeby móc zaimportować zapisany profil, wystarczy użyć polecenia:

```sh
Import-AzureRmContext -Path C:\temp\progala-mas.json

```

![Profil logowania do Azure - grafika 4](images/loginazure4.jpg)

W taki sposób możemy swój profil wywołać, gdy korzystamy z różnych skryptów itp. Może to być dla kogoś mało atrakcyjne, jednakże mogę zdradzić, do czego bardzo ta wiedza się przydaje. Mając zagnieżdżone skrypty PowerShella, które wykonuję jako Joby, mają one to do siebie, że wywołane skrypty w tle mają problem z przyjęciem sesji z poprzedniego okna, gdyż sesja nie jest dziedziczona. Gdy użyjemy polecenia Import-AzureRmContext, mamy "gwarancję", że wywołane okno w tle będzie mogło swobodnie korzystać z sesji Azure.
