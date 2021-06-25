window.addEventListener("load", function () {
    console.log(location.search)

    // Guardar la QS // Id Generos
    const parametros = new URLSearchParams(location.search)
    const cual = parametros.get("id")
    console.log(cual)

    // Donde voy a poner la infromacion que traigo
    let seccionG = document.querySelector("#sectionGeneros")
    let tituloGenero = document.querySelector("h1")

    // Las URL que me proveen los datos para el Fetch
    let urlGeneros = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${cual}`
    let urlGenerosArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${cual}/artists`

    // GENEROS
    // Fetch
    fetch(urlGeneros)
        .then(function (respuesta) {
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function (datos) {
            console.log(datos)
            // Le pido a la API
            // Primera Parte: Nombre del Genero 
            let nombreGenero = datos.name
            console.log(nombreGenero)
            // Lo pongo en el HTML
            tituloGenero.innerText = nombreGenero
        })
        .catch(function (error) {
                console.log(error)
        })

    // Segunda Parte: Lista de artistas del Genero con su foto y su nombre
    // Fetch
    fetch(urlGenerosArtistas)
        .then(function (respuesta) {
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function (datos) {
            console.log(datos)
            // Le pido a la API
            let artistas = datos.data 

            for (let i = 0; i < artistas.length ; i++) {
                seccionG.innerHTML = `
                <article>
                <h4><a href="detail-artist.html?id=${artistas[i].id}">${artistas[i].name}</a></h4>
                    <div class="contenedorartista">
                        <img src="${artistas[i].picture_medium}" alt="${artistas[i].name}">
                    </div>
                </article>
                `
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