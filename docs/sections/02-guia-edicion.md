# Guía de Edición

## Requisitos Previos

### Software Necesario
1. **Editor de Código**
   - Visual Studio Code (recomendado)
   - Extensiones recomendadas:
     - ES7 React Snippets
     - Tailwind CSS IntelliSense
     - Prettier
     - ESLint

2. **Node.js**
   - Versión 14.0.0 o superior
   - npm o yarn (preferido)

3. **Git**
   - Última versión estable
   - Configuración básica

4. **Navegador**
   - Chrome (recomendado)
   - DevTools habilitado

### Conocimientos Requeridos
- HTML básico
- CSS básico
- JavaScript básico
- React fundamentos
- Git básico

## Estructura de Archivos

### Carpetas Principales
```
/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── sections/
│   │   └── ui/
│   ├── containers/
│   ├── pages/
│   └── styles/
├── public/
│   └── images/
└── docs/
```

### Descripción de Carpetas
1. **src/components/**
   - Componentes reutilizables
   - Organizados por tipo y función
   - Fácil de mantener y actualizar

2. **src/containers/**
   - Lógica de negocio
   - Manejo de estado
   - Conexión con APIs

3. **src/pages/**
   - Rutas de la aplicación
   - Composición de componentes
   - Configuración de páginas

4. **public/images/**
   - Recursos estáticos
   - Imágenes optimizadas
   - Assets públicos

## Estructura de Componentes

### 1. Componentes de Sección

#### CaseStudy (Carrusel de Clientes)
```jsx
// src/components/sections/CaseStudy.jsx
<CaseStudy />
```
Características:
- Carrusel automático de logos
- Pausa al hover
- Navegación manual
- Responsive en todos los dispositivos

#### Hero (Sección Principal)
```jsx
// src/components/sections/Hero.jsx
<Hero />
```
Elementos editables:
- Título principal
- Subtítulo
- Botones de acción
- Imagen de fondo

#### Features (Características)
```jsx
// src/components/sections/Features.jsx
<Features />
```
Personalización:
- Iconos de características
- Títulos y descripciones
- Layout y disposición

### 2. Componentes UI

#### Button
```jsx
// src/components/ui/button.jsx
<Button variant="default" size="lg">
  Texto del Botón
</Button>
```
Variantes disponibles:
- default
- destructive
- outline
- secondary
- ghost
- link

Tamaños:
- default
- sm
- lg
- icon

#### Badge
```jsx
// src/components/ui/badge.jsx
<Badge variant="default">
  Estado
</Badge>
```
Variantes:
- default
- secondary
- destructive
- outline

#### Carousel
```jsx
// src/components/ui/carousel.jsx
<Carousel>
  <CarouselContent>
    <CarouselItem>
      Contenido
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```
Opciones:
- Autoplay
- Loop
- Velocidad
- Controles de navegación

## Personalización

### 1. Estilos Globales
Archivo: `src/styles/globals.css`
```css
:root {
  --primary: 220 14% 96%;
  --secondary: 220 14% 90%;
  /* Otros colores base */
}
```

### 2. Configuración de Tema
Archivo: `tailwind.config.js`
```javascript
theme: {
  extend: {
    colors: {
      primary: {...},
      secondary: {...},
    },
    animation: {
      "fade-in": "fade-in 0.2s ease-out",
    },
  },
}
```

### 3. Variables de Entorno
Archivo: `.env.local`
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+573123456789
```

## Guía de Edición

### 1. Logos de Clientes
Ubicación: `/public/images/logos/`
- Formato: PNG o SVG
- Tamaño recomendado: 200x100px
- Fondo transparente

### 2. Contenido de Secciones

#### Hero
```jsx
const heroContent = {
  title: "Tu Título Principal",
  subtitle: "Subtítulo descriptivo",
  cta: {
    primary: "Botón Principal",
    secondary: "Botón Secundario"
  }
};
```

#### Features
```jsx
const features = [
  {
    icon: "IconComponent",
    title: "Título de Característica",
    description: "Descripción detallada"
  }
];
```

