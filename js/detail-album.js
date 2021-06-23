window.addEventListener("load", function(){
    console.log(location.search) 
    // Guardar la qs // Id del Album
    const parametros = new URLSearchParams(location.search)
    const cual = parametros.get("id")
    console.log(cual)
    // Donde voy a poner la informacion que traigo
    let listadoDiscos = document.querySelector(".contenedoralbumes")
    // La URL que me provee los datos para el Fetch
    let urlAlbumes = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${cual}`
    // Fetch
    fetch(urlAlbumes)
        .then(function(respuesta){
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function(datos){
            console.log(datos)
            // Le pido a la API
            let nombreArtista = datos.artist
            console.log(nombreArtista)
            let tituloAlbum = datos.title
            console.log(tituloAlbum)
            let portadaAlbum = datos.cover
            console.log(portadaAlbum)
            let generoArtista = datos.genre_id
            console.log(generoArtista)
            let fechaAlbum = datos.release_date
            console.log(fechaAlbum)
            let listaCanciones = datos.tracklist
            console.log(listaCanciones)
        })


        .catch(function(error){
            console.log(error)
        })


});