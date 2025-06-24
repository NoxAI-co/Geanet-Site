# 🌐 Geanet Internet - Sitio Web Corporativo

<div align="center">
  <img src="public/Imagen Corporativa/logo_horizontal.svg" alt="Geanet Internet" width="300">
  
  **Proveedor de servicios de internet por fibra óptica en Colombia**
  
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript)](https://www.typescriptlang.org/)
</div>

---

## 📋 Descripción

Sitio web moderno y completamente funcional para **Geanet Internet**, empresa especializada en soluciones de conectividad simétrica por fibra óptica. El proyecto incluye páginas institucionales, sistema de PQRS, marco normativo completo y herramientas de contacto integradas.

## ✨ Características Principales

### 🎯 Páginas Implementadas
- **🏠 Inicio**: Hero section con información corporativa
- **💼 Servicios**: 4 planes de internet con precios y características
- **👥 Sobre Nosotros**: Misión, visión, valores y equipo
- **📞 Contacto**: Formulario avanzado con calendario de citas
- **📋 PQRS**: Sistema completo de solicitudes ciudadanas
- **📚 Normatividad**: 14 documentos legales organizados
- **📊 Indicadores**: Dashboard de métricas de calidad

### 🚀 Funcionalidades Avanzadas
- ✅ **Responsive Design**: Optimizado para móvil, tablet y desktop
- ✅ **Integración WhatsApp**: Botón flotante con mensajes predefinidos
- ✅ **Descarga Masiva**: ZIP automático con documentos normativos
- ✅ **Formularios Validados**: Con estados de carga y confirmación
- ✅ **SEO Optimizado**: Meta tags y estructura semántica
- ✅ **Animaciones Fluidas**: Transiciones con Framer Motion
- ✅ **Calendario Interactivo**: Para agendar reuniones
- ✅ **Marco Normativo**: Documentos legales organizados por categorías

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 14** - Framework React con SSR/SSG
- **React 18** - Biblioteca de interfaz de usuario
- **Tailwind CSS** - Framework de estilos utilitarios
- **shadcn/ui** - Componentes UI reutilizables

### Librerías Especializadas
- **Lucide React** - Iconos SVG optimizados
- **Framer Motion** - Animaciones y transiciones
- **date-fns** - Manejo de fechas con locale español
- **archiver** - Generación de archivos ZIP dinámicos

## 📊 Información del Negocio

### 🌐 Servicios de Internet
- **50/50 Mbps**: $50,000/mes
- **100/100 Mbps**: $70,000/mes  
- **200/200 Mbps**: $90,000/mes
- **300/300 Mbps**: $110,000/mes

### 📞 Contacto
- **Teléfono**: (604) 3222860
- **WhatsApp**: 3113556324
- **Email**: info@geanet.co

## 🚀 Instalación y Desarrollo

### Prerrequisitos
```bash
Node.js >= 16.0.0
yarn >= 1.22.0
```

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/usuario/geanet-site.git

# Instalar dependencias
cd geanet-site
yarn install
```

### Desarrollo
```bash
# Servidor de desarrollo
yarn dev

# Construir para producción
yarn build

# Iniciar servidor de producción
yarn start
```

## 📁 Estructura del Proyecto

```
geanet-site/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── common/         # Header, Footer, Layout
│   │   ├── sections/       # Secciones de páginas
│   │   └── ui/            # Componentes UI base
│   ├── config/            # Configuración del proyecto
│   ├── pages/             # Páginas de Next.js
│   │   └── api/           # API routes
│   └── styles/            # Estilos globales
├── public/                # Archivos estáticos
│   ├── documentos-normativos/  # PDFs legales
│   └── Imagen Corporativa/     # Logos y brand
└── docs/                  # Documentación completa
```

## 📚 Documentación

### 📖 Guías Disponibles
- [**Documentación Completa**](docs/README.md)
- [**Guía de Usuario**](docs/sections/01-guia-usuario.md)
- [**Guía de Edición**](docs/sections/02-guia-edicion.md)
- [**Guía de Ventas**](docs/sections/03-guia-ventas.md)
- [**Guía de Desarrolladores**](docs/sections/04-guia-desarrolladores.md)

## 🎨 Diseño y Branding

### Paleta de Colores
```css
/* Colores Corporativos */
--primary: #003366     /* Azul Oscuro */
--secondary: #006699   /* Azul Claro */
--accent: #00CC66      /* Verde */
--background: #FFFFFF  /* Blanco */
```

### Tipografía
- **Primaria**: System UI / San Francisco / Segoe UI
- **Secundaria**: Monospace para código

## 📋 Scripts Disponibles

```bash
# Desarrollo
yarn dev              # Servidor de desarrollo
yarn build            # Construir para producción
yarn start            # Servidor de producción

# Utilidades
yarn lint             # Linting con ESLint
yarn lint:fix         # Corregir errores de linting

# Documentos normativos (si se necesitan)
./download_normativos.sh    # Linux/Mac
./download_normativos.ps1   # Windows
```

## 🔧 Configuración

### Variables de Entorno
```env
# No se requieren variables de entorno
# Toda la configuración está en src/config/project-config.js
```

### Archivos de Configuración
- `next.config.js` - Configuración de Next.js
- `tailwind.config.js` - Configuración de Tailwind CSS
- `src/config/project-config.js` - Datos corporativos y configuración

## 📈 Funcionalidades Destacadas

### 🔗 Integración WhatsApp
- Botón flotante con animaciones
- Mensajes predefinidos por sección
- Detección de horarios de atención

### 📋 Sistema PQRS
- Formulario completo según normativa
- Tipos: Petición, Queja, Reclamo
- Adjuntos con preview
- Validación en tiempo real

### 📚 Marco Normativo
- 14 documentos organizados por categorías
- Descarga individual y masiva
- Generación automática de ZIP con índice
- Enlaces a entidades reguladoras

## 🤝 Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## 📄 Licencia

Este proyecto es propiedad de **Geanet Internet**. Todos los derechos reservados.

## 📞 Soporte

Para soporte técnico o consultas:
- **Email**: soporte@geanet.co
- **WhatsApp**: [3113556324](https://wa.me/573113556324)
- **Issues**: [GitHub Issues](https://github.com/usuario/geanet-site/issues)

---

<div align="center">
  <p><strong>Desarrollado con ❤️ para Geanet Internet</strong></p>
  <p>© 2024 Geanet Internet. Todos los derechos reservados.</p>
</div>
