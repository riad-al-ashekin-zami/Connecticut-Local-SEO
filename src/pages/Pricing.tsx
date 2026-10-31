import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_ENTITY } from '../data/content';
import { PricingSection } from '../components/PricingSection';
import { ContactSection } from '../components/ContactSection';
import { useNavigate } from 'react-router-dom';

export const Pricing: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>{`Pricing & Packages | ${BUSINESS_ENTITY.brandName}`}</title>
        <meta name="description" content="View our performance-driven local SEO pricing plans. Honest, transparent month-to-month SEO services for Connecticut businesses." />
        <link rel="canonical" href="https://localseoct.com/pricing/" />
        <meta property="og:title" content={`Pricing & Packages | ${BUSINESS_ENTITY.brandName}`} />
        <meta property="og:description" content="View our performance-driven local SEO pricing plans. Honest, transparent month-to-month SEO services for Connecticut businesses." />
        <meta property="og:url" content="https://localseoct.com/pricing/" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-700 via-blue-600 to-blue-600 text-white pt-12 pb-14 border-b border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-black uppercase tracking-wider">
              <span>Transparent Month-to-Month Investment • Zero Lock-In</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Connecticut Local SEO <span className="text-orange-400">Pricing & Plans</span>
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Transparent, performance-driven search optimization tiers designed to dominate Google Map Pack results across Connecticut.
            </p>
          </div>
        </div>
      </section>

      <PricingSection onOpenAudit={() => navigate('/free-seo-audit/')} />
      <ContactSection />
    </>
  );
};
