window.addEventListener("load", function(){
    // Traemos el texto buscado en el buscador    
    const parametro = new URLSearchParams(location.search)
    const laQuery = parametro.get("search")
    console.log(laQuery)

    // Donde vamos a poner los datos en el HTML
    // mejor resultado 
    let imgResultado = document.querySelector("article:first-of-type img")
    let resultado = document.querySelector("article:first-of-type p a")
    // canciones
    let imgnumeroUno = document.querySelector("subtitulo-search-results article:first-of-type img")
    let numeroUno = document.querySelector("subtitulo-search-results article p a")

    // traemos los datos que nos provee la API de Dezeer
    let urlSearch = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${laQuery}`
    fetch(urlSearch)
        .then(function(respuesta){
            return respuesta.json()
        })
        .then(function(datos){
            console.log(datos)
            let busqueda = datos.data
            // ARTISTAS
            for (let i=0; i < busqueda.length ; i++){
                resultado.innerText = busqueda[i].artist.name
                resultado.href = `detail-artist.html?id=${busqueda[i].artist.id}`
                imgResultado.src = busqueda[i].artist.picture
                imgResultado.alt = busqueda[i].artist.name
               }   

        })


});