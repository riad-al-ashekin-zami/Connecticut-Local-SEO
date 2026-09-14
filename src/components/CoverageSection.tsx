import React, { useState } from 'react';
import { MapPin, Compass, Navigation, CheckCircle2 } from 'lucide-react';
import { LOCATION_HUBS, BUSINESS_ENTITY } from '../data/content';

export const CoverageSection: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<number>(0);

  const activeHub = LOCATION_HUBS[selectedHub];

  return (
    <section id="coverage" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="bg-orange-500/10 border-l-4 border-orange-500 px-4 py-2 w-fit mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              Geographic Relevance Engine
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Statewide Local SEO Coverage: <br className="hidden sm:inline" />
            <span className="text-blue-600 underline decoration-4 underline-offset-4">From Wallingford to Greenwich & Groton</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From our central operational base at <strong className="text-slate-900">50 Sunrise Cir in Wallingford</strong> (New Haven County), Connecticut Local SEO powers dominant search campaigns across all eight Connecticut counties. We understand the distinct economic nuances between high-ticket corporate corridors in Fairfield County, industrial manufacturing density in New Haven County, and commercial hubs across Hartford and the Shoreline.
          </p>
        </div>

        {/* Interactive Statewide Hub Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* County Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
              Select Regional Connecticut Metro Corridor:
            </div>
            {LOCATION_HUBS.map((hub, idx) => {
              const isSelected = selectedHub === idx;
              return (
                <button
                  key={hub.county}
                  onClick={() => setSelectedHub(idx)}
                  className={`w-full text-left p-4 rounded-sm border transition duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-2 border-orange-500 text-slate-900 shadow-xl'
                      : 'bg-white/70 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="font-black text-sm sm:text-base flex items-center gap-2 uppercase tracking-tight">
                      <MapPin className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                      <span>{hub.county}</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Anchor Hub: <span className="text-slate-600 font-semibold">{hub.hubCity}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-sm bg-orange-50 text-orange-700 border border-orange-200 font-bold">
                      {hub.distanceFromWallingford}
                    </span>
                  </div>
                </button>
              );
            })}

            <div className="p-4 rounded-sm bg-white border border-slate-200 text-xs text-slate-500 space-y-1.5 mt-4">
              <div className="font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5 text-[11px]">
                <Navigation className="w-3.5 h-3.5 text-blue-600" />
                Physical Headquarters & Anchor:
              </div>
              <div className="font-bold text-slate-900">{BUSINESS_ENTITY.brandName}</div>
              <div className="text-slate-600 font-mono text-[11px]">{BUSINESS_ENTITY.address.fullFormatted}</div>
              <div className="text-emerald-400 font-bold pt-1 text-[11px]">
                Centralized hub allows rapid geo-grid proximity calibration statewide.
              </div>
            </div>
          </div>

          {/* Active Hub Geographic Matrix Detail */}
          <div className="lg:col-span-7 bg-white rounded-sm border border-slate-700 p-7 shadow-2xl">
            <div className="border-b border-slate-200 pb-5 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Target County Profile
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-sm bg-orange-100 text-orange-700 border border-orange-200 font-bold">
                  Wallingford Distance: {activeHub.distanceFromWallingford}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">{activeHub.county}</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {activeHub.marketProfile}
              </p>
            </div>

            {/* Municipality Badges */}
            <div className="space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Primary Municipalities & Town Landing Silos Covered:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {activeHub.towns.map((town) => (
                  <div
                    key={town}
                    className="p-2.5 rounded-sm bg-slate-50 border border-slate-200 text-center text-xs font-bold text-slate-600 hover:border-orange-500/50 transition"
                  >
                    {town}
                  </div>
                ))}
              </div>
            </div>

            {/* Statewide Comprehensive Service Corridor Organic Matrix */}
            <div className="mt-8 pt-6 border-t border-slate-200 space-y-2 text-xs text-slate-500">
              <div className="font-black uppercase tracking-wider text-slate-600 text-[11px]">
                Connecticut Organic Search Relevance Network:
              </div>
              <p className="leading-relaxed">
                We build dedicated localized citation graphs and town-by-town service pages for high-population and high-income clusters including <strong>Hartford</strong>, <strong>New Haven</strong>, <strong>Stamford</strong>, <strong>Groton</strong>, <strong>Greenwich</strong>, <strong>Waterbury</strong>, <strong>Norwalk</strong>, <strong>Bridgeport</strong>, <strong>Danbury</strong>, <strong>West Hartford</strong>, and <strong>Wallingford</strong>.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
