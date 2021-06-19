window.addEventListener("load", function(){
    console.log(location.search)
    // Guardar la qs
    const parametros = new URLSearchParams(location.search)
    const cual = parametros.get("id")
    console.log(cual)
    // llamar a  la seccion del artista y segunda seccion donde estan sus canciones
    let tituloArtista = document.querySelector(".tituloartist")
    let elArtista = document.querySelector(".contenedorartista")
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
            // PRIMERA PARTE :nombre del artista, imagen del artista y ¿no hay texto de cada artista?
            let nombre = datos.name
            console.log(nombre)
            let foto = datos.picture
        /*    let canciones = datos.tracklist.data  */
            console.log(foto)
            // lo pongo en el html
            for (let i=0; i<nombre.length; i++){
                tituloArtista.innerHTML += `
                <a>${nombre[i]}</a>
            `}
            for (let i=0; i<1; i++){
                elArtista.innerHTML += `
                <img src="${foto[i]} alt="${nombre[i]}">
            `}
        /*    for (let i=0; i<canciones.length; i++){
                cancionesArtista.innerHTML += `
                <li>
                    <figure><img src="${canciones[i].contributors.picture}"><a href="detail-genres.html">${canciones[i].contributors.name}</a>
                     </figure>
                </li>
            `} */
        })
        .catch(function(error){
            console.log(error)
        })
    
    // SEGUNDA PARTE:  5 canciones del artista (nombre e imagen de cada cancion)
});