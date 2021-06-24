
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
            let generos = datos.data
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
    
    // VALIDACIÓN DE FORMULARIO 
    // capturamos formulario, campo a chequear y lugar donde enviaremos el menasaje
    let formulario = document.querySelector("form") 
    let camboBuscar = document.querySelector("[name=search]")
    let mensaje = document.querySelector(".alert")

    // submit  se verifica en el momento de envio. El submit es sobre el formulario
    // que en el evento submit mire si hay info o no adentro, y si no hay decirle un mensaje
    formulario.addEventListener("submit" , function (event) {

        // evita cosas predeterminadas. En este caso evita que se envie
        event.preventDefault();

        // si el value esta vacio, que le diga al usurio completar el campo
        if (camboBuscar.value == "") {

            mensaje.innerText = "Completar el campo"
                
        } else if (camboBuscar.value.length < 3 ) {

            mensaje.innerText = 'Por favor ingrese al menos 3 caracteres a buscar'

        } else{
            this.submit()
        }

    })
});