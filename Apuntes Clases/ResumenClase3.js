// -- Resumen realizado por : Thiago Mowszet <3 

// FUNCIONES -- Es un conjunto de instrucciones que se agrupan para realizar una tarea concreta

/*


Ventajas de usar funciones 

1. Evita instrucciones duplicadas 
2. Soluciona un problema complejo usando tareas sencillas 
3. Focaliza tareas prioritarias para el programa 
4. Aporta ordenamiento y entendimiento al código
5. Aporta facilidad y rapidez para hacer modificaciones

    
*/


function saludar() {
    console.log("¡Hola amigos!");
}

saludar() // Recuerden siempre llamar a la función. Sino el bloque de codigo no se ejecutara.
// ↖ ¡Hola amigos! 


// EJEMPLO PRACTICO DE FUNCIONES

let nombreIngresado1 = prompt("Ingresar nombre")
alert("El nombre ingresado es " + nombreIngresado)
let nombreIngresado2 = prompt("Ingresar nombre")
alert("El nombre ingresado es " + nombreIngresado)
let nombreIngresado3 = prompt("Ingresar nombre")
alert("El nombre ingresado es " + nombreIngresado)


// ⬆  Esto lo resolvemos con una función

function solicitarNombre() {
    let nombreIngresado = prompt("Ingresar nombre")
    alert("El nombre ingresado es " + nombreIngresado)
}

solicitarNombre()
solicitarNombre()
solicitarNombre()



// FUNCIONES CON PARAMETROS  -- Los parámetros son variables que se declaran dentro de la función, entre sus paréntesis. Los valores de éstos se definen luego en el llamado.


function conParametros(parametro1, parametro2) {
    console.log(`${parametro1} + ${parametro2}`);
}

conParametros("Hola", "Coder"); // -> “Hola Coder”
conParametros("Cursando", "JS"); // -> “Cursando JS”



// RETURN -- Retorna un valor a la función que lo llama.

function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);
console.log(resultado)



// EJEMPLO CALCULARDORA (CODER)

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
            return 0;
    }
}

console.log(calculadora(10, 5, "*"));




// SCOPE -- El alcance de una variable es el ámbito en el que se encuentra. JavaScript define dos ámbitos para las variables: global y local.

let resultado2 = 0 // Esta variable no está definida dentro de la función, por lo que es global.

function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}
sumar(5, 6);

//Se puede acceder a la variable resultado porque es global
console.log(resultado2);



let nombre = "John Doe" // variable global

function saludar() {
    let nombre = "Juan Coder" // variable local
    console.log(nombre)
}
//Accede a nombre global
console.log(nombre)   // → “John Doe”

//Accede a nombre local
saludar() // → “Juan Coder”




// ARROW FUNCTIONS -- Funciones flecha

const suma = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) => a - b;
console.log(suma(15, 20)) // → 35
console.log(resta(20, 5)) // → 15



// EJEMPLO CALCULADORA (CODER)

const suma2 = (a, b) => a + b
const resta2 = (a, b) => a - b
const iva = x => x * 0.21

//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
let precioProducto = 500
let descuento = 50

//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma2(precioProducto, iva(precioProducto)), descuento)
console.log(nuevoPrecio)



// OBJETOS -- Un objeto es una colección de propiedades y métodos.

// FORMA ANTIGUA

let nombre2 = "Homero";
let edad = 39;
let calle = "Av. Siempreviva 742";

// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
const persona1 = { nombre2: "Homero", edad: 39, calle: "Av. Siempreviva 742" }


// FORMA con OBJETOS

const persona55 = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva 742"
}

console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle)



// ASIGNAR VALORES A PROPIEDADES DE UN OBJETO

const persona3 = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva 742"
}

persona1["nombre"] = "Marge"
persona1.edad = 36



// OBJETOS, CONSTRUCTORES -- Un constructor es una función que se utiliza para crear objetos. El constructor de un objeto es una función que usamos para crear un nuevo objeto cada vez que sea necesario.

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}
const persona4 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona5 = new Persona("Marge", 36, "Av. Siempreviva 742");



// CONSTRUCTOR Y NEW -- En el ejemplo anterior, se define la función Persona, donde se asignan las diferentes propiedades con los valores recibidos como parámetros. Luego, en algún lugar del código posterior a esas líneas, se puede construir un objeto Persona declarando una variable y asignando la referencia del objeto instanciado mediante la instrucción new Persona(...)


// THIS -- Refiere al elemento actual en el que se está escribiendo el código.  Cuando se emplea un función constructora para crear un objeto (con la palabra clave new), this está enlazado al nuevo objeto instanciado. This es muy útil para asegurar que se emplean las propiedades del objeto actual.


function Persona(literal) {
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.calle = literal.calle;
}
const persona1 = new Persona({ nombre: "Homero", edad: 39, calle: "Av.Siempreviva 742" });


// METODOS -- Un método es una función que se asigna a un objeto.

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function () { console.log("HOLA SOY " + this.nombre) }
}
const persona12 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona22 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona12.hablar();
persona22.hablar();



// OPERADORES IN Y FOR...IN -- Son dos operadores que nos permiten recorrer los elementos de un objeto.

const persona124 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" };

//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log("nombre" in persona124); // → true

//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log("origen" in persona124); // → false

//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona124) {
    console.log(persona1[propiedad]);
}


// CLASES -- Una clase es una plantilla para crear objetos. Son una equivalencia al empleo de función constructora y permite definir distintos tipos de métodos. 


class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
}
const persona12525 = new Persona("Homero", 39, "Av. Siempreviva 742");



class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar() {
        console.log("HOLA SOY " + this.nombre);
    }
}
const persona111 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona111.hablar();




class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();