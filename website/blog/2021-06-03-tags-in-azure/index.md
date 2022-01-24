---
slug: tags-in-azure
title: "Przyspieszenie pracy nad tagowaniem zasobów za pomocą PowerShell - Tag raport Microsoft Azure"
date: "2021-06-03"
authors: [progala]
tags: 
  - "azutomation"
  - "csv"
  - "microsoft-azure"
  - "raport"
  - "report"
  - "tag"
  - "tagging"
  - "tags"
---

Kiedyś przygotowałem ten skrypt żeby szybko móc otagować wiele zasobów wdrożonych na platformie Microsoft Azure. Jest wiele możliwości jak to zrobić szybko, prosto, ale starałem się zrobić uniwersalne rozwiązanie będące łatwe oraz bezpieczne w użyciu. Dlatego postanowiłem zrobić jeden skrypt, który generuje nam wszystkie zasoby do pliku CSV. A drugi skrypt na podstawie pliku CSV będzie pobierał z niego dane zasobów i nadpisywał je na platformie.

Skrypty są dostępne na GitHub:

- [https://github.com/RogalaPiotr/JustCloudPublic/tree/master/azure-tags-report](https://github.com/RogalaPiotr/JustCloudPublic/tree/master/azure-tags-report)

Opis skryptów:

- GetAllTags.ps1- generuje dwa pliki CSV. Jeden plik dla Resource Group, a drugi plik dla Resources. Jest to istotne ponieważ mamy oddzielone grupy i możemy inaczej tagować grupy od zasobów bez szukania typów zasobów.
- SetTagsResourceGroups.ps1 - skrypt, który pobiera dane z pliku CSV gdzie jest spis Resource Group z tagami do wdrożenia.
- SetTagsResources.ps1- skrypt, który pobiera dane z pliku CSV gdzie zapisane mamy zasoby z tagami do wdrożenia.

<!--truncate-->

Taki podział daje nam:

1. Zapis stanu obecnego tagów zapisanych do pliku CSV. Jest to raport tagów czyli obecny stan wdrożony tagów.
2. Podział na grupy i zasoby.
3. Możliwość poprawiania tagów tylko na zasobach lub tylko na grupach zasobów.

Jak działają skrypty?

1. GetAllTags
    1. Zapis do pliku odbywa się automatycznie do lokalizacji gdzie wykonujemy skrypt lub możemy użyć opcji -path gdzie mają być zapisane pliki.
    2. Nazwa pliku zawiera datę, jeśli plik istnieje zostanie on nadpisany.
    3. Skrypt sprawdza czy jesteś zalogowany do Azure. Podczas wykonywania skryptu możesz podać parametr -tenantId, aby mieć pewność że logujesz się do odpowiedniego Azure Directory i -subId w celu wybrania subskrypcji.
2. SetTagsResourceGroups oraz SetTagsResources
    1. Import danych z plików odbywa się automatycznie na podstawie konwencji nazewniczej wygenerowanego wcześniej pliku. Skrypt importuje najnowszy plik CSV we wskazanym katalogu. Istnieje podanie ścieżki poprzez parametr -path.
    2. Tagi powinny być oddzielone między sobą przecinkami.
    3. Tagi zapisane w pliku CSV działają na zasadzie par “Key:Value” w osobnych kolumnach.
    4. Skrypt pobiera wszystkie elementy z pliku CSV. Następnie skrypt usuwa tagi w Microsoft Azure następnie wprowadzony z pliku CSV.
    5. Jeśli nie chcemy danego zasobu ruszać, wystarczy go usunąć z pliku CSV.
    6. Skrypt działa w trybie parallel co pozwala na szybsze wprowadzanie zmian. Throttle dla zapisu tagów wynosi 5, pamiętaj, że jest to optymalna wartość.
    7. Skrypt sprawdza czy jesteś zalogowany do Azure. Podczas wykonywania skryptu możesz podać parametr -tenantId.
    8. Jeśli chcesz wyczyścić tagi na zasobach wystarczy że zostawisz pustą komórkę lub wpiszesz “empty”.
    9. Wprowadzanie tagów możemy testować wprowadzając w pliku CSV tylko ten zasób który chcemy zmienić. Reszta zasobów nie będzie brana pod uwagę podczas wdrażania tagów.

Poniżej przedstawiam przykład jak to działa na mojej subskrypcji.

Uruchomienie skryptu:

- GetAllTags.ps1

`Komenda: ./GetAllTags.ps1 -path /tags`

![](https://lh6.googleusercontent.com/g2uknxvVr-r8zuu_JNgHwzMEWXDS_lCkJkvP0w2nsaraF1iUI-PfsBGgFDAMnSqGiPEN-oG5sg0RR5aQWAqnixT1BRO0RBcsIWEpJ48Jfztk-ioLi0NlKg-fFfHPUxjXg60DReVG)

Na printscreenie możesz zauważyć output z informacjami jakie generowane są przez skrypt.

- Czy jesteś zalogowany, jeśli nie to poprosi Cię o zalogowanie się
- Ilość znalezionych grup zasobów oraz zasobów
- Informacja gdzie i jakie pliki są tworzone
- Lista zasobów

Pliki CSV wyglądają następująco:

- Resource Group

![](https://lh3.googleusercontent.com/XiatuhcE3vx4Lr6g5rkz-JP48TjhJ-ydCdwySuAGgBccaVpVZKD9CfPF5xVpIuzU6IFM7PNj939dMpEviYAR3287SCr6F5y2cM4pu1i8500uzKNdRNSh16t8dX9GSosf7J2oDJFa)

- Resources

![](https://lh4.googleusercontent.com/m5u5NLpGw8DNyroSByMny-rIZsH11sZMs4tgFMixm_Lepfn0rjNf4XqLET6MvsT3YnK48PesD9GJQUkDtWJIuDKsUh7IolWD7BCDfHSQN4Ug_f6qdWpuPF2ns-8vRmnlRNtWptbp)

Poniżej przedstawię edycję tagów dla pliku z zasobami.

_Uwaga! Jeśli chcesz zachować kopię obecnego stanu, zabezpiecz wygenerowany plik lub zmień jego nazwę na zupełnie inną._ 

Poprawiony plik wygląda następująco. Zauważ, że wypełniłem tagi dla wszystkich obiektów oraz dodałem nowy tag: Test:Key, aby pokazać jak wygląda przypisywanie wielu tagów.

![](https://lh6.googleusercontent.com/q4_FhHhAden4hD-gq6IJjhVRras8g-lAgwqCo4evhui6_dSF1wjIt6rZwHV23YbOWIuvlJihRbleddX46VkkUudBByLuX_lfGlrab1_U8Ya14-pdg9Xhrqd7hdzoQqpsxwaseZle)

Wynik skryptu z wykonanymi zmianami:

`Komenda: ./SetTagsResources.ps1 -path /tags`

![](https://lh4.googleusercontent.com/49zIzivJeCzwtGRSBFcnzG4X0nr3nbtc1dxgJag7q3_tocRbvBcgu0m_DUf11179BBt1GWpHQalOmsyis3CDnEX3xCpgt-1w1Ic_-bR8KFREpnCOP-aXCxmAjefbS7mU7qJbRvkL)

Efekt zmian w Portalu Azure:

![](https://lh4.googleusercontent.com/O0XGlppGQzJYWYNOJcfKkxTo0ZcT4Hstc46TWolZUIr4Bi80Tq8P60Z1IwlMDgU-vwQ4yLvuj1cYWb9RYy67Z4BDPvFGjx704b9ZYUVbGNb9EFUatChC8Vv3YnHQi4g_1Lr1ciL2)

Skrypt można dostosować do swoich celów tak, aby działał na przykład dla wielu subskrypcji. Jest wiele opcji customizacji tego skryptu, które celowo pominąłem. Skrypty działają modułowo więc można ich łatwo użyć z innym skryptem, a reszta zostanie przygotowana i wdrożona na podstawie wprowadzonych danych z pliku.

Zapraszam do pozostawienia komentarza!
