import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/geanet', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/geanet', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/geanet', label: 'Instagram' },
  ];

  const contactInfo = [
    { icon: Phone, text: '(+57) 123-456-7890', href: 'tel:+571234567890' },
    { icon: Mail, text: 'contacto@geanet.com', href: 'mailto:contacto@geanet.com' },
    { icon: MapPin, text: 'Bogotá, Colombia', href: 'https://goo.gl/maps/...' },
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="block mb-6">
              <Image
                src="/images/logo.png"
                alt="Geanet Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-600 max-w-xs">
              Soluciones tecnológicas innovadoras para impulsar el crecimiento de tu empresa.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Contacto</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Geanet. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacidad" className="text-gray-600 hover:text-gray-900">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-600 hover:text-gray-900">
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