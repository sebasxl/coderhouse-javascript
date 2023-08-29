const MIN_NUM = 1;
const MAX_NUM = 100;
const NUM_DICE = 2;

function adivinarNumero() {
    let numeroSecreto = Math.floor(Math.random() * (MAX_NUM - MIN_NUM + 1)) + MIN_NUM;
    let intentos = 0;

    while (true) {
        let adivino = parseInt(prompt("Adivina el número entre " + MIN_NUM + " y " + MAX_NUM + ":"));
        console.log("Intento:" + intentos + " - Numero:" + adivino);

        if (isNaN(adivino)) {
            alert("Ingresa un número válido.");
        } else {
            intentos++;

            if (adivino === numeroSecreto) {
                alert("¡Felicidades! Adivinaste el número " + numeroSecreto + " en " + intentos + " intentos.");
                break;
            } else if (adivino < numeroSecreto) {
                alert("El número es mayor.");
            } else {
                alert("El número es menor.");
            }
        }
    }
}

function lanzarDados() {
    while (true) {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        
        let dado2 = Math.floor(Math.random() * 6) + 1;

        console.log("Dado 1: " + dado1 + "\nDado 2: " + dado2);

        alert("Dado 1: " + dado1 + "\nDado 2: " + dado2);

        let jugarDenuevo = prompt("¿Quieres lanzar los dados otra vez?\n ENTER para salir)");

        if (jugarDenuevo === "") {
            break;
        }
    }
}

const nombre = prompt("Bienvenido. Ingresa tu nombre:");
alert("Hola, " + nombre + "!!! Bienvenido a MiniJuegos.");

console.log("Perdón "+ nombre + ", como verás no tengo mucha imaginación así que saqué los dos juegos de otros ejemplos que encontré en internet :D \n De todos modos el codigo está escrito por mi, en su gran mayoría");

while (true) {
    const seleccion = prompt("Elige un juego:\n1. Adivinar el número\n2. Lanzar dos dados\n ENTER para salir)");

    if (seleccion === "1") {
        adivinarNumero();
    } else if (seleccion === "2") {
        lanzarDados();
    } else if (seleccion === "") {
        alert("Gracias por jugar. ¡Hasta luego, " + nombre + "!");
        break;
    } else {
        alert("Selección no válida. Por favor, elige una opción válida.");
    }
}
