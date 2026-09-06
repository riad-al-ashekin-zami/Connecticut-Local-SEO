import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { ProofSection } from './components/ProofSection';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { RoadmapSection } from './components/RoadmapSection';
import { PricingSection } from './components/PricingSection';
import { CoverageSection } from './components/CoverageSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { DevToolkitModal } from './components/DevToolkitModal';
import { TECHNICAL_JSON_LD } from './data/content';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isDevToolkitOpen, setIsDevToolkitOpen] = useState(false);

  // Dynamically inject the technical JSON-LD schema into head for live DOM inspection
  useEffect(() => {
    const existingScript = document.getElementById('technical-json-ld');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'technical-json-ld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(TECHNICAL_JSON_LD);
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans antialiased selection:bg-orange-600 selection:text-white">
      {/* Top Navigation Bar with Direct Response CTAs */}
      <Navbar
        onOpenAudit={() => setIsAuditModalOpen(true)}
        onOpenDevToolkit={() => setIsDevToolkitOpen(true)}
      />

      <main>
        {/* Block 1: Header & Hero Section (Above the Fold) */}
        <HeroSection onOpenAudit={() => setIsAuditModalOpen(true)} />

        {/* Block 2: The Local Advantage */}
        <ProblemSection />

        {/* Block 3: Proof of Performance / Geo-Grid Dominance */}
        <ProofSection onOpenAudit={() => setIsAuditModalOpen(true)} />

        {/* Block 4: Core Services Grid */}
        <ServicesSection onOpenAudit={() => setIsAuditModalOpen(true)} />

        {/* Block 5: Industry Specializations */}
        <IndustriesSection onOpenAudit={() => setIsAuditModalOpen(true)} />

        {/* Block 6: The 6-Month Local SEO Roadmap */}
        <RoadmapSection onOpenAudit={() => setIsAuditModalOpen(true)} />

        {/* Block 7: Transparent 3-Tier Pricing Plans */}
        <PricingSection onOpenAudit={() => setIsAuditModalOpen(true)} />

        {/* Block 8: Strategic Statewide Coverage (Hubs from Wallingford to Greenwich) */}
        <CoverageSection />

        {/* Block 9: FAQ Section – Engineered for GEO & AEO */}
        <FaqSection />

        {/* Block 10: Contact & Conversion Anchor + Strict NAP Box */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenDevToolkit={() => setIsDevToolkitOpen(true)}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* Free CT Local Audit Lead Generation Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

      {/* Copywriter, Schema & SEO Keyword Matrix Toolkit Drawer */}
      <DevToolkitModal
        isOpen={isDevToolkitOpen}
        onClose={() => setIsDevToolkitOpen(false)}
      />
    </div>
  );
}
