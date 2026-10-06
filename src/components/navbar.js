export function Navbar() {
  const nav = document.createElement('header');
  nav.classList.add('navbar-container');

  nav.innerHTML = `
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
  `;

  const style = document.createElement('style');
  style.textContent = `
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
  `;

  nav.appendChild(style);

  const burguerBtn = nav.querySelector('.botonBurguer');
  const navLinks = nav.querySelector('.nav-links');

  if (burguerBtn && navLinks) {
    burguerBtn.addEventListener('click', () => {
      const isExpanded = navLinks.classList.toggle('active');
      burguerBtn.classList.toggle('active', isExpanded);
      burguerBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    // Cerrar menú al hacer clic en un link en pantallas móviles
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          burguerBtn.classList.remove('active');
          burguerBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  return nav;
}
