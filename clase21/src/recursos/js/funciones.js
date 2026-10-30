function renderizarProductos(productos,contenedorProductos){
let productosHTML =''

productos.forEach((producto) =>{
    productosHTML += `
                <article>
                    <h3>${producto.nombre}</h3>
                    <picture>
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                    </picture>
                    <p>
                        ${producto.descripcion}
                    </p>
                    <ul>
                        <li>Talle ${producto.talles[0]}</li>
                        <li>Precio $ ${producto.precio}</li>
                    </ul>
                    <button class="boton-agregar" data-id=${producto.id} >Agregar al Carrito</button>
                </article>`             
})


contenedorProductos.innerHTML = productosHTML
}



function filtrarProductos(producto /*arreglo*/,precio){
     //Cuerpo funcion filtradoProductos
    return producto.filter(() => {
        //Cuerpo de .filter
        return producto.precio < precio
    })

}

export  {renderizarProductos,filtrarProductos}

