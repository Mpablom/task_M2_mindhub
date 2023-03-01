import {cardsService, readProducts } from "./main.js";
// import data from '../data.json' assert { type: 'json' };
import { data } from "./data.js";

//guardo todo lo necesario en una funcion
function productsUpcoming(){
    readProducts;
    cardsEventsUpcoming(data);
    cardsService.addCheckBoxes
};

//crea las tarjetas si cumplen con la condición
function cardsEventsUpcoming(data){
    cards.innerHTML='';
    for(let valores of data.events){
        let currentDate = new Date(data.currentDate);
        let eventDate = new Date(valores.date);
        if (eventDate < currentDate) {
            cardsService.cardsDates(valores);
        }
    }
};

//inicio la funcion
productsUpcoming();