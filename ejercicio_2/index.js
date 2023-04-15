let tabla=[
    {nombre:'Carlos',apellido:'Gonzalez',cc:'1014465320', direccion:'calle 54 # 8', mail:'carl123@gmail.com',telefono:'3225008'},
    {nombre:'Camila',apellido:'Pelaez',cc:'1003245432', direccion:'calle 20 # 12-4', mail:'cami13@gmail.com',telefono:'337552'},
    {nombre:'Oscar',apellido:'Cervantes',cc:'1093234232', direccion:'calle 100 # 154-6', mail:'oscar023@gmail.com',telefono:'3594268'},
]
let cuerpotabla=document.getElementById('cuerpo-tabla')
let i=1

const listar=()=>{
    let filas="";
    for (let i = 0; i < tabla.length; i++) {
        
        filas+=`<tr><th scope="row">${i+1}</th><td>${tabla[i].nombre}</td><td>${tabla[i].apellido}</td><td>${tabla[i].cc}</td><td>${tabla[i].direccion}</td><td>${tabla[i].mail}</td><td>${tabla[i].telefono}</td></tr>` 
    }
    cuerpotabla.innerHTML=filas;
}
const registrar=()=>{
    
    let nombre=document.getElementById('nombre').value
    let apellido=document.getElementById('apellido').value
    let cc=document.getElementById('cc').value
    let direccion=document.getElementById('direccion').value
    let mail=document.getElementById('mail').value
    let telefono=document.getElementById('telefono').value

    if (!nombre) {
        alert('Ingrese Su Nombre')
        return
    }
    if (!apellido) {
        alert('Ingrese Su Apellido ')
        return
    }
    if (!cc) {
        alert('Ingrese Su Numero De Documento')
        return
    }
    if (!direccion) {
        alert('Ingrese Una Direccion')
        return
    }
    if (!mail) {
        alert('Ingrese Un Correo Electronico')
        return
    }
    if (!telefono) {
        alert('Ingrese Un Numero Telefonico')
        return
    }
    cuerpotabla.innerHTML+=`<tr><th scope="row">${i}</th><td>${nombre}</td><td>${apellido}</td><td>${cc}</td><td>${direccion}</td><td>${mail}</td><td>${telefono}</td></tr>`  
    i++;
    nuevo={nombre,apellido,cc,direccion,mail,telefono}
    tabla.push(nuevo)
}
