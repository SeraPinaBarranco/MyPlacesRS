document.addEventListener('DOMContentLoaded', ()=>{console.log("www")})

let pn = document.querySelector('#pornombre')
pn.addEventListener('click', verDatos)
let pt = document.querySelector('#portag')
pt.addEventListener('click', verDatos)



function verDatos(){
    if(this.id == 'pornombre'){
        console.log("pronombre")

    }else{
        console.log("tag")
    }
}