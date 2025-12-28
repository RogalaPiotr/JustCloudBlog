---
authors:
  - progala
categories:
  - cloud-computing
date: "2012-06-07"
description: Awaria serwerowni e24cloud.pl firmy Beyond - utrata danych w największej polskiej chmurze publicznej. Analiza przyczyn awarii, skutków i konsekwencji dla klientów cloud computing.
hide_table_of_contents: true
keywords:
  - awaria cloud
  - e24cloud
  - Beyond
  - awaria serwerowni
  - utrata danych
  - cloud computing polska
  - bezpieczeństwo cloud
  - backup
  - Tier-4
slug: awaria-e24cloud-pl
tags:
  - Cloud Computing
  - Bezpieczeństwo
  - Awarie
  - Beyond
title: Awaria - e24cloud.pl
---

import ReactPlayer from 'react-player'

4 czerwca w jednej z największych serwerowni w Polsce udostępniającej Cloud powstała awaria z poważnymi skutkami. Chodzi tu o serwerownię utrzymywaną przez firmę Beyond. Awaria została spowodowana przepięciem elektrycznym, jak tłumaczy prezes zarządu Michał Grzybkowski w krótkiej relacji na YouTube.
<!-- truncate -->

<ReactPlayer
  controls
  src='https://www.youtube.com/watch?v=FXBIeetKuIk'
  width='65%'
  height='auto'
  style={{ display: 'block', margin: '0 auto 20px auto', aspectRatio: '16/9' }}
/>
**Uwaga:** Niestety video nie przetrwało próby czasu.

W relacji słyszymy o normach Tier-4, jakie spełnia serwerownia, a awaria powstała podczas testu zasilania, który odbywa się co 6 godzin. Awaria nastąpiła o godzinie 7.35, powodując wyłączenie największych polskich serwisów: Allegro.pl, Wykop.pl, Pay-U. Około 25 minut później dzięki agregatowi elektrycznemu serwisy zostały z powrotem powołane do życia. Jak mi wiadomo, normy Tier-4 mówią o tym, że przerwania w działaniu serwerowni nie powinny mieć miejsca ze względu na możliwość wykorzystania kilku osobnych aktywnych linii zasilających, zapobiegających awariom takim jak nagły zanik zasilania. Prezes zarządu Michał Grzybkowski nie odniósł się w żaden sposób do awarii macierzy, która również powstała podczas zaniku zasilania. Na Fan Page'u e24cloud.com, będącym produktem firmy Beyond, pojawiały się informacje o tym, że owa awaria przyczyniła się do utraty danych z macierzy dyskowych i backupów.

Utrata danych z dysków i backupów jest poważnym problemem, a klienci, którzy udostępniali swoje "usługi" kolejnym osobom, są w większych tarapatach. E24cloud.com jest negatywnie komentowane na Fan Page'u przez swoich klientów, co ma swoje podstawy. Nikt nie brał pod uwagę rozpłynięcia się danych niczym mgła u największego dostawcy Public Cloud w Polsce, który zapewniał o 100-procentowym bezpieczeństwie przetrzymywania danych.

Przede wszystkim chciałem skupić się na sprawie związanej z przewidywaniem awarii. Uważam, że w przypadku udostępniania takich usług, jakie oferuje e24cloud.pl, kwestia bezpieczeństwa danych nie została w pełni zachowana, a na pewno przewidziana. Jak wiemy, Cloud ma pomóc w przetrzymywaniu danych, ruchu danych, konsolidacji mocy obliczeniowych i tworzeniu nowych rozwiązań. Według mnie nie jest tu winny mechanizm chmury, lecz wdrożony projekt mający zapewniać bezpieczeństwo backupów. Przechowywanie backupów wraz z macierzami na tej samej maszynie jest narażeniem całości na awarie powodujące utratę wszystkiego jednocześnie. Rozwiązań dla powstałego problemu jest co najmniej kilka, więc dlaczego tak się stało? Ja tego niestety nie wiem.

Pod każdym z artykułów w sieci na temat awarii internauci negatywnie komentują rozwiązania Cloud'owe. Awarie się zdarzają i każdy powinien być tego świadomy. Natomiast trzeba wiedzieć, gdzie leży popełniony błąd, a nie komentować tego słowami: "Macie swoje chmury..." jak jeden z internautów. Cloud Computing nie jest nowością, aczkolwiek jest nowo powstałym hasłem marketingowym.

Jestem ciekawy rozwiązania całej tej sprawy i efektów odzyskiwania danych, ponieważ po 5 dniach nadal nie ma żadnych rewelacyjnych informacji. Uważam, że odzyskiwanie danych jest pokazaniem ze strony firmy zainteresowania i zadbaniem o swój wizerunek, także wobec przyszłych klientów, którzy przeczytają w artykułach, że firma mimo wszystko próbowała odzyskać dane. Podsumowując, mogę tylko współczuć klientom, którzy utracili dane. Zaistniała awaria, według relacji Michała Grzybkowskiego, nie była tak naprawdę poważna i na pewno mogła roznieść się bez echa. Życzę powodzenia w odzyskiwaniu danych i w kolejnych pracach nad bezpiecznym przechowywaniem backupów.