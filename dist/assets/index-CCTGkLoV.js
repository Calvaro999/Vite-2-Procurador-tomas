(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.createElement(`header`);e.classList.add(`navbar-container`),e.innerHTML=`
    <nav class="navbar" aria-label="Navegación principal">
      <div class="nav-brand">
        <a href="#inicio" class="logo-link">
          <div class="logo-icon">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
              <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
              <path d="M7 21h10"/>
              <path d="M12 3v18"/>
              <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
            </svg>
          </div>
          <div class="logo-text">
            <span class="logo-title">Gabriel Tomás Gili</span>
            <span class="logo-sub">Procurador de los Tribunales · Col. 120 ICPIB</span>
          </div>
        </a>
      </div>

      <ul class="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#quienessomos">Quiénes Somos</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#preguntas">Preguntas</a></li>
        <li><a href="#contacto" class="nav-cta">Contacto</a></li>
      </ul>

      <div class="nav-actions">
        <a href="tel:+34971770574" class="call-btn" title="Llamar directamente al despacho">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>971 77 05 74</span>
        </a>

        <button class="botonBurguer" type="button" aria-label="Abrir menú" aria-expanded="false">
          <span class="bar bar-1"></span>
          <span class="bar bar-2"></span>
          <span class="bar bar-3"></span>
        </button>
      </div>
    </nav>
  `;let t=document.createElement(`style`);t.textContent=`
    .navbar-container {
      position: sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
      background: rgba(11, 21, 40, 0.94);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(198, 146, 52, 0.25);
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }

    .navbar {
      max-width: 1240px;
      margin: 0 auto;
      padding: 0.9rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-brand .logo-link {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      text-decoration: none;
    }

    .nav-brand .logo-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: linear-gradient(135deg, rgba(198, 146, 52, 0.25) 0%, rgba(198, 146, 52, 0.08) 100%);
      border: 1px solid rgba(198, 146, 52, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #dfb15b;
      box-shadow: 0 4px 12px rgba(198, 146, 52, 0.15);
      transition: transform 0.3s ease;
    }

    .nav-brand .logo-link:hover .logo-icon {
      transform: scale(1.05) rotate(2deg);
    }

    .nav-brand .logo-text {
      display: flex;
      flex-direction: column;
    }

    .nav-brand .logo-title {
      font-family: 'Cinzel', Georgia, serif;
      font-size: 1.15rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 0.02em;
      line-height: 1.2;
    }

    .nav-brand .logo-sub {
      font-size: 0.72rem;
      color: #dfb15b;
      font-weight: 500;
      letter-spacing: 0.03em;
    }

    .nav-links {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 1.8rem;
      margin: 0;
      padding: 0;
    }

    .nav-links li a {
      color: #e2e8f0;
      text-decoration: none;
      font-size: 0.92rem;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0.4rem 0.2rem;
      position: relative;
      transition: color 0.2s ease;
    }

    .nav-links li a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background: #dfb15b;
      transition: width 0.25s ease;
      border-radius: 2px;
    }

    .nav-links li a:hover {
      color: #dfb15b;
    }

    .nav-links li a:hover::after {
      width: 100%;
    }

    .nav-links li a.nav-cta {
      background: rgba(198, 146, 52, 0.15);
      border: 1px solid rgba(198, 146, 52, 0.4);
      color: #fce7b2;
      padding: 0.45rem 1rem;
      border-radius: 6px;
      transition: all 0.25s ease;
    }

    .nav-links li a.nav-cta::after {
      display: none;
    }

    .nav-links li a.nav-cta:hover {
      background: #c69234;
      color: #ffffff;
      border-color: #c69234;
      transform: translateY(-1px);
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .call-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      background: #132238;
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #ffffff;
      padding: 0.45rem 0.9rem;
      border-radius: 8px;
      font-size: 0.84rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .call-btn:hover {
      background: #1e3352;
      border-color: #dfb15b;
      color: #dfb15b;
    }

    .botonBurguer {
      display: none;
      flex-direction: column;
      justify-content: space-around;
      width: 38px;
      height: 38px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 6px;
      cursor: pointer;
      padding: 8px;
      transition: all 0.25s ease;
    }

    .botonBurguer:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: #dfb15b;
    }

    .botonBurguer .bar {
      height: 2.5px;
      width: 100%;
      background: #f8fafc;
      border-radius: 2px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .botonBurguer.active .bar-1 {
      transform: translateY(6px) rotate(45deg);
    }

    .botonBurguer.active .bar-2 {
      opacity: 0;
      transform: translateX(-8px);
    }

    .botonBurguer.active .bar-3 {
      transform: translateY(-6px) rotate(-45deg);
    }

    @media (max-width: 900px) {
      .call-btn {
        display: none;
      }

      .botonBurguer {
        display: flex;
      }

      .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #0b1528;
        border-bottom: 1px solid rgba(198, 146, 52, 0.3);
        flex-direction: column;
        padding: 1.5rem 2rem 2rem 2rem;
        gap: 1.2rem;
        text-align: center;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
      }

      .nav-links.active {
        display: flex;
        animation: navSlideDown 0.3s ease forwards;
      }

      .nav-links li {
        width: 100%;
      }

      .nav-links li a {
        display: block;
        padding: 0.75rem;
        font-size: 1.05rem;
      }
    }

    @keyframes navSlideDown {
      from {
        opacity: 0;
        transform: translateY(-12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,e.appendChild(t);let n=e.querySelector(`.botonBurguer`),r=e.querySelector(`.nav-links`);return n&&r&&(n.addEventListener(`click`,()=>{let e=r.classList.toggle(`active`);n.classList.toggle(`active`,e),n.setAttribute(`aria-expanded`,e?`true`:`false`)}),r.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{r.classList.contains(`active`)&&(r.classList.remove(`active`),n.classList.remove(`active`),n.setAttribute(`aria-expanded`,`false`))})})),e}function t({id:e,contenido:t,className:n=``}){let r=document.createElement(`section`);r.id=e,r.classList.add(`content-section`),n&&r.classList.add(...n.split(` `).filter(Boolean)),r.innerHTML=t;let i=document.createElement(`style`);return i.textContent=`
    .content-section {
      position: relative;
      padding: 5rem 1.5rem;
      scroll-margin-top: 80px;
      width: 100%;
      box-sizing: border-box;
      transition: background-color 0.3s ease;
    }

    /* Variantes de sección para jerarquía visual */
    .content-section.section-hero {
      padding: 6rem 1.5rem 5rem 1.5rem;
      background: linear-gradient(180deg, #0b1528 0%, #111e33 100%);
      color: #f8fafc;
      overflow: hidden;
    }

    .content-section.section-alt {
      background: #f1f5f9;
      border-top: 1px solid rgba(148, 163, 184, 0.2);
      border-bottom: 1px solid rgba(148, 163, 184, 0.2);
    }

    .content-section.section-dark {
      background: #0b1528;
      color: #f8fafc;
    }

    /* Grid de tarjetas para servicios */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.75rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .service-card {
      background: #ffffff;
      padding: 2.2rem 1.8rem;
      border-radius: 14px;
      border: 1px solid rgba(226, 232, 240, 0.8);
      box-shadow: 0 4px 20px rgba(11, 21, 40, 0.05);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #c69234, #dfb15b);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 32px rgba(11, 21, 40, 0.1);
      border-color: rgba(198, 146, 52, 0.4);
    }

    .service-card:hover::before {
      opacity: 1;
    }

    .service-icon {
      width: 52px;
      height: 52px;
      border-radius: 12px;
      background: rgba(198, 146, 52, 0.1);
      color: #c69234;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
      border: 1px solid rgba(198, 146, 52, 0.2);
    }

    .service-card h3 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      color: #0b1528;
    }

    .service-card p {
      font-size: 0.95rem;
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 1.25rem;
      flex-grow: 1;
    }

    .service-badge {
      display: inline-flex;
      font-size: 0.78rem;
      font-weight: 600;
      color: #c69234;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* Bloque Quienes Somos */
    .about-layout {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 3.5rem;
      align-items: center;
    }

    .about-highlight-box {
      background: #ffffff;
      padding: 2.2rem;
      border-radius: 16px;
      border: 1px solid rgba(198, 146, 52, 0.25);
      box-shadow: 0 10px 30px rgba(11, 21, 40, 0.06);
    }

    .about-list {
      list-style: none;
      padding: 0;
      margin: 1.5rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .about-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      font-size: 0.98rem;
      color: #334155;
    }

    .about-list-icon {
      color: #c69234;
      flex-shrink: 0;
      margin-top: 2px;
    }

    /* FAQ Collapsible */
    .faq-container {
      max-width: 860px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .faq-item {
      background: #ffffff;
      border-radius: 12px;
      border: 1px solid rgba(226, 232, 240, 0.9);
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(11, 21, 40, 0.04);
      transition: all 0.2s ease;
    }

    .faq-item:hover {
      border-color: rgba(198, 146, 52, 0.35);
    }

    .faq-question {
      width: 100%;
      text-align: left;
      padding: 1.35rem 1.6rem;
      background: transparent;
      border: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-family: inherit;
      font-size: 1.05rem;
      font-weight: 600;
      color: #0b1528;
      gap: 1rem;
    }

    .faq-question svg {
      transition: transform 0.3s ease;
      color: #c69234;
      flex-shrink: 0;
    }

    .faq-item.active .faq-question svg {
      transform: rotate(180deg);
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.35s ease, padding 0.35s ease;
      padding: 0 1.6rem;
      color: #64748b;
      font-size: 0.96rem;
      line-height: 1.7;
    }

    .faq-item.active .faq-answer {
      max-height: 300px;
      padding: 0 1.6rem 1.5rem 1.6rem;
    }

    /* Sección Contacto */
    .contact-layout {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 3.5rem;
    }

    .contact-info-card {
      background: #0b1528;
      color: #ffffff;
      padding: 2.5rem 2rem;
      border-radius: 16px;
      border: 1px solid rgba(198, 146, 52, 0.3);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
    }

    .contact-info-card h3 {
      color: #ffffff;
      font-size: 1.5rem;
    }

    .contact-info-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .contact-info-icon {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: rgba(198, 146, 52, 0.15);
      color: #dfb15b;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .contact-info-text strong {
      display: block;
      color: #e2e8f0;
      font-size: 0.88rem;
      margin-bottom: 0.15rem;
    }

    .contact-info-text a, .contact-info-text span {
      color: #ffffff;
      font-size: 1.05rem;
      font-weight: 500;
    }

    .contact-form-container {
      background: #ffffff;
      padding: 2.5rem 2.2rem;
      border-radius: 16px;
      border: 1px solid rgba(226, 232, 240, 0.9);
      box-shadow: 0 10px 30px rgba(11, 21, 40, 0.05);
    }

    .form-group {
      margin-bottom: 1.25rem;
    }

    .form-group label {
      display: block;
      font-size: 0.88rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.4rem;
    }

    .form-control {
      width: 100%;
      padding: 0.8rem 1rem;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      font-family: inherit;
      font-size: 0.95rem;
      transition: all 0.2s ease;
      background: #f8fafc;
    }

    .form-control:focus {
      outline: none;
      border-color: #c69234;
      background: #ffffff;
      box-shadow: 0 0 0 3px rgba(198, 146, 52, 0.15);
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    @media (max-width: 900px) {
      .about-layout, .contact-layout {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }

      .form-row {
        grid-template-columns: 1fr;
      }
      
      .content-section {
        padding: 4rem 1.25rem;
      }
    }
  `,r.appendChild(i),r.querySelectorAll(`.faq-question`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.faq-item`);if(t){let e=t.classList.contains(`active`);r.querySelectorAll(`.faq-item`).forEach(e=>e.classList.remove(`active`)),e||t.classList.add(`active`)}})}),r}var n=t({id:`inicio`,className:`section-hero`,contenido:`
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3.5rem; align-items: center;">
        <div>
          <div class="badge-tag" style="margin-bottom: 1.5rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Colegiado ICPIB Nº 120 · Palma de Mallorca
          </div>
          <h1 style="color: #ffffff; font-size: clamp(2rem, 3.5vw, 3.2rem); line-height: 1.25; margin-bottom: 1.5rem; font-family: var(--font-serif);">
            "El Procurador es el representante procesal del ciudadano".
          </h1>
          <p style="color: #cbd5e1; font-size: 1.05rem; line-height: 1.8; margin-bottom: 2rem;">
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
            <img src="/images/hero_procurador.jpg" onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='./public/images/hero_procurador.jpg';}" alt="Despacho Procurador Gabriel Tomás en Palma de Mallorca" style="width: 100%; height: auto; display: block; object-fit: cover;" />
            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(180deg, transparent 0%, rgba(11, 21, 40, 0.95) 100%); padding: 1.5rem; color: #ffffff;">
              <span style="font-family: var(--font-serif); font-size: 1.1rem; font-weight: 600; display: block;">Gabriel Tomás Gili</span>
              <span style="font-size: 0.85rem; color: #dfb15b;">Procurador Colegiado ICPIB nº 120 · Illes Balears</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}),r=t({id:`quienessomos`,className:`section-light`,contenido:`
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
  `}),i=t({id:`servicios`,className:`section-alt`,contenido:`
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Especialidades Profesionales</span>
        <h2>Nuestros Servicios Destacados</h2>
        <p>Cobertura procesal integral diseñada para dotar a los despachos de abogados de la máxima tranquilidad y efectividad.</p>
      </div>

      <div class="services-grid">
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
  `}),a=t({id:`preguntas`,className:`section-light`,contenido:`
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Respuestas Claras</span>
        <h2>Preguntas Frecuentes</h2>
        <p>Resolvemos las principales dudas sobre la labor del procurador y la gestión procesal en los tribunales.</p>
      </div>

      <div class="faq-container">
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
  `}),o=t({id:`contacto`,className:`section-alt`,contenido:`
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Atención Personalizada</span>
        <h2>Contacto y Solicitud de Presupuesto</h2>
        <p>Comuníquese directamente con el despacho para consultas sobre trámites, sustituciones o asignación de procurador.</p>
      </div>

      <div class="contact-layout">
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
  `}),s=document.createElement(`footer`);s.style.cssText=`
  background: #070d18;
  color: #94a3b8;
  padding: 3.5rem 1.5rem 2rem 1.5rem;
  border-top: 1px solid rgba(198, 146, 52, 0.25);
  font-size: 0.9rem;
`,s.innerHTML=`
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
`;function c(){let t=document.querySelector(`#app`)||document.body;if(!t)return;t.innerHTML=``,t.append(e(),n,r,i,a,o,s);let c=document.querySelector(`#form-consulta`);c&&c.addEventListener(`submit`,e=>{e.preventDefault();let t=document.querySelector(`#form-feedback`),n=c.querySelector(`button[type="submit"]`);n.disabled=!0,n.textContent=`Enviando consulta...`,setTimeout(()=>{n.disabled=!1,n.textContent=`Enviar Consulta al Despacho`,c.reset(),t&&(t.style.display=`block`,t.style.background=`rgba(5, 150, 105, 0.15)`,t.style.color=`#059669`,t.style.border=`1px solid #059669`,t.innerHTML=`
            <strong>✓ Mensaje recibido correctamente.</strong><br>
            El procurador Gabriel Tomás revisará su consulta y le responderá a la mayor brevedad.
          `)},700)})}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,c):c();