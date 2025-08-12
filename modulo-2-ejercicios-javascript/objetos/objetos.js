'use strict'
console.log("Ready for objets");

// EJERCICIO 1

const presentation = document.querySelector('.adalaber');

const adalaber1 = {
    nombre: "Susana",
    edad: 34,
    profesión: "periodista",
    run: () => console.log("Estoy corriendo"),
       
}

presentation.innerHTML= `Mi nombre es ${adalaber1.nombre}, tengo ${adalaber1.edad} y soy ${adalaber1.profesión} <br>`;

const adalaber2 = {
    nombre: "Rocío",
    edad: 25,
    profesión: "actriz",
    runMarathon: distance => console.log ("Estoy corriendo un maratón de " + distance + " kilómetros")
}

presentation.innerHTML += `Mi nombre es ${adalaber2.nombre}, tengo ${adalaber2.edad} y soy ${adalaber2.profesión}`;
// EJERCICIO 2
adalaber1.run();
adalaber2.runMarathon(45)
console.log ("SIGUIENTE EJERCICIO");

// EJERCICIO 3

adalaber1.nombre = "María";
adalaber1.showBio = () => console.log("Mi nombre es "+ adalaber1.nombre + " tengo " + adalaber1.edad + " y soy " + adalaber1.profesión);
adalaber2.showBio = () => console.log("Mi nombre es "+ adalaber2.nombre + " tengo " + adalaber2.edad + " y soy " + adalaber2.profesión);

adalaber1.showBio();
adalaber2.showBio();

// EJERCICIO 4
const pearsBox = {
    max: 15,
    min: 1,
    current: 3,
    initial: 0,
    addPears: () => pearsBox.current ++,
    restPears: () => {
        if (pearsBox.current > pearsBox.min) {
            pearsBox.current --
            numberOfPears.innerHTML = `En la cesta hay ${pearsBox.current} peras porque has sacado una`}
        else {
                    numberOfPears.innerHTML ="No quedan peras, no puedes sacar ninguna";
                    console.log ("No puedes sacar más peras porque la cesta está vacía")
                }},
    resetPears: () => pearsBox.current = pearsBox.initial
}


const numberOfPears = document.querySelector('.number-of-pears');
const addBtn = document.querySelector('.add-pears');
const restBtn = document.querySelector('.rest-pears');
const resetBtn = document.querySelector('.reset-pears');
numberOfPears.innerHTML = `En la cesta hay ${pearsBox.current} peras`

addBtn.addEventListener ("click", () => {
    pearsBox.addPears ()
    console.log(`En la cesta hay ${pearsBox.current} peras`);
    numberOfPears.innerHTML = `En la cesta hay ${pearsBox.current} peras porque has metido una más`;
    
});
restBtn.addEventListener("click", () => {
    pearsBox.restPears ()
    console.log(`En la cesta hay ${pearsBox.current} peras`);
});
resetBtn.addEventListener("click", () => {
    pearsBox.resetPears ()
    console.log(`En la cesta hay ${pearsBox.current} peras`);
    numberOfPears.innerHTML = `En la cesta hay ${pearsBox.current} peras porque has vaciado la cesta`;
});

// EJERCICIO 5

const infoUs = {};
const job = "developer";

infoUs["firstName"]= "Antonio";
infoUs ["lastName"]= "García";
infoUs.age= 35;
infoUs.job= job;

console.log (infoUs);

infoUs.firstName = "Noa";
infoUs.age= 40;
console.log ("El valor de la propiedad 'job' es: ", infoUs["job"]);
console.log ("Esta persona cambió de nombre a: ", infoUs.firstName);
console.log (`Su edad es: ${infoUs.age} años`);

