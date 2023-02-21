import {cardService } from "./main.js";

function productosPast(){
    cardService.readProducts()
    .then(datos=>{cardsEventsPast(datos)});
};

function cardsEventsPast(datos){
    card.innerHTML='';
    for(let valores of datos.events){
        let currentDate = new Date(datos.currentDate);
        let eventDate = new Date(valores.date);
        if (eventDate > currentDate) {
            cardService.cardsDates(valores);
        }
    }
};

productosPast();