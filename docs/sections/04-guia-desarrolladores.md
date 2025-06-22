# Guía para Desarrolladores

## Arquitectura

### Tecnologías Core
1. **Frontend**
   - Next.js 13.4.19
   - React 18.2.0
   - Tailwind CSS 3.3.0
   - Radix UI Components
   - Embla Carousel
   - Lucide Icons

2. **Build & Deploy**
   - Node.js 16+
   - Yarn
   - Vercel (recomendado)

3. **Herramientas**
   - ESLint
   - Prettier
   - Tailwind Forms
   - Tailwind Typography
   - Tailwind Animate

### Estructura del Proyecto
```
/
├── src/
│   ├── components/
│   │   ├── common/       # Componentes compartidos (Header, Footer, Layout)
│   │   ├── sections/     # Secciones principales de páginas
│   │   │   ├── CaseStudy.jsx    # Carrusel de logos de clientes
│   │   │   ├── ContactForm.jsx  # Formulario de contacto
│   │   │   ├── FAQSection.jsx   # Preguntas frecuentes
│   │   │   ├── Features.jsx     # Características del servicio
│   │   │   ├── Hero.jsx        # Sección principal
│   │   │   ├── PricingPlans.jsx # Planes y precios
│   │   │   └── Stats.jsx       # Estadísticas y métricas
│   │   └── ui/          # Componentes UI base
│   │       ├── accordion.jsx   # Acordeón interactivo
│   │       ├── badge.jsx      # Etiquetas y badges
│   │       ├── button.jsx     # Botones estilizados
│   │       ├── carousel.jsx   # Carrusel personalizable
│   │       ├── input.jsx      # Campos de entrada
│   │       └── ...
│   ├── containers/      # Lógica de negocio
│   ├── lib/            # Utilidades y helpers
│   ├── pages/          # Rutas de Next.js
│   └── styles/         # Estilos globales
├── public/            # Assets estáticos
│   └── images/        # Imágenes y logos
│       └── logos/     # Logos de clientes
└── docs/             # Documentación
```

## Componentes Principales

### Carousel
El componente Carousel ha sido mejorado con las siguientes características:

```jsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Uso básico
<Carousel>
  <CarouselContent>
    <CarouselItem>Contenido 1</CarouselItem>
    <CarouselItem>Contenido 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

// Uso avanzado con opciones
<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  setApi={setApi}
  className="w-full"
>
  {/* ... */}
</Carousel>
```

Características:
- Navegación con teclado (←/→)
- Controles personalizables
- Soporte para orientación vertical/horizontal
- Autoplay configurable
- Pausa en hover
- Accesibilidad mejorada

### Button
El componente Button ahora soporta múltiples variantes y tamaños:

```jsx
import { Button } from "@/components/ui/button";

// Variantes
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Tamaños
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>
```

### Badge
El componente Badge para etiquetas y estados:

```jsx
import { Badge } from "@/components/ui/badge";

// Variantes
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

## Configuración de Tailwind

El archivo `tailwind.config.js` ha sido actualizado con nuevas características:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Animaciones personalizadas
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
  ],
}
```

## Variables de Entorno

Crear un archivo `.env.local` con las siguientes variables:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+573123456789
```

## Instalación y Desarrollo

1. **Clonar e Instalar**
```bash
git clone https://github.com/JuanPab10-DEV/Geanet-Site.git
cd Geanet-Site
yarn install
```

2. **Desarrollo Local**
```bash
yarn dev
```

3. **Construcción**
```bash
yarn build
yarn start
```

## Mejores Prácticas

1. **Componentes Client-Side**
- Usar "use client" en componentes interactivos
- Mantener los componentes UI en `/components/ui`
- Seguir el patrón de composición para secciones grandes

2. **Optimización de Imágenes**
- Usar el componente `Image` de Next.js
- Optimizar logos antes de subirlos
- Mantener las imágenes en `/public/images`

3. **Accesibilidad**
- Incluir atributos ARIA
- Asegurar navegación por teclado
- Mantener contraste adecuado

4. **Performance**
- Lazy loading de imágenes
- Componentes client/server separados
- Optimización de fuentes

## Contribución

1. Crear una rama para cada feature
2. Seguir las convenciones de commits
3. Documentar cambios importantes
4. Actualizar la documentación cuando sea necesario

## Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Embla Carousel](https://www.embla-carousel.com/) 