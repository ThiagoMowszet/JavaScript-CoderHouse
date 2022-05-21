/*
Crea un script en JS que le solicite al usuario ingresar mínimo 1(un) dato.
Luego, con JavaScript, realiza operaciones matemáticas o de concatenación sobre las entradas teniendo en cuenta el tipo de dato.
Al finalizar mostrar el resultados con alert() o console.log()
*/

debugger

let ingreso_usuario = prompt("Hola! Como te llamas?");
const resultado = alert("Hola " + ingreso_usuario + "! Bienvenido");


// Prueba con if
let edadUsuario = parseInt(prompt("Cuantos años tienes?"));

//edadUsuario = parseInt(edadUsuario)

if (edadUsuario > 18){ 
    console.log(edadUsuario)
    const resultadoEdad = alert("Eres Mayor de edad");
}
else {
    const resultadoEdad = alert("Eres menor de edad");
}