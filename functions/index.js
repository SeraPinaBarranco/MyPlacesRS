import { docRef, getDocuments } from './modulos.js';

let b = document.querySelector('#boton')

window.addEventListener('DOMContentLoaded', ()=>{
  console.log(22)



  
  
})

b.addEventListener('click', ()=>{

  console.log(22)
  getDocuments();
  docRef();
})
/*import { getDocuments } from './modulos.js';





// Add a new document in collection "cities"
// await setDoc(doc(app, "cities", "LA"), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
//   });

function leerDatos(){
  //getDocuments;
}

let b = document.querySelector('#boton')

b.addEventListener('click', ()=>{

  console.log(22)
})
*/

