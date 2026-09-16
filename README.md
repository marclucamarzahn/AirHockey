# Berlin Air Hockey

Statische, responsive Website-Grundlage für einen Berliner Air-Hockey-Verein. Sie läuft ohne Build-Schritt direkt auf GitHub Pages.

## Lokal starten

`index.html` kann direkt im Browser geöffnet werden. Für ES-Module empfiehlt sich ein lokaler Webserver, z. B. `npx serve .`.

## GitHub Pages

Repository nach GitHub pushen, anschließend unter **Settings → Pages** den Branch `main` und den Ordner `/ (root)` wählen. Es ist kein Build nötig.

## Inhalte und Erweiterung

- Zentrale Beispieldaten: `assets/js/data.js` (Spieler, Matches, Events)
- Darstellung & Seitenlogik: `assets/js/app.js`
- Design-Tokens/Farben: Beginn von `assets/css/style.css`
- Jede Entität trägt eine eindeutige ID. Eine spätere API kann die Exporte in `data.js` ohne Änderungen an der Darstellung ersetzen.

Die aktuelle Statistik wird aus den Rohdatenstrukturen vorbereitet; bei einer Backend-Anbindung können Matches, Turniere, Rankings und News aus einer API oder einem CMS geladen werden.
