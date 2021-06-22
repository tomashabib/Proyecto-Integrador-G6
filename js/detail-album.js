window.addEventListener("load", function(){
    
    let tituloArtista = document.querySelector(".tituloartist")
    let listadoDiscos = document.querySelector(".contenedoralbumes")

    let urlAlbumes = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127"

    fetch(urlAlbumes)
        .then(function(respuesta){
            console.log(respuesta)
            return respuesta.json()
        })
        .then(function(datos){
            console.log(datos)

        })

        .catch(function(error){
            console.log(error)
        })


});