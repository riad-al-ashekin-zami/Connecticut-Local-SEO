import { Helmet } from 'react-helmet-async';
import { useOutletContext, Link } from 'react-router-dom';
import { MapPin, ArrowRight, Target, Map as MapIcon, BarChart3, Crosshair, Search, ShieldCheck, TrendingUp, Compass, Settings } from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';

export function NewHaven() {
  const { openAudit } = useOutletContext<{ openAudit: () => void }>();

  return (
    <>
      <Helmet>
        <title>SEO New Haven CT | Local SEO Company New Haven</title>
        <meta name="description" content="Capture the New Haven market with our specialized local SEO services. We help New Haven CT businesses rank higher on Google Maps and organic search." />
        <link rel="canonical" href="https://localseoct.com/seo-new-haven-ct/" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-950 text-slate-50 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-orange-950/50 border border-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <MapPin className="w-3.5 h-3.5" />
            New Haven, Connecticut
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-8 leading-[1.1]">
            Local SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">New Haven CT</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium mb-12 max-w-3xl mx-auto">
            New Haven is a dense, highly competitive commercial center. Standing out among established local competitors requires a precise local SEO strategy tailored specifically to the Elm City's unique, high-density market dynamics.
          </p>
          <button
            onClick={openAudit}
            className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-black px-8 py-4 uppercase tracking-tight text-sm rounded-sm transition-all shadow-lg shadow-orange-950/50 hover:-translate-y-0.5"
          >
            <span>Get Your Free New Haven SEO Audit</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* New Haven Search Landscape */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
                Winning the Elm City
              </h2>
              <div className="w-20 h-1 bg-orange-600"></div>
              <p className="text-slate-300 text-lg leading-relaxed">
                From the commercial density of Downtown New Haven and the Yale University medical district to sprawling residential hubs like East Rock, Westville, and Wooster Square, proximity and prominence are everything.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Because New Haven is a dense urban grid with complex traffic patterns, Google heavily favors businesses located physically closest to the searcher (the Proximity Filter). If your business is located in Fair Haven, it is inherently difficult to rank in the Map Pack for a user searching from Westville.
              </p>
              <p className="text-slate-400 leading-relaxed">
                If your business isn't showing up in the Google Map 3-Pack across multiple neighborhoods, you are losing revenue to competitors who understand how to manipulate these local proximity signals. Our local SEO company specializes in breaking through dense urban competition by building hyper-localized relevance that pushes your ranking radius outward.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-lg blur-2xl"></div>
              <div className="bg-slate-950 p-8 rounded-sm border border-slate-800 relative shadow-2xl">
                <h3 className="text-xl font-bold uppercase text-white mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-500" /> New Haven SEO Focus
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                    <span className="text-slate-300 text-sm leading-relaxed"><strong>Urban Grid Optimization:</strong> Micro-targeting specific New Haven neighborhoods (06510, 06511, 06513) to maximize Map Pack impressions block-by-block using geo-grid telemetry.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                    <span className="text-slate-300 text-sm leading-relaxed"><strong>Review Velocity:</strong> Implementing automated systems to consistently generate verified reviews from your local customer base, outpacing older, entrenched competitors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                    <span className="text-slate-300 text-sm leading-relaxed"><strong>Local Entity Building:</strong> Structuring your site's content and schema data to associate strongly with New Haven landmarks, major routes (I-95/I-91), and local institutions.</span>
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
              Targeted Local SEO Services
            </h2>
            <p className="text-slate-400 text-lg">
              We execute aggressive, performance-driven search marketing campaigns designed specifically to generate high-value phone calls and form fills in New Haven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <MapIcon className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">Google Map Pack Dominance</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We optimize your Google Business Profile (GBP) categories, fix NAP (Name, Address, Phone) inconsistencies, and build authoritative local citations to push your profile into the top 3 Map Pack spots where the majority of clicks happen.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <Search className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">Local Organic SEO</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Below the Map Pack lies highly lucrative organic traffic. We optimize your website architecture, speed, and content to ensure you dominate the traditional organic results for New Haven service queries.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <TrendingUp className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">Conversion Rate Optimization</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We write hyper-local service pages that answer specific search intent. Once users land on your site, our Conversion Rate Optimization (CRO) tactics ensure they turn into paying leads rather than bouncing back to Google.
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <Compass className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">Competitor Teardowns</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We analyze the top-ranking businesses in your specific niche across New Haven. We dissect their link profile and content structure to build a superior, data-backed strategy that systematically displaces them from page one.
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">Reputation Management</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Your star rating directly impacts your click-through rate. We help implement systems to actively solicit positive reviews from satisfied customers in New Haven while mitigating negative feedback before it hits your public profile.
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <Settings className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">Technical SEO Fixes</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We handle the complex backend work. From resolving canonical tags and broken redirects to ensuring proper mobile rendering and deploying LocalBusiness JSON-LD schema, we ensure your site meets Google's strict algorithmic standards.
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
                {['East Haven, CT', 'West Haven, CT', 'Hamden, CT', 'Woodbridge, CT', 'Orange, CT', 'Branford, CT'].map((town, i) => (
                  <div key={i} className="bg-slate-950 border border-slate-800 p-4 rounded-sm flex items-center gap-3">
                    <Crosshair className="w-4 h-4 text-orange-500" />
                    <span className="text-slate-300 font-medium text-sm">{town}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-white">
                Expanding Across the Shoreline
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                While New Haven is the anchor, your target market likely extends across the surrounding coastal and inland suburbs.
              </p>
              <p className="text-slate-400 leading-relaxed">
                As your <Link to="/seo-company-connecticut/" className="text-orange-400 hover:underline">SEO company</Link>, we systematically expand your reach. We create highly optimized service-area architectures targeting lucrative, high-income markets in East Haven, West Haven, Orange, Woodbridge, and Hamden.
              </p>
              <p className="text-slate-400 leading-relaxed">
                By building distinct, non-competing landing pages for each municipality, we capture the organic search intent *below* the Map Pack, ensuring you maintain a dominant market share across the entire greater New Haven region.
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
              New Haven Local SEO FAQs
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">Is it hard to rank in New Haven?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Yes. Due to the high population density and concentration of established businesses (especially in highly competitive verticals like personal injury law, medical specialists, and home services), New Haven is a difficult market. Ranking here requires aggressive technical optimization, superior content, and consistent review velocity over a sustained period.
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">How do you combat proximity filters in dense urban areas?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Google uses a proximity filter to show the closest businesses first. If you are located in East Rock, it's difficult to rank for a user searching from Westville. We combat this by building strong local relevance, increasing your overall domain authority to override proximity, and establishing secondary service area pages to capture organic traffic where Map Pack visibility is physically constrained.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">Do you use spun or AI-generated local content?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                No. Google's helpful content updates penalize sites that use thin, generic "Service + City" pages where only the town name is swapped out. Our in-house team writes unique, contextually rich content for every New Haven neighborhood and surrounding town we target, ensuring long-term ranking stability and high conversion rates.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">Do I need a physical address in New Haven to rank?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                To reliably rank in the Google Map Pack (the 3-Pack) for queries originating in New Haven, you generally need a verified physical address within the city limits. However, if your office is in Hamden or West Haven, we can still target New Haven traffic aggressively through highly optimized organic landing pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
