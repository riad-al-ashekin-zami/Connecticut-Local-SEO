import { Helmet } from 'react-helmet-async';
import { useOutletContext, Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Stethoscope, Map, Search, TerminalSquare, Compass, Code, PenTool, CheckCircle2, ShieldCheck, Target, FileText } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

export function SeoConsultant() {
  const { openAudit } = useOutletContext<{ openAudit: () => void }>();

  return (
    <>
      <Helmet>
        <title>SEO Consultant Connecticut | Expert Search Strategy & Advisory</title>
        <meta name="description" content="Hire an expert SEO consultant in Connecticut. We provide strategic guidance, technical audits, and actionable roadmaps for in-house marketing teams." />
        <link rel="canonical" href="https://localseoct.com/seo-consultant-connecticut/" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mx-auto w-16 h-16 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mb-8 shadow-lg">
            <Lightbulb className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Connecticut <span className="text-blue-600">SEO Consultant</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-12 max-w-3xl mx-auto">
            Expert search marketing advisory for businesses that already have an in-house marketing team, content writers, or developers, but lack the highly specialized strategic direction required to dominate the Google Map Pack and organic search results.
          </p>
          <button
            onClick={openAudit}
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-white text-slate-950 font-black px-8 py-4 uppercase tracking-tight text-sm rounded-sm transition-all shadow-xl hover:-translate-y-0.5"
          >
            <span>Book a Strategy Session</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* When to Hire a Consultant */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900">
                When Is Consulting Better Than an Agency?
              </h2>
              <div className="w-20 h-1 bg-orange-500"></div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Not every business needs a full-service SEO agency to execute the day-to-day labor. 
              </p>
              <p className="text-slate-500 leading-relaxed">
                If you already employ an internal marketing director, a capable team of content writers, or a dedicated web development agency, you don't need to pay an outside firm to write blog posts or push code. What you are missing is the <strong className="text-slate-900">technical blueprint</strong>. 
              </p>
              <p className="text-slate-500 leading-relaxed">
                Modern SEO is highly complex. A generalist marketing manager rarely possesses the deep technical knowledge required to restructure a website's architecture, resolve complex crawlability traps, or reverse-engineer a competitor's local entity strategy. As an SEO consultant, we act as your fractional Director of Search. We diagnose the algorithmic bottlenecks, develop the strategy, and provide the exact, prioritized roadmap your internal team needs to execute.
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white border border-slate-200 p-8 rounded-sm">
                <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-6">Ideal Candidates for Consulting:</h3>
                <ul className="space-y-4">
                  {[
                    'Enterprise companies with established internal marketing departments.',
                    'Web development agencies needing technical SEO oversight for a client site launch.',
                    'Local businesses looking to train their internal staff on GBP management and local signals.',
                    'Brands experiencing a sudden, unexplained drop in Google rankings (Penalty Diagnostics).',
                    'Companies migrating to a new domain, rebranding, or changing their CMS platform.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Consulting Services */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900">
              Consulting & Advisory Services
            </h2>
            <p className="text-slate-500 text-lg">
              We offer structured consulting engagements tailored to your specific technical deficits and growth goals in the Connecticut market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-sm border border-slate-200">
              <Stethoscope className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Surgical Technical Audits</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                We tear down your existing website architecture to find the issues that are silently killing your local rankings. This is not an automated PDF generated by a free tool. This is a manual, forensic analysis of your server logs, rendering paths, and indexability. We deliver a prioritized repair document written specifically for your developers to implement.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li>• Crawl Budget Optimization</li>
                <li>• JavaScript Rendering & Core Web Vitals</li>
                <li>• Advanced JSON-LD Schema Audits</li>
                <li>• Site Architecture & URL Structuring</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-sm border border-slate-200">
              <Compass className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Actionable SEO Roadmaps</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Strategy without execution is useless. We provide a prioritized, step-by-step execution plan spanning 6 to 12 months. Your writers and developers execute the labor, while we provide the precise blueprint required to systematically unseat your top Connecticut competitors and capture their organic traffic.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li>• Content Gap Analysis & Briefs</li>
                <li>• Keyword & Semantic Entity Mapping</li>
                <li>• Internal Linking Strategy</li>
                <li>• Backlink Acquisition Targets</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-sm border border-slate-200">
              <Map className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">Local SEO & Map Pack Strategy</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Specific consulting on how to manipulate local proximity constraints. We advise your team on how to structure location pages without creating duplicate content, how to optimize your Google Business Profile for maximum geo-relevance, and how to execute hyper-local PR to dominate the 3-Pack across multiple service areas.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li>• Geo-Grid Competitor Analysis</li>
                <li>• GBP Suspension Recovery Advisory</li>
                <li>• Multi-Location Brand Architecture</li>
                <li>• Review Generation Protocols</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-sm border border-slate-200">
              <TerminalSquare className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-4">In-House Team Training</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                We train your internal marketing team on modern SEO best practices. From teaching your content writers how to properly structure headers for Natural Language Processing (NLP), to showing your social media manager how to leverage local signals and brand mentions to boost search visibility.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li>• On-Page Optimization SOPs</li>
                <li>• Search Intent Training for Copywriters</li>
                <li>• Monthly Q&A Strategy Sessions</li>
                <li>• Metric Tracking & Telemetry Setup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Consulting Process */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">
              The Consulting Process
            </h2>
            <p className="text-slate-500 mt-4">How we integrate with your team to deliver results.</p>
          </div>
          
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 space-y-12">
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-slate-900"></div>
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-2">1. Discovery & Goal Alignment</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We begin by understanding your internal team's capabilities, your current CMS and technology stack, and your primary revenue goals in the Connecticut market. We define exactly what success looks like and determine if your team has the bandwidth to execute our recommendations.
              </p>
            </div>
            
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-slate-900"></div>
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-2">2. Deep Technical & Competitive Audit</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We perform a comprehensive diagnostic of your web presence, leaving no stone unturned. We analyze your technical health, content gaps, and reverse-engineer your top competitors. This results in a highly technical document detailing exact errors and their necessary fixes.
              </p>
            </div>
            
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-slate-900"></div>
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-2">3. Roadmap Delivery & Team Handoff</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We present the SEO roadmap to your stakeholders, developers, and writers via a detailed video conference. Every task is prioritized based on its potential impact on your bottom line vs. the effort required to implement it. We provide the "what" and the "why."
              </p>
            </div>
            
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-slate-900"></div>
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-2">4. Fractional Retainer (Optional)</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Many clients retain us on an ongoing, fractional basis. We hold monthly strategy calls, perform QA testing on your developer's implementations to ensure they meet our technical standards, and provide continuous strategic pivoting as Google updates its algorithm.
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
              Consulting FAQs
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">Do you implement the changes on my website?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Under a consulting agreement, no. We provide the strategy, the audit, and the roadmap. Your internal team or web developer is responsible for the actual implementation. If you do not have an internal team to execute the work, you should explore our <Link to="/seo-services-connecticut/" className="text-blue-600 hover:underline">Full-Service Agency</Link> option.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">How much does an SEO audit cost?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                The cost of a custom, manual SEO audit depends on the size and complexity of your website. An audit for a 20-page local plumbing site is significantly different than an audit for a 10,000-page enterprise e-commerce store. Contact us for a custom quote.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">Can you help us recover from a Google Penalty?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Yes. We specialize in penalty diagnostics. If you have experienced a sudden drop in organic traffic, we can audit your site to determine if you were hit by a manual action, a core algorithm update, or if you simply have severe technical errors causing indexation drops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
