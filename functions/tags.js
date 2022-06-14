import { addTag, getTags, onGetTags } from './modulos.js';

let btnAdd = document.querySelector('#btnAdd')
let tablaTags= document.querySelector('#tablaTags')

window.addEventListener('DOMContentLoaded', ()=>{
//addTag("Comer Bien")
onGetTags((querySnashot)=>{
    tablaTags.innerHTML = "";
    querySnashot.forEach(doc => {
      console.log(doc.data().tag + " - " + doc.id)
      tablaTags.innerHTML += 
      `<div class="card">
        <h3>${doc.data().tag}</h3>
        <a href="#" data-id="${doc.id}">Añadir a sitio</a>
        <a href="#" data-id="${doc.id}">Eliminar</a>
        <a href="#" data-id="${doc.id}">Editar</a>
      </div>
      
      `
    });
  })
  /*t.forEach(element => {
    
  });*/
})

btnAdd.addEventListener('click', agregaTag)


function agregaTag(){
  let inpAdd = document.querySelector('#inpAdd')

  if(inpAdd.value != ""){
    addTag(inpAdd.value)
    inpAdd.value = ""
  }else{
    inpAdd.focus()
  }

}


async function  cargar() {
  const t =await getTags()
    
  t.forEach(doc => {
    console.log(doc.data().tag + " - " + doc.id)
    tablaTags.innerHTML += 
    `<div class="card">
      <h3>${doc.data().tag}</h3>
      <a href="#" data-id="${doc.id}">Añadir a sitio</a>
      <a href="#" data-id="${doc.id}">Eliminar</a>
      <a href="#" data-id="${doc.id}">Editar</a>
    </div>
    
    `
  });
}

function llenarTags(){
    
}