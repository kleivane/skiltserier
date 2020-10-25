'use strict';
const dbName = 'erna-dev-skiltserier';
const fs = require('fs');

let rawdata = fs.readFileSync('dynamobd_items.json');
let items = JSON.parse(rawdata);

items[dbName].map(i => {
    let bokstavkombinasjon = i["PutRequest"]["Item"]["bokstavkombinasjon"]["S"];
    console.log(bokstavkombinasjon)
    if(bokstavkombinasjon.length != 2){
        console.warn(`${i} er rar`)
    }
    let omraader = i["PutRequest"]["Item"]["omraader"]["L"];
    console.log(omraader)
    if(omraader.length == 0){
        console.warn(`${i} er rar på områder`)
    }
    omraader.map(o => {
        if(o["S"].length <= 1 ){console.warn(`${i} er rar på områder`)}
    })
})

