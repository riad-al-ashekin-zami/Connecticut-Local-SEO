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
        <title>Pricing & Packages | {BUSINESS_ENTITY.brandName}</title>
        <meta name="description" content="View our performance-driven local SEO pricing plans. Honest, transparent month-to-month SEO services for Connecticut businesses." />
      </Helmet>
      
      {/* Page Header */}

      <PricingSection onOpenAudit={() => navigate('/free-seo-audit')} />
      <ContactSection />
    </>
  );
};
