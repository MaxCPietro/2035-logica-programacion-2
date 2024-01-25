//1- DECLARAR VARIABLES
let numeroSecreto = NaN //NaN = Not a Number;
let intentos = NaN;
let listaNumerosSecretos =[];
let cantidadDeIntentos = 10;

//2- DECLARAR FUNCIONES

//Funcion para inicializar la pantalla
function inicializarPantalla() {
    asignarTextoElemento("h1", "Juego del Número Secreto!");
    asignarTextoElemento("p", `Ingresa un numero entre 1 y ${cantidadDeIntentos}`);
    //Generar el número secreto
    numeroSecreto = generarNummeroSecreto();    
    //deshabilitar el boton de reiniciar
    //document.getElementById("reiniciar").disabled = true;
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    //iniciar el contador de intentos
    intentos = 0;
}
//Funcion que asigna un texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerText = texto;
    return;
}

//Funcion que genera un numero aleatorio
function generarNummeroSecreto() {
    //pregunto si fueron todos los numeros sorteados
    if (listaNumerosSecretos.length === cantidadDeIntentos){ 
        asignarTextoElemento("p", "Ya no puedes volver a jugar, todos los números fueron sorteados");
        return;
    }
    //Generar un numero aleatorio
    let numeroGenerado = Math.floor(Math.random() * cantidadDeIntentos)+1;
    //preguntar si el numero ya fue sorteadado o no y llamo a la fc recursiva
    if(listaNumerosSecretos.includes(numeroGenerado)) {
        return generarNummeroSecreto();
    } else {
        listaNumerosSecretos.push(numeroGenerado);
        console.log("listaNumerosSecretos: ", listaNumerosSecretos);
        return numeroGenerado;
    }
}

//Funcion que verifica el intento
function verificarIntento() {
    intentos++;
    let valorUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log("valorUsuario: ", valorUsuario);
    console.log("numeroSecreto: ", numeroSecreto);
    console.log("es correcto: ", valorUsuario === numeroSecreto);
    console.log("intentos: ", intentos);

    if (valorUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Felicidades, has acertado el numero en ${intentos} ${intentos > 1 ? "intentos" : "intento"}`);	
       //document.getElementById("reiniciar").disabled = false;
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(valorUsuario < numeroSecreto) {
            asignarTextoElemento("p", "El numero es mayor");
        } else {
            asignarTextoElemento("p", "El numero es menor");
        }
        limpiarInput(); //solo borra si me equivoque
    }
    return;
}

//Funcion que impia el input
function limpiarInput() {
    //Asignar valor vacio al input
    return document.querySelector("#valorUsuario").value = "";
}

//Funcion que reinicia el juego
function reiniciarJuego() {
    //limpiar la caja
    limpiarInput();
    //Indicar mensaje de inicio de juuego
    inicializarPantalla();
    
}

//3- EJECUTAR FUNCIONES Y CODIGO
inicializarPantalla();