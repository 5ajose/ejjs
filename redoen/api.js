let url = ""

//let datos = []

let rickApi = async (url) => {

    try {
        let respuesta = await fetch(url)
        let dataApi = await respuesta.json()
        renderRick(dataApi.results)
        console.log(dataApi);
    } catch (error) {
        console.log(error);
    }finally{
        console.log("Fin del fetch");
    }
}

rickApi(url)

renderRick = (array) => {

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
        
        
    }
}