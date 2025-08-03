"use strict";
console.log("ready for your DOM");

const emoji= document.querySelector('.emoji');
const play=document.querySelector('.play');


play.addEventListener("click", () => {
fetch ("https://api.rand.fun/games/rockpaperscissorslizardspock")
    .then ((response) => {
        return response.json()
    })
    .then ((data) => {
        console.log (data);
        emoji.innerHTML= data.result;
    });
});

const dogImg=document.querySelector('.dog-image');
const podencoBtn=document.querySelector('.dog1')
const huskyBtn=document.querySelector('.dog2');
const malamuteBtn=document.querySelector('.dog3')

const handleClickBtnDog1 = () => {
    fetch (encodeURI("https://dog.ceo/api/breed/hound/ibizan/images/random"))
        .then ((response) =>{
            return response.json()
        })
        .then ((data) =>{
            dogImg.src = data.message;
        })
    };
const handleClickBtnDog2 = () => {
    fetch ("https://dog.ceo/api/breed/husky/images/random")
        .then ((response) =>{
            return response.json()
        })
        .then ((data) =>{
            dogImg.src = data.message;
        })
    };
const handleClickBtnDog3 = () => {
    fetch ("https://dog.ceo/api/breed/malamute/images/random")
        .then ((response) =>{
            return response.json()
        })
        .then ((data) =>{
            dogImg.src = data.message;
        })
    };
podencoBtn.addEventListener("click", handleClickBtnDog1);
huskyBtn.addEventListener ("click", handleClickBtnDog2);
malamuteBtn.addEventListener("click", handleClickBtnDog3);