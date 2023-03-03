import { cardsService, readProducts as data } from "./main.js";
import { data as datajs } from "./data.js";

const searchIn = document.getElementById('search');
searchIn.addEventListener('input', function() {
    const filteredData = filterPast(data);
    cardsEventsPast(filteredData, new Date());
});

let checks = document.getElementById("checks");
const categories = [...new Set(data.map(events => events.category))];

function addCheckPast(categories) {
    checks.innerHTML='';
    for (let item in categories) {
        checks.innerHTML += ` <div class="form-check d-inline-flex mt-3 ms-3">
                                    <input class="form-check-input m-0 " type="checkbox" value="${categories[item]}" id="Check_A" name="category">
                                    <label class="form-check-label ps-2 pe-4 sm-ps-0 sm-pe-0" for="Check_A">
                                        ${categories[item]}
                                    </label>
                                </div>`;
    };

    // Detectar cambios en los checkboxes y llamar a las funciones filterItems() y cardsCreate()
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(function(checkbox) {
        const isPastEvent = new Date(datajs.currentDate);
        checkbox.addEventListener('change', function() {
            const filteredData = filterPast(data);
            cardsEventsPast(filteredData,isPastEvent);
        });
    });
}

function cardsEventsPast(data, currentDate) {
    cards.innerHTML = '';
    for (let event of data) {
        let eventDate = new Date(event.date);
        if (eventDate < currentDate) {
            cardsService.cardsDates(event);
        }
    }
};

function filterPast(data) {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    const selectedCategories = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    const keyword = searchIn.value.toLowerCase();
    const isEvent = new Date(datajs.currentDate);
    const filteredData = data.filter(event => {
        const containsCategory = selectedCategories.length === 0 || selectedCategories.includes(event.category);
        const containsKeyword = keyword === '' || event.name.toLowerCase().includes(keyword) || event.description.toLowerCase().includes(keyword);
        const isPast = new Date(event.date) < isEvent;
        return containsCategory && containsKeyword && isPast;
    });
    return filteredData;
};

function productsPast() {
    addCheckPast(categories);
    const pastData = filterPast(data);
    cardsEventsPast(pastData, new Date(datajs.currentDate));   
};

productsPast();