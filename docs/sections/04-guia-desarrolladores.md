# Guía para Desarrolladores

## Arquitectura

### Tecnologías Core
1. **Frontend**
   - Next.js 13.4.19
   - React 18.2.0
   - Tailwind CSS 3.3.0
   - Shadcn/ui Components
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
│   │   │   ├── ClientsCarousel.jsx # Carrusel de logos de clientes
│   │   │   ├── ContactForm.jsx     # Formulario de contacto
│   │   │   ├── FAQSection.jsx      # Preguntas frecuentes
│   │   │   ├── Features.jsx        # Características del servicio
│   │   │   ├── Hero.jsx           # Sección principal
│   │   │   ├── PricingPlans.jsx    # Planes y precios
│   │   │   └── Stats.jsx          # Estadísticas y métricas
│   │   └── ui/          # Componentes UI base (shadcn/ui)
│   │       ├── accordion.jsx   # Acordeón interactivo
│   │       ├── badge.jsx      # Etiquetas y badges
│   │       ├── button.jsx     # Botones estilizados
│   │       ├── carousel.jsx   # Carrusel personalizable
│   │       ├── input.jsx      # Campos de entrada
│   │       └── ...
│   ├── containers/      # Lógica de negocio y layout de páginas
│   ├── lib/            # Utilidades y helpers
│   ├── pages/          # Rutas de Next.js
│   └── styles/         # Estilos globales
├── public/            # Assets estáticos
│   └── images/        # Imágenes y logos
│       └── logos/     # Logos de clientes
└── docs/             # Documentación
```

## Convenciones de Desarrollo

### Control de Versiones

1. **Ramas Principales**
   - `main`: Rama de producción
   - `develop`: Rama de desarrollo

2. **Ramas de Feature**
   - Formato: `feature/nombre-descriptivo`
   - Ejemplos:
     - `feature/carousel`
     - `feature/features`
     - `feature/faq`
     - `feature/pricing`
     - `feature/statistics`

3. **Commits**
   Seguimos [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   <tipo>[alcance opcional]: <descripción>
   
   [cuerpo opcional]
   
   [pie opcional]
   ```
   
   Tipos principales:
   - `feat`: Nueva característica
   - `fix`: Corrección de errores
   - `docs`: Cambios en documentación
   - `style`: Cambios que no afectan el código
   - `refactor`: Refactorización de código
   - `perf`: Mejoras de rendimiento
   - `test`: Cambios en tests
   - `chore`: Cambios en build/herramientas

4. **Pull Requests**
   - Título: Seguir convención de commits
   - Descripción: Detallada y clara
   - Screenshots: Para cambios visuales
   - Reviewers: Asignar apropiadamente
   - Branches: Crear desde `develop`

## Componentes Principales

### Carousel
El componente ClientsCarousel implementa un carrusel infinito con movimiento suave:

```jsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ClientsCarousel = () => {
  const [api, setApi] = useState();

  useEffect(() => {
    if (!api) return;

    // Configuración de movimiento suave
    const scrollNext = () => {
      api.scrollNext({
        duration: 3000,
        easing: (t) => t,
      });
    };

    const interval = setInterval(scrollNext, 3000);
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "center",
        loop: true,
        dragFree: true,
      }}
    >
      <CarouselContent>
        {/* Items del carrusel */}
      </CarouselContent>
    </Carousel>
  );
};
```

### Button
Componente Button con variantes y tamaños:

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
Componente Badge para etiquetas y estados:

```jsx
import { Badge } from "@/components/ui/badge";

// Variantes
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

## Configuración de Tailwind

El archivo `tailwind.config.js`:

```javascript
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

## Variables de Entorno

Crear un archivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
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

1. **Componentes**
   - Usar "use client" en componentes interactivos
   - Mantener componentes UI en `/components/ui`
   - Seguir el patrón de composición
   - Documentar props con JSDoc

2. **Optimización**
   - Usar Next.js Image para imágenes
   - Implementar lazy loading
   - Optimizar assets estáticos
   - Separar componentes client/server

3. **Accesibilidad**
   - Incluir atributos ARIA
   - Asegurar navegación por teclado
   - Mantener contraste adecuado
   - Textos alternativos para imágenes

4. **Performance**
   - Minimizar JavaScript
   - Optimizar fuentes web
   - Usar caché apropiadamente
   - Implementar loading states

## Flujo de Trabajo

1. Crear rama desde `develop`
2. Implementar cambios
3. Seguir convenciones de commits
4. Crear PR a `develop`
5. Esperar revisión y aprobación
6. Merge a `develop`
7. Periódicamente, merge a `main`

## Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Embla Carousel](https://www.embla-carousel.com/)
- [Conventional Commits](https://www.conventionalcommits.org/) 