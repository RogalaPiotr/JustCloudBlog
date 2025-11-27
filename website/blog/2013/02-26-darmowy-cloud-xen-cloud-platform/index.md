---
authors:
  - progala
date: "2013-02-26"
description: Xen Cloud Platform darmowy wirtualizator dla własnej chmury prywatnej. Sprawdź moje pierwsze wrażenia z Xen Server.
hide_table_of_contents: true
keywords:
  - ati
  - citrix
  - gpu-pass-thru
  - nvidia
  - xen
  - xenserver
slug: darmowy-cloud-xen-cloud-platform
tags:
  - ati
  - citrix
  - gpu-pass-thru
  - nvidia
  - xen
  - xenserver
title: Darmowy Cloud? - Xen Cloud Platform
---

Miałem okazje przetestować XCP na swoim sprzęcie. Instalacja i działanie nie odbiega klasycznego "Xen Server". Zarządzanie z konsoli XenCenter też dobrze działa. Dla testu postawiłem kilka hostów Win7 i działały bez problemów.

<!-- truncate -->

Jedynym problemem, który mnie dotknął to brak możliwość współdzielenia procesora GPU. Akurat mój jest nie rekomendowany. W zasadzie mam zwykłą kartę graficzną nVidia GTX 650 dlatego mnie to za bardzo nie rozczarowało, ale mimo wszystko muszę stwierdzić że szkoda. XEN nastawił się zdecydowanie na dedykowane karty z serii Nvidia Quadro i ATI FirePro. Próbowałem szukać rozwiązań, aby obejść tę przeszkodę, ale bez skutecznie. Kernel-Xen zdecydowanie odmawia instalacji sterowników nVidii. Udało mi się znaleźć opis dotyczący instalacji driverów naprzemiennie dla Kernel-a podstawowego i Kernela-Xen lecz też bez skuteczne. Polegało to na rozpoczęciu instalacji na Kernelu-Xen a później kończenie instalacji na podstawowym Kernelu podobno dzięki temu moglibyśmy oszukać system i wcisnąć mu sterownik dla nie rekomendowanej karty graficznej. Opis był aktualizowany ostatni raz w połowie 2010 roku więc nie dziwi mnie to, że nie chce działać ze sterownikami mojej karty graficznej. Dla osób z kartą graficzną ATI mógłbym zaprosić do testów ;). Na stornie Wiki Xen można znaleźć przetestowane chipsety ATI, z którymi działa GPU pass-thru.W XCP dodano i rozbudowano kilka następujących funkcjonalności:

- VM lifecycle: live snapshots, checkpoint, migration
- Resource pools: flexible storage and networking
- Event tracking: progress, notification
- Upgrade and patching capabilities
- Real-time performance monitoring and alerting
- Built-in support and templates for Windows and Linux guests
- Open vSwitch support built-in
- Storage XenMotion® live Migration (cross-pool migration, VDI migration)

![XenPanda](images/XenPanda.jpeg)

Wybaczcie, ale nie będę tego tłumaczył ponieważ dużo czytelniej się patrzy na nazwy angielskie. Wszystkie informacje na temat i plik .iso XCP są tutaj: [http://xen.org/products/cloudxen.html](http://xen.org/products/cloudxen.html "http://xen.org/products/cloudxen.html"). Gdy wirtualizujemy hosty linuxowe bądź serwerowe MS myślę, że przy mało skomplikowanych infrastrukturach takie rozwiązanie Open-Source, które jest Freeware w zupełności wystarczy względem XenServer Citrix-owego. W wypadku gdy nastawiamy się na korzystanie z "GPU pass-thru" czy "Live memory snapshot and revert" możemy tego korzystać za free w wersji XCP. W wersji Citrixowej musimy zakupić licencje co najmniej Enterprise. Zapraszam do pytań, testowania i komentowania.