import { saludo, addTag } from './modulos.js';

let btnAdd = document.querySelector('#btnAdd')

window.addEventListener('DOMContentLoaded', ()=>{
//addTag("Comer Bien")
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