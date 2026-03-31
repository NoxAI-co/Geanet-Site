// Configuración completa de Geanet Internet
export const COMPANY_INFO = {
  name: 'Geanet Internet',
  description: 'Geanet Internet es un proveedor de servicios de internet ISP especializado en soluciones de conectividad simétrica por fibra óptica para hogares y empresas. Nuestra tecnología de punta y atención personalizada nos permiten ofrecer un servicio confiable, seguro y acorde con las necesidades actuales del entorno digital.',
  mission: 'Brindar servicios de internet de alta calidad, con velocidades simétricas, estabilidad y atención oportuna, impulsando la transformación digital de hogares y empresas mediante soluciones tecnológicas confiables, accesibles y reguladas.',
  vision: 'Ser líderes en conectividad simétrica por fibra óptica en Colombia, reconocidos por nuestra innovación, atención al cliente y compromiso con la calidad y la regulación, aportando al desarrollo digital del país.',
  values: [
    {
      name: 'Confiabilidad',
      description: 'Redes estables y soporte técnico 24/7.'
    },
    {
      name: 'Transparencia',
      description: 'Procesos claros, comunicación abierta y cumplimiento normativo.'
    },
    {
      name: 'Innovación',
      description: 'Tecnología avanzada, velocidades simétricas y servicios de valor agregado.'
    },
    {
      name: 'Compromiso',
      description: 'Atención personalizada, cumplimiento de derechos del usuario y mejora continua.'
    },
    {
      name: 'Responsabilidad Social',
      description: 'Prevención de riesgos digitales, protección infantil y acceso justo a la información.'
    }
  ]
};

export const SERVICES = {
  INTERNET: [
    {
      name: 'Plan Básico',
      speed: '50/50 Mbps',
      price: 50000,
      features: ['Internet simétrico', 'Fibra óptica', 'Soporte 24/7']
    },
    {
      name: 'Plan Intermedio',
      speed: '100/100 Mbps',
      price: 70000,
      features: ['Internet simétrico', 'Fibra óptica', 'Soporte 24/7']
    },
    {
      name: 'Plan Avanzado',
      speed: '200/200 Mbps',
      price: 90000,
      features: ['Internet simétrico', 'Fibra óptica', 'Soporte 24/7']
    },
    {
      name: 'Plan Premium',
      speed: '300/300 Mbps',
      price: 110000,
      features: ['Internet simétrico', 'Fibra óptica', 'Soporte 24/7']
    }
  ],
  INSTALLATION: {
    oneTime: {
      name: 'Instalación de contado',
      price: 90000,
      type: 'pago único'
    },
    monthly: {
      name: 'Instalación diferida',
      price: 10000,
      type: 'mensual',
      duration: '12 meses'
    }
  },
  ADDITIONAL: {
    tv: {
      name: 'Televisión HD (2 televisores)',
      price: 10000,
      type: 'mensual adicional'
    },
    security: {
      name: 'Protección contra virus y bloqueo de pornografía',
      price: 0,
      type: 'servicio opcional'
    }
  }
};

export const CONTACT = {
  phone: '3222860',
  whatsapp: '3113556324',
  emails: {
    contact: 'contacto@geanet.com.co',
    customerService: 'servicioalcliente@geanet.co',
    management: 'gerencia@geanet.co',
    info: 'info@geanet.co'
  },
  address: 'Calle 29b #84-09, Medellín, Antioquia, Colombia',
  coverage: 'Valle de Aburrá y otras regiones'
};

export const PQRS = {
  responseTime: '10 días hábiles',
  appealEntity: 'Superintendencia de Industria y Comercio (SIC)',
  types: ['Petición', 'Queja', 'Reclamo'],
  requiredFields: [
    'Tipo de solicitud',
    'Nombre y documento de identidad',
    'Medio preferido de notificación',
    'Horario de contacto preferido',
    'Detalles de la solicitud'
  ]
};

export const REGULATIONS = [
  {
    name: 'Resolución CRC 5299 de 2018',
    description: 'Calidad y parámetros mínimos'
  },
  {
    name: 'Resolución CRC 5300 de 2018',
    description: 'Medición de calidad y velocidades mínimas'
  },
  {
    name: 'Resolución CRC 5322 de 2018',
    description: 'Publicidad y promociones'
  },
  {
    name: 'Resolución CRC 5337 de 2018',
    description: 'Atención al usuario'
  },
  {
    name: 'Resolución CRC 5344, 5397, 5321 de 2018',
    description: 'Regulaciones adicionales de CRC'
  },
  {
    name: 'Ley 679 de 2001',
    description: 'Prevención de explotación infantil en medios digitales'
  },
  {
    name: 'Ley 1480 de 2011',
    description: 'Estatuto del Consumidor'
  },
  {
    name: 'Resolución 5111 de 2017',
    description: 'Regulaciones de telecomunicaciones'
  },
  {
    name: 'Resolución 777 de 2021',
    description: 'Protocolos COVID-19'
  }
];

export const SERVICE_INDICATORS = [
  {
    indicator: 'Velocidad real vs contratada',
    target: 'Mínimo 90%',
    observation: 'Promedio mensual medido por software de red'
  },
  {
    indicator: 'Tiempo promedio de instalación',
    target: 'Máximo 48 horas',
    observation: 'Desde contrato firmado hasta activación'
  },
  {
    indicator: 'Tiempo de respuesta PQRS',
    target: 'Máximo 10 días hábiles',
    observation: 'Legalmente exigido'
  },
  {
    indicator: 'Tasa de satisfacción del cliente',
    target: 'Mínimo 85%',
    observation: 'Encuestas semestrales'
  },
  {
    indicator: 'Disponibilidad de red',
    target: 'Mínimo 99.5%',
    observation: 'Medición mensual'
  },
  {
    indicator: 'Tiempos de atención soporte técnico',
    target: 'Máximo 15 minutos',
    observation: 'Call center y chat'
  }
];

export const OFFICIAL_LINKS = {
  mintic: 'https://www.mintic.gov.co',
  crc: 'https://www.crcom.gov.co',
  sic: 'https://www.sic.gov.co'
};

export const WEBSITE_SECTIONS = [
  { name: 'Inicio', path: '/', id: 'inicio' },
  { name: 'Servicios', path: '/servicios', id: 'servicios' },
  { name: 'Sobre Nosotros', path: '/sobre-nosotros', id: 'sobre-nosotros' },
  { name: 'Contacto', path: '/contacto', id: 'contacto' },
  { name: 'PQRS', path: '/pqrs', id: 'pqrs' },
  { name: 'Normatividad', path: '/normatividad', id: 'normatividad' }
];

export const COLORS = {
  primary: '#003366',
  secondary: '#006699',
  accent: '#00CC66',
  background: '#FFFFFF',
  text: {
    primary: '#000000',
    secondary: '#555555'
  },
  warning: '#FF6600'
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}; 