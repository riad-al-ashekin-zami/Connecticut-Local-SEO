import React from 'react';
import { Users2, ShieldCheck, Briefcase } from 'lucide-react';

export const HomepageStrategicSections: React.FC = () => {
  return (
    <>
      {/* 1. Agency vs. In-House vs. Freelancer */}
      <section id="agency-vs-freelancer" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <Users2 className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Strategic Comparison</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">
            Agency vs. In-House vs. Freelancer
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Growing Connecticut businesses face three paths for organic search growth: hire a solo freelancer, recruit an internal marketer, or partner with a specialized search agency. A solo freelancer rarely possesses the bandwidth to manage code audits, multi-location content silos, and digital PR outreach simultaneously. An in-house hire demands an $80,000+ salary, benefits, and expensive SEO software subscriptions. Partnering with our specialized Connecticut agency delivers an entire team of technical SEOs, localized content writers, and outreach specialists for a fraction of full-time hiring costs—with proven systems built specifically for Connecticut service markets.
          </p>
        </div>
      </section>

      {/* 2. Our Commitment */}
      <section id="our-commitment" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Client Partnership Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">
            Our Commitment
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We built our agency to eliminate the opaque retainer traps common in the SEO industry. First, we operate entirely on flexible month-to-month agreements; we earn your business every 30 days based on verified inbound calls and revenue metrics. Second, we practice strict geographic exclusivity—we never represent direct competitors within your primary Connecticut service territory. Third, you retain 100% ownership of your website, tracking setup, schema markup, and citations. If you ever pause or transition, every asset stays with your company.
          </p>
        </div>
      </section>

      {/* 3. SEO Consulting for In-House Teams */}
      <section id="seo-consulting" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Fractional Search Advisory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">
            SEO Consulting for In-House Teams
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            For Connecticut organizations that already employ internal web developers or marketing coordinators, we offer specialized SEO consulting and technical advisory. Rather than replacing your existing team, we act as your fractional search division. We conduct forensic technical audits, diagnose crawl budget and Core Web Vitals bottlenecks, build customized keyword architecture roadmaps, and provide hands-on implementation guidance. Through monthly strategy sessions and code reviews, we ensure your internal staff executes algorithm-compliant optimizations that generate compounding search authority.
          </p>
        </div>
      </section>
    </>
  );
};
