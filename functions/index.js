import { docRef, getDocuments, onGetTags } from './modulos.js';

let b = document.querySelector('#boton')
let v = document.querySelector('#ver')
let g = document.getElementById('guardar')

let sitio = document.getElementById('sitio')

let listTags = document.querySelector('#listTags')
let seeTag = document.getElementById('seeTags')
let tags = document.getElementsByName('tag')

let lat = document.getElementById('lat')

let lon = document.getElementById('lon')

window.addEventListener('DOMContentLoaded', ()=>{
  console.log(22)
})

g.addEventListener('click', ()=>{
  //visualizar los checkbox si están checkeados
  let arrayTags = []
  tags.forEach(t => {
    if(t.checked){
      arrayTags.push(t.value)
    }    
  })
  
  //guarda el sitio
  let sitio= document.getElementById('sitio')  
  let coordenadas= [lat.value, lon.value]  
  docRef(sitio.value, coordenadas, arrayTags);
})

b.addEventListener('click', ()=>{
  /*let sitio= document.getElementById('sitio')
  
  let coordenadas= [lat.value, lon.value]
  //console.log(sitio.value,coordenadas)
  docRef(sitio.value, coordenadas, "Casa");*/

  /*
  //loop throug the checkboxes and get the checked ones
  let chk = document.getElementsByName('tag')

  chk.forEach(element => {
    if(element.checked){
      console.log(element.value)
    }
  })
*/
})

seeTag.addEventListener('click', getAllTags)

let mostrar = false
async function getAllTags(){
  if(!mostrar){
    onGetTags((querySnashot)=>{
      let list = ""
      querySnashot.forEach(doc => {
        console.log(doc.data().tag + " - " + doc.id)
        list += `<label>
                    ${doc.data().tag}
                    <span>
                      <input type="checkbox" name="tag" value="${doc.data().tag}">
                    </span>
                 </label>`
      });      
      listTags.innerHTML = list
    })
    seeTag.innerHTML = "Ocultar Etiquetas"
    mostrar = true
  }else{
    listTags.innerHTML = ""
    seeTag.innerHTML = "Ver Etiquetas"
    mostrar = false
  }

}


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


