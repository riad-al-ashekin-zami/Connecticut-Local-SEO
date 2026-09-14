import React from 'react';
import { Target, MapPin, Building2, ShieldAlert, CheckCircle2, TrendingUp } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem-solution" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="bg-orange-500/10 border-l-4 border-orange-500 px-4 py-2 w-fit mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5" />
              The Connecticut Search Reality
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase">
            The Local Advantage: <br className="hidden sm:inline" />
            <span className="text-blue-600 underline decoration-4 underline-offset-4">Why Standard SEO Fails Connecticut Businesses</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed text-left sm:text-center">
            Most digital marketing agencies fail Connecticut businesses because they treat our state like a generic national test market. They deploy cookie-cutter backlink campaigns and broad keyword targeting that completely ignore Connecticut's hyper-fragmented municipal geography. A service contractor or commercial specialist in Wallingford doesn’t compete across the country—you compete in a localized radius where town borders, driving corridors, and geo-proximity determine whether your phone rings or your competitor down Route 5 lands the job.
          </p>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed text-left sm:text-center">
            Our hyper-local Connecticut approach replaces generic vanity metrics with undeniable regional visibility. By systematically calibrating your Google Business Profile, deploying town-by-town geo-landing silos across New Haven, Hartford, and Fairfield counties, and building high-trust local citations, we position your business directly in the Google Map 3-Pack. The result is a compounding surge of exclusive inbound phone calls and qualified foot traffic from local customers ready to hire.
          </p>
        </div>

        {/* 3-Pillar Grid with Bold Typography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:border-orange-500/70 transition duration-300 flex flex-col justify-between group shadow-2xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-sm bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-blue-600 group-hover:scale-105 transition">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Pillar 1 • Core Proximity</div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition tracking-tight">
                Hyper-Local Relevance & Proximity Signals
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Proximity is the single most heavily weighted ranking factor in the Google local algorithm. Operating from our central Wallingford nexus in New Haven County, we construct localized geo-silos and township service architectures. We ground your brand’s authority into specific municipal coordinate systems, expanding your organic ranking perimeter from immediate neighborhoods out to high-value neighboring communities.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold">Wallingford hub to statewide coverage</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:border-orange-500/70 transition duration-300 flex flex-col justify-between group shadow-2xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-sm bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-blue-600 group-hover:scale-105 transition">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Pillar 2 • Map Pack Power</div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition tracking-tight">
                Google Business Profile Dominance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ranking in the top 3 spots of the Google Map Pack generates over 70% of high-intent mobile calls. We optimize every pixel of your Google Business Profile: establishing primary category supremacy, geotagged product cataloging, and an automated review velocity framework. Furthermore, we actively police your service radius, reporting and eliminating black-hat competitor spam listings that siphon leads from legitimate CT businesses.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold">3-Pack visibility, primary categories, spam removal</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:border-orange-500/70 transition duration-300 flex flex-col justify-between group shadow-2xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-sm bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-blue-600 group-hover:scale-105 transition">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Pillar 3 • Entity Authority</div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition tracking-tight">
                Entity-Driven Authority & Citations
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Search engines rank recognized entities, not disconnected strings of text. We build rock-solid citation integrity across Tier-1 data aggregators and Connecticut chambers of commerce. Every mention of your Name, Address, and Phone Number (NAP) aligns verbatim. We tie your digital entity into regional news sources, municipal directories, and local sponsorships to generate unshakeable algorithmic trust.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold">Consistent NAP, local press, geo-tagged relevance</span>
            </div>
          </div>

        </div>

        {/* Bottom Local Proof Strip */}
        <div className="mt-12 p-6 rounded-md bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-orange-500/20 flex items-center justify-center text-blue-600 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-slate-900 text-sm sm:text-base uppercase tracking-tight">Connecticut Search Volume Reality</div>
              <div className="text-xs text-slate-500">
                Over 2,280+ monthly high-intent searches occur in Connecticut for localized SEO services alone.
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-orange-600 bg-orange-50 border border-orange-200 px-4 py-2 rounded-sm whitespace-nowrap font-bold">
            Tier-1 Keyword Aggregation: 2,280+ Searches/Mo
          </div>
        </div>

      </div>
    </section>
  );
};
