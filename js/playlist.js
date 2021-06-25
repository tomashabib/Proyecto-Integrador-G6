window.addEventListener("load", function () {

    let proxy = 'https://cors-anywhere.herokuapp.com/';

    let recuperoStorage = localStorage.getItem('playlist');
    let playlist = JSON.parse(recuperoStorage);

    console.log(playlist);

    let contenedor = document.querySelector(".medioplaylist");
    let listaTrack = document.querySelector("#lista_canciones")
    if (playlist === null) {
        console.log("sin canciones")
        contenedor.innerHTML = `
        <p>Aun no hay canciones en tu Playlist</p>`
    } else {
        playlist.forEach(function (idTrack) {
            encontrarTrack(idTrack)
        });
    }

    function encontrarTrack(idTrack) {
        let url = proxy + "https://api.deezer.com/track/" + idTrack;
        fetch(url)
            .then(function (response){
                console.log(response)
                return response.json();
            })
        
            
            .then(function (tracks) {
                console.log(tracks)
                let untrack = tracks;
                let iduntrack = tracks.id;
                let nombretrack = tracks.title;
                let imagen = tracks.album.cover_medium;
                let nombrealbum = tracks.album.title
                listaTrack.innerHTML += `
            <li class="cancion-agregada">
                <img src=${imagen} >${nombretrack} | ${nombrealbum}
                </li>
            </li>
            `
            })
            .catch(function (error) {
                console.log(error)
            })
    }

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
})