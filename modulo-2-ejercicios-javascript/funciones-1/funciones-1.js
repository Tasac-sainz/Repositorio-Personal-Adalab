'use strict'
console.log("kaski is ready for functions");

// EJERCICIO 1
  const maths = (a,b) => {
    return a*b;
}
console.log(maths(4,8));

const media= (a,b,c,d) => {
    return ((a+b+c+d)/4)
    }
console.log (media(7,5,7,9));

const par = (a) => {
    if (a %2 === 0) {
        console.log (true)
    } else {
        console.log (false)
    };
}
par (124);

// EJERCICIO 2
const price= (price) => {
    const ivaPrice = (price*21)/100;
    console.log (ivaPrice);
    const total = price + ivaPrice;
    console.log ("El precio sin IVA es", price, " el importe del IVA es ", ivaPrice , " el precio total es ", total)
}
price (20);

// EJERCICIO 3
// modificamos una variable de ámbito global
let secretLetter = 'y';
const mySecretLetter = () => {
  secretLetter = 'x';
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"
//si cambio el orden de los console.log sólo se imprime una x porque aún no se habría invocado la función que hace que secretletter sea x y por eso, se imprime primero Y y luego X en lugar de X X.

//EJERCICIO 4
const getEl= (select) => {
     return document.querySelector(select)
}
const demoTitle = getEl (".demo-title");
demoTitle.innerHTML = "ENSAYO Y ERROR, ESTA ES LA MEJOR FORMA DE APRENDER";
const demoSpan = getEl (".demo-span");
demoSpan.innerHTML = "Aunque en ocasiones, pueda resultar muy frustrante.";
const demoButton = getEl (".demo-button");

demoButton.addEventListener ("click", ()  => demoSpan.innerHTML += " Sin embargo, otras veces, puede resultar maravilloso");


// EJERCICIO 1 DE FUNCIONES 2 no entiendo la lógica
const calcularCaja = (boxModel, width, padding, borderSize) => {
    if(boxModel === "border-box")
        {console.log(true);
        }else (false)
        
    };
    
// EJERCICIO 2 DE FUNCIONES 2
const countBtn = getEl (".btn-count");
const countResult = getEl (".count-result");
let count = 0;

countBtn.addEventListener ("click", () => {
    count  += 1;
    countResult.innerHTML = (`Has pulsado  ${count}  veces el botón de contador`);
});

// EJERCICIO 3 DE FUNCIONES 2
const changeBackground = getEl (".background-color");
const color1= "#dadf4bff";
const color2= "#17c47cff";
const color3= "#8fafbeff";
const color4= "#cfc4c6ff";
const color5= "#89483aff";
const color6= "#54c252b4";


changeBackground.addEventListener ("click", () => {
    let randomColor =  Math.floor(Math.random() * 6) + 1;
    console.log (randomColor)
    let selectColor;
    switch (randomColor) {
        case 1: selectColor = "#dadf4bff"; break;
        case 2: selectColor = "#17c47cff"; break;
        case 3: selectColor = "#8fafbeff"; break;
        case 4: selectColor = "#cfc4c6ff"; break;
        case 5: selectColor = "#89483aff"; break;
        case 6: selectColor = "#54c252b4"; break;
    }
    document.body.style.backgroundColor = selectColor;
});