//En el directorio números-primos deberá programar embebido el código directamente en el HTML el siguiente script:
//Crea un script que pida al usuario 15 números y muestre en pantalla únicamente la suma de los que son números primos. 
//Tenga en cuenta que al solicitar información por el prompt se debe dar formato de número antes de programar.

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {//estoy comprobando si el numero es primo
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let sumaPrimos = 0;
let contador = 0;

while (contador < 15) {//contador para que se recorra 15 veces
    let entrada = prompt(`Ingrese el número ${contador + 1}:`);//ingresa numero el usuario y se almacena en entrada
    let numero = parseFloat(entrada);

    if (!isNaN(numero)) {//si es un numero(no es distinto de un numero)
        if (esPrimo(numero)) {
            sumaPrimos += numero;
        }
        contador++;
    } else {
        alert('Por favor, ingrese un número válido.');
    }
}

document.write(`La suma de los números primos ingresados es: ${sumaPrimos}`);//Llamo a la funcion en el documento HTML
