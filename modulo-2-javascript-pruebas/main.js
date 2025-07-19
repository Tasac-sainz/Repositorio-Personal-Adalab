'use strict';
console.log ("ready ;O)");

console.log ("COMPROBACIÓN DEL USO DEL BUCLE for of");

const movies =["Noviembre", "Hacia rutas salvajes", "Amelie", "Moulin Rouge", "Captain Fantastic"];
for (const movie of movies) {
    console.log (`${movie} fue nominada a los Oscar`);
}

console.log ("****************************************");
console.log ("COMPROBACIÓN DEL USO DEL BUCLE for in");

const userData ={
    name:"Ana",
    email:"ana@gmail.com",
}

for (const item in userData) {
    console.log (item);
    console.log (userData [item]);
};

console.log ("****************************************");
console.log ("COMPROBACIÓN DEL USO DEL BUCLE forEach");
const numbers = [1,2,3,4,5];
numbers.forEach ((number) => {
    console.log ("Número: " + number);
});
console.log ("********************************************")
numbers.forEach ( (number, i) => {
    console.log ("Número: " + number + "  Índice: " + i);
});

console.log ("********************************************")
numbers.forEach ( (number, i) => {
    console.log ("Número: " + number + "  Índice: " + i);
    if (i === 2) {
        console.log ("Este es el tercer elemento " + numbers [2]);
    };
});
console.log ("********************************************")
console.log ("PRÁCTICA CON ARRAYS Y OBJETOS");
console.log ("ARRAYS CON OBJETOS DENTRO")
const contacts = [
    {name: "Raquel",
        phone: "915552323",
        email: "raquel@inbox.com",
    },
    {name: "Pedro",
        phone: "915554564",
        email: "pedro@inbox.com",
    },
    {name: "Laura",
        phone: "915555656",
        email: "raquel@inbox.com",
    },
];

console.log (contacts[0].name);
contacts.forEach ( (contact) => {
    console.log ("Este es el mail de cada contacto:  " + contact.email);
});
console.log("************************************************");
contacts[2].email = "laura@inbox.com";
contacts.forEach ( (contact) => {
    console.log ("Este es el mail de cada contacto:  " + contact.name + " : " + contact.email);
});

console.log("************************************************");
console.log ("OBJETO CON ARRAY DENTRO");

const task = {
    name: "crear un repositorio",
    participants: ["Raquel", "Pedro", "Laura"],
};

console.log (task.participants[0]);
task.participants.push ("Diego");
console.log (task.participants);
task.participants[0]="Andrea";
console.log (task.participants);

console.log("************************************************");
console.log ("USO DEL MÉTODO querySelectorAll")

const paragraphs = document.querySelectorAll ("p");
console.log (paragraphs);
paragraphs[1].innerHTML = "Este es el segundo párrafo modificado";
paragraphs[0].innerHTML = "Estos son otros párrafos";
paragraphs[2].innerHTML = "Estos son otros párrafos";
console.log (paragraphs[1]);

paragraphs.forEach ((paragraph) => {
    paragraph.classList.add ("custom");
    console.log (paragraph);
});
