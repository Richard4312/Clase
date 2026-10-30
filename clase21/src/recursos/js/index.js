
import {productosMascotas} from './productos.js'
import renderizarProductos from './funciones.js'
import {filtrarProductos} from './funciones.js'
const productosSeleccionados=[]

const contenedorProductos = document.getElementById('contenedor-productos')
const botonEvento = document.getElementById('evento-boton')
const dialogo =document.getElementById('dialogo')
const contadorProductos = document.getElementById('contador')
const filtro = document.getElementById('filtro')

const productosFiltrados= filtrarProductos(productosMascotas,10)
renderizarProductos(productosMascotas,contenedorProductos)


//Eventos

filtro.addEventListener('input',()=>{

    console.log(filtro.value)
    //va la funcion filtrarProductos
}



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
        //console.log(productosSeleccionados)
        contadorProductos.textContent = productosSeleccionados.length
    })
});