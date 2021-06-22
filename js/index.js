window.addEventListener("load", function(){
    // donde voy a poner despues la info que traigo
    let listadoArtistas = document.querySelector(".listadoArtistas")
    let listadoDiscos = document.querySelector (".listadoDiscos")
    let listadoCanciones = document.querySelector(".listadoCanciones")
    // las url de donde traigo la info, para el FETCH
    let urlArtista = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"
    let urlAlbum = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums"
    let urlTrack = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"
    // ARTISTAS 
    fetch(urlArtista)
        .then(function(respuesta){
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function(datos){
        // Pido los datos que necesito de la URL (nombre y foto artista)
            console.log(datos)
            let artistas = datos.data
            // la info que llego de la API la pongo dentro de mi codigo html
            // ARTISTAS
            for (let i=0; i<5; i++){
                listadoArtistas.innerHTML += `
                <div class="textos">
                <figure><img src="${artistas[i].picture}" alt="${artistas[i].name}"></figure>
                <a href="detail-artist.html?id=${artistas[i].id}">${artistas[i].name}</a>
                </div>
            `}
        })        
        .catch(function(error){
            console.log(error)
        })
        // DISCOS
        fetch(urlAlbum)
        .then(function(respuesta){
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function(datos){
        // Pido los datos que necesito de la URL (foto album, nombre album,nombre artista)
            console.log(datos)
            let albumes = datos.data
            // la info que llego de la API la pongo dentro de mi codigo html
            for (let i=0; i<5; i++){
                listadoDiscos.innerHTML += `
                <div class="textos">
                <figure><img src="${albumes[i].cover}" alt="${albumes[i].title}"></figure>
                <a href="detail-album.html">${albumes[i].title}</a>
                <a href="detail-artist.html?id=${albumes[i].artist.id}">${albumes[i].artist.name}</a>
                </div>
                `}
        })        
        .catch(function(error){
            console.log(error)
        })
        // CANCIONES
        fetch(urlTrack)
        .then(function(respuesta){
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function(datos){
        // Pido los datos que necesito de la URL ( foto y nombre de la cancion, nombre del artista, nombre del album)
            console.log(datos)
            let canciones = datos.data
            // la info que llego de la API la pongo dentro de mi codigo html
            for (let i=0; i<5; i++){
                listadoCanciones.innerHTML += `
                <div class="textos">
                <figure><img src="${canciones[i].album.cover}" alt="${canciones[i].title}"></figure>
                    <a href="detail-track.html">${canciones[i].title}</a>
                    <a href="detail-artist.html?id=${canciones[i].artist.id}">${canciones[i].artist.name}</a>
                    <a href="detail-album.html">${canciones[i].album.title}</a>
                </div>
            `}        
        })        
        .catch(function(error){
            console.log(error)
        })   
});