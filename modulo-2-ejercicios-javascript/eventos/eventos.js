"use strict"

console.log("ready to events!");

// ADALAB: EJERCICIOS DE EVENTOS

// EJERCICIO 1

const ej1Button = document.querySelector (".ej1-btn");
const ej1Input = document.querySelector (".ej1-input");

ej1Button.addEventListener ("click", () => {
    document.querySelector (".ej1-span").innerHTML = "Hola " + ej1Input.value + ", cada día estás más guapa";
});

//EJERCICIO 2

const ej2Button = document.querySelector(".ej2-btn");

ej2Button.addEventListener ("click", () => {
        ej2Button.classList.toggle ("ej2-btnChanged");
});

//EJERCICIO 3

const loremEj3 = document.querySelector (".ej3-lorem");

loremEj3.addEventListener ("click", () => {
    loremEj3.innerHTML+= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio animi placeat optio dolores? Nesciunt fugiat, possimus officia omnis reprehenderit neque laudantium incidunt ducimus a facere officiis totam, maxime id!";
    console.log ("Estás haciendo click");
});

//EJERCICIO 4

const inputEj4 = document.querySelector (".ej4-input");
const textEj4 = document.querySelector (".ej4-text");

inputEj4.addEventListener ("input", (event) =>{
    textEj4.innerHTML = event.currentTarget.value;
})

//EJERCICIO 5