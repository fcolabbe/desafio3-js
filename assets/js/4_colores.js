document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    let colorSeleccionado;
    switch (key) {
        case "a":
            colorSeleccionado = "pink";
            break;
        case "s":
            colorSeleccionado = "orange";
            break;
        case "d":
            colorSeleccionado = "skyblue";
            break;
        case "q":
            colorSeleccionado = "purple";
            agregarElemento();
            break;
        case "w":
            colorSeleccionado = "grey";
            break;
        case "e":
            colorSeleccionado = "brown";
            break;
        default:
            return;
    }


    const keyDiv = document.getElementById("key");
    keyDiv.style.backgroundColor = colorSeleccionado;
});

function agregarElemento() {
    // Obtenemos el elemento contenedor por su ID
    keyDiv = document.getElementById("key");
    // Creamos un nuevo elemento <div>
    nuevoElemento = document.createElement("div");
    // Asignamos un texto al nuevo elemento
    nuevoElemento.style = "Elemento agregado";
    // Agregamos el nuevo elemento al contenedor
    keyDiv.appendChild(nuevoElemento);
    }


const pintar = function (evento) {
    evento.target.style.backgroundColor = 'black';
}

const blue = document.getElementById("uno");

blue.addEventListener("click", function (evento) {
    pintar(evento);
});

const red = document.getElementById("dos");

red.addEventListener("click", function (evento) {
    pintar(evento);
});

const green = document.getElementById("tres");

green.addEventListener("click", function (evento) {
    pintar(evento);
});

const yellow = document.getElementById("cuatro");

yellow.addEventListener("click", function (evento) {
    pintar(evento);
});