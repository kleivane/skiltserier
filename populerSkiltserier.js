'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('trafikkstasjoner.json');
let trafikkstasjoner = JSON.parse(rawdata);
let kombinasjoner = {};

trafikkstasjoner.map(fylke =>
    fylke.serier.map(omraadeserie => {
        omraadeserie.kombinasjoner.map(kode => {
            if(!!kombinasjoner[kode]){
                kombinasjoner[kode].push({omraade: omraadeserie.omraade, fylke: fylke.fylke});
            } else {
                kombinasjoner[kode] = [{omraade: omraadeserie.omraade, fylke: fylke.fylke}];
            }

        })
    })
)

fs.writeFileSync( "skiltserier.json", JSON.stringify(kombinasjoner), {
      encoding: "utf8"} );