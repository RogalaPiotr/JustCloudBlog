---
slug: instalacja-i-konfiguracja-active-directory-domain-services-w-windows-server-2012
title: "Instalacja i konfiguracja Active Directory Domain Services w Windows Server 2012"
description: "Instalacja i konfiguracja Active Directory Domain Services w Windows Server 2012. Sprawdź jak to dobrze to skonfigurować."
authors: [progala]
date: "2012-12-02"
tags: 
  - "active-directory"
  - "ad-ds"
  - "instalacja"
  - "konfiguracja"
  - "windows-server-2012"
keywords:
  - "active-directory"
  - "ad-ds"
  - "instalacja"
  - "konfiguracja"
  - "windows-server-2012"
hide_table_of_contents: true
---

W nowym Windows Server 2012 spotkała mnie mała niespodzianka. Po wpisaniu dotychczas używanej komendy "dcpromo" zostaje wyświetlona informacja o tym, że instalacja roli AD DS została przeniesiona w inne miejsce w Server Manager-a.

![Photobucket](images/capture_025_01122012_222924.jpg)

![Photobucket](images/capture_026_01122012_222929.jpg)

<!--truncate-->

Instalacja

Przechodzimy więc do Server Manager-a i wybieramy opcję "Add roles and features":

![Photobucket](images/capture_027_01122012_222945.jpg)]

Kolejno przechodzimy przez dwa okienka, które nie mają większego znaczenia dla naszej konfiguracji:

![Photobucket](images/capture_028_01122012_222952.jpg)

![Photobucket](images/capture_029_01122012_222955.jpg)

Jak widzimy w nowym Windows Server 2012 mamy opcję wyboru serwera, na którym chcielibyśmy zainstalować usługi. Jest to bardzo interesujące rozwiązanie dla rozwiniętej firmy, ponieważ możemy używać jednego głównego serwera, z którego będziemy instalować i konfigurować wszystkie usługi. W moim przypadku jest to pierwszy serwer dlatego nie mamy zbyt dużego wyboru:

![Photobucket](images/capture_030_01122012_222958.jpg)

Z listy dostępnych ról wybieramy "Active Directory Domain Services":

![Photobucket](images/capture_032_01122012_223011.jpg)

Po zaznaczeni AD DS wyskoczy okienko z informacją o doinstalowaniu dodatkowych potrzebnych ról(potwierdzamy je):

![Photobucket](images/capture_031_01122012_223004.jpg)

W kolejnych krokach klikamy NEXT, aż do podsumowania konfiguracji:

![Photobucket](images/capture_033_01122012_223015.jpg)

![Photobucket](images/capture_034_01122012_223020.jpg)

![Photobucket](images/capture_035_01122012_223022.jpg)

![Photobucket](images/capture_037_01122012_223117.jpg)

Po udanej instalacji należy ponownie uruchomić komputer.

Konfiguracja

Po instalacji przechodzimy do Server Manager-a wybierając po lewej stronie AD DS. Następnie klikamy na link "More...", który znajduje się na żółtym pasku:

![Photobucket](images/capture_038_01122012_223214.jpg)

Otworzy nam się nowe okienko, w którym należy wybrać "Promote this server to a domain...":

![Photobucket](images/capture_039_01122012_223221.jpg)

Następne okna dotyczą ściśle tworzenia domeny tak jak było to w poprzednich systemach Windows Server. W moim przypadku jest tworzona nowa domena dlatego na początek wpisujemy nazwę tworzonej domeny:

![Photobucket](images/capture_040_01122012_223238.jpg)

W kolejnym etapie wybieramy właściwości domeny. Może ona współpracować ze starszymi kontrolerami domen(od AD w Windows Server 2003). Poniżej wprowadzamy hasło dostępowe:

![Photobucket](images/capture_041_01122012_223428.jpg)

Warto zauważyć, że instalacja Active Directory wykryła brak usługi DNS na naszym serwerze dlatego zostanie automatycznie doinstalowana:

![Photobucket](images/capture_042_01122012_223441.jpg)

W kolejnym kroku potwierdzamy i klikamy NEXT:

![Photobucket](images/capture_043_01122012_223510.jpg)

![Photobucket](images/capture_044_01122012_223519.jpg)

Kolejne dwa kroki przedstawiają podsumowanie i konfigurowanie usługi Active Directory Domain Services wraz z usługą DNS:

![Photobucket](images/capture_045_01122012_223526.jpg)

![Photobucket](images/capture_046_01122012_223618.jpg)

Potwierdzamy lub czekamy na ponowne uruchomienie:

![Photobucket](images/capture_049_01122012_224151.jpg)

W tym momencie została poprawnie skonfigurowana nasza domena. W kolejnym kroku przedstawię jeszcze dodawanie nowego użytkownika i grupy.

Dodawanie użytkownika i grupy

W Windows Server 2012 wygląd AD DS został nieco zmieniony ze względu na integrację panelu z PowerShell-em. Myślę, że to bardzo dobry krok w przód, ponieważ wszystko co robimy(klikamy) możemy podejrzeć w na dole okna klikając na "Windows PowerShell History". Umożliwi to nam gromadzenie w formie skryptowej naszych działań i późniejsze wykonywanie pracy poprzez zwykłe wklejanie poleceń w PowerShell. Na początku wybierzmy "Active Directory Administrative Center" ze Startu:

![Photobucket](images/capture_001_01122012_231131.jpg)

Łatwo zauważyć, że okno "Active Directory Administrative Center" jest przejrzyste i czytelne:

![Photobucket](images/capture_002_01122012_231147.jpg)

Przechodzimy do naszej domeny po lewej stronie. Z listy możemy wybrać "User" prawym klawiszem myszy i wybierając nowego użytkownika lub grupę:

![Photobucket](images/capture_007_01122012_231336.jpg)

Samo dodawanie użytkownika i grupy nie zmieniło się szczególnie poza wyglądem okna:

![Photobucket](images/capture_006_01122012_231318.jpg

![Photobucket](images/capture_008_01122012_231351.jpg)

Na końcu możemy zobaczyć jak to wszystko wygląda od strony PowerShell-a, o którym wspomniałem na początku. Na screen-ie przedstawione jest usunięcie i dodanie ponownie tej samej grupy dla użytkowników:

![Photobucket](images/capture_001_02122012_133020.jpg)

Wklejając te polecenia do PowerShell-a zrobimy to samo bez konieczności wchodzenia do panelu AD. Dzięki takiemu rozwiązaniu możemy ćwiczyć pisanie poleceń do PowerShell-a 🙂.