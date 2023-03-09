const url = new URL(window.location);
const id = url.searchParams.get('id');
console.log(id)
const readEvent = data.events.find(event => event.id == id);

function actualYear(){
    const actualYear = new Date().getFullYear();
    document.getElementById("year").innerHTML = actualYear;
};

const getProduct = () =>{  
    actualYear(); 
    readEvent ;
    createCardDetail(readEvent);
};

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

getProduct();