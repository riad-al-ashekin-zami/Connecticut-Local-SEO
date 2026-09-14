import React from 'react';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, MapPin, Star, Navigation, Globe, Search } from 'lucide-react';
import { BUSINESS_ENTITY, SEO_METADATA } from '../data/content';

interface HeroSectionProps {
  onOpenAudit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="hero" className="relative pt-8 pb-20 overflow-hidden bg-blue-600 text-white">
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(234,88,12,0.18),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left: Copy & Dual Conversion Engine */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bold Eyebrow */}
            <div className="bg-blue-700/50 border-l-4 border-white px-4 py-2 w-fit">
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                Dominating Google Map Packs • Wallingford CT Base
              </span>
            </div>

            {/* H1 Heading - Bold Typography Display Scale */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-[70px] leading-[0.88] font-black tracking-tighter text-white uppercase">
                The Local SEO <br />
                <span className="text-white underline decoration-4 sm:decoration-8 underline-offset-4">
                  Company CT
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-extrabold text-blue-100 mt-4 tracking-tight">
                Turn High-Intent Searches into Inbound Phone Calls & Booked Jobs
              </p>
            </div>

            {/* Supporting Lead Paragraph */}
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-xl font-normal">
              {SEO_METADATA.leadParagraph}
            </p>

            {/* Dual Conversion Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenAudit}
                id="hero-primary-audit-btn"
                className="bg-orange-500 hover:bg-orange-600 active:scale-98 text-white px-8 py-4 font-black text-sm tracking-tight rounded-sm uppercase shadow-xl shadow-orange-500/30 transition cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>CLAIM FREE LOCAL SEO AUDIT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${BUSINESS_ENTITY.phoneRaw}`}
                id="hero-secondary-call-btn"
                className="px-6 py-4 rounded-sm bg-white hover:bg-slate-50 text-slate-900 font-black text-sm tracking-tight uppercase border border-slate-200 hover:border-orange-500/50 transition flex items-center justify-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Now: {BUSINESS_ENTITY.phone}</span>
              </a>
            </div>

            {/* Trust Element: Wallingford Base & Phone Number Verification */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex -space-x-2 shrink-0">
                {/* 1. Official Google Logo */}
                <div className="w-10 h-10 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center shadow-lg shadow-black/40 shrink-0 hover:z-10 transition-transform hover:scale-105" title="Google Local Search">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                  </svg>
                </div>

                {/* 2. Official Google Maps Pin Logo */}
                <div className="w-10 h-10 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center shadow-lg shadow-black/40 shrink-0 hover:z-10 transition-transform hover:scale-105" title="Google Maps 3-Pack">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <path fill="#34A853" d="M12 2c3.87 0 7 3.13 7 7 0 5.25-7 13-7 13V2z" />
                    <path fill="#FBBC05" d="M12 2c-1.93 0-3.69.78-4.95 2.05L12 9V2z" />
                    <path fill="#EA4335" d="M12 2c1.93 0 3.69.78 4.95 2.05L12 9V2z" />
                    <circle cx="12" cy="9" r="3.2" fill="#FFFFFF" />
                    <circle cx="12" cy="9" r="1.8" fill="#EA4335" />
                  </svg>
                </div>

                {/* 3. Official Google Business Profile Logo */}
                <div className="w-10 h-10 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center shadow-lg shadow-black/40 shrink-0 hover:z-10 transition-transform hover:scale-105" title="Google Business Profile">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M3.5 8.5L5 4h14l1.5 4.5H3.5z" fill="#1A73E8" />
                    <path d="M3.5 8.5h17v2a2.5 2.5 0 01-5 0v-1a1 1 0 00-2 0v1a2.5 2.5 0 01-5 0v-1a1 1 0 00-2 0v1a2.5 2.5 0 01-3-2.5v-.5z" fill="#4285F4" />
                    <path d="M5 12v7a1 1 0 001 1h12a1 1 0 001-1v-7h-2v6H7v-6H5z" fill="#34A853" />
                    <path d="M9.5 15h5v5h-5v-5z" fill="#FBBC05" />
                  </svg>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-blue-100 font-bold tracking-tight">
                <span className="text-white font-black uppercase">Wallingford Base</span> • Physical Address Verified • Call Direct:{' '}
                <a href={`tel:${BUSINESS_ENTITY.phoneRaw}`} className="text-white hover:text-white underline decoration-orange-500 underline-offset-2 transition font-mono font-black">
                  {BUSINESS_ENTITY.phone}
                </a>
              </div>
            </div>

            {/* Micro-Trust Highlights Bar */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="flex items-center gap-2 text-blue-100">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">100% White-Hat Safety</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium">Wallingford Hub (50 Sunrise)</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">13x13 Geo-Grid Telemetry</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Navigation className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium">Zero Spam Tolerance</span>
              </div>
            </div>

          </div>

          {/* Hero Right: Live Interactive Google 3-Pack Telemetry Simulator */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-2xl relative">
              {/* Simulator Header with Traffic Light Dots */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-auto text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                  Rank Tracker: Active
                </span>
              </div>

              {/* Simulated Search Query */}
              <div className="bg-slate-50 rounded-sm p-3 flex items-center gap-2 text-xs text-slate-600 border border-slate-200 mb-4">
                <Search className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-mono text-slate-900 font-bold">local seo company ct</span>
                <span className="ml-auto text-[10px] font-mono text-slate-400 uppercase">Wallingford, CT</span>
              </div>

              {/* Simulated Map Pack Positions */}
              <div className="space-y-3">
                
                {/* #1 Winner Card */}
                <div className="bg-white border-2 border-orange-500 rounded-md p-4 relative shadow-md">
                  <div className="absolute -top-2.5 right-3 px-2 py-0.5 bg-orange-500 text-white font-black text-[10px] rounded-sm uppercase tracking-wider shadow">
                    Rank #1 in Map Pack
                  </div>
                  <div className="font-black text-slate-900 text-base sm:text-lg flex items-center gap-2">
                    <span>{BUSINESS_ENTITY.brandName}</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded border border-emerald-200">VERIFIED GBP</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-amber-500 my-1">
                    <span className="font-bold">5.0</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-slate-500 font-medium">(68 CT Client Reviews)</span>
                  </div>
                  <div className="text-xs text-slate-600 space-y-0.5 font-sans">
                    <div className="font-semibold">{BUSINESS_ENTITY.category} • Wallingford, CT</div>
                    <div className="text-slate-500 font-mono text-[11px]">{BUSINESS_ENTITY.address.street} ({BUSINESS_ENTITY.address.postalCode})</div>
                    <div className="text-emerald-600 font-bold text-[11px]">Open • Closes 6 PM • Inbound Dispatch &lt; 5 mins</div>
                  </div>
                  
                  {/* Action Buttons in Google Map Snippet */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <a
                      href={`tel:${BUSINESS_ENTITY.phoneRaw}`}
                      className="px-3 py-1.5 rounded-sm bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 flex items-center gap-1.5 font-bold transition text-xs"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call {BUSINESS_ENTITY.phone}
                    </a>
                    <button
                      onClick={onOpenAudit}
                      className="px-3 py-1.5 rounded-sm bg-orange-500 text-white hover:bg-orange-500 font-bold transition flex items-center gap-1 cursor-pointer text-xs uppercase shadow-sm shadow-orange-500/20"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Audit Your Rank
                    </button>
                  </div>
                </div>

                {/* Simulated Competitor #2 */}
                <div className="bg-slate-50 border border-slate-200 rounded-md p-3 text-xs text-slate-500">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-700">Competitor Agency A (Generic National)</span>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">RANK #2</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-amber-500/70 mt-0.5">
                    <span>4.2</span>
                    <span>★★★★☆</span>
                    <span className="text-slate-500">(14 reviews) • Hartford, CT</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">No geo-grid proximity optimization outside Hartford boundary</div>
                </div>

                {/* Simulated Competitor #3 */}
                <div className="bg-slate-50/50 border border-slate-100 rounded-md p-3 text-xs text-slate-400">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-500">Competitor Listing B (Spam / Keyword Stuffed)</span>
                    <span className="text-[10px] font-mono text-rose-500 font-bold">FLAGGED</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Virtual office address flagged for Google suspension</div>
                </div>
              </div>

              {/* Target Entity Data Footer Card from Theme */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-[10px] uppercase text-slate-400 mb-1.5 font-bold tracking-widest">
                  Target Entity Data
                </p>
                <div className="text-xs font-mono text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded border border-slate-200">
                  Brand: {BUSINESS_ENTITY.brandName}<br />
                  Hub: {BUSINESS_ENTITY.address.street}, {BUSINESS_ENTITY.address.city}, CT {BUSINESS_ENTITY.address.postalCode}<br />
                  Lat: 41.4570, Lng: -72.8232 • Radius: Statewide All 8 CT Counties
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
