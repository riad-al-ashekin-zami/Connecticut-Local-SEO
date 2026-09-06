import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Clock, ShieldCheck, CheckCircle2, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { BUSINESS_ENTITY } from '../data/content';
import { AuditRequest } from '../types';

export const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm('xqpkdqdd');

  const [formData, setFormData] = useState<AuditRequest>({
    businessName: '',
    websiteOrGbp: '',
    city: 'Wallingford & New Haven County',
    primaryService: '',
    phone: '',
    email: '',
  });

  return (
    <section id="contact" className="py-20 bg-slate-900 text-slate-50 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with H2 */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="bg-orange-600/10 border-l-4 border-orange-600 px-4 py-2 w-fit mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Direct Response Conversion Anchor
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Speak With a Connecticut Local SEO Expert <br className="hidden sm:inline" />
            <span className="text-orange-500 underline decoration-4 underline-offset-4">& Lock In Your Territory</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            In every town across Connecticut, only three businesses win the lion’s share of phone calls from the Google Map 3-Pack. If your competitors are currently taking those calls, every day you wait costs you high-ticket jobs. Request a comprehensive, 100% free Connecticut Local Search Audit today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Audit Request Form (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-lg border border-slate-800 p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-800">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">Claim Your Free CT Local Audit</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Comprehensive Google 3-Pack & Geo-Grid review delivered within 24 business hours.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-orange-400 font-black uppercase tracking-wider bg-orange-950/80 px-2.5 py-1 rounded-sm border border-orange-800/80">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Obligation</span>
              </div>
            </div>

            {state.succeeded ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black uppercase text-white tracking-tight">Audit Request Dispatched to Formspree!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you! Your submission has been received. Our senior local SEO director is running your Wallingford / Connecticut geo-grid proximity analysis. We will reach out to <strong>{formData.phone || formData.email}</strong> shortly.
                </p>
                <div className="pt-4">
                  <a
                    href={`tel:${BUSINESS_ENTITY.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-tight transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Need Immediate Dispatch? Call {BUSINESS_ENTITY.phone}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Formspree Special Settings */}
                <input type="hidden" name="_subject" value={`New CT Local Audit Lead: ${formData.businessName || 'Connecticut Business'}`} />
                <input type="hidden" name="form_type" value="Main Contact Page Audit Request" />

                {state.errors && (
                  <div className="p-3.5 rounded-sm bg-red-950/80 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>There was an error submitting the form. Please check the fields or call us directly at {BUSINESS_ENTITY.phone}.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Company Legal / Trade Name *
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      id="company_name"
                      required
                      placeholder="e.g. Apex Plumbing & HVAC CT"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                    <ValidationError prefix="Company Name" field="company_name" errors={state.errors} className="text-red-400 text-[10px] mt-1" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Website URL or GBP Profile Link *
                    </label>
                    <input
                      type="text"
                      name="website_or_gbp"
                      id="website_or_gbp"
                      required
                      placeholder="e.g. https://mybusinessct.com"
                      value={formData.websiteOrGbp}
                      onChange={(e) => setFormData({ ...formData, websiteOrGbp: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                    <ValidationError prefix="Website or GBP" field="website_or_gbp" errors={state.errors} className="text-red-400 text-[10px] mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Primary Service / High-Ticket Trade *
                    </label>
                    <input
                      type="text"
                      name="primary_service"
                      id="primary_service"
                      required
                      placeholder="e.g. Commercial Roofing, Remodeling"
                      value={formData.primaryService}
                      onChange={(e) => setFormData({ ...formData, primaryService: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                    <ValidationError prefix="Primary Service" field="primary_service" errors={state.errors} className="text-red-400 text-[10px] mt-1" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Target Municipality / County in CT *
                    </label>
                    <select
                      name="target_ct_territory"
                      id="target_ct_territory"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500"
                    >
                      <option value="Wallingford & New Haven County">Wallingford & New Haven County</option>
                      <option value="Hartford & Greater Hartford County">Hartford & Greater Hartford County</option>
                      <option value="Stamford, Greenwich & Fairfield County">Stamford, Greenwich & Fairfield County</option>
                      <option value="Groton, New London & Eastern Shoreline">Groton, New London & Eastern Shoreline</option>
                      <option value="Waterbury, Danbury & Western CT">Waterbury, Danbury & Western CT</option>
                      <option value="Statewide All 8 CT Counties">Statewide All 8 CT Counties</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      placeholder="(203) 000-0000 or (860) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500 font-mono"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-400 text-[10px] mt-1" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="owner@yourcompanyct.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500 font-mono"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-[10px] mt-1" />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    id="submit-audit-request-btn"
                    className="w-full py-4 rounded-sm bg-orange-600 hover:bg-orange-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-sm uppercase tracking-tight shadow-xl shadow-orange-950/60 transition flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    {state.submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending to Formspree...</span>
                      </>
                    ) : (
                      <>
                        <span>Claim Free CT Local Audit</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2.5 font-mono">
                    100% Confidential. Directly sent via verified Formspree endpoint.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Strict Verified NAP Box (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950 rounded-lg border-2 border-slate-700 p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-mono px-3 py-1 font-black rounded-bl-sm border-l border-b border-orange-500 uppercase tracking-wide">
                GBP EXACT MATCH VERIFIED
              </div>

              <div className="text-[10px] font-black uppercase tracking-widest text-orange-500 flex items-center gap-1.5 mb-3">
                <MapPin className="w-4 h-4" />
                Strict Entity & NAP Ground Truth
              </div>

              <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">{BUSINESS_ENTITY.brandName}</h4>
              <p className="text-xs text-slate-400 mt-1">
                Legal Entity: {BUSINESS_ENTITY.legalName} • {BUSINESS_ENTITY.category}
              </p>

              <div className="mt-6 space-y-3.5 text-sm">
                
                {/* Physical Address */}
                <div className="flex items-start gap-3 p-3.5 rounded-sm bg-slate-900 border border-slate-800">
                  <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Physical Address (GBP Verbatim)</div>
                    <div className="font-bold text-white text-base">{BUSINESS_ENTITY.address.street}</div>
                    <div className="text-slate-300 font-mono text-xs">
                      {BUSINESS_ENTITY.address.city}, {BUSINESS_ENTITY.address.state} {BUSINESS_ENTITY.address.postalCode}, {BUSINESS_ENTITY.address.country}
                    </div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3 p-3.5 rounded-sm bg-slate-900 border border-slate-800">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Direct Phone Number</div>
                    <a
                      href={`tel:${BUSINESS_ENTITY.phoneRaw}`}
                      className="font-black text-white text-lg hover:text-orange-400 transition"
                    >
                      {BUSINESS_ENTITY.phone}
                    </a>
                    <div className="text-[11px] text-slate-400">Click-to-Call Enabled Across All CT Devices</div>
                  </div>
                </div>

                {/* Target Domain */}
                <div className="flex items-start gap-3 p-3.5 rounded-sm bg-slate-900 border border-slate-800">
                  <Globe className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target Domain & URL</div>
                    <div className="font-mono text-slate-200 text-xs font-bold">{BUSINESS_ENTITY.domainUrl}</div>
                    <div className="text-[11px] text-slate-400">Canonical Entity Registration</div>
                  </div>
                </div>

                {/* Hours & Area */}
                <div className="flex items-start gap-3 p-3.5 rounded-sm bg-slate-900 border border-slate-800">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Operations & Service Radius</div>
                    <div className="text-xs text-white font-bold">Mon – Fri: 8:30 AM – 6:00 PM EST</div>
                    <div className="text-[11px] text-slate-400">Statewide Connecticut (All 8 Counties)</div>
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Geo Coordinates:</span>
                <span className="font-mono text-orange-400 font-bold">41.4570° N, 72.8232° W</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
