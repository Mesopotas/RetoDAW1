function cambiarTitulo () {
    console.log('Funcion CambiarTitulo')
    const parrafo = document.getElementById('parrafo')
    const boton = document.getElementById('button')
    if(parrafo.style.display === 'none'){
        parrafo.style.display = 'block'
    } else{
        parrafo.style.display = 'none'        
    }
}