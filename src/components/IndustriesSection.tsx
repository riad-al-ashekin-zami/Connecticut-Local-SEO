import React from 'react';
import { Hammer, Flame, Wrench, Trees, Droplets, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/content';

interface IndustriesSectionProps {
  onOpenAudit: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenAudit }) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer':
        return <Hammer className="w-5 h-5 text-blue-600" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-blue-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-600" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-blue-600" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-blue-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-600" />;
      default:
        return <Hammer className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="industries" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="bg-orange-500/10 border-l-4 border-orange-500 px-4 py-2 w-fit mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Service-Area & Trade Mastery
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Industry Specializations: <br className="hidden sm:inline" />
            <span className="text-blue-600 underline decoration-4 underline-offset-4">Local SEO for Contractors & Trade Leaders</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Standard agencies don't understand dispatch radiuses, seasonal emergency spikes, or high-ticket job economics. We specialize in <strong className="text-slate-900">local seo for contractors ct</strong> and mission-critical service-area businesses across Connecticut, turning local searches into booked estimates and dispatched service trucks.
          </p>
        </div>

        {/* 6 Specialized Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((industry) => (
            <div
              key={industry.id}
              className="bg-white rounded-lg border border-slate-200 p-6 sm:p-7 hover:border-orange-500/70 transition duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-sm bg-orange-500/20 border border-orange-500/30 flex items-center justify-center group-hover:scale-105 transition">
                    {getIndustryIcon(industry.iconName)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    Verified Niche
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-blue-600 transition tracking-tight">
                    {industry.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Sub-Trade Bullets */}
                <div className="pt-2 space-y-1.5 border-t border-slate-200/80">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">
                    Specialized Sub-Trades:
                  </span>
                  {industry.subTrades.map((trade, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-mono">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>{trade}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{industry.keyOutcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-12 bg-white rounded-lg border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight">
              Don't See Your Specific Trade or Vertical?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
              From commercial roofing and pest control to foundation repair and home automation, our Connecticut localized ranking systems dominate any competitive regional niche.
            </p>
          </div>
          <button
            onClick={onOpenAudit}
            className="shrink-0 px-6 py-3.5 rounded-sm bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-tight transition flex items-center gap-2 cursor-pointer shadow-lg shadow-orange-500/30"
          >
            <span>Audit My Industry Territory</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
