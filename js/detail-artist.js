window.addEventListener("load", function(){
    console.log(location.search)
    // Guardar la qs // Id del artista
    const parametros = new URLSearchParams(location.search)
    const cual = parametros.get("id")
    console.log(cual)
    // llamar a  la seccion del artista y segunda seccion donde estan sus canciones
    let tituloArtista = document.querySelector(".tituloartist a")
    let elArtista = document.querySelector(".contenedorartista img")
    let albumImg = document.querySelector(".botonesCanciones li figure img")
    let albumTitulo = document.querySelector(".botonesCanciones li a")
    // las urls que me proveen los datos
    let urlArtista = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${cual}`
    let urlTopAlbums = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${cual}/albums`
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
    // SEGUNDA PARTE Top Albums
    fetch(urlTopAlbums)
        .then(function (respuesta){
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function(datos){
            console.log(datos)
            // pedir los datos
            let topAlbumss = datos.data
            // Ponerlos en el HTML
            for (let i=0; i < topAlbumss.length ; i++){
                 albumTitulo.innerText = `${topAlbumss[i].title}`
                 albumTitulo.href = `detail-track.html?id=${topAlbumss[i].id}`
                 albumImg.src = `${topAlbumss[i].cover}`
                }
        })
});