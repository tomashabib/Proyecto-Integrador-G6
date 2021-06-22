window.addEventListener("load", function(){
    console.log(location.search) 
    // Guardar la qs // Id del Album
    const parametros = new URLSearchParams(location.search)
    const cual = parametros.get("id")
    console.log(cual)
    // Donde vohy a poner la informacion que traigo
    let tituloArtista = document.querySelector(".tituloartist")
    let listadoDiscos = document.querySelector(".contenedoralbumes")
    // La URL que me provee los datos
    let urlAlbumes = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${cual}`
    // Hacer el fetch
    fetch(urlAlbumes)
        .then(function(respuesta){
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function(datos){
            console.log(datos)
            // Le pido a la API
            // Primera Parte: Nombre del Artista 
            let nombre = datos.name
            console.log(nombre)
            
        
        })

        .catch(function(error){
            console.log(error)
        })


});