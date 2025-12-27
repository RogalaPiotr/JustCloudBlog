---
authors:
  - progala
date: "2021-06-03"
description: Kompletny przewodnik po tagowaniu zasobów w Azure - PowerShell, eksport CSV i automatyzacja. Skrypty do szybkiego zarządzania tagami w małych i dużych środowiskach.
keywords:
  - Azure
  - tagowanie
  - PowerShell
  - automatyzacja
  - csv
  - tagging
  - skrypty
  - raport
  - zasoby
  - Azure Tags
  - tags
  - resource groups
slug: tags-in-azure
tags:
  - csv
  - azure
  - tagowanie
  - powershell
  - automatyzacja
  - raport
  - tagging
  - tags
  - zasoby
  - skrypty
  - resource-groups
title: Przyspieszenie pracy nad tagowaniem zasobów za pomocą PowerShell - Tag raport Microsoft Azure
---

Kiedyś przygotowałem ten skrypt, żeby szybko móc otagować wiele zasobów wdrożonych na platformie Microsoft Azure. Jest kilka sposobów, aby to zrobić szybko i prosto; starałem się przygotować rozwiązanie uniwersalne, łatwe i bezpieczne w użyciu.

Dlatego postanowiłem zrobić jeden skrypt, który generuje wszystkie zasoby do pliku CSV. Drugi skrypt, na podstawie pliku CSV, pobiera dane zasobów i nadpisuje je na platformie.

Skrypty są dostępne na GitHub:

