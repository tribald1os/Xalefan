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
    id: 149,
    nombre: "Rolex Oyter Perpetual",
    imagen: "productos/rolex.jpeg",
    categoria: "Accesorios",
    precio: "14,03",
    precioAnterior: "19.000",
    descuento: "",
    descripcion: "Reloj Rolex Oyster Perpetual original en acero Oystersteel. Movimiento automático de manufactura con certificación de Cronómetro Superlativo. El modelo clásico, minimalista y elegante de Rolex, sin fecha y con el icónico brazalete Oyster.",
    valoracion: 5,
    numValoraciones: 400,
    tienda: "USFANS",
    enlace: "https://www.usfans.com/product/3/7522455876/?ref=CKAYBU",
    destacado: true,
    oferta: true
  },

];
