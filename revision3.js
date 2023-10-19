const productos = [
    {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./assets/taco-negro.jpg"},
    {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./assets/taco-azul.jpg"},
    {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/bota-negra.jpg"},
    {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/bota-azul.jpg"},
    {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assets/zapato-rojo.jpg"}
  ];
  
  const li = document.querySelector('#lista-de-productos'); // Cambiado de getElementsByName a querySelector
  const inputDeEntrada = document.querySelector('#entrada');
  
  // Función para mostrar productos
  function mostrarProductos(productos) {
    productos.forEach((producto) => {
      const d = document.createElement("div");
      d.classList.add("producto");
  
      const ti = document.createElement("p");
      ti.classList.add("titulo");
      ti.textContent = producto.nombre;
  
      const imagen = document.createElement("img");
      imagen.setAttribute('src', producto.img);
  
      d.appendChild(ti);
      d.appendChild(imagen);
  
      li.appendChild(d);
    });
  }
  
  mostrarProductos(productos);
  
  const botonDeFiltro = document.querySelector("button");
  
  botonDeFiltro.onclick = function() {
    while (li.firstChild) {
      li.removeChild(li.firstChild);
    }
  
    const texto = inputDeEntrada.value;
  
    const productosFiltrados = filtrado(texto, productos);
  
    mostrarProductos(productosFiltrados);
  };
  
  const filtrado = (texto, productos = [] ) => {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  };
  