import { Helmet } from 'react-helmet-async';
import { useOutletContext, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Map, Terminal, FileText, Search, Star, Share2, Activity, Globe, ShieldCheck, BarChart3, Crosshair, Settings, Zap } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

export function SeoServices() {
  const { openAudit } = useOutletContext<{ openAudit: () => void }>();

  return (
    <>
      <Helmet>
        <title>SEO Services Connecticut | Comprehensive Local Search Optimization</title>
        <meta name="description" content="Discover premium SEO services in Connecticut. We specialize in local search optimization, technical SEO, content strategy, and high-intent lead generation for CT businesses." />
        <link rel="canonical" href="https://localseoct.com/seo-services-connecticut/" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-950 text-slate-50 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-orange-600/10 border border-orange-500/20 px-4 py-2 w-fit mx-auto mb-8 rounded-full">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Data-Driven Growth Strategies
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-8 leading-[1.1]">
            Connecticut <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">SEO Services</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12">
            We don't sell generic traffic or report on vanity metrics. We engineer hyper-local relevance and authority to intercept high-intent customers exactly when they search for your services in Connecticut. Our comprehensive SEO services are designed to turn your website into a measurable, revenue-generating asset.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={openAudit}
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-black px-8 py-4 uppercase tracking-tight text-sm rounded-sm transition-all shadow-lg shadow-orange-950/50 hover:-translate-y-0.5"
            >
              <span>Get Your Free SEO Audit</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:+18609670660"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black px-8 py-4 uppercase tracking-tight text-sm rounded-sm border border-slate-700 transition-all hover:border-orange-500/50"
            >
              <span>Call 860-967-0660</span>
            </a>
          </div>
        </div>
      </section>

      {/* Intro / The Need for SEO */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
                Why Connecticut Businesses Need Specialized SEO
              </h2>
              <div className="w-20 h-1 bg-orange-600"></div>
              <p className="text-slate-300 text-lg leading-relaxed">
                The modern consumer journey almost exclusively begins with a local search. When a homeowner in Fairfield County needs a roof repaired, or a business in New Haven needs legal representation, they pull out their phone and search Google.
              </p>
              <p className="text-slate-400 leading-relaxed">
                If your business does not appear in the top three Google Map Pack results or at the top of the organic listings, you are actively losing revenue to competitors who have invested in their search presence. Generic, national SEO strategies fail local service providers. To dominate a hyper-competitive state like Connecticut, you need an SEO strategy built specifically around local proximity, geo-relevance, and trusted local authority. 
              </p>
              <p className="text-slate-400 leading-relaxed">
                Our SEO services are strictly engineered to manipulate these local trust signals in your favor. We don't guess; we deploy empirical, data-driven methodologies to capture market share across your specific service areas.
              </p>
            </div>
            <div className="bg-slate-950 p-8 md:p-10 rounded-sm border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 p-4 opacity-5">
                <ShieldCheck className="w-48 h-48 text-orange-400" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-6 relative z-10">The Cost of Invisibility</h3>
              <p className="text-slate-400 mb-6 relative z-10">
                Failing to invest in a robust search strategy carries a massive opportunity cost for local businesses. Without specialized SEO, you face:
              </p>
              <ul className="space-y-4 relative z-10">
                {[
                  'Zero visibility for high-intent, bottom-of-funnel "near me" searches.',
                  'Competitors absorbing your qualified inbound leads and market share.',
                  'Wasted marketing budgets on low-converting, high-cost pay-per-click (PPC) ads.',
                  'Stagnant business growth due to a lack of digital real estate.',
                  'Erosion of brand trust when prospects cannot find verified information online.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Local SEO */}
      <section className="py-24 bg-slate-950 border-t border-slate-800" id="local-seo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="w-16 h-16 bg-orange-600/10 border border-orange-500/20 rounded-sm flex items-center justify-center mb-6">
                  <Map className="w-8 h-8 text-orange-500" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">
                  Local SEO & Maps Optimization
                </h2>
                <div className="w-16 h-1 bg-orange-600 mb-6"></div>
                <p className="text-slate-400 leading-relaxed">
                  For service-based businesses, the Google 3-Pack is the most valuable real estate on the internet. Our Local SEO services are designed to push your business into these top three spots across your entire service radius.
                </p>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-8">
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm">
                <h3 className="text-xl font-bold uppercase text-white mb-3">Google Business Profile (GBP) Management</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Your GBP is the engine of your local search presence. We claim, verify, and aggressively optimize your profile. This goes far beyond just filling out basic information. We optimize primary and secondary categories, craft keyword-rich business descriptions, structure your products and services correctly, and implement a consistent posting schedule to signal active management to Google's algorithm.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm">
                <h3 className="text-xl font-bold uppercase text-white mb-3">Hyper-Local Relevance & Citations</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Google verifies your business's existence and authority by cross-referencing your Name, Address, and Phone Number (NAP) across the web. We perform exhaustive citation audits to clean up inconsistent data and syndicate your correct information to top-tier data aggregators, local Connecticut directories, and industry-specific portals. This builds an unbreakable foundation of local trust.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm">
                <h3 className="text-xl font-bold uppercase text-white mb-3">Review Velocity & Reputation Management</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Reviews are not just for conversions; they are a direct ranking factor. Google evaluates the quantity, quality, and velocity of your reviews. We help implement automated systems to request reviews from satisfied customers, monitor incoming feedback, and provide guidance on how to respond to reviews optimally, injecting relevant geo-modifiers and keywords where natural.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm">
                <h3 className="text-xl font-bold uppercase text-white mb-3">Geo-Grid Tracking & Proximity Expansion</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Standard rank trackers only tell you where you rank from one specific GPS coordinate. We utilize advanced geo-grid technology to measure your Map Pack visibility block-by-block. If your business ranks #1 at your office but drops to #10 just two miles away, we identify that drop-off and deploy proximity expansion tactics (like localized link building and neighborhood-specific content) to widen your ranking radius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Technical SEO */}
      <section className="py-24 bg-slate-900 border-t border-slate-800" id="technical-seo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="w-16 h-16 bg-orange-600/10 border border-orange-500/20 rounded-sm flex items-center justify-center mb-6">
                  <Terminal className="w-8 h-8 text-orange-500" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">
                  Technical SEO & Site Architecture
                </h2>
                <div className="w-16 h-1 bg-orange-600 mb-6"></div>
                <p className="text-slate-400 leading-relaxed">
                  The most brilliant content in the world cannot rank if Google's bots cannot crawl, render, and index it. Our technical SEO services rebuild your digital foundation.
                </p>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-8">
              <div className="bg-slate-950 border border-slate-800 p-8 rounded-sm">
                <h3 className="text-xl font-bold uppercase text-white mb-3">Crawlability & Indexation Diagnostics</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  We analyze server logs and utilize enterprise crawling software to view your website exactly how Googlebot sees it. We identify and eliminate crawl traps, fix broken internal links (404s), resolve redirect chains, and optimize your robots.txt and XML sitemaps to ensure your crawl budget is spent strictly on your most valuable commercial pages.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-8 rounded-sm">
                <h3 className="text-xl font-bold uppercase text-white mb-3">Core Web Vitals & Performance Engineering</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Site speed is a confirmed ranking factor and a critical component of user experience. We dive deep into the code to optimize Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP). This involves compressing media, deferring non-critical JavaScript, utilizing next-gen image formats, and optimizing server response times.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-8 rounded-sm">
                <h3 className="text-xl font-bold uppercase text-white mb-3">Advanced Schema Markup (JSON-LD)</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  We translate your business data into machine-readable code. By deploying advanced nested JSON-LD schema (including LocalBusiness, Service, FAQPage, and Organization schemas), we spoon-feed Google exact details about your coordinates, service areas, pricing, and entity relationships. This highly technical process frequently results in rich snippets that dramatically improve Click-Through Rates (CTR).
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-8 rounded-sm">
                <h3 className="text-xl font-bold uppercase text-white mb-3">Information Architecture & URL Structuring</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  A flat, confusing website structure dilutes your ranking power. We restructure your website into logical semantic silos (e.g., separating Residential vs. Commercial services, or grouping Location Pages under specific county hubs). We ensure clear parent-child URL relationships and deploy strategic internal linking to pass "link juice" efficiently throughout the site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Content Strategy */}
      <section className="py-24 bg-slate-950 border-t border-slate-800" id="content-seo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="w-16 h-16 bg-orange-600/10 border border-orange-500/20 rounded-sm flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-orange-500" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">
                  On-Page SEO & Content Strategy
                </h2>
                <div className="w-16 h-1 bg-orange-600 mb-6"></div>
                <p className="text-slate-400 leading-relaxed">
                  Words matter. We produce authoritative, data-backed content that satisfies search intent and proves to Google that you are the premier expert in your field.
                </p>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-8">
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm">
                <h3 className="text-xl font-bold uppercase text-white mb-3">High-Intent Keyword Research</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  We ignore vanity metrics and high-volume keywords that don't convert. Our research focuses entirely on transactional, bottom-of-funnel queries. We analyze Search Engine Results Pages (SERPs) to understand exactly what the user wants—whether that is pricing information, emergency services, or local comparisons—and we map those keywords to dedicated landing pages.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm">
                <h3 className="text-xl font-bold uppercase text-white mb-3">Service Page Optimization</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Your core services shouldn't be crammed onto a single page. We build comprehensive, individual pages for every specific service you offer. We optimize Title Tags, Meta Descriptions, H1-H6 header hierarchies, and semantic HTML to ensure Google understands exactly what the page is about. We inject NLP (Natural Language Processing) entities to build deep topical relevance.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm">
                <h3 className="text-xl font-bold uppercase text-white mb-3">Service-Area & Location Pages</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  If you operate outside your immediate headquarters, you need localized content. We build unique, highly specific service-area pages for the various Connecticut towns and counties you target. These are not thin, mass-produced "doorway" pages; they are robust resources detailing local projects, neighborhood specifics, and driving directions to establish undeniable geo-relevance.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm">
                <h3 className="text-xl font-bold uppercase text-white mb-3">Topic Clusters & Informational Content</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  To rank for highly competitive commercial terms, you must prove topical authority. We develop content hubs and blog architectures that answer long-tail questions your prospects are asking (e.g., "How much does a new roof cost in CT?"). This informational content acts as a funnel, capturing top-of-funnel traffic and internally linking to your primary commercial service pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Authority & Audits */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate-950 p-8 rounded-sm border border-slate-800">
              <Share2 className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">Authority & Link Building</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Google treats backlinks like votes of confidence. However, not all votes are equal. Spammy, low-quality links can actively harm your site. We execute stringent, white-hat link building campaigns to acquire editorial links from relevant, high-authority websites.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm leading-relaxed"><strong>Local Link Acquisition:</strong> Securing links from Connecticut chambers of commerce, regional news outlets, and local sponsorships.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm leading-relaxed"><strong>Industry Relevance:</strong> Earning links from trade associations, vendor directories, and niche-specific publications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm leading-relaxed"><strong>Toxic Link Audits:</strong> Identifying and disavowing malicious or spammy backlinks that may be suppressing your search visibility.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 p-8 rounded-sm border border-slate-800">
              <Activity className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">Comprehensive SEO Audits</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                We never guess. Before executing any campaign, we perform a forensic analysis of your current digital footprint. Our SEO audits provide a brutally honest assessment of where your marketing is currently failing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm leading-relaxed"><strong>Penalty Diagnostics:</strong> Determining if you have been hit by an algorithmic update or a manual action by Google.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm leading-relaxed"><strong>Competitor Tear-Downs:</strong> Reverse-engineering the exact content and link strategies your top 3 local competitors are using.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm leading-relaxed"><strong>Actionable Roadmaps:</strong> We turn audit data into a prioritized, month-by-month execution plan based on impact and effort.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Measurement & Reporting */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
              Measurement, Reporting, & KPIs
            </h2>
            <p className="text-slate-400 text-lg">
              We despise opaque reporting. You will never receive a generated PDF filled with vanity metrics like "impressions." We report strictly on metrics that impact your bank account.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold uppercase text-white mb-2">Qualified Organic Traffic</h3>
              <p className="text-slate-400 text-sm">We measure the increase in users visiting your site specifically for your high-value commercial terms, excluding irrelevant or out-of-state traffic.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold uppercase text-white mb-2">Geo-Grid Dominance</h3>
              <p className="text-slate-400 text-sm">We provide visual heatmaps showing exactly how your Map Pack rankings are expanding block-by-block across your target Connecticut municipalities.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                <Crosshair className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold uppercase text-white mb-2">Lead Conversion Tracking</h3>
              <p className="text-slate-400 text-sm">We deploy advanced call tracking and form attribution so you know exactly which SEO efforts generated which phone calls and booked appointments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">
              Frequently Asked Questions About Our SEO Services
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">How much do your SEO services cost?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our campaigns are custom-quoted based on the competitiveness of your industry, your geographic targets, and the current state of your website. We do not offer cheap, templated "bronze/silver/gold" packages. A typical aggressive local SEO campaign for a Connecticut service business requires a significant monthly investment, but it is structured to generate an overwhelming ROI via new client acquisition.
              </p>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">How long does SEO take to see results?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                SEO is a long-term strategy, not a quick hack. Generally, you will see technical improvements and early ranking movement within the first 30 to 60 days. However, dominating a competitive Connecticut market (like Fairfield County roofing or New Haven law) usually requires 4 to 6 months of sustained, compounding effort to firmly establish top-3 positions and experience a massive influx of leads.
              </p>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">What is included in a monthly SEO campaign?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every month involves active execution. While the exact allocation varies, a typical month includes technical site maintenance, publishing new optimized service or location pages, conducting outreach for local backlinks, optimizing your Google Business Profile with new posts and Q&As, and a detailed performance review of lead generation metrics.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">Do I need local SEO or national SEO?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                If your business serves customers within a specific geographic area (e.g., plumbers, lawyers, dentists, contractors), you need Local SEO. If you are an e-commerce brand or a software company selling to anyone in the country, you need National SEO. Our agency specializes heavily in Local and Regional SEO for service-based businesses.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">Will I have to sign a long-term contract?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                No. We operate strictly on month-to-month agreements. We believe that an SEO agency should be retained based on their performance and communication, not because of a legal trap. If we aren't delivering value, you are free to walk away at any time.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">How do you track and measure SEO results?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We implement dynamic call tracking, form submission tracking, and advanced geo-grid ranking software. This allows us to attribute specific revenue-generating actions directly to organic search. During our monthly strategy calls, we review these exact numbers so you know precisely how many leads the campaign generated.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">Can SEO help a small business compete with larger corporations?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Absolutely. Local SEO is the great equalizer. Because Google's algorithm heavily factors in physical proximity and local relevance, a well-optimized local small business can easily outrank massive national corporations (like Angi or Yelp) in the Map Pack for local search queries.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">Do you provide technical SEO for complex website platforms?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Yes. Our team is highly technical. Whether you are running on WordPress, Shopify, Next.js, or a custom-built tech stack, we have the development capabilities to diagnose and resolve complex crawlability, rendering, and site speed issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
