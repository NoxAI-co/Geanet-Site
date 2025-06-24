import Head from 'next/head';
import PQRSSection from '@/components/sections/FAQSection';
import Layout from '@/components/Layout';
import { COMPANY_INFO } from '@/config/project-config';

export default function PQRS() {
  return (
    <>
      <Head>
        <title>PQRS - {COMPANY_INFO.name}</title>
        <meta name="description" content="Presenta tus Peticiones, Quejas, Reclamos y Sugerencias. Conoce nuestros tiempos de respuesta y marco normativo." />
        <meta name="keywords" content="PQRS geanet, quejas reclamos, peticiones sugerencias, normatividad telecomunicaciones" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://geanet.com.co/pqrs" />
      </Head>
      <Layout>
        <div className="pt-16"> {/* Espacio para el header fijo */}
          <PQRSSection />
        </div>
      </Layout>
    </>
  );
} 