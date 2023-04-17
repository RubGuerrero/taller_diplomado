let tabla = [
    { nombre: 'Carlos', apellido: 'Gonzalez', cc: '1014465320', direccion: 'calle 54 # 8', mail: 'carl123@gmail.com', telefono: '3225008' },
    { nombre: 'Camila', apellido: 'Pelaez', cc: '1003245432', direccion: 'calle 20 # 12-4', mail: 'cami13@gmail.com', telefono: '337552' },
    { nombre: 'Oscar', apellido: 'Cervantes', cc: '1093234232', direccion: 'calle 100 # 154-6', mail: 'oscar023@gmail.com', telefono: '3594268' },
]

let cuerpotabla = document.getElementById('cuerpo-tabla')
let i = 1

const listar = () => {
    let filas = "";
    for (let i = 0; i < tabla.length; i++) {

        filas += `<tr><th scope="row">${i + 1}</th><td>${tabla[i].nombre}</td><td>${tabla[i].apellido}</td><td>${tabla[i].cc}</td><td>${tabla[i].direccion}</td><td>${tabla[i].mail}</td><td>${tabla[i].telefono}</td></tr>`
    }
    cuerpotabla.innerHTML = filas;
}

const registrar = () => {

    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let cc = document.getElementById('cc').value
    let direccion = document.getElementById('direccion').value
    let mail = document.getElementById('mail').value
    let telefono = document.getElementById('telefono').value
    let expresion = /\w+@\w+\.[a-z]/


    if (!nombre) {
        alert('Ingresa tu Nombre')
        return
    }
    else if (nombre.length > 30) {
        alert("el nombre es muy largo")
        return
    }


    if (!apellido) {
        alert('Ingresa tu Apellido ')
        return
    }
    else if (apellido.length > 30) {
        alert("el apellido es muy largo")
        return
    }


    if (!cc) {
        alert('Ingrese Su Numero De Documento')
        return
    }

    else if (cc.length > 15) {
        alert("el numero de Documento es muy largo")
        return
    }

    
    if (!direccion) {
        alert('Ingrese Una Direccion')
        return
    }
    else if (direccion.length > 50) {
        alert("la direcion es muy larga")
        return
    }


    if (!mail) {
        alert('Ingrese Un Correo Electronico')
        return
    }
    else if (mail.length > 50) {
        alert("el correo es muy largo")
        return
    }
    else if (!expresion.test(mail)) {
        alert("El correo no es valido")
        return
    }


    if (!telefono) {
        alert('Ingrese Un Numero Telefonico')
        return
    }
    else if (telefono.length > 10) {
        alert("el numero de telefono es muy largo")
        return
    }

    else if (isNaN(cc)) {
        alert("El Numero de documento ingresado no es valido")
        return
    }

    else if (isNaN(telefono)) {
        alert("El Numero de telefono ingresado no es valido")
        return
    }


    cuerpotabla.innerHTML += `<tr><th scope="row">${i}</th><td>${nombre}</td><td>${apellido}</td><td>${cc}</td><td>${direccion}</td><td>${mail}</td><td>${telefono}</td></tr>`
    i++;
    nuevo = { nombre, apellido, cc, direccion, mail, telefono }
    tabla.push(nuevo)
}