- [https://github.com/RogalaPiotr/JustCloudPublic/tree/master/azure-tags-report](https://github.com/RogalaPiotr/JustCloudPublic/tree/master/azure-tags-report)

Opis skryptów:

- GetAllTags.ps1 - generuje dwa pliki CSV: jeden dla Resource Group, a drugi dla Resources. Jest to istotne, ponieważ grupy i zasoby są rozdzielone, co pozwala tagować je niezależnie, bez wyszukiwania typów zasobów.
- SetTagsResourceGroups.ps1 - skrypt, który pobiera dane z pliku CSV zawierającego spis Resource Group z tagami do wdrożenia.
- SetTagsResources.ps1 - skrypt, który pobiera dane z pliku CSV, w którym zapisane są zasoby z tagami do wdrożenia.

<!--truncate-->

Taki podział daje nam:

1. Zapis stanu obecnego tagów zapisanych do pliku CSV. Jest to raport tagów, czyli obecny stan wdrożonych tagów.
2. Podział na grupy i zasoby.
3. Możliwość poprawiania tagów tylko na zasobach lub tylko na grupach zasobów.

Jak działają skrypty?

1. GetAllTags
  - Zapis do pliku odbywa się automatycznie w lokalizacji, w której wykonujemy skrypt, lub można użyć opcji -path, aby wskazać miejsce zapisu plików.
  - Nazwa pliku zawiera datę — jeśli plik istnieje, zostanie on nadpisany.
  - Skrypt sprawdza, czy jesteś zalogowany do Azure. Podczas wykonywania skryptu możesz podać parametr -tenantId, aby mieć pewność, że logujesz się do odpowiedniego Azure Directory, oraz -subId w celu wybrania subskrypcji.

2. SetTagsResourceGroups oraz SetTagsResources
  - Import danych z plików odbywa się automatycznie, na podstawie konwencji nazewniczej wygenerowanego wcześniej pliku. Skrypt importuje najnowszy plik CSV we wskazanym katalogu — można też podać ścieżkę poprzez parametr -path.
  - Tagi powinny być oddzielone przecinkami.
  - Tagi zapisane w pliku CSV występują jako pary "Key:Value" w osobnych kolumnach.
  - Skrypt pobiera wszystkie elementy z pliku CSV; następnie usuwa tagi w Microsoft Azure i nadpisuje je danymi z pliku CSV.
  - Jeśli nie chcesz modyfikować danego zasobu, wystarczy go usunąć z pliku CSV.
  - Skrypt działa w trybie równoległym, co pozwala na szybsze wprowadzanie zmian. Throttle dla zapisu tagów wynosi 5 — jest to wartość optymalna.
  - Skrypt sprawdza, czy jesteś zalogowany do Azure — możesz podać parametr -tenantId.
  - Jeśli chcesz wyczyścić tagi na zasobach, zostaw pustą komórkę lub wpisz "empty".
  - Testowanie wprowadzania tagów możesz wykonać poprzez umieszczenie w pliku CSV wyłącznie zasobów, które chcesz zmienić; pozostałe zasoby nie będą brane pod uwagę podczas wdrażania.

Poniżej przedstawiam przykład jak to działa na mojej subskrypcji.

Uruchomienie skryptu:

- GetAllTags.ps1

`Komenda: ./GetAllTags.ps1 -path /tags`

![Tagowanie zasobów w Azure - output skryptu GetAllTags](https://lh6.googleusercontent.com/g2uknxvVr-r8zuu_JNgHwzMEWXDS_lCkJkvP0w2nsaraF1iUI-PfsBGgFDAMnSqGiPEN-oG5sg0RR5aQWAqnixT1BRO0RBcsIWEpJ48Jfztk-ioLi0NlKg-fFfHPUxjXg60DReVG)

Na printscreenie możesz zauważyć output z informacjami, jakie generowane są przez skrypt.

- Czy jesteś zalogowany, jeśli nie, to poprosi Cię o zalogowanie się
- Ilość znalezionych grup zasobów oraz zasobów
- Informacja, gdzie i jakie pliki są tworzone
- Lista zasobów

Pliki CSV wyglądają następująco:

- Resource Group

![Tagowanie zasobów w Azure - CSV Resource Group](https://lh3.googleusercontent.com/XiatuhcE3vx4Lr6g5rkz-JP48TjhJ-ydCdwySuAGgBccaVpVZKD9CfPF5xVpIuzU6IFM7PNj939dMpEviYAR3287SCr6F5y2cM4pu1i8500uzKNdRNSh16t8dX9GSosf7J2oDJFa)

- Resources

![Tagowanie zasobów w Azure - CSV Resources](https://lh4.googleusercontent.com/m5u5NLpGw8DNyroSByMny-rIZsH11sZMs4tgFMixm_Lepfn0rjNf4XqLET6MvsT3YnK48PesD9GJQUkDtWJIuDKsUh7IolWD7BCDfHSQN4Ug_f6qdWpuPF2ns-8vRmnlRNtWptbp)

Poniżej przedstawię edycję tagów dla pliku z zasobami.

_Uwaga! Jeśli chcesz zachować kopię obecnego stanu, zabezpiecz wygenerowany plik lub zmień jego nazwę na zupełnie inną._

Poprawiony plik wygląda następująco. Zauważ, że wypełniłem tagi dla wszystkich obiektów oraz dodałem nowy tag: Test:Key, aby pokazać, jak wygląda przypisywanie wielu tagów.

![Edycja tagów](https://lh6.googleusercontent.com/q4_FhHhAden4hD-gq6IJjhVRras8g-lAgwqCo4evhui6_dSF1wjIt6rZwHV23YbOWIuvlJihRbleddX46VkkUudBByLuX_lfGlrab1_U8Ya14-pdg9Xhrqd7hdzoQqpsxwaseZle)

Wynik skryptu z wykonanymi zmianami:

`Komenda: ./SetTagsResources.ps1 -path /tags`

![Wynik wykonania skryptu](https://lh4.googleusercontent.com/49zIzivJeCzwtGRSBFcnzG4X0nr3nbtc1dxgJag7q3_tocRbvBcgu0m_DUf11179BBt1GWpHQalOmsyis3CDnEX3xCpgt-1w1Ic_-bR8KFREpnCOP-aXCxmAjefbS7mU7qJbRvkL)

Efekt zmian w Portalu Azure:

![Efekt w Portalu Azure](https://lh4.googleusercontent.com/O0XGlppGQzJYWYNOJcfKkxTo0ZcT4Hstc46TWolZUIr4Bi80Tq8P60Z1IwlMDgU-vwQ4yLvuj1cYWb9RYy67Z4BDPvFGjx704b9ZYUVbGNb9EFUatChC8Vv3YnHQi4g_1Lr1ciL2)

Skrypt można dostosować do swoich celów tak, aby działał na przykład dla wielu subskrypcji. Jest wiele opcji customizacji tego skryptu, które celowo pominąłem. Skrypty działają modułowo więc można ich łatwo użyć z innym skryptem, a reszta zostanie przygotowana i wdrożona na podstawie wprowadzonych danych z pliku.

Zapraszam do pozostawienia komentarza!
