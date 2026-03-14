# Campus Radices — Sitio Web

Sitio web institucional para **Campus Radices**, proyecto de planificación funeraria responsable en Esmeraldas, Ecuador.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 16 | Framework (App Router) |
| React | 19 | UI |
| Tailwind CSS | 3 | Estilos |
| Framer Motion | 12 | Animaciones |
| Lucide React | 0.577 | Íconos |
| Sharp | — | Procesamiento de imágenes |

---

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:3000)
npm run dev

# Build de producción
npm run build

# Iniciar en producción
npm start
```

---

## Estructura del proyecto

```
campus-radices/
├── app/
│   ├── layout.jsx              # Root layout (Header + Footer + metadata SEO)
│   ├── page.jsx                # Página principal (Hero + todas las secciones)
│   └── components/
│       ├── Header.jsx          # Navbar fijo con hide-on-scroll y menú mobile
│       ├── Footer.jsx          # Pie de página con links y redes sociales
│       ├── BrandMessage.jsx    # Sección Nuestra razón de ser
│       ├── MissionVision.jsx   # Sección Quiénes somos
│       ├── CorporateValues.jsx # Sección Valores que guían el proyecto
│       ├── TrustSection.jsx    # Sección Confianza y respaldo
│       ├── CampusPlan.jsx      # Sección Plano del campus interactivo
│       ├── ClubFundador.jsx    # Sección Club Fundador
│       ├── HowWeSupport.jsx    # Sección ¿Cómo funciona la previsión?
│       ├── Services.jsx        # Sección Servicios exequiales
│       ├── MemorialSpaces.jsx  # Sección Espacios memoriales
│       ├── PreventivePlans.jsx # Sección Planes de previsión
│       ├── LegalProcedures.jsx # Sección Trámites legales
│       └── ContactSection.jsx  # Sección Contacto
├── public/
│   └── images/
│       ├── fondo.jpeg                   # Fondo del hero
│       ├── logo-transparente.png        # Logo icono (header y hero)
│       ├── logo_campus_radices.png      # Logo completo
│       ├── fundador-nuevo.png           # Imagen Club Fundador
│       ├── plano-hd.webp                # Plano del campus
│       ├── familia_emocional.png        # Imagen sección BrandMessage
│       └── familia_mensaje.png          # Imagen sección BrandMessage
├── styles/
│   └── globals.css             # Google Fonts + Tailwind base
├── tailwind.config.js          # Paleta de colores, tipografía y sombras custom
└── next.config.js
```

---

## Paleta de colores

| Token | Hex | Uso |
|---|---|---|
| `radices-darker` | `#1e3d0f` | Verde muy oscuro — navbar, headings principales |
| `radices-dark` | `#4a7d3e` | Verde oscuro — fondos alternos |
| `radices-mid` | `#5a8e2a` | Verde medio — hover states |
| `radices-light` | `#8cc543` | Verde claro — acentos, CTAs, links |
| `radices-brown` | `#8b6535` | Marrón — detalles de raíces |
| `radices-gray` | `#f5f5f0` | Gris cálido — fondos de secciones alternas |
| `radices-cream` | `#faf9f5` | Blanco cálido — fondo general del body |
| `radices-text` | `#333333` | Gris oscuro — texto del cuerpo |

---

## Tipografía

- **Títulos / Display:** `Lora` (serif) — clase Tailwind `font-display`
- **Cuerpo / Body:** `Crimson Text` (serif) — clase Tailwind `font-body`

Ambas fuentes se cargan desde Google Fonts en `styles/globals.css`.
