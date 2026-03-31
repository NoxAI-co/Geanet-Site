import Head from 'next/head';
import AboutUs from '@/components/sections/Case';
import Layout from '@/components/Layout';
import { COMPANY_INFO } from '@/config/project-config';

export default function SobreNosotros() {
  return (
    <>
      <Head>
        <title>Sobre Nosotros - {COMPANY_INFO.name}</title>
        <meta name="description" content={`Conoce la misión, visión y valores de ${COMPANY_INFO.name}. ${COMPANY_INFO.description}`} />
        <meta name="keywords" content="geanet empresa, misión visión valores, sobre geanet, historia empresa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://geanet.com.co/sobre-nosotros" />
      </Head>
      <Layout>
        <div className="pt-20"> {/* Espacio para el header fijo */}
          <AboutUs />
        </div>
      </Layout>
    </>
  );
} 