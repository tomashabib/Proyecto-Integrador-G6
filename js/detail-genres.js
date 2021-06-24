window.addEventListener("load", function () {
    console.log(location.search)

    // Guardar la QS // Id Generos
    const parametros = new URLSearchParams(location.search)
    const cual = parametros.get("id")
    console.log(cual)

    // Donde voy a poner la infromacion que traigo
    let listadoGeneros = document.querySelector(".contenedor generos")

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
                    let artistaGenero = datos.data
                    // Lo pongo en el HTML
                    for (let i = 0; i < 5; i++) {
                        listadoGeneros.innerHTML += `
    <div class="textos">
        <figure><img src="${artistaGenero[i].picture_medium}" alt="${artistaGenero[i].name}"></figure>
        <a href="detail-genres.html?id=${artistaGenero[i].id}">${artistaGenero[i].name}</a>
        </div>
    `
                    }

                })
                .catch(function (error) {
                    console.log(error)
                })

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