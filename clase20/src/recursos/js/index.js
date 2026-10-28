
import {productosMascotas} from './productos.js'
import renderizarProductos from './funciones.js'

const contenedor = document.getElementById('contenedor-productos')
const botonEvento = document.getElementById('evento-boton')
const dialogo =document.getElementById('dialogo')


renderizarProductos(contenedor,productosMascotas)

//Eventos

//Ponemos a escuchar el boton
botonEvento.addEventListener('click', (evento)=>{ //e,event,evt
    //console.log(evento)

    //dialogo.show()
    dialogo.showModal()
})


const botonesProductos = contenedorProductos.querySelectorAll('.boton-agregar')
//console.log(botonesProductos)

botonesProductos.array.forEach((boton) => {
    boton.addEventListener('click',(evento)=>{
        //Cuerpo del callback del Evento
        console.log('Se agrego producto')
    })
});