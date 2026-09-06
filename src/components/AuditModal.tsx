import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Phone, Loader2, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { BUSINESS_ENTITY } from '../data/content';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [state, handleSubmit] = useForm('xqpkdqdd');
  const [form, setForm] = useState({
    businessName: '',
    urlOrGbp: '',
    trade: '',
    phone: '',
    email: '',
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-lg w-full max-w-xl shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-orange-400">
              Direct-Response Strategy
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
              Claim Free Connecticut Local Search Audit
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-sm bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {state.succeeded ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black uppercase text-white tracking-tight">Audit Request Sent to Formspree!</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Our Wallingford audit director has received your profile details. We are analyzing your 13x13 geo-grid proximity and will contact you via <strong>{form.phone || form.email}</strong> shortly.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={`tel:${BUSINESS_ENTITY.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-tight transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Directly: {BUSINESS_ENTITY.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-sm bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase transition cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Formspree Special Settings */}
              <input type="hidden" name="_subject" value={`Modal Audit Request: ${form.businessName || 'CT Prospect'}`} />
              <input type="hidden" name="form_source" value="Navbar/Hero Audit Modal" />

              {state.errors && (
                <div className="p-3 rounded-sm bg-red-950/80 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>Submission error. Please verify info or call us directly at {BUSINESS_ENTITY.phone}.</span>
                </div>
              )}

              <div className="p-3 rounded-sm bg-orange-950/30 border border-orange-800/40 text-orange-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="font-semibold">We inspect your Google 3-Pack rank, citation health, and competitor spam.</span>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Business Name (GBP or Legal Name) *
                </label>
                <input
                  type="text"
                  name="company_name"
                  id="modal_company_name"
                  required
                  placeholder="e.g. Wallingford Mechanical Contractors"
                  value={form.businessName}
                  onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-sm bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500"
                />
                <ValidationError prefix="Company Name" field="company_name" errors={state.errors} className="text-red-400 text-[10px] mt-1" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Website URL or Google Maps Link *
                  </label>
                  <input
                    type="text"
                    name="website_or_maps_link"
                    id="modal_website_or_maps"
                    required
                    placeholder="e.g. https://mybusiness.com"
                    value={form.urlOrGbp}
                    onChange={(e) => setForm({ ...form, urlOrGbp: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-sm bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500"
                  />
                  <ValidationError prefix="Website or Maps Link" field="website_or_maps_link" errors={state.errors} className="text-red-400 text-[10px] mt-1" />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Primary Trade / Industry *
                  </label>
                  <input
                    type="text"
                    name="primary_trade"
                    id="modal_primary_trade"
                    required
                    placeholder="e.g. HVAC, Roofing, Legal"
                    value={form.trade}
                    onChange={(e) => setForm({ ...form, trade: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-sm bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500"
                  />
                  <ValidationError prefix="Primary Trade" field="primary_trade" errors={state.errors} className="text-red-400 text-[10px] mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Direct Phone (for results briefing) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="modal_phone"
                    required
                    placeholder="+1 860-000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-sm bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500 font-mono"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-400 text-[10px] mt-1" />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="modal_email"
                    required
                    placeholder="owner@yourcompany.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-sm bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500 font-mono"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-[10px] mt-1" />
                </div>
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-3.5 rounded-sm bg-orange-600 hover:bg-orange-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-xs uppercase tracking-tight shadow-lg shadow-orange-950/60 transition flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting to Formspree...</span>
                  </>
                ) : (
                  <>
                    <span>Generate My CT Local Search Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
