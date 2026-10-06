/**
 * Componente IntroAnimation
 * Presentación solemne con la balanza de la justicia en equilibrio
 * y revelación cinematográfica del despacho profesional.
 */
export function IntroAnimation({ onComplete } = {}) {
  const intro = document.createElement('aside');
  intro.id = 'judicial-intro';
  intro.setAttribute('aria-label', 'Introducción institucional');

  intro.innerHTML = `
    <div class="intro-backdrop">
      <div class="intro-content">
        <!-- Emblema de la Balanza Judicial -->
        <div class="intro-emblem-wrap">
          <svg class="intro-scales-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Círculo exterior dorado -->
            <circle class="svg-ring" cx="50" cy="50" r="46" stroke="#c69234" stroke-width="1.2" stroke-dasharray="4 2" />
            
            <!-- Pilar central de la balanza -->
            <path class="svg-pillar" d="M50 16 V82 M40 82 H60 M44 86 H56" stroke="#dfb15b" stroke-width="2" stroke-linecap="round" />
            <circle cx="50" cy="16" r="3" fill="#dfb15b" />
            
            <!-- Brazo oscilante que se equilibra -->
            <g class="svg-beam-group">
              <path class="svg-beam" d="M18 28 L50 24 L82 28" stroke="#dfb15b" stroke-width="2" stroke-linecap="round" />
              
              <!-- Plato Izquierdo -->
              <g class="svg-plate-left">
                <line x1="22" y1="28" x2="16" y2="52" stroke="#c69234" stroke-width="1.2" />
                <line x1="22" y1="28" x2="28" y2="52" stroke="#c69234" stroke-width="1.2" />
                <path d="M12 52 Q22 58 32 52 Z" fill="rgba(198,146,52,0.25)" stroke="#dfb15b" stroke-width="1.5" />
              </g>

              <!-- Plato Derecho -->
              <g class="svg-plate-right">
                <line x1="78" y1="28" x2="72" y2="52" stroke="#c69234" stroke-width="1.2" />
                <line x1="78" y1="28" x2="84" y2="52" stroke="#c69234" stroke-width="1.2" />
                <path d="M68 52 Q78 58 88 52 Z" fill="rgba(198,146,52,0.25)" stroke="#dfb15b" stroke-width="1.5" />
              </g>
            </g>
          </svg>
        </div>

        <!-- Título y acreditación institucional -->
        <div class="intro-text-wrap">
          <span class="intro-tag">DESPACHO PROCESAL JUDICIAL</span>
          <h1 class="intro-title">GABRIEL TOMÁS GILI</h1>
          <div class="intro-divider">
            <span class="divider-line"></span>
            <span class="divider-icon">⚖</span>
            <span class="divider-line"></span>
          </div>
          <p class="intro-subtitle">PROCURADOR DE LOS TRIBUNALES · COL. 120 ICPIB</p>
          <p class="intro-jurisdiction">PALMA DE MALLORCA · MANACOR · INCA</p>
        </div>

        <!-- Barra de carga solemne -->
        <div class="intro-progress-bar">
          <div class="intro-progress-fill"></div>
        </div>

        <button class="intro-skip-btn" type="button" aria-label="Saltar animación">
          Entrar al sitio ›
        </button>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #judicial-intro {
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: radial-gradient(circle at center, #0f1d33 0%, #060c18 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 1;
      visibility: visible;
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.8s ease;
      cursor: pointer;
    }

    #judicial-intro.intro-hidden {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .intro-backdrop {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }

    .intro-content {
      max-width: 580px;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: introScaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .intro-emblem-wrap {
      width: 120px;
      height: 120px;
      margin-bottom: 1.75rem;
      position: relative;
    }

    .intro-scales-svg {
      width: 100%;
      height: 100%;
      filter: drop-shadow(0 0 16px rgba(198, 146, 52, 0.4));
    }

    /* Rotación y oscilación inicial que se equilibra solemnemente */
    .svg-ring {
      animation: introRotateRing 20s linear infinite;
      transform-origin: 50px 50px;
    }

    .svg-beam-group {
      animation: balanceMotion 1.8s ease-in-out forwards;
      transform-origin: 50px 24px;
    }

    @keyframes balanceMotion {
      0% {
        transform: rotate(-10deg);
      }
      35% {
        transform: rotate(8deg);
      }
      65% {
        transform: rotate(-3deg);
      }
      85% {
        transform: rotate(1.5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    @keyframes introRotateRing {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes introScaleIn {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.96);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .intro-tag {
      display: inline-block;
      font-size: 0.72rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: #dfb15b;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .intro-title {
      font-family: 'Cinzel', Georgia, serif;
      font-size: clamp(1.8rem, 4vw, 2.4rem);
      letter-spacing: 0.12em;
      color: #ffffff;
      margin: 0.2rem 0;
      font-weight: 700;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
    }

    .intro-divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin: 1rem auto;
      width: 240px;
    }

    .divider-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, #c69234, transparent);
    }

    .divider-icon {
      color: #dfb15b;
      font-size: 1rem;
    }

    .intro-subtitle {
      font-size: 0.88rem;
      letter-spacing: 0.16em;
      color: #e2e8f0;
      margin-bottom: 0.35rem;
      font-weight: 500;
    }

    .intro-jurisdiction {
      font-size: 0.75rem;
      letter-spacing: 0.22em;
      color: #94a3b8;
      text-transform: uppercase;
    }

    .intro-progress-bar {
      width: 180px;
      height: 2px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
      margin: 2rem 0 1.2rem 0;
      overflow: hidden;
      position: relative;
    }

    .intro-progress-fill {
      width: 0%;
      height: 100%;
      background: linear-gradient(90deg, #c69234, #dfb15b);
      animation: progressSweep 1.8s ease-in-out forwards;
    }

    @keyframes progressSweep {
      0% { width: 0%; }
      50% { width: 65%; }
      100% { width: 100%; }
    }

    .intro-skip-btn {
      background: transparent;
      border: 1px solid rgba(198, 146, 52, 0.4);
      color: #dfb15b;
      padding: 0.4rem 1.1rem;
      border-radius: 4px;
      font-size: 0.76rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: inherit;
    }

    .intro-skip-btn:hover {
      background: rgba(198, 146, 52, 0.15);
      border-color: #dfb15b;
      color: #ffffff;
    }
  `;

  intro.appendChild(style);

  // Cerrar intro automáticamente tras la secuencia o al hacer click
  let isClosed = false;
  const closeIntro = () => {
    if (isClosed) return;
    isClosed = true;
    intro.classList.add('intro-hidden');
    setTimeout(() => {
      if (intro.parentNode) {
        intro.parentNode.removeChild(intro);
      }
      if (typeof onComplete === 'function') {
        onComplete();
      }
    }, 850);
  };

  // Temporizador de salida (2.2 segundos para disfrute sobrio sin cansar al usuario)
  const timer = setTimeout(closeIntro, 2200);

  // Permitir saltar con click
  intro.addEventListener('click', () => {
    clearTimeout(timer);
    closeIntro();
  });

  return intro;
}
