---
authors:
  - progala
comments: true
date: "2023-09-04"
description: Dowiedz się, jak ochrona Push w GitHubie wspiera programistów i inżynierów chmury w zabezpieczaniu ich repozytoriów. Przeczytaj artykuł, aby zrozumieć, jak ta funkcja przeciwdziała przypadkowemu ujawnieniu haseł i innych wrażliwych informacji, zwiększając bezpieczeństwo na platformie.
keywords:
  - GitHub push protection
  - ochrona danych GitHub
  - bezpieczeństwo repozytoriów
  - API secrets GitHub
slug: github push protection leak credentials
tags:
  - GitHub
  - push protection
  - bezpieczeństwo
  - repozytorium
  - ochrona danych
  - cloud engineering
  - DevOps
title: Push protection w GitHub przed opublikowaniem haseł
---

GitHub, jako wiodąca platforma zarządzania kodem, stale wprowadza nowe funkcje, by zapewnić bezpieczne środowisko dla repozytoriów organizacyjnych i projektów prywatnych. Jednym z najnowszych ulepszeń jest funkcja "Ochrona przed przesyłaniem do repozytoriów i organizacji" ("Push protection for repositories and organizations"), która przynosi liczne korzyści dla programistów, inżynierów chmury oraz zespołów DevOps.

<!-- truncate -->

W tym artykule szczegółowo omówimy, jak ta innowacyjna funkcja wpływa na Twoje repozytorium na GitHubie i jak możesz czerpać z niej korzyści.

Czym jest "**Push protection for repositories and organizations**"?

"Ochrona przed przesyłaniem do repozytoriów i organizacji" to narzędzie, które zapewnia zabezpieczenie przed nieautoryzowanymi modyfikacjami Twojego repozytorium na GitHubie. Rozwiązanie działa zarówno na poziomie organizacji, chroniąc wszystkie repozytoria w jej strukturach, jak i na poziomie indywidualnym. Ochrona ta identyfikuje potencjalnie wrażliwe dane, takie jak klucze API, hasła czy tokeny dostępowe, które mogą być nieświadomie przesyłane do repozytoriów.

Co ta funkcja zmienia w Twoim repozytorium?

<!--truncate-->

1. **Wykrywanie i blokowanie przesyłania poufnych danych:** GitHub automatycznie wykrywa poufne dane w przesyłanych plikach, takie jak hasła, klucze API czy tokeny dostępowe. Przesyłanie takich danych do repozytorium jest powszechnym błędem, który może skutkować naruszeniem bezpieczeństwa. Funkcja "Ochrona przed przesyłaniem" skutecznie blokuje takie próby, redukując potencjalne zagrożenia.
2. **Powiadamianie o potencjalnych naruszeniach:** W przypadku wykrycia próby przesyłania poufnych danych, GitHub informuje odpowiednich właścicieli repozytorium lub zespoły bezpieczeństwa o zdarzeniu. Pomaga to w szybkim wykrywaniu i reagowaniu na potencjalne zagrożenia.
3. **Personalizacja ochrony na różnych poziomach:** Dzięki tej funkcji użytkownicy mogą dostosować poziom ochrony zarówno na poziomie pojedynczego repozytorium, jak i organizacji. Można zdecydować, czy włączyć niestandardowe reguły ochrony oraz które typy wrażliwych danych zablokować. Daje to pełną kontrolę nad bezpieczeństwem projektów.

Jak skorzystać z "**Push protection for repositories and organizations**"?

Aby włączyć funkcję "Ochrona przed przesyłaniem" dla swojego profilu na GitHubie, wykonaj poniższe kroki:

1. Przejdź do ustawień swojego profilu na GitHubie.
2. Wybierz zakładkę "Code security and analysis".
3. W sekcji "Push protection for yourself" wybierz opcję "Enable"

![Zrzut ekranu przedstawiający konfigurację ochrony push w GitHubie](images/2023-09-04_13-43-26.png)

<aside>

**💡 Dodatkowo, tę funkcję można skonfigurować w podobny sposób dla całej organizacji.**

</aside>

Natomiast jeśli chcesz skonfigurować tę funkcję na poziomie repozytorium, wykonaj następujące kroki:

1. Przejdź do ustawień swojego repozytorium na GitHubie.
2. Wybierz zakładkę "Security" (Bezpieczeństwo).
3. W sekcji "Push protection" (Ochrona przed przesyłaniem) skonfiguruj preferowane ustawienia ochrony. Możesz zdecydować, które typy wrażliwych danych zablokować oraz czy chcesz włączyć powiadomienia o naruszeniach dla właściciela repozytorium lub zespołów bezpieczeństwa.
4. Zapisz zmiany.

![Zrzut ekranu przedstawiający ustawienia ochrony push w repozytorium GitHub](images/2023-09-04_13-53-10.png)

Link do pełnej dokumentacji:

* [Link do dokumentacji GitHub](https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/push-protection-for-repositories-and-organizations)

Jeśli masz jakieś pytania, zachęcam do zadawania ich w komentarzach 🙂.
