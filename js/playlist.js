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
})
