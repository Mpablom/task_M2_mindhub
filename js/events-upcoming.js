import {cardsService, readProducts } from "./main.js";
// import data from '../data.json' assert { type: 'json' };
import { data } from "./data.js";

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