const elementosCocina = [
    {
      id: 1,
      nombre: "Sartén Antiadherente",
      precio: 25.99,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yZ_PxjZ7YCnXT4VCnslyU2j0Mxr0ZO-cMw&s",
      contador : 0
    },
    {
      id: 2,
      nombre: "Cuchillo Chef",
      precio: 18.50,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7Tik7ZJfwwU8iOhfJsoRZ9j6qLvU5WSfcg&s",
      contador : 0
    },
    {
      id: 3,
      nombre: "Tabla de Cortar",
      precio: 12.75,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcn4jjm12FseOdd69lIZuAhM8430td1weBkg&s",
      contador : 0
    },
    {
      id: 4,
      nombre: "Olla de Acero inx",
      precio: 35.00,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aK2b4HIOkOwMY85IjkwiC8imDt_AUggUow&s",
      contador : 0
    },
    {
      id: 5,
      nombre: "Batidora de Mano",
      precio: 29.99,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_P7EhOLvK0CjdHuSbBRJFA0blhRHNq-Ugw&s",
      contador : 0
    },
    {
      id: 6,
      nombre: "Tetera Eléctrica",
      precio: 22.50,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VlNNZOrbLiSB-iHJ3xQhcl5RI3XIJFgzkg&s",
      contador : 0
    }
  ];
  
let productos = document.getElementById("productos")

for (let index = 0; index < elementosCocina.length; index++) {
    const element = elementosCocina[index];

    productos.innerHTML += `                        
    <div class="card tarjeta col-3" style="width: 16rem;">
            <img src="${element.imagen}" class="card-img-top imagen" alt="${element.nombre}">
            <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text"></p>
                <div class="d-flex justify-content-center py-0">
                    <p class="btn btn-primary py-0 mt-4">$ ${element.precio}</p>
                </div>
                <div class="d-flex justify-content-center ">
                    <i type="button" class="fa-solid fa-arrow-left me-2"></i>
                    <p class="fw-bold fs-3 cantidad mb-0">0</p>
                    <i type="button" class="fa-solid fa-arrow-right ms-2"></i>
                </div>
            </div>
        </div>` 
    
}

let cart = []
let subtotal = 0
let totalitems = 0


function actualizarCantidad () {
  let ahorro = totalitems > 5 ? 5: 0;
  let totalPagar = subtotal-ahorro
  totalproductos.textContent = `totalPagar: ${totalPagar}`;
  subtotal.textContent = `subtotal: $${ahorro.toFixed(2)}`;
  ahorro.textContent = `ahorro: $${ahorro};`
  totalPagar.textContent = `totalPagar`
  console.log(subtotal);
  
}


  

 





const cantidades = document.querySelectorAll(".cantidad")
const incrementButtons = document.querySelectorAll('.fa-arrow-right');
const decrementButtons = document.querySelectorAll('.fa-arrow-left');
const totalproductos = document.getElementById("totalproductos")
const preciosub = document.getElementById("preciosub")

incrementButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
      // const cantidadElemento = event.target.parentElement.querySelector('.cantidad');
      // let cantidad = parseInt(cantidadElemento.innerText);
      // cantidad++;
      // cantidadElemento.innerText = cantidad;
      // actualizarTotal(1);
      elementosCocina[index].contador++
      cantidades[index].innerText= elementosCocina[index].contador
      cart.push(elementosCocina[index])
      totalproductos.innerText=cart.length
      // subtotal.push(elementosCocina[index])
      // preciosub.innerText= suma   
  });
});

decrementButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
      // const cantidadElemento = event.target.parentElement.querySelector('.cantidad');
      // let cantidad = parseInt(cantidadElemento.innerText);
      if (elementosCocina[index].contador > 0) {
      //     cantidad--;
      //     cantidadElemento.innerText = cantidad;
      //     actualizarTotal(-1);
      elementosCocina[index].contador--
      cantidades[index].innerText= elementosCocina[index].contador
      cart.pop()
      totalproductos.innerText=cart.length
       }

  });
});



//
// function actualizarTotal(cambio) {
//   cantidadTotal += cambio;
//   document.getElementById('cantidad-total').innerText = cantidadTotal;
// }

// let url = "https://api.escuelajs.co/api/v1/categories"
// // fetch("https://api.escuelajs.co/api/v1/categories")
// // // el .then captura la respuesta si es correcta
// //     .then((res) => {
// //         return res.json()

// //     })

// //     .then((data)=>{
// //         console.log(data);
        
// //     })


//     // el .catch la toma si es un error
//     // .catch((error)=>{
//     //     console.log("error del catch");
//     //     console.log(error);
//     // })

//     renderPlatzi = async (direcionApi) => {

//         try { //trata de ejecutar el código o el error
//             let res =await fetch(direcionApi)
//             let dataApi = await res.json()
//             // console.log(dataApi);
//             platzi(dataApi)
//         } catch (error) {
//             console.log("error");
            
//         }finally { // se ejecuta si o si
//             console.log("Final del TryCatch");
            
//         }

//     }

//     renderPlatzi(url)

//     platzi = (array) =>{
//         for (let index = 0; index < array.length; index++) {
//             const element = array[index];
//             console.log(element.name);           
            
//         }
//     }


// ------------ Puntos a realizar --------------------

// en "total productos" se debe mostrar la cantidad de elementos seleccionados por el ususario.
// en "subtotal" se debe mostar el valor total de los elementos dependiendo de la cantidad.
// en "ahorro" se debe mostrar el descuento de "5 dolares" si hay mas de 5 articulos.
// en "total a pagar" se debe mostrar el valor total menos el "ahorro".
// la cantidad de productos no debe poder bajar nemos de "0"


