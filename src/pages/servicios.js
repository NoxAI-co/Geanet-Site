import Head from 'next/head';
import PricingPlans from '@/components/sections/PricingPlans';
import Features from '@/components/sections/Features';
import Layout from '@/components/Layout';
import { COMPANY_INFO } from '@/config/project-config';

export default function Servicios() {
  return (
    <>
      <Head>
        <title>Servicios - {COMPANY_INFO.name}</title>
        <meta name="description" content="Conoce nuestros planes de internet simétrico por fibra óptica. Velocidades desde 50/50 hasta 300/300 Mbps con precios desde $50.000." />
        <meta name="keywords" content="planes internet, fibra óptica, internet simétrico, geanet servicios, precios internet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://geanet.com.co/servicios" />
      </Head>
      <Layout>
        <div className="pt-16"> {/* Espacio para el header fijo */}
          <PricingPlans />
          <Features />
        </div>
      </Layout>
    </>
  );
} 