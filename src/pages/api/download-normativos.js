import fs from 'fs';
import path from 'path';
import archiver from 'archiver';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Ruta a los documentos normativos
    const normativosPath = path.join(process.cwd(), 'public', 'documentos-normativos');
    
    // Verificar que la carpeta existe
    if (!fs.existsSync(normativosPath)) {
      return res.status(404).json({ message: 'Documentos normativos no encontrados' });
    }

    // Configurar headers para descarga
    const filename = `geanet-documentos-normativos-${new Date().toISOString().split('T')[0]}.zip`;
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    // Crear el archiver
    const archive = archiver('zip', {
      zlib: { level: 9 } // Máxima compresión
    });

    // Manejar errores del archiver
    archive.on('error', (err) => {
      console.error('Error creando ZIP:', err);
      res.status(500).json({ message: 'Error interno del servidor' });
    });

    // Pipe del archivo ZIP a la respuesta
    archive.pipe(res);

    // Función recursiva para agregar archivos y carpetas
    const addDirectoryToZip = (dirPath, zipPath = '') => {
      const items = fs.readdirSync(dirPath);
      
      items.forEach(item => {
        const itemPath = path.join(dirPath, item);
        const itemZipPath = zipPath ? `${zipPath}/${item}` : item;
        
        if (fs.statSync(itemPath).isDirectory()) {
          // Si es directorio, agregar recursivamente
          addDirectoryToZip(itemPath, itemZipPath);
        } else {
          // Si es archivo, agregarlo al ZIP
          archive.file(itemPath, { name: itemZipPath });
        }
      });
    };

    // Agregar todos los archivos de la carpeta normativos
    addDirectoryToZip(normativosPath);

    // Agregar archivo README con información
    const readmeContent = `# DOCUMENTOS NORMATIVOS - GEANET INTERNET

## Fecha de descarga: ${new Date().toLocaleString('es-CO')}

## Contenido del archivo:

### 🔵 RESOLUCIONES CRC (8 documentos)
- Resolución CRC 4776 de 2015 - Condiciones de calidad del servicio
- Resolución CRC 5299 de 2018 - Régimen de calidad del servicio de acceso a Internet
- Resolución CRC 5300 de 2018 - Metodología de medición de calidad y velocidades
- Resolución CRC 5321 de 2018 - Normatividad técnica complementaria
- Resolución CRC 5322 de 2018 - Regulaciones sobre publicidad y promociones
- Resolución CRC 5337 de 2018 - Régimen de protección de derechos de usuarios
- Resolución CRC 5344 de 2018 - Regulaciones adicionales del sector telecomunicaciones
- Resolución CRC 5397 de 2018 - Regulaciones complementarias

### 🟢 LEYES DE LA REPÚBLICA (3 documentos)
- Ley 679 de 2001 - Prevención de explotación, pornografía y turismo sexual infantil
- Ley 1266 de 2008 - Ley Estatutaria de Habeas Data
- Ley 1480 de 2011 - Estatuto del Consumidor

### 🟡 DECRETOS DEL GOBIERNO (1 documento)
- Decreto 90 de 2018 - Disposiciones generales del 18 de enero de 2018

### 🟣 ACUERDOS NORMATIVOS (1 documento)
- Acuerdo 011 de 2006 - Normas técnicas y procedimientos específicos

### 🛡️ POLÍTICAS DE PROTECCIÓN (1 documento)
- Política de Protección de Datos Personales

---

## Información de la empresa:

**GEANET INTERNET**  
Proveedor de servicios de internet por fibra óptica  
Sitio web: https://geanet.com.co  
Email: info@geanet.com.co  

## Marco regulatorio:

Todos estos documentos forman parte del marco regulatorio que rige nuestros servicios de telecomunicaciones en Colombia. En Geanet Internet cumplimos estrictamente con todas las disposiciones legales y normativas vigentes.

## Entidades reguladoras:

- **CRC**: Comisión de Regulación de Comunicaciones - https://www.crcom.gov.co
- **MinTIC**: Ministerio de Tecnologías de la Información - https://www.mintic.gov.co
- **SIC**: Superintendencia de Industria y Comercio - https://www.sic.gov.co

---

*Archivo generado automáticamente desde el sitio web de Geanet Internet*
*${new Date().toLocaleString('es-CO')}*
`;

    // Agregar el README al ZIP
    archive.append(readmeContent, { name: 'README.md' });

    // Finalizar el archivo ZIP
    await archive.finalize();

  } catch (error) {
    console.error('Error en download-normativos:', error);
    if (!res.headersSent) {
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
} 