'use strict';
console.log("Ejercicios de métodos funcionales de arrays");

// EJERCICIO 1
const marks = [5, 4, 6, 7, 9];

const inflatedMarks= marks.map (marks => marks +1);

console.log (inflatedMarks)

// EJERCICIO 2
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const welcome = names.map (names => "Bienvenida "+ names)
console.log(welcome);

// EJERCICIO 3

const users = [
    { name: "María", isPremium: false },
    { name: "Lucía", isPremium: true },
    { name: "Susana", isPremium: true },
    { name: "Rocío", isPremium: false },
    { name: "Inmaculada", isPremium: false },
];

const welcomePremium= users.map((user) => 
    user.isPremium
? `Bienvenida ${user.name}. Gracias por confiar en nosotras.`
: `Bienvenida ${user.name}`
);
console.log (welcomePremium)

// EJERCICIO 4

const premiumUsers= users.filter (user => user.isPremium)
console.log (premiumUsers)