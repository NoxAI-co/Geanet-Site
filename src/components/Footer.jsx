import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { CONTACT, COMPANY_INFO, WEBSITE_SECTIONS } from '@/config/project-config';
import { useState } from 'react';

const Footer = () => {
  const [imageError, setImageError] = useState(false);

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/geanet', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/geanet', label: 'Instagram' },
  ];

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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-6">
              <img
                src="/Imagen%20Corporativa/logo_horizontal.svg"
                alt="Geanet Internet - Proveedor de internet por fibra óptica en Colombia"
                width="180"
                height="54"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 leading-relaxed mb-4">
              {COMPANY_INFO.description}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Cobertura: {CONTACT.coverage}
            </p>
            <div className="mt-6">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-accent transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>
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
            
            {/* Emails adicionales */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <h4 className="text-sm font-medium text-white mb-3">Otros contactos</h4>
              <div className="space-y-2 text-sm">
                <a href={`mailto:${CONTACT.emails.customerService}`} className="block text-white/60 hover:text-accent transition-colors">
                  Servicio al cliente
                </a>
                <a href={`mailto:${CONTACT.emails.management}`} className="block text-white/60 hover:text-accent transition-colors">
                  Gerencia
                </a>
                <a href={`mailto:${CONTACT.emails.info}`} className="block text-white/60 hover:text-accent transition-colors">
                  Información general
                </a>
              </div>
            </div>
          </div>

          {/* Espacio para foto de familia */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Nuestra Familia</h3>
            <div className="relative aspect-[4/3] bg-white/10 rounded-lg overflow-hidden group">
              {!imageError ? (
                <img
                  src="/images/Familia.webp"
                  alt="Equipo de trabajo Geanet Internet - Profesionales dedicados al servicio de internet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-white/5 border-2 border-dashed border-white/30 rounded-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 opacity-50">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <p className="text-xs text-white/60">Equipo Geanet</p>
                  </div>
                </div>
              )}
            </div>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              Un equipo comprometido con brindar el mejor servicio de internet a nuestros clientes.
            </p>
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