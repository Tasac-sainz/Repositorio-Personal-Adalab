'use strict'
console.log("Ready!!Ejercicios de Arrays y bucles");

// EJERCICIO 1

const get100Numbers = () => {
    const numbers = [];
    for (let i=1; i<=15; i++) {
        numbers.push(i)
    }
    return numbers
};
   const generate100Numbers= get100Numbers();

   for (const listNumber of generate100Numbers){
       console.log(listNumber);
       };
   
console.log("******************");


const getReversed100Numbers= () => {
    const reverseNum = generate100Numbers.reverse()
    return reverseNum
}
const reverseArray = getReversed100Numbers()
for (const reversedNumber of reverseArray){
    console.log (reversedNumber);
}

// EJERCICIO 2

const lostNumbers = [4, 8, 15, 16, 23, 42];

const bestLostNumber = () => {
    const pairs = [];
    const multiOf3= [];

    for (const number of lostNumbers) {
    if (number %2 === 0) {
        pairs.push(number)
    } else if (number %3 === 0) {
        multiOf3.push(number)
    }
};
console.log ("los números pares son", pairs)
console.log ("los números múltiplos de 3 son", multiOf3)

const bestNumberConcat= pairs.concat (multiOf3)
console.log(bestNumberConcat);

    for (const concatNumber of bestNumberConcat){
        console.log (concatNumber)
    }
};

bestLostNumber();

