import cars from './cars.js';

function printCars() {
    // Agregamos la variable para imprimir en el id.
    const prinTable = document.getElementById('cars-table-body')
    prinTable.innerHTML = ''
    // recorremos el array de obj. con un forEach y lo pasamos a la tabla.
    cars.forEach((car) => {
        const cartd = ` <tr>
                            <td>${car.marca}</td>
                            <td>${car.modelo}</td>
                            <td>${car.color}</td>
                            <td>${car.año}</td>
                            <td>${car.precio}</td>
                            <td>                            
                                <button class="btn btn-warning" onclick="editCarButton(${car.id})">Editar</button>
                            </td>
                            <td>
                                <button class="btn btn-danger" onclick="removeCar(${car.id})">Eliminar</button>
                            </td>
                        </tr>`
        // imrpimimos toda en la tabla uno por uno
        prinTable.innerHTML += cartd;
    })
}

function addCar() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const año = document.getElementById('año').value;
    const precio = document.getElementById('precio').value;

    const newCar = {
        id: cars.length + 1,
        marca: marca,
        modelo: modelo,
        color: color,
        año: año,
        precio: '$' + precio
    }
    
    cars.push(newCar);
    printCars();
}
// Se agrega una variable para condicionar la funcion del boton
let editingCar = false;

// funcion de condicion del sumit
function submitCar() {
    if (editingCar) {
        editCar();
    }
    else {
        addCar();
    }
}

// funcion para eliminar
function editCar() {
    // buscamos el id que se va a modificar con el value
    const marca = document.getElementById('marca').value;
    editingCar.marca = marca;
    const modelo = document.getElementById('modelo').value;
    editingCar.modelo = modelo;
    const color = document.getElementById('color').value;
    editingCar.color = color;
    const año = document.getElementById('año').value;
    editingCar.año = año;
    const precio = document.getElementById('precio').value;
    editingCar.precio = precio;
    printCars();
    editingCar = false;
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('color').value = '';
    document.getElementById('año').value = '';
    document.getElementById('precio').value = '';
}

function editCarButton(id) {
    const car = cars.find((car) => car.id === id);
    document.getElementById('marca').value = car.marca;
    document.getElementById('modelo').value = car.modelo;
    document.getElementById('color').value = car.color;
    document.getElementById('año').value = car.año;
    document.getElementById('precio').value = car.precio;
    editingCar = car;
}


// funcion para eliminar carros
function removeCar(id) {
    // buscamos su posicion con un id con find Index
    const posision = cars.findIndex((user) => user.id === id);
    // cortamos con splice
    cars.splice(posision, 1);
    // imprimimos de nuevo el nuevo array de carros
    printCars();
}

printCars();

window.printCars = printCars;
window.addCar = addCar;
window.removeCar = removeCar;
window.submitCar = submitCar;
window.editCar = editCar;
window.editCarButton = editCarButton;
