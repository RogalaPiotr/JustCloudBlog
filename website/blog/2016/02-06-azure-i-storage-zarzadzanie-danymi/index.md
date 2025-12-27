---
slug: azure-i-storage-zarzadzanie-danymi
title: "Azure i Storage – zarządzanie danymi"
description: "Jak zarządzać danymi w Azure Storage? Porównanie narzędzi: Microsoft Azure Storage Explorer, Azure Explorer i Visual Studio."
authors: [progala]
date: "2016-02-06"
categories: 
  - "cloud-computing"
tags: 
  - "azure"
  - "azure-explorer"
  - "cloudxplorer"
  - "microsoft-azure-storage-explorer"
  - "storage"
  - "visual-studio"
keywords:
  - "azure storage"
  - "azure explorer"
  - "cloudxplorer"
  - "microsoft azure storage explorer"
  - "zarządzanie storage"
  - "visual studio azure"
hide_table_of_contents: true
---

Zarządzanie zawartością danych w blobach w Azure jest kluczowe do utrzymywania porządku. PowerShell jest jak najbardziej odpowiednim narzędziem do takich operacji, jednakże jeśli zależy Ci na czasie, aby przeglądnąć sto dysków, to PowerShell może stać się uciążliwy i mało pomocny. Poniżej przedstawię aplikacje, które mogą nam pomóc w szybkim i efektywnym zarządzaniu danymi przechowywanymi w Azure.

**Microsoft Azure Storage Explorer**, producent Microsoft: [http://storageexplorer.com/](http://storageexplorer.com/ "http://storageexplorer.com/")

Od wydania ulepszonej wersji mogę stwierdzić, że jest to najlepsze narzędzie do pracy z dyskami w chmurze. Możliwość zalogowania się danymi chmurowymi jest zaletą (w poprzedniej wersji nie było to dostępne), a następnie zobaczymy wszystkie storage i bloby w dostępnej subskrypcji. Minusem aplikacji jest długi czas ładowania danych i wyświetlania zawartości blobów.

![Azure Storage - Microsoft Azure Storage Explorer - grafika 1](images/image.png)

**Azure Explorer**, producent: Cerebrata: [http://www.cerebrata.com/products/azure-explorer/introduction](http://www.cerebrata.com/products/azure-explorer/introduction "http://www.cerebrata.com/products/azure-explorer/introduction")

<!--truncate-->

Azure Explorer jest darmową alternatywą programu CloudXplorer ([http://clumsyleaf.com/products/cloudxplorer](http://clumsyleaf.com/products/cloudxplorer "http://clumsyleaf.com/products/cloudxplorer")). W porównaniu do aplikacji Microsoftu nie możemy się zalogować danymi chmurowymi, tylko każdy storage trzeba dodać osobno poprzez podanie nazwy i access key. Przeglądanie zawartości blobów odbywa się bardzo szybko.

![Azure Storage - Azure Explorer - grafika 2](images/image-1.png)

**Visual Studio**, producent: Microsoft, wersja free Express: [https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs.aspx](https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs.aspx "https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs.aspx")

Być może nie jest to najlepsze rozwiązanie, ale chciałem przedstawić Visual Studio jako alternatywę dla programów, które są wyłącznie przeznaczone do przeglądania storage. Visual Studio wciąż dopracowuje wyświetlanie zasobów chmurowych, przez co zawsze może nas coś zaskoczyć po aktualizacji. W odróżnieniu od wspomnianych wyżej aplikacji Visual Studio wyświetli nam wszystkie utworzone zasoby w subskrypcji.

![Azure Storage - Visual Studio - grafika 3](images/image-2.png)

![Azure Storage - Visual Studio - grafika 4](images/image_thumb-3.png)

Podsumowując: wszystkie wyżej wspomniane aplikacje są przydatne do pracy z Azure i oferują podobne możliwości. Zapraszam do testów i wyrażania swojej opinii!
