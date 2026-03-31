import Head from 'next/head';
import Hero from '@/components/sections/Hero';
import QualityIndicators from '@/components/sections/QualityIndicators';
import Stats from '@/components/sections/Stats';
import PricingPlans from '@/components/sections/PricingPlans';
import Layout from '@/components/Layout';
import { COMPANY_INFO } from '@/config/project-config';
import { Badge } from '@/components/ui/badge';
import { Target, Eye } from 'lucide-react';

// Componente de Misión y Visión
const MissionVision = () => {
  return (
    <div className="w-full py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="flex text-center justify-center items-center gap-4 flex-col mb-16">
          <Badge className="bg-primary text-white">Nuestra Empresa</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Misión y Visión
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Conoce nuestro propósito y hacia dónde nos dirigimos como empresa
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Misión */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-primary">Misión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-secondary">Visión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {COMPANY_INFO.vision}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
        <MissionVision />
        <PricingPlans />
        <QualityIndicators />
        <Stats />
      </Layout>
    </>
  );
} 