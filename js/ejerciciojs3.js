// Solicitar la edad y el género del usuario
const edad = parseInt(prompt("Ingresa tu edad:"));
const genero = prompt("Ingresa tu género (mujer/hombre):").toLowerCase();

// Inicializar un mensaje para los premios
let mensajePremio = "";

// Verificar las condiciones
if (edad <= 10) {
    mensajePremio += "Recibes un jugo.\n";
}

if (edad > 18) {
    mensajePremio += "Recibes una cerveza.\n";
}

if (genero === "mujer") {
    mensajePremio += "Recibes una porción de pizza Hawaiana.\n";
} else if (genero === "hombre") {
    mensajePremio += "Recibes una porción de pizza de tres carnes.\n";
}

// Mostrar el resultado
if (mensajePremio) {
    console.log("¡Felicidades! " + mensajePremio);
} else {
    console.log("No recibes ningún premio.");
}