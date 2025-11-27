---
slug: publikacja-zdalnych-aplikacji-remoteapp-windows-server-2012
title: "Publikacja zdalnych aplikacji - RemoteApp, Windows Server 2012"
description: "Publikacja zdalnych aplikacji RemoteApp Windows Server 2012. Pełna konfiguracja krok po kroku."
authors: [progala]
date: "2012-12-05"
tags: 
  - "publish-application"
  - "remoteapp"
  - "ws2012"
keywords:
  - "publish-application"
  - "remoteapp"
  - "ws2012"
hide_table_of_contents: true
---

Dzisiaj przedstawię jak należy poprawnie udostępnić zdalne aplikacje w Windows Server 2012. Udostępnianie wirtualnych maszyn i zdalnych aplikacji zostało rozbudowane dlatego warto zapoznać się wstępną konfiguracją. Na początku jak zawsze rozpoczynamy w Server Manager i dodajemy nową rolę, a następnie w tym momencie użyjemy nowych udogodnień do tworzenia zdalnych usług. Wybieramy opcję "Role Desktop Services installation", a w kolejnym kroku wybieramy: "Standard deployment"

![](images/01.jpg)

<!--truncate-->

![](images/02.jpg)

Przy tym kroku musimy się trochę bardziej zastanowić nad tym co będziemy chcieli udostępniać. W moim przypadku przedstawię scenariusz dla udostępniania samych zdalnych aplikacji(RemoteApp). Jeśli chcielibyśmy udostępniać wirtualne środowiska i zdalne aplikacje należało by wybrać opcję: "Virtual machine-based desktop deployment". W naszym przypadku wybieramy "Session-based desktop deployment" oraz klikamy dwa razy NEXT:

![](images/03.jpg)

W tym momencie możemy wybrać serwer, na którym zainstalujemy usługę RD Connection Broker. Jeśli będziemy mieli połączenie z innymi serwerami w sieci będziemy mogli go wybrać z listy po lewej stronie bez konieczności logowania się do tamtego serwera. Ze względu na to, że ja konfiguruję to na jednym serwerze w każdym momencie wybieram ten sam serwer. Tak na marginesie, RD Connection Brokera zaleca się mieć na osobnym serwerze ze względu na rozładowanie zapytań do serwera. W kolejnych krokach wybieramy serwery dla RD Web Access i RD Session Host:

![](images/04.jpg)

![](images/05.jpg)

![](images/07.jpg)

Potwierdzamy cały proces konfiguracji i instalujemy nasze nowe usługi na serwerze. Wszystko powinno się zakończyć w taki sposób jak poniżej:

![](images/08.jpg)

Po udanym restarcie naszego serwera możemy przystąpić do publikacji zdalnych aplikacji, przechodzimy do Server Manager-a i wybieramy pozycję Remote Desktop Service z lewej strony. Po obejrzeniu panelu jaki zostanie nam wyświetlony możemy wybrać pozycję "Create session collections":

![](images/09.jpg)

W nowym oknie dokonujemy konfiguracji kolekcji w jakiej zostaną utworzone zdalne aplikacje. Możemy wybrać dowolną nazwę kolekcji:

![](images/10.jpg)

W kolejnym kroku wybieramy serwer, który będzie źródłem udostępniania zdalnych aplikacji:

![](images/11.jpg)

Wybieramy grupę użytkowników, którzy otrzymają dostęp do aplikacji, domyślnie jest to "Domain Users", możemy oczywiście zmienić na dowolną inną grupę:

![](images/12.jpg)

Możemy dodatkowo określić przestrzeń na dysku dla aplikacji, aby użytkownicy mieli wspólne miejsce do przetrzymywania plików(tego jeszcze dokładnie nie sprawdziłem, mam nadzieję, że nie podaje błędnych informacji). Po określeniu ilości miejsca dla tego folderu przechodzimy do podsumowania i konfigurowania kolekcji:

![](images/13.jpg)

![](images/14.jpg)

Gdy zostanie utworzona kolekcja przechodzimy do niej w panelu "Remote Desktop Session > Collections > RemoteApp", wybieramy opcję "Publish RemoteApp Programs":

![](images/15-300x207.jpg

Kolejne kroki przypominają konfigurację z poprzedniego Windows Server 2008. Wybieramy aplikację, która ma zostać publikowana. Następnie klikamy NEXT, aż do podsumowania konfiguracji:

![](images/16.jpg)

![](images/18.jpg)

Aby sprawdzić czy działają nasze udostępnione aplikacje należy wejść na stronę: https://nazwa_serwera.domena/rdweb . Ciekawostką jaką zauważyłem jest możliwość uruchomienia strony Web Access z innych przeglądarek niż IE. Gdy konfigurowałem zdalne aplikacje pod Windows Server 2008R2 Web Access nie działało pod Chrome / FF itd., a w WS 2012 jak widać w chrome zadziałał bez problemu 🙂 :

![](images/20.jpg)