// STORAGE 

/* 

El objeto Storage nos permite almacenar datos de manera local en nuetro navegador sin necesidad de realizar conexion con el servidor. 
Asi, cada cliente puede preservar la informacion de la aplicacion

El objeto Storage API cuenta con varios mecanismos de almacenamiento, los cuales son: 

1. *local/sessionStorage 
2. WebSQL
3. indexedDB

// *localStorage nos guarda la informacion de forma indefinida (o hasta que se borre la informacion del navegador).
// *sessionStorage nos guarda la informacion de forma definida (hasta que termina la sesion en el navegador).

*/



// Clave, Valor = la informacion almacenada en el Storage se guarda en forma de: clave-valor



// Metodos de almacenamiento 

// Tanto localStorage como sessionStorage cuentan con 4 metodos para manejar el almacenamiento de informacion del lado del usuario. 

setItem() // Almacena informacion.
getItem() // Accede a la informacion almacenada en localStorage/sessionStorage.
removeItem() // Elimina la informacion almacenada  en localStorage/sessionStorage.
clear() // Elimina toda la informacion. 


// Ejemplos 


//setItem() -- localStorage

/* 
Método ->  localStorage.setItem(clave, valor)
clave = nombre para identificar el elemento 
valor = valor/contenido del elemento 
*/

localStorage.setItem('bienvenida', '¡Hola Coder!');
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);



//getItem() -- localStorage

let mensaje = localStorage.getItem('bienvenida');
let bandera = localStorage.getItem('esValido');
let numero = localStorage.getItem('unNumero');

console.log(mensaje); // ‘¡Hola Coder!’
console.log(bandera); // ‘true’
console.log(numero);  // ‘20’


// setItem() -- sessionStorage

sessionStorage.setItem('seleccionados', [1, 2, 3]);
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'info@email.com');



// getItem() -- sessionStorage

let lista = sessionStorage.getItem('seleccionados').split(",");
let banderas = (sessionStorage.getItem('esValido') == 'true');
let email = sessionStorage.getItem('email');

console.log(typeof lista);   //object ["1","2","3"];
console.log(typeof bandera); //boolean;
console.log(typeof email);   //string;




// Tambien podemos acceder a un objeto

//Guarda una clave
localStorage.numeroPrueba = 5;

//Leer una clave
alert(localStorage.numeroPrueba); // 5

let clave = 'toString';	 //toString método reservado	
localStorage[clave] = "6"; //No se guarda este dato



// Tambien es posible recorrer nuestro storage 

//Ciclo para recorrer las claves almacenadas en el objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
}



// Eliminar datos del storage 

localStorage.setItem('bienvenida', '¡Hola Code!');
sessionStorage.setItem('esValido', true);

localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido');

localStorage.clear() //elimina toda la información
sessionStorage.clear() //elimina toda la información




// Almacenar objetos en Storage 
// * Tenemos que tener en cuenta que tanto la clave como el valor se almacenan en strings. 


const producto1 = { id: 2, producto: "Arroz" };
localStorage.setItem("producto1", producto1); // Se guarda [object Object]





/*

JSON

Es un formato en forma de texto plano (parecido a lo que es XML), que nos sirve para representar datos estructurados con la sintaxis de objetos de JS.

JSON es un string con un formato especifico

*/



// STRINGIFY  =  Nos permite transformar un objeto JS a un string en formato JSON.

const producto2 = { id: 2, producto: "Arroz" };
const enJSON = JSON.stringify(producto1);

console.log(enJSON); // {"id":2,"producto":"Arroz"}
console.log(typeof producto1); // object
console.log(typeof enJSON); // string

localStorage.setItem("producto1", enJSON); // Se guarda {"id":2,"producto":"Arroz"}




// PARSE = Nos permite transformar string en formato JSON a objeto JS. 


const enJSON2 = '{"id":2,"producto":"Arroz"}';
const producto3 = JSON.parse(enJSON);

console.log(typeof enJSON); // string
console.log(typeof producto1); // object
console.log(producto1.producto); // Arroz

const producto4 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto2.id);  // 2 



// Ejemplo 

const productos = [
    { id: 1, producto: "Arroz", precio: 125 },
    { id: 2, producto: "Fideo", precio: 70 },
    { id: 3, producto: "Pan", precio: 50 },
    { id: 4, producto: "Flan", precio: 100 }
];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//Almacena producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}

// almacena un array completo
guardarLocal("listaProductos", JSON.stringify(productos));




// Obtenemos un array almacenado 


class Producto {
    constructor(obj) {
        this.nombre  = obj.producto.toUpperCase();
        this.precio  = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos2 = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados)
    productos.push(new Producto(objeto));
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of productos)
    producto.sumaIva();





// Ejemplo para recuperar datos previos 

let carrito = []
let carritoEnLS = JSON.stringify(localStorage.getItem('carrito'))

// Inicializo mi app con carrito como array vacío o con el registro que haya quedado en LS
if (carritoEnLS ) {
    carrito = carritoEnLS 
}

// Función que renderizaría el carrito
renderCarrito( carrito ) 