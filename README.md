<div align="center">

# ⚖️ Gabriel Tomás Gili · Procurador de los Tribunales
### Modernización de Sitio Web Corporativo con Vite y Componentes Modulares

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Semántico-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla_Moderna-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![Colegiado](https://img.shields.io/badge/ICPIB-Col._Nº_120-c69234?style=for-the-badge)](https://www.procuradoresdebaleares.es/)
[![Ubicación](https://img.shields.io/badge/Palma_de_Mallorca-Illes_Balears-0b1528?style=for-the-badge)](https://maps.google.com)

<br/>

<p align="center">
  <b>Rediseño integral y profesional para el despacho de representación procesal en Palma de Mallorca, Manacor e Inca.</b><br/>
  Actualización tecnológica de <a href="https://www.procuradortomas.com/" target="_blank">procuradortomas.com</a> migrada a una arquitectura modular basada en componentes Vanilla JS y optimizada con Vite.
</p>

[Ver Características](#-características-principales) •
[Arquitectura](#-arquitectura-de-componentes) •
[Estructura](#-estructura-del-proyecto) •
[Instalación](#-instalación-y-ejecución) •
[Despliegue](#-despliegue-en-github-pages)

---

</div>

## 📖 Descripción del Proyecto

Este repositorio contiene la reconstrucción moderna del portal web corporativo de **Gabriel Tomás Gili**, Procurador de los Tribunales colegiado nº 120 en el Ilustre Colegio de Procuradores de las Islas Baleares (ICPIB).

El objetivo del proyecto es sustituir el diseño heredado por una plataforma de alto rendimiento, estética jurídica contemporánea (tonos *Royal Navy* `#0b1528` y *Gold Accent* `#c69234`), navegación responsive con menú móvil, formularios interactivos y encapsulamiento de estilos por componente siguiendo las pautas de desarrollo con **Vite**.

---

## 🌟 Características Principales

- ⚡ **Rendimiento Ultrarrápido con Vite**: Arranque instantáneo del entorno de desarrollo mediante módulos ES nativos (HMR) y empaquetado de producción de alta eficiencia.
- 🧩 **Arquitectura Modular basada en Componentes**:
  - `Navbar.js`: Barra superior fija con efecto *glassmorphism*, enlaces ancla, acceso a llamada rápida y botón *hamburger* animado para dispositivos móviles.
  - `Section.js`: Factoría de secciones reutilizables con soporte de identificadores (`id`), contenido HTML inyectado y estilos encapsulados.
  - `main.js`: Controlador orquestador que compone la vista mediante `app.append(...)`.
- 📱 **Diseño 100% Adaptativo (Responsive Design)**: Experiencia fluida en smartphones, tablets y pantallas de escritorio.
- ⚖️ **Preguntas Frecuentes Interactivas (FAQ Accordion)**: Acordeón sin librerías pesadas externas para resolver dudas sobre plazos, aranceles y tramitación de despachos.
- 📩 **Formulario de Contacto Funcional**: Validación integrada, feedback interactivo y selector de partido judicial (*Palma*, *Manacor*, *Inca*).
- 🔗 **Integración Directa**: Botones de llamada inmediata (`+34 971 77 05 74`) y chat oficial de WhatsApp (`+34 609 64 92 24`).
- 🔍 **Optimización SEO y Semántica**: Títulos descriptivos, metadatos estructurados para tribunales de Baleares y jerarquía accesible.

---

## 🔄 Comparativa: Web Antigua vs. Nueva Versión

| Aspecto | Versión Original (`procuradortomas.com`) | Nueva Versión en Vite |
| :--- | :--- | :--- |
| **Tecnología** | HTML estático con Materialize CSS v1 desactualizado | **Vite + JavaScript ES6+ Modular** |
| **Arquitectura** | Código monolítico en archivos individuales | **Componentes independientes reutilizables** |
| **Estilos** | CSS acoplado y mezclas de fuentes | **Sistema de diseño jurídico propio (Vanilla CSS + Tokens)** |
| **Móvil / Responsive** | Menú lateral dependiente de jQuery/Materialize | **Burger Menu interactivo nativo sin dependencias** |
| **Carga y Rendimiento** | Múltiples peticiones de librerías externas | **Bundle optimizado (<45 KB gzip)** |
| **Contacto** | Iframe externo incrustado de Google Forms | **Formulario nativo integrado y accesos rápidos (Tel / WhatsApp)** |

---

## 🧩 Arquitectura de Componentes

Siguiendo el enunciado técnico, la aplicación se ensambla mediante funciones generadoras de DOM:

```javascript
// src/main.js
import { Navbar } from './components/navbar.js';
import { Section } from './components/section.js';

const app = document.querySelector('#app') || document.body;

app.append(
  Navbar(),
  Section({ id: 'inicio', contenido: '...' }),
  Section({ id: 'quienessomos', contenido: '...' }),
  Section({ id: 'servicios', contenido: '...' }),
  Section({ id: 'preguntas', contenido: '...' }),
  Section({ id: 'contacto', contenido: '...' }),
  footer
);
```

### Encapsulación de Estilos
Cada componente (`Navbar`, `Section`) inyecta su propio nodo `<style>` con reglas de especificidad local, cumpliendo el principio de encapsulamiento e independencia modular.

---

## 📂 Estructura del Proyecto

```text
Vite-2-Procurador-tomas/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Despliegue automatizado en GitHub Pages
├── public/
│   └── images/
│       └── hero_procurador.jpg # Fotografía corporativa del despacho
├── src/
│   ├── components/
│   │   ├── navbar.js           # Componente de navegación y menú hamburguesa
│   │   └── section.js          # Componente reutilizable para secciones
│   ├── styles/
│   │   └── estilos.css         # Tokens de diseño, reset y tipografías globales
│   └── main.js                 # Punto de entrada y orquestador con app.append()
├── .gitignore                  # Exclusión de node_modules y ficheros de build
├── index.html                  # Plantilla raíz con metadatos SEO
├── package.json                # Configuración de dependencias y scripts
├── README.md                   # Documentación principal del repositorio
└── vite.config.js              # Configuración de Vite con base relativa
```

---

## 🚀 Instalación y Ejecución

### Requisitos Previos
- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- Gestor de paquetes `npm`

### 1. Clonar el repositorio
```bash
git clone https://github.com/Calvaro999/Vite-2-Procurador-tomas.git
cd Vite-2-Procurador-tomas
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador la URL indicada en la consola:
👉 `http://localhost:5173/`

### 4. Generar la compilación para producción
```bash
npm run build
```
Los archivos optimizados y minificados se generarán en la carpeta `dist/`.

### 5. Probar la versión de producción localmente
```bash
npm run preview
```

---

## 🌐 Despliegue en GitHub Pages

El proyecto incluye un flujo de trabajo automatizado con **GitHub Actions** (`.github/workflows/deploy.yml`) y la directiva `base: './'` en `vite.config.js`.

Para activarlo en GitHub:
1. Ve a la pestaña **Settings** de tu repositorio en GitHub.
2. En el menú lateral izquierdo, haz clic en **Pages**.
3. En la sección **Build and deployment > Source**, selecciona **GitHub Actions**.
4. ¡Listo! Cada vez que hagas `git push` a tu rama principal (`main`, `master` o `Mejoras1`), GitHub compilará y desplegará la web automáticamente.

---

## 🏛️ Ámbito Judicial y Cobertura

- **Partidos Judiciales Principales:**
  - Partido Judicial nº 1: **Palma de Mallorca**
  - Partido Judicial nº 2: **Inca**
  - Partido Judicial nº 3: **Manacor**
- **Servicios:**
  - Tramitación y presentación de despachos judiciales (exhortos, oficios, mandamientos).
  - Práctica directa de actos de comunicación procesal (notificaciones, citaciones y emplazamientos).
  - Servicio Integral: Control diario de vencimientos y señalamientos.
  - Sustituciones procesales y comparecencias en sede judicial.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más información.

---

<div align="center">
  <sub>Desarrollado como proyecto de modernización web con Vite y Vanilla JavaScript Components.</sub>
</div>
