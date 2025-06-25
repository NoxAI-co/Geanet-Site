import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { CONTACT, COMPANY_INFO, WEBSITE_SECTIONS } from '@/config/project-config';

const Footer = () => {

  // Redes sociales removidas

  const contactInfo = [
    { 
      icon: Phone, 
      text: `(604) ${CONTACT.phone}`, 
      href: `tel:+57${CONTACT.phone}`,
      label: 'Teléfono fijo'
    },
    { 
      icon: MessageCircle, 
      text: CONTACT.whatsapp, 
      href: `https://wa.me/57${CONTACT.whatsapp}`,
      label: 'WhatsApp'
    },
    { 
      icon: Mail, 
      text: CONTACT.emails.contact, 
      href: `mailto:${CONTACT.emails.contact}`,
      label: 'Correo principal'
    },
    { 
      icon: MapPin, 
      text: CONTACT.address, 
      href: '#',
      label: 'Dirección'
    },
  ];

  // Usar las secciones de la configuración, excluyendo Inicio
  const quickLinks = WEBSITE_SECTIONS.filter(section => section.name !== 'Inicio').map(section => ({
    href: section.path,
    label: section.name
  }));

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-6">
              <img
                src="/Imagen%20Corporativa/logo_icono.svg"
                alt="Geanet Internet - Proveedor de internet por fibra óptica en Colombia"
                width="48"
                height="48"
                className="h-12 w-12 brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 leading-relaxed mb-4">
              Proveedor ISP especializado en internet simétrico por fibra óptica para hogares y empresas.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Cobertura: {CONTACT.coverage}
            </p>

          </div>

          {/* Enlaces rápidos */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Contacto</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start text-white/80 hover:text-accent transition-colors duration-300 group"
                  >
                    <item.icon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="leading-tight">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacidad" className="text-white/70 hover:text-accent text-sm transition-colors duration-300">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-white/70 hover:text-accent text-sm transition-colors duration-300">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 