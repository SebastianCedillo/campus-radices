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
│       ├── Logo.jsx            # Logo SVG del campus
│       ├── MissionVision.jsx   # Sección Misión y Visión (#nosotros)
│       ├── CorporateValues.jsx # Sección Valores que guían el proyecto
│       ├── HowWeSupport.jsx    # Sección ¿Por qué planificar? / Prever es un acto de amor
│       ├── Services.jsx        # Sección Servicios proyectados (#servicios)
│       ├── MemorialSpaces.jsx  # Sección Espacios memoriales (#espacios)
│       ├── PreventivePlans.jsx # Sección Planes funerarios prepagados (#planes)
│       ├── LegalProcedures.jsx # Sección Trámites legales
│       └── ContactSection.jsx  # Sección Contacto con formulario (#contacto)
├── public/
│   └── images/
│       ├── hero-bg.jpg                  # Foto fondo del hero
│       └── servicios/                   # Fotos de cada servicio (9 imágenes)
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

---

## Despliegue

El proyecto se despliega automáticamente en **Vercel** al hacer push a la rama `main`.

```bash
git add .
git commit -m "descripción del cambio"
git push origin main
```

Vercel detecta el push y despliega en ~60 segundos.

---

## Datos de contacto (producción)

- **WhatsApp / Teléfono:** +593 99 948 2328
- **Email:** ventas@campusradices.com
- **Instagram:** [@campusradices](https://www.instagram.com/campusradices/)
- **Emergencias:** 24/7

---

## Pendiente del cliente

- [ ] Fotos reales para servicios (`public/images/servicios/`)
- [ ] Dirección física del campus
- [ ] Links oficiales de Facebook y TikTok
- [ ] Conectar formulario de contacto a un servicio de email (Resend, EmailJS, etc.)
