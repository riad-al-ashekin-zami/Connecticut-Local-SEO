import React from 'react';
import { Map, Share2, Sparkles, Terminal, Check, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';

interface ServicesSectionProps {
  onOpenAudit: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAudit }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'gmb-dominance':
        return <Map className="w-6 h-6 text-orange-400" />;
      case 'citations':
        return <Share2 className="w-6 h-6 text-orange-400" />;
      case 'ai-aeo':
        return <Sparkles className="w-6 h-6 text-orange-400" />;
      case 'technical-seo':
        return <Terminal className="w-6 h-6 text-orange-400" />;
      default:
        return <Map className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950 text-slate-50 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with H2 targeted around Connecticut Local SEO Services / Local SEO Consultant CT */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="bg-orange-600/10 border-l-4 border-orange-600 px-4 py-2 w-fit mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Precision Tactical Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Connecticut Local SEO Services <br className="hidden sm:inline" />
            <span className="text-orange-500 underline decoration-4 underline-offset-4">Built for Scalable Revenue</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Whether you require an authoritative <strong className="text-white">local seo consultant ct</strong> to diagnose plateaued rankings or full-scale execution of elite <strong className="text-white">connecticut local seo services</strong>, our four modular pillars engineer unbreakable regional visibility.
          </p>
        </div>

        {/* 4 Distinct Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900 rounded-lg border border-slate-800 p-8 hover:border-orange-500/70 transition duration-300 flex flex-col justify-between group shadow-2xl relative"
            >
              <div className="space-y-5">
                {/* Header Row: Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-sm bg-orange-600/20 border border-orange-500/30 flex items-center justify-center group-hover:scale-105 transition">
                    {getIcon(service.id)}
                  </div>
                </div>

                {/* H3 Heading */}
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-orange-400 transition tracking-tight">
                  {service.title}
                </h3>

                {/* Tagline / Value Proposition */}
                <p className="text-sm font-semibold text-slate-200 italic border-l-2 border-orange-500 pl-3">
                  "{service.tagline}"
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Core Deliverables List */}
                <div className="space-y-2 pt-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Core Technical Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Metric & Action */}
              <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Verified Impact:</span>
                  <span className="text-emerald-400 font-mono font-bold text-sm">{service.impactMetric}</span>
                </div>
                <button
                  onClick={onOpenAudit}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 transition cursor-pointer"
                >
                  <span>Request Specific Audit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Page Callout Banner */}
        <div className="mt-12 p-8 rounded-lg bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">Unmatched Accountability</div>
            <div className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">Need a Dedicated Local SEO Consultant in CT?</div>
            <p className="text-sm text-slate-300">
              Speak directly with an experienced director—not a junior account coordinator. We audit your exact service area today.
            </p>
          </div>
          <button
            onClick={onOpenAudit}
            className="px-6 py-3.5 rounded-sm bg-orange-600 hover:bg-orange-500 text-white font-black text-xs sm:text-sm uppercase tracking-tight shadow-xl shadow-orange-950/60 transition shrink-0 cursor-pointer"
          >
            Schedule Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
