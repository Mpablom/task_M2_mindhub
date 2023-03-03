import { cardsService, readProducts as data } from "./main.js";
import { data as datajs } from "./data.js";

const searchInDos = document.getElementById('search');
searchInDos.addEventListener('input', function() {
    const filteredData = filterUpcoming(data);
    cardsEventsUpcoming(filteredData, new Date(datajs.currentDate));
});

let checks = document.getElementById("checks");
const categories = [...new Set(data.map(events => events.category))];

function addCheckUpcoming(categories) {
    checks.innerHTML='';
    for (let item in categories) {
        checks.innerHTML += ` <div class="form-check d-inline-flex mt-3 ms-3">
                                    <input class="form-check-input m-0 " type="checkbox" value="${categories[item]}" id="Check_A" name="category">
                                    <label class="form-check-label ps-2 pe-4 sm-ps-0 sm-pe-0" for="Check_A">
                                        ${categories[item]}
                                    </label>
                                </div>`;
    };

    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(function(checkbox) {
        const isUpcomingEvent = new Date(datajs.currentDate);
        checkbox.addEventListener('change', function() {
            const filteredData = filterUpcoming(data);
            cardsEventsUpcoming(filteredData,isUpcomingEvent);
        });
    });
}
const cards = document.getElementById('cards');

function cardsEventsUpcoming(data, currentDate) {
    cards.innerHTML = '';
    for (let event of data) {
        let eventDate = new Date(event.date);
        if (eventDate >= currentDate) {
            cardsService.cardsDates(event);
        }
    }
};

function filterUpcoming(data) {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    const selectedCategories = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    const keyword = searchInDos.value.toLowerCase();
    const isEvent = new Date(datajs.currentDate);
    const filteredData = data.filter(event => {
        const containsCategory = selectedCategories.length === 0 || selectedCategories.includes(event.category);
        const containsKeyword = keyword === '' || event.name.toLowerCase().includes(keyword) || event.description.toLowerCase().includes(keyword);
        const isUpcoming = new Date(event.date) >= isEvent;
        return containsCategory && containsKeyword && isUpcoming;
    });
    return filteredData;
};

function upcomingEvents() {
    addCheckUpcoming(categories);
    const upcomingData = filterUpcoming(data);
    cardsEventsUpcoming(upcomingData, new Date(datajs.currentDate));   
};

upcomingEvents();
