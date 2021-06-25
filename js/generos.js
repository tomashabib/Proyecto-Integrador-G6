window.addEventListener("load", function () {
    let botonesG = document.querySelector(".contenedor.generos ul")
    let urlG = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"

    fetch(urlG)
        .then(function (respuesta) {
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function (datos) {
            console.log(datos)
            let geneross = datos.data
            for (let i = 0; i < geneross.length; i++) {
                botonesG.innerHTML += `
                <li><a href="detail-genres.html?id=${geneross[i].id}">${geneross[i].name}</a></li>
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