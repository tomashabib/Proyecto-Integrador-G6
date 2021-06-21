window.addEventListener("load", function(){
    console.log(location.search)
    // Guardar la qs // Id del artista
    const parametros = new URLSearchParams(location.search)
    const cual = parametros.get("id")
    console.log(cual)
    // llamar a  la seccion del artista y segunda seccion donde estan sus canciones
    let tituloArtista = document.querySelector(".tituloartist a")
    let elArtista = document.querySelector(".contenedorartista img")
    let cancionesArtista = document.querySelector(".botonesCanciones")
    // la url que me provee la API
    let urlArtista = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${cual}`

    // hacer el Fetch
    fetch(urlArtista)
        .then(function (respuesta){
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function(datos){
            console.log(datos)
            // Le pido a la API 
            // PRIMERA PARTE :nombre del artista y imagen del artista 
            let nombre = datos.name
            console.log(nombre)
            let foto = datos.picture
            console.log(foto)
            // PRIMERA PARTE : lo pongo en el html
            // nombre como titulo
            tituloArtista.innerText = nombre
            // imagen del artista
            elArtista.src = foto
            elArtista.alt = nombre
        })
        .catch(function(error){
            console.log(error)
        })
    
});