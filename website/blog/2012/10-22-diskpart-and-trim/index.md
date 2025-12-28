---
slug: diskpart-and-trim
title: "diskpart and trim"
description: "Praca z partycjami na dysku za pomocą DISKPART. Konfiguracja SSD Trim."
authors: [progala]
date: "2012-10-22"
tags: 
  - "diskpart"
  - "ssd"
  - "trim"
keywords:
  - "diskpart"
  - "ssd"
  - "trim"
hide_table_of_contents: true
---

Słyszałem o przygotowaniu dysku SSD w odpowiedni sposób dla systemu, gdy używamy go jako "nasz" dysk systemowy. Dlaczego należy go odpowiednio przygotować? Odpowiedź jest prosta: dysk SSD różni się sposobem zapisu od dysku talerzowego. Dokładne informacje dotyczące struktury, budowy i różnic tych dysków znajdziemy na Wikipedii.

Jakiś czas temu zakupiłem dysk SSD "OCZ Vertex2 60GB" do swojego domowego serwera w celu zwiększenia wydajności i szybkości uruchamianych wirtualnych maszyn. 60 GB to niezbyt wiele, ale do środowiska testowego spokojnie wystarczy. Przed instalacją systemu Windows Server 2008 R2 dobrze jest odpowiednio przygotować nowy dysk. Podobno nowe serie systemów rodziny Microsoft Windows Vista, 7, Server 2008, Server 2008 R2 posiadają wbudowane automaty, które robią to automatycznie. Ponieważ miałem trochę czasu, postanowiłem to sprawdzić. Z mojego małego dochodzenia wynika, że align automatyczny nie jest taki sam, jaki powinien być stosowany do dysku SSD. Dlatego zalecam wcześniejsze przygotowanie dysku pod nowo instalowany system, aby uniknąć przypadkowej awarii i zwiększyć bezpieczeństwo.  
W opisie zaprezentuje, jak powinien wyglądać sposób formatowania dysku SSD, oraz jak na stałe ustawić funkcję TRIM w systemie.

Podczas uruchamiania instalacji systemu z płyty należy po ekranie powitalnym wcisnąć kombinację klawiszy:

**shift + F10**

Następnie wpisujemy komendę:

**diskpart**

<!--truncate-->

Kolejne polecenia diskpart:

**list disk** - wyświetlenie listy podpiętych dysków

**partition list** - wyświetlenie listy partycji dysku

**select disk 0** - wybranie dysku

**clean** - szybki format

**clean all** - dokładny i bardzo długi format dysku (ostrzegam trwa naprawdę długo)

**create partition primary align=1024 size=350** - tworzenie partycji podstawowej z offsetem o wielkości 1024 i wielkości 350 MB (350 MB dla ukrytej partycji BitLocker systemu). *Dlaczego 350 MB? Dla systemów W8 przeznaczono na tę partycję 350 MB, natomiast dla starszych wersji W7 jest to 100 MB. W zależności od tego, jaki system instalujesz, przydziel odpowiednią wielkość. W zasadzie nie ma to zbyt dużego znaczenia, jaką wielkość będzie miała ta partycja.*

**active** ustawienie ukrytej partycji jako aktywną.

**create partition primary align=1024 size=30720** - dlaczego align 1024? Ponieważ sektory na dysku SSD mają 1024 KB, ważne jest sprecyzowanie, aby offset miał 1024 KB.

**format fs=ntfs quick** szybki format w formacie ntfs.

**create partition primary align=1024** - ostatniej partycji nie musimy precyzować, gdyż pominięcie warunku size spowoduje zrobienie partycji z pozostałego miejsca, jakie jest na dysku.

**format fs=ntfs quick**

*Uwaga: wymieniona wyżej kolejność poleceń jest ważna ze względu na scenariusz tworzenia partycji.*

To byłby koniec. Wychodzimy z cmd wpisując polecenie exit i przechodzimy do dalszej instalacji systemu wskazując partycję do instalacji.

**TRIM Commands**

TRIM jest sposobem zapisu danych na dysku i wykorzystaniem pełnej mocy zapisu dysku SSD. W zasadzie nowe systemy mają wbudowany automat, który sam uruchamia TRIM po wykryciu dysku krzemowego. Dodatkowo opiszę, jak możemy na stałe włączyć tę funkcję przy użyciu linii komend. Po instalacji systemu uruchamiamy cmd z uprawnieniami administratora. Wpisujemy:

**fsutil behavior set disabledeletenotify 0**

- DisableDeleteNotify = 1 (Windows TRIM commands are disabled)
- DisableDeleteNotify = 0 (Windows TRIM commands are enabled)

Dodatkowo możemy również wyłączyć indeksowanie dysku w jego właściwościach. Chciałbym jeszcze dodać zrzuty ekranu do tych wszystkich ustawień i zrobię to jak najszybciej, gdyż jestem na wyjeździe. Powodzenia w konfiguracji!
