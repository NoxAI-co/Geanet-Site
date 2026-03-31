import Head from 'next/head';
import ContactForm from '@/components/sections/ContactForm';
import Layout from '@/components/Layout';
import { COMPANY_INFO } from '@/config/project-config';

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto - {COMPANY_INFO.name}</title>
        <meta name="description" content="Contáctanos para solicitar información sobre nuestros servicios de internet. Teléfono, WhatsApp, correo electrónico y formulario de contacto." />
        <meta name="keywords" content="contacto geanet, teléfono internet, whatsapp soporte, correo geanet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://geanet.com.co/contacto" />
      </Head>
      <Layout>
        <div className="pt-16"> {/* Espacio para el header fijo */}
          <ContactForm />
        </div>
      </Layout>
    </>
  );
} 