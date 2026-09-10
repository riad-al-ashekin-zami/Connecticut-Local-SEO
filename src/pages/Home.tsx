import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '../components/HeroSection';
import { ProblemSection } from '../components/ProblemSection';
import { ProofSection } from '../components/ProofSection';
import { ServicesSection } from '../components/ServicesSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { RoadmapSection } from '../components/RoadmapSection';
import { PricingSection } from '../components/PricingSection';
import { CoverageSection } from '../components/CoverageSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';

export function Home() {
  const { openAudit } = useOutletContext<{ openAudit: () => void }>();

  return (
    <>
      <Helmet>
        <title>Connecticut Local SEO | Top Local SEO Company CT</title>
        <meta name="description" content="Dominate the Google Map 3-Pack with Connecticut's top local SEO company. Generate high-intent calls & leads statewide. Call +1 860-967-0660 for your free audit." />
        <link rel="canonical" href="https://localseoct.com/" />
      </Helmet>
      
      {/* Block 1: Header & Hero Section (Above the Fold) */}
      <HeroSection onOpenAudit={openAudit} />

      {/* Block 2: The Local Advantage */}
      <ProblemSection />

      {/* Block 3: Proof of Performance / Geo-Grid Dominance */}
      <ProofSection onOpenAudit={openAudit} />

      {/* Block 4: Core Services Grid */}
      <ServicesSection onOpenAudit={openAudit} />

      {/* Block 5: Industry Specializations */}
      <IndustriesSection onOpenAudit={openAudit} />

      {/* Block 6: The 6-Month Local SEO Roadmap */}
      <RoadmapSection onOpenAudit={openAudit} />

      {/* Block 7: Transparent 3-Tier Pricing Plans */}
      <PricingSection onOpenAudit={openAudit} />

      {/* Block 8: Strategic Statewide Coverage (Hubs from Wallingford to Greenwich) */}
      <CoverageSection />

      {/* Block 9: FAQ Section */}
      <FaqSection />

      {/* Block 10: Contact & Conversion Anchor + Strict NAP Box */}
      <ContactSection />
    </>
  );
}
