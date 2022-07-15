// -- Resumen realizado por : Thiago Mowszet <3 

/*

Condicionales
Nos sirven para tomar una decision a partir de una condicion
Se usan valores booleanos (true || false) para que nuestro programa tome un camino u otro.j
 
*/


// IF

if (true) {
    // Bloque de codigo
    console.log("es verdadero")
}

// Comparacion en una sentencia if

let numero = 5

if (numero == 5) {
    console.log("Vas a ver este log")
}

if (numero == 6) {
    console.log("No vas a ver este mensaje")
}


// IF ... ElSE
// Las condiciones suelen ser del tipo <<si no se cumple esto, hace lo otro>> para eso nos va a ser else.

let EsMessiElMejorDelMundo = true

if (EsMessiElMejorDelMundo == true) {
    console.log("aguente Messi")
} else {
    console.log("Dejate de joder, Messi es mas grande que todos")
}


// IF ... ELSE IF ... ELSE -- OPCIONES ANIDADAS

let precio = 100.5

if (precio < 20) {
    alert("El precio es menor que 20");
}
else if (precio < 50) {
    alert("El precio es menor que 50");
}
else if (precio < 100) {
    alert("El precio es menor que 100");
}
else {
    alert("El precio es mayor que 100");
}



// OPERADORES EN JS (me cope y les puse todos <3)

/*

OPERADORES | DESCRIPCION | EJEMPLO

    ==        Es igual      a == b

    ===   Estricamente igual  a === b

    !=     Es Distinto     a != b

    !==   Estricamente distinto a !== b

    <      Menor que      a < b

    >      Mayor que      a > b

    <=     Menor o igual que   a <= b

    >=     Mayor o igual que   a >= b

    &&            Y          a && b

    ||            O          a || b

    !           Negacion    !a

    ++          Incremento   ++a

    --          Decremento   --a

    +=          Suma        a += b

    -=          Resta       a -= b

    *=          Multiplicacion a *= b

    /=          Division    a /= b

    %=          Modulo      a %= b

    **=          Potencia    a **= b

*/




// Condiciones Compuestas con &&


let nombre = prompt("Cual es tu nombre?")
let apellido = prompt("Cual es tu apellido?")

if ((nombre != "") && (apellido != "")) {
    console.log("El nombre y apellido estan vacios")
}



// Condiciones Compuestas con ||

if ((nombre == "ANA") || (apellido == "PEREZ")) {
    console.log("El nombre ingresado es Ana")
} else {
    console.log("El nombre ingresado no es Ana")
}


// COndiciones Compuestas con && y ||

let nombreIngresado = prompt("Ingresar nombre");

if ((nombreIngresado != "") && ((nombreIngresado == "EMA") || (nombreIngresado == "ema"))) {
    alert("Hola Ema");
} else {
    alert("Error: Ingresar nombre valido");
}




// Ciclos 
// Son un medio rapido y sencillo para hacer algo repetidamente. 

// Tipos de bucles

//1. CICLOS POR CONTEO - FOR

// for(desde; hasta; actualizacion){} -- El "desde" es la zona en la que se establecen los valores iniciales de las variables que controlan el ciclo. || El "hasta" es el único elemento que decide si se repite o se detiene el ciclo. || La "actualización" es el nuevo valor que se asigna después de cada repetición a las variables que controlan la repetición


for (let i = 0; i <= 10; i++) {
    console.log(i) // Imprime el valor de i en cada iteración: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}


// Sentencia BREAK -- A veces, cuando escribimos una estructura for, necesitamos que bajo cierta condición el ciclo se interrumpa. Para eso se utiliza la sentencia break.

for (let i = 1; i <= 10; i++) {
    //Si la variable i es igual 5 interrumpo el for. 
    if (i == 5) {
        break;
    }
    alert(i) // Imprime el valor de i en cada iteración: 1, 2, 3, 4, 5
}



// 2. CICLOS CONDICIONALES - WHILE, DO WHILE

let entrada = prompt("Ingresar un dato");

while (entrada != "ESC") {
    alert("El usuario ingresó " + entrada);
    entrada = prompt("Ingresar otro dato");
}



// DO WHILE

let repetir = false;
do {
    console.log("¡Solo una vez!"); // Imprime "¡Solo una vez!"
} while (repetir)


let numero2 = 0;
do {

    numero2 = prompt("Ingresar Número");
    console.log(numero);

} while (parseInt(numero));



// SWITCH -- Está especialmente diseñada para manejar de forma sencilla múltiples condiciones sobre la misma variable

let entrada2 = prompt("Ingresar un nombre");

while (entrada2 != "ESC") {
    switch (entrada) {
        case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
        default:
            alert("¿QUIÉN SOS?")
            break;
    }
    entrada = prompt("Ingresar un nombre");
}
