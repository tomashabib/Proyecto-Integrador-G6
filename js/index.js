window.addEventListener("load", function(){
    let listadoArtistas = document.querySelector(".listadoArtistas")
    let listadoDiscos = document.querySelector(".listadoDiscos")
    let listadoCanciones = document.querySelector(".listadoCanciones")
    let urlArtistas = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart"
    
    fetch(urlArtistas)
        .then(function(respuesta){
            console.log(respuesta)
            return respuesta.json()
         })
        .then(function(datos){
        // pido los datos que necesito de la URL (Artistas-Discos-Canciones)
            console.log(datos)
            let losArtistas = datos.artists.data
            let losDiscos = datos.albums.data
            let lasCanciones = datos.tracks.data
            // la info que llego de la pongo dentro de mi codigo html
            // ARISTAS
            for (let i=0; i<5; i++){
                listadoArtistas.innerHTML += `
                <figure><img src="${losArtistas[i].picture}" alt="${losArtistas[i].name}"></figure>
                <div class="textos">
                <a href="detail-artist.html">${losArtistas[i].name}</a>
                </div>
                `}
            // DISCOS 
            for (let i=0; i<5; i++){
                listadoDiscos.innerHTML += `
                <figure><img src="${losDiscos[i].cover}" alt="${losDiscos[i].title}"></figure>
                <div class="textos">
                <a href="detail-album.html">${losDiscos[i].title}</a>
                <a href="detail-artist.html">${losArtistas[i].name}</a>
                </div>
                `}
                for (let i=0; i<5; i++){
                    listadoCanciones.innerHTML += `
                    <figure><img src="${losDiscos[i].cover}" alt="${lasCanciones[i].title}"></figure>
                    <div class="textos">
                        <a href="detail-track.html">${lasCanciones[i].title}</a>
                        <a href="detail-artist.html">${losArtistas[i].name}</a>
                        <a href="detail-album.html">${losDiscos[i].title}</a>
                    </div>
                    `} 
            })        
        .catch(function(error){
            console.log(error)
        })
});