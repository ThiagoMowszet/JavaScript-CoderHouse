// Declaramos las variables de entrada.
let estatura
let peso

// Validamos que el usuario ingrese estatura y peso validos.
do{
    estatura = parseFloat(prompt("Ingrese su estatura en cm (Ej: 1.70)"));
    peso = parseFloat(prompt("Ingrese su peso en kg (Ej: 70)"));
}while(estatura == "" || peso == "" || isNaN(estatura) || isNaN(peso));

// Arrow Function que calcula el IMC.
const calcularIMC = (estatura, peso) => {
    let imc = peso / (estatura * estatura);

    if (imc < 18.5) {
        alert("Su peso es de " + imc.toFixed(2) + " y usted esta bajo de peso.");
    }
    else if(imc >= 18.5 && imc <= 24.9){
        alert("Su peso es de " + imc.toFixed(2) + " y usted esta en su peso ideal.");
    }
    else if(imc >= 25 && imc <= 29.9){
        alert("Su peso es de " + imc.toFixed(2) + " y usted esta con sobrepeso.");
    }
    else if(imc >= 30 && imc <= 39.9){
        alert("Su peso es de " + imc.toFixed(2) + " y usted esta con obesidad.");
    }
    else if(imc >= 40){
        alert("Su peso es de " + imc.toFixed(2) + " y usted esta con obesidad morbida.");
    }
}

// Llamamos a la funcion.
calcularIMC(estatura, peso);


// Ejercicio Complementario 2
let nombre = prompt("Ingrese su nombre: ");

// Hacemos la variable del calculo de IMC global 
let imc = peso / (estatura * estatura);

// Informamos al usuario que recibira por consola sus datos en formato tabla.
let mensaje = alert("Hola " + nombre + ", por consola recibira un resumen de sus datos.");
let consejo = "Mantener un peso saludable puede reducir el riesgo de enfermedades crónicas asociadas al sobrepeso y la obesidad.";

// Creamos nuestros Array para guardar los datos del usuario.
const resumenUsuario = [{nombre: nombre, imc: imc.toFixed(2), estatura: estatura, peso: peso, consejo: consejo}];

// Le mostramos por consola el resumen de los datos que ingreso.
console.table(resumenUsuario);