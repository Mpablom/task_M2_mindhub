import { actualYear } from "./main.js";


function productosUpcoming(){
        fetch('./data.json')
        .then(response=>response.json())
        .then(datos=>{cardsUpcoming(datos)})
};

function cardsUpcoming(datos){
    card.innerHTML='';
    for(let valores of datos.events){
        let currentDate = new Date(datos.currentDate);
        let eventDate = new Date(valores.date);
        if (eventDate < currentDate) {
            card.innerHTML += `<div class="col-ssm-5 col-md-4 col-lg-4 col-xl-3">
                                    <div class="card">
                                        <img src="${valores.image}" class="card-img-top m-4" alt="${valores.name}">
                                        <div class="card-body">
                                            <h5 class="card-title">${valores.name}</h5>
                                            <p class="card-text">${valores.description}</p>
                                        </div>
                                        <div class="card-footer d-inline-flex border-top-0">
                                            <p> Price:<span class="pe-2">${valores.price}.-</span></p>
                                            <a href="./details.html?id=${valores.id}" class="btn btn-dark w-75 seeMore">See More</a>
                                        </div>  
                                    </div>
                                </div>`;
        }
    }
};

productosUpcoming();