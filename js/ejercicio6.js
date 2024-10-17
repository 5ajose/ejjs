let valorMatricula = 1000000;
let promedio = parseFloar(prompt("Escribe tu promedio"))
let totalMatricula;

if(promedio < 3){
    alert("El valor a pagar de la matricula es de " + valoeMatricula)
}

else if(promedio >= 3 && promedio <= 4){
    let descuento = (5/100) * valorMatricula;
    totalMatricula = valorMatricula - descuento
    alert ("El valor de la matricula a pagar despues del descuento es de " + totalMatricula);
}

