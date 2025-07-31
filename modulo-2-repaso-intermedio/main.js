"use strict";

console.log("Ready");



// Función para mostrar las tareas
const renderTasks = (tasks) => {
  //Reseteamos el contenido del <ul> antes de mostrar las tareas actualizadas, útil en el caso de darle al checkbox o añadir una nueva
  list.innerHTML = "";
  // Bucle para mostrar un <li> para cada elemento del array
  tasks.forEach((task) => {
    if (task.completed) {
      list.innerHTML += `<li class="task--item">
                        <input id="${task.id}" type="checkbox" checked />
                        <span class="through">${task.name}</span>
                        
                    </li>`;
    } else {
      list.innerHTML += `<li class="task--item">
                        <input id="${task.id}" type="checkbox" />
                        <span>${task.name}</span>
                    </li>`;
    }
  });
};

let tasks = [];  // Variable con el listado de tareas iniciales antes del fetch porque la vamos a sobrescribir cuando tengamos los resultados.


fetch ("https://dev.adalab.es/api/todo")
    .then((response) => {
        return response.json();})           
        .then ((data) => {
            console.log (data);
            tasks = data.results
            renderTasks(tasks);           // Invocamos a la función para mostrar las tareas con el array inicial
             
        });                            
    

// Selector del <ul>        
const list = document.querySelector(".tasks--list");

// Este bloque es lo que haríamos para crear los <li> si añun no hubiésemos visto los bucles
// list.innerHTML = `<li class="task--item">
//                     <input type="checkbox" />
//                     <span>${tasks[0].name}</span>
//                 </li>`;
// list.innerHTML += `<li class="task--item">
//                     <input type="checkbox" />
//                     <span>${tasks[1].name}</span>
//                 </li>`;
// list.innerHTML += `<li class="task--item">
//                     <input type="checkbox" />
//                     <span>${tasks[2].name}</span>
//                 </li>`;
// list.innerHTML += `<li class="task--item">
//                     <input type="checkbox" />
//                     <span>${tasks[3].name}</span>
//                 </li>`;


// Función manejadora - click en el checkbox
const handleClickCheckbox = (event) => {
  // Consultamos el id del checkbox "clickado"
  // Y lo convertimos a número
  const idTask = parseInt(event.target.id);
  // Utilizamos el métodos .findIndex ya que nos retorna el index del elemento
  // Haciendo una comprobación de si el ID del chsckbox clickado es igual al ID de la tarea
  const indexTask = tasks.findIndex((task) => task.id === idTask);
  
  // Actualizamos el dato completed del elemento en cuestión
  // !tasks[indexTask].completed nos permite cambiar el dato de true a false, o de false a true. Lo invierte.
  tasks[indexTask].completed = !tasks[indexTask].completed;
  
  // Volvemos a mostrar las tareas, en este caso actualizadas con el dato completed
  renderTasks(tasks);
};

list.addEventListener("click", handleClickCheckbox);

// Añadir tarea con el formulario

// 1. Seleccionar el botón con querySelector
// 2. Escuchar el click del botón
// 3. Crear nuestra función manejadora (handleClickAdd)
// 4. Coger el valor del input (.value)
// 5. Hacer un .push con la nueva tarea
// 6. Actualizar el DOM

const button = document.querySelector(".add--button");
const input = document.querySelector(".add--input");

const handleClickAdd = () => {
  const inputValue = input.value;

  tasks.push({
    name: inputValue,
    completed: false,
    id: 2,
  });
  
  renderTasks(tasks);
};

button.addEventListener("click", handleClickAdd);


//AQUÍ EMPIEZA LA LÓGICA PARA EL INPUT Y EL BOTÓN DE BÚSQUEDA

const inputSearch = document.querySelector(".input--search");
const taskButton = document.querySelector(".tasks--button");

const handleClickSearch = () => {
  const inputSearchValue = inputSearch.value.toLowerCase();
  const tasksFiltered = tasks.filter ((task) => task.name.toLowerCase().includes(inputSearchValue));
  renderTasks(tasksFiltered);
};
//con el método .includes hacemos una búsqueda de lo que "incluya" lo que ponga en el input de búsqueda (si es un sílaba o una palabra, también, así no tiene que ser exacto, sólo contener eso)
taskButton.addEventListener("click", handleClickSearch);

//BOTÓN DE BORRAR todas las tareas
const removeButton = document.querySelector(".tasks--remove");
const handleClickRemove = () => {
    tasks = []
    renderTasks (tasks)
};
removeButton.addEventListener("click", handleClickRemove);

//PARA MARCAR TODAS LAS TAREAS COMO COMPLETADAS
const completedButton = document.querySelector(".tasks--completed");
const handleClickCompleted = () => {
    tasks.map((task) => (task.completed = true));
    renderTasks (tasks)
};
completedButton.addEventListener("click", handleClickCompleted);