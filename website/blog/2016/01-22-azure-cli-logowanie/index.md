---
slug: azure-cli-logowanie
title: "Azure CLI – Logowanie"
description: "Jak zalogować się do Microsoft Azure przez Azure CLI? Praktyczny poradnik instalacji i konfiguracji Azure CLI na Windows i Linux krok po kroku."
authors: [progala]
date: "2016-01-22"
tags: 
  - "azure"
  - "azure-cli"
  - "cli"
  - "cloud"
  - "logowanie"
keywords:
  - "azure"
  - "azure-cli"
  - "cli"
  - "cloud"
  - "logowanie"
hide_table_of_contents: true
---

W poniższym artykule opiszę w skrócie jak zabrać się do Azure CLI. Z jego pomocą będziemy mogli administrować chmurą Azure z systemu Windows jak i Linux. Aby wystartować potrzebujemy pliki instalacyjne:

**node.js:** [https://nodejs.org/en/download/](https://nodejs.org/en/download/ "https://nodejs.org/en/download/")

**Azure CLI:**  [https://azure.microsoft.com/en-us/documentation/articles/xplat-cli-install/](https://azure.microsoft.com/en-us/documentation/articles/xplat-cli-install/ "https://azure.microsoft.com/en-us/documentation/articles/xplat-cli-install/")

Po ich instalacji z poziomu CMD mamy dostępny moduł Azure CLI. Wpisz w oknie CMD: azure, a następnie zobaczysz informacje dotyczące komend azure.

![Logowanie do Azure CLI - grafika 1](images/image2.png)

<!--truncate-->

Aby zalogować się do Azure, potrzebujemy pliku z informacjami o subskrypcji oraz konta @domena.onmicrosoft.com.

Korzystamy z komend:

1. Pobranie pliku subskrypcji:
    
    azure account download
    
    (otworzy się okno przeglądarki, gdzie po zalogowaniu pobierzemy plik .publishsettings)
2. Import pliku subskrypcji:
    
    azure account import "C:\Temp\Azure-Moja-Subskrypcja-2015-credentials.publishsettings"
    
3. Logowanie do Azure:
    
    azure login -u piotr@justcloud.onmicrosoft.com
    

![Logowanie do Azure CLI - grafika 2](images/image3.png)

Podobają Ci się konkretne i krótkie posty? Komentuj i pisz co Cię interesuje!
