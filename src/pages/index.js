import Head from 'next/head';
import Hero from '@/components/sections/Hero';
import QualityIndicators from '@/components/sections/QualityIndicators';
import Stats from '@/components/sections/Stats';
import Layout from '@/components/Layout';
import { COMPANY_INFO } from '@/config/project-config';

export default function Home() {
  return (
    <>
      <Head>
        <title>{COMPANY_INFO.name} - Internet Simétrico por Fibra Óptica</title>
        <meta name="description" content={`${COMPANY_INFO.description} Planes desde $50.000 con velocidades simétricas de hasta 300/300 Mbps.`} />
        <meta name="keywords" content="internet fibra óptica, internet simétrico, Medellín, Antioquia, ISP, internet alta velocidad, geanet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${COMPANY_INFO.name} - Internet Simétrico por Fibra Óptica`} />
        <meta property="og:description" content={COMPANY_INFO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://geanet.com.co" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${COMPANY_INFO.name} - Internet Simétrico por Fibra Óptica`} />
        <meta name="twitter:description" content={COMPANY_INFO.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://geanet.com.co" />
      </Head>
      <Layout>
        <Hero />
        <QualityIndicators />
        <Stats />
      </Layout>
    </>
  );
} 