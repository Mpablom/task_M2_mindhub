import {cardsService } from "./main.js";
import { readProducts } from "./main.js";
import data from '../data.json' assert { type: 'json' };

function productsUpcoming(){
    readProducts;
    cardsEventsUpcoming(data);
};

function cardsEventsUpcoming(data){
    card.innerHTML='';
    for(let valores of data.events){
        let currentDate = new Date(data.currentDate);
        let eventDate = new Date(valores.date);
        if (eventDate < currentDate) {
            cardsService.cardsDates(valores);
        }
    }
};

productsUpcoming();


// function productosUpcoming(){
//         cardService.readProducts()
//         .then(datos=>{cardsEventsUpcoming(datos)});
// };

// function cardsEventsUpcoming(datos){
//     card.innerHTML='';
//     for(let valores of datos.events){
//         let currentDate = new Date(datos.currentDate);
//         let eventDate = new Date(valores.date);
//         if (eventDate < currentDate) {
//             cardService.cardsDates(valores);
//         }
//     }
// };

// productosUpcoming();