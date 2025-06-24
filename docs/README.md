# 📚 Documentación - Geanet Internet

## 🌟 Descripción del Proyecto

Sitio web corporativo para **Geanet Internet**, empresa proveedora de servicios de internet por fibra óptica en Colombia. El sitio presenta información completa sobre planes de internet, servicios empresariales, marco normativo y canales de contacto.

## 🏗️ Arquitectura del Proyecto

### Tecnologías Utilizadas
- **Frontend**: Next.js 14 (React)
- **Styling**: Tailwind CSS + shadcn/ui
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form
- **Fechas**: date-fns con locale español
- **Archivos**: archiver (para ZIP de documentos)

### Estructura de Páginas
```
├── / (index)           # Página principal con hero y servicios
├── /servicios          # Planes de internet y precios
├── /sobre-nosotros     # Información corporativa
├── /contacto           # Formulario de contacto
├── /pqrs               # Sistema de PQRS
├── /normatividad       # Marco legal y documentos
└── /indicadores-servicio # Indicadores de calidad
```

## 📋 Funcionalidades Implementadas

### ✅ Páginas Principales
- [x] **Página Principal**: Hero section con información de Geanet
- [x] **Servicios**: 4 planes de internet simétricos por fibra óptica
- [x] **Sobre Nosotros**: Misión, visión, valores corporativos
- [x] **Contacto**: Formulario con calendario para agendar reuniones
- [x] **PQRS**: Sistema completo de solicitudes ciudadanas
- [x] **Normatividad**: 14 documentos legales organizados
- [x] **Indicadores**: 6 indicadores de calidad del servicio

### ✅ Componentes Especializados
- [x] **Header**: Navegación responsive con menú desplegable
- [x] **Footer**: Enlaces e información corporativa
- [x] **WhatsApp Button**: Botón flotante con animaciones
- [x] **Pricing Plans**: Tarjetas de planes con comparativas
- [x] **Quality Indicators**: Dashboard de métricas de servicio
- [x] **Contact Form**: Formulario con selector de fecha
- [x] **PQRS Form**: Formulario legal completo
- [x] **Document Cards**: Descarga organizada de PDFs

### ✅ Funcionalidades Avanzadas
- [x] **Descarga masiva**: ZIP con todos los documentos normativos
- [x] **Navegación intuitiva**: Menús responsive y breadcrumbs
- [x] **Integración WhatsApp**: Enlaces directos con mensajes predefinidos
- [x] **Formularios validados**: Con estados de carga y confirmación
- [x] **Diseño responsive**: Optimizado para móviles y desktop
- [x] **SEO optimizado**: Meta tags y estructura semántica

## 🗂️ Marco Normativo

El sitio incluye **14 documentos legales** organizados en 5 categorías:

### 📊 Estadísticas de Documentos
- **8 Resoluciones CRC** (2015-2018)
- **3 Leyes de la República** 
- **1 Decreto del Gobierno**
- **1 Acuerdo Normativo**
- **1 Política de Protección**

### 🔗 Funcionalidad de Descarga
- Documentos individuales en PDF
- Descarga masiva en ZIP con índice
- Estructura organizada por categorías
- README automático incluido

## 🎨 Diseño y UX

### Paleta de Colores Corporativos
- **Primary**: #003366 (Azul Oscuro)
- **Secondary**: #006699 (Azul Claro) 
- **Accent**: #00CC66 (Verde)
- **Background**: #FFFFFF (Blanco)

### Componentes UI Reutilizables
- Buttons con variantes
- Cards con efectos hover
- Badges y etiquetas
- Modals y popovers
- Carousels y acordeones
- Formularios consistentes

## 📱 Información de Contacto

### 📞 Teléfonos
- **Fijo**: (604) 3222860
- **WhatsApp**: 3113556324

### 📧 Correos Electrónicos
- **Gerencia**: gerencia@geanet.co
- **Servicio**: geanet.servicio@geanet.co
- **Info**: info@geanet.co
- **Atención**: servicioalcliente@geanet.co

## 🚀 Instrucciones de Desarrollo

### Instalación
```bash
yarn install
```

### Desarrollo
```bash
yarn dev
```

### Construcción
```bash
yarn build
```

### Deployment
```bash
yarn start
```

## 📈 Métricas y Rendimiento

### Indicadores de Calidad Implementados
1. **Velocidad real vs contratada**: ≥ 90%
2. **Tiempo promedio de instalación**: ≤ 48 horas
3. **Tiempo de respuesta PQRS**: ≤ 10 días hábiles
4. **Tasa de satisfacción del cliente**: ≥ 85%
5. **Disponibilidad de red**: ≥ 99.5%
6. **Tiempos de atención soporte técnico**: ≤ 15 minutos

## 🔧 Configuración

### Variables de Entorno Requeridas
```env
# No hay variables de entorno requeridas actualmente
# Toda la configuración está en src/config/project-config.js
```

### Configuración del Proyecto
- **next.config.js**: Configuración de Next.js
- **tailwind.config.js**: Configuración de Tailwind CSS
- **src/config/project-config.js**: Configuración de datos corporativos

## 📝 Notas de Implementación

### Decisiones Técnicas
- Se eligió Next.js por su renderizado híbrido y SEO
- Tailwind CSS para diseño responsive rápido
- shadcn/ui para componentes consistentes
- date-fns con locale español para fechas
- archiver para generación de ZIP dinámico

### Optimizaciones Aplicadas
- Lazy loading de imágenes
- Componentes optimizados con React.memo
- CSS purging automático con Tailwind
- Compresión de archivos ZIP
- Animaciones con GPU acceleration

---

**Última actualización**: Diciembre 2024
**Versión**: 1.0.0
**Estado**: ✅ Producción Ready 