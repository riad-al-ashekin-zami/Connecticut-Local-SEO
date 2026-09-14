import { Helmet } from 'react-helmet-async';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { BarChart3, Globe, LineChart, Target, ArrowRight } from 'lucide-react';

export function FreeAudit() {
  const [state, handleSubmit] = useForm('xqpkdqdd');
  const navigate = useNavigate();

  useEffect(() => {
    if (state.succeeded) {
      navigate('/thank-you');
    }
  }, [state.succeeded, navigate]);

  return (
    <>
      <Helmet>
        <title>Get Your Free SEO Audit | Local SEO CT</title>
        <meta name="description" content="Request a free, comprehensive SEO audit for your Connecticut business. No obligation, just actionable insights to grow your traffic." />
      </Helmet>

      <div className="min-h-screen bg-slate-50 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Value Prop */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Stop guessing. <br/>
                <span className="text-blue-600">Start ranking.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Enter your details below to receive a comprehensive analysis of your website's search performance, technical health, and local visibility.
              </p>
              
              <div className="space-y-6 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Competitor Analysis</h3>
                    <p className="text-slate-600">Discover exactly why your competitors are outranking you and how to steal their traffic.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Technical Health Check</h3>
                    <p className="text-slate-600">Identify hidden technical errors, slow load times, and mobile usability issues holding you back.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <LineChart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Actionable Roadmap</h3>
                    <p className="text-slate-600">Get a step-by-step blueprint to improve your Google Maps presence and organic rankings.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-10"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Claim Free CT Local Audit</h2>
                <p className="text-slate-500 mb-8">No commitment required. All fields are optional.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="form_type" value="Free Audit Page Lead" />
                  <input type="hidden" name="source_url" value={window.location.href} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="full_name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="full_name"
                        type="text"
                        name="full_name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-slate-900"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="company_name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Business Name
                      </label>
                      <input
                        id="company_name"
                        type="text"
                        name="company_name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-slate-900"
                        placeholder="e.g. Apex Plumbing"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="website_or_gbp" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Website URL or GBP Link
                      </label>
                      <input
                        id="website_or_gbp"
                        type="text"
                        name="website_or_gbp"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-slate-900"
                        placeholder="e.g. mybusiness.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="primary_service" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Main Business Service
                      </label>
                      <input
                        id="primary_service"
                        type="text"
                        name="primary_service"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-slate-900"
                        placeholder="e.g. Commercial Roofing"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-slate-900 font-mono"
                        placeholder="(203) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-slate-900 font-mono"
                        placeholder="owner@yourcompany.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="target_ct_territory" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Business Location / Service Area
                    </label>
                    <input
                      id="target_ct_territory"
                      type="text"
                      name="target_ct_territory"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-slate-900"
                      placeholder="e.g. New Haven, Wallingford, Hartford"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Anything Else We Should Know?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-slate-900 resize-none"
                      placeholder="Tell us about your project requirements, timeline, and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-4 rounded-lg transition-all shadow-lg shadow-orange-500/25 disabled:opacity-70 disabled:cursor-not-allowed mt-4 uppercase tracking-tight"
                  >
                    <span>{state.submitting ? 'Sending...' : 'Claim Free CT Local Audit'}</span>
                    {!state.submitting && <ArrowRight className="w-5 h-5" />}
                  </button>
                  
                  <p className="text-xs text-slate-500 text-center mt-3">
                    We'll use your details to contact you about your audit. Read our <a href="/contact/" className="text-blue-600 hover:underline">Privacy Policy</a>.
                  </p>

                  {state.errors && state.errors.length > 0 && (
                     <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200">
                        There was a problem submitting your form. Please try again.
                     </div>
                  )}
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
