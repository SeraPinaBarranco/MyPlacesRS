import { docRef, getDocuments } from './modulos.js';

let b = document.querySelector('#boton')
let v = document.querySelector('#ver')
let g = document.getElementById('guardar')

let lat = document.getElementById('lat')

let lon = document.getElementById('lon')

window.addEventListener('DOMContentLoaded', ()=>{
  console.log(22)
})

g.addEventListener('click', ()=>{
  let sitio= document.getElementById('sitio')
  
  let coordenadas= [lat.value, lon.value]
  //console.log(sitio.value,coordenadas)
  docRef(sitio.value, coordenadas, "Casa");
})

b.addEventListener('click', ()=>{
  let sitio= document.getElementById('sitio')
  
  let coordenadas= [lat.value, lon.value]
  //console.log(sitio.value,coordenadas)
  docRef(sitio.value, coordenadas, "Casa");
})


var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  let latitude = crd.latitude
  let longitude = crd.longitude

  lat.value = crd.latitude
  lon.value = crd.longitude


  console.log('Your current position is:');
  console.log('Latitude : ' + latitude);
  console.log('Longitude: ' + longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
  

  coor.innerHTML = crd.latitude + ', ' + crd.longitude + " - " 
  

};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

v.addEventListener('click', ()=>{
  navigator.geolocation.getCurrentPosition(success, error, options);
})


