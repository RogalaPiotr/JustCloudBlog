---
authors:
  - progala
date: "2013-06-06"
description: Nowe funkcje Hyper-V w Windows Server 2012 R2 - dowiedz się, co nowego w systemie od firmy Microsoft.
hide_table_of_contents: true
keywords:
  - Hyper-V
  - Windows Server 2012
  - Windows Server 2012 R2
  - Wirtualizacja
slug: nowe-funkcje-hyper-v-w-windows-server-2012-r
tags:
  - Hyper-V
  - Windows Server 2012
  - Windows Server 2012 R2
  - Wirtualizacja
title: Nowe funkcje Hyper-V w Windows Server 2012 R2
---

W nowych systemach Windows Server 2012 zauważyliśmy dużo zmian dotyczących Hyper-V, oraz nowością jest dodanie go do Windows 8 jako klient dla tworzenia VM. Jest to duży krok w przód, jeśli chodzi o podejście Microsoft-u do wirtualizacji. Jak widać, nie jest to koniec wprowadzania zmian dla Hyper-V. W nowym wydaniu Server 2012 R2 dostaniemy kolejne nowe funkcje.

<!-- truncate -->

**1. Wirtualne maszyny drugiej generacji** — jest to funkcja, która dotyczy wyłącznie systemów Windows 8 i Windows Server 2012 x64(jak i nadchodzących wersji). Zamiana dotyczy boot-owania systemów, który może zostać skonfigurowany z wirtualnego dyski SCSI i kart sieciowych. Dodatkowo maszyny tworzone w nowym rozwiązaniu pozbawione będą dotychczasowego „klasycznego” BIOS-u, a zastąpiony zostanie UEFI.

**2. Pełny support dla zdalnego połączenia** — nowa wersja Hyper-V będzie mieć pełne wsparcie dla zdalnego pulpit maszyn wirtualnych. Do tej pory, gdy pojawiał się problem z siecią została tracona komunikacja z VM. Obecne rozwiązanie będzie oparte o moduł, który będzie umożliwiał połączenie bezpośrednio do maszyny.

**3. Automatyczna aktywacja dla VM –** ciekawe rozwiązanie, a zarazem bardzo przydatne do aktywacji systemów na maszynach wirtualnych. Jest to funkcja, która pozwala na automatyczną aktywację systemów na VM. Zapewne ułatwi to pracę, gdy mamy większe środowiska.

**4. Przyśpieszona funkcja „Live Migration”**— szybsza migracja zostanie osiągnięta poprzez kompresję w locie pamięci i danych VM. Dodatkowo Live Migration korzystać będzie z SMB Direct dla sieci o wysokiej wydajności, co podniesie szybkość transferu.

<!--truncate-->

**5. Online VHDX resize** — nie będę tego punktu tłumaczył, bo sam w sobie dużo wyjaśnia. Głównie chodzi o możliwość zmiany rozmiaru dysków, gdy maszyna jest używana – ta zmiana dotyczy wyłącznie dysków utworzonych w VHDX.

**6. Storage Quality of Service (QoS)** — ciekawa funkcja, która zapewne zmniejszy uszkodzenia dysków talerzowych, które szaleją a następnie padają od dużego ruchu danych na VM. Funkcja będzie miała na celu organizacji zapisu i odczytu danych na VM.

**7. Eksport VM na żywo** — funkcja, która przyda się przy tworzeniu kopi zapasowej maszyny z danej chwili. Obecnie, aby utworzyć eksport należało zgasić VM. Udoskonalenie będzie tworzyć w danym momencie snapshot względem, którego będzie tworzyć eksport w czasie rzeczywistym bez konieczności Shutdown-u.

**8. Extended Replica for DR** — ponoć jest bardzo popularna funkcja, której nie miałem możliwości jeszcze używać. Aczkolwiek polega na replikowaniu VM na inną maszynę z Hyper-V w celu zwiększenia jej redundantności – w czasie krytycznego punktu. Rozszerzenie replikacji daje możliwość tworzenia logów, które są wysyłane ze źródłowego target-u.

**9. Wsparcie dla USB pass-through** — wsparcie dla urządzeń USB pozwala na szybką komunikację przez USB z VM. Jest to funkcja wbudowana w system, która pozwoli na szybki dostęp do USB, bardzo przydatne do szybkiego wgrywania danych z zewnątrz do VM.

**10. Windows Azure IaaS compatibility** — i na koniec mamy informację dotyczącą 100% kompatybilności naszego Hyper-V w Windows Server 2012 z chmurą Azure. Możemy bez problemów migrować VM między środowiskiem fizycznym(prywatnym) a zewnętrznym chmurowym(Azure).