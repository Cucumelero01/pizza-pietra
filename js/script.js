/* =========================================================================
   PIZZA PIETRA — LÓGICA DE LA PÁGINA
   Este archivo lee los datos de "menuData" (definido en data/menu.js) y
   genera automáticamente todo el contenido dinámico: productos, tortas,
   catering, requisitos, galería y los enlaces de WhatsApp.

   No hace falta tocar este archivo para cambiar precios o productos:
   todo eso se edita en data/menu.js.
   ========================================================================= */

(function () {
  "use strict";

  /* -----------------------------------------------------------------------
     UTILIDADES
     ----------------------------------------------------------------------- */

  // Formatea un número como precio en pesos argentinos: 12000 -> "$12.000"
  function formatearPrecio(numero) {
    return "$" + numero.toLocaleString("es-AR");
  }

  // Arma un link de WhatsApp con mensaje predeterminado ya escrito.
  function linkWhatsApp(mensaje) {
    const numero = menuData.contacto.whatsappInternacional;
    return "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
  }

  // Escapa texto que se inserta en HTML para evitar romper el markup.
  function escapeHTML(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
  }

  /* -----------------------------------------------------------------------
     TEXTOS GENERALES (hero, sobre nosotros, contacto)
     ----------------------------------------------------------------------- */
  function pintarTextosGenerales() {
    const t = menuData.textos;
    const c = menuData.contacto;

    document.getElementById("hero-titulo").textContent = t.heroTitulo;
    document.getElementById("hero-subtitulo").textContent = t.heroSubtitulo;
    document.getElementById("hero-badge").querySelector("span:last-child").textContent = t.heroDestacado;
    document.getElementById("hero-descripcion").textContent = t.heroDescripcion;
    document.getElementById("hero-instagram").href = c.instagramUrl;

    document.getElementById("nosotros-titulo").textContent = t.sobreNosotrosTitulo;
    document.getElementById("nosotros-descripcion").textContent = t.sobreNosotrosTexto;

    const puntosEl = document.getElementById("nosotros-puntos");
    puntosEl.innerHTML = t.sobreNosotrosPuntos
      .map(function (punto) { return "<li>" + escapeHTML(punto) + "</li>"; })
      .join("");

    document.getElementById("contacto-zona").textContent = c.zonaCobertura;
    document.getElementById("contacto-whatsapp-texto").textContent = c.whatsappVisible;
    document.getElementById("contacto-instagram-texto").textContent = c.instagramVisible;
    document.getElementById("contacto-email-texto").textContent = c.email;

    const mensajeGeneral = "Hola " + c.nombreNegocio + "! Quería hacer una consulta.";
    const linkGeneral = linkWhatsApp(mensajeGeneral);

    document.getElementById("contacto-whatsapp").href = linkGeneral;
    document.getElementById("contacto-instagram").href = c.instagramUrl;
    document.getElementById("contacto-email").href = "mailto:" + c.email;
    document.getElementById("cta-whatsapp-grande").href = linkGeneral;
    document.getElementById("whatsapp-flotante").href = linkGeneral;
    document.getElementById("footer-instagram").href = c.instagramUrl;

    // Botón único de pedidos de Take Away (reemplaza los botones por producto)
    const mensajePedido = "Hola " + c.nombreNegocio + "! Quería hacer un pedido.";
    document.getElementById("takeaway-cta").href = linkWhatsApp(mensajePedido);

    // Botón único de consulta de Catering (reemplaza los botones por tarjeta)
    const mensajeCatering = "Hola " + c.nombreNegocio + "! Quería consultar por un catering para mi evento.";
    document.getElementById("catering-whatsapp-cta").href = linkWhatsApp(mensajeCatering);

    document.getElementById("footer-year").textContent = new Date().getFullYear();
  }

  /* -----------------------------------------------------------------------
     TAKE AWAY — TARJETAS DE PRODUCTOS
     Las tarjetas son solo informativas (sin botón individual): el pedido
     se hace desde el único botón de WhatsApp de la sección.
     ----------------------------------------------------------------------- */
  function pintarTakeAway() {
    const grid = document.getElementById("takeaway-grid");

    grid.innerHTML = menuData.takeaway.map(function (producto) {
      const filasPrecio = producto.opciones.map(function (opcion) {
        return (
          '<div class="product-precio-linea">' +
            '<span class="etiqueta">' + escapeHTML(opcion.etiqueta) + '</span>' +
            '<span class="precio">' + formatearPrecio(opcion.precio) + '</span>' +
          '</div>'
        );
      }).join("");

      return (
        '<article class="product-card">' +
          '<img class="product-card-img" src="' + producto.imagen + '" alt="' + escapeHTML(producto.nombre) + '" loading="lazy">' +
          '<div class="product-card-body">' +
            '<h3>' + escapeHTML(producto.nombre) + '</h3>' +
            '<p class="product-card-desc">' + escapeHTML(producto.descripcion) + '</p>' +
            '<div class="product-precios">' + filasPrecio + '</div>' +
          '</div>' +
        '</article>'
      );
    }).join("");
  }

  /* -----------------------------------------------------------------------
     TORTAS
     Solo informativas, igual que las tarjetas de Take Away.
     ----------------------------------------------------------------------- */
  function pintarTortas() {
    const grid = document.getElementById("tortas-grid");
    const imagen = menuData.tortas.imagen;

    grid.innerHTML = menuData.tortas.lista.map(function (torta) {
      return (
        '<div class="torta-card">' +
          '<img src="' + imagen + '" alt="Torta ' + escapeHTML(torta.nombre) + '" loading="lazy">' +
          '<div class="torta-card-info">' +
            '<h4>' + escapeHTML(torta.nombre) + '</h4>' +
            '<span class="precio">' + formatearPrecio(torta.precio) + '</span>' +
          '</div>' +
        '</div>'
      );
    }).join("");
  }

  /* -----------------------------------------------------------------------
     CATERING
     ----------------------------------------------------------------------- */
  function pintarCatering() {
    const cat = menuData.catering;

    document.getElementById("catering-intro").textContent = cat.introduccion;

    // Grupos (cantidad de personas)
    const gruposEl = document.getElementById("catering-grupos");
    gruposEl.innerHTML = cat.grupos.map(function (grupo) {
      return (
        '<div class="catering-grupo-card">' +
          '<h3>' + escapeHTML(grupo.rango) + '</h3>' +
          '<p>' + escapeHTML(grupo.detalle) + '</p>' +
        '</div>'
      );
    }).join("");

    // Entradas y principales comparten la misma estructura de tarjeta.
    // Son solo informativas: la consulta se hace desde el único botón de
    // WhatsApp al final de la sección de Catering.
    function pintarListaOpciones(contenedorId, lista) {
      const contenedor = document.getElementById(contenedorId);
      contenedor.innerHTML = lista.map(function (item) {
        const badgePremium = item.soloPremium
          ? '<span class="badge-premium">Solo Premium</span>'
          : "";
        return (
          '<div class="catering-item">' +
            '<h4>' + escapeHTML(item.nombre) + badgePremium + '</h4>' +
            '<p>' + escapeHTML(item.descripcion) + '</p>' +
          '</div>'
        );
      }).join("");
    }

    pintarListaOpciones("catering-entradas", cat.entradas);
    pintarListaOpciones("catering-principales", cat.principales);

    document.getElementById("catering-nota-premium").textContent = cat.notaPremium;
  }

  /* -----------------------------------------------------------------------
     SABORES DE PIZZA (listado desplegable dentro de Catering)
     Cada sabor es un botón: al tocarlo/cliquearlo se abre un modal con
     sus ingredientes (ver menuData.pizzaSabores en data/menu.js).
     ----------------------------------------------------------------------- */
  function pintarSabores() {
    const grid = document.getElementById("sabores-grid");
    grid.innerHTML = menuData.pizzaSabores.map(function (sabor, indice) {
      const badge = sabor.vegetariana ? '<span class="badge-veggie">V</span>' : "";
      return (
        '<button type="button" class="sabor-chip" data-sabor-indice="' + indice + '">' +
          escapeHTML(sabor.nombre) + badge +
        '</button>'
      );
    }).join("");

    grid.querySelectorAll(".sabor-chip").forEach(function (boton) {
      boton.addEventListener("click", function () {
        const sabor = menuData.pizzaSabores[Number(boton.dataset.saborIndice)];
        abrirModalIngredientes(sabor);
      });
    });
  }

  /* -----------------------------------------------------------------------
     MODAL DE INGREDIENTES
     ----------------------------------------------------------------------- */
  function activarModalIngredientes() {
    const overlay = document.getElementById("modal-ingredientes");
    const botonCerrar = document.getElementById("modal-cerrar");

    botonCerrar.addEventListener("click", cerrarModalIngredientes);

    // Cierra el modal al tocar fuera de la tarjeta (el fondo oscuro)
    overlay.addEventListener("click", function (evento) {
      if (evento.target === overlay) cerrarModalIngredientes();
    });

    // Cierra el modal con la tecla Escape
    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape" && !overlay.hidden) cerrarModalIngredientes();
    });
  }

  function abrirModalIngredientes(sabor) {
    const overlay = document.getElementById("modal-ingredientes");
    const badge = document.getElementById("modal-ingredientes-badge");

    document.getElementById("modal-ingredientes-titulo").textContent = sabor.nombre;
    document.getElementById("modal-ingredientes-lista").textContent = sabor.ingredientes.join(" · ");
    badge.hidden = !sabor.vegetariana;

    overlay.hidden = false;
    document.body.classList.add("modal-abierto");
  }

  function cerrarModalIngredientes() {
    document.getElementById("modal-ingredientes").hidden = true;
    document.body.classList.remove("modal-abierto");
  }

  /* -----------------------------------------------------------------------
     REQUISITOS
     ----------------------------------------------------------------------- */
  function pintarRequisitos() {
    const grid = document.getElementById("requisitos-grid");
    grid.innerHTML = menuData.requisitos.map(function (req) {
      return (
        '<div class="requisito-card">' +
          '<span class="requisito-icono" aria-hidden="true">' + req.icono + '</span>' +
          '<h3>' + escapeHTML(req.titulo) + '</h3>' +
          '<p>' + escapeHTML(req.texto) + '</p>' +
        '</div>'
      );
    }).join("");
  }

  /* -----------------------------------------------------------------------
     GALERÍA
     ----------------------------------------------------------------------- */
  function pintarGaleria() {
    const grid = document.getElementById("galeria-grid");
    grid.innerHTML = menuData.galeria.map(function (foto) {
      return '<img src="' + foto.imagen + '" alt="' + escapeHTML(foto.alt) + '" loading="lazy">';
    }).join("");
  }

  /* -----------------------------------------------------------------------
     NAVEGACIÓN MÓVIL (menú hamburguesa)
     ----------------------------------------------------------------------- */
  function activarMenuMovil() {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("main-nav");

    hamburger.addEventListener("click", function () {
      const abierto = nav.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", abierto ? "true" : "false");
      hamburger.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    });

    // Cierra el menú al tocar un link (útil en celulares)
    nav.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Abrir menú");
      });
    });
  }

  /* -----------------------------------------------------------------------
     INICIALIZACIÓN
     ----------------------------------------------------------------------- */
  function init() {
    pintarTextosGenerales();
    pintarTakeAway();
    pintarTortas();
    pintarCatering();
    pintarSabores();
    activarModalIngredientes();
    pintarRequisitos();
    pintarGaleria();
    activarMenuMovil();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
