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
