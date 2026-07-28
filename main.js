// ==========================================================================
// INICIALIZACIÓN Y DATOS DEL PORTAFOLIO
// ==========================================================================

// Base de datos local de proyectos para modal inmersivo
const projectsData = {
  1: {
    title: "Residencia Al Río",
    category: "Gerenciamiento de Obra",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Nordelta, Buenos Aires",
    area: "650 m²",
    year: "2024",
    client: "Privado",
    description: "Gerenciamiento integral de costos, contratos y plazos de ejecución para una residencia unifamiliar de alta gama. El proyecto requirió una rigurosa planificación financiera (Gantt) y la optimización en la contratación de más de 15 gremios independientes. Logramos reducir el desvío presupuestario estimado en un 12% mediante una estrategia de compras anticipada de materiales y licitaciones competitivas."
  },
  2: {
    title: "Edificio Catalinas",
    category: "Dirección de Obra",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Retiro, CABA",
    area: "8.200 m²",
    year: "2023",
    client: "Inversiones Catalinas S.A.",
    description: "Dirección ejecutiva de obra para una torre corporativa con certificación LEED. Supervisión diaria del cumplimiento del pliego de condiciones técnicas en estructura de hormigón armado, fachadas curtain-wall de alto rendimiento e instalaciones termomecánicas complejas. Coordinación técnica en terreno para garantizar los máximos estándares de seguridad y calidad exigidos por el comitente."
  },
  3: {
    title: "Casa Bosque",
    category: "Proyecto de Arquitectura",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Cariló, Costa Atlántica",
    area: "320 m²",
    year: "2024",
    client: "Privado",
    description: "Desarrollo del proyecto de arquitectura ejecutiva detallado para una vivienda brutalista construida íntegramente en hormigón visto y madera de lapacho. Producción de la totalidad del legajo constructivo (planos de replanteo, detalles de carpinterías de aluminio DVH, encuentros estructurales y pliego técnico de terminaciones) listo para licitación de contratistas de obra."
  },
  4: {
    title: "Complejo Las Piedras",
    category: "Gerenciamiento de Obra",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Tigre, Buenos Aires",
    area: "4.500 m²",
    year: "2022",
    client: "Fideicomiso Las Piedras",
    description: "Gerenciamiento integral (Project Management) para un complejo multifamiliar premium de 4 edificios de baja altura. Gestión integral desde la factibilidad de tierras, licitación de contratista principal (obra civil), coordinación de ingenierías asociadas, control mensual de certificaciones de avance de obra y administración del fondo fiduciario para inversionistas."
  },
  5: {
    title: "Showroom Palermo",
    category: "Dirección de Obra",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Palermo Hollywood, CABA",
    area: "480 m²",
    year: "2023",
    client: "Marca de Indumentaria Premium",
    description: "Dirección técnica y gerenciamiento de plazos críticos para la remodelación e interiorismo de un local comercial insignia. La obra civil se ejecutó en un plazo récord de 45 días, coordinando las tareas de instalaciones especiales de iluminación, climatización VRV, carpinterías metálicas a medida y terminaciones finas de microcemento."
  },
  6: {
    title: "Penthouse Libertador",
    category: "Proyecto de Arquitectura",
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Belgrano, CABA",
    area: "210 m²",
    year: "2025",
    client: "Privado",
    description: "Proyecto ejecutivo para la refuncionalización integral de un semipiso de gran categoría. El diseño incluyó el replanteo de instalaciones sanitarias y eléctricas, el diseño de mobiliario a medida revestido en madera natural, revestimientos de mármol y detalles de iluminación lineal LED integrada. Documentación técnica exhaustiva provista para la dirección técnica del proyecto."
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

        if (filterValue === "all" || itemCategory === filterValue) {
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

      const updateCounter = () => {
        count += increment;
        if (count < target) {
          metric.textContent = prefix + Math.floor(count) + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          metric.textContent = prefix + target + suffix;
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
            <h5>Comitente</h5>
            <p>${project.client}</p>
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
