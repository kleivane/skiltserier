# Skiltserier

Dataset for skiltserier fra Statens vegvesen, hentet fra https://www.vegvesen.no/kjoretoy/Eie+og+vedlikeholde/skilt/skiltserier

Det inneholder felles bokstavkombinasjoner og geografiske koder basert på hvilken trafikkstasjon som har utstedt registreringsnummeret.

## Varianter

`skiltserier.json` er en variant av `trafikkstasjoner.json` hvor bokstavkombinasjonen er oppslagsverket. 

Dersom du ønsker å lage en egen variant med andre verdier, kan du endre fila `populerSkiltserier.js` og kjøre denne via  `node populerSkiltserier.js`


## Dynamodb

Dersom du ønsker å bruke dynamo-db er det mulig å lage items med `node dynamodb_create.js` som vil populere fila `dynamodb_items.json`

Validering av json som lages kan gjøres med `node dynamobd_validate.js`.

Denne kan brukes i batch-write kommandoen til aws `ws dynamodb batch-write-item --request-items file://dynamodb_items.json`. OBS: ved
litt mer rearch ser jeg at kommandoen `batch-write-item` kun støtter 25 requests av gangen og fila inneholder 400+. Så enten må den kjøres
flere ganger eller deles opp på andre måter.