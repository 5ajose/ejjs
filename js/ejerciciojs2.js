// Solicitar un número al usuario
const numero = parseInt(prompt("Ingresa un número:"));

// Verificar si el número es par o impar
if (numero % 2 === 0) {
    console.log(`${numero} es un número par.`);
} else {
    console.log(`${numero} es un número impar.`);
}