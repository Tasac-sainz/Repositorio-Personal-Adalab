'use strict'
console.log("ready for conditionals");

/* ADALAB: EJERCICIOS DE CONDICIONALES
EJERCICIO 1 */

const accessOk = document.querySelector (".access-ok");
const message = document.querySelector(".message");

accessOk.addEventListener ("input", () => {
    if (accessOk.value.toLowerCase() === "leda") {
        message.innerHTML = "Bienvenida, " + accessOk.value + " es un placer verte de nuevo";
    } else if (accessOk.value.toLowerCase() === "tania") {
        message.innerHTML = "Bienvenida, " + accessOk.value + " otra vez por aquí, eh!";
    } else {
        message.innerHTML = "Lo siento pero tú no puedes acceder, esto es sólo para la pareja del año"
    };
});

/*EJERCICIO 2 */
const conditionalNumber = document.querySelector (".number-conditional");
const conditionalText = document.querySelector (".conditional-text-ej2");

conditionalNumber.addEventListener ("input", () => {
    const numberEj6 = parseInt (conditionalNumber.value);
if (numberEj6 === 0) {
    conditionalText.innerHTML = "El número es 0"
    console.log ("El número es cero");
} else if (numberEj6 <= -1) {
    conditionalText.innerHTML ="El número es negativo";
    console.log("El número es negativo");    
} else if (numberEj6 +2 >13 && numberEj6 +2 <= 20) {
    conditionalText.innerHTML ="El número más 2 es mayor que 13 pero menor o igual que 20";
    console.log("El número más 2 es mayor que 13 pero menor o igual que 20");
} else if (numberEj6 > 20 && numberEj6 <50){
    conditionalText.innerHTML ="El número es mayor que 20 pero menor que 50";
    console.log("El número es mayor que 20 pero menor que 50");
} else {  
    console.log ("El número no es 123123125");    
    conditionalText.innerHTML = ("El número no está registrado en las condiciones");    
};
});

/*EJERCICIO 3 */
// AVATAR TIENE SU PROPIA CARPETA

/*EJERCICIO 4 */
const inputDog = document.querySelector (".dog-age");
const dogButton = document.querySelector(".dog-calculate");
const resultAge = document.querySelector(".result-calculate")

dogButton.addEventListener ("click", () => {
    console.log("click");
    const dogAge = parseInt (inputDog.value);
    
    if (dogAge === 1) {
        resultAge.innerHTML = "Tu perro tiene "  + (dogAge + 14) + " años.";
    } else if (dogAge === 2) {
        resultAge.innerHTML = "Tu perro tiene 20 años";
    } else if (dogAge > 2) {
        resultAge.innerHTML = "Tu perro tiene " + (20 + dogAge * 6) + " años.";
    } else {
        resultAge.innerHTML = "No se reconoce el valor introducido"
    }
});

/*EJERCICIO 5 */
const ingrediente = document.querySelector ("#ingredients");
const recipe = document.querySelector (".recipe");
const btnSend = document.querySelector (".btn-enviar");
let ingredients = "pollo";

btnSend.addEventListener("click", (event) => {
    event.preventDefault();
    ingredients= ingrediente.value;
    if (ingredients === "pollo") {
    recipe.innerHTML = "Puedes hacerte una ensalada con unos filetes de pollo a la plancha";
    } else if (ingredients === "merluza"){
        recipe.innerHTML = "¿Qué te parece una merluza en salsa verde?";
    } else if (ingredients === "espinacas") {
        recipe.innerHTML = "Uff, ya lo siento, sólo se me ocurre que las puedas rehogar"
    } else {
        recipe.innerHTML = "Haz el favor de ir a la compra pero ya, chiquilla! que vas a morir de hambre";
    };
})

/*EJERCICIO 5 EN LA CONSOLA*/

let food = "pollo";
food = "espinacas"
food = "merluza"
food = "espinacas"

if (food === "pollo") {
    console.log ("Tu ingrediente es: " + food + ". Puedes hacerte un filete con patatas");
} else if (food === "merluza") {
    console.log ("Tu ingrediente es: " + food + ". Puedes hacerte una merlucita rebozada");
} else if (food === "espinacas") {
    console.log("Tu ingrediente es: " + food + ". Puedes hacerte un pastel de espinacas");
    } else {
        console.log ("Nevera vacía")
    };

/*EJERCICIO 6*/
const year = 1994;
console.log("El siguiente año bisiesto es " + (year +1));
