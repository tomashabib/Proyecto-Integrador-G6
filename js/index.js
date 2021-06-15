window.addEventListener("load", function(){
    let listadoArtistas = document.querySelector(".listadoArtistas")
    let urlArtistas = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart"
    
    fetch(urlArtistas)
        .then(function(respuesta){
            console.log(respuesta)
            return respuesta.json()
         })
        .then(function(datos){
        // pido los datos que necesito de la URL
            console.log(datos)
            let losArtistas = datos.artists.data
            // la info que llego la pongo dentro de mi codigo html
            for (let i=0; i<losArtistas.length; i++){
                listadoArtistas.innerHTML += `
                <li>
                <img src="${losArtistas[i].picture}" alt="${losArtistas[i].name}">
                </li>
                `}
            })        
        .catch(function(error){
            console.log(error)
        })
});