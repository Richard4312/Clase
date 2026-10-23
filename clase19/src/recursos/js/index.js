
import productosMascotas from './productos.js'
import renderizarProductos from './funciones.js'

const contenedorProductos = document.getElementById('contenedor-productos')


renderizarProductos(contenedorProductos,productosMascotas)