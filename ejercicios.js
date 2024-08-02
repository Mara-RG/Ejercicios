

//?User Profile

let nombre = prompt("Cuál es tu nombre de usuario?");
if(nombre !== null){
    console.log(nombre);
}

let edad = prompt("¿Cuantos años tienes?");
if(edad !== null){
    console.log(edad);
}

let movies = prompt("¿Cuales son tus peliculas favoritas? ");
if(movies !== null){
    console.log(movies    +    "La pelicula About time es una de mis favoritas");
}

//? Highest Number

var numeros = [];
for (var i=0; i < 10; i++){
    var entrada = prompt ("Ingresa un número" + (i+1) + ":");
    var numero = parseFloat(entrada);
    if(!isNaN(numero)){
        numeros.push(numero);
    } else {
        alert("Entrada no válida. Porfavor, ingrese un número");
    }
}

var mayorNumero = numeros[0];

for ( var j = 1; j < numeros.length; j++) {
    if (numeros[j] > mayorNumero)
        mayorNumero = numeros[j];
    }


console.log("El mayor número ingresado es:"  +  mayorNumero);

//? Alarm

const segundos = prompt("¿Cuántos segundos deseas esperar hasta que suene la alarma?");
const tiempoSegundos = parseInt(segundos, 10);
if(!isNaN(tiempoSegundos) && tiempoSegundos > 0){
    const  mensaje = prompt("Que mensaje quieres en tu alarma cuando suene?");

    setTimeout(function(){
        alert(mensaje);}
    , tiempoSegundos * 1000);
    console.log("Alarma configurada. El mensaje se mostrará después de" + tiempoSegundos + "segundos");
} else {
    alert("Ingresa un número valido de segundos.")
}

//? Palindromo

function esPalindromo(oracion){

    const oracionlimpia = oracion.toLowerCase().replace(/[^a-z]/g, '');

    const oracioninvertida = oracionlimpia.split("").reverse().join("");
    return oracionlimpia === oracioninvertida;
}
const palabra =  prompt("Ingresa una palabra o una oración");


if(esPalindromo(palabra)){
    alert("Es un palindromo");
} else {
    alert("No es un palindromo");
} 

//? Factorial

function factorial(n){
    if (n <= 1){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

const number = prompt("Ingres un número entero positivo");

const valor = parseInt(number, 10);
if (!isNaN(valor) && valor >= 1){
    const resultado = factorial(valor);
    alert("El factorial es" + resultado);
} 

//? Flat array

function aplanarMatriz(matriz, _callback){
    let result=[];
    function recorrer(elemento){
        if (Array.isArray(elemento));{
        for(let k = 0; k < elemento,lenght; k++){
            recorrer(elemento[k]);
        }

}

recorrer(matriz);
return result;
}
}

let multiDimensión = [1, [2, 3, [4, 5, [6]]]];
function callback(tem){
    return tem
}

let matrizAplanada = aplanarMatriz(multiDimensión, callback);
console.log(matrizAplanada);