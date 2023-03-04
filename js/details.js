import { data } from "./data.js";


const url = new URL(window.location);
const id = url.searchParams.get('id');

export const readEvent = data.events.find(event => event.id == id);

const getProduct = () =>{
        readEvent ;
        createCard(readEvent);
};
const createCard = (readEvent) => {
    let card = document.getElementById("card");
    card.innerHTML = ` <div class="row g-0 gap-3 ">
                            <div class="img-details">
                                <img src="${readEvent.image}" class="img-fluid" alt="${readEvent.name}">
                            </div>
                            <div class="description">
                                <div class="card-body">
                                    <h5 class="card-title">${readEvent.name}</h5>
                                    <p class="card-text">${readEvent.description}</p>
                                </div>
                            </div>
                        </div>`;
};

getProduct(id);