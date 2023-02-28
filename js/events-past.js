import {cardsService,readProducts } from "./main.js";
// import data from '../data.json' assert { type: 'json' };
import { data } from "./data.js";

//guardo todo lo necesario en una funcion
function productsPast(){
    readProducts;
    cardsEventsPast(data);
};

//creo las tarjetas si se cumple la condición
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

//inicio la funcion
productsPast();