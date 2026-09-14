import { Helmet } from 'react-helmet-async';
import { useOutletContext, Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Target, TrendingUp, BarChart3, Users, Zap, CheckCircle2, MessageSquare, Code, PenTool, Focus, Workflow, Activity } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

export function SeoCompany() {
  const { openAudit } = useOutletContext<{ openAudit: () => void }>();

  return (
    <>
      <Helmet>
        <title>SEO Company Connecticut | Strategic Search Partners</title>
        <meta name="description" content="Partner with a reliable SEO company in Connecticut. We deliver transparent, ROI-driven local search campaigns, strictly focused on leads and revenue." />
        <link rel="canonical" href="https://localseoct.com/seo-company-connecticut/" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-50 border border-blue-600/20 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <ShieldCheck className="w-3.5 h-3.5" />
            Your Dedicated CT Partner
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-slate-900 mb-8 leading-[1.1]">
            The Premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">SEO Company</span> in Connecticut
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-12 max-w-3xl mx-auto">
            We are a performance-driven SEO company operating right here in Connecticut. We skip the industry jargon and vanity metrics, focusing entirely on measurable business growth: inbound calls, booked appointments, and closed revenue. We partner with serious businesses that want to dominate their local market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={openAudit}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 uppercase tracking-tight text-sm rounded-sm transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-0.5"
            >
              <span>Request Your Company Audit</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Hire an SEO Company? */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900">
                Why Hire a Dedicated SEO Company?
              </h2>
              <div className="w-20 h-1 bg-orange-500"></div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Many business owners attempt to manage their own SEO or assign it to an internal marketing assistant. The reality is that modern SEO is a highly technical, rapidly evolving discipline that requires specialized expertise across multiple domains.
              </p>
              <p className="text-slate-500 leading-relaxed">
                A professional SEO company acts as an extension of your business. We bring a team of technical specialists, content strategists, and data analysts who understand exactly how to manipulate Google's algorithm to generate revenue. When you hire us, you are not just buying "keywords"—you are buying a comprehensive system designed to capture market share from your competitors and establish your brand as the undeniable local authority.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-sm border border-slate-200">
                <Code className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">Technical Execution</h3>
                <p className="text-sm text-slate-500 leading-relaxed">SEO requires modifying server configurations, rendering paths, and complex JSON-LD schema that general marketers rarely understand.</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-slate-200">
                <Target className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">Algorithmic Insight</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Google updates its algorithm thousands of times per year. We dedicate our careers to studying these shifts so you don't have to.</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-slate-200">
                <Activity className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">Resource Allocation</h3>
                <p className="text-sm text-slate-500 leading-relaxed">We utilize enterprise-grade crawling, tracking, and auditing software that is prohibitively expensive for a single local business to license.</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-slate-200">
                <Focus className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">Focus on Operations</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Partnering with an SEO company allows you to focus on fulfilling the leads we generate, rather than worrying about your website's indexing status.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Approach SEO Campaigns */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900">
              How We Approach SEO Campaigns
            </h2>
            <p className="text-slate-500 text-lg">
              We do not use templated strategies. Every campaign is custom-engineered based on your specific industry, your current website authority, and the aggression level of your local competitors.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 shrink-0 rounded-full bg-slate-50 border border-orange-500/30 flex items-center justify-center text-2xl font-black text-blue-600 shadow-[0_0_15px_-3px_rgba(234,88,12,0.4)]">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900 mb-3">Discovery & Strategic Alignment</h3>
                <p className="text-slate-500 leading-relaxed mb-4">
                  Before we look at a single keyword, we need to understand your business economics. We discuss your highest-margin services, your target demographic, your current lead closing rate, and your capacity for growth. A successful SEO campaign must align with your operational reality. If you want to push commercial roofing over residential, that dictates our entire architectural approach.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 shrink-0 rounded-full bg-slate-50 border border-orange-500/30 flex items-center justify-center text-2xl font-black text-blue-600 shadow-[0_0_15px_-3px_rgba(234,88,12,0.4)]">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900 mb-3">Forensic Technical & Competitive Analysis</h3>
                <p className="text-slate-500 leading-relaxed mb-4">
                  We deploy enterprise crawlers to identify exactly what is holding your current website back. Concurrently, we tear down the top three competitors in your market. We analyze their backlink profiles, their content velocity, and their local citation strategies to reverse-engineer exactly what is required to outrank them. This allows us to set realistic timelines and resource requirements.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 shrink-0 rounded-full bg-slate-50 border border-orange-500/30 flex items-center justify-center text-2xl font-black text-blue-600 shadow-[0_0_15px_-3px_rgba(234,88,12,0.4)]">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900 mb-3">Architecture & Execution</h3>
                <p className="text-slate-500 leading-relaxed mb-4">
                  We fix the technical foundation first, ensuring maximum crawl efficiency and speed. Then, we execute the <Link to="/seo-services-connecticut/" className="text-blue-600 hover:underline">content strategy</Link>, building out dedicated service pages and highly localized service-area pages. We optimize your Google Business Profile for maximum Map Pack visibility and begin the ongoing process of acquiring authoritative local backlinks to push your domain authority above the competition.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 shrink-0 rounded-full bg-slate-50 border border-orange-500/30 flex items-center justify-center text-2xl font-black text-blue-600 shadow-[0_0_15px_-3px_rgba(234,88,12,0.4)]">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900 mb-3">Iterative Optimization</h3>
                <p className="text-slate-500 leading-relaxed mb-4">
                  SEO is not a "set it and forget it" task. As data begins to flow in, we analyze how users are interacting with the site. We monitor keyword fluctuations, adjust conversion elements to improve the lead generation rate, and pivot our content strategy based on what Google's algorithm is currently rewarding in your specific geographic market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us vs Competitors */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">
              Why Businesses Choose Us Over Massive Agencies
            </h2>
            <p className="text-slate-500 text-lg">
              The SEO industry is notorious for opaque reporting and "churn and burn" business models. We built our company to be the exact opposite.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-sm border border-slate-200 relative">
              <div className="absolute top-0 right-0 px-4 py-1 bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-widest rounded-bl-sm border-b border-l border-red-500/20">
                National Agencies
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 mt-4">The Standard Agency Model</h3>
              <ul className="space-y-4">
                {[
                  'Lock you into rigid 12-month legal contracts.', 
                  'Hand your account to a junior account manager handling 50+ clients.', 
                  'Use generic, spun content templates for your local service pages.', 
                  'Report on vanity metrics like "impressions" or "clicks" that don\'t pay the bills.',
                  'Outsource technical work and link building to overseas contractors.'
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-500 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0 mt-2"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-500/5 p-8 rounded-sm border border-orange-500/30 relative shadow-[0_0_30px_-15px_rgba(234,88,12,0.3)]">
              <div className="absolute top-0 right-0 px-4 py-1 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-sm">
                Our Company
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 mt-4">Our Partnership Model</h3>
              <ul className="space-y-4">
                {[
                  'Month-to-month, performance-based retention. We earn your business every 30 days.', 
                  'Direct strategic partnership with senior SEO directors.', 
                  'High-quality, locally optimized content written for your specific Connecticut market.', 
                  'Report strictly on inbound calls, qualified leads, and closed revenue.',
                  'Zero outsourcing. All technical strategy and execution is handled in-house.'
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Communication and Reporting */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-200">
                  <MessageSquare className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">Strategy Calls</h3>
                  <p className="text-sm text-slate-500">Regular check-ins to align our SEO efforts with your evolving business goals and operational capacity.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-200">
                  <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">Live Telemetry</h3>
                  <p className="text-sm text-slate-500">Access to real-time dashboards tracking phone calls, form fills, and granular local map pack rankings.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 sm:col-span-2">
                  <Workflow className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">Transparent Roadmaps</h3>
                  <p className="text-sm text-slate-500">You will always know exactly what we are working on, why we are doing it, and what impact we expect it to have on your bottom line.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">
                Radical Transparency in Reporting
              </h2>
              <div className="w-20 h-1 bg-orange-500"></div>
              <p className="text-slate-600 leading-relaxed text-lg">
                The biggest complaint we hear from business owners about their previous SEO company is: "I had no idea what they were actually doing."
              </p>
              <p className="text-slate-500 leading-relaxed">
                We solve this through radical transparency. We don't hide behind confusing spreadsheets. At the end of every month, you receive a clear, comprehensive breakdown of exactly what technical fixes were deployed, what content was published, and how those actions translated directly into inbound leads. 
              </p>
              <p className="text-slate-500 leading-relaxed">
                We set up advanced attribution tracking (including dynamic call tracking) so you can literally listen to the phone calls generated by our SEO efforts. You will always know exactly what your ROI is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">
              Company & Partnership FAQs
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">Do you require long-term contracts?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                No. We operate exclusively on month-to-month agreements. We believe that an SEO company should be retained based on the continuous value and ROI they provide, not because of a legal trap. If you are not seeing the results we discussed, you are free to walk away at any time without penalty.
              </p>
            </div>
            
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">How do you communicate with clients?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We maintain open lines of communication via email, scheduled strategy video calls, and phone. You will have direct access to the strategy director running your campaign. We also provide detailed monthly performance reviews breaking down exactly what was done and the resulting metric shifts.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">What kind of businesses do you partner with?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We primarily partner with established service-based businesses in Connecticut—such as home service contractors (roofing, HVAC, plumbing, landscaping), law firms, medical practices, and B2B service providers. We work best with companies that have a proven sales process and are prepared to handle a significant increase in inbound lead volume.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">Are you a full-service marketing agency?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                No. We are highly specialized search marketing experts. We do not do social media management, billboard design, or PR stunts. We focus exclusively on organic SEO and Local Search, which allows us to be significantly better at it than generalist agencies trying to do everything at once.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">How do you handle local exclusivity?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We do not compete against ourselves. If we partner with a personal injury lawyer in <Link to="/seo-new-haven-ct/" className="text-blue-600 hover:underline">New Haven</Link>, we will not take on another personal injury lawyer in that exact same territory. Our goal is to make our client the undisputed leader in their specific geographic market.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">Do I own my website and content?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                100%. You own all the content we produce, the optimizations we make, and the website itself. We do not hold assets hostage or utilize proprietary CMS platforms that lock you in. Your digital assets belong to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
