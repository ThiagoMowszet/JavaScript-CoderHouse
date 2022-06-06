// Resumen Clase 4 - Thiago Mowszet

// Declarar Arrays 

const pruebaArray = []

// Acceder a un indice del array 

const myArray = [1, 2, 3, 4, 5]
//               0  1  2  3  4

console.log(myArray[0]) // Accedo al valor 1


// Realizo una operacion entre los elementos del array

const myArraySuma = [1, 2, 3, 4, 5]
//                   0  1  2  3  4
console.log(myArraySuma[0] + myArraySuma[2]) // 4


// Recorro los valores de un array 

const paises = ["Argentina", "Venezuela", "Colombia", "Peru"]
for(let i = 0; i < 4; i++){
    console.log(paises[i]) // Argentina, Venezuela, Colombia, Peru
}


// Obtengo cuantos elementos tengo en el array 

console.log(paises.length) // 4


// Tambien usamos el metodo length para fijar el limite de una iteracion

const numeros = [1,2,3,4,5,6,7,8,9]

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]) // 1,2,3,4,5,6,7,8,9
}


// Agregar elementos a un array con el metodo .push(), recordar que push lo manda al final al nuevo elemento.

const gaseosas = ["Coca Cola", "Fanta", "Sprite", "Mirinda"]
gaseosas.push("Pritty")
console.log(gaseosas) // [ "Coca Cola", "Fanta", "Sprite", "Mirinda", "Pritty" ]
console.log(gaseosas.length) // 5


// Para agregar un elemento al inicio, utilizamos el metodo .unshift()

gaseosas.unshift("Manaos")
console.log(gaseosas) // [ 'Manaos', 'Coca Cola', 'Fanta', 'Sprite', 'Mirinda', 'Pritty' ]


// Para quitar el primer elementos del array utilizamos el metodo .shift()

gaseosas.shift()
console.log(gaseosas) // [ 'Coca Cola', 'Fanta', 'Sprite', 'Mirinda', 'Pritty' ]


// Para quitar el ultimo elemento del array utilizamos el metodo .pop()

gaseosas.pop()
console.log(gaseosas) // [ 'Coca Cola', 'Fanta', 'Sprite', 'Mirinda' ]


// Si queremos eliminar un valor que no sea el primero o el ultimo utilizamos el metodo .splice()
// Funciona con 2 parametros, el primer parametro es el indice donde se ubica el metodo a trabajar.
// El segundo parametro es la cantidad de elementos a eliminar desde esa posicion.
gaseosas.splice(1,2)
console.log(gaseosas) // [ 'Coca Cola', 'Mirinda' ]


// Con el metodo .join() podemos generar un string con los elementos del Array.

const nombres = ["Thiago", "Juana", "Pedro", "Milagros"]
console.log(nombres.join("-")) // Thiago-Juana-Pedro-Milagros


// Con el metodo .concat() podemos combinar 2 arrays en un unico array.

const telefonos = ["Iphone", "Samsung", "Huawei"]
const creadores = ["Steve Jobs", "Jeff Bezos"]

const tecnologia = telefonos.concat(creadores)
console.log(tecnologia) // [ 'Iphone', 'Samsung', 'Huawei', 'Steve Jobs', 'Jeff Bezos' ]


// Con el metodo .slice() nos devuelve una copia del array dentro de un nuevo array. 
// El primer parametro es el comienzo desde donde querramos que empiece el .slice()
// El segundo parametro es el final (No Incluido) donde termina el .slice()

const nombresFemeninos = ["Agustina", "Milagros", "Magali", "Angela", "Florencia"]
const nombresCortos = nombresFemeninos.slice(1, 3)
console.log(nombresCortos) // [ 'Milagros', 'Magali' ]



// El metodo .indexOf() nos permite obtener el indice de nuestros elementos del array. 

const marcasAutos = ["BMW", "Volkswagen", "Peugeot"]
console.log( marcasAutos.indexOf("Volkswagen") ) // 1
console.log( marcasAutos.indexOf("Peugeot") ) // 2
console.log( marcasAutos.indexOf("Ferrari") ) // -1, nos da esto resultado ya que "Ferrari" no existe.



// El metodo .includes() nos permite saber si un elemento existe o no dentro de un array. Nos retorna un valor booleano en caso de ser verdadero
// Y false en caso de ser falso y no existe

const nombresPerros = ["Firulais", "Oscurito", "Docky", "Kyra"]
console.log( (nombresPerros.includes("Firulais")) ) // true
console.log( (nombresPerros.includes("Fatiga")) ) // false


// El metodo .reverse() nos invierte el orden de los elementos de un array.

const comidas = ["Alfajor", "Asado", "Nutella", "Pollo"]
comidas.reverse()
console.log(comidas) // [ 'Pollo', 'Nutella', 'Asado', 'Alfajor' ]



