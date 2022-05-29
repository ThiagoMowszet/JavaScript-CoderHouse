// Ingreso de datos del usuario.

var a = parseFloat(prompt("Ingrese su estatura en cm: "));
var b = parseFloat(prompt("Ingrese su peso en kg: "));
// Funcion que calcula el IMC.
function calcularIMC(estatura, peso){
    var imc = peso / (estatura * estatura);
    return imc;
}

/*
Llamamos a la funcion que determina el estado de salud del usuario.
Le agregamos a la funcion el metodo .toFixed() para limitar el numero de decimales.
*/

var resultado = alert("Su indice de masa corporal es: " + calcularIMC(a, b).toFixed(2));