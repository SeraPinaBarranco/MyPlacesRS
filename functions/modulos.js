//export {app, db};


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, doc, deleteDoc, getDoc, updateDoc   } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOsyY0lHTg4-dLwD_EasqTraQLOHPqyIg",
  authDomain: "myplacesrs.firebaseapp.com",
  projectId: "myplacesrs",
  storageBucket: "myplacesrs.appspot.com",
  messagingSenderId: "729749897246",
  appId: "1:729749897246:web:90f2dd4d63367268cc2e0f",
  measurementId: "G-4GH5HHPCT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let db = getFirestore(app)


//* Añadir un documento a la  coleccion
export const docRef =async (nombre, coordenadas, tags)=>{
  await addDoc(collection(db, "sitios"), {
    nombreSitio: nombre,
    coordenadas: coordenadas,
    tags: [] }) 
    //console.log(n1)
} 
 
export const getDocuments= async ()=>{
  const querySnapshot = await getDocs(collection(db, "sitios"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
} 


//*TODO añade etiqueta a la coleccion de tags
export const addTag =async (tag)=>{
  await addDoc(collection(db, "etiquetas"), {
    tag: tag
     }) 
    //console.log(n1)
} 

export const getTags= ()=>  getDocs(collection(db, "etiquetas"));

export const onGetTags = (callback) => onSnapshot(collection(db,"etiquetas"),callback)

export const deleteTag = id => deleteDoc(doc(db,'etiquetas',id))

export const getTag = id => getDoc(doc(db,'etiquetas',id))

export const editTag = (id, newField) => updateDoc(doc(db,'etiquetas',id), newField)