---
authors:
  - progala
date: "2016-06-29"
description: Automatyzacja maszyn w Azure za pomocą Chef. Wprowadzenie do zarządzania maszynami znajdziecie właśnie w tym wpisie. Zapraszam do przeczytania.
hide_table_of_contents: true
keywords:
  - automation
  - azure
  - chef
  - devops
slug: chef-i-azure-czyli-windows-automation
tags:
  - automation
  - azure
  - chef
  - devops
title: CHEF i Azure czyli Windows automation
---

W ostatnim czasie zrobiłem prezentację dotyczącą CHEF-a w Azure. Starałem się wyjaśnić, czym jest CHEF i co możemy zrobić za jego pomocą w Azure i przedstawić przykład zarządzania nodem postawionym na Windowsie.

<!-- truncate -->

Ten temat jest bardzo zastanawiający, bo jak możemy zarządzać z poziomu serwera Linuxowego maszyną Windowsową? Otóż CHEF stara się bardzo dopracowywać temat związany z maszynami postawionych na Windowsach i możemy znaleźć dużo rekomendowanej dokumentacji na ten temat: [https://www.chef.io/solutions/windows/](https://www.chef.io/solutions/windows/). Za pomocą CHEF-a możemy stawiać maszyny w Azure oraz nimi zarządzać. Zarządzanie odbywa się za pomocą cookbook-ów zawierające skrypty konfiguracyjne. Wszystkie pliki cookbook-ów możemy modyfikować do woli, aby otrzymać oczekiwany efekt. W przypadku tworzenia zestawu cookbook-ów warto poczytać o Berkshelf: [http://berkshelf.com/](http://berkshelf.com/). Jeśli chce sami spróbować sił z CHEF-em w Azure możecie przejść przez tutorial dostępny na stronie Azure: [https://azure.microsoft.com/en-us/documentation/articles/virtual-machines-windows-chef-automation/](https://azure.microsoft.com/en-us/documentation/articles/virtual-machines-windows-chef-automation/) . W skrócie mogę napisać, że jeśli szukacie czegoś uniwersalnego do automatyzacji stacji Linux & Windows dobrze jest przyjrzeć się właśnie CHEF-owi. Jeśli masz pytania zapraszam do komentowania bądź do kontaktu mailowego.

Moją **prezentację ze spotkania DevOps** Wrocław z 28.06.2016 zajdziecie tutaj: [https://github.com/RogalaPiotr/Presentations/tree/main/2016.06%20-%20DevOps%20Wroc%C5%82aw](https://github.com/RogalaPiotr/Presentations/tree/main/2016.06%20-%20DevOps%20Wroc%C5%82aw) Zapraszam również do śledzenia grupy DevOps we Wrocławiu: [http://www.meetup.com/Wroclaw-DevOps-Meetup/](http://www.meetup.com/Wroclaw-DevOps-Meetup/ "http://www.meetup.com/Wroclaw-DevOps-Meetup/")

![Chef](images/image.png)