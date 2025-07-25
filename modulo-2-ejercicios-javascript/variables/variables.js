'use strict'
console.log("ready :)");

//ADALAB-VARIABLES
//EJERCICIO 1 

document.querySelector("h1").innerHTML = "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";

// EJERCICIO 2

document.querySelector("h2").innerHTML = "Hola, mundo!";

//EJERCICIO 3

const choosen = document.querySelector(".ej3-first-li");
choosen.innerHTML = "Tania";
document.querySelector(".ej3-title").innerHTML = "La Adalaber seleccionada es:  " + choosen.textContent;

//EJERCICIO 4

const ej4Title = document.createElement("h1");
ej4Title.textContent = "Los podencos";

const paragraph = document.createElement ("p");
paragraph.textContent = "Los podencos son perros sensibles, leales y cariñosos; son perros maravillosos que merecen mucho cariño y respeto";

document.querySelector(".ej4-container").appendChild(ej4Title);
document.querySelector(".ej4-container").appendChild(paragraph);

//EJERCICIO 5
let myadress = "Madrid, 28009";
myadress = "Alcobendas, 28110";
console.log(myadress);

//EJERCICIO 6
document.querySelector(".ej6-button2").classList.add ("disabled-button");