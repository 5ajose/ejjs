const usuarios = [
    {nombre: "Laura", activo: true},
    {nombre: "Pedro", activo: false},
    {nombre: "Marta", activo: true},
    {nombre: "Jorge", activo: false}
];

activos = []

for (let index = 0; index < usuarios.length; index++) {
    const element = usuarios[index];
    
    if (element.activo) {

        activos.push(element)

        usuarios.splice(index, 1)
    }

}

console.log(activos);
console.log(usuarios);
