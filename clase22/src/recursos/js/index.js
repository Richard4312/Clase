
import {productosMascotas} from './productos.js'
import renderizarProductos from './funciones.js'
import {filtrarProductos} from './funciones.js'
const productosSeleccionados=[]


//Persistencia

//localStorage.setItem('numero', 12)
//const numero = localStorage.getItem('numero')
//console.log(numero)

const numeros=[1,2,3,4,5]
localStorage.setItem('numeros',JSON.stringify(numeros))
const numerosGuardados= localStorage.getItem(numeros)
const transofrmamosEnArreglos = JSON.parse(numerosGuardados)
console.log(typeof numerosGuardados)






const contenedor = document.getElementById('contenedor-productos')
const botonEvento = document.getElementById('evento-boton')
const dialogo =document.getElementById('dialogo')
const contadorProductos = document.getElementById('contador')
const filtro = document.getElementById('filtro')

const productosFiltrados= filtrarProductos(productosMascotas,10)
renderizarProductos(productosMascotas,contenedor)



//Eventos

filtro.addEventListener('input',()=>{

    console.log(filtro.value)
    //va la funcion filtrarProductos
})







//Ponemos a escuchar el boton
botonEvento.addEventListener('click', (evento)=>{ //e,event,evt
    //console.log(evento)

    //dialogo.show()
    dialogo.showModal()
})


const botonesProductos = contenedorProductos.querySelectorAll('.boton-agregar')
//console.log(botonesProductos)

botonesProductos.forEach((boton) => {
    boton.addEventListener('click',(evento)=>{
        //Cuerpo del callback del Evento
        const idProducto= parseInt(boton.dataset.id)

        productosSeleccionados.push(idProducto)

        localStorage.setItem('carrito',JSON.stringify(productosSeleccionados))
        //console.log(productosSeleccionados)
        contadorProductos.textContent = productosSeleccionados.length
    })
});