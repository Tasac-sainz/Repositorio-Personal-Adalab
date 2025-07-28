'use strict'
console.log("ready for data type");


/*EJERCICIO 1*/
console.log(3+23);
const num1 = 9;
const num2 = 10;
console.log(num1+num2);

/*EJERCICIO 2*/
const superWave = document.querySelector('.super-wave');
superWave.classList.add ("wave-class")

/*EJERCICIO 3*/
const kiwis= 5;
const pears= 2;
const grape= 4;

const totalPrice = (kiwis*2) + (pears*3) + (grape*0.5);
console.log(totalPrice);

/*EJERCICIO 4*/
const age="42";
const hoursLives=  (age * 8760);
console.log ("Has vivido un total de " +hoursLives+ " horas");

/*EJERCICIO 5*/
const firstDogImage = "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage = "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage = "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

const dogList = document.querySelector (".dog-list");

dogList.innerHTML = `
<li>
        <h3>${firstDogName}</h3>
        <img src = "${firstDogImage}" />
        <li>
        <h3>${secondDogName}</h3>
        <img src = "${secondDogImage}" />
        </li>
    </li>
    <li>
    <h3>${thirdDogName}</h3>
    <img src = "${thirdDogImage}" />
    </li> `;
    
    /*EJERCICIO 6*/
    const nameSize = "Leda di Croce"
    const paragraph = document.querySelector (".name-lenght").innerHTML = `El nombre de mi compañera es  ${nameSize}   y está compuesto por   ${nameSize.length}  caracteres `; 
    
    /*EJERCICIO 7*/