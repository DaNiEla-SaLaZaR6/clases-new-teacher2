
let personas=[]
class Persona{
    nombre
    apellido
    cedula
    fechaNacimiento
    edad



    constructor(nombre,apellido,cedula,fechaNacimiento,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.cedula = cedula
        this.fechaNacimiento = fechaNacimiento
        this.edad = edad
    }
    completo(){

        return `${this.nombre} ${this.apellido}`
        

    }





}
 let nombre=document.getElementById('nombre')
 let apellido=document.getElementById('apellido')
 let fecha=document.getElementById('fecha')
 let cedula=document.getElementById('cedula')
 let tabla=document.getElementById('tabla')
 let ncopleto=document.getElementById('segun1')
 let boton=document.getElementById('boton')

boton.addEventListener('click',(e)=>{
    e.preventDefault()
    let edad1 = fecha.value.split('-')
    // console.log("si ingresa")

    const nuevaPersona = new Persona (nombre.value , apellido.value, cedula.value, fecha.value,parseInt(2023-edad1[0]))
    
    
    personas.push(nuevaPersona)
    console.log(nuevaPersona)
    console.log(nuevaPersona.completo())

    const fila=document.createElement('tr')
    const nombrecompleto=document.createElement('td') 
    const cumpleaños=document.createElement('td')

    nombrecompleto.innerText=nuevaPersona.completo();


    fila.appendChild(nombrecompleto)
    fila.appendChild(cumpleaños)
    tabla.appendChild(fila)



    if(nombre.value=='' || apellido.value=='' || fecha.value=='' || cedula.value=='' ) {
        alert ('falta completar un espacio')
    }







    

  
    
})





















