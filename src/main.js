import { Navbar } from './components/navbar.js';
import { Section } from './components/section.js';
import { IntroAnimation } from './components/introAnimation.js';

// 1. SECCIÓN INICIO / HERO CON STATUS LEXNET EN VIVO
const seccionInicio = Section({
  id: 'inicio',
  className: 'section-hero',
  contenido: `
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3.5rem; align-items: center;">
        <div class="reveal-item">
          <!-- Insignias y Estado de Registro Judicial -->
          <div style="display: flex; gap: 0.8rem; align-items: center; flex-wrap: wrap; margin-bottom: 1.5rem;">
            <div class="badge-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Colegiado ICPIB Nº 120 · Palma de Mallorca
            </div>
            <div class="status-lexnet">
              <span class="status-lexnet-dot"></span>
              Sede LexNET Operativa · Día Hábil
            </div>
          </div>
          
          <h1 style="color: #ffffff; font-size: clamp(2.1rem, 3.8vw, 3.4rem); line-height: 1.25; margin-bottom: 1.5rem; font-family: var(--font-serif); font-weight: 700;">
            "El Procurador es el representante procesal del ciudadano".
          </h1>
          
          <p style="color: #cbd5e1; font-size: 1.05rem; line-height: 1.85; margin-bottom: 2rem;">
            Garantía técnica y rigor procedimental en los tribunales de las Islas Baleares. Supervisión rigurosa de plazos, impulso de actuaciones y comunicación directa e inmediata con letrados y clientes.
          </p>

          <div style="display: flex; flex-wrap: wrap; gap: 1.2rem; align-items: center;">
            <a href="#calculadora" class="btn-primary" data-3d-btn>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="4" y="2" width="16" height="20" rx="2"/>
                <line x1="8" y1="6" x2="16" y2="6"/>
                <line x1="8" y1="10" x2="16" y2="10"/>
                <line x1="8" y1="14" x2="12" y2="14"/>
              </svg>
              Calcular Aranceles Orientativos
            </a>
            <a href="#contacto" class="btn-secondary" data-3d-btn>
              Solicitar Intervención
            </a>
          </div>

          <!-- Métricas Institucionales -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3.5rem; padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.12);">
            <div>
              <div style="font-family: var(--font-serif); font-size: 1.85rem; font-weight: 700; color: #dfb15b;">+25</div>
              <div style="font-size: 0.78rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">Años de Ejercicio</div>
            </div>
            <div>
              <div style="font-family: var(--font-serif); font-size: 1.85rem; font-weight: 700; color: #dfb15b;">3</div>
              <div style="font-size: 0.78rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">Partidos Judiciales</div>
            </div>
            <div>
              <div style="font-family: var(--font-serif); font-size: 1.85rem; font-weight: 700; color: #dfb15b;">100%</div>
              <div style="font-size: 0.78rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">Rigor de Plazos</div>
            </div>
          </div>
        </div>

        <div class="reveal-item reveal-delay-2" style="position: relative;">
          <div class="hero-carousel-container" id="hero-carousel">
            <div class="hero-carousel-slides">
              <!-- Slide 1 -->
              <div class="hero-slide active" data-slide-index="0">
                <img src="/images/hero_procurador.jpg" onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='./public/images/hero_procurador.jpg';}" alt="Despacho Procurador Gabriel Tomás en Palma de Mallorca" />
                <div class="hero-slide-caption">
                  <span class="hero-slide-title">Gabriel Tomás Gili</span>
                  <span class="hero-slide-subtitle">Procurador Colegiado ICPIB nº 120 · Despacho Palma</span>
                </div>
              </div>
              <!-- Slide 2 -->
              <div class="hero-slide" data-slide-index="1">
                <img src="/images/palacio_justicia_palma.jpg" onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='./public/images/palacio_justicia_palma.jpg';}" alt="Tribunales y Palacio de Justicia en Palma de Mallorca" />
                <div class="hero-slide-caption">
                  <span class="hero-slide-title">Palacio de Justicia & Tribunales</span>
                  <span class="hero-slide-subtitle">Presencia Diaria · Partidos Judiciales de Baleares</span>
                </div>
              </div>
              <!-- Slide 3 -->
              <div class="hero-slide" data-slide-index="2">
                <img src="/images/expedientes_procurador.jpg" onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='./public/images/expedientes_procurador.jpg';}" alt="Expedientes y Fe Pública Judicial en Palma" />
                <div class="hero-slide-caption">
                  <span class="hero-slide-title">Rigor Procesal & Fe Pública Judicial</span>
                  <span class="hero-slide-subtitle">Control de Plazos · Diligencias · Plataforma LexNET</span>
                </div>
              </div>
            </div>

            <!-- Botones Prev / Next -->
            <button type="button" class="carousel-btn prev" id="carousel-prev-btn" aria-label="Imagen anterior">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button type="button" class="carousel-btn next" id="carousel-next-btn" aria-label="Imagen siguiente">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <!-- Indicadores -->
            <div class="carousel-indicators" id="carousel-indicators">
              <button type="button" class="carousel-dot active" data-index="0" aria-label="Slide 1"></button>
              <button type="button" class="carousel-dot" data-index="1" aria-label="Slide 2"></button>
              <button type="button" class="carousel-dot" data-index="2" aria-label="Slide 3"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
});

// 2. SECCIÓN QUIÉNES SOMOS & EXPLORADOR DE PARTIDOS JUDICIALES
const seccionQuienesSomos = Section({
  id: 'quienessomos',
  className: 'section-light',
  contenido: `
    <div class="container">
      <div class="section-header reveal-item">
        <span class="badge-tag">Trayectoria & Solvencia</span>
        <h2>Quiénes Somos</h2>
        <div class="legal-ornament"><span class="legal-ornament-icon">⚖</span></div>
        <p>Representación judicial de máxima solvencia procesal, rigor temporal y atención personalizada para profesionales de la abogacía y representados.</p>
      </div>

      <div class="about-layout" style="margin-bottom: 4rem;">
        <div class="reveal-item">
          <h3 style="font-size: 1.8rem; margin-bottom: 1.25rem; font-family: var(--font-serif); color: var(--primary-navy);">
            Procuradores Mallorca · Gabriel Tomás Gili
          </h3>
          <p style="margin-bottom: 1.25rem;">
            Como <strong>Procurador Colegiado ICPIB nº 120</strong>, ostento la representación procesal técnica ante los tribunales de la Comunidad Autónoma de las Islas Baleares, actuando con estricto apego deontológico y facilitando el enlace directo entre el juzgado y el letrado director del caso.
          </p>
          <p style="margin-bottom: 1.25rem;">
            Asumimos la gestión íntegra del expediente: control minucioso de providencias, autos y sentencias; recepción y diligenciado de emplazamientos y citaciones; y presencia directa en salas judiciales.
          </p>

          <div style="margin: 2rem 0; padding: 1.75rem; background: #ffffff; border-radius: 8px; border-left: 4px solid var(--gold-accent); border-top: 1px solid rgba(226, 232, 240, 0.9); border-right: 1px solid rgba(226, 232, 240, 0.9); border-bottom: 1px solid rgba(226, 232, 240, 0.9); box-shadow: var(--shadow-sm);">
            <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--primary-navy); letter-spacing: 0.05em; text-transform: uppercase;">
              Compromiso de Diligencia Judicial
            </h4>
            <p style="font-size: 0.95rem; margin: 0; color: #475569;">
              Traslado inmediato de resoluciones al letrado receptor, liquidación de depósitos procesales y anticipación táctica ante cualquier contingencia para evitar dilaciones indebidas.
            </p>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="https://www.cgpe.es/" target="_blank" rel="noopener noreferrer" class="btn-primary" data-3d-btn style="font-size: 0.84rem; padding: 0.8rem 1.5rem;">
              Consejo General de Procuradores (CGPE)
            </a>
            <a href="https://www.procuradoresdebaleares.es/" target="_blank" rel="noopener noreferrer" class="btn-secondary" data-3d-btn style="font-size: 0.84rem; padding: 0.8rem 1.5rem; color: #060c18; border-color: #cbd5e1; background: #ffffff;">
              Colegio Balear (ICPIB)
            </a>
          </div>
        </div>

        <div class="about-highlight-box reveal-item reveal-delay-2">
          <h4 style="font-size: 1.25rem; margin-bottom: 1.25rem; color: var(--primary-navy); border-bottom: 1px solid rgba(198, 146, 52, 0.2); padding-bottom: 0.85rem; letter-spacing: 0.05em;">
            Despacho y Jurisdicción
          </h4>
          <ul class="about-list">
            <li>
              <span class="about-list-icon">⚖️</span>
              <div>
                <strong style="color: #060c18; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.15rem;">Partidos Judiciales:</strong>
                <div style="color: #475569;">Palma de Mallorca (Sede Central), Manacor e Inca (otros partidos insulares bajo designación previa).</div>
              </div>
            </li>
            <li>
              <span class="about-list-icon">🏛️</span>
              <div>
                <strong style="color: #060c18; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.15rem;">Horario Profesional:</strong>
                <div style="color: #475569;">Lunes a Viernes: 8:00 – 19:00 h<br><span style="color: #94a3b8; font-size: 0.84rem;">Sábados y Domingos: Cerrado</span></div>
              </div>
            </li>
            <li>
              <span class="about-list-icon">📞</span>
              <div>
                <strong style="color: #060c18; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.15rem;">Atención Telefónica Directa:</strong>
                <div><a href="tel:+34971770574" style="font-weight: 700; color: #060c18; font-size: 1.05rem;">+34 971 77 05 74</a></div>
              </div>
            </li>
            <li>
              <span class="about-list-icon">✉️</span>
              <div>
                <strong style="color: #060c18; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.15rem;">Canal Inmediato:</strong>
                <div><a href="https://api.whatsapp.com/send?phone=34609649224" target="_blank" rel="noopener noreferrer" style="font-weight: 600; color: #0f766e;">WhatsApp Profesional (+34 609 64 92 24)</a></div>
              </div>
            </li>
          </ul>

          <div style="margin-top: 1.75rem;">
            <a href="tel:+34971770574" class="btn-primary" data-3d-btn style="width: 100%; justify-content: center;">
              Llamar al Despacho
            </a>
          </div>
        </div>
      </div>

      <!-- EXPLORADOR INTERACTIVO DE PARTIDOS JUDICIALES -->
      <div class="reveal-item" style="border-top: 1px solid rgba(203, 213, 225, 0.7); padding-top: 3.5rem;">
        <div style="text-align: center; margin-bottom: 2rem;">
          <span class="badge-tag">Cobertura Territorial en Mallorca</span>
          <h3 style="font-size: 1.8rem; margin-top: 0.5rem; color: var(--primary-navy);">Explorador de Sedes Judiciales</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Seleccione el partido judicial para consultar sedes y órganos adscritos:</p>
        </div>

        <div class="districts-tabs">
          <button class="district-tab-btn active" data-district="palma">Partido Judicial nº 1: Palma de Mallorca</button>
          <button class="district-tab-btn" data-district="manacor">Partido Judicial nº 2: Manacor</button>
          <button class="district-tab-btn" data-district="inca">Partido Judicial nº 3: Inca</button>
        </div>

        <!-- Panel Palma -->
        <div class="district-panel active" id="district-palma">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; align-items: center;">
            <div>
              <h4 style="font-size: 1.3rem; color: var(--primary-navy); margin-bottom: 0.5rem;">Palma de Mallorca (Sede Central)</h4>
              <p style="color: #64748b; font-size: 0.92rem; margin-bottom: 1rem;">
                <strong>Sedes Principales:</strong> Edificio Vía Alemania (Juzgados de 1ª Instancia, Instrucción, Social, Contencioso y Mercantil) y Plaza del Mercat (Audiencia Provincial de Baleares).
              </p>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span class="badge-tag" style="background:#f1f5f9; color:#334155;">24 Juzgados de 1ª Instancia</span>
                <span class="badge-tag" style="background:#f1f5f9; color:#334155;">12 Juzgados de Instrucción</span>
                <span class="badge-tag" style="background:#f1f5f9; color:#334155;">Audiencia Provincial</span>
              </div>
            </div>
            <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; border-left: 3px solid #c69234;">
              <strong style="display: block; font-size: 0.88rem; color: #060c18; margin-bottom: 0.35rem;">Presencia Diaria del Procurador:</strong>
              <p style="font-size: 0.9rem; color: #475569; margin: 0;">
                Asistencia física continua para traslados, vistas, comparecencias y personaciones directas en Sala de Notificaciones del ICPIB.
              </p>
            </div>
          </div>
        </div>

        <!-- Panel Manacor -->
        <div class="district-panel" id="district-manacor">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; align-items: center;">
            <div>
              <h4 style="font-size: 1.3rem; color: var(--primary-navy); margin-bottom: 0.5rem;">Partido Judicial de Manacor</h4>
              <p style="color: #64748b; font-size: 0.92rem; margin-bottom: 1rem;">
                <strong>Sede Judicial:</strong> Plaza des Convent s/n, Manacor. Cubre los municipios del Llevant mallorquín (Manacor, Felanitx, Artà, Capdepera, Santanyí, Son Servera, etc.).
              </p>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span class="badge-tag" style="background:#f1f5f9; color:#334155;">Juzgados Mixtos 1ª Instancia e Instrucción 1 a 6</span>
                <span class="badge-tag" style="background:#f1f5f9; color:#334155;">Registro Civil</span>
              </div>
            </div>
            <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; border-left: 3px solid #c69234;">
              <strong style="display: block; font-size: 0.88rem; color: #060c18; margin-bottom: 0.35rem;">Tramitación y Exhortos:</strong>
              <p style="font-size: 0.9rem; color: #475569; margin: 0;">
                Gestión de lanzamientos, embargos y requerimientos judiciales en toda la demarcación de Manacor con control estricto de fechas.
              </p>
            </div>
          </div>
        </div>

        <!-- Panel Inca -->
        <div class="district-panel" id="district-inca">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; align-items: center;">
            <div>
              <h4 style="font-size: 1.3rem; color: var(--primary-navy); margin-bottom: 0.5rem;">Partido Judicial de Inca</h4>
              <p style="color: #64748b; font-size: 0.92rem; margin-bottom: 1rem;">
                <strong>Sede Judicial:</strong> Carrer d'es Cos, Inca. Cobertura en la comarca del Raiguer, Alcúdia, Pollença, Muro, Sa Pobla y municipios adscritos.
              </p>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span class="badge-tag" style="background:#f1f5f9; color:#334155;">Juzgados Mixtos 1ª Instancia e Instrucción 1 a 5</span>
                <span class="badge-tag" style="background:#f1f5f9; color:#334155;">Violencia sobre la Mujer</span>
              </div>
            </div>
            <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; border-left: 3px solid #c69234;">
              <strong style="display: block; font-size: 0.88rem; color: #060c18; margin-bottom: 0.35rem;">Servicio Procesal Activo:</strong>
              <p style="font-size: 0.9rem; color: #475569; margin: 0;">
                Acompañamiento en sede de Inca y canalización directa de exhortos y notificaciones en toda la zona norte.
              </p>
            </div>
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
      <div class="section-header reveal-item">
        <span class="badge-tag">Especialidades Profesionales</span>
        <h2>Servicios Procesales</h2>
        <div class="legal-ornament"><span class="legal-ornament-icon">⚖</span></div>
        <p>Cobertura integral ante todos los órdenes jurisdiccionales para letrados y representados con rigor arancelario.</p>
      </div>

      <div class="services-grid">
        <!-- Servicio 1 -->
        <div class="service-card reveal-item reveal-delay-1">
          <div class="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </div>
          <h3>Tramitación de Despachos</h3>
          <p>Diligenciado minucioso, presentación y seguimiento de mandamientos, testimonios, oficios y exhortos en todos los juzgados de Palma de Mallorca, Manacor e Inca.</p>
          <span class="service-badge">Área Procesal Civil y Penal</span>
        </div>

        <!-- Servicio 2 -->
        <div class="service-card reveal-item reveal-delay-2">
          <div class="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 2L11 13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </div>
          <h3>Actos de Comunicación</h3>
          <p>Realización directa de notificaciones, citaciones, requerimientos y emplazamientos con total fe pública procesal, acortando sustancialmente los plazos de trámite judicial.</p>
          <span class="service-badge">Reducción de Dilaciones</span>
        </div>

        <!-- Servicio 3 -->
        <div class="service-card reveal-item reveal-delay-3">
          <div class="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h3>Servicio Integral y Control</h3>
          <p>Monitorización diaria y protocolizada de vencimientos procesales, términos perentorios y señalamientos de sala. Impulso proactivo permanente de las causas.</p>
          <span class="service-badge">Supervisión Técnica Diaria</span>
        </div>

        <!-- Servicio 4 -->
        <div class="service-card reveal-item reveal-delay-4">
          <div class="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            </svg>
          </div>
          <h3>Asistencia en Sede Judicial</h3>
          <p>Representación y acompañamiento presencial en comparecencias, lanzamientos, embargos, depósitos judiciales, liquidación de tasas y sustituciones de letrado.</p>
          <span class="service-badge">Presencia Presencial en Sala</span>
        </div>
      </div>
    </div>
  `
});

// 4. NUEVA SECCIÓN: CALCULADORA INTERACTIVA DE ARANCELES PROCESALES
const seccionCalculadora = Section({
  id: 'calculadora',
  className: 'section-dark',
  contenido: `
    <div class="container">
      <div class="section-header reveal-item">
        <span class="badge-tag" style="background: rgba(198, 146, 52, 0.15); color: #dfb15b; border-color: rgba(198, 146, 52, 0.4);">
          Transparencia y Aranceles Oficiales
        </span>
        <h2 style="color: #ffffff;">Calculadora Orientativa de Aranceles</h2>
        <div class="legal-ornament"><span class="legal-ornament-icon">⚖</span></div>
        <p style="color: #cbd5e1;">Estime los derechos arancelarios oficiales de procurador conforme al RD 1373/2003 y normativa procesal aplicable.</p>
      </div>

      <div class="calculator-card reveal-item">
        <div class="calc-grid">
          <div>
            <div class="form-group">
              <label for="calc-tipo" style="color: #dfb15b;">Tipo de Procedimiento Judicial</label>
              <select id="calc-tipo" class="form-control" style="background: #060c18; color: #ffffff; border-color: rgba(198, 146, 52, 0.35);">
                <option value="ordinario">Juicio Ordinario Civil</option>
                <option value="verbal">Juicio Verbal</option>
                <option value="monitorio">Procedimiento Monitorio</option>
                <option value="ejecucion">Ejecución Dineraria o Hipotecaria</option>
                <option value="penal">Procedimiento Abreviado / Penal</option>
              </select>
            </div>

            <div class="form-group">
              <label for="calc-cuantia" style="color: #dfb15b;">Cuantía del Pleito (€)</label>
              <input type="number" id="calc-cuantia" class="form-control" value="12000" min="500" step="500" placeholder="Ej. 12000" style="background: #060c18; color: #ffffff; border-color: rgba(198, 146, 52, 0.35);" />
            </div>

            <div class="form-group">
              <label for="calc-partido" style="color: #dfb15b;">Partido Judicial</label>
              <select id="calc-partido" class="form-control" style="background: #060c18; color: #ffffff; border-color: rgba(198, 146, 52, 0.35);">
                <option value="Palma de Mallorca">Palma de Mallorca (Sede Central)</option>
                <option value="Manacor">Manacor</option>
                <option value="Inca">Inca</option>
              </select>
            </div>

            <p style="font-size: 0.8rem; color: #94a3b8; margin: 0; line-height: 1.5;">
              * Importe orientativo de escala arancelaria legal. Sujeto a IVA vigente y particularidades procesales del expediente.
            </p>
          </div>

          <div class="calc-result-box">
            <span style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.12em; color: #cbd5e1; font-weight: 600;">
              Estimación de Derechos Procurador:
            </span>
            <div class="calc-amount-display" id="calc-display-amount">~ 185 € - 265 €</div>
            <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 1.5rem;">
              Incluye representación procesal, control diario de plazos e impulso de providencias.
            </p>

            <button type="button" id="calc-apply-btn" class="btn-primary" data-3d-btn style="width: 100%; justify-content: center;">
              Solicitar Propuesta con estos Datos ›
            </button>
          </div>
        </div>
      </div>
    </div>
  `
});

// 5. SECCIÓN PREGUNTAS FRECUENTES
const seccionPreguntas = Section({
  id: 'preguntas',
  className: 'section-light',
  contenido: `
    <div class="container">
      <div class="section-header reveal-item">
        <span class="badge-tag">Criterios & Respuestas</span>
        <h2>Preguntas Frecuentes</h2>
        <div class="legal-ornament"><span class="legal-ornament-icon">⚖</span></div>
        <p>Aclaraciones normativas sobre la intervención procesal y la gestión ante los órganos judiciales.</p>
      </div>

      <div class="faq-container reveal-item">
        <div class="faq-item active">
          <button class="faq-question" type="button">
            <span>¿En qué consiste el Servicio Integral del despacho?</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="faq-answer">
            <p>
              Supone la tutela procesal continua y rigurosa del expediente: control diario de plazos preclusivos, examen de resoluciones dictadas por el órgano judicial, consignación de fianzas o depósitos, gestión de tasas judiciales y la asistencia física a diligencias y actos que requieran representación en sede jurisdiccional.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" type="button">
            <span>¿Qué validez y ventajas ofrece la realización directa de Actos de Comunicación?</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="faq-answer">
            <p>
              Conforme a la Ley de Enjuiciamiento Civil, los procuradores ostentan capacidad de certificación para realizar notificaciones y emplazamientos con plena eficacia jurídica. Al encomendarlos directamente al despacho, se evitan las dilatadas demoras de los servicios comunes del juzgado, reduciendo en meses la tramitación del pleito.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" type="button">
            <span>¿Qué partidos judiciales quedan cubiertos habitualmente?</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="faq-answer">
            <p>
              Actuamos de forma regular en los partidos judiciales de Palma de Mallorca, Manacor e Inca. Para actuaciones en el resto del archipiélago balear (Menorca e Ibiza), se coordina la intervención bajo encargo específico.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" type="button">
            <span>¿Cómo se determinan los aranceles y la solicitud de presupuesto?</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="faq-answer">
            <p>
              La retribución del procurador se rige estrictamente por el Arancel Oficial de Derechos de los Procuradores de los Tribunales. Si precisa un desglose previo, remítanos los datos del litigio mediante el formulario o vía telefónica para emitir la propuesta arancelaria correspondiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  `
});

// 6. SECCIÓN CONTACTO Y FORMULARIO
const seccionContacto = Section({
  id: 'contacto',
  className: 'section-alt',
  contenido: `
    <div class="container">
      <div class="section-header reveal-item">
        <span class="badge-tag">Atención Profesional</span>
        <h2>Contacto y Solicitud de Intervención</h2>
        <div class="legal-ornament"><span class="legal-ornament-icon">⚖</span></div>
        <p>Establezca comunicación directa con el despacho para consultas de designación, traslados o sustituciones procesales.</p>
      </div>

      <div class="contact-layout">
        <!-- Tarjeta Institucional -->
        <div class="contact-info-card reveal-item">
          <div>
            <span class="badge-tag" style="background: rgba(198, 146, 52, 0.15); border-color: rgba(198, 146, 52, 0.4); color: #dfb15b;">Sede Profesional</span>
            <h3 style="font-family: var(--font-serif); font-size: 1.6rem; margin-top: 1rem;">Gabriel Tomás Gili</h3>
            <p style="color: #94a3b8; font-size: 0.88rem; text-transform: uppercase; letter-spacing: 0.08em;">Procurador Colegiado ICPIB nº 120</p>
          </div>

          <div class="contact-info-item">
            <div class="contact-info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div class="contact-info-text">
              <strong>Teléfono Despacho</strong>
              <a href="tel:+34971770574">+34 971 77 05 74</a>
            </div>
          </div>

          <div class="contact-info-item">
            <div class="contact-info-icon" style="color: #38bdf8;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
            <div class="contact-info-text">
              <strong>Canal Mensajería</strong>
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
              <strong>Correo Institucional</strong>
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
              <span>Lunes a Viernes: 8:00 – 19:00 h</span>
            </div>
          </div>

          <div style="border-top: 1px solid rgba(255, 255, 255, 0.12); padding-top: 1.25rem;">
            <p style="font-size: 0.85rem; color: #94a3b8; margin: 0; line-height: 1.6;">
              Intervención habitual en los Juzgados de Vía Alemania, Juzgados de Manacor, Juzgados de Inca y Audiencia Provincial de Baleares.
            </p>
          </div>
        </div>

        <!-- Formulario Oficial -->
        <div class="contact-form-container reveal-item reveal-delay-2">
          <h3 style="font-size: 1.45rem; margin-bottom: 0.6rem; color: var(--primary-navy); font-family: var(--font-serif);">
            Formulario de Consulta Judicial
          </h3>
          <p style="font-size: 0.95rem; margin-bottom: 1.75rem; color: #64748b;">
            Cumplimente los campos preceptivos. Se atenderá su comunicación en un plazo máximo de 24 horas hábiles.
          </p>

          <form id="form-consulta">
            <div class="form-row">
              <div class="form-group">
                <label for="nombre">Nombre o Razón Social *</label>
                <input type="text" id="nombre" class="form-control" placeholder="Ej. Letrado/a o Particular" required />
              </div>
              <div class="form-group">
                <label for="telefono">Teléfono de Enlace *</label>
                <input type="tel" id="telefono" class="form-control" placeholder="Ej. 971 000 000" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email">Correo Electrónico *</label>
                <input type="email" id="email" class="form-control" placeholder="correo@despacho.com" required />
              </div>
              <div class="form-group">
                <label for="partido">Partido Judicial de Actuación</label>
                <select id="partido" class="form-control">
                  <option value="Palma de Mallorca">Palma de Mallorca (Sede Principal)</option>
                  <option value="Manacor">Manacor</option>
                  <option value="Inca">Inca</option>
                  <option value="Otros">Otros Órganos Judiciales (Baleares)</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="mensaje">Asunto / Objeto de la Actuación *</label>
              <textarea id="mensaje" class="form-control" rows="4" placeholder="Indique número de autos, tipo de procedimiento, juzgado y trámite requerido..." required></textarea>
            </div>

            <div style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 0.6rem;">
              <input type="checkbox" id="rgpd" required style="margin-top: 4px; accent-color: var(--gold-accent);" />
              <label for="rgpd" style="font-size: 0.82rem; color: #64748b; font-weight: normal; line-height: 1.5;">
                He leído y acepto el tratamiento confidencial de los datos remitidos a efectos estrictos de contacto profesional judicial.
              </label>
            </div>

            <button type="submit" class="btn-primary" data-3d-btn style="width: 100%; justify-content: center; font-size: 0.95rem;">
              Remitir Petición al Despacho
            </button>

            <div id="form-feedback" style="display: none; margin-top: 1rem; padding: 1rem; border-radius: 6px; font-size: 0.95rem; text-align: center;"></div>
          </form>
        </div>
      </div>
    </div>
  `
});

// 7. COMPONENTE FOOTER
const footer = document.createElement('footer');
footer.style.cssText = `
  background: #040810;
  color: #94a3b8;
  padding: 4rem 1.5rem 2.5rem 1.5rem;
  border-top: 1px solid rgba(198, 146, 52, 0.25);
  font-size: 0.9rem;
`;
footer.innerHTML = `
  <div class="container">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 3rem; margin-bottom: 3rem;">
      <div>
        <div style="font-family: var(--font-serif); color: #ffffff; font-size: 1.3rem; font-weight: 700; margin-bottom: 0.75rem; letter-spacing: 0.05em;">
          Gabriel Tomás Gili
        </div>
        <p style="color: #64748b; font-size: 0.88rem; line-height: 1.7;">
          Procurador de los Tribunales Colegiado nº 120 en el Ilustre Colegio de Procuradores de las Islas Baleares (ICPIB). Solvencia técnica, representación y garantía procesal en Mallorca.
        </p>
      </div>

      <div>
        <h4 style="color: #ffffff; font-size: 0.95rem; margin-bottom: 1rem; font-family: var(--font-serif); text-transform: uppercase; letter-spacing: 0.1em;">Corporaciones Oficiales</h4>
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.65rem;">
          <li><a href="https://www.cgpe.es/" target="_blank" rel="noopener noreferrer" style="color: #cbd5e1;">Consejo General de Procuradores de España</a></li>
          <li><a href="https://www.procuradoresdebaleares.es/" target="_blank" rel="noopener noreferrer" style="color: #cbd5e1;">Colegio de Procuradores de Baleares</a></li>
          <li><a href="https://sedejudicial.justicia.es/" target="_blank" rel="noopener noreferrer" style="color: #cbd5e1;">Punto Neutro Judicial / Sede Judicial</a></li>
        </ul>
      </div>

      <div>
        <h4 style="color: #ffffff; font-size: 0.95rem; margin-bottom: 1rem; font-family: var(--font-serif); text-transform: uppercase; letter-spacing: 0.1em;">Estructura Web</h4>
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.65rem;">
          <li><a href="#inicio" style="color: #cbd5e1;">Inicio</a></li>
          <li><a href="#quienessomos" style="color: #cbd5e1;">Quiénes Somos</a></li>
          <li><a href="#servicios" style="color: #cbd5e1;">Servicios Procesales</a></li>
          <li><a href="#calculadora" style="color: #cbd5e1;">Calculadora de Aranceles</a></li>
          <li><a href="#preguntas" style="color: #cbd5e1;">Preguntas Frecuentes</a></li>
          <li><a href="#contacto" style="color: #cbd5e1;">Contacto y Presupuesto</a></li>
        </ul>
      </div>
    </div>

    <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 1.75rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <p style="margin: 0; font-size: 0.82rem; color: #64748b;">
        © ${new Date().getFullYear()} Gabriel Tomás Gili · Procurador de los Tribunales. Deontología y Rigor Procesal.
      </p>
      <div style="display: flex; gap: 1.5rem; font-size: 0.82rem;">
        <span style="color: #64748b;">Aviso Legal</span>
        <span style="color: #64748b;">Tratamiento Confidencial de Datos (RGPD)</span>
      </div>
    </div>
  </div>
`;

// 8. BOTÓN FLOTANTE DE URGENCIAS Y PLAZOS JUDICIALES
const emergencyBtn = document.createElement('a');
emergencyBtn.className = 'floating-emergency-btn';
emergencyBtn.href = 'https://api.whatsapp.com/send?phone=34609649224';
emergencyBtn.target = '_blank';
emergencyBtn.rel = 'noopener noreferrer';
emergencyBtn.setAttribute('title', 'Notificación urgente o vencimiento de plazo procesal');
emergencyBtn.innerHTML = `
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
  <span>Urgencias / Plazos</span>
`;

// Inicializador de animaciones al hacer scroll (Scroll Reveal)
function setupScrollObserver() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-item').forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
}

// Inicializador del efecto 3D interactivo y reflejo Glossy dinámico que sigue el ratón
function setup3DButtonsAndGlossy() {
  const elements = document.querySelectorAll(
    '.btn-primary, .btn-secondary, [data-3d-btn], .call-btn, .service-card, .about-highlight-box, .district-panel, .contact-form-container'
  );

  elements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Actualizar posición de la luz glossy specular exactamente donde está el cursor
      el.style.setProperty('--glow-x', `${x}px`);
      el.style.setProperty('--glow-y', `${y}px`);

      // Solo botones tienen inclinación de rotación 3D pronunciada
      if (el.classList.contains('btn-primary') || el.classList.contains('btn-secondary') || el.hasAttribute('data-3d-btn') || el.classList.contains('call-btn')) {
        const rotateX = ((y - centerY) / centerY) * -9;
        const rotateY = ((x - centerX) / centerX) * 9;
        el.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px) scale(1.02)`;
      } else if (el.classList.contains('service-card')) {
        // En tarjetas, inclinación sutil y elegante
        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;
        el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      }
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.removeProperty('--glow-x');
      el.style.removeProperty('--glow-y');
    });
  });
}

