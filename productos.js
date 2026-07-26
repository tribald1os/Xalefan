/* ==========================================================================
   PRODUCTOS.JS
   Base de datos local de productos.

   Para añadir un producto nuevo, copia un objeto de la lista y pégalo
   dentro del array "productos", cambiando los datos. No es necesario
   tocar index.html ni el CSS.

   Campos:
   - id           : número único
   - nombre       : nombre del producto
   - imagen       : ruta de la imagen (carpeta /productos)
   - categoria    : una de las categorías definidas en config.js
   - precio       : precio actual en texto, ej "39,99"
   - precioAnterior: precio antes del descuento (opcional, "" si no hay)
   - descuento    : porcentaje de descuento en texto, ej "20%" ("" si no hay)
   - descripcion  : descripción corta
   - valoracion   : número de 1 a 5
   - numValoraciones: cantidad de valoraciones (para "más populares")
   - tienda       : nombre de la tienda destino (Amazon, AliExpress, etc.)
   - enlace       : URL de afiliado externa
   - destacado    : true/false -> aparece en "Productos recomendados"
   - oferta       : true/false -> muestra etiqueta "Oferta"
   ========================================================================== */

const productos = [

  {
    id: 1,
    nombre: "Auriculares Bluetooth Pro",
    imagen: "productos/auriculares.jpg",
    categoria: "Tecnología",
    precio: "39,99",
    precioAnterior: "49,99",
    descuento: "20%",
    descripcion: "Auriculares inalámbricos con cancelación de ruido activa y 30h de autonomía.",
    valoracion: 5,
    numValoraciones: 2140,
    tienda: "Amazon",
    enlace: "https://amazon.com/producto-auriculares-bluetooth-pro",
    destacado: true,
    oferta: true
  },
  {
    id: 2,
    nombre: "Smartwatch Serie Active",
    imagen: "productos/smartwatch.jpg",
    categoria: "Tecnología",
    precio: "59,90",
    precioAnterior: "",
    descuento: "",
    descripcion: "Reloj inteligente con monitor de ritmo cardíaco, GPS y resistencia al agua.",
    valoracion: 4,
    numValoraciones: 876,
    tienda: "AliExpress",
    enlace: "https://aliexpress.com/producto-smartwatch-active",
    destacado: true,
    oferta: false
  },
  {
    id: 3,
    nombre: "Altavoz Bluetooth Portátil",
    imagen: "productos/altavoz.jpg",
    categoria: "Tecnología",
    precio: "24,99",
    precioAnterior: "34,99",
    descuento: "29%",
    descripcion: "Sonido envolvente 360°, resistente al agua IPX7, ideal para exteriores.",
    valoracion: 4,
    numValoraciones: 1523,
    tienda: "Amazon",
    enlace: "https://amazon.com/producto-altavoz-bluetooth",
    destacado: false,
    oferta: true
  },
  {
    id: 4,
    nombre: "Silla Gaming ErgoMax",
    imagen: "productos/silla-gaming.jpg",
    categoria: "Gaming",
    precio: "149,00",
    precioAnterior: "199,00",
    descuento: "25%",
    descripcion: "Silla ergonómica con soporte lumbar ajustable y reposabrazos 4D.",
    valoracion: 5,
    numValoraciones: 634,
    tienda: "Tienda oficial",
    enlace: "https://tiendaoficial.com/silla-gaming-ergomax",
    destacado: true,
    oferta: true
  },
  {
    id: 5,
    nombre: "Teclado Mecánico RGB",
    imagen: "productos/teclado-mecanico.jpg",
    categoria: "Gaming",
    precio: "45,50",
    precioAnterior: "",
    descuento: "",
    descripcion: "Switches azules, retroiluminación RGB personalizable y estructura de aluminio.",
    valoracion: 4,
    numValoraciones: 1042,
    tienda: "Amazon",
    enlace: "https://amazon.com/producto-teclado-mecanico-rgb",
    destacado: false,
    oferta: false
  },
  {
    id: 6,
    nombre: "Robot Aspirador Inteligente",
    imagen: "productos/robot-aspirador.jpg",
    categoria: "Hogar",
    precio: "179,00",
    precioAnterior: "229,00",
    descuento: "22%",
    descripcion: "Navegación láser, control por app y vaciado automático de depósito.",
    valoracion: 5,
    numValoraciones: 2987,
    tienda: "Amazon",
    enlace: "https://amazon.com/producto-robot-aspirador",
    destacado: true,
    oferta: true
  },
  {
    id: 7,
    nombre: "Mochila Urbana Antirrobo",
    imagen: "productos/mochila-urbana.jpg",
    categoria: "Moda",
    precio: "32,90",
    precioAnterior: "",
    descuento: "",
    descripcion: "Compartimento para portátil, puerto USB integrado y tejido impermeable.",
    valoracion: 4,
    numValoraciones: 512,
    tienda: "AliExpress",
    enlace: "https://aliexpress.com/producto-mochila-urbana",
    destacado: false,
    oferta: false
  },
  {
    id: 8,
    nombre: "Zapatillas Running FlexFoam",
    imagen: "productos/zapatillas-running.jpg",
    categoria: "Moda",
    precio: "54,99",
    precioAnterior: "69,99",
    descuento: "21%",
    descripcion: "Amortiguación de alta densidad y malla transpirable para largas distancias.",
    valoracion: 4,
    numValoraciones: 1789,
    tienda: "Amazon",
    enlace: "https://amazon.com/producto-zapatillas-running",
    destacado: false,
    oferta: true
  },
  {
    id: 9,
    nombre: "Reloj Clásico Acero",
    imagen: "productos/reloj-clasico.jpg",
    categoria: "Accesorios",
    precio: "42,00",
    precioAnterior: "",
    descuento: "",
    descripcion: "Correa de acero inoxidable, cristal de zafiro y resistencia al agua 5ATM.",
    valoracion: 5,
    numValoraciones: 398,
    tienda: "Tienda oficial",
    enlace: "https://tiendaoficial.com/reloj-clasico-acero",
    destacado: false,
    oferta: false
  },
  {
    id: 10,
    nombre: "Cámara de Acción 4K",
    imagen: "productos/camara-deportiva.jpg",
    categoria: "Tecnología",
    precio: "68,00",
    precioAnterior: "89,00",
    descuento: "24%",
    descripcion: "Grabación 4K, estabilización electrónica y kit de accesorios sumergibles.",
    valoracion: 4,
    numValoraciones: 967,
    tienda: "AliExpress",
    enlace: "https://aliexpress.com/producto-camara-accion-4k",
    destacado: true,
    oferta: true
  },
  {
    id: 11,
    nombre: "Power Bank 20000mAh",
    imagen: "productos/power-bank.jpg",
    categoria: "Accesorios",
    precio: "19,99",
    precioAnterior: "",
    descuento: "",
    descripcion: "Carga rápida 22.5W con doble puerto USB-C y pantalla de nivel de batería.",
    valoracion: 4,
    numValoraciones: 2310,
    tienda: "Amazon",
    enlace: "https://amazon.com/producto-power-bank-20000",
    destacado: false,
    oferta: false
  },
  {
    id: 12,
    nombre: "Lámpara LED de Escritorio",
    imagen: "productos/lampara-led.jpg",
    categoria: "Hogar",
    precio: "17,50",
    precioAnterior: "23,90",
    descuento: "27%",
    descripcion: "Luz regulable en 5 tonalidades, carga inalámbrica en la base y USB.",
    valoracion: 5,
    numValoraciones: 754,
    tienda: "Amazon",
    enlace: "https://amazon.com/producto-lampara-led-escritorio",
    destacado: false,
    oferta: true
  }

];
