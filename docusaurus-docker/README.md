#  Docusaurus Docker Container

 **Status: Przetestowane i działa!**

Gotowe środowisko Docker dla **Docusaurus 3.9.2** z automatyczną instalacją i konfiguracją.

##  Szybki start (3 komendy)

```powershell
docker build -t docusaurus:latest .
mkdir website
docker run -d -p 80:80 -v ${PWD}/website:/app --name docusaurus-dev docusaurus:latest
```

**Poczekaj ~5 minut na instalację**, potem otwórz: **http://localhost:80** 

##  Dokumentacja

- **README.md** - Ten plik (podstawowe info)
- **QUICKSTART.md** - Szybki start krok po kroku
- **COMMANDS.md** - Wszystkie przydatne komendy
- [Docusaurus Docs](https://docusaurus.io/docs) - Oficjalna dokumentacja

##  Co to robi?

Kontener automatycznie:
1.  Tworzy nowy projekt Docusaurus (przy pierwszym uruchomieniu)
2.  Instaluje wszystkie zależności npm
3.  Uruchamia serwer deweloperski z hot reload
4.  Montuje projekt do katalogu `./website` (edycja na żywo!)

##  Pliki w projekcie

```
docusaurus-docker/
 Dockerfile                # Obraz deweloperski
 Dockerfile.production     # Obraz produkcyjny (nginx)
 docker-compose.yml        # Docker Compose config
 docker-entrypoint.sh      # Skrypt startowy
 nginx.conf                # Konfiguracja nginx
 build.ps1                 # Skrypt budowania
 run.ps1                   # Skrypt uruchamiania
 README.md                 # Ten plik
 QUICKSTART.md             # Szybki start
 COMMANDS.md               # Komendy i przykłady
 website/                     # Twój projekt Docusaurus
```

##  Opcje uruchomienia

### Opcja 1: Docker Compose (najszybsze) 

```powershell
docker-compose up -d
docker-compose logs -f
```

### Opcja 2: Skrypty PowerShell (zalecane)

```powershell
.\build.ps1
.\run.ps1
```

### Opcja 3: Manualne komendy Docker

```powershell
docker build -t docusaurus:latest .
mkdir website
docker run -d -p 80:80 -v ${PWD}/website:/app --name docusaurus-dev docusaurus:latest
docker logs -f docusaurus-dev
```

##  Ile to trwa?

- **Budowanie obrazu:** ~1-2 minuty
- **Pierwsza instalacja:** ~5-7 minut (pobiera >1200 pakietów npm)
- **Kolejne uruchomienia:** <10 sekund

##  Monitorowanie

```powershell
# Zobacz co się dzieje
docker logs -f docusaurus-dev

# Status kontenera
docker ps

# Wejdź do kontenera
docker exec -it docusaurus-dev sh
```

##  Edycja projektu

Po uruchomieniu edytuj pliki w katalogu `website/`:
```powershell
cd website
# Edytuj: docs/, blog/, src/pages/, docusaurus.config.js
```

**Zmiany są widoczne natychmiast w przeglądarce!** (hot reload)

##  Zatrzymywanie

```powershell
# Docker Compose
docker-compose down

# Lub manualnie
docker stop docusaurus-dev
docker rm docusaurus-dev
```

##  Aktualizacja wersji

```dockerfile
# W Dockerfile zmień:
ARG DOCUSAURUS_VERSION=3.10.0
```

```powershell
# Przebuduj
docker build -t docusaurus:latest .
```

##  Tryb produkcyjny

```powershell
# Zbuduj obraz produkcyjny (z nginx)
docker build -f Dockerfile.production -t docusaurus:prod ./website

# Uruchom na porcie 80
docker run -d -p 80:80 --name docusaurus-prod docusaurus:prod
```

##  Rozwiązywanie problemów

### Port zajęty?
```powershell
docker run -d -p 8080:80 -v ${PWD}/website:/app --name docusaurus-dev docusaurus:latest
```

### Instalacja za długo trwa?
To normalne! Pierwsza instalacja zajmuje 5-7 minut.

### Kontener nie startuje?
```powershell
docker logs docusaurus-dev  # Zobacz błędy
docker rm -f docusaurus-dev  # Usuń i spróbuj ponownie
```

##  Wymagania

- Docker Desktop
- PowerShell 5.1+
- 2GB RAM
- 2GB miejsca na dysku

##  Więcej informacji

- `QUICKSTART.md` - Przewodnik krok po kroku
- `COMMANDS.md` - Wszystkie komendy Docker i PowerShell
- [Docusaurus Docs](https://docusaurus.io/docs)
- [Docker Docs](https://docs.docker.com/)

##  Gdy zobaczysz to w logach:

```
[SUCCESS] Docusaurus website is running at: http://localhost:80/
```

**Strona jest gotowa!** Otwórz: http://localhost:80

---

**Autor:** JustCloud  
**Data:** 2025-10-22  
**Wersja:** 1.0  
**Docusaurus:** 3.9.2  
