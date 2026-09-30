// ==========================================================================
// INICIALIZACIÓN Y DATOS DEL PORTAFOLIO
// ==========================================================================

// Base de datos local de proyectos para modal inmersivo
const projectsData = {
  1: {
    title: "GARDA UGARTE",
    category: "Gerenciamiento & Dirección de Obra",
    images: [
      "./ugarte_1.jpg",
      "./ugarte_2.jpg",
      "./ugarte_3.jpg",
      "./ugarte_4.jpg",
      "./ugarte_5.jpg",
      "./ugarte_6.jpg"
    ],
    location: "Núñez, CABA",
    area: "6.000 m²",
    year: "2024",
    architect: "BMA ARQS",
    description: "Dirección ejecutiva de obra y gerenciamiento integral para el edificio residencial Garda Ugarte ubicado en el barrio de Núñez, CABA. El proyecto cuenta con exclusivas unidades residenciales, cocheras en subsuelo y un completo sector de amenities que incluye piscina con solárium de deck, gimnasio vidriado, SUM y áreas parquizadas exteriores."
  },
  2: {
    title: "QIUB",
    category: "Dirección de Obra & Gerenciamiento",
    images: [
      "./qiub_1.jpg",
      "./qiub_2.jpg",
      "./qiub_3.jpg",
      "./qiub_4.jpg",
      "./qiub_5.jpg"
    ],
    location: "Palermo, CABA",
    area: "38.000 m²",
    year: "2025",
    architect: "BMA ARQS",
    description: "Dirección de obra ejecutiva y gerenciamiento integral para el emblemático complejo de usos mixtos QIUB, ubicado en el corazón de Palermo Hollywood (Av. Juan B. Justo y Honduras). El desarrollo de gran escala integra una torre de oficinas corporativas de vanguardia, residencias exclusivas, basamento comercial, salas de cine, patio gastronómico y subsuelos de cocheras."
  },
  3: {
    title: "MAS CABRERA",
    category: "Gerenciamiento & Dirección de Obra",
    images: [
      "./cabrera_1.jpg",
      "./cabrera_2.jpg",
      "./cabrera_3.jpg",
      "./cabrera_4.jpg",
      "./cabrera_5.jpg"
    ],
    location: "Palermo, CABA",
    area: "1.500 m²",
    year: "2024",
    architect: "ESCARRA PRADIER ARQS",
    description: "Gerenciamiento integral y dirección ejecutiva de obra para el edificio residencial Más Cabrera en el barrio de Palermo, CABA. El desarrollo comprende unidades residenciales de diseño contemporáneo, supervisión técnica en terreno, control de presupuesto y plazos de ejecución, coordinación de contratistas y supervisión de terminaciones arquitectónicas e instalaciones."
  },
  4: {
    title: "TANDEM JUJUY",
    category: "Gerenciamiento de Proyecto",
    images: [
      "./jujuy_1.jpg",
      "./jujuy_2.jpg",
      "./jujuy_3.jpg",
      "./jujuy_4.jpg"
    ],
    location: "San Salvador de Jujuy",
    area: "4.000 m²",
    year: "2024",
    architect: "LM / BRAND ARQS",
    description: "Gerenciamiento integral de proyecto para el exclusivo complejo hotelero boutique de Tándem Hoteles en San Salvador de Jujuy. La intervención comprendió la planificación técnica, análisis de implantación y coordinación general para una arquitectura bioclimática escalonada sobre ladera natural, con muros de piedra pirca regional, cubiertas verdes, plaza de acceso y suites aterrazadas con vistas panorámicas."
  },
  5: {
    title: "GARDA OLLEROS",
    category: "Gerenciamiento & Dirección de Obra",
    images: [
      "./garda_olleros_1.jpg",
      "./garda_olleros_2.jpg",
      "./garda_olleros_3.jpg"
    ],
    location: "Colegiales, CABA",
    area: "13.000 m²",
    year: "2024",
    architect: "BAUDIZZONE LESTARD",
    description: "Gerenciamiento integral y dirección ejecutiva de obra para el importante conjunto residencial Garda Olleros en Colegiales, CABA. El proyecto comprende amplias unidades residenciales de gran categoría, diseño arquitectónico de vanguardia, parque central ajardinado, piscinas, gimnasio, salón de usos múltiples y cocheras en subsuelo."
  },
  6: {
    title: "TANDEM TRAFUL",
    category: "Gerenciamiento de Proyecto",
    images: [
      "./traful_1.jpg",
      "./traful_2.jpg",
      "./traful_3.jpg",
      "./traful_4.jpg",
      "./traful_5.jpg"
    ],
    location: "Villa Traful, Neuquén",
    area: "2.500 m²",
    year: "2022",
    architect: "RUL ARQS",
    description: "Gerenciamiento integral de proyecto para el complejo hotelero boutique y domos geodésicos de Tándem Hoteles en Villa Traful, Patagonia Argentina. La intervención abarcó la planificación estratégica, supervisión técnica y coordinación general para el edificio principal integrado al bosque nativo, recepción con revestimientos en madera, suites ejecutivas y domos sobre plataformas elevadas con vistas a la cordillera."
  },
  7: {
    title: "DARWIN TORTUGAS",
    category: "Gerenciamiento & Dirección de Obra",
    images: [
      "./darwin_pilar_1.jpg",
      "./darwin_pilar_2.jpg",
      "./darwin_pilar_3.jpg",
      "./darwin_pilar_4.jpg"
    ],
    location: "Pilar, Prov. Bs. As.",
    area: "6.500 m²",
    year: "2019",
    architect: "MO / SHULZ ARQS",
    description: "Gerenciamiento integral y dirección ejecutiva de obra para el centro de eventos y convenciones Darwin Tortugas en Pilar. La obra comprendió la construcción del salón principal vidriado de gran altura, recepción integrada con terraza panorámica, infraestructura de servicios gastronómicos, climatización central, paisajismo perimetral y coordinación integral de contratistas."
  },
  8: {
    title: "LA CALERA RADA TILLY",
    category: "Gerenciamiento de Proyecto",
    images: [
      "./radatilly_1.jpg",
      "./radatilly_2.jpg",
      "./radatilly_3.jpg",
      "./radatilly_4.jpg",
      "./radatilly_5.jpg"
    ],
    location: "Rada Tilly, Chubut",
    area: "5.500 m²",
    year: "2021",
    architect: "LM / BRAND ARQS",
    description: "Gerenciamiento integral de proyecto para el exclusivo hotel boutique La Calera en Rada Tilly, emplazado sobre la ladera natural frente al mar. La labor abarcó la planificación técnica, supervisión ejecutiva y coordinación general para una arquitectura de vanguardia en hormigón visto y piedra regional, terrazas voladizas, piscina suspendida infinity y suites con vistas panorámicas al océano."
  },
  9: {
    title: "HOWARD JOHNSON CARRASCO",
    category: "Gerenciamiento & Dirección de Obra",
    images: [
      "./hj_carrasco_1.jpg",
      "./hj_carrasco_2.jpg",
      "./hj_carrasco_3.jpg",
      "./hj_carrasco_4.jpg",
      "./hj_carrasco_5.jpg"
    ],
    location: "Montevideo, Uruguay",
    area: "6.000 m²",
    year: "2017",
    architect: "HERRERA LUSSICH ARQS",
    description: "Gerenciamiento integral y dirección ejecutiva de obra para el complejo hotelero Howard Johnson Carrasco en Montevideo, Uruguay. La obra abarcó el desarrollo edilicio frente al lago, habitaciones ejecutivas con vistas panorámicas, piscina exterior con solárium y decks de madera sobre el espejo de agua, áreas comunes, restaurante y parquización de entorno."
  },
  10: {
    title: "CASA ARRIBEÑOS",
    category: "Dirección de Obra & Gerenciamiento",
    images: [
      "./arribenos_1.jpg",
      "./arribenos_2.jpg",
      "./arribenos_3.jpg",
      "./arribenos_4.jpg"
    ],
    location: "Belgrano, CABA",
    area: "400 m²",
    year: "2014",
    architect: "ADAMO FAIDEN ARQS",
    description: "Dirección de obra ejecutiva y gerenciamiento integral para la residencia unifamiliar Casa Arribeños en el barrio de Belgrano, CABA. La intervención comprendió la ejecución y coordinación técnica de fachada urbana translúcida, articulación de niveles interiores con escaleras de madera, grandes ventanales hacia el patio ajardinado, biblioteca integral y carpinterías de alta prestación."
  },
  11: {
    title: "VELOCIUDAD",
    category: "Gerenciamiento de Proyecto",
    images: [
      "./velociudad_1.jpg",
      "./velociudad_2.jpg"
    ],
    location: "Zárate, Prov. Bs. As.",
    area: "63 has",
    year: "2012",
    architect: "POPULOUS (UK)",
    description: "Gerenciamiento integral de proyecto para el masterplan y parque automovilístico Velociudad Speedcity en Zárate, provincia de Buenos Aires. La labor abarcó la planificación estratégica, estudios preliminares de ingeniería y coordinación general para un complejo de escala internacional sobre un predio de 63 hectáreas proyectado con homologación FIA Grado 1, edificios de boxes, tribunas, paddock y centro de entrenamiento de manejo."
  },
  12: {
    title: "AGUACALMA",
    category: "Gerenciamiento & Dirección de Obra",
    images: [
      "./aguacalma_1.jpg",
      "./aguacalma_2.jpg",
      "./aguacalma_3.jpg",
      "./aguacalma_4.jpg",
      "./aguacalma_5.jpg"
    ],
    location: "Cariló, Prov. Bs. As.",
    area: "7.500 m²",
    year: "2008",
    architect: "CMS ARQS",
    description: "Servicios profesionales de dirección ejecutiva de obra y gerenciamiento integral realizados para CMS en el complejo residencial, comercial y spa Aguacalma en Cariló. Emplazado en Boyero y Avellano inmerso en el bosque de pinos, el conjunto articula unidades residenciales con terrazas privadas y parrillas, galería comercial, espacio de arte, spa con piscina climatizada in/out y solárium de deck integrado a la naturaleza."
  },
  13: {
    title: "GRAND BOURG",
    category: "Dirección de Obra & Gerenciamiento",
    images: [
      "./grandbourg_1.jpg",
      "./grandbourg_2.jpg",
      "./grandbourg_3.jpg",
      "./grandbourg_4.jpg",
      "./grandbourg_5.jpg"
    ],
    location: "Barrio Parque, CABA",
    area: "12.500 m²",
    year: "2006",
    architect: "AFT ARQS",
    description: "Dirección ejecutiva de obra y gerenciamiento integral para la emblemática torre residencial Grand Bourg sobre Av. Figueroa Alcorta en Barrio Parque / Palermo Chico. Proyectada por el prestigioso estudio AFT, la torre de inspiración academicista francesa de 15 niveles alberga residencias de ultra lujo, imponente lobby en mármol de doble altura, subsuelos de cocheras, jardines privados y amenities premium."
  },
  14: {
    title: "BAUFEST",
    category: "Gerenciamiento & Dirección de Obra",
    images: [
      "./baufest_1.jpg",
      "./baufest_2.jpg",
      "./baufest_3.jpg",
      "./baufest_4.jpg",
      "./baufest_5.jpg"
    ],
    location: "Belgrano, CABA",
    area: "1.500 m²",
    year: "2009",
    architect: "LAGLEYZE ARQS.",
    description: "Gerenciamiento integral, dirección ejecutiva de obra y proyecto para la sede corporativa de la compañía internacional de desarrollo IT Baufest, en Belgrano, CABA. La intervención abarcó la remodelación y adecuación edilicia completa, articulando un atrio central de doble altura con iluminación cenital y muro geométrico neoplasticista, áreas open-office de trabajo colaborativo, salas de reuniones ejecutivas y recepción de autor."
  },
  15: {
    title: "ALGODÓN MANSION",
    category: "Dirección de Obra & Gerenciamiento",
    images: [
      "./algodon_1.jpg",
      "./algodon_2.jpg",
      "./algodon_3.jpg",
      "./algodon_4.jpg",
      "./algodon_5.jpg",
      "./algodon_6.jpg"
    ],
    location: "Recoleta, CABA",
    area: "1.500 m²",
    year: "2009",
    architect: "HEUSCH ARQS (USA)",
    description: "Gerenciamiento integral y dirección ejecutiva de obra para la restauración patrimonial y remodelación de alta gama de Algodón Mansion en Recoleta. La intervención abarcó la preservación de la fachada neoclásica francesa, acondicionamiento de suites de lujo, restauración del lounge bar con ónix retroiluminado, atrio central y rooftop deck con piscina panorámica."
  },
  16: {
    title: "SOFITEL BUENOS AIRES",
    category: "Gerenciamiento & Dirección de Obra",
    images: [
      "./sofitel_1.jpg",
      "./sofitel_2.jpg",
      "./sofitel_3.jpg",
      "./sofitel_4.jpg"
    ],
    location: "Retiro, CABA",
    area: "14.000 m²",
    year: "2003",
    architect: "DF&A ARQS",
    description: "Servicios profesionales de dirección ejecutiva de obra y gerenciamiento integral realizados para CMS en el emblemático Hotel Sofitel Buenos Aires (Edificio Mihanovich) en Retiro. La intervención patrimonial de gran envergadura comprendió la remodelación y puesta en valor de 14.000 m² para un hotel de 5 estrellas con 140 habitaciones, restauración de fachada y marquesina histórica, restaurante gourmet, bar de autor, spa, business center y piscina climatizada interior."
  },
  17: {
    title: "IBIS CONGRESO",
    category: "Gerenciamiento & Dirección de Obra",
    images: [
      "./ibis_1.jpg",
      "./ibis_2.jpg",
      "./ibis_3.jpg"
    ],
    location: "Congreso, CABA",
    area: "6.500 m²",
    year: "2002",
    architect: "DF&A ARQS",
    description: "Servicios profesionales de dirección ejecutiva de obra y gerenciamiento integral realizados para CMS en el Hotel Ibis Congreso. Emplazado sobre Hipólito Yrigoyen frente a la Plaza Congreso en CABA, el edificio hotelero de 11 plantas cuenta con 148 habitaciones, recepción con marquesina vidriada, áreas de bar y restaurante 24hs, centro de negocios y servicios de hospitalidad bajo estándares internacionales."
  },
  18: {
    title: "PUERTO VIAMONTE",
    category: "Gerenciamiento & Dirección de Obra",
    images: [
      "./puerto_viamonte_1.jpg"
    ],
    location: "Puerto Madero, CABA",
    area: "45.000 m²",
    year: "2001",
    architect: "RBVP / SEPRA ARQS",
    description: "Gerenciamiento integral y dirección ejecutiva de obra para el complejo corporativo Puerto Viamonte en Puerto Madero, CABA. El conjunto de 45.000 m² de oficinas AAA y locales comerciales se emplaza en la ribera porteña, destacándose por su calidad constructiva, fachadas vidriadas de alta eficiencia, subsuelos técnicos y estándares corporativos internacionales."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar Iconos Lucide
  lucide.createIcons();

  // ==========================================================================
  // CABECERA ADHESIVA (SCROLL EFFECT)
  // ==========================================================================
  const header = document.getElementById("main-header");
  const scrollThreshold = 50;

  const checkScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Ejecutar al cargar por si la página inicia con scroll

  // ==========================================================================
  // MENÚ MÓVIL (BURGER TOGGLE)
  // ==========================================================================
  const menuToggle = document.getElementById("menu-toggle");
  const navMobile = document.getElementById("nav-mobile");
  const menuIcon = document.getElementById("menu-icon");

  const toggleMobileMenu = () => {
    navMobile.classList.toggle("open");
    const isOpen = navMobile.classList.contains("open");
    
    // Cambiar icono entre Hamburguesa y Cruz
    if (isOpen) {
      menuIcon.setAttribute("data-lucide", "x");
    } else {
      menuIcon.setAttribute("data-lucide", "menu");
    }
    lucide.createIcons(); // Re-renderizar iconos cargados dinámicamente
  };

  menuToggle.addEventListener("click", toggleMobileMenu);

  // Cerrar menú móvil al hacer clic en un enlace
  const mobileLinks = document.querySelectorAll(".nav-mobile-link");
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navMobile.classList.contains("open")) {
        toggleMobileMenu();
      }
    });
  });

  // ==========================================================================
  // CONTROL DE NAVEGACIÓN Y ACTIVE LINKS AL HACER SCROLL
  // ==========================================================================
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const activeNavLinkOnScroll = () => {
    let currentSectionId = "";
    const headerHeight = header.offsetHeight + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", activeNavLinkOnScroll);

  // ==========================================================================
  // FILTRADO DEL PORTAFOLIO DE OBRAS
  // ==========================================================================
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Activar botón seleccionado
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      projectItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");

        if (filterValue === "all" || (itemCategory && itemCategory.includes(filterValue))) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
    });
  });

  // ==========================================================================
  // ANIMACIÓN DE CONTADORES NÚMERICOS (NOSOTROS)
  // ==========================================================================
  const metricsSection = document.getElementById("nosotros");
  const metricsNumbers = document.querySelectorAll(".metric-number");
  let animatedMetrics = false;

  const animateCounters = () => {
    metricsNumbers.forEach(metric => {
      const target = parseInt(metric.getAttribute("data-target"));
      const prefix = metric.textContent.includes("+") ? "+" : "";
      const suffix = metric.textContent.includes("%") ? "%" : "";
      let count = 0;
      const duration = 2000; // ms
      const increment = target / (duration / 16); // ~60fps

      const formatNumber = (num) => Math.floor(num).toLocaleString('es-AR');

      const updateCounter = () => {
        count += increment;
        if (count < target) {
          metric.textContent = prefix + formatNumber(count) + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          metric.textContent = prefix + formatNumber(target) + suffix;
        }
      };

      updateCounter();
    });
  };

  // Observador de intersección para disparar contadores al scroll
  const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedMetrics) {
        animateCounters();
        animatedMetrics = true;
      }
    });
  }, { threshold: 0.3 });

  if (metricsSection) {
    metricsObserver.observe(metricsSection);
  }

  // ==========================================================================
  // MODAL INMERSIVO DE DETALLES DE PROYECTO
  // ==========================================================================
  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalBodyContent = document.getElementById("modal-body-content");

  const openProjectModal = (projectId) => {
    const project = projectsData[projectId];
    if (!project) return;

    let currentSlide = 0;
    const totalSlides = project.images.length;

    // Generar HTML de las imágenes del carrusel
    let slidesHtml = '';
    let dotsHtml = '';
    project.images.forEach((imgUrl, idx) => {
      slidesHtml += `
        <div class="carousel-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
          <img src="${imgUrl}" alt="${project.title} - Imagen ${idx + 1}" class="carousel-img">
        </div>
      `;
      dotsHtml += `
        <span class="carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
      `;
    });

    // Crear la estructura de la ficha técnica con el carrusel
    modalBodyContent.innerHTML = `
      <div class="modal-carousel-container">
        <div class="modal-carousel" id="modal-carousel">
          <div class="carousel-slides-wrapper">
            ${slidesHtml}
          </div>
          
          ${totalSlides > 1 ? `
            <button class="carousel-btn prev" id="carousel-prev" aria-label="Imagen anterior">
              <i data-lucide="chevron-left"></i>
            </button>
            <button class="carousel-btn next" id="carousel-next" aria-label="Siguiente imagen">
              <i data-lucide="chevron-right"></i>
            </button>
            <div class="carousel-dots-container">
              ${dotsHtml}
            </div>
          ` : ''}
        </div>
      </div>
      
      <div class="modal-info-section">
        <span class="modal-project-category">${project.category}</span>
        <h3 class="modal-project-title">${project.title}</h3>
        
        <div class="modal-meta-grid">
          <div class="meta-item">
            <h5>Ubicación</h5>
            <p>${project.location}</p>
          </div>
          <div class="meta-item">
            <h5>Superficie</h5>
            <p>${project.area}</p>
          </div>
          <div class="meta-item">
            <h5>Año</h5>
            <p>${project.year}</p>
          </div>
          <div class="meta-item">
            <h5>Proyecto</h5>
            <p>${project.architect}</p>
          </div>
        </div>

        <h4 class="modal-description-title">Detalle del Servicio</h4>
        <p class="modal-description-text">${project.description}</p>
      </div>
    `;

    lucide.createIcons(); // Crear iconos de las flechas del carrusel

    // Lógica del carrusel
    if (totalSlides > 1) {
      const slides = modalBodyContent.querySelectorAll('.carousel-slide');
      const dots = modalBodyContent.querySelectorAll('.carousel-dot');
      const prevBtn = modalBodyContent.querySelector('#carousel-prev');
      const nextBtn = modalBodyContent.querySelector('#carousel-next');

      const goToSlide = (slideIndex) => {
        // Envolver índices
        if (slideIndex < 0) {
          currentSlide = totalSlides - 1;
        } else if (slideIndex >= totalSlides) {
          currentSlide = 0;
        } else {
          currentSlide = slideIndex;
        }

        // Actualizar clases de slides
        slides.forEach((slide, idx) => {
          if (idx === currentSlide) {
            slide.classList.add('active');
          } else {
            slide.classList.remove('active');
          }
        });

        // Actualizar clases de dots
        dots.forEach((dot, idx) => {
          if (idx === currentSlide) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      };

      prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
      nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
      
      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          const idx = parseInt(dot.getAttribute('data-index'));
          goToSlide(idx);
        });
      });
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Desactivar scroll del fondo
  };

  const closeProjectModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Reactivar scroll del fondo
  };

  // Escuchar clics en los elementos del portafolio
  projectItems.forEach(item => {
    item.addEventListener("click", () => {
      const projectId = item.getAttribute("data-project-id");
      openProjectModal(projectId);
    });
  });

  // Cerrar modal
  modalClose.addEventListener("click", closeProjectModal);
  modalBackdrop.addEventListener("click", closeProjectModal);

  // Cerrar con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeProjectModal();
    }
  });

  // ==========================================================================
  // INICIALIZACIÓN DEL MAPA LEAFLET
  // ==========================================================================
  const initMap = () => {
    const mapContainer = document.getElementById("map-container");
    if (!mapContainer) return;

    // Coordenadas reales de la oficina: Franklin D. Roosevelt 1643, Belgrano, CABA
    const latlng = [-34.5529249, -58.4533591];
    
    // Crear mapa y centrarlo
    const map = L.map('map-container', {
      center: latlng,
      zoom: 15, // Zoom más cercano para mostrar la dirección exacta
      scrollWheelZoom: false, // Desactivar zoom al hacer scroll sobre el mapa
      zoomControl: true
    });

    // Cargar capa de mapa de estilo claro minimalista (CartoDB Positron)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    // Diseñar marcador naranja personalizado
    const orangeIcon = L.divIcon({
      className: 'custom-map-marker',
      html: `<div style="
        width: 16px; 
        height: 16px; 
        background-color: var(--color-orange); 
        border: 3px solid var(--color-white); 
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(232, 119, 34, 0.6);
      "></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });

    // Agregar marcador al mapa y configurar popup con redirección
    const marker = L.marker(latlng, { icon: orangeIcon })
      .addTo(map)
      .bindPopup(`
        <div style="font-family: var(--font-sans); padding: 5px; text-align: center;">
          <strong style="color: var(--color-black); text-transform: uppercase; font-size: 13px; display: block; margin-bottom: 2px;">Estudio LAGLEYZE</strong>
          <span style="color: var(--color-grey); font-size: 11px; display: block; margin-bottom: 8px;">Franklin D. Roosevelt 1643, Belgrano, CABA</span>
          <a href="https://maps.app.goo.gl/unajrTta2tf7A36t5" target="_blank" style="
            display: inline-block;
            background-color: var(--color-orange);
            color: var(--color-white) !important;
            padding: 6px 12px;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 600;
            text-decoration: none;
            border-radius: 2px;
            box-shadow: 0 2px 5px rgba(232, 119, 34, 0.2);
            transition: all 0.2s ease;
          " onmouseover="this.style.backgroundColor='#d4681b'" onmouseout="this.style.backgroundColor='var(--color-orange)'">
            Ver en Google Maps
          </a>
        </div>
      `);
      
    // Abrir popup automáticamente
    marker.openPopup();
  };

  // Llamar inicialización del mapa
  try {
    initMap();
  } catch (error) {
    console.error("Error al inicializar el mapa Leaflet:", error);
  }

  // ==========================================================================
  // ENVÍO DEL FORMULARIO DE CONTACTO (SIMULACIÓN PREMIUM)
  // ==========================================================================
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;
      
      // Animación de envío
      submitBtn.disabled = true;
      submitBtn.textContent = "ENVIANDO...";
      formStatus.className = "form-status";
      formStatus.textContent = "";

      // Simular latencia de red para experiencia premium
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        
        formStatus.className = "form-status success";
        formStatus.innerHTML = '<i data-lucide="check-circle" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: 5px;"></i> ¡Consulta enviada con éxito! Nos comunicaremos a la brevedad.';
        lucide.createIcons();
        
        // Limpiar formulario
        contactForm.reset();
      }, 1500);
    });
  }
});
