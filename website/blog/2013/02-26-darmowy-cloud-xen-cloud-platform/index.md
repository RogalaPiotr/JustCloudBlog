---
authors:
  - progala
date: "2013-02-26"
description: Xen Cloud Platform to darmowy wirtualizator dla własnej chmury prywatnej. Sprawdź moje pierwsze wrażenia z XenServer.
hide_table_of_contents: true
keywords:
  - ATI
  - Citrix
  - GPU Pass-Thru
  - Nvidia
  - Xen
  - XenServer
slug: darmowy-cloud-xen-cloud-platform
tags:
  - ATI
  - Citrix
  - GPU Pass-Thru
  - Nvidia
  - Xen
  - XenServer
title: Darmowy Cloud? - Xen Cloud Platform
---

Miałem okazję przetestować XCP na swoim sprzęcie. Instalacja i działanie nie odbiega od klasycznego "XenServer". Zarządzanie z konsoli XenCenter też dobrze działa. Dla testu postawiłem kilka hostów Win7 i działały bez problemów.

<!-- truncate -->

Jedynym problemem, który mnie dotknął, to brak możliwości współdzielenia procesora GPU. Akurat mój jest nierekomendowany. W zasadzie mam zwykłą kartę graficzną nVidia GTX 650, dlatego mnie to za bardzo nie rozczarowało, ale mimo wszystko muszę stwierdzić, że szkoda. XEN nastawił się zdecydowanie na dedykowane karty z serii Nvidia Quadro i ATI FirePro. Próbowałem szukać rozwiązań, aby obejść tę przeszkodę, ale bezskutecznie. Kernel-Xen zdecydowanie odmawia instalacji sterowników nVidii. Udało mi się znaleźć opis dotyczący instalacji driverów naprzemiennie dla Kernel-a podstawowego i Kernela-Xen, lecz też bezskutecznie. Polegało to na rozpoczęciu instalacji na Kernelu-Xen, a później kończenie instalacji na podstawowym Kernelu - podobno dzięki temu moglibyśmy oszukać system i wcisnąć mu sterownik dla nierekomendowanej karty graficznej. Opis był aktualizowany ostatni raz w połowie 2010 roku, więc nie dziwi mnie to, że nie chce działać ze sterownikami mojej karty graficznej. Dla osób z kartą graficzną ATI mógłbym zaprosić do testów 😉 Na stronie Wiki Xen można znaleźć przetestowane chipsety ATI, z którymi działa GPU pass-thru.

W XCP dodano i rozbudowano kilka następujących funkcjonalności:

- VM lifecycle: live snapshots, checkpoint, migration
- Resource pools: flexible storage and networking
- Event tracking: progress, notification
- Upgrade and patching capabilities
- Real-time performance monitoring and alerting
- Built-in support and templates for Windows and Linux guests
- Open vSwitch support built-in
- Storage XenMotion® live Migration (cross-pool migration, VDI migration)

![Xen Cloud Platform - grafika 1](images/XenPanda.jpeg)

Wybaczcie, ale nie będę tego tłumaczył, ponieważ dużo czytelniej się patrzy na nazwy angielskie. Wszystkie informacje na temat i plik .iso XCP są tutaj: [http://xen.org/products/cloudxen.html](http://xen.org/products/cloudxen.html). Gdy wirtualizujemy hosty linuxowe bądź serwerowe MS, myślę, że przy mało skomplikowanych infrastrukturach takie rozwiązanie Open-Source, które jest Freeware, w zupełności wystarczy względem XenServer Citrix'owego. W wypadku gdy nastawiamy się na korzystanie z "GPU pass-thru" czy "Live memory snapshot and revert", możemy tego korzystać za free w wersji XCP. W wersji Citrix'owej musimy zakupić licencje co najmniej Enterprise. Zapraszam do pytań, testowania i komentowania.