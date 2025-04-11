## FlipLink game

### Beginscherm

- Spel uitleg
- Naaminvoer
- Selecteer categorie
- Optie voor aan/uitzetten geluidseffecten
- Startknop

### Spelscherm

- Titel
- Scoreboard voor huidige score, totale score, resterende tijd (teller of progressiebar)
- Modal voor meldingen na winnende of foute combinatie
- 2 Spelborden

### Eindscherm

- Eindscore
- Knop om te herstarten (onder zelfde naam) of om helemaal opnieuw te beginnen
- Optie om van categorie te veranderen

##################

### Folderstructuur

├── assets/ # Beelden, geluiden, etc.
│ ├── images/ # Afbeeldingen zoals kaarten, iconen, achtergrond
│ ├── sounds/ # Geluiden en muziek
│ └── fonts/ # Lettertypen
│
├── components/ # Herbruikbare componenten voor het spel
│ ├── Board.tsx # Hoofdspelfuncties (bijv. bordweergave)
│ ├── Card.tsx # Kaartcomponent
│ ├── Scoreboard.tsx # Scorebord en statistieken
│ └── Timer.tsx # Tijdklok of timer voor het spel
│
├── contexts/ # Contexten voor state management (indien gebruikt)
│ └── GameContext.tsx # Context voor het spel (bijv. score, level, etc.)
│
├── hooks/ # Herbruikbare hooks
│ ├── useGameLogic.ts # Logica voor het spel (bijv. kaarten flippen, winnen, verliezen)
│ └── useTimer.ts # Timer-logica voor het spel
│
├── pages/ # Pagina's voor het spel
│ ├── HomePage.tsx # Startpagina van het spel
│ ├── GamePage.tsx # Hoofdpagina voor het spelen van het spel
│ └── GameOverPage.tsx # Eindpagina van het spel (bijv. score, herstart optie)
│
├── services/ # API- of externe services (indien nodig)
│ └── GameService.ts # Functies voor het opslaan of ophalen van speldata
│
├── styles/ # Stijlen voor het spel
│ ├── index.css # Hoofdstijlbestand
│ └── themes.css # Eventuele thema's of stijlen per mode (bijv. dark mode)
│
├── utils/ # Hulpfuncties voor het spel
│ ├── shuffle.ts # Functie voor het schudden van kaarten
│ └── generateCards.ts # Functie voor het genereren van kaartspel
│
├── App.tsx # Hoofdcomponent die alle andere componenten samenbrengt
├── index.tsx # Instappunt voor de app (renderen van de app)
└── package.json # NPM-pakketconfiguratie
