/* ==========================================================================
   CONFIG.JS
   Configuración general de la tienda.
   Cambia estos valores para personalizar la web sin tocar index.html.
   ========================================================================== */

const configuracion = {

  // Identidad de la tienda
  nombre: "Selecta",
  eslogan: "Tienda seleccionada",
  logo: "iconos/logo.png",
  heroImagen: "iconos/hero.jpg",

  // Textos de la portada
  heroTitulo: "Encuentra los mejores productos al mejor precio",
  heroSubtitulo:
    "Comparamos y seleccionamos productos de confianza en Amazon, AliExpress y tiendas oficiales. Tú eliges, nosotros filtramos el ruido.",
  heroBotonTexto: "Ver productos",

  // Moneda usada al mostrar precios
  moneda: "€",

  // Datos de contacto / confianza
  descripcion:
    "Selecta es un catálogo curado de productos recomendados. No vendemos directamente: te llevamos a la tienda oficial de cada producto para que compres con total seguridad.",
  emailContacto: "hola@selecta-tienda.com",

  // Redes sociales (deja vacío "" para ocultar un icono)
  redesSociales: {
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
    youtube: "https://youtube.com/",
    pinterest: "https://pinterest.com/"
  },

  // Categorías disponibles para el filtro (deben coincidir con productos.js)
  categorias: ["Tecnología", "Hogar", "Moda", "Gaming", "Accesorios"],

  // Aviso legal breve sobre afiliación (se muestra en el footer)
  avisoAfiliados:
    "Selecta participa en programas de afiliados. Podemos recibir una comisión por las compras realizadas a través de nuestros enlaces, sin coste adicional para ti."
};
