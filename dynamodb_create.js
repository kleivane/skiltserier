'use strict';
const dbName = 'erna-dev-skiltserier';
const fs = require('fs');

let rawdata = fs.readFileSync('../skiltserier.json');
let kombinasjoner = JSON.parse(rawdata);
console.log(kombinasjoner)

let dbItems = {};
dbItems[dbName] = [];

Object.keys(kombinasjoner).map(kombinasjon => {
    let o = [];
    kombinasjoner[kombinasjon].map(trafikkstasjon => {
        o.push({
            "S": trafikkstasjon.omraade
        })
    })

    dbItems[dbName].push({
        "PutRequest":{
            "Item":{
                "bokstavkombinasjon":{
                    "S": kombinasjon
                },
                "omraader": {
                    "L": o
                }
            }
        }
    })
})

fs.writeFileSync( "dynamobd_items.json", JSON.stringify(dbItems), {
    encoding: "utf8"} );