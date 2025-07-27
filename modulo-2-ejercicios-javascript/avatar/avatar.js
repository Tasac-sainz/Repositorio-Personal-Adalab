"use strict";
console.log ("Ready")

// avatar por defecto
const DEFAULT_AVATAR = "https://images.pexels.com/photos/4457973/pexels-photo-4457973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=378&fit=crop&h=612";

// avatar que eligió el usuario al registrarse
let userAvatar = document.querySelector (".user-avatar");
userAvatar.src = "https://images.pexels.com/photos/33179452/pexels-photo-33179452.jpeg";
userAvatar.style= "width:100px; height:150px";


