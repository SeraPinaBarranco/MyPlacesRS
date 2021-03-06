import { addTag, getTags, onGetTags, deleteTag, getTag, editTag } from './modulos.js';

let btnAdd = document.querySelector('#btnAdd')
let tablaTags= document.querySelector('#tablaTags')
let inpAdd = document.querySelector('#inpAdd')

let editStatus = "";
let idTag= ""

window.addEventListener('DOMContentLoaded', ()=>{
//addTag("Comer Bien")
onGetTags((querySnashot)=>{
    tablaTags.innerHTML = "";
    tablaTags.innerHTML +=`
    <h2>
        Listado de tags
    </h2>
    
    `
    querySnashot.forEach(doc => {
      console.log(doc.data().tag + " - " + doc.id)
      tablaTags.innerHTML += 
      `<div class="card">        
        <h3>${doc.data().tag}</h3>
        <div class="botones">
        <a href="#" class="" data-id="${doc.id}"><img data-id="${doc.id}" src="images/agregar.png" alt="agregar"></a>
        <a href="#" class="eliminar" data-id="${doc.id}"><img data-id="${doc.id}" src="images/borrar.png" alt="borrar"></a>
        <a href="#" class="editar" data-id="${doc.id}"><img data-id="${doc.id}" src="images/editar.png" alt="editar"></a>
        </div>
      </div>      
      `
    });

    let aEliminar= document.querySelectorAll('.eliminar')

    aEliminar.forEach(btnAdd => {
      btnAdd.addEventListener('click', (e)=>{
        //console.log(e.target.dataset.id)
        deleteTag(e.target.dataset.id)
      })      
    });

    let aEditar= document.querySelectorAll('.editar')
    aEditar.forEach(btnEdit => {
      btnEdit.addEventListener('click', async (e)=>{
        // console.log(e.target.dataset.id)
        let tag =await getTag(e.target.dataset.id)
        //console.log(tag.data().tag + "w")
        inpAdd.value = tag.data().tag
        editStatus = true
        btnAdd.innerHTML = "Editar"
        idTag = tag.id
      })
    });

  })
  
  
})

btnAdd.addEventListener('click', agregaTag)


function agregaTag(){
  let inpAdd = document.querySelector('#inpAdd')
  let valor =inpAdd.value
  if(!editStatus){
    console.log("Guardando")
    if(inpAdd.value != ""){
      addTag(inpAdd.value)
      inpAdd.value = ""
    }else{
      inpAdd.focus()
    }
  }else{
    console.log("Editando " + idTag)
    
    editTag(idTag,{tag:valor})
    editStatus = false
    inpAdd.value = ""
    btnAdd.innerHTML = "A??adir"
  }
  /*
  if(inpAdd.value != ""){
    addTag(inpAdd.value)
    inpAdd.value = ""
  }else{
    inpAdd.focus()
  }*/

}


async function  cargar() {
  const t =await getTags()
    
  t.forEach(doc => {
    console.log(doc.data().tag + " - " + doc.id)
    tablaTags.innerHTML += 
    `<div class="card">
      <h3>${doc.data().tag}</h3>
      <a href="#" data-id="${doc.id}">A??adir a sitio</a>
      <a href="#" data-id="${doc.id}">Eliminar</a>
      <a href="#" data-id="${doc.id}">Editar</a>
    </div>
    
    `
  });
}



function llenarTags(){
    
}