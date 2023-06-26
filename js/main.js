
console.log('¡Hola prueba!');

const opciones = document.querySelectorAll('.opciones');
console.log('opciones');

opciones.forEach(function (opciones) {
    opciones.addEventListener("click", function (e) {
        const currentopciones = document.querySelector(".bnav");
        currentopciones.classList.remove("bnav");
        e.target.classList.add("bnav");




    });

});

const body = document.querySelector("body");
const botn = document.querySelector("#boton");

botn.addEventListener("click", function (e) {
    body.classList.toggle("Modo_Oscuro");



});
