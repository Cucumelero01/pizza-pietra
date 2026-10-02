/* =========================================================================
   PIZZA PIETRA — ARCHIVO DE DATOS (PRECIOS, PRODUCTOS Y TEXTOS)
   =========================================================================

   ¡IMPORTANTE PARA EL DUEÑO DEL NEGOCIO!

   Este es el ÚNICO archivo donde tenés que escribir o cambiar:
     - Precios
     - Nombres de productos
     - Descripciones
     - Ingredientes de cada sabor de pizza
     - Rutas de imágenes
     - Datos de contacto (WhatsApp, Instagram, email)

   NO hace falta tocar el HTML, el CSS ni el otro archivo de JavaScript.
   Si seguís la misma forma (llaves { }, comas, comillas "...") todo va a
   seguir funcionando solo.

   Instrucciones detalladas paso a paso en el archivo README.md.
   ========================================================================= */

const menuData = {

  /* -----------------------------------------------------------------------
     DATOS DE CONTACTO
     Se usan en toda la página (botones de WhatsApp, sección de contacto, etc)
     ----------------------------------------------------------------------- */
  contacto: {
    nombreNegocio: "Pizza Pietra",
    // Número de WhatsApp en formato internacional, SIN espacios ni signos.
    // 54 = Argentina, 9 = celular, 351 = código de Córdoba, luego el número.
    whatsappInternacional: "5493518355245",
    whatsappVisible: "351 835-5245",
    instagramUrl: "https://www.instagram.com/pizzapietracba/",
    instagramVisible: "@pizzapietracba",
    email: "pizzaspietra@gmail.com",
    zonaCobertura: "Córdoba Capital — Retiros y envíos en zona norte",
    ubicacionTexto: "Córdoba, Argentina"
  },

  /* -----------------------------------------------------------------------
     TEXTOS GENERALES DE LA PÁGINA (hero, sobre nosotros)
     ----------------------------------------------------------------------- */
  textos: {
    heroTitulo: "Pizza Pietra",
    heroSubtitulo: "Pizza napolitana a la piedra, artesanal desde Córdoba",
    heroDestacado: "48 horas de fermentación",
    heroDescripcion: "Somos dos hermanos apasionados por la pizza napolitana. Elaboramos cada masa de forma artesanal, con 48 horas de fermentación en frío, y la cocinamos a la piedra para lograr ese sabor y esa textura que solo se consiguen con tiempo y dedicación. Fusionamos la cocina italiana y la argentina.",
    sobreNosotrosTitulo: "Dos hermanos, una pasión",
    sobreNosotrosTexto: "Pizza Pietra nació de las ganas de compartir la verdadera pizza napolitana con nuestra ciudad. Somos dos hermanos que llevamos adelante cada paso del proceso: amasamos, fermentamos 48 horas, estiramos y horneamos a la piedra, pizza por pizza. Nos encargamos de eventos sociales, empresariales y de la atención de cada cliente en persona, porque creemos que la calidad y la cercanía van de la mano.",
    sobreNosotrosPuntos: [
      "Elaboración 100% artesanal, de principio a fin",
      "Masa con 48 horas de fermentación en frío",
      "Cocción a la piedra, al estilo napolitano tradicional",
      "Atención personalizada en cada pedido y evento",
      "Servicio de catering para eventos sociales y empresariales"
    ]
  },

  /* -----------------------------------------------------------------------
     TAKE AWAY / AUTOSERVICIO
     Cada producto tiene: nombre, descripción, imagen y una lista de
     "opciones" (cada opción es un precio distinto: unidad, combo, promo, etc)
     ----------------------------------------------------------------------- */
  takeaway: [
    {
      id: "pizzas-freezadas",
      nombre: "Pizzas Freezadas",
      descripcion: "Nuestra pizza napolitana a la piedra, congelada para disfrutar en casa cuando quieras. Solo tenés que llevarla al horno. Consultá por las variedades disponibles de la semana.",
      imagen: "img/productos/pizza-freezada.png",
      opciones: [
        { etiqueta: "Unidad", precio: 14000 },
        { etiqueta: "Combo x4", precio: 50000 }
      ]
    },
    {
      id: "box-frios",
      nombre: "Box Sándwiches de Focaccia Fríos",
      descripcion: "Box de sándwiches de focaccia, opciones frías. Rinde aproximadamente 9 personas. Pican 18. Ideal para juntadas y oficinas.",
      imagen: "img/productos/box-frio.png",
      opciones: [
        { etiqueta: "1 Box", precio: 85000 },
        { etiqueta: "2 Box", precio: 160000 }
      ]
    },
    {
      id: "box-calientes",
      nombre: "Box Sándwiches de Focaccia Calientes",
      descripcion: "Box de sándwiches de focaccia. Bondiola desmenuzada, coleslaw y mayonesa casera. Rinde aproximadamente 9 personas. Pican 18.",
      imagen: "img/productos/box-caliente.png",
      opciones: [
        { etiqueta: "1 Box", precio: 90000 },
        { etiqueta: "2 Box", precio: 170000 }
      ]
    }
  ],

  /* -----------------------------------------------------------------------
     TORTAS
     Todas rinden aproximadamente 20 porciones.
     Para agregar una torta nueva, copiá una línea y cambiá nombre y precio.
     ----------------------------------------------------------------------- */
  tortas: {
    rinde: "20 porciones aproximadamente",
    imagen: "img/productos/torta-generica.svg",
    lista: [
      { nombre: "Coco con dulce de leche", precio: 36000 },
      { nombre: "Crumble de manzana", precio: 36000 },
      { nombre: "Pastafrola", precio: 36000 },
      { nombre: "Cheesecake", precio: 40000 },
      { nombre: "Carrot cake", precio: 40000 },
      { nombre: "Chocotorta", precio: 40000 },
      { nombre: "Marquise", precio: 40000 },
      { nombre: "Cabsha", precio: 40000 },
      { nombre: "Oreo", precio: 40000 },
      { nombre: "Cumpleaños", precio: 40000 }
    ]
  },

  /* -----------------------------------------------------------------------
     SABORES DE PIZZA (para el catering "libre" y el menú de sabores)
     vegetariana: true muestra la etiqueta "V" (vegetariana).
     ingredientes: lista de ingredientes que se muestra al tocar/hacer clic
     en el sabor. Para modificarlos, agregá o quitá textos entre comillas
     dentro de los corchetes [ ], separados por comas.
     ----------------------------------------------------------------------- */
  pizzaSabores: [
    { nombre: "Americana", vegetariana: false, ingredientes: ["Salsa de tomate", "Muzzarella", "Jamón", "Morrones"] },
    { nombre: "Berenjena", vegetariana: true, ingredientes: ["Salsa de tomate", "Muzzarella", "Berenjenas grilladas", "Albahaca fresca"] },
    { nombre: "Bianca", vegetariana: true, ingredientes: ["Fior di latte", "Aceite de oliva", "Romero", "Sal en escamas"] },
    { nombre: "Blue Bacon", vegetariana: false, ingredientes: ["Salsa de tomate", "Muzzarella", "Bacon crocante", "Queso azul"] },
    { nombre: "Calabresa", vegetariana: false, ingredientes: ["Salsa de tomate", "Muzzarella", "Longaniza calabresa", "Aceitunas negras"] },
    { nombre: "Cuatro Quesos", vegetariana: true, ingredientes: ["Salsa de tomate", "Muzzarella", "Provolone", "Queso azul", "Parmesano"] },
    { nombre: "Cuori di Palma", vegetariana: true, ingredientes: ["Salsa de tomate", "Muzzarella", "Palmitos", "Aceitunas verdes"] },
    { nombre: "Especial", vegetariana: false, ingredientes: ["Salsa de tomate", "Muzzarella", "Jamón", "Morrones", "Aceitunas"] },
    { nombre: "Especial con huevo", vegetariana: false, ingredientes: ["Salsa de tomate", "Muzzarella", "Jamón", "Morrones", "Aceitunas", "Huevo"] },
    { nombre: "Espinaca", vegetariana: true, ingredientes: ["Salsa de tomate", "Muzzarella", "Espinaca salteada", "Ajo", "Aceite de oliva"] },
    { nombre: "Fugazeta", vegetariana: true, ingredientes: ["Muzzarella", "Cebolla caramelizada", "Orégano"] },
    { nombre: "Fugazeta Pietra", vegetariana: true, ingredientes: ["Muzzarella", "Cebolla caramelizada", "Provolone", "Orégano"] },
    { nombre: "Funghi Bacon", vegetariana: false, ingredientes: ["Salsa de tomate", "Muzzarella", "Champiñones", "Bacon"] },
    { nombre: "Margarita", vegetariana: true, ingredientes: ["Salsa de tomate", "Fior di latte", "Albahaca fresca", "Aceite de oliva"] },
    { nombre: "Marinara", vegetariana: true, ingredientes: ["Salsa de tomate", "Ajo", "Orégano", "Aceite de oliva"] },
    { nombre: "Mozzarella", vegetariana: true, ingredientes: ["Salsa de tomate", "Muzzarella", "Orégano"] },
    { nombre: "Napolitana", vegetariana: true, ingredientes: ["Salsa de tomate", "Muzzarella", "Rodajas de tomate", "Ajo", "Orégano"] },
    { nombre: "Pesto Pomodoro", vegetariana: true, ingredientes: ["Fior di latte", "Salsa pesto", "Tomates cherry", "Albahaca fresca", "Parmesano"] },
    { nombre: "Pimientos asados", vegetariana: true, ingredientes: ["Salsa de tomate", "Muzzarella", "Pimientos asados", "Orégano"] },
    { nombre: "Provenzal", vegetariana: true, ingredientes: ["Muzzarella", "Ajo y perejil", "Aceite de oliva"] },
    { nombre: "Provolone", vegetariana: true, ingredientes: ["Salsa de tomate", "Provolone", "Orégano", "Aceite de oliva"] },
    { nombre: "Rúcula", vegetariana: false, ingredientes: ["Salsa de tomate", "Muzzarella", "Jamón crudo", "Rúcula fresca", "Parmesano"] }
  ],

  /* -----------------------------------------------------------------------
     CATERING PARA EVENTOS
     ----------------------------------------------------------------------- */
  catering: {
    minimoPersonas: 20,
    introduccion: "Llevamos la experiencia de la pizza napolitana a la piedra a tu evento social o empresarial. Cocinamos en el momento, con nuestro propio horno, para que tus invitados disfruten la pizza recién salida. Es comida libre.",
    notaDescuento: "A partir de 50 personas, el precio por persona es un poco más bajo.",
    grupos: [
      {
        rango: "De 20 a 35 personas",
        detalle: "Se elige 1 opción de Entrada y 1 opción de Principal.",
        entradasPermitidas: 1,
        principalesPermitidos: 1
      },
      {
        rango: "35 personas o más",
        detalle: "Se eligen 1 ó 2 opciones de Entrada y 1 ó 2 opciones de Principal.",
        entradasPermitidas: 2,
        principalesPermitidos: 2
      }
    ],
    entradas: [
      {
        nombre: "Empanadas criollas",
        descripcion: "Empanadas criollas artesanales, horneadas.",
        soloPremium: false
      },
      {
        nombre: "Sándwiches de focaccia",
        descripcion: "A elección: jamón cocido y queso, o veggies.",
        soloPremium: false
      },
      {
        nombre: "Brusquetas",
        descripcion: "Brusquetas de nuestra focaccia artesanal.",
        soloPremium: true
      }
    ],
    principales: [
      {
        nombre: "Pizza libre estilo napoletano a la piedra",
        descripcion: "Hasta 5 variedades a elección de nuestra carta de sabores.",
        soloPremium: false
      },
      {
        nombre: "Sándwiches de focaccia libre",
        descripcion: "A elección: bondiola o fríos, servicio libre.",
        soloPremium: false
      },
      {
        nombre: "Empanadas criollas",
        descripcion: "Empanadas criollas artesanales como plato principal.",
        soloPremium: false
      }
    ],
    notaPremium: "Las Brusquetas están disponibles únicamente contratando el Servicio Premium. Consultanos por WhatsApp para más información."
  },

  /* -----------------------------------------------------------------------
     REQUISITOS Y QUÉ INCLUYE EL SERVICIO DE CATERING
     ----------------------------------------------------------------------- */
  requisitos: [
    {
      icono: "👥",
      titulo: "Mínimo de personas",
      texto: "Realizamos eventos a partir de un mínimo de 20 personas."
    },
    {
      icono: "💵",
      titulo: "Seña",
      texto: "Se solicita una seña del 50% para confirmar el evento."
    },
    {
      icono: "📅",
      titulo: "Confirmación de comensales",
      texto: "La cantidad final de personas se confirma con un mínimo de 3 días de anticipación y no se modifica luego de esa fecha."
    },
    {
      icono: "🔥",
      titulo: "Infraestructura",
      texto: "Llevamos nuestro propio horno a la piedra y mesa de horno para cocinar en el lugar del evento."
    },
    {
      icono: "🍽️",
      titulo: "Vajilla incluida",
      texto: "Incluimos platos de acero inoxidable y servilletas para la comida principal."
    },
    {
      icono: "🙋",
      titulo: "Personal de mozos",
      texto: "El servicio no incluye mozos: la comida se distribuye en mesas o sectores a medida que va saliendo. El servicio de mozos personalizado tiene un costo extra."
    },
    {
      icono: "⏱️",
      titulo: "Duración del servicio",
      texto: "El servicio dura aproximadamente entre 1 hora y media y 2 horas."
    },
    {
      icono: "🧾",
      titulo: "Presupuesto",
      texto: "El monto total del evento se calcula de acuerdo al precio actualizado al día del evento."
    }
  ],

  /* -----------------------------------------------------------------------
     GALERÍA
     Agregá o quitá fotos cambiando esta lista. "imagen" es la ruta del
     archivo y "alt" es el texto alternativo (para SEO y accesibilidad).
     ----------------------------------------------------------------------- */
  galeria: [
    { imagen: "img/galeria/galeria-1.png", alt: "" },
    { imagen: "img/galeria/galeria-2.png", alt: "" },
    { imagen: "img/galeria/galeria-3.png", alt: "" },
    { imagen: "img/galeria/galeria-4.png", alt: "" },
    { imagen: "img/galeria/galeria-5.png", alt: "" },
    { imagen: "img/galeria/galeria-6.png", alt: "" }
  ]
};
