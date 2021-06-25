window.addEventListener("load", function () {
    console.log(location.search)
    // Guardar la qs // Id del Album
    const parametros = new URLSearchParams(location.search)
    const cual = parametros.get("id")
    console.log(cual)

    // Donde voy a poner la informacion que traigo
    let listaDeCanciones = document.querySelector(".listaDeCanciones")

    // La URL que me provee los datos para el Fetch
    let urlCanciones = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cual}`

    // Fetch
    fetch(urlCanciones)
        .then(function (respuesta) {
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function (datos) {
            console.log(datos)
            // Le pido a la API
            let nombreAlbum = datos.album.title
            let imgAlbum = datos.album.cover_medium
            let nombreArtista = datos.artist.name
            let idArtista = datos.artist.id
            let nombreCancion = datos.title
            let audioCancion = datos.preview
            let idCancion = datos.id
            
            let titulo = document.querySelector("#titulo_de_la_cancion")
            titulo.innerHTML = nombreCancion
            
            let botonesPlaylist = document.querySelector(".botonesplaylist")
            botonesPlaylist.innerHTML = `
            <img id="imagen_cancion"  src="${imgAlbum}" class="imagenprincipal">
                <p id="nombre_album">Nombre del Artista:${nombreArtista} | Nombre del album: ${nombreAlbum}</p>
                <div ><a href="playlist.html">Ver mi Playlist</a></div>
                <div id="boton_playlist"><img id="imagen_album" src="images/Agregar.png" alt="Agregar a mi Playlist" title="Agregar a mi Playlist"></div>
                <div id="boton_quitar"><img id="imagen_album" src="images/Agregar.png" alt="Sacar de mi Playlist" title="Sacar de mi Playlist"></div>
                <div><audio src=${datos.preview} controls=true </audio></div>
            `
            

            let boton_playlist = document.querySelector("#boton_playlist")
            boton_playlist.addEventListener("click", function(){
                if (localStorage.getItem("playlist") === null){
                    console.log("no existe la propiedad")
                    let lista_playlist = [idCancion]
                    localStorage.setItem("playlist",JSON.stringify(lista_playlist))
                } else { 
                    let storage = localStorage.getItem("playlist")
                    storage = JSON.parse(storage)
                    storage.push(idCancion)
                    console.log(storage)
                    storage = JSON.stringify(storage)
                    localStorage.setItem("playlist", storage)

                } 
                
            })

            let boton_quitar = document.querySelector("#boton_quitar")
            boton_quitar.addEventListener("click", function(){
                let botonEliminar = localStorage.getItem("playlist")
                botonEliminar = JSON.parse(botonEliminar)
                botonEliminar.pop(idCancion)
                botonEliminar = JSON.stringify(botonEliminar)
                localStorage.setItem("playlist", botonEliminar)
        

            })
    

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