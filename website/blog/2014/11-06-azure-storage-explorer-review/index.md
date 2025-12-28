---
slug: azure-storage-explorer-review
title: "Azure Storage Explorer - review"
description: "Recenzja Azure Storage Explorer - darmowego narzędzia do zarządzania kontami Azure Storage. Jak połączyć się z Azure, przeglądać kontenery oraz przenosić pliki VHD do chmury."
authors: [progala]
date: "2014-11-06"
tags:
  - "Microsoft Azure"
  - "Azure Storage Explorer"
  - "Azure Storage"
  - "CodePlex"
keywords:
  - "Azure"
  - "Azure Storage Explorer"
  - "zarzadzanie Azure Storage"
  - "CodePlex"
  - "VHD Azure"
hide_table_of_contents: true
---

Jeśli korzystacie z Azure i zastanawialiście się, jak w prosty sposob zarzadzać storage'ami, polecam Azure Storage Explorer wydany przez CodePlex. Narzędzie możemy pobrać tutaj: [http://bit.ly/1O4n0pX](http://bit.ly/1O4n0pX "https://azurestorageexplorer.codeplex.com/releases/view/54430"). Jak połączyć je z Azure? Logujemy się do portalu, klikamy na kontener z zawartością dysków. Na dole strony pojawi się ikona "Keys" dotycząca Manage Access Keys. Są to wygenerowane dane, które umożliwiają tworzenie federacji pomiędzy portalami lub programami, takimi jak ASE.

![Azure Storage Explorer - zarządzanie kluczami dostępu](images/image.png)

Kopiujemy dane z okienka Manage Access Keys i wklejamy je analogicznie do Azure Storage Explorer.

<!--truncate-->

![Azure Storage Explorer - konfiguracja połączenia](images/image1.png)

Efektem jest podpięcie storage'a, w którym możemy zarządzać dyskami bez logowania do portalu Azure. Jednym z atutów tego narzędzia jest proste przenoszenie dysków .vhd z lokalnego urządzenia do chmury. Nie będę się rozpisywał ani zachwalał - zapraszam do testów. Jeśli masz pytania, zapraszam.

![Azure Storage Explorer - interfejs aplikacji](images/image2.png)
