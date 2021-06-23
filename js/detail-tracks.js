window.addEventListener("load", function(){
console.log(location.search) 
    // Guardar la qs // Id del Album
    const parametros = new URLSearchParams(location.search)
    const cual = parametros.get("id")
    console.log(cual)
    
    // Donde voy a poner la informacion que traigo
    let listaDeCanciones = document.querySelector (".listaDeCanciones")

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
            let nombreAlbum = datos.album.title
            let imgAlbum = datos.cover_medium
            let nombreArtista = datos.artist.name
            let idArtista = datos.artist.id
            let nombreCancion = datos.title

            // poniendolo en el HTML

        })

        .catch(function(error){
            console.log(error)
        })

        

});