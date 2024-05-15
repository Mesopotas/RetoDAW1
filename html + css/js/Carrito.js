// Variables
/*window.addEventListener('DOMContentLoaded', (event) => {*/
const carrito = document.querySelector("#carrito");
const listaCarrito = document.querySelector("#lista-carrito tbody")
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito")
const masvendido = document.querySelector("#mas-vendido")

cargarEventListeners();
function cargarEventListeners() {
    masvendido.addEventListener("click", agregar_producto);
}

/*})*/
let articuloCarrito = []

// Funciones
function agregar_producto(e) {
    e.preventDefault();
    if(e.target.classList.contains("Agregar-carrito")) {
        productoSeleccionado = e.target.parentElement.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}

function leerDatosProducto(producto) {
    // Crear un objeto
    infoProduccto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('span').textContent,
        precio: producto.querySelector('.tjv-texto2 span').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    
    articuloCarrito = [...articuloCarrito, infoProduccto]
    
    console.log(articuloCarrito);

    carritoHTML();
}
function carritoHTML() {
/*window.addEventListener('DOMContentLoaded', (event) => {*/    
    limpiarHTML();

    articuloCarrito.forEach(producto => {
        
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>
                <img src="${producto.imagen}"></img>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso"></a>
            </td>
        `;

        listaCarrito.appendChild(row)

    });
/*/})*/
}

function limpiarHTML() {

    listaCarrito.innerHTML = ""

    while(listaCarrito.firstChild){
        listaCarrito.removeChild(listaCarrito.firstChild);
    }

}
