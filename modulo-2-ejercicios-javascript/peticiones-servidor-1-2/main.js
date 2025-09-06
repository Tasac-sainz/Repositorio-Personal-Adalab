'use strict'
console.log("Ejercicios de Peticiones al Servidor (I y II)");


/* EJERCICIO 1 */

fetch ("https://api.rand.fun/number/integer?min=0&max=200")
.then ((response) => {
		return response.json();})
	.then ((data) => {
		console.log (data);
        console.log("El número aleatorio es", data.result)
	});
	
	fetch ("http://swapi.py4e.com/api/planets/1/")
		.then ((response) => {
			return response.json();})
		.then ((data) => {
			console.log("Planeta de Star Wars", data);
		});

fetch ("https://swapi.py4e.com/api/people/1")
	.then ((response) => {
		return response.json();})
	.then ((data) =>{
		console.log("Datos de Luke Skywalker", data);
	});

fetch ("https://swapi.py4e.com/api/films/1")
	.then ((response) => {
		return response.json();})
		.then ((data) => {
			console.log("Información sobre la película A New Hope", data)
		});
		
		/* EJERCICIO 2 */
const inputSearch= document.querySelector('.character');
const searchBtn=document.querySelector('.search-button')
const searchResult= document.querySelector('.search-result');

searchBtn.addEventListener ("click", () =>{
	const userInput= inputSearch.value;

	if (userInput === ""){
		searchResult.innerHTML = "Por favor escribe el nombre de un personaje de Star Wars";
		return;
	}

	fetch (`https://swapi.py4e.com/api/people/?search=${userInput}`)
		.then ((response) => {
			return response.json()})
		.then ((data) => {
			searchResult.innerHTML="";
		
		if (data.results.lenght === 0) {
			searchResult.innerHTML= "No se encuentra el personaje";
			return;
		}
		data.results.forEach(character => {
			searchResult.innerHTML= `<strong>${character.name}</strong> - Género: ${character.gender}`;
		});

})
});

/* EJERCICIO LOCAL STORAGE */

const inputName=document.querySelector('.name-in');
const lastnameIn=document.querySelector('.lastname-in');
const paragraphResult=document.querySelector('.result-storage');

const getData= () => {
	const userData = {
		name: inputName.value,
		lastname: lastnameIn.value,
			}
	paragraphResult.textContent = `${userData.name} ${userData.lastname}`;
	localStorage.setItem ("usuario", JSON.stringify(userData));
	};

inputName.addEventListener("keyup", getData);
lastnameIn.addEventListener("keyup", getData);

const saveData= localStorage.getItem("usuario");
if (saveData) {
	const dataObj= JSON.parse(saveData);
	inputName.value= dataObj.name;
	lastnameIn.value= dataObj.lastname;
	
	paragraphResult.textContent=`${dataObj.name} ${dataObj.lastname}`
};

/* EJERCICIO MI TEMA PREFERIDO */
const handleChangeTheme= (event) => {
	const chosenTheme= event.currentTarget.value;
	document.body.classList.remove("default-theme", "dark-theme");

	if (chosenTheme === "dark") {
		document.body.classList.add ("radio-dark")
	} else {
		document.body.classList.remove ("radio-dark")
	}
};
document.querySelectorAll('.theme-radio').forEach(radio => radio.addEventListener('change', handleChangeTheme));

