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


for (const printPremium of premiumUsers) {
    console.log(printPremium.name,"es usuaria premium");
};

// EJERCICIO 5

console.log("Sólo los pares");
const pins = [2389, 2384, 2837, 5232, 8998];

const pairPin= pins.filter (pin => pin %2 === 0);
console.log(pairPin);

for ( const pinPair of pairPin) {
    console.log (pinPair)
};

// EJERCICIO 6
console.log("Sólo pueden entrar usuarias con contraseña par");

const users2 = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const accessApprobe= users2.filter (users2 => users2.pin %2 === 0)
console.log("Las constraseñas con acceso aprobado son", accessApprobe);

for (const printAccessAprobe of accessApprobe){
    console.log(printAccessAprobe.name, "tiene acceso porque su contraseña es", printAccessAprobe.pin);
    const paragraphEjercicio6 = document.querySelector('.ejercicio-6');
    paragraphEjercicio6.innerHTML += `${printAccessAprobe.name} tiene acceso porque su contraseña es ${printAccessAprobe.pin} <br>`
};


// EJERCICIO 7 lo hacemos sobre el array user2
const issue= users2.find (userIssue => userIssue.pin === 5232);
console.log(issue);
console.log ("La usuaria que presenta la incidencia es", issue.name)
console.log("La usuaria con incidencia se quiere dar de baja, la borramos del array users2");

const isssueId = users2.findIndex (userIssue => userIssue.pin === 5232);
console.log("El índice de la usuaria que se quiere dar de baja es", isssueId, "así que la borramos del array de users2");

users2.splice(3, 1);
console.log(users2);

