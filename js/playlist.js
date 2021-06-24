window.addEventListener("load", function(){

    let proxy = 'https://cors-anywhere.herokuapp.com/';

    let recuperoStorage = localStorage.getItem('playlist');
    let playlist = JSON.parse(recuperoStorage);

    console.log(playlist);

    let listaTracks = document.querySelector(".medioplaylist");
    if( playlist.lenght == 0 ) {
        listaTracks.innerHTML += `
        <p>Aun no hay canciones en tu Playlist</p>`
    } else{
        playlist.forEach(function(idTrack) {
            encontrarTrack(idTrack)
        });
    }
    function encontrarTrack(idTrack){
        let url = proxy + "https://api.deezer.com/track/" + idTrack;
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then (function(response){
            return response.json();
        })
        .then (function(tracks){
            console.log(tracks)
            let untrack = tracks;
            let iduntrack= untrack.id;
            let nombretrack = untrack.title; 
            listaTracks.innerHTML += `
            <article>
                <h3> <a class="decoration" href="detail-track.html?id=${iduntrack}">${nombretrack} </a> </h3>
            </article>    
            `
        })
        .catch(function(error){
            console.log(error)
        })
    }
    
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
})
