import { Helmet } from 'react-helmet-async';
import { useOutletContext, Link } from 'react-router-dom';
import { MapPin, ArrowRight, Target, Map as MapIcon, BarChart3, Crosshair, Search, Anchor, ShieldCheck, Compass, TrendingUp, Users } from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';

export function Waterford() {
  const { openAudit } = useOutletContext<{ openAudit: () => void }>();

  return (
    <>
      <Helmet>
        <title>Local SEO Waterford CT | SEO Company in Waterford</title>
        <meta name="description" content="Expert local SEO services for Waterford CT businesses. Rank higher, get more calls, and dominate the New London County Google Map 3-Pack." />
        <link rel="canonical" href="https://localseoct.com/local-seo-waterford-ct/" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-950 text-slate-50 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-orange-950/50 border border-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <MapPin className="w-3.5 h-3.5" />
            Waterford & New London County
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-8 leading-[1.1]">
            Local SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Waterford CT</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium mb-12 max-w-3xl mx-auto">
            Serving the Waterford and broader Southeastern Connecticut market requires a highly strategic approach to local search. We help local service businesses capture high-intent traffic and aggressively outrank competitors in the Google 3-Pack.
          </p>
          <button
            onClick={openAudit}
            className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-black px-8 py-4 uppercase tracking-tight text-sm rounded-sm transition-all shadow-lg shadow-orange-950/50 hover:-translate-y-0.5"
          >
            <span>Get Your Free Waterford SEO Audit</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Waterford Search Landscape */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
                Dominating Southeastern Connecticut
              </h2>
              <div className="w-20 h-1 bg-orange-600"></div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Waterford acts as a vital commercial and retail corridor, effectively bridging the gap between the urban density of New London and the affluent shoreline towns of Niantic and East Lyme.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Because this region features a unique mix of dense residential neighborhoods, heavy commercial strips (like the Route 85/I-95 interchange), and seasonal coastal communities, search intent varies wildly depending on the time of year and the specific geographic origin of the search.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Our local SEO strategies are engineered for this specific topology. We don't just try to rank you for "Waterford." We build comprehensive architectures that ensure your business captures demand regardless of whether the customer is searching from a smartphone in downtown New London, a desktop in Groton, or a residence in Quaker Hill.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-lg blur-2xl"></div>
              <div className="bg-slate-950 p-8 rounded-sm border border-slate-800 relative shadow-2xl">
                <h3 className="text-xl font-bold uppercase text-white mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-500" /> Waterford SEO Tactics
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                    <span className="text-slate-300 text-sm leading-relaxed"><strong>Regional Domination:</strong> Expanding your Google Map Pack ranking footprint outward from your Waterford headquarters to capture search volume across New London and Groton.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                    <span className="text-slate-300 text-sm leading-relaxed"><strong>Local Authority Signals:</strong> Securing high-quality backlinks from regional directories, Southeastern CT news outlets, and local business associations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                    <span className="text-slate-300 text-sm leading-relaxed"><strong>Shoreline Search Intent:</strong> Adapting content and service pages to capture seasonal demographics and specific coastal service requirements.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
              Local SEO Services for Waterford
            </h2>
            <p className="text-slate-400 text-lg">
              We execute a strict, ROI-focused methodology designed to drive targeted traffic to your website and convert that traffic into inbound phone calls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <MapIcon className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">Google Map Pack Optimization</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We optimize your Google Business Profile (GBP), manage your NAP (Name, Address, Phone) consistency across the web, and build the local trust signals Google's algorithm demands to rank your Waterford business in the top 3 spots.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <Search className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">Organic Website SEO</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We build technically sound website architectures. By optimizing on-page elements, fixing core web vitals, and producing hyper-local service content, we capture the highly lucrative organic real estate located below the maps.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <TrendingUp className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">Conversion Rate Optimization</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Traffic is meaningless if it doesn't convert. We aggressively optimize your landing pages, ensuring clear call-to-actions, mobile-friendly layouts, and compelling copy so that Waterford traffic actually turns into closed revenue.
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <Compass className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">Competitor Teardowns</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We analyze the top-ranking competitors in your specific niche across New London County. We dissect their link profile and content structure to build a superior, data-backed strategy that systematically displaces them from page one.
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">Reputation Management</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Your star rating directly impacts your click-through rate. We help implement automated systems to solicit positive reviews from satisfied customers in Waterford while mitigating negative feedback.
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <BarChart3 className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">Live Telemetry & Reporting</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We deploy live dashboards allowing you to track keyword rankings, inbound phone calls, and form submissions in real-time. We also utilize geo-grid tracking to show visual ranking improvements across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Expansion */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {['New London, CT', 'East Lyme, CT', 'Groton, CT', 'Niantic, CT', 'Montville, CT', 'Mystic, CT'].map((town, i) => (
                  <div key={i} className="bg-slate-950 border border-slate-800 p-4 rounded-sm flex items-center gap-3">
                    <Crosshair className="w-4 h-4 text-orange-500" />
                    <span className="text-slate-300 font-medium text-sm">{town}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-white">
                Expanding Across Southeastern CT
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Your service radius doesn't stop at the Waterford town line.
              </p>
              <p className="text-slate-400 leading-relaxed">
                As a specialized <Link to="/seo-agency-connecticut/" className="text-orange-400 hover:underline">SEO agency</Link>, we systematically expand your digital footprint. We build highly optimized, unique service pages targeting New London to the east, East Lyme (Niantic) to the west, and Groton across the Thames River. 
              </p>
              <p className="text-slate-400 leading-relaxed">
                Google's proximity filters make it difficult for a Waterford business to rank in the Groton Map Pack. Therefore, we engineer these service-area pages to capture the organic real estate *below* the Map Pack, ensuring your website acts as an aggressive lead generation engine across your entire service territory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">
              Waterford Local SEO FAQs
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">Is it hard to rank in New London County?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                While typically less saturated than Fairfield or New Haven counties, specific commercial corridors in Waterford and New London are highly competitive for high-value niches like home services (HVAC, plumbing, roofing), legal, and medical practices. It requires a dedicated, localized strategy, not a generic national template.
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">How do I rank in Groton if my office is in Waterford?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ranking in the Map Pack across town lines (especially across a physical barrier like a river) is challenging due to Google's strict proximity constraints. We combat this by establishing a dominant organic presence through targeted "Service + City" landing pages specifically optimized for Groton, capturing the organic traffic below the Map Pack.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">What ROI can I expect from Local SEO?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Local SEO is often the highest ROI marketing channel for service businesses because it captures users at the exact moment of high intent (e.g., searching for a "plumber near me" when a pipe bursts). We strictly track phone calls and form submissions via dynamic call tracking, so you can clearly calculate your return on investment month over month.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">Do I need a physical address in Waterford to rank there?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                To rank reliably in the Waterford Google Map Pack, you generally need a verified physical address within the town limits. If you operate as a Service Area Business (SAB) out of a neighboring town like Montville, we optimize your organic presence (website) to capture the Waterford traffic instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