// for of, nos permite recorrer un array ejecutando un bloque de codigo por cada elemento.

const productos = [{ id: 1, producto: "Detergente"},
                   { id: 2, producto: "Jabon"},
                   {id : 3, producto: "Shampoo"}];

for(const producto of productos){
    console.log(producto.id); 
    console.log(producto.producto); 
    // Salida: 1, Detergente: 2, Jabon: 3, Shampoo
}



// Parte 2

// En esta parte me salteo abstraccion y funciones de orden superior ya que es teoria y debemos de leerlo para que nos quede claro. Pero les dejo un ejemplo que me sirvio para entender esto.

// Ejemplo de funcion de orden superior 
function porCadaUno(arr, fn){
    for (const el of arr)
    fn(el)
}

const numerosArray = [1, 2, 3, 4, 5]


// Llamamos a la funcion
porCadaUno(numerosArray, console.log) // 1  2  3  4  5

// Al ser de orden superior, esto nos permite ahorrarnos lineas de codigo y tiempo, en lo contrario hubieramos hecho esto: 

 const numerosArray2 = [1, 2, 3, 4, 5]
 //                     0  1  2  3  4

 console.log(numerosArray2[0])
 console.log(numerosArray2[1])
 console.log(numerosArray2[2])
 console.log(numerosArray2[3])
 console.log(numerosArray2[4])




// METODOS DE BUSQUEDA Y TRANSFORMACION

// Estos metodos nos permiten solucionar problemas reccurentes con los arrays.


// .forEach() es parecido al ejemplo de porCadaUno. Itera sobre el array y por cada elemento ejecuta la funcion que enviemos por parametro.

const tablaDel5 = [5, 10, 15, 20, 25, 30]

tablaDel5.forEach( (num) => {
    console.log(num) // 5, 10, 15, 20, 25, 30
});



// .find() recibe una funcion de comparacion por parametro, captura el elemento que esta recorriendo y retorna true o false. 
// !!! Este metodo retorna el primer elemento que cumpla con la condicion !!!

const alumnos = [
    {nombre: "Tomas", nota: 6},
    {nombre: "Constanza", nota: 10},
]

const resultadoAlumnos = alumnos.find((el) => el.nombre === "Constanza")
const resultadoAlumnos2 = alumnos.find((el) => el.nombre === "Rodrigo")

console.log(resultadoAlumnos) // { nombre: 'Constanza', nota: 10 }
console.log(resultadoAlumnos2) // undefined -> Retorna esto ya que no hay ninguna coincidencia en el array que cumpla con ese valor.



// .filter() es muy parecido a .find(), recibe una funcion comparadora por parametro y retorna un nuevo array con todos los elementos que cumplan esa condicion.
// Si no hay coincidencias nos retornara un array vacio [].

const autosAltaGama = [
    {nombre: "Ferrari La Ferrari", precio: 1000000},
    {nombre: "Lamborghini Huracan", precio: 250000},
    {nombre: "Ferrari 458 Italia", precio: 55000},
    {nombre: "Mercedes Benz Clase 3", precio: 48250},
    {nombre: "Tesla Plaid S", precio: 25000},
]

// Fijarse tambien, como aplicamos el metodo .includes()        aca ⬇
const resultadoAutos = autosAltaGama.filter((el) => el.nombre.includes("Ferrari"))
const resultadoAutos2 = autosAltaGama.filter((el) => el.precio < 20000)

console.log(resultadoAutos) // [{ nombre: 'Ferrari La Ferrari', precio: 1000000 }, { nombre: 'Ferrari 458 Italia', precio: 55000 }
console.log(resultadoAutos2) // [] -> array vacio, ya que no hay coincidencias.


// .some() funciona igual a .find(), recibe una funcion de busqueda, pero en vez de retornar el elemento encontrado, .some() retorna ture o false segun el resultado de la iteracion de busqueda.

// Uso el ejemplo de autos de alta gama

console.log( autosAltaGama.some((el) => el.nombre == "Tesla Plaid S")) // true
console.log( autosAltaGama.some((el) => el.nombre == "Fiat 600")) // false


// .map() crea un nuevo array con todos los elementos del original transformados segun las operaciones de la funcion enviada por parametro.

const provinciasArgentinas = [
    {provincia: "La rioja", region: "Cuyo"},
    {provincia: "Mendoza", region: "Cuyo"},
    {provincia: "San Luis", region: "Cuyo"},
    {provincia: "San Juan", region: "Cuyo"},
]

const regionCuyo = provinciasArgentinas.map((el) => el.provincia)
console.log(regionCuyo) // [ 'La rioja', 'Mendoza', 'San Luis', 'San Juan' ] <- Nuevo array con la misma cantidad de elementos.


// .map() se utiliza mucho para la transformacion de arrays.

const transformacionArray = provinciasArgentinas.map((el) => {
    return{
        provincia: el.provincia,
        region: "Region " + el.region
    }
})

