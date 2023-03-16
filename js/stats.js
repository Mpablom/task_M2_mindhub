import { data,readProducts } from "./main.js";

//filtrar por capacidad

const mayorCapacidad = readProducts.map(events=>{
    let capacity;
    capacity = events.capacity;
    return{
        nombre:events.name,
        capacity
    };
});
const ordenarMayorCapacidad = (events) => {
    return events.sort((a, b) => b.capacity - a.capacity);
};
const destacadoPorCapacidad = ordenarMayorCapacidad(mayorCapacidad).slice(0, 2);

//filtrado por porcentaje de asistencia 

const porcentajesAsistencia = readProducts.map(events => {
    let porcentaje;
    if(events.assistance){
        porcentaje = parseFloat((events.assistance / events.capacity)*100).toFixed(2);
    }
    return{
        nombre : events.name,
        porcentaje,
        capacity : events.capacity
    }
});

const ordenarPorMayorAMenor = (events) => {
    return events.sort((a, b) => b.porcentaje - a.porcentaje);
};
const eventosDestacadosMayor = ordenarPorMayorAMenor(porcentajesAsistencia)[0];

const ordenarPorMenorAMayor = (events) => {
    return events.sort((a, b) => a.porcentaje - b.porcentaje);
};
const eventosDestacadosMenor = ordenarPorMenorAMayor(porcentajesAsistencia)[0];

// Obtener la tabla HTML

const tabla = document.getElementById("table");

// Crear las filas de la tabla

const row = tabla.insertRow();
const cell2_1 = row.insertCell(0);
const cell2_2 = row.insertCell(1);
const cell2_3 = row.insertCell(2);
cell2_1.innerHTML = `${eventosDestacadosMayor.nombre} (${eventosDestacadosMayor.porcentaje}%)`;
cell2_2.innerHTML = `${eventosDestacadosMenor.nombre} (${eventosDestacadosMenor.porcentaje}%)`;
cell2_3.innerHTML = `${destacadoPorCapacidad[0].nombre} (${destacadoPorCapacidad[0].capacity}), ${destacadoPorCapacidad[1].nombre} (${destacadoPorCapacidad[1].capacity})`;

//separando los events
const upcoming = [];
const past = [];
const dataTime = data.currentDate;
let categoryUpcoming = {};
let categoryPast = {};

readProducts.forEach((events) => {
    const fechaEvents = events.date;
    if (fechaEvents < dataTime) {
        past.push(events);
        if (!categoryPast[events.category]) {
            categoryPast[events.category] = [];
        }
            categoryPast[events.category].push(events);
    } else {
        upcoming.push(events);
        if (!categoryUpcoming[events.category]) {
            categoryUpcoming[events.category] = [];
        }
            categoryUpcoming[events.category].push(events);
    }
});

// Obtener la tabla HTML

const tablaU = document.getElementById("table-upcoming");

//completando tabla Upcoming Events

for (const category in categoryUpcoming) {
    const eventosCategoria = categoryUpcoming[category];
    const capacity = eventosCategoria.reduce((total, events) => total + events.capacity,0);
    const gananciasPorEvento = eventosCategoria.map(evento => evento.price * evento.estimate);
    const sumaEstimate = eventosCategoria.reduce((total, events) => total + events.estimate, 0);
    const ganancia = gananciasPorEvento.reduce((total, ganancia) => total + ganancia, 0);
    const percentage = parseFloat((sumaEstimate / capacity)*100).toFixed(2);
    const row = tablaU.insertRow();
    const cell2_1 = row.insertCell(0);
    const cell2_2 = row.insertCell(1);
    const cell2_3 = row.insertCell(2);
    cell2_1.innerHTML = `${category}`;
    cell2_2.innerHTML = `$${ganancia}.-`;
    cell2_3.innerHTML = `${percentage}%`;
}

// Obtener la tabla HTML

const tablaP = document.getElementById("table-past");

//completando tablas PastEvents

for (const category in categoryPast) {
    const eventosCategoria = categoryPast[category];
    const capacity = eventosCategoria.reduce((total, event) => total + event.capacity, 0);
    const gananciasPorEvento = eventosCategoria.map(evento => evento.price * evento.assistance);
    const sumaAssistance = eventosCategoria.reduce((total, events) => total + events.assistance, 0);
    const ganancia = gananciasPorEvento.reduce((total, ganancia) => total + ganancia, 0);
    const percentage = parseFloat((sumaAssistance / capacity) * 100).toFixed(2);
    const row = tablaP.insertRow();
    const cell2_1 = row.insertCell(0);
    const cell2_2 = row.insertCell(1);
    const cell2_3 = row.insertCell(2);
    cell2_1.innerHTML = `${category}`;
    cell2_2.innerHTML = `$${ganancia}.-`;
    cell2_3.innerHTML = `${percentage}%`;
}