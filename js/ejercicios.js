const products = [
    {nombre: "Televisor", precio: 300},
    {nombre: "Celular", precio: 200},
    {nombre: "Laptop", precio: 1000},
    {nombre: "Tablet", precio: 150}
];


for (let index = 0; index < products.length; index++) {
    const element = products[index];

    if (element.precio > 200) {
        element.precio = element.precio * 0.9        
    }

    console.log(products);
    
    
}

for (let index = 0; index < usuarios.length; index++) {
    const element = usuarios[index];
    
    if (element.activo === true) {
        element.activo = true
    }

    console.log(activos);
}


