import { data } from "./data.js";

export const readProducts = data.events;

//creo un checkbox por cada category de los events

let checks = document.getElementById("checks");
const categories = [...new Set(readProducts.map(events => events.category))];

function addCheckBoxes(categories) {
    for (let item in categories) {
        checks.innerHTML += ` <div class="form-check d-inline-flex mt-3 ms-3">
                                    <input class="form-check-input m-0 " type="checkbox" value="${categories[item]}" id="Check_A" name="category">
                                    <label class="form-check-label ps-2 pe-4 sm-ps-0 sm-pe-0" for="Check_A">
                                        ${categories[item]}
                                    </label>
                                </div>`;
    }

    // Detectar cambios en los checkboxes y llamar a la función filterItems()
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
        filterItems(readProducts);
        });
    });
}

// Filtrar los eventos según las categorías seleccionadas 
function filterItems(readProducts) {
const checkboxes = document.querySelectorAll('input[type=checkbox]');
const selectedCategories = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
const filteredData = readProducts.filter(events => selectedCategories.includes(events.category));

console.log('Categorías seleccionadas:', selectedCategories);
console.log('Elementos filtrados:', filteredData);
}

//funcion actualYear de footer
function actualYear(){
    const actualYear = new Date().getFullYear();
    document.getElementById("year").innerHTML = actualYear;
};

//crea la tarjeta
function cardsDates(valores){
        let cards = document.getElementById("cards");
        cards.innerHTML += `<div class="col-sm-5 col-md-4 col-lg-4 col-xl-3">
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
};

//crea una tarjeta por cada items del .json
function cardsCreate(data){
    for(let valores of data.events){
        cardsDates(valores);
    };
};

//guardo todo lo necesario en una funcion

function main(){
    actualYear();
    readProducts;
    cardsCreate(data);
    addCheckBoxes(categories);
    filterItems(readProducts);
};

//arranco la funcion
main()

//exporto las funciones para usarlas en los otros archivos .js
export const cardsService = {
    actualYear,
    cardsDates,
    addCheckBoxes,
};