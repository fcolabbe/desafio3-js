const pintar = function (evento, color = 'green') {
    evento.target.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

ele.addEventListener("click", function (evento) {
    pintar(evento, 'yellow');
});