console.log(transformacionArray) // [  { provincia: 'La rioja', region: 'Region Cuyo' },  { provincia: 'Mendoza', region: 'Region Cuyo' },  { provincia: 'San Luis', region: 'Region Cuyo' },  { provincia: 'San Juan', region: 'Region Cuyo' }]



// .reduce() nos permite obtener un unico valor tras iterar sobre el array. Funciona como un metodo que resume el array a un unico valor de retorno.
// Recibe 2 parametros, el primero, es la funcion que ordena que queremos resumir de nuestro array. 
// El segundo es el valor incial del acumulador.


const numeros3 = [3, 6, 9, 12, 15, 18]

const resumen = numeros3.reduce((acumulador, elemento) => acumulador + elemento, 0) // -> es 0, ya que es el valor inicial del acumulador.
console.log(resumen) // 63, porque? porque la suma de los elementos del array es 63. Es decir = (3 + 6 + 9 + 12 + 15 + 18) = 63


// .sort() nos permite ordenar un array segun un criterio que definamos.
// Recibe una función de comparación por parámetro que, a la vez, recibe dos elementos del array. La función retorna un valor numérico (1, -1, 0) que indica qué elemento se posiciona antes o después.
// !!! Este metodo es destructivo ya que modifica el array sobre el cual se llama !!!


const mezclados = [393, 109, 1, 1987, 92]

console.log(mezclados.sort((a, b) => a - b)); // [ 1, 92, 109, 393, 1987 ]
console.log(mezclados.sort((a, b) => b - a)); // [ 1987, 393, 109, 92, 1 ]



// Objeto Math

// Math funciona como un contenedor de herramientas y metodos para realizar operaciones matematicas.
// Contiene una serie de métodos que nos permiten realizar algunas operaciones matemáticas más complejas. 


// Propiedades

// Podemos acceder a constantes matematicas a traves del objeto math, como puede ser el numero PI o la constante de Euler.

console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045


// Metodos del Objeto Math


// min & math 

//Math.min() y Math.max() reciben una serie de argumentos numericos y devuelven aquel de valor minimo o maximo segun indiquemos. 

console.log( Math.max( 1234, 12, 987, 981274, 28937, 33) ) // 981274
console.log( Math.min( -22, 23984, 99, 3, -897, -9870, 33 ) ) // -9870

// Tambien se puede refenciar valores de infinito positivo o negativo a traves de la variable global Infinity.

console.log( Math.max(55, Infinity, 0, -25, 93, 4) ) // Infinity
console.log( Math.min(55, 13, 0, -Infinity, 93, 4) ) // -Infinity


// CEIL, FLOOR & ROUND 

// Nos sirven para redondear un valor numerico a un numero entero cercano.

const pi = Math.PI // 3.141592653589793

// CEIL: devuelve el entero mayor o igual más próximo
console.log( Math.ceil(pi) ) // 4

// FLOOR: devuelve el entero más cercano redondeado hacia abajo
console.log( Math.floor(pi) ) // 3

// ROUND: retorna el valor de un número redondeado al entero más cercano
console.log( Math.round(pi) ) // 3



// SQUARE ROOT 
// el metodo Math.sqrt() retorna la raíz cuadrada de un número. Si se le envía un número negativo, el método retorna NaN.

console.log(Math.sqrt(9)) // 3
console.log(Math.sqrt(2)) // 1.414213562373095
console.log(Math.sqrt(1))  // 1
console.log(Math.sqrt(-1)) // NaN



// Random
// Math.random() genera un número pseudo-aleatorio entre 0 y 1, siendo el 0 límite inclusivo y el 1 exclusivo.

console.log( Math.random() ) // 0.3850006109949691 <- Si ejecutan este metodo y no les da ese valor es porque genero otro resultado random.
console.log( Math.random() ) // 0.7333420146407736 <- Si ejecutan este metodo y no les da ese valor es porque genero otro resultado random.
console.log( Math.random() ) // 0.18096267775551889 <- Si ejecutan este metodo y no les da ese valor es porque genero otro resultado random.

// Para generar números aleatorios dentro de un rango deseado, distinto de 0-1, podemos multiplicar su resultado por el rango esperado. A la vez podemos sumar el límite inferior si lo necesitamos


// números entre 0 y 10
console.log( Math.random() * 10 )
// números entre 0 y 50
console.log( Math.random() * 50)
// números entre 20 y 50
console.log( Math.random() * 30 + 20 )



// Redondeo 
// Math.round() retornará números aleatorios en el rango de 0-100 inclusive. Si usara Math.ceil los números irían de 1 a 100, ya que siempre redondeará hacia arriba; y si usa Math.floor el rango sería de 0 a 99.

const generadorNumero = () => {
    return Math.round( Math.random() * 100 )
}

console.log( generadorNumero() ) // 44 -> en mi caso.



// FIN :) <3`