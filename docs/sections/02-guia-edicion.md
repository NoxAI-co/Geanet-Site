# Guía de Edición

Esta guía proporciona instrucciones detalladas para editar y mantener el sitio web de Geanet.

## Estructura del Proyecto

```
/
├── src/
│   ├── components/
│   │   ├── common/       # Componentes compartidos
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── WhatsAppButton.jsx
│   │   ├── sections/     # Secciones principales
│   │   │   ├── ClientsCarousel.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── FAQSection.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── PricingPlans.jsx
│   │   │   └── Stats.jsx
│   │   └── ui/          # Componentes UI base
│   │       ├── accordion.jsx
│   │       ├── badge.jsx
│   │       ├── button.jsx
│   │       ├── carousel.jsx
│   │       └── input.jsx
│   ├── containers/      # Lógica de páginas
│   ├── lib/            # Utilidades
│   ├── pages/          # Rutas
│   └── styles/         # Estilos globales
└── public/            # Assets estáticos
```

## Edición de Contenido

### 1. Sección Hero

El componente `Hero.jsx` contiene:
- Título principal
- Subtítulo
- Botón de llamada a la acción
- Imagen de fondo

```jsx
// src/components/sections/Hero.jsx
export default function Hero() {
  return (
    <section className="relative h-screen">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            {/* Editar título aquí */}
            Soluciones Tecnológicas para tu Empresa
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            {/* Editar subtítulo aquí */}
            Optimiza tus procesos con nuestras soluciones personalizadas
          </p>
          <Button className="mt-8" size="lg">
            {/* Editar texto del botón aquí */}
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
}
```

### 2. Sección Features

El componente `Features.jsx` muestra las características principales:
- Título de la sección
- Lista de características
- Iconos y descripciones

```jsx
// src/components/sections/Features.jsx
const features = [
  {
    title: "Consultoría IT",
    description: "Asesoramiento experto para optimizar tus sistemas",
    icon: <ComputerIcon className="h-6 w-6" />,
  },
  // Agregar más características aquí
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 3. Sección Clientes

El componente `ClientsCarousel.jsx` gestiona el carrusel de logos:
- Logos de clientes
- Movimiento automático
- Transiciones suaves

```jsx
// src/components/sections/ClientsCarousel.jsx
const clients = [
  {
    name: "Cliente 1",
    logo: "/images/logos/client1.png",
  },
  // Agregar más clientes aquí
];

export default function ClientsCarousel() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestros Clientes
        </h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent>
            {clients.map((client) => (
              <CarouselItem key={client.name}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
```

### 4. Sección FAQ

El componente `FAQSection.jsx` organiza las preguntas frecuentes:
- Categorías
- Preguntas y respuestas
- Acordeón interactivo

```jsx
// src/components/sections/FAQSection.jsx
const faqs = [
  {
    question: "¿Qué servicios ofrecen?",
    answer: "Ofrecemos consultoría IT, desarrollo de software...",
  },
  // Agregar más preguntas aquí
];

export default function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Preguntas Frecuentes
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <Accordion key={faq.question} type="single" collapsible>
              <AccordionItem value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 5. Sección Precios

El componente `PricingPlans.jsx` muestra los planes disponibles:
- Planes y precios
- Características incluidas
- Botones de acción

```jsx
// src/components/sections/PricingPlans.jsx
const plans = [
  {
    name: "Básico",
    price: "99",
    features: [
      "Característica 1",
      "Característica 2",
      // Agregar más características
    ],
  },
  // Agregar más planes aquí
];

export default function PricingPlans() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Planes y Precios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="p-6">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>
                  ${plan.price}/mes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Seleccionar Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## Estilos y Temas

### Colores
Los colores del tema se definen en `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // ... más colores
      },
    },
  },
};
```

### Tipografía
Las fuentes y estilos de texto se configuran en `globals.css`:

```css
@layer base {
  :root {
    --font-sans: "Inter", sans-serif;
    
    /* Tamaños de texto */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;
  }
}
```

## Imágenes y Assets

### Optimización
1. Comprimir imágenes antes de subirlas
2. Usar formatos modernos (WebP)
3. Proporcionar dimensiones correctas
4. Incluir texto alternativo

### Organización
```
public/
  ├── images/
  │   ├── logos/      # Logos de clientes
  │   ├── icons/      # Iconos personalizados
  │   ├── hero/       # Imágenes de hero
  │   └── features/   # Imágenes de características
  └── fonts/         # Fuentes web
```

## Mejores Prácticas

### SEO
1. Usar títulos descriptivos
2. Incluir meta descripciones
3. Optimizar imágenes
4. Estructura semántica

### Accesibilidad
1. Textos alternativos
2. Contraste adecuado
3. Navegación por teclado
4. ARIA labels

### Performance
1. Lazy loading
2. Optimización de assets
3. Caché apropiado
4. Code splitting

## Control de Versiones

### Ramas
- `main`: Producción
- `develop`: Desarrollo
- `feature/*`: Nuevas características

### Commits
Seguir [Conventional Commits](https://www.conventionalcommits.org/):
```
<tipo>[alcance opcional]: <descripción>

[cuerpo opcional]

[pie opcional]
```

### Pull Requests
1. Crear desde `feature/*` a `develop`
2. Incluir descripción detallada
3. Agregar screenshots si hay cambios visuales
4. Esperar revisión y aprobación 