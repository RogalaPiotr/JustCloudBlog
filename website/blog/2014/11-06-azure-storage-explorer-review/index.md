---
slug: azure-storage-explorer-review
title: "Azure Storage Explorer - review"
description: "Recenzja Azure Storage Explorer - darmowe narzędzie do zarządzania Azure Storage Account. Jak połączyć, przeglądać i przenosić pliki VHD do chmury Azure."
authors: [progala]
date: "2014-11-06"
tags: 
  - "Azure"
  - "Microsoft Azure Storage Explorer"
  - "Storage"
  - "CodePlex"
keywords:
  - "Azure"
  - "Microsoft Azure Storage Explorer"
  - "Storage"
  - "CodePlex"
  - "VHD"
hide_table_of_contents: true
---

Jeśli korzystacie z Azure i zastanawiałeś się, jak możesz w prosty sposób zarządzać storage'ami, polecam Azure Storage Explorer wydany przez CodePlex-a. Narzędzie możemy pobrać tu: [http://bit.ly/1O4n0pX](http://bit.ly/1O4n0pX "https://azurestorageexplorer.codeplex.com/releases/view/54430"). Jak to połączyć z Azure-m? Logujesz się do portalu, klikasz na kontener z zawartością dysków. Na dole strony pojawi się ikona "Keys" dotycząca Manage Access Keys. Są to dane wygenerowane, które umożliwiają nam tworzenie federacji pomiędzy portalami lub programami takimi jak ASE.

![Azure Storage Explorer - grafika 1](images/image.png)

Kopiujemy dane z okienka Manage Access Keys i wklejamy analogicznie do Azure Storage Explorer.

<!--truncate-->

![Azure Storage Explorer - grafika 2](images/image1.png)

Efektem jest podpięcie storage-a, gdzie możemy zarządzać dyskami bez logowania do portalu Azure-owego. Jednym z atutów jest proste przenoszenie dysków .vhd z lokalnego urządzenia do chmury. Nie będę się rozpisywał i zachwalał, zapraszam do testów. Jeśli masz pytania, zapraszam.

![Azure Storage Explorer - grafika 3](images/image2.png)
