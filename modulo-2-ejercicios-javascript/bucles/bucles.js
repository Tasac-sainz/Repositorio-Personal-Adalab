'use strict'
console.log("ready for bucles!");

// EJERCICIO 1

for( let i = 1; i < 11; i ++) {
    console.log (`Voy por la vuelta ${i} y llegaré hasta la décima`);
}

// EJERCICIO 2

let acc = 0;

for (let i=0; i<10; i++) {
    acc += 2;
    console.log(`El resultado es: ${acc}`);    
}

// EJERCICIO 

const numbersEj3 = [7, 6, 9, 10, 8];
numbersEj3.push(5);

let accEj3=0;

for (const number of numbersEj3) {
    accEj3 += number
}

const average1 = accEj3/6;
console.log("De los números  " + numbersEj3 + "  la media es " + average1);

console.log("************************************");

const array1 = [2, 1, 2, 2];
const array2 = [5, 6, 10, 10, 5, 7, 10, 15, 4];
const array3 = [20, 25, 20, 15, 30, 100, 45];
const array4 = [8, 7, 8, 7, 8, 8];


const average = (otherNumbers) => {
    let sum=0;
    for (const number of otherNumbers) {
        sum += number;
    }
    const result= sum/otherNumbers.length;
    return result;
};

console.log("La media del array 1 es: " , average(array1), "y su longitud: ", array1.length);
console.log("La media del array 2 es: " , average(array2), "y su longitud: ", array2.length);
console.log("La media del array 3 es: " , average(array3), "y su longitud: ", array3.length);
console.log("La media del array 4 es: " , average(array4), "y su longitud: ", array4.length);


// EJERCICIO 3
const inputOne= document.querySelector('.input-ej4_1');
const inputTwo= document.querySelector('.input-ej4_2');
const submitEj4= document.querySelector('.form-4');
const resultEj4= document.querySelector('.result-ej4');


const handleClick = (event) => {
    event.preventDefault()
    const works = [inputOne.value, inputTwo.value];
    resultEj4.innerHTML = "";
    for (const work of works) {
        resultEj4.innerHTML += `¡A mí también me encanta "${work}"! Tenemos mucho en común, humana <br><br>`
    }
}

submitEj4.addEventListener ("submit", handleClick)

// EJERCICIO 4

const adalabers = [
    {name: "María",
     age: 29,
     profession: "diseñadora"
    },
    {name: "Lucía",
     age: 31,
     profession: "ingeniera química" 
    },
    {name: "Susana",
     age: 34,
     profession: "periodista"
    },
    {name: "Rocío",
     age: 25,
     profession: "actriz"
    },
    {name: "Inmaculada",
     age: 21,
     profession: "diseñadora"
    },
]


