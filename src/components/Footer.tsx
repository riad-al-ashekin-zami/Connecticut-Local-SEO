import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Globe, ShieldCheck, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_ENTITY } from '../data/content';

interface FooterProps {
  onOpenDevToolkit?: () => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit, onOpenDevToolkit }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Value Proposition Bar */}
      <div className="border-b border-slate-900 bg-slate-950/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-tight">100% White-Hat Local SEO</p>
                <p className="text-slate-400 text-[11px]">Strict algorithmic compliance with Google Map Pack guidelines</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-tight">Proprietary Geo-Grid Audits</p>
                <p className="text-slate-400 text-[11px]">Empirical 13x13 coordinate tracking across CT municipalities</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-tight">Statewide Connecticut Nexus</p>
                <p className="text-slate-400 text-[11px]">Central Wallingford base serving all 8 Connecticut counties</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Brand Authority & Statement */}
          <div className="lg:col-span-4 md:col-span-6 space-y-5">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-sm bg-orange-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-orange-950/60 group-hover:bg-orange-500 transition">
                CT
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight uppercase block leading-none">
                  {BUSINESS_ENTITY.brandName}
                </span>
                <span className="text-[10px] text-orange-400 font-mono tracking-widest uppercase">
                  localseoct.com
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed">
              Connecticut’s dedicated local search optimization agency. We transform invisible red geo-grids into green top-3 Google Map Pack positions, generating qualified inbound phone calls and high-ticket contracts for service contractors and local businesses.
            </p>

            <div className="pt-1 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Verified Google Entity
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-300">
                Wallingford Ground Truth
              </span>
            </div>
          </div>

          {/* Col 2: Navigation (Primary & Secondary Links) */}
          <div className="lg:col-span-3 md:col-span-6 space-y-5">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-white border-l-2 border-orange-500 pl-2 mb-2.5">
                Core Pages
              </div>
              <ul className="space-y-2 text-slate-300 font-bold text-xs">
                <li>
                  <Link to="/seo-services-connecticut/" className="hover:text-orange-400 transition flex items-center gap-1.5">
                    <span className="text-orange-500">›</span> SEO Services
                  </Link>
                </li>
                <li>
                  <Link to="/seo-company-connecticut/" className="hover:text-orange-400 transition flex items-center gap-1.5">
                    <span className="text-orange-500">›</span> SEO Company
                  </Link>
                </li>
                <li>
                  <Link to="/seo-agency-connecticut/" className="hover:text-orange-400 transition flex items-center gap-1.5">
                    <span className="text-orange-500">›</span> SEO Agency
                  </Link>
                </li>
                <li>
                  <Link to="/contact/" className="hover:text-orange-400 transition flex items-center gap-1.5">
                    <span className="text-orange-500">›</span> Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-black uppercase tracking-widest text-slate-400 border-l-2 border-slate-700 pl-2 mb-2.5">
                Target Locations
              </div>
              <ul className="space-y-2 text-slate-400 font-medium text-xs">
                <li>
                  <Link to="/local-seo-danbury-ct/" className="hover:text-orange-400 transition flex items-center gap-1.5">
                    <span className="text-slate-600">›</span> Danbury, CT
                  </Link>
                </li>
                <li>
                  <Link to="/seo-wallingford-ct/" className="hover:text-orange-400 transition flex items-center gap-1.5">
                    <span className="text-slate-600">›</span> Wallingford, CT
                  </Link>
                </li>
                <li>
                  <Link to="/seo-new-haven-ct/" className="hover:text-orange-400 transition flex items-center gap-1.5">
                    <span className="text-slate-600">›</span> New Haven, CT
                  </Link>
                </li>
                <li>
                  <Link to="/local-seo-waterford-ct/" className="hover:text-orange-400 transition flex items-center gap-1.5">
                    <span className="text-slate-600">›</span> Waterford, CT
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: CT Municipalities & Regional Radius */}
          <div className="lg:col-span-2 md:col-span-6 space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-white border-l-2 border-orange-500 pl-2">
              Territory Radius
            </div>
            <p className="text-[11px] text-slate-400 leading-normal">
              Physical dispatch from central Wallingford covering all major Connecticut municipal corridors:
            </p>
            <ul className="space-y-1.5 text-slate-300 text-[11px] font-medium">
              <li className="text-orange-400 font-bold flex items-center gap-1">
                <MapPin className="w-3 h-3 shrink-0" /> Wallingford (Central HQ)
              </li>
              <li>• New Haven County</li>
              <li>• Hartford & Central CT</li>
              <li>• Stamford & Greenwich</li>
              <li>• Norwalk & Fairfield Co.</li>
              <li>• Waterbury & Litchfield</li>
              <li>• Middletown & Middlesex</li>
              <li>• New London & Groton</li>
            </ul>
          </div>

          {/* Col 4: Official NAP Card & Lead CTA */}
          <div className="lg:col-span-3 md:col-span-6 space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-white border-l-2 border-orange-500 pl-2">
              Official Business NAP
            </div>
            
            <div className="bg-slate-900/80 border border-slate-800 rounded-sm p-4 space-y-3 shadow-inner">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">{BUSINESS_ENTITY.brandName}</span>
                  <span className="text-slate-300">{BUSINESS_ENTITY.address.street}</span>
                  <span className="text-slate-400 block">{BUSINESS_ENTITY.address.city}, {BUSINESS_ENTITY.address.state} {BUSINESS_ENTITY.address.postalCode}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1 border-t border-slate-800/80">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-semibold block">Direct Inbound Line</span>
                  <a href={`tel:${BUSINESS_ENTITY.phoneRaw}`} className="text-white font-black hover:text-orange-400 transition font-mono text-sm">
                    {BUSINESS_ENTITY.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1 border-t border-slate-800/80">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-slate-300 text-[11px]">Mon – Fri: 8:30 AM – 6:00 PM EST</span>
              </div>

              <div className="flex items-center gap-2.5 pt-1 border-t border-slate-800/80">
                <Globe className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="font-mono text-slate-300 text-[11px]">{BUSINESS_ENTITY.targetDomain}</span>
              </div>

              <button
                onClick={onOpenAudit}
                className="w-full mt-3 bg-orange-600 hover:bg-orange-700 active:scale-98 text-white py-3 px-4 font-black text-xs uppercase tracking-tight rounded-sm transition cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-orange-950/50 group"
              >
                <span>CLAIM FREE CT LOCAL AUDIT</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal, Privacy & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {BUSINESS_ENTITY.brandName} ({BUSINESS_ENTITY.targetDomain}). All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>Primary Category: {BUSINESS_ENTITY.category}</span>
            <span>•</span>
            <Link to="/contact/" className="hover:text-slate-200 transition">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact/" className="hover:text-slate-200 transition">Terms of Service</Link>
            <span>•</span>
            <span className="text-emerald-400 font-medium">100% Guaranteed NAP Consistency</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

