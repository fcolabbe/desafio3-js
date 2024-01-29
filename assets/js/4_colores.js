document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    let colorSeleccionado;
    if (key === "a") {
        colorSeleccionado = "pink";
    } else if (key === "s") {
        colorSeleccionado = "orange";
    } else if (key === "d") {
        colorSeleccionado = "skyblue";
    } else if (key === "q") {
        agregarElemento('purple');
    } else if (key === "w") {
        agregarElemento('grey');
    } else if (key === "e") {
        agregarElemento('brown');
    } else {
        return;
    }

    const keyDiv = document.getElementById("key");
    keyDiv.style.backgroundColor = colorSeleccionado;
});

function agregarElemento(color) {
    const nuevoElemento = document.getElementById("nuevoElemento");
    if (nuevoElemento) {
        nuevoElemento.style.backgroundColor = color;
    } else {
        const div = document.createElement("div");
        div.id = "nuevoElemento";
        div.style.width = "200px";
        div.style.height = "200px";
        div.style.backgroundColor = color;
        document.body.appendChild(div);
    }
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