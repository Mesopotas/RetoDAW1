
document.addEventListener('DOMContentLoaded', (event) => {
  const fetchProductos = async () => {
      const url = 'http://localhost:8080/RetoDAW1ModeloAnton/Controller?ACTION=PRODUCT.SQL_FIND_ALL';

      try {
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const productos = await response.json();
          console.log(productos);
          productos.forEach(createProducto);
      } catch (error) {
          console.error('Error fetching productos:', error);
      }
  };

  const createProducto = (Product) => {
      const menu_list = document.querySelector('.hamEstan');
      const card = document.createElement('div');
      card.classList.add('card');

      const { Img, Nombre, Precio, Descripcion } = Product;

      card.innerHTML =`
      <div class="producto">
      <div class="fotoprod"> <img src="${Img}"></div>
      <div class="texto">
        <div class="nombre">
          <p>${Nombre}</p>
        </div>
        <div class="ingredientes">
          <p><span class="texto2">Ingredientes:</span><br> ${Descripcion}</p>
        </div>
        <div class="partebaja">
          <div class="precio">
            <p>${Precio} €</p>
          </div>
          <div class="contbotoncarro">
            <button class="botoncarro" href="#">Carrito</button>
          </div>
        </div>
      </div>
    </div>`;

      menu_list.appendChild(card);

      card.querySelector('.comprar-btn').addEventListener('click', () => {
          agregarAlCarrito(nombreProducto, precio, Imagen);
      });
  };

  const agregarAlCarrito = (titulo, precio, imagen) => {
      // Aquí puedes implementar la lógica para agregar el producto al carrito
      console.log('Producto añadido al carrito:', { titulo, precio, imagen });
  };

  fetchProductos();
});