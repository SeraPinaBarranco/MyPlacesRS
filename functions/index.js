import { docRef, getDocuments } from './modulos.js';

let b = document.querySelector('#boton')
let v = document.querySelector('#ver')

window.addEventListener('DOMContentLoaded', ()=>{
  console.log(22)
})

b.addEventListener('click', ()=>{

  console.log(22)
  getDocuments();
  docRef();
})


var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');

  let lat = document.getElementById('lat')
  lat.value = crd.latitude
  let lon = document.getElementById('lon')
  lon.value = crd.longitude

  coor.innerHTML = crd.latitude + ', ' + crd.longitude
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

v.addEventListener('click', ()=>{
  navigator.geolocation.getCurrentPosition(success, error, options);
})


