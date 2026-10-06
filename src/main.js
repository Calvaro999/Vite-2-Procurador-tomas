import './styles/estilos.css';
import { Navbar } from './components/navbar.js';
import { Section } from './components/section.js';

// Elemento raíz de la aplicación
const app = document.querySelector('#app') || document.body;

// 1. SECCIÓN INICIO / HERO
const seccionInicio = Section({
  id: 'inicio',
  className: 'section-hero',
  contenido: `
    <div class="container">
      <div style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 3.5rem; align-items: center;">
        <div>
          <div class="badge-tag" style="margin-bottom: 1.5rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Colegiado ICPIB Nº 120 · Palma de Mallorca
          </div>
          <h1 style="color: #ffffff; font-size: clamp(2.2rem, 4vw, 3.4rem); line-height: 1.2; margin-bottom: 1.5rem; font-family: var(--font-serif);">
            "El Procurador es el representante procesal del ciudadano".
          </h1>
          <p style="color: #cbd5e1; font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">
            Agilizamos sus procedimientos judiciales en Palma, Manacor e Inca. Supervisión técnica rigurosa de cada fase, resolución de obstáculos procesales y comunicación constante e inmediata con su abogado.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
            <a href="#contacto" class="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Solicitar Presupuesto
            </a>
            <a href="#servicios" class="btn-secondary">
              Explorar Servicios
            </a>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3.5rem; padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.15);">
            <div>
              <div style="font-family: var(--font-serif); font-size: 1.8rem; font-weight: 700; color: #dfb15b;">+25</div>
              <div style="font-size: 0.82rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Años de experiencia</div>
            </div>
            <div>
              <div style="font-family: var(--font-serif); font-size: 1.8rem; font-weight: 700; color: #dfb15b;">3</div>
              <div style="font-size: 0.82rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Partidos Judiciales</div>
            </div>
            <div>
              <div style="font-family: var(--font-serif); font-size: 1.8rem; font-weight: 700; color: #dfb15b;">100%</div>
              <div style="font-size: 0.82rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Control de Plazos</div>
            </div>
          </div>
        </div>

        <div style="position: relative;">
          <div style="position: relative; border-radius: 18px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6); border: 2px solid rgba(198, 146, 52, 0.35);">
            <img src="/images/hero_procurador.jpg" alt="Despacho Procurador Gabriel Tomás en Palma de Mallorca" style="width: 100%; height: auto; display: block; object-fit: cover;" />
            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(180deg, transparent 0%, rgba(11, 21, 40, 0.95) 100%); padding: 1.5rem; color: #ffffff;">
              <span style="font-family: var(--font-serif); font-size: 1.1rem; font-weight: 600; display: block;">Gabriel Tomás Gili</span>
              <span style="font-size: 0.85rem; color: #dfb15b;">Procurador Colegiado ICPIB nº 120 · Illes Balears</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
});

// 2. SECCIÓN QUIÉNES SOMOS
const seccionQuienesSomos = Section({
  id: 'quienessomos',
  className: 'section-light',
  contenido: `
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Trayectoria & Compromiso</span>
        <h2>Quiénes Somos</h2>
        <p>Representación judicial de máxima solvencia técnica, rigor en los plazos y trato cercano para letrados y particulares.</p>
      </div>

      <div class="about-layout">
        <div>
          <h3 style="font-size: 1.8rem; margin-bottom: 1.25rem;">Procuradores Mallorca · Gabriel Tomás Gili</h3>
          <p style="margin-bottom: 1.25rem;">
            Como <strong>Procurador Colegiado ICPIB nº 120</strong>, ejerzo la representación procesal ante los juzgados y tribunales de las Islas Baleares, actuando como el enlace directo y eficaz entre el órgano judicial, el abogado y el justiciable.
          </p>
          <p style="margin-bottom: 1.25rem;">
            Nos responsabilizamos íntegramente de la gestión procesal: desde la recepción y firma de emplazamientos, citaciones y notificaciones hasta la asistencia presencial a diligencias y vistas en sede judicial.
          </p>

          <div style="margin: 2rem 0; padding: 1.5rem; background: #ffffff; border-radius: 12px; border-left: 4px solid var(--gold-accent); box-shadow: var(--shadow-sm);">
            <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--primary-navy);">Garantía de Impulso Procesal</h4>
            <p style="font-size: 0.95rem; margin: 0;">
              Transmitimos inmediatamente al letrado cada resolución judicial recibida, anticipando incidencias y evitando dilaciones innecesarias que puedan retrasar la sentencia definitiva.
            </p>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="https://www.cgpe.es/" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 0.88rem; padding: 0.7rem 1.3rem;">
              Consejo General (CGPE)
            </a>
            <a href="https://www.procuradoresdebaleares.es/" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="font-size: 0.88rem; padding: 0.7rem 1.3rem; color: #0b1528; border-color: #cbd5e1; background: #ffffff;">
              Colegio Balear (ICPIB)
            </a>
          </div>
        </div>

        <div class="about-highlight-box">
          <h4 style="font-size: 1.3rem; margin-bottom: 1.2rem; color: var(--primary-navy); border-bottom: 1px solid rgba(198, 146, 52, 0.2); padding-bottom: 0.8rem;">
            Información del Despacho
          </h4>
          <ul class="about-list">
            <li>
              <span class="about-list-icon">📍</span>
              <div>
                <strong>Partidos Judiciales:</strong>
                <div>Palma de Mallorca, Manacor, Inca (otros partidos de Baleares por encargo).</div>
              </div>
            </li>
            <li>
              <span class="about-list-icon">⏱️</span>
              <div>
                <strong>Horario de Atención:</strong>
                <div>Lunes a Viernes: 8:00 AM – 19:00 PM<br><span style="color: #94a3b8; font-size: 0.85rem;">Sábado y Domingo: Cerrado</span></div>
              </div>
            </li>
            <li>
              <span class="about-list-icon">📞</span>
              <div>
                <strong>Teléfono Directo:</strong>
                <div><a href="tel:+34971770574" style="font-weight: 600;">+34 971 77 05 74</a></div>
              </div>
            </li>
            <li>
              <span class="about-list-icon">💬</span>
              <div>
                <strong>WhatsApp Inmediato:</strong>
                <div><a href="https://api.whatsapp.com/send?phone=34609649224" target="_blank" rel="noopener noreferrer" style="font-weight: 600; color: #059669;">+34 609 64 92 24</a></div>
              </div>
            </li>
          </ul>

          <div style="margin-top: 1.5rem; text-align: center;">
            <a href="https://api.whatsapp.com/send?phone=34609649224" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; text-align: center; padding: 0.85rem; background: #059669; color: #ffffff; border-radius: 8px; font-weight: 600; text-decoration: none; transition: background 0.2s;">
              Abrir Consulta por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  `
});

// 3. SECCIÓN SERVICIOS
const seccionServicios = Section({
  id: 'servicios',
  className: 'section-alt',
  contenido: `
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Especialidades Profesionales</span>
        <h2>Nuestros Servicios Destacados</h2>
        <p>Cobertura procesal integral diseñada para dotar a los despachos de abogados de la máxima tranquilidad y efectividad.</p>
      </div>

      <div class="services-grid">
        <!-- Servicio 1 -->
        <div class="service-card">
          <div class="service-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <h3>Tramitación de Despachos</h3>
          <p>Gestión completa, diligenciado y presentación de mandamientos, testimonios, oficios y exhortos en todos los juzgados de Palma de Mallorca, Manacor e Inca.</p>
          <span class="service-badge">Área Procesal</span>
        </div>

        <!-- Servicio 2 -->
        <div class="service-card">
          <div class="service-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 2L11 13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </div>
          <h3>Actos de Comunicación</h3>
          <p>Realización directa al demandado de notificaciones, citaciones, requerimientos y emplazamientos con total validez legal, acortando notablemente la duración del procedimiento.</p>
          <span class="service-badge">Reducción de Tiempos</span>
        </div>

        <!-- Servicio 3 -->
        <div class="service-card">
          <div class="service-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h3>Servicio Integral y Control</h3>
          <p>Sistema de control diario y riguroso de vencimientos, plazos procesales y señalamientos. Impulso activo constante para evitar paralizaciones judiciales.</p>
          <span class="service-badge">Supervisión Diaria</span>
        </div>

        <!-- Servicio 4 -->
        <div class="service-card">
          <div class="service-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h3>Asistencia en Sede Judicial</h3>
          <p>Acompañamiento personalizado al cliente en cualquier comparecencia judicial, consignación de depósitos, liquidación de tasas y sustitución letrada en diligencias preliminares.</p>
          <span class="service-badge">Presencia en Sala</span>
        </div>
      </div>
    </div>
  `
});

// 4. SECCIÓN PREGUNTAS FRECUENTES
const seccionPreguntas = Section({
  id: 'preguntas',
  className: 'section-light',
  contenido: `
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Respuestas Claras</span>
        <h2>Preguntas Frecuentes</h2>
        <p>Resolvemos las principales dudas sobre la labor del procurador y la gestión procesal en los tribunales.</p>
      </div>

      <div class="faq-container">
        <!-- FAQ 1 -->
        <div class="faq-item active">
          <button class="faq-question" type="button">
            <span>¿Qué es exactamente el Servicio Integral del despacho?</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="faq-answer">
            <p>
              Consiste en la monitorización exhaustiva y diaria de todos los trámites del procedimiento judicial: control milimétrico de plazos y señalamientos, impulso procesal para evitar demoras burocráticas, consignación de depósitos judiciales, liquidación de tasas y acompañamiento presencial continuo al cliente y letrado en cada diligencia o comparecencia judicial.
            </p>
          </div>
        </div>

        <!-- FAQ 2 -->
        <div class="faq-item">
          <button class="faq-question" type="button">
            <span>¿Cómo agiliza los trámites la realización directa de Actos de Comunicación?</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="faq-answer">
            <p>
              A elección del cliente, realizamos las notificaciones y emplazamientos directamente al demandado con plenos efectos jurídicos, sin tener que esperar las colas de semanas o meses del servicio común de notificaciones y embargos del juzgado. Esto acorta sustancialmente el tiempo total de resolución del pleito.
            </p>
          </div>
        </div>

        <!-- FAQ 3 -->
        <div class="faq-item">
          <button class="faq-question" type="button">
            <span>¿En qué partidos judiciales ejerce Gabriel Tomás Gili?</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="faq-answer">
            <p>
              Actuamos de forma habitual en los partidos judiciales de Palma de Mallorca, Manacor e Inca. También asumimos actuaciones en el resto de partidos judiciales de las Islas Baleares (Menorca, Ibiza, Formentera) por encargo previo.
            </p>
          </div>
        </div>

        <!-- FAQ 4 -->
        <div class="faq-item">
          <button class="faq-question" type="button">
            <span>¿Cómo puedo solicitar un presupuesto previo o designar procurador?</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="faq-answer">
            <p>
              Puede remitirnos los datos del procedimiento a través de nuestro formulario web inferior, por correo electrónico o llamando directamente al 971 77 05 74. Facilitamos presupuesto previo detallado con arreglo a los aranceles oficiales vigentes y asesoramiento sobre costas procesales.
            </p>
          </div>
        </div>
      </div>
    </div>
  `
});

// 5. SECCIÓN CONTACTO Y FORMULARIO
const seccionContacto = Section({
  id: 'contacto',
  className: 'section-alt',
  contenido: `
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Atención Personalizada</span>
        <h2>Contacto y Solicitud de Presupuesto</h2>
        <p>Comuníquese directamente con el despacho para consultas sobre trámites, sustituciones o asignación de procurador.</p>
      </div>

      <div class="contact-layout">
        <!-- Tarjeta de contacto directo -->
        <div class="contact-info-card">
          <div>
            <span class="badge-tag" style="background: rgba(198, 146, 52, 0.2); border-color: rgba(198, 146, 52, 0.5); color: #fce7b2;">Despacho Profesional</span>
            <h3 style="margin-top: 1rem;">Gabriel Tomás Gili</h3>
            <p style="color: #94a3b8; font-size: 0.95rem;">Procurador Colegiado ICPIB nº 120</p>
          </div>

          <div class="contact-info-item">
            <div class="contact-info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div class="contact-info-text">
              <strong>Llamada telefónica</strong>
              <a href="tel:+34971770574">+34 971 77 05 74</a>
            </div>
          </div>

          <div class="contact-info-item">
            <div class="contact-info-icon" style="color: #4ade80;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
            <div class="contact-info-text">
              <strong>WhatsApp Móvil</strong>
              <a href="https://api.whatsapp.com/send?phone=34609649224" target="_blank" rel="noopener noreferrer">+34 609 64 92 24</a>
            </div>
          </div>

          <div class="contact-info-item">
            <div class="contact-info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div class="contact-info-text">
              <strong>Correo Electrónico</strong>
              <span>matias@ibserveis.com</span>
            </div>
          </div>

          <div class="contact-info-item">
            <div class="contact-info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div class="contact-info-text">
              <strong>Horario Despacho</strong>
              <span>Lunes a Viernes: 8:00 - 19:00 h</span>
            </div>
          </div>

          <div style="border-top: 1px solid rgba(255, 255, 255, 0.15); padding-top: 1.25rem;">
            <p style="font-size: 0.85rem; color: #94a3b8; margin: 0;">
              Sede operativa en Palma de Mallorca con actuación regular en los juzgados de Vía Alemania, Manacor e Inca.
            </p>
          </div>
        </div>

        <!-- Formulario de consulta -->
        <div class="contact-form-container">
          <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem; color: var(--primary-navy);">Enviar Consulta o Encargo</h3>
          <p style="font-size: 0.95rem; margin-bottom: 1.75rem;">Complete este formulario y nos pondremos en contacto con usted en un plazo máximo de 24 horas laborables.</p>

          <form id="form-consulta">
            <div class="form-row">
              <div class="form-group">
                <label for="nombre">Nombre completo *</label>
                <input type="text" id="nombre" class="form-control" placeholder="Ej. Carlos Martínez" required />
              </div>
              <div class="form-group">
                <label for="telefono">Teléfono de contacto *</label>
                <input type="tel" id="telefono" class="form-control" placeholder="Ej. 600 000 000" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email">Correo electrónico *</label>
                <input type="email" id="email" class="form-control" placeholder="correo@ejemplo.com" required />
              </div>
              <div class="form-group">
                <label for="partido">Partido Judicial</label>
                <select id="partido" class="form-control">
                  <option value="palma">Palma de Mallorca</option>
                  <option value="manacor">Manacor</option>
                  <option value="inca">Inca</option>
                  <option value="otros">Otros (Baleares)</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="mensaje">Detalles de la consulta o procedimiento *</label>
              <textarea id="mensaje" class="form-control" rows="4" placeholder="Indique tipo de procedimiento, juzgado o información requerida..." required></textarea>
            </div>

            <div style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 0.5rem;">
              <input type="checkbox" id="rgpd" required style="margin-top: 4px; accent-color: var(--gold-accent);" />
              <label for="rgpd" style="font-size: 0.84rem; color: #64748b; font-weight: normal;">
                He leído y acepto la política de privacidad y el tratamiento confidencial de mis datos con fines de contacto judicial.
              </label>
            </div>

            <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; font-size: 1rem;">
              Enviar Consulta al Despacho
            </button>

            <div id="form-feedback" style="display: none; margin-top: 1rem; padding: 1rem; border-radius: 8px; font-size: 0.95rem; text-align: center;"></div>
          </form>
        </div>
      </div>
    </div>
  `
});

// 6. COMPONENTE FOOTER
const footer = document.createElement('footer');
footer.style.cssText = `
  background: #070d18;
  color: #94a3b8;
  padding: 3.5rem 1.5rem 2rem 1.5rem;
  border-top: 1px solid rgba(198, 146, 52, 0.25);
  font-size: 0.9rem;
`;
footer.innerHTML = `
  <div class="container">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 2.5rem; margin-bottom: 2.5rem;">
      <div>
        <div style="font-family: var(--font-serif); color: #ffffff; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem;">
          Gabriel Tomás Gili
        </div>
        <p style="color: #64748b; font-size: 0.88rem; line-height: 1.6;">
          Procurador de los Tribunales Colegiado nº 120 del Ilustre Colegio de Procuradores de las Islas Baleares (ICPIB). Representación procesal y garantía jurídica en Mallorca.
        </p>
      </div>

      <div>
        <h4 style="color: #ffffff; font-size: 1rem; margin-bottom: 1rem; font-family: var(--font-serif);">Enlaces Oficiales</h4>
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.6rem;">
          <li><a href="https://www.cgpe.es/" target="_blank" rel="noopener noreferrer" style="color: #cbd5e1;">Consejo General de Procuradores de España</a></li>
          <li><a href="https://www.procuradoresdebaleares.es/" target="_blank" rel="noopener noreferrer" style="color: #cbd5e1;">Colegio de Procuradores de Baleares</a></li>
          <li><a href="https://sedejudicial.justicia.es/" target="_blank" rel="noopener noreferrer" style="color: #cbd5e1;">Sede Judicial Electrónica</a></li>
        </ul>
      </div>

      <div>
        <h4 style="color: #ffffff; font-size: 1rem; margin-bottom: 1rem; font-family: var(--font-serif);">Navegación</h4>
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.6rem;">
          <li><a href="#inicio" style="color: #cbd5e1;">Inicio</a></li>
          <li><a href="#quienessomos" style="color: #cbd5e1;">Quiénes Somos</a></li>
          <li><a href="#servicios" style="color: #cbd5e1;">Servicios Destacados</a></li>
          <li><a href="#preguntas" style="color: #cbd5e1;">Preguntas Frecuentes</a></li>
          <li><a href="#contacto" style="color: #cbd5e1;">Contacto</a></li>
        </ul>
      </div>
    </div>

    <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <p style="margin: 0; font-size: 0.82rem; color: #64748b;">
        © ${new Date().getFullYear()} Gabriel Tomás Gili · Procurador de los Tribunales. Todos los derechos reservados.
      </p>
      <div style="display: flex; gap: 1.5rem; font-size: 0.82rem;">
        <span style="color: #64748b;">Aviso Legal</span>
        <span style="color: #64748b;">Política de Privacidad</span>
        <span style="color: #64748b;">RGPD Compliant</span>
      </div>
    </div>
  </div>
`;

// AÑADIR TODOS LOS COMPONENTES EN ORDEN USANDO app.append(...) SEGÚN ENUNCIADO
app.append(
  Navbar(),
  seccionInicio,
  seccionQuienesSomos,
  seccionServicios,
  seccionPreguntas,
  seccionContacto,
  footer
);

// Interactividad del formulario de consulta
const contactForm = document.querySelector('#form-consulta');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.querySelector('#form-feedback');
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando consulta...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar Consulta al Despacho';
      contactForm.reset();

      if (feedback) {
        feedback.style.display = 'block';
        feedback.style.background = 'rgba(5, 150, 105, 0.15)';
        feedback.style.color = '#059669';
        feedback.style.border = '1px solid #059669';
        feedback.innerHTML = `
          <strong>✓ Mensaje recibido correctamente.</strong><br>
          El procurador Gabriel Tomás revisará su consulta y le responderá a la mayor brevedad.
        `;
      }
    }, 700);
  });
}
