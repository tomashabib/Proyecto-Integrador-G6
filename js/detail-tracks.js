window.addEventListener("load", function(){
console.log(location.search) 
    // Guardar la qs // Id del Album
    const parametros = new URLSearchParams(location.search)
    const cual = parametros.get("id")
    console.log(cual)
    // Donde voy a poner la informacion que traigo
    let listadoCanciones = document.querySelector(".contenedor")
    // La URL que me provee los datos para el Fetch
    let urlCanciones = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cual}`
    // Fetch
    fetch(urlCanciones)
        .then(function(respuesta){
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function(datos){
            console.log(datos)
            // Le pido a la API

        })

        .catch(function(error){
            console.log(error)
        })

        

});