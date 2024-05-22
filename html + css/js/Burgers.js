
window.addEventListener('DOMContentLoaded', (event) => {


    const url = `http://localhost:8080/RetoDAW1ModeloAnton/Controller?ACTION=PRODUCT.SQL_FIND_ALL`
    console.log("Data --> ")




    const fetchData = async () => {
        const burgerRes = await fetch(url)
        const burgerData = await burgerRes.json()
        console.log("Data --> ", burgerData)

        printBurguerData(burgerData)
    }

    const printBurguerData = (burguerData) => {
        const category = document.getElementsByClassName('Product')[0]
        Array.from(burguerData).forEach(Product => {
            const container = document.createElement("div")
            container.classList.add("container")
            container.classList.add("Product")
            category.appendChild(container)
            container.innerHTML =
                `<div class="producto">
                <div class="fotoprod"> <img src="${Product.img}"></div>
                <div class="texto">
                  <div class="nombre">
                    <p>${Product.Nombre}</p>
                  </div>
                  <div class="ingredientes">
                    <p><span class="texto2">${Product.Descripcion}</p>
                  </div>
                  <div class="partebaja">
                    <div class="precio">
                      <p>${Product.Precio} €</p>
                    </div>
                    <a href="#" data-id="1">
                      <button class="botoncarro">Carrito</button>
                    </a>
                  </div>
                </div>
              </div> 
              `
        })
    }
    fetchData()
})
