window.addEventListener("load", function(){
console.log(location.search) 
    // Guardar la qs // Id del Album
    const parametros = new URLSearchParams(location.search)
    const cual = parametros.get("id")
    console.log(cual)
    
    // Donde voy a poner la informacion que traigo
    let listaDeCanciones = document.querySelector (".listaDeCanciones")

    // La URL que me provee los datos para el Fetch
    let urlCanciones = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cual}`
   
    // Fetch
    fetch(urlCanciones)
        .then(function(respuesta){
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function(datos){
            console.log(datos)
            // Le pido a la API
            let nombreAlbum = datos.album.title
            let imgAlbum = datos.cover_medium
            let nombreArtista = datos.artist.name
            let idArtista = datos.artist.id
            let nombreCancion = datos.title

            // poniendolo en el HTML

        })

        .catch(function(error){
            console.log(error)
        })

        //FALTA PARTE PLAYER Y PLAYLIST
        
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