// Inicializador del seguimiento minimalista del ratón (Solo punto dorado, sin aro grande)
function setupMouseInteractions() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // 1. Resplandor ambiental de fondo colocado por detrás de la aplicación
  let ambientGlow = document.getElementById('ambient-mouse-glow');
  if (!ambientGlow) {
    ambientGlow = document.createElement('div');
    ambientGlow.id = 'ambient-mouse-glow';
    document.body.prepend(ambientGlow);
  }

  // 2. Solo el punto dorado minimalista (se eliminó el aro circular grande por petición)
  let cursorDot = document.querySelector('.custom-cursor-dot');
  if (!cursorDot) {
    cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);
  }

  window.addEventListener('pointermove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Actualizar coordenadas del resplandor ambiental
    document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  // Efecto magnético del punto sobre elementos interactivos
  const interactiveSelector = 'a, button, .service-card, input, textarea, select, .faq-question, .badge-tag';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1';
  });
}

// Inicializador de la Calculadora de Aranceles
function setupCalculator() {
  const tipoSelect = document.getElementById('calc-tipo');
  const cuantiaInput = document.getElementById('calc-cuantia');
  const displayAmount = document.getElementById('calc-display-amount');
  const applyBtn = document.getElementById('calc-apply-btn');

  function calculateFee() {
    if (!tipoSelect || !cuantiaInput || !displayAmount) return;

    const cuantia = parseFloat(cuantiaInput.value) || 0;
    const tipo = tipoSelect.value;

    let baseMin = 120;
    let baseMax = 180;

    if (tipo === 'ordinario') {
      baseMin = Math.round(150 + cuantia * 0.012);
      baseMax = Math.round(230 + cuantia * 0.016);
    } else if (tipo === 'verbal') {
      baseMin = Math.round(90 + cuantia * 0.008);
      baseMax = Math.round(140 + cuantia * 0.011);
    } else if (tipo === 'monitorio') {
      baseMin = Math.round(60 + cuantia * 0.005);
      baseMax = Math.round(110 + cuantia * 0.008);
    } else if (tipo === 'ejecucion') {
      baseMin = Math.round(130 + cuantia * 0.010);
      baseMax = Math.round(195 + cuantia * 0.014);
    } else {
      baseMin = 140;
      baseMax = 220;
    }

    displayAmount.textContent = `~ ${baseMin} € - ${baseMax} €`;
  }

  if (tipoSelect && cuantiaInput) {
    tipoSelect.addEventListener('change', calculateFee);
    cuantiaInput.addEventListener('input', calculateFee);
  }

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const tipo = tipoSelect ? tipoSelect.options[tipoSelect.selectedIndex].text : '';
      const cuantia = cuantiaInput ? cuantiaInput.value : '';
      const partidoSelect = document.getElementById('calc-partido');
      const partidoVal = partidoSelect ? partidoSelect.value : 'Palma de Mallorca';

      // Auto-completar el formulario de consulta
      const formMensaje = document.getElementById('mensaje');
      const formPartido = document.getElementById('partido');

      if (formPartido) {
        formPartido.value = partidoVal;
      }
      if (formMensaje) {
        formMensaje.value = `Solicitud de presupuesto oficial para: ${tipo}, con una cuantía estimada de ${cuantia} €. Partido judicial de ${partidoVal}.`;
      }

      // Scroll suave hasta el formulario
      const contactoSection = document.getElementById('contacto');
      if (contactoSection) {
        contactoSection.scrollIntoView({ behavior: 'smooth' });
        const nombreInput = document.getElementById('nombre');
        if (nombreInput) setTimeout(() => nombreInput.focus(), 600);
      }
    });
  }
}

