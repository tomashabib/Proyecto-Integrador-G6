window.addEventListener("load", function () {
    // Traemos el texto buscado en el buscador    
    const parametro = new URLSearchParams(location.search)
    const laQuery = parametro.get("search")
    console.log(laQuery)

    // Donde vamos a poner los datos en el HTML
    // mejor resultado 
    let imgResultado = document.querySelector("article:first-of-type img")
    let resultado = document.querySelector("article:first-of-type p a")
    let tituloH1 = document.querySelector("h1")
    let albums = document.querySelector(".albums")
    let canciones = document.querySelector(".canciones")
    let noResultado = document.querySelector(".contenedor-noresult")
    let ocultar = document.querySelector(".contenedor-search-results")

    // canciones
    let imgnumeroUno = document.querySelector("subtitulo-search-results article:first-of-type img")
    let numeroUno = document.querySelector("subtitulo-search-results article p a")

    // traemos los datos que nos provee la API de Dezeer
    let urlSearch = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${laQuery}&&limit=5`
    fetch(urlSearch)
        .then(function (respuesta) {
            return respuesta.json()
        })
        .then(function (datos) {
            console.log(datos)
            let busqueda = datos.data

            tituloH1.innerHTML += `
            <span>${laQuery}</span>
            `
            // si no hay resultado
            if (busqueda.length == 0) {
                noResultado.innerHTML += `
                <img src="images/lupa.png" alt="lupa">
                <p>No se han encontrado resultados para : ${laQuery} </p>
                `
                ocultar.style.display = "none";

            } else {
                // ARTISTAS
                for (let i = 0; i < busqueda.length; i++) {
                    resultado.innerText = busqueda[i].artist.name
                    resultado.href = `detail-artist.html?id=${busqueda[i].artist.id}`
                    imgResultado.src = busqueda[i].artist.picture
                    imgResultado.alt = busqueda[i].artist.name
                }
                // ALBUMS
                for (let i = 0; i < busqueda.length; i++) {
                    albums.innerHTML += `
                    <article>
                    <img src="${busqueda[i].album.cover}" alt="${busqueda[i].album.title}">
                    <p><a href="detail-album.html?id=${busqueda[i].album.id}">${busqueda[i].album.title}</a></p>
                    </article>
                `
                }
                // DISCOS
                for (let i = 0; i < busqueda.length; i++) {
                    canciones.innerHTML += `
                    <article>
                    <img src="${busqueda[i].album.cover}" alt="${busqueda[i].title}">
                    <p><a href="detail-track.html?id=${busqueda[i].id}">${busqueda[i].title}</a></p>
                    </article>
                `
                }
            }
        })
        .catch(function (error) {
            console.log(error)
        })

    // VALIDACIÓN DE FORMULARIO 
    // capturamos formulario, campo a chequear y lugar donde enviaremos el menasaje
    let formulario = document.querySelector("form")
    let camboBuscar = document.querySelector("[name=search]")
    let mensaje = document.querySelector(".alert")

    // que en el evento submit mire si hay info o no adentro, y si no hay decirle un mensaje
    formulario.addEventListener("submit", function (event) {
 
        event.preventDefault();

        if (camboBuscar.value == "") {

            mensaje.innerText = "Completar el campo"

        } else if (camboBuscar.value.length < 3) {

            mensaje.innerText = 'Por favor ingrese al menos 3 caracteres a buscar'

        } else {
            this.submit()
        }

    })


});