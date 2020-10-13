# Skiltserier

Dataset for skiltserier fra Statens vegvesen, hentet fra https://www.vegvesen.no/kjoretoy/Eie+og+vedlikeholde/skilt/skiltserier

Det inneholder felles bokstavkombinasjoner og geografiske koder basert på hvilken trafikkstasjon som har utstedt registreringsnummeret.

## Varianter

`skiltserier.json` er en variant av `trafikkstasjoner.json` hvor bokstavkombinasjonen er oppslagsverket. 

Dersom du ønsker å lage en egen variant med andre verdier, kan du endre fila `populerSkiltserier.js` og kjøre denne via  `node populerSkiltserier.js`