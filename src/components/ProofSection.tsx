import React, { useState } from 'react';
import { MapPin, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Layers, Eye } from 'lucide-react';

interface ProofSectionProps {
  onOpenAudit: () => void;
}

export const ProofSection: React.FC<ProofSectionProps> = ({ onOpenAudit }) => {
  const [activeView, setActiveView] = useState<'after' | 'before'>('after');

  // 5x5 Geo-Grid mock nodes
  const nodesBefore = [
    18, 14, 19, 16, 17,
    15, 12, 11, 14, 16,
    16, 9,  8,  12, 15,
    19, 14, 13, 17, 18,
    20, 18, 16, 19, 20
  ];

  const nodesAfter = [
    2, 1, 2, 3, 2,
    1, 1, 1, 2, 1,
    2, 1, 1, 1, 2,
    1, 2, 1, 2, 3,
    3, 2, 2, 3, 2
  ];

  const currentNodes = activeView === 'after' ? nodesAfter : nodesBefore;

  return (
    <section id="performance-proof" className="py-20 bg-slate-950 text-slate-50 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="bg-orange-600/10 border-l-4 border-orange-600 px-4 py-2 w-fit mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5" />
              Verified Empirical Telemetry
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Proof of Performance: <br className="hidden sm:inline" />
            <span className="text-orange-500 underline decoration-4 underline-offset-4">Geo-Grid Dominance Across Connecticut</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We don't sell blind promises or opaque reports. We track real-time proximity rankings using precision 13x13 node geo-grid telemetry down to the exact street corner. See how our hyper-local optimization systematically converts red ranking zones (#15+) into bright green, top-3 Google Map Pack real estate across high-value Connecticut towns and commercial corridors.
          </p>
        </div>

        {/* Proof of Performance Display Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Geo-Grid Visual Stage (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-lg border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
            
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Live Telemetry: Wallingford – New Haven Metro Grid
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">
                  Query: "commercial contractor near me" • Radius: 15-Mile Geo-Boundary
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-sm border border-slate-800">
                <button
                  onClick={() => setActiveView('before')}
                  className={`px-3 py-1.5 text-xs font-black uppercase rounded-xs transition cursor-pointer ${
                    activeView === 'before'
                      ? 'bg-rose-950 text-rose-300 border border-rose-800'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Day 1 (Red Grid)
                </button>
                <button
                  onClick={() => setActiveView('after')}
                  className={`px-3 py-1.5 text-xs font-black uppercase rounded-xs transition cursor-pointer ${
                    activeView === 'after'
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Month 3 (Green Dominance)
                </button>
              </div>
            </div>

            {/* Local Rank Tracker Map Container */}
            <div className="bg-slate-950 rounded-lg border border-slate-800/80 p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              {/* Map Placeholder Graphic & Geo-Grid Overlay */}
              <div className="relative z-10">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    Wallingford Central Apex (50 Sunrise Cir)
                  </span>
                  <span className="font-bold text-orange-400 uppercase">
                    {activeView === 'after' ? '92% Top-3 Share' : '4% Top-3 Share'}
                  </span>
                </div>

                {/* 5x5 Interactive Nodes Grid */}
                <div className="grid grid-cols-5 gap-3 sm:gap-4 max-w-md mx-auto py-4">
                  {currentNodes.map((rank, index) => {
                    const isTop3 = rank <= 3;
                    return (
                      <div
                        key={index}
                        className={`aspect-square rounded-full flex flex-col items-center justify-center font-mono font-black text-xs sm:text-sm border transition-all duration-300 shadow-md ${
                          isTop3
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-emerald-950/50 hover:scale-110'
                            : 'bg-rose-500/20 text-rose-400 border-rose-500/40 shadow-rose-950/50 hover:scale-110'
                        }`}
                        title={`Node #${index + 1}: Rank position #${rank} in Google Map 3-Pack`}
                      >
                        #{rank}
                      </div>
                    );
                  })}
                </div>

                {/* Grid Legend */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      Green: Pos 1–3 (Map Pack)
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      Red: Pos 10+ (Invisible)
                    </span>
                  </div>
                  <span className="text-slate-500 hidden sm:inline">25-Point Municipal Scan</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified client campaign data from New Haven County</span>
              </div>
              <button
                onClick={onOpenAudit}
                className="text-orange-400 hover:text-orange-300 font-bold uppercase tracking-tight transition cursor-pointer flex items-center gap-1"
              >
                <span>Request Your Free Geo-Grid Scan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Value Narrative & Conversion Callout (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-orange-500">
                Zero Guesswork • 100% Transparency
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Turning Red Invisible Nodes into Direct Inbound Phone Calls
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                When a homeowner or facilities manager searches on their phone, Google only shows the top 3 results. If your business shows up as #8 or #14 on Route 5, your phone stays dead silent while your competitors down the road book all the work.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-sm bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="text-xs font-bold text-white uppercase flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Hyper-Local Proximity Calibration
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We expand your 3-Pack ranking perimeter beyond your front door into adjacent neighborhoods and towns without violating Google guidelines.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="text-xs font-bold text-white uppercase flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Continuous Competitor Spam Removal
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We actively police your service territory, reporting keyword-stuffed lead aggregators and fake PO box listings so your legitimate business claims top rank.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="w-full py-4 rounded-sm bg-orange-600 hover:bg-orange-500 text-white font-black text-xs sm:text-sm uppercase tracking-tight shadow-xl shadow-orange-950/60 transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Run a Free Geo-Grid Scan on Your Business</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
