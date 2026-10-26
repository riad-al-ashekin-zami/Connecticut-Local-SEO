import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Copy, Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { BUSINESS_ENTITY } from '../data/content';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BUSINESS_ENTITY.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Connecticut Local SEO Experts | info@localseoct.com</title>
        <meta
          name="description"
          content={`Contact Connecticut Local SEO at ${BUSINESS_ENTITY.email} or call ${BUSINESS_ENTITY.phone}. Verified Wallingford HQ serving all 8 CT counties with 100% white-hat local search optimization.`}
        />
        <link rel="canonical" href="https://localseoct.com/contact/" />
      </Helmet>

      {/* Dedicated Contact Header Hero */}
      <section className="bg-gradient-to-b from-blue-700 via-blue-600 to-blue-600 text-white pt-12 pb-16 border-b border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span>›</span>
            <span className="text-white font-bold">Contact</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              <span>Direct Agency Access • Zero Gatekeepers</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Get in Touch with Our <br />
              <span className="text-orange-400">Connecticut SEO Team</span>
            </h1>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Have an inquiry, need a competitive geo-grid audit, or looking to partner on local search dominance?
              Reach out directly via our official inbound address <strong className="text-white font-mono">{BUSINESS_ENTITY.email}</strong>, call our direct phone dispatch, or submit the audit form below.
            </p>
          </div>

          {/* High-Impact Direct Contact Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {/* Email Card - High Priority Focus */}
            <div className="bg-white/10 backdrop-blur-xs border-2 border-orange-400/60 rounded-lg p-6 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 bg-orange-500 text-white font-black text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-bl">
                Direct Inbound
              </div>
              <div className="w-10 h-10 rounded-sm bg-orange-500 flex items-center justify-center text-white mb-4 shadow-sm shadow-orange-500/30">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-bold text-orange-300 uppercase tracking-wider">
                Official Business Email
              </div>
              <a
                href={`mailto:${BUSINESS_ENTITY.email}`}
                className="text-lg font-black font-mono text-white hover:text-orange-300 transition-colors block mt-1 break-all"
              >
                {BUSINESS_ENTITY.email}
              </a>
              <p className="text-blue-100 text-xs mt-2">
                Monitored continuously during EST operating hours. Guaranteed reply within 24 business hours.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs font-bold text-blue-100 hover:text-white flex items-center gap-1.5 transition cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span className="text-emerald-300">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${BUSINESS_ENTITY.email}`}
                  className="text-xs font-bold text-orange-300 hover:text-white flex items-center gap-1 transition"
                >
                  <span>Compose Mail</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-lg p-6 relative shadow-lg">
              <div className="w-10 h-10 rounded-sm bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-bold text-blue-200 uppercase tracking-wider">
                Direct Line (Click-to-Call)
              </div>
              <a
                href={`tel:${BUSINESS_ENTITY.phoneRaw}`}
                className="text-lg font-black font-mono text-white hover:text-orange-300 transition-colors block mt-1"
              >
                {BUSINESS_ENTITY.phone}
              </a>
              <p className="text-blue-100 text-xs mt-2">
                Direct route to senior local search technicians. No automated phone trees or offshore call centers.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-blue-200">Hours: 8:30 AM – 6:00 PM EST</span>
                <a
                  href={`tel:${BUSINESS_ENTITY.phoneRaw}`}
                  className="text-xs font-bold text-emerald-300 hover:text-white flex items-center gap-1 transition"
                >
                  <span>Call Now</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Physical Headquarters Card */}
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-lg p-6 relative shadow-lg">
              <div className="w-10 h-10 rounded-sm bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-cyan-300 mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-bold text-blue-200 uppercase tracking-wider">
                Verified Physical Nexus
              </div>
              <div className="text-base font-bold text-white mt-1">
                {BUSINESS_ENTITY.address.street}
              </div>
              <p className="text-blue-100 text-xs mt-1">
                {BUSINESS_ENTITY.address.city}, {BUSINESS_ENTITY.address.state} {BUSINESS_ENTITY.address.postalCode} • Serving all 8 Connecticut Counties
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-blue-200 font-mono">41.4570° N, 72.8232° W</span>
                <a
                  href="https://maps.google.com/?q=50+Sunrise+Cir,+Wallingford,+CT+06492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-cyan-300 hover:text-white flex items-center gap-1 transition"
                >
                  <span>View Map</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Main Contact Form & Strict NAP Section */}
      <ContactSection />
    </>
  );
}
