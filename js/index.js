window.addEventListener("load", function(){
    let listadoArtistas = document.querySelector(".listadoArtistas")
    let listadoAlbumes = document.querySelector (".listadoAlbumes")
    let listadoCanciones = document.querySelector(".listadoCanciones")
    let urlIndex = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart"
    
    fetch(urlIndex)
        .then(function(respuesta){
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function(datos){
        // pido los datos que necesito de la URL (Artistas-Discos-Canciones)
            console.log(datos)
            let losArtistas = datos.artists.data
            let losAlbumes = datos.albums.data
            let lasCanciones = datos.tracks.data
            // la info que llego de la API la pongo dentro de mi codigo html
            // ARISTAS
            for (let i=0; i<5; i++){
                listadoArtistas.innerHTML += `
                <div class="textos">
                <figure><img src="${losArtistas[i].picture}" alt="${losArtistas[i].name}"></figure>
                <a href="detail-artist.html">${losArtistas[i].name}</a>
                </div>
                `}
            // ALBUMES
            for (let i=0; i<5; i++){
                listadoAlbumes.innerHTML += `
                <div class="textos">
                <figure><img src="${losAlbumes[i].cover}" alt="${losAlbumes[i].title}"></figure>
                <a href="detail-album.html">${losAlbumes[i].title}</a>
                <a href="detail-artist.html">${losArtistas[i].name}</a>
                </div>
                `}
            for (let i=0; i<5; i++){
                listadoCanciones.innerHTML += `
                <div class="textos">
                <figure><img src="${losAlbumes[i].cover}" alt="${lasCanciones[i].title}"></figure>
                    <a href="detail-track.html">${lasCanciones[i].title}</a>
                    <a href="detail-artist.html">${losArtistas[i].name}</a>
                    <a href="detail-album.html">${losAlbumes[i].title}</a>
                </div>
            `}              
        })        
        .catch(function(error){
            console.log(error)
        })
});