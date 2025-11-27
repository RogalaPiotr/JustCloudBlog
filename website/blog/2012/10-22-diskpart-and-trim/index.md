---
slug: diskpart-and-trim
title: "diskpart and trim"
description: "Praca z partycjami na dysku za pomocą DISKPART. Konfiguracja SSD Trim za pomocą diskaprt."
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

Słyszałem o przygotowaniu dysku SSD w odpowiedni sposób dla systemu, gdy używamy go jako "nasz" dysk systemowy. Dlaczego należy go odpowiednio przygotować? Odpowiedź jest prosta, dysk SSD różni się sposobem zapisu niż było to w dotychczasowym dysku talerzowym. Dokładnych informacji dotyczących struktury, budowy i różnic tych dysków znajdziemy na Wikipedii.

Jakiś czas temu zakupiłem dysk SSD "OCZ Vertex2 60gb" do swojego domowego serwera w celu zwiększenia wydajności i szybkość uruchamianych wirtualnych maszyn. 60gb nie jest to zbyt wiele, ale do środowiska testowego spokojnie wystarcza. Przed instalacją systemu Windows: Server 2008R2 dobrze jest aby odpowiednio przygotować nowy dysk. Podobno nowe serie systemów rodziny Microsoft Windows Vista / 7 /Server 2008 / Server 2008R2 posiada wbudowane automaty, które robią to automatycznie. Ponieważ miałem trochę czasu postanowiłem to sprawdzić. Z mojego małego dochodzenia wynika, że align automatyczny nie jest taki sam jaki powinien być stosowany do dysku SSD. Dlatego zalecam wcześniejsze przygotowanie dysku pod nowo instalowany system aby uniknąć przypadkowej awarii i zwiększenia bezpieczeństwa.  
W opisie zaprezentuje jak powinien wyglądać sposób formatowania dysku SSD, dodatkowo jak na stałe ustawić funkcję TRIM w systemie.

Podczas gdy uruchamiamy instalację systemu z płyty należy po ekranie powitalnym wcisnąć kombinację klawiszy:

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

**create partition primary align=1024 size=350** tworzenie partycji podstawowej z offset'em o wielkości 1024 i o wielkości 350mb (350mb dla ukrytej partycji BitLocker-owej systemu) \*dlaczego 350mb? dla systemów W8 przeznaczono na tę partycję 350mb natomiast dla starszych wersji W7 jest 100mb - w zależności jaki system instalujesz przydziel odpowiednią wielkość - w zasadzie tak naprawdę nie ma to zbyt dużego znaczenia jaką wielkość będzie miała ta partycja.

**active** ustawienie ukrytej partycji jako aktywną.

**create partition primary align=1024 size=30720** dlaczego align 1024? - ponieważ sektory na dysku SSD mają 1024kb ważne jest sprecyzowanie, aby offset posiadał 1024kb.

**format fs=ntfs quick** szybki format w formacie ntfs.

**create partition primary align=1024** ostatniej partycji nie musimy precyzować gdyż pominięcie warunku size spowoduje zrobienie partycji z pozostałego miejsca jakie jest na dysku.

**format fs=ntfs quick**

*Uwaga wyżej wymieniona kolejność poleceń jest ważna ze względu na scenriusz tworzenia partycji*

To byłby koniec, wychodzimy z cmd wpisując polecenie exit i przechodzimy do dalszej instalacji systemu wskazując tylko partycję do instalacji.

**TRIM Commands**

TRIM jest sposobem zapisu danych na dysku i wykorzystaniem pełnej mocy zapisu dysku SSD. W zasadzie nowe systemy mają wbudowany automat, który sam uruchamia TRIM po wykryciu dysku krzemowego. Dodatkowo opiszę jak możemy sami na stałe włączyć tę funkcję przy użyciu lini komend. Po instalacji systemu uruchamiamy cmd z uprawnieniami administratora. Wpisujemy:

**fsutil behavior set disabledeletenotify 0**

DisableDeleteNotify = 1 (Windows TRIM commands are disabled) DisableDeleteNotify = 0 (Windows TRIM commands are enabled)

Dodatkowo możemy również wyłączyć index-owanie dysku w jego właściwościach. Chciałbym jeszcze dodać screeny do tych wszystkich ustawień i zrobię to w najszybszym czasie jak się da gdyż jestem na wyjeździe. Miłej konfiguracji.
