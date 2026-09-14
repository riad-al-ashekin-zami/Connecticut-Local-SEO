import { Helmet } from 'react-helmet-async';
import { useOutletContext, Link } from 'react-router-dom';
import { MapPin, ArrowRight, Target, Map as MapIcon, BarChart3, Crosshair, Search, ShieldCheck, TrendingUp, Compass, Settings } from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';

export function Wallingford() {
  const { openAudit } = useOutletContext<{ openAudit: () => void }>();

  return (
    <>
      <Helmet>
        <title>SEO Wallingford CT | Local SEO Company Wallingford</title>
        <meta name="description" content="Based in Wallingford, CT, our SEO company helps local businesses dominate the Google 3-Pack in New Haven County. Get a free local search audit." />
        <link rel="canonical" href="https://localseoct.com/seo-wallingford-ct/" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-50 border border-blue-600/20 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <MapPin className="w-3.5 h-3.5" />
            Our Headquarters: Wallingford, CT
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-slate-900 mb-8 leading-[1.1]">
            SEO Company in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Wallingford CT</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-12 max-w-3xl mx-auto">
            We don't just service Wallingford; we are based right here. If your business operates in Wallingford, Yalesville, or anywhere in New Haven County, partner with the local SEO agency that knows your backyard better than anyone else.
          </p>
          <button
            onClick={openAudit}
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 uppercase tracking-tight text-sm rounded-sm transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-0.5"
          >
            <span>Claim Your Wallingford Audit</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Wallingford Search Landscape */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900">
                Dominating the Route 5 & I-91 Corridor
              </h2>
              <div className="w-20 h-1 bg-orange-500"></div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Wallingford's central location along I-91, Route 15 (Merritt Parkway), and the Route 5 commercial stretch makes it a highly strategic hub for service-based businesses looking to capture Central Connecticut.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Whether you are a plumber targeting residential customers in Yalesville or a B2B service targeting commercial clients down Center Street, your search presence dictates your revenue flow. Because we are physically headquartered in Wallingford, we have an empirical, data-backed understanding of local search volumes, seasonal trends, and competitor strength across New Haven County. 
              </p>
              <p className="text-slate-500 leading-relaxed">
                We engineer campaigns that ensure your Google Business Profile is the first one your neighbors see in the Map Pack.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-lg blur-2xl"></div>
              <div className="bg-white p-8 rounded-sm border border-slate-200 relative shadow-2xl">
                <h3 className="text-xl font-bold uppercase text-slate-900 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" /> Wallingford SEO Tactics
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                    <span className="text-slate-600 text-sm leading-relaxed"><strong>Proximity Expansion:</strong> Pushing your Map Pack visibility outward from your Wallingford address into neighboring high-value zones like Cheshire and North Haven.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                    <span className="text-slate-600 text-sm leading-relaxed"><strong>Spam Suppression:</strong> Aggressively reporting and removing fake competitor listings and keyword-stuffed names that push your legitimate Wallingford business down the rankings.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                    <span className="text-slate-600 text-sm leading-relaxed"><strong>Local Entity Building:</strong> Associating your business strongly with key local landmarks (Choate, Oakdale Theatre), institutions, and geographic modifiers in New Haven County.</span>
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
              Local SEO Services for Wallingford
            </h2>
            <p className="text-slate-500 text-lg">
              Our headquarters executes a strict, ROI-focused methodology to drive targeted traffic to your website and convert that traffic into paying clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <MapIcon className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Google Map Pack Optimization</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                The Google 3-Pack is where the vast majority of local service clicks happen. We optimize your GMB listings, manage citations across local directories, and implement review generation systems to establish local dominance.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <Search className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Organic Website SEO</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                We build technically sound website architectures. By optimizing on-page elements, fixing core web vitals, and producing hyper-local service content, we capture the organic real estate below the maps.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <TrendingUp className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Conversion Rate Optimization</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Traffic without conversions is a vanity metric. We optimize your landing pages, restructure your call-to-actions, and ensure your site loads instantly on mobile devices to turn Wallingford traffic into booked appointments.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <Compass className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Competitor Analysis</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                We identify exactly who is beating you in the Wallingford market, reverse-engineer their backlink profile and content strategy, and deploy a prioritized roadmap to systematically outrank them.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Reputation Management</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                We provide software solutions that automatically request reviews from your satisfied Wallingford customers via SMS and email, rapidly increasing your star rating and Map Pack prominence.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm hover:border-orange-500/30 transition-colors">
              <BarChart3 className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Transparent Reporting</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Because we are local, you can physically meet with your campaign director. We provide real-time dashboards tracking phone calls, form fills, and geo-grid ranking improvements across Wallingford.
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
                {['Meriden, CT', 'Cheshire, CT', 'North Haven, CT', 'Hamden, CT', 'Durham, CT', 'Southington, CT'].map((town, i) => (
                  <div key={i} className="bg-white border border-slate-200 p-4 rounded-sm flex items-center gap-3">
                    <Crosshair className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-600 font-medium text-sm">{town}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">
                Expanding Across New Haven County
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Your service radius doesn't stop at the Wallingford town line.
              </p>
              <p className="text-slate-500 leading-relaxed">
                As a specialized <Link to="/seo-services-connecticut/" className="text-blue-600 hover:underline">SEO agency</Link>, we systematically expand your digital footprint outward. We build localized service pages targeting Meriden to the north, North Haven to the south, and Cheshire to the west. 
              </p>
              <p className="text-slate-500 leading-relaxed">
                Google's algorithm makes it very difficult to rank a Wallingford address in the Cheshire Map Pack. We solve this by engineering highly optimized organic service-area pages that capture the traffic *below* the maps, ensuring your website acts as an aggressive lead generation engine across your entire Central CT territory.
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
              Wallingford Local SEO FAQs
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">Can I visit your office in Wallingford?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Yes. While much of our work is done remotely or on-site at our clients' locations, we frequently hold strategy and onboarding meetings with our local clients right here in Wallingford. We value the accountability and partnership that comes with being part of the local business community.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">How do you track local ranking improvements?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We use advanced geo-grid tracking software. Instead of just telling you where you rank from our office IP address, we show you a visual grid of Wallingford (and surrounding towns), detailing exactly what position your business holds in the map pack at precise 1-mile or 3-mile intervals across the map.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">Do I need a physical address in Wallingford to rank there?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To rank natively in the Google Map Pack (the 3-pack) for Wallingford, you generally need a verified physical address within the town limits. If your office is located in Meriden but you want to target Wallingford, we will optimize your organic presence through targeted service-area pages to capture Wallingford traffic below the maps.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">What industries do you work with in CT?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We specialize in partnering with high-ticket, high-intent service businesses. This includes home service contractors (roofers, plumbers, HVAC installers), legal practices, medical specialists, and B2B service providers operating in New Haven and Middlesex counties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
