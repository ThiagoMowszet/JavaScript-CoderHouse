// -- Resumen realizado por : Thiago Mowszet <3 

/*

JavaScript
Es un lenguaje de programacion que se utiliza para aportar dinamica a sitios y apps webs. 
Es un lenguaje de programacion interpretado, qu significa que se ejecuta por medio de un programa interprete (en este  caso los navegadores.)
En el año 1995 nace JS, cuando se utiliza en la herramienta del navegador Netscape.

*/


// Como escribir codigo JS? 


// 1. Dentro de un archivo HTML con el tag <script> 


//<script>
//codigo
//</script>


// 2. En un archivo individual con la extension .js y vinculandolo al HTML con el tag <script src="main.js"></script>


//<script src="main.js"></script> 



// Comentarios en JS

// Tenemos comentarios de una linea, como este. 

/*
Comentarios de multiples
lineas
como 
este
*/



// Palabras reservadas en JS

/* 
break, case, catch, continue, default, let
delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with, y varias más
*/




// Variables 

// Una variable es un espacio reservado en memoria que puede cambiar de contenido a lo largo de la ejecucion de nuestro programa. En las variables podemos asignar distintos tipos de datos

// var ya no se usa. LET es ahora como asignamos nuestras variables.
var nombre2
var nombre3

// CORRECTO 
let nombre
let apellido
let edad
let sueldo
let hombre

// Valores de variables

nombre = "thiago" // String (siempre las cadenas de texto van entre "").
edad = 22 // Number.
sueldo = 2, 000 // Float (numeros con coma).
hombre = true // Boolean (valores de verdadero o falso).


// Tambien ademas de inicializar las variables y despues darle valor podemos hacerlo diferente 

let coder = "house"
let mouse = "logitech"
let modelo = 503



// Ademas de var y let, tenemos CONST que recibe una unnica asignacion al momento de su declaracion. Impidiendo asi que su valor cambie. 

const apellidos = "Rodriguez" // La variable apellidos siempre va a tener el valor de Rodriguez y en ningun momento puede ser cambiada. 




// Operaciones Basicas

let a = 1
let b = 2

let suma = a + b  // 3

let resta = a - b // -1

let division = a / b //0.5

let multiplicacion = a * b // 2


let c = "coder"
let d = "house"

let concatenacion = c + d // coderhouse




// prompt(), sirve para la entrada de datos.

let usuario = prompt("Ingrese su nombre")


// confirm(), nos muestra un mensaje con dos botones: aceptar - cancelar.

confirm("Usted es mayor de edad?")


// alert(), nos muestra una ventana sobre la web.

alert(`Hola ${usuario}`)


// Console.log(), nos muestra el mensaje que pasamos como parametro. 

let mensaje = "Si estas leyendo esto es porque estas estudiando JS"
console.log(mensaje) // Si estas leyendo esto es porque estas estudiando JS