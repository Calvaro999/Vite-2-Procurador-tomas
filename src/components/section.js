export function Section({ id, contenido, className = '' }) {
  const section = document.createElement('section');
  section.id = id;
  section.classList.add('content-section');
  if (className) {
    section.classList.add(...className.split(' ').filter(Boolean));
  }

  // Insertar contenido HTML
  section.innerHTML = contenido;

  // Estilos encapsulados dentro del componente como indica el enunciado
  const style = document.createElement('style');
  style.textContent = `
    .content-section {
      position: relative;
      z-index: 2;
      padding: 5.5rem 1.5rem;
      scroll-margin-top: 80px;
      width: 100%;
      box-sizing: border-box;
      background: rgba(248, 250, 252, 0.78);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      transition: background-color 0.3s ease;
    }

    /* Variantes de sección para sobriedad institucional */
    .content-section.section-hero {
      padding: 7rem 1.5rem 5.5rem 1.5rem;
      background: radial-gradient(circle at 75% 20%, rgba(19, 34, 56, 0.94) 0%, rgba(6, 12, 24, 0.98) 100%);
      color: #f8fafc;
      overflow: hidden;
      border-bottom: 1px solid rgba(198, 146, 52, 0.25);
    }

    .content-section.section-alt {
      background: rgba(241, 245, 249, 0.78);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-top: 1px solid rgba(148, 163, 184, 0.25);
      border-bottom: 1px solid rgba(148, 163, 184, 0.25);
    }

    .content-section.section-dark {
      background: rgba(6, 12, 24, 0.94);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      color: #f8fafc;
      border-top: 1px solid rgba(198, 146, 52, 0.2);
    }

    /* Grid de tarjetas para servicios con porte corporativo */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .service-card {
      background: #ffffff;
      padding: 2.4rem 2rem;
      border-radius: 8px;
      border: 1px solid rgba(203, 213, 225, 0.85);
      box-shadow: 0 4px 16px rgba(6, 12, 24, 0.04);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .service-card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, #c69234, #dfb15b);
      transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 18px 36px -8px rgba(6, 12, 24, 0.12);
      border-color: rgba(198, 146, 52, 0.5);
    }

    .service-card:hover::after {
      width: 100%;
    }

    .service-icon {
      width: 52px;
      height: 52px;
      border-radius: 8px;
      background: rgba(198, 146, 52, 0.08);
      color: #c69234;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.4rem;
      border: 1px solid rgba(198, 146, 52, 0.25);
      transition: all 0.3s ease;
    }

    .service-card:hover .service-icon {
      background: #060c18;
      color: #dfb15b;
      border-color: #dfb15b;
      transform: scale(1.05);
    }

    .service-card h3 {
      font-size: 1.25rem;
      margin-bottom: 0.85rem;
      color: #060c18;
      letter-spacing: 0.01em;
    }

    .service-card p {
      font-size: 0.95rem;
      color: #475569;
      line-height: 1.7;
      margin-bottom: 1.4rem;
      flex-grow: 1;
    }

    .service-badge {
      display: inline-flex;
      font-size: 0.74rem;
      font-weight: 700;
      color: #a87924;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border-top: 1px solid rgba(226, 232, 240, 0.8);
      padding-top: 0.85rem;
    }

    /* Bloque Quienes Somos */
    .about-layout {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 3.5rem;
      align-items: center;
    }

    .about-highlight-box {
      background: #ffffff;
      padding: 2.5rem 2.2rem;
      border-radius: 8px;
      border: 1px solid rgba(198, 146, 52, 0.3);
      box-shadow: 0 12px 32px rgba(6, 12, 24, 0.06);
      position: relative;
    }

    .about-highlight-box::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #c69234, #dfb15b);
    }

    .about-list {
      list-style: none;
      padding: 0;
      margin: 1.5rem 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .about-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.85rem;
      font-size: 0.95rem;
      color: #334155;
      padding-bottom: 0.85rem;
      border-bottom: 1px dashed rgba(203, 213, 225, 0.8);
    }

    .about-list li:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    .about-list-icon {
      color: #c69234;
      flex-shrink: 0;
      font-size: 1.1rem;
    }

    /* FAQ Collapsible Institucional */
    .faq-container {
      max-width: 880px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .faq-item {
      background: #ffffff;
      border-radius: 6px;
      border: 1px solid rgba(203, 213, 225, 0.8);
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(6, 12, 24, 0.03);
      transition: all 0.25s ease;
    }

    .faq-item:hover {
      border-color: rgba(198, 146, 52, 0.45);
    }

    .faq-item.active {
      border-color: var(--gold-accent);
      box-shadow: 0 6px 18px rgba(198, 146, 52, 0.1);
    }

    .faq-question {
      width: 100%;
      text-align: left;
      padding: 1.35rem 1.75rem;
      background: transparent;
      border: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-family: inherit;
      font-size: 1.05rem;
      font-weight: 600;
      color: #060c18;
      gap: 1.25rem;
      transition: color 0.2s ease;
    }

    .faq-question:hover {
      color: #a87924;
    }

    .faq-question svg {
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      color: #c69234;
      flex-shrink: 0;
    }

    .faq-item.active .faq-question svg {
      transform: rotate(180deg);
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s ease;
      padding: 0 1.75rem;
      color: #475569;
      font-size: 0.96rem;
      line-height: 1.75;
      background: #fbfcfe;
    }

    .faq-item.active .faq-answer {
      max-height: 350px;
      padding: 0 1.75rem 1.6rem 1.75rem;
      border-top: 1px solid rgba(226, 232, 240, 0.8);
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
      background: #060c18;
      color: #ffffff;
      padding: 2.8rem 2.2rem;
      border-radius: 8px;
      border: 1px solid rgba(198, 146, 52, 0.35);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      gap: 1.85rem;
      position: relative;
    }

    .contact-info-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #c69234, #dfb15b);
    }

    .contact-info-card h3 {
      color: #ffffff;
      font-size: 1.5rem;
      margin-top: 0.8rem;
    }

    .contact-info-item {
      display: flex;
      align-items: flex-start;
      gap: 1.1rem;
    }

    .contact-info-icon {
      width: 44px;
      height: 44px;
      border-radius: 6px;
      background: rgba(198, 146, 52, 0.12);
      color: #dfb15b;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      border: 1px solid rgba(198, 146, 52, 0.25);
    }

    .contact-info-text strong {
      display: block;
      color: #cbd5e1;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.2rem;
    }

    .contact-info-text a, .contact-info-text span {
      color: #ffffff;
      font-size: 1.05rem;
      font-weight: 500;
    }

    .contact-info-text a:hover {
      color: #dfb15b;
    }

    .contact-form-container {
      background: #ffffff;
      padding: 2.8rem 2.4rem;
      border-radius: 8px;
      border: 1px solid rgba(203, 213, 225, 0.9);
      box-shadow: 0 12px 32px rgba(6, 12, 24, 0.05);
    }

    .form-group {
      margin-bottom: 1.35rem;
    }

    .form-group label {
      display: block;
      font-size: 0.84rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #334155;
      margin-bottom: 0.45rem;
    }

    .form-control {
      width: 100%;
      padding: 0.85rem 1.1rem;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      font-family: inherit;
      font-size: 0.95rem;
      transition: all 0.25s ease;
      background: #fbfcfe;
      color: #0f172a;
    }

    .form-control:focus {
      outline: none;
      border-color: #c69234;
      background: #ffffff;
      box-shadow: 0 0 0 3px rgba(198, 146, 52, 0.18);
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
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
        padding: 4.5rem 1.25rem;
      }
    }
  `;

  section.appendChild(style);

  // Inicializar interactividad de FAQs si existen en el contenido
  section.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item');
      if (parent) {
        const isActive = parent.classList.contains('active');
        // Cerrar otros
        section.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
        if (!isActive) {
          parent.classList.add('active');
        }
      }
    });
  });

  return section;
}
