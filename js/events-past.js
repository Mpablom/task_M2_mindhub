import {cardsService } from "./main.js";
import { readProducts } from "./main.js";
import data from '../data.json' assert { type: 'json' };

function productsPast(){
    readProducts;
    cardsEventsPast(data);
};

function cardsEventsPast(data){
    card.innerHTML='';
    for(let valores of data.events){
        let currentDate = new Date(data.currentDate);
        let eventDate = new Date(valores.date);
        if (eventDate > currentDate) {
            cardsService.cardsDates(valores);
        }
    }
};

productsPast();


// function productosPast(){
//     cardService.readProducts()
//     .then(datos=>{cardsEventsPast(datos)});
// };

// function cardsEventsPast(datos){
//     card.innerHTML='';
//     for(let valores of datos.events){
//         let currentDate = new Date(datos.currentDate);
//         let eventDate = new Date(valores.date);
//         if (eventDate > currentDate) {
//             cardService.cardsDates(valores);
//         }
//     }
// };

// productosPast();