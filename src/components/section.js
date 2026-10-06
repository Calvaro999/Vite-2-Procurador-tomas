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
