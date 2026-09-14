import { Helmet } from 'react-helmet-async';
import { useOutletContext, Link } from 'react-router-dom';
import { MapPin, ArrowRight, Target, Map as MapIcon, BarChart3, Crosshair, Search, ShieldCheck, TrendingUp, Compass, Settings } from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';

export function Danbury() {
  const { openAudit } = useOutletContext<{ openAudit: () => void }>();

  return (
    <>
      <Helmet>
        <title>Local SEO Danbury CT | SEO Company in Danbury</title>
        <meta name="description" content="Dominate the Danbury local market. We are a specialized local SEO company helping Danbury CT businesses rank in the Google Map Pack and drive inbound calls." />
        <link rel="canonical" href="https://localseoct.com/local-seo-danbury-ct/" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-50 border border-blue-600/20 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <MapPin className="w-3.5 h-3.5" />
            Danbury, Connecticut Market
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Local SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Danbury CT</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-12 max-w-3xl mx-auto">
            Northern Fairfield County is a highly competitive, lucrative market. To win in Danbury, you need a local SEO company that understands the specific search behaviors of the region, the cross-border NY dynamics, and how to leverage geographic proximity to dominate the Google 3-Pack.
          </p>
          <button
            onClick={openAudit}
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 uppercase tracking-tight text-sm rounded-sm transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-0.5"
          >
            <span>Get Your Free Danbury SEO Audit</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Danbury Search Landscape */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900">
                Winning the "Hat City" Market
              </h2>
              <div className="w-20 h-1 bg-orange-500"></div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Danbury serves as the economic hub of Northern Fairfield County. Whether your business is located near the Danbury Fair Mall, along the busy I-84 corridor, or serves the greater Mill Plain Road commercial district, ranking locally requires geographic precision.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Generic, out-of-state SEO services routinely fail here because they do not account for hyper-local search intent or the dense commuter populations bridging New York (Brewster/Carmel) and Connecticut. Because of this high population density, Google's proximity filters are extremely aggressive. If you are located on the East Side, it is inherently difficult to rank in the Map Pack for someone searching from the West Side near the NY border.
              </p>
              <p className="text-slate-500 leading-relaxed">
                We combat this by deploying strict geo-grid telemetry to measure exactly where your Danbury business ranks block-by-block. We then build targeted local relevance to push your ranking radius outward, ensuring you capture maximum local search volume across the entire city.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-lg blur-2xl"></div>
              <div className="bg-white p-8 rounded-sm border border-slate-200 relative shadow-2xl">
                <h3 className="text-xl font-bold uppercase text-slate-900 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" /> Danbury SEO Strategy Focus
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                    <span className="text-slate-600 text-sm leading-relaxed"><strong>GBP Proximity Expansion:</strong> Structuring your Google Business Profile to override tight proximity filters and maximize visibility across all Danbury zip codes (06810, 06811).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                    <span className="text-slate-600 text-sm leading-relaxed"><strong>Hyper-Local Content:</strong> Building location pages and service silos that speak directly to Fairfield County market nuances and local landmarks (e.g., Candlewood Lake, Route 7).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                    <span className="text-slate-600 text-sm leading-relaxed"><strong>Local Authority Building:</strong> Acquiring authoritative backlinks from regional CT organizations, Chambers of Commerce, and trusted local businesses to establish local trust.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900">
              Comprehensive Danbury SEO Services
            </h2>
            <p className="text-slate-500 text-lg">
              We execute a full-stack search marketing approach designed specifically to generate high-value inbound leads for local businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <MapIcon className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Google Map Pack Dominance</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Most local searches in Danbury end with a click on the Google Map Pack. We optimize your GMB categories, implement automated review generation strategies, and build hyper-local citations to push your profile into the top 3 spots where the phone calls happen.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <Search className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Organic Search Optimization</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Beyond the map pack lies highly lucrative organic real estate. We secure top organic positions for your primary service keywords by fixing technical crawl errors, optimizing site speed (Core Web Vitals), and deploying LocalBusiness JSON-LD schema markup.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <TrendingUp className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Conversion Rate Optimization (CRO)</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Ranking is useless if the traffic doesn't convert. We optimize your landing pages, call-to-actions, and mobile user experience to ensure that once Danbury residents find you, they immediately call your office or submit a lead form.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <Compass className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Competitor Analysis</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                We reverse-engineer the top-ranking businesses in your specific niche in Danbury. We dissect their link profile, content structure, and review velocity to build a superior strategy that systematically displaces them from page one.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Reputation Management</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Your star rating directly impacts your click-through rate. We help you implement systems to actively solicit positive reviews from satisfied customers in Danbury while mitigating negative feedback before it hits your public profile.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <Settings className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Technical SEO Fixes</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                We handle the complex backend work that general marketers ignore. From resolving canonical tags and broken redirects to ensuring proper mobile rendering, we ensure your site meets Google's strict algorithmic standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Expansion */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {['Bethel, CT', 'Brookfield, CT', 'New Fairfield, CT', 'Ridgefield, CT', 'Newtown, CT', 'Redding, CT'].map((town, i) => (
                  <div key={i} className="bg-white border border-slate-200 p-4 rounded-sm flex items-center gap-3">
                    <Crosshair className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-600 font-medium text-sm">{town}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">
                Expanding Your Reach Beyond Danbury
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Your business likely services more than just the Danbury city limits. Northern Fairfield County is a cluster of high-income municipalities that require strategic targeting.
              </p>
              <p className="text-slate-500 leading-relaxed">
                As your <Link to="/seo-services-connecticut/" className="text-blue-600 hover:underline">SEO company</Link>, we build scalable "Service Area" architectures. We create highly optimized, unique landing pages for surrounding towns like Bethel, Brookfield, and Ridgefield. 
              </p>
              <p className="text-slate-500 leading-relaxed">
                Because it is difficult to rank a Danbury-addressed Google Business Profile in Ridgefield, these dedicated service-area pages are engineered to rank in the organic results *below* the Map Pack, ensuring that when someone searches for your services in neighboring towns, your business still captures the lead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">
              Danbury SEO FAQs
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">How long does it take to rank in the Danbury Map Pack?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Depending on your industry's competitiveness and your current digital footprint, noticeable movement in the local map pack typically occurs within 3 to 6 months. Highly saturated markets in Fairfield County (like roofing, HVAC, or personal injury law) require sustained, aggressive campaigns over 6+ months to unseat entrenched competitors.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">Do I need a physical office in Danbury to rank there?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To rank natively in the Google Map Pack (the 3-pack) for Danbury, you generally need a verified Google Business Profile at a physical address within the city limits. If you operate as a Service Area Business (SAB) located in a neighboring town like Bethel, we optimize your organic presence through targeted service-area pages to capture Danbury traffic below the maps.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">Do you guarantee the #1 spot in Google?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                No reputable SEO agency can guarantee a specific ranking (like #1) due to the dynamic, constantly changing nature of Google's algorithm. However, we guarantee our technical execution, our transparency, and our empirical track record of generating substantial ROI and top-3 Map Pack visibility for local CT businesses.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">How do you measure success?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We measure success strictly by revenue-generating actions. We track inbound phone calls, submitted contact forms, and booked appointments. We also provide geo-grid tracking so you can visually see your ranking improvements block-by-block across Danbury.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">Can SEO help my B2B company in Danbury?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Yes. While B2C service businesses rely heavily on the Map Pack, B2B companies (like commercial contractors, IT services, or manufacturing) benefit immensely from localized organic SEO. We target high-intent commercial keywords and optimize your site to capture decision-makers searching for regional vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
