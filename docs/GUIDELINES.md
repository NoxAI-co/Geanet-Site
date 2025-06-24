# 📄 Guía de Desarrollo - Geanet Internet

## 🎯 Reglas Generales del Proyecto

### 💰 Precios y Servicios
- Todos los precios se expresan en **pesos colombianos (COP)**
- Usar siempre la función `formatPrice` del archivo `src/config/project-config.js` para formatear precios

### 📱 Servicios Ofrecidos
```javascript
// Importar servicios desde src/config/project-config.js
import { SERVICES } from '@/config/project-config';
```

#### Internet Fibra Óptica
- 50/50 Mbps: $50,000/mes
- 100/100 Mbps: $70,000/mes
- 200/200 Mbps: $90,000/mes
- 300/300 Mbps: $110,000/mes

#### Instalación
- Contado: $90,000 (pago único)
- Diferido: $10,000/mes (12 meses)

#### Televisión
- 2 televisores: $10,000/mes

### 📞 Información de Contacto
```javascript
// Importar contactos desde src/config/project-config.js
import { CONTACT } from '@/config/project-config';
```

#### Teléfonos
- Fijo: (604) 3222860
- WhatsApp: 3113556324

#### Correos Electrónicos
- gerencia@geanet.co
- geanet.servicio@geanet.co
- info@geanet.co
- servicioalcliente@geanet.co

## 🎨 Guía de Estilos

### Paleta de Colores
```javascript
// Importar colores desde src/config/project-config.js
import { COLORS } from '@/config/project-config';
```

#### Colores Principales
- Primary: #003366 (Azul Oscuro)
- Secondary: #006699 (Azul Claro)
- Accent: #00CC66 (Verde)
- Background: #FFFFFF (Blanco)
- Text Primary: #000000 (Negro)
- Text Secondary: #555555 (Gris Oscuro)
- Warning: #FF6600 (Naranja)

### 📏 Reglas de Uso de Colores

1. **Color Primario (#003366)**
   - Encabezados principales
   - Botones principales
   - Menús de navegación

2. **Color Secundario (#006699)**
   - Botones secundarios
   - Enlaces
   - Estados hover
   - Íconos interactivos

3. **Color de Resalte (#00CC66)**
   - Botón de WhatsApp
   - CTAs importantes
   - Indicadores de éxito

4. **Color de Fondo (#FFFFFF)**
   - Fondo principal de la página
   - Áreas de contenido

5. **Colores de Texto**
   - Principal (#000000): Títulos y texto importante
   - Secundario (#555555): Descripciones y texto de apoyo

6. **Color de Advertencia (#FF6600)**
   - Mensajes de error
   - Alertas
   - Información urgente

## 🗺️ Estructura del Sitio
```javascript
// Importar secciones desde src/config/project-config.js
import { WEBSITE_SECTIONS } from '@/config/project-config';
```

### Secciones Principales
1. Inicio
2. Formulario PQRS
3. Normatividad / Regulaciones
4. Servicios
5. Sobre Nosotros
6. Contacto

### Elementos Fijos
- Botón de WhatsApp (siempre visible)
- Menú de navegación responsive
- Footer con información de contacto

## 📝 Guías Adicionales

### Idioma
- Todo el contenido debe estar en español
- Usar términos claros y comprensibles

### Diseño
- Mantener un diseño minimalista y limpio
- Asegurar buena legibilidad
- Mantener consistencia en espaciados y tipografía

### Accesibilidad
- Asegurar contraste adecuado
- Incluir textos alternativos en imágenes
- Mantener una jerarquía clara de encabezados

### Responsive
- Diseño adaptable a todos los dispositivos
- Menú hamburguesa en móviles
- Imágenes y contenido flexible 