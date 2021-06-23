window.addEventListener("load", function(){
    console.log(location.search) 
    // Guardar la qs // Id del Album
    const parametros = new URLSearchParams(location.search)
    const cual = parametros.get("id")
    console.log(cual)

    // Donde voy a poner la informacion que traigo
    let tituloAlbum = document.querySelector(".tituloartist")
    let imagenAlbum = document.querySelector(".contenedoralbumes img")
    let elArtista = document.querySelector(".contenedoralbumes a")
    let genero = document.querySelector(".genero")
    let fecha = document.querySelector(".fecha")
    let listaDeCanciones = document.querySelector(".listaDeCanciones")

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
            // lo pido a la API
            let nombreAlbum = datos.title
            let imgAlbum = datos.cover_medium
            let nombreArtista = datos.artist.name
            let idArtista = datos.artist.id
            let descripcionA = datos.genres.data /*.name*/
            let fechaAlbum = datos.release_date
            let listaCanciones = datos.tracks.data /*.title*/

            // poniendolo en el HTML
            tituloAlbum.innerText = nombreAlbum
            imagenAlbum.src = imgAlbum
            imagenAlbum.alt = nombreAlbum
            elArtista.innerText = nombreArtista
            elArtista.href = `detail-artist.html?id=${idArtista}`
            fecha.innerText += fechaAlbum
            
            for (let i=0; i < descripcionA.length ; i++){
                genero.innerText += descripcionA[i].name
            }

            for (let i=0; i < listaCanciones.length ; i++){
                listaDeCanciones.innerHTML += `
                <li><a href="detail-track.html?id=${listaCanciones[i].id}">${listaCanciones[i].title}<a/></li>
            `}
    
        })

        .catch(function(error){
            console.log(error)
        })


});