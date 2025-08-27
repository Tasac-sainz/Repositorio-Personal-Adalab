"use strict"
console.log("Ejercicios extra de peticiones al servidor");

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

/* Ej 3: usuario de Git */

let inputGit = document.querySelector(".input-git");
const btnGit = document.querySelector(".btn-git");

let usernameResult = document.querySelector(".username-result");
let numberOfRepos = document.querySelector(".repositories-result");
let avatarImg = document.querySelector(".avatar-result");

const handleClickSearchUs = (event) => {
    event.preventDefault();
    const username = inputGit.value;
    fetch (`https://api.github.com/users/${username}`)
        .then ((response) => {
            if (response.status === 404) {
                window.alert("Ese usuario no existe")
            }
            return (response.json())
    })
    .then ((data) => {
        usernameResult.textContent = "Nombre completo: " + data.name;
        numberOfRepos.textContent = "Número de repositorios públicos: " + data.public_repos;
        avatarImg.src = data.avatar_url
    })
    .catch ((error) => {
        console.log("Ha ocurrido un error en la petición", error)
    })
};

btnGit.addEventListener ("click", handleClickSearchUs);

/* Ej 4: mostrar 10 huskys */

const tenHuskys = document.querySelector (".btn-ten-huskys");
const moreHuskys = document.querySelector (".btn-more-huskys");
const tenHuskysImg = document.querySelector(".ten-images")

const handleClickTenHuskys = () => {
    tenHuskysImg.innerHTML = "";
    tenHuskysImg.textContent = "10 huskys en camino...";
    const promises = [];
    for (let i = 0; i < 10; i++) {
    promises.push(fetch ("https://dog.ceo/api/breed/husky/images/random").then ((response) => response.json()))
    };

    Promise.all(promises).then ((results) => {
        tenHuskysImg.textContent = "";
        results.forEach((result) => {
            const huskysImg = document.createElement("img");
            huskysImg.src =result.message;
            tenHuskysImg.appendChild(huskysImg);
            })
        });
    }

tenHuskys.addEventListener ("click", handleClickTenHuskys);

const handleClickMoreHuskys = () => {
    tenHuskysImg.innerHTML = "";
    tenHuskysImg.textContent = "Marchando 25 perritos..."

    const proms = [];
    for (let i=0; i < 25; i++) {
        proms.push (fetch ("https://dog.ceo/api/breed/husky/images/random").then((response) => response.json()))
    };

    Promise.all(proms).then ((huskys) => {
        tenHuskysImg.textContent = "";
        huskys.forEach((husky) => {
            const huskysImg = document.createElement ("img");
            huskysImg.src = husky.message;
            tenHuskysImg.appendChild(huskysImg)
        })
    });
}

moreHuskys.addEventListener ("click", handleClickMoreHuskys);