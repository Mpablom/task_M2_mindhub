
import { data,readProducts } from "./main.js";

//Toma el id desde el link del evento al hacer click en seemore
const url = new URL(window.location);
const id = url.searchParams.get('id');
const readEvent = readProducts.find(event => event._id == id);

function getProduct(){
    try{
        active(readEvent);
        actualYear();
        createCardDetail(readEvent);
    }
    catch(error){
        console.log(error);
    }
};


//Agregamos el año actual al footer

function actualYear(){
    const actualYear = new Date().getFullYear();
    document.getElementById("year").innerHTML = actualYear;
};

//Pone la clase active al link de la navbar correspondiente

const pastEvent = document.getElementById("pastEvent");
const upcomingEvent = document.getElementById("upcomingEvent");
const active = (readEvent) => {
    if (readEvent.date < data.currentDate) {
        pastEvent.classList.add('active');
    }else{
        upcomingEvent.classList.add('active');
    }
};

//Crea la tarjeta de detalle y pone assistance o capacity de acuerdo a el tiempo en que ocurre el evento

const createCardDetail = (readEvent) => {
    let card = document.getElementById("card");
    card.innerHTML = ` <div class="row g-0 gap-3 ">
                            <div class="img-details">
                                <img src="${readEvent.image}" class="img-fluid" alt="${readEvent.name}">
                            </div>
                            <div class="description">
                                <div class="card-header bg-gradient">
                                    <h6>${readEvent.date}</h6>
                                    <p>Category: ${readEvent.category}</p>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${readEvent.name}</h5>
                                    <p class="card-text">${readEvent.description}</p>
                                </div>
                                <div class="card-footer bg-gradient">
                                ${
                                    readEvent.date < data.currentDate
                                    ? `<p>Assistants: ${readEvent.assistance} personas.</p>`
                                    : `<p>Capacity: ${readEvent.capacity} personas.</p>`
                                }
                                    <p>Precio: $${readEvent.price}.-</p>
                                </div>
                            </div>
                        </div>`;
};

//Llamo a la función principal

getProduct();