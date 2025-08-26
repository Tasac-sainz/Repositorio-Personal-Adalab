"use strict"
console.log("Ejericicios extra de peticiones al servidor");

/* Ej 1: número aleatorio */

const randNumber = document.querySelector (".random-number");
const searchBtn = document.querySelector(".search-number");

const handleClickSearchBtn = () => {
fetch ("https://api.rand.fun/number/integer")
    .then ((response) => {
        return (response.json())
    })
    .then ((data) => {
        randNumber.innerHTML ="El número es: " + data.result;
    })
    .catch ((error) => {
        window.alert ("Error en la petición", error)
    }
)};

searchBtn.addEventListener ("click", handleClickSearchBtn);

/* Ej 2: Mostrar huskys */
const dog = document.querySelector(".husky");
const otherDog = document.querySelector(".other-husky");
const otherDogBtn = document.querySelector(".other-husky_btn");

const createPromise = () => 
fetch ("https://dog.ceo/api/breed/husky/images/random")
    .then ((response) => {
        return (response.json())
    })
    .catch ((error) => {
        window.alert ("Error en la petición", error)
    });

    const promises = [createPromise(), createPromise()]

    Promise.all (promises).then ((doggy) => {
        dog.src = doggy[0].message
        otherDog.src = doggy[1].message
        
    })

otherDogBtn.addEventListener ("click",() => {
    fetch ("https://dog.ceo/api/breed/husky/images/random")
    .then ((response) => {
        return (response.json())
    })
    .then ((data) => {
        otherDog.src = data.message
    })
    .catch ((error) => {
        window.alert ("Error en la petición", error)
    });
})