### 3. Formularios

#### Contacto
```jsx
const formFields = [
  {
    name: "nombre",
    label: "Nombre Completo",
    type: "text",
    required: true
  }
];
```

## Mejores Prácticas

### 1. Imágenes
- Optimizar antes de subir
- Usar formatos modernos (WebP)
- Mantener relación de aspecto
- Incluir alt text descriptivo

### 2. Contenido
- Mantener consistencia en el tono
- Usar títulos claros y concisos
- Incluir llamadas a la acción
- Mantener textos actualizados

### 3. Rendimiento
- Comprimir imágenes
- Lazy load cuando sea posible
- Minimizar JavaScript
- Optimizar fuentes

## Mantenimiento

### 1. Actualizaciones Regulares
- Revisar enlaces
- Actualizar contenido
- Verificar formularios
- Mantener logos actualizados

### 2. Backups
- Contenido
- Imágenes
- Configuración
- Base de datos

### 3. Monitoreo
- Analytics
- Rendimiento
- Enlaces rotos
- Formularios

## Seguridad

### 1. Acceso
- Usar contraseñas seguras
- Habilitar 2FA
- Mantener accesos limitados
- Registrar actividad

### 2. Contenido
- Validar entradas
- Sanitizar HTML
- Prevenir XSS
- Proteger formularios

## Soporte

### 1. Documentación
- Mantener guías actualizadas
- Documentar cambios
- Registrar problemas
- Soluciones comunes

### 2. Contacto
- Soporte técnico
- Emergencias
- Mantenimiento
- Actualizaciones

## Cómo Editar Contenido

### Textos y Contenido
1. **Sección Hero**
   ```jsx
   // src/components/sections/Hero.jsx
   <h1>Título Principal</h1>
   <p>Descripción...</p>
   ```

2. **Características**
   ```jsx
   // src/components/sections/Features.jsx
   const features = [
     {
       title: "Característica 1",
       description: "Descripción..."
     }
   ];
   ```

3. **Precios**
   ```jsx
   // src/components/sections/PricingPlans.jsx
   const plans = [
     {
       name: "Plan Básico",
       price: "99",
       features: []
     }
   ];
   ```

### Imágenes
1. **Agregar Nueva Imagen**
   - Colocar en `/public/images/`
   - Usar formato optimizado
   - Nombrar descriptivamente

2. **Actualizar Imagen**
   ```jsx
   <Image
     src="/images/nombre.jpg"
     alt="Descripción"
     width={800}
     height={600}
   />
   ```

### Enlaces y Botones
1. **Navegación**
   ```jsx
   // src/components/common/Header.jsx
   const navigation = [
     { name: "Inicio", href: "/" }
   ];
   ```

2. **Botones de Acción**
   ```jsx
   <Button
     variant="primary"
     onClick={handleAction}
   >
     Texto del Botón
   </Button>
   ```

## Cómo Personalizar Estilos

### Colores
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      primary: "#color",
      secondary: "#color"
    }
  }
}
```

### Tipografía
```css
/* styles/globals.css */
@import url('https://fonts.googleapis.com/css2?family=...');

.custom-font {
  font-family: 'Nombre', sans-serif;
}
```

### Componentes UI
```jsx
// src/components/ui/button.jsx
export const Button = {
  variants: {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-black"
  }
}
```

## Proceso de Desarrollo

### Local
1. Clonar repositorio
2. Instalar dependencias
3. Ejecutar en desarrollo
4. Realizar cambios
5. Probar localmente

### Producción
1. Construir proyecto
2. Probar build
3. Desplegar cambios
4. Verificar en vivo
5. Monitorear rendimiento

## Solución de Problemas

### Errores Comunes
1. **Dependencias**
   - `yarn install`
   - Limpiar caché
   - Actualizar packages

2. **Compilación**
   - Verificar sintaxis
   - Revisar imports
   - Limpiar build

3. **Estilos**
   - Purgar CSS
   - Verificar clases
   - Revisar especificidad 