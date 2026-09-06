import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { PRICING_DATA } from '../data/content';

interface PricingSectionProps {
  onOpenAudit: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="pricing" className="py-24 bg-slate-900 text-slate-50 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with H2 */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="bg-orange-600/10 border-l-4 border-orange-600 px-4 py-2 w-fit mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-orange-400 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" />
              Transparent Return On Investment
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Performance-Driven Pricing Plans: <br className="hidden sm:inline" />
            <span className="text-orange-500 underline decoration-4 underline-offset-4">Turn Search into Measurable Revenue</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Straightforward month-to-month local SEO investment tiers engineered for single-crew operators, expanding contractors, and multi-location Connecticut market leaders. No long-term lock-in, no vague retainers.
          </p>
        </div>

        {/* 3-Tier Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_DATA.map((tier) => {
            const isFeatured = tier.featured;

            return (
              <div
                key={tier.id}
                className={`relative rounded-lg p-8 flex flex-col justify-between transition duration-200 border-2 ${
                  isFeatured
                    ? 'bg-slate-950 border-orange-500 shadow-2xl shadow-orange-950/60 ring-1 ring-orange-500/50'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-sm shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    {tier.badge}
                  </div>
                )}

                <div>
                  {/* Tier Title & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                      {tier.name}
                    </h3>
                    {!isFeatured && tier.badge && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm bg-slate-900 border border-slate-700 text-slate-300 uppercase">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 my-4 pb-4 border-b border-slate-800">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono">
                      {tier.price}
                    </span>
                    <span className="text-sm font-semibold text-slate-400 font-mono">
                      {tier.cadence}
                    </span>
                  </div>

                  {/* Ideal For */}
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    <strong className="text-slate-200 block text-[11px] font-bold uppercase tracking-wider mb-1">Target Profile:</strong>
                    {tier.idealFor}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <div className="text-[10px] font-black uppercase tracking-widest text-orange-400">
                      Included Deliverables:
                    </div>
                    {tier.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-300">
                        <div className="w-4 h-4 rounded-sm bg-orange-600/20 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={onOpenAudit}
                    className={`w-full py-3.5 rounded-sm font-black text-xs uppercase tracking-tight transition flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                      isFeatured
                        ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-orange-950/60'
                        : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] font-mono text-center text-slate-500 mt-2">
                    Month-to-month agreement • 100% white-hat
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Value Proposition Callout Banner */}
        <div className="mt-12 p-6 rounded-sm bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-white text-sm">Need a Custom Connecticut Enterprise Deployment?</div>
              <div className="text-slate-400">Custom multi-brand solutions and corporate commercial service radius setups available upon consultation.</div>
            </div>
          </div>
          <a
            href="tel:+18609670660"
            className="shrink-0 px-5 py-2.5 rounded-sm bg-slate-900 border border-slate-700 hover:border-orange-500/50 text-white font-mono font-bold text-xs transition"
          >
            Call +1 860-967-0660
          </a>
        </div>

      </div>
    </section>
  );
};
