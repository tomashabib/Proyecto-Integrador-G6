
window.addEventListener("load", function(){
    // donde voy a poner despues la info que traigo
    let listadoGeneros = document.querySelector(".contenedor generos")
    // las url de donde traigo la info, para el FETCH
    let urlGeneros = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/0" 
    // GENEROS
    fetch(urlGeneros)
        .then(function(respuesta){
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function(datos){
        // Pido los datos que necesito de la URL (nombre y foto artista)
            console.log(datos)
            let artistas = datos.data
            // la info que llego de la API la pongo dentro de mi codigo html
            // GENEROS
            for (let i=0; i<5; i++){
                listadoGeneros.innerHTML += `
                <div class="textos">
                <figure><img src="${Genero[i].picture}" alt="${Genero[i].name}"></figure>
                <a href="detail-genres.html?id=${genero[i].id}">${genero[i].name}</a>
                </div>
            `}
        })        
        .catch(function(error){
            console.log(error)
        })
        });