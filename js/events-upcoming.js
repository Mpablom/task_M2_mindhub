import {cardService } from "./main.js";


function productosUpcoming(){
        cardService.readProducts()
        .then(datos=>{cardsEventsUpcoming(datos)});
};

function cardsEventsUpcoming(datos){
    card.innerHTML='';
    for(let valores of datos.events){
        let currentDate = new Date(datos.currentDate);
        let eventDate = new Date(valores.date);
        if (eventDate < currentDate) {
            cardService.cardsDates(valores);
        }
    }
};

productosUpcoming();