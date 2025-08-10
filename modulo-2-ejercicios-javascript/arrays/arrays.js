'use strict'
console.log("Vamos allá con los arrays");
 
// EJERCICIO 1

const movies = ["los edukadores", "noviembre", "la llamada de lo salvaje"];

movies.push ("rocky");
console.log(movies);

movies[2]="colmillo blanco";
console.log(movies);

const workWithMovies= () => {
        const movies = ["los edukadores", "noviembre", "la llamada de lo salvaje"];
    
    movies.push ("rocky");
    console.log(movies);
    
    movies[2]="colmillo blanco";
    movies[1]="expediente warren"
    console.log(movies);
} 

workWithMovies();
