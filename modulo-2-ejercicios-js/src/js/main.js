'use strict';

console.log('>> Ready :)');

//inicio ejercicios de variables

//EJERCICIO 1:
document.querySelector("h1").innerHTML = "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";

//EJERCICIO 2:
document.querySelector(".hello").innerHTML = "Hola, mundo";

//EJERCICIO 3:
document.querySelector("h2").innerHTML="la Adalaber seleccionada es:";
document.querySelector("ul").innerHTML="Kaski";

//EJERCICIO 4:
/* const box = document.querySelector(".lorem");
box.innerHTML = "<h1>Los Podencos</h1><img src= https://images.unsplash.com/photo-1549930098-2bc4cd0aac53?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/><p>Los PODENCOS son perros maravillosos</p>";
 */
 document.querySelector(".title").innerHTML="Los Podencos"
 document.querySelector(".image").src = "https://images.unsplash.com/photo-1549930098-2bc4cd0aac53?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 document.querySelector(".subtitle").innerHTML="los PODENCOS son perros maravillosos";

//EJERCICIO 5:
let myAddress = 'Madrid, 28009';
myAddress = 'Alcobendas, 28110';
document.querySelector(".address").innerHTML = myAddress;

//EJERCICIO 6:
document.querySelector(".button-ej6-second").classList.add ("disabled");

//ejercicio de eventos

//EJERCICIO 1:
let textInput = document.querySelector(".input");
textInput.addEventListener("change", (event) => {console.log ("Estás escribiendo en el input");
    textInput = event.target.value;
    console.log ("valor del input:", textInput);
    document.querySelector(".Hello").innerHTML = "Bienvenida, " +event.target.value;
});

//EJERCICIO 2:
const myButton = document.querySelector(".change-button");
myButton.addEventListener("click", (event) => {
    document.querySelector(".change-button").classList.toggle ("changed");
    console.log ("has hecho click y por eso ha cambiado el botón")
});

//EJERCICIO 3:



