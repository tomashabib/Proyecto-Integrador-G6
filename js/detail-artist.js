window.addEventListener("load", function () {
    console.log(location.search)
    // Guardar la qs // Id del artista
    let laQS = location.search
    const parametros = new URLSearchParams(laQS)
    const cual = parametros.get("id")
    console.log(cual)
    // llamar a  la seccion del artista y segunda seccion donde estan sus canciones
    let tituloArtista = document.querySelector(".tituloartist a")
    let elArtista = document.querySelector(".contenedorartista img")
    let losAlbumes = document.querySelector(".botonesCanciones")

    // las urls que me proveen los datos
    let urlArtista = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${cual}`
    let urlTopAlbums = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${cual}/albums` + `&&limit=5`
    // hacer el Fetch
    fetch(urlArtista)
        .then(function (respuesta) {
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function (datos) {
            console.log(datos)
            // Le pido a la API 
            // PRIMERA PARTE :nombre del artista y imagen del artista 
            let nombre = datos.name
            console.log(nombre)
            let foto = datos.picture_medium
            console.log(foto)
            // PRIMERA PARTE : lo pongo en el html
            // nombre como titulo
            tituloArtista.innerText = nombre
            // imagen del artista
            elArtista.src = foto
            elArtista.alt = nombre
        })
        .catch(function (error) {
            console.log(error)
        })
    // SEGUNDA PARTE Top Albums
    fetch(urlTopAlbums)
        .then(function (respuesta) {
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function (datos) {
            console.log(datos)
            // pedir los datos
            let topAlbumss = datos.data
            // Ponerlos en el HTML
            for (let i = 0; i < topAlbumss.length; i++) {
                losAlbumes.innerHTML += `
                <li>
                    <figure>
                        <img src="${topAlbumss[i].cover}" alt="${topAlbumss[i].title}">
                        <a href="detail-album.html?id=${topAlbumss[i].id}}">${topAlbumss[i].title}</a> 
                    </figure>
                </li>
                `
            }
        })
    // VALIDACIÓN DE FORMULARIO 
    // capturamos formulario, campo a chequear y lugar donde enviaremos el menasaje
    let formulario = document.querySelector("form")
    let camboBuscar = document.querySelector("[name=search]")
    let mensaje = document.querySelector(".alert")

    formulario.addEventListener("submit", function (event) {

        // evita cosas predeterminadas. 
        event.preventDefault();

        // si el value esta vacio, que le diga al usurio completar el campo
        if (camboBuscar.value == "") {

            mensaje.innerText = "Completar el campo"

        } else if (camboBuscar.value.length < 3) {

            mensaje.innerText = 'Por favor ingrese al menos 3 caracteres a buscar'

        } else {
            this.submit()
        }

    })
});