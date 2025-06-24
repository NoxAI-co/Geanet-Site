import { motion } from 'framer-motion';

/**
 * Stats Section Component
 * 
 * Este componente muestra estadísticas clave de la empresa.
 * Incluye:
 * - Métricas principales con indicadores de tendencia
 * - Diseño de dos columnas con grid responsivo
 * - Animaciones de iconos para indicar crecimiento/decrecimiento
 * 
 * @TODO:
 * - Implementar animación de contador para los números
 * - Conectar con una API real para datos en tiempo real
 * - Añadir tooltips con más información
 * - Implementar gráficos de tendencias
 */

const stats = [
  {
    value: '500+',
    label: 'Hogares conectados',
    description: 'Familias disfrutando de internet de alta velocidad'
  },
  {
    value: '12',
    label: 'Meses sin intereses',
    description: 'Flexibilidad en el pago de tu instalación'
  },
  {
    value: '300',
    label: 'Mbps',
    description: 'Velocidad máxima disponible'
  },
  {
    value: '24/7',
    label: 'Soporte',
    description: 'Atención técnica permanente'
  }
];

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-border/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-secondary">
                {stat.label}
              </div>
              <p className="text-secondary/60 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 