// Inicializador de las pestañas de Partidos Judiciales
function setupDistrictTabs() {
  const tabs = document.querySelectorAll('.district-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.district;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.district-panel').forEach(panel => {
        panel.classList.remove('active');
      });

      const activePanel = document.getElementById(`district-${target}`);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });
}

// Inicializador del carrusel de imágenes de la cabecera judicial
function setupHeroCarousel() {
  const container = document.getElementById('hero-carousel');
  if (!container) return;

  const slides = container.querySelectorAll('.hero-slide');
  const dots = container.querySelectorAll('.carousel-dot');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');

  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const AUTOPLAY_INTERVAL = 5000;

  function goToSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    slides.forEach((slide, idx) => {
      if (idx === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      startAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      startAutoplay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = parseInt(dot.dataset.index, 10);
      if (!isNaN(idx)) {
        goToSlide(idx);
        startAutoplay();
      }
    });
  });

  // Pausar con hover para poder contemplar la imagen con calma
  container.addEventListener('mouseenter', stopAutoplay);
  container.addEventListener('mouseleave', startAutoplay);

  // Soporte gestual táctil para móviles y tablets
  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      startAutoplay();
    }
  }, { passive: true });

  // Arrancar rotación automática
  startAutoplay();
}

// Función principal de montaje
function renderApp() {
  const app = document.querySelector('#app') || document.body;
  if (!app) return;

  app.innerHTML = '';

  // 1. Añadir la animación solemne de entrada institucional
  const intro = IntroAnimation({
    onComplete: () => {
      setupScrollObserver();
      setup3DButtonsAndGlossy();
      setupMouseInteractions();
      setupCalculator();
      setupDistrictTabs();
      setupHeroCarousel();
    }
  });
  document.body.prepend(intro);

  // 2. app.append(...) para añadir la navbar y todas las secciones en orden según el enunciado
  app.append(
    Navbar(),
    seccionInicio,
    seccionQuienesSomos,
    seccionServicios,
    seccionCalculadora,
    seccionPreguntas,
    seccionContacto,
    footer,
    emergencyBtn
  );

  // Inicializar observadores y efectos interactivos
  setTimeout(() => {
    setupScrollObserver();
    setup3DButtonsAndGlossy();
    setupMouseInteractions();
    setupCalculator();
    setupDistrictTabs();
    setupHeroCarousel();
  }, 100);

  // Interactividad del formulario de consulta judicial
  const contactForm = document.querySelector('#form-consulta');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.querySelector('#form-feedback');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      submitBtn.disabled = true;
      submitBtn.textContent = 'Procesando comunicación judicial...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Remitir Petición al Despacho';
        contactForm.reset();

        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.background = 'rgba(15, 118, 110, 0.12)';
          feedback.style.color = '#0f766e';
          feedback.style.border = '1px solid #0f766e';
          feedback.innerHTML = `
            <strong>✓ Comunicación recibida en el despacho.</strong><br>
            El Procurador Gabriel Tomás examinará el expediente y se pondrá en contacto en un plazo máximo de 24 horas hábiles.
          `;
        }
      }, 700);
    });
  }
}

// Ejecución segura tras disponibilidad del DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
