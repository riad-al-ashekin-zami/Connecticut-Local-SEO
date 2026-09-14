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
    <footer className="bg-blue-600 text-blue-200 text-xs border-t border-blue-500 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Value Proposition Bar */}
      <div className="border-b border-blue-500 bg-blue-600/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-orange-500/10 border border-blue-600/20 flex items-center justify-center text-blue-600 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-tight">100% White-Hat Local SEO</p>
                <p className="text-blue-200 text-[11px]">Strict algorithmic compliance with Google Map Pack guidelines</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-tight">Proprietary Geo-Grid Audits</p>
                <p className="text-blue-200 text-[11px]">Empirical 13x13 coordinate tracking across CT municipalities</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-tight">Statewide Connecticut Nexus</p>
                <p className="text-blue-200 text-[11px]">Central Wallingford base serving all 8 Connecticut counties</p>
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
              <div className="w-10 h-10 rounded-sm bg-orange-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-orange-500/30 group-hover:bg-orange-500 transition">
                CT
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight uppercase block leading-none">
                  {BUSINESS_ENTITY.brandName}
                </span>
                <span className="text-[10px] text-blue-100 font-mono tracking-widest uppercase">
                  localseoct.com
                </span>
              </div>
            </Link>

            <p className="text-blue-100 text-xs leading-relaxed">
              Connecticut’s dedicated local search optimization agency. We transform invisible red geo-grids into green top-3 Google Map Pack positions, generating qualified inbound phone calls and high-ticket contracts for service contractors and local businesses.
            </p>

            <div className="pt-1 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-white border border-transparent text-[11px] font-semibold text-blue-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Verified Google Entity
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-white border border-transparent text-[11px] font-semibold text-blue-600">
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
              <ul className="space-y-2 text-blue-100 font-bold text-xs">
                <li>
                  <Link to="/seo-services-connecticut/" className="hover:text-blue-600 transition flex items-center gap-1.5">
                    <span className="text-blue-600">›</span> SEO Services
                  </Link>
                </li>
                <li>
                  <Link to="/seo-consultant-connecticut/" className="hover:text-blue-600 transition flex items-center gap-1.5">
                    <span className="text-blue-600">›</span> SEO Consultant
                  </Link>
                </li>
                <li>
                  <Link to="/pricing/" className="hover:text-blue-600 transition flex items-center gap-1.5">
                    <span className="text-blue-600">›</span> Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/contact/" className="hover:text-blue-600 transition flex items-center gap-1.5">
                    <span className="text-blue-600">›</span> Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-black uppercase tracking-widest text-white border-l-2 border-orange-500 pl-2 mb-2.5">
                Target Locations
              </div>
              <ul className="space-y-2 text-blue-100 font-medium text-xs">
                <li>
                  <Link to="/local-seo-danbury-ct/" className="hover:text-blue-600 transition flex items-center gap-1.5">
                    <span className="text-blue-100">›</span> Danbury, CT
                  </Link>
                </li>
                <li>
                  <Link to="/seo-wallingford-ct/" className="hover:text-blue-600 transition flex items-center gap-1.5">
                    <span className="text-blue-100">›</span> Wallingford, CT
                  </Link>
                </li>
                <li>
                  <Link to="/seo-new-haven-ct/" className="hover:text-blue-600 transition flex items-center gap-1.5">
                    <span className="text-blue-100">›</span> New Haven, CT
                  </Link>
                </li>
                <li>
                  <Link to="/local-seo-waterford-ct/" className="hover:text-blue-600 transition flex items-center gap-1.5">
                    <span className="text-blue-100">›</span> Waterford, CT
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
            <p className="text-[11px] text-blue-100 leading-normal">
              Physical dispatch from central Wallingford covering all major Connecticut municipal corridors:
            </p>
            <ul className="space-y-1.5 text-blue-100 text-[11px] font-medium">
              <li className="text-blue-600 font-bold flex items-center gap-1">
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
            
            <div className="bg-white border border-slate-200 rounded-sm p-4 space-y-3 shadow-inner">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-900 font-bold block">{BUSINESS_ENTITY.brandName}</span>
                  <span className="text-slate-600 block">{BUSINESS_ENTITY.address.street}</span>
                  <span className="text-slate-600 block">{BUSINESS_ENTITY.address.city}, {BUSINESS_ENTITY.address.state} {BUSINESS_ENTITY.address.postalCode}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-3 border-t border-slate-200">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase text-slate-500 font-semibold block">Direct Inbound Line</span>
                  <a href={`tel:${BUSINESS_ENTITY.phoneRaw}`} className="text-slate-900 font-black hover:text-blue-600 transition font-mono text-sm">
                    {BUSINESS_ENTITY.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-3 border-t border-slate-200">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="text-slate-600 text-[11px]">Mon – Fri: 8:30 AM – 6:00 PM EST</span>
              </div>

              <div className="flex items-center gap-2.5 pt-3 border-t border-slate-200">
                <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-mono text-slate-600 text-[11px]">{BUSINESS_ENTITY.targetDomain}</span>
              </div>

              <button
                onClick={onOpenAudit}
                className="w-full mt-3 bg-orange-500 hover:bg-orange-600 active:scale-98 text-white py-3 px-4 font-black text-xs uppercase tracking-tight rounded-sm transition cursor-pointer flex items-center justify-center gap-2 shadow-sm shadow-orange-500/30 group"
              >
                <span>CLAIM FREE CT LOCAL AUDIT</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal, Privacy & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-blue-500 flex flex-col sm:flex-row items-center justify-between gap-4 text-blue-100 text-[11px]">
          <div>
            © {new Date().getFullYear()} {BUSINESS_ENTITY.brandName} ({BUSINESS_ENTITY.targetDomain}). All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-blue-200">
            <span>Primary Category: {BUSINESS_ENTITY.category}</span>
            <span>•</span>
            <Link to="/contact/" className="hover:text-blue-100 transition">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact/" className="hover:text-blue-100 transition">Terms of Service</Link>
            <span>•</span>
            <span className="text-emerald-400 font-medium">100% Guaranteed NAP Consistency</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

