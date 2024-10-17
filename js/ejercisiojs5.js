// Solicitar un número y un límite al usuario
const numero = parseInt(prompt("5:"));
const limite = parseInt(prompt("10:"));

// Inicializar la variable total
let total = 0;

// Mostrar la tabla de multiplicar
console.log(`Tabla de multiplicar de ${numero}:`);
for (let i = 1; i <= limite; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
    total += resultado; // Sumar el resultado al total
}

// Mostrar el total de las multiplicaciones
console.log(`Total de las multiplicaciones: ${total}`);