// Ingreso de datos del usuario.

var estatura = parseFloat(prompt("Ingrese su estatura en cm (Ej: 1.70)"));
var peso = parseFloat(prompt("Ingrese su peso en kg (Ej: 70)"));


// Funcion que calcula el IMC.
function calcularIMC(estatura, peso){
    var imc = peso / (estatura * estatura);

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

calcularIMC(estatura, peso);