// Variables
window.addEventListener('DOMContentLoaded', (event) => {
const carrito = document.querySelector("#carrito");
const listaCarrito = document.querySelector("#lista-carrito tbody")
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito")
const masvendido = document.querySelector("#mas-vendido")

cargarEventListeners();
function cargarEventListeners() {
    masvendido.addEventListener("click", agregar_producto);
}

})
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
        precio: producto.querySelector('.tj-texto-2 span').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    
    articuloCarrito = [...articuloCarrito, infoProduccto]
    
    console.log(articuloCarrito);
}

function carritoHTML() {

    articuloCarrito.forEach(producto => {
        
        

    });

}