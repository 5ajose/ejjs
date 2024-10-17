// Solicitar un número al usuario
const n = parseInt(prompt("Ingresa un número n:"));

// Inicializar la variable suma
let suma = 0;

// Calcular la suma de 1 a n
for (let i = 1; i <= n; i++) {
    suma += i;
}

console.log(`La suma de los números del 1 a ${n} es: ${suma}`);