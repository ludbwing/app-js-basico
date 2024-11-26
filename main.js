//  alert("Ludwing Aldair Mamani Yucra");

let nombre = "Ludwing Aldair Mamani Yucra";
const sigla_senati = "SENATI";

//  sigla_senati = "dkfjhbary";

console.log(sigla_senati);
console.log(nombre);

//Arrays
// let edades = [23, 45, 23, 1, 15, 70, 100];
// for (let i = 0; i < edades.length; i++) {
//     console.log(edades[i]);
// }
// for(item of edades){
//     console.log(item);
// }
// edades.forEach(function(edad){
//     console.log(edad);
// });

// edades.map(function(e){
//     if (e >= 18) {
//         console.log(e + " es mayor o igual a 18 años.");
//     } else {
//         console.log(e + " es menor a 18 años.");
//     }
// });

// funcion normal
//function nombreFuncion(){

//}

// funcion Anónima
//function nombreFuncion(){
//}

//EVENTOS EN JS
//let botonHtml = document.getElementById('pruba');
//botonHtml.addEventListener('click',function(e){
//    console.log("Alguien hizo click");
//});


//tarea hacer eventos 10 en el archivo js y que sean funcionales  

//EVENTO 1: Evento de clic en el botón
let botonHtml = document.getElementById('pruba');
botonHtml.addEventListener('click',function(e){
    console.log("Alguien hizo click");
});


//EVENTO 2: Evento de doble clic
botonHtml.addEventListener('dblclick', function(e) {
    console.log("¡Se hizo doble click");
});


//EVENTO 3: Evento de mouse sobre el botón
botonHtml.addEventListener('mouseover', function(e) {
    console.log("El mouse está sobre el botón");
    botonHtml.style.backgroundColor = 'lightblue';  
});


//EVENTO 4: Evento de mouse fuera del botón
botonHtml.addEventListener('mouseout', function(e) {
    console.log("El mouse salió del botón");
    botonHtml.style.backgroundColor = '';  
});


//EVENTO 5: Evento de escribir en el campo de texto
let inputNombre = document.getElementById('nombre');

if (inputNombre) {
    inputNombre.addEventListener('input', function(e) {
        let textoEscrito = e.target.value;
        
        console.log("Estás escribiendo: " + textoEscrito);
    });
} else {
    console.error("El campo de texto no fue encontrado en el DOM.");
}


//EVENTO 6: Evento de enfoque en el campo de texto
inputNombre.addEventListener('focus', function(e) {
    console.log("El campo de texto ha recibido foco");
    inputNombre.style.backgroundColor = 'lightblue';  
});


//EVENTO 7: Evento de perder el foco en el campo de texto
inputNombre.addEventListener('blur', function(e) {
    console.log("El campo de texto ha perdido el foco");
    inputNombre.style.backgroundColor = '';  
});


//EVENTO 8: Evento de presionar una tecla en el campo de texto
inputNombre.addEventListener('keydown', function(e) {
    console.log("Tecla presionada: " + e.key);
});


//EVENTO 9
//window.addEventListener('contextmenu', function(e) {
//    e.preventDefault();  // Previene el menú contextual predeterminado
//    console.log("Se hizo clic derecho en la página.");
//    alert("¡Clic derecho detectado!");
//});


//EVENTO 10: Evento de movimiento del mouse
let divHola = document.getElementById('hola');

if (divHola) {
    window.addEventListener('mousemove', function(e) {
        let coords = `Posición del mouse - X: ${e.clientX}, Y: ${e.clientY}`;
        
        divHola.textContent = coords;
    });
} else {
    console.error('El elemento #hola no fue encontrado en el DOM.');
}
