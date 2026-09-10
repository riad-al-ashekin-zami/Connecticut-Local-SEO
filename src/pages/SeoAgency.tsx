import { Helmet } from 'react-helmet-async';
import { useOutletContext, Link } from 'react-router-dom';
import { ArrowRight, BarChart, Settings, Users2, Database, ShieldAlert, LineChart, Target, Building2, Briefcase, Zap, CheckCircle2, MessageSquare } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

export function SeoAgency() {
  const { openAudit } = useOutletContext<{ openAudit: () => void }>();

  return (
    <>
      <Helmet>
        <title>SEO Agency Connecticut | Enterprise Search Marketing Team</title>
        <meta name="description" content="Hire the elite SEO agency in Connecticut. We specialize in aggressive map pack ranking, technical SEO, and enterprise-grade search dominance for growing businesses." />
        <link rel="canonical" href="https://localseoct.com/seo-agency-connecticut/" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-950 text-slate-50 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-orange-950/50 border border-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <BarChart className="w-3.5 h-3.5" />
                Performance-Based Marketing
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white mb-6 leading-[1.05]">
                An Elite <span className="text-orange-500">SEO Agency</span> Focused on Connecticut
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed font-medium mb-10">
                Your business doesn't need another generic digital marketing vendor. You need a specialized SEO agency that engineers search dominance through technical precision, aggressive campaign management, and hyper-local authority building.
              </p>
              <button
                onClick={openAudit}
                className="bg-orange-600 hover:bg-orange-500 text-white font-black text-sm uppercase tracking-tight px-8 py-4 rounded-sm transition shadow-lg shadow-orange-950/50 flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                Schedule Agency Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-lg blur-2xl"></div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm relative shadow-2xl">
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-6">Agency Capabilities</h3>
                <ul className="space-y-6 text-sm text-slate-300">
                  <li className="flex items-start gap-4">
                    <Database className="w-6 h-6 text-orange-500 shrink-0" />
                    <div>
                      <strong className="text-white block text-base mb-1 uppercase tracking-tight">Enterprise Technical SEO</strong>
                      <span className="text-slate-400">Deep crawling, architecture restructuring, and advanced JSON-LD schema nesting.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Target className="w-6 h-6 text-orange-500 shrink-0" />
                    <div>
                      <strong className="text-white block text-base mb-1 uppercase tracking-tight">Multi-Location Scaling</strong>
                      <span className="text-slate-400">Systematic Map Pack dominance engineered across multiple CT municipalities.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Building2 className="w-6 h-6 text-orange-500 shrink-0" />
                    <div>
                      <strong className="text-white block text-base mb-1 uppercase tracking-tight">Entity Establishment</strong>
                      <span className="text-slate-400">Solidifying local brand authority in Google's Knowledge Graph via PR and citations.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency vs Freelancer vs In-House */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
              Why Hire an SEO Agency?
            </h2>
            <p className="text-slate-400 text-lg">
              Growing businesses eventually face a choice: hire an in-house marketer, hire a freelancer, or partner with a specialized agency. Here is why serious businesses choose the agency model for search marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-sm opacity-75">
              <h3 className="text-xl font-bold uppercase text-white mb-4">The Freelancer</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Often cheaper, but highly constrained by time and resources. A freelancer cannot simultaneously manage complex technical audits, write thousands of words of high-quality localized content, and execute aggressive link-building campaigns. They often act as a bottleneck.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-8 rounded-sm opacity-75">
              <h3 className="text-xl font-bold uppercase text-white mb-4">The In-House Hire</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Hiring an in-house SEO requires an $80k+ salary, benefits, and management overhead. Furthermore, one person rarely possesses elite skills in both technical coding and content writing. They also lack access to the enterprise software suites an agency utilizes.
              </p>
            </div>

            <div className="bg-orange-600/5 border border-orange-500/30 p-8 rounded-sm shadow-[0_0_30px_-15px_rgba(234,88,12,0.3)]">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="w-5 h-5 text-orange-500" />
                <h3 className="text-xl font-bold uppercase text-white">The Specialized Agency</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                For a fraction of the cost of a full-time hire, you deploy a coordinated team of technical SEOs, content writers, and outreach specialists. You get instant access to enterprise tools, proven Standard Operating Procedures (SOPs), and the collective experience of managing dozens of campaigns in your specific state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extension of Your Team */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
                An Extension of Your Marketing Team
              </h2>
              <div className="w-20 h-1 bg-orange-600"></div>
              <p className="text-slate-300 text-lg leading-relaxed">
                When you hire our SEO agency, we integrate seamlessly with your existing operations. We act as your outsourced search division.
              </p>
              <p className="text-slate-400 leading-relaxed">
                If you already have an internal marketing coordinator or a web development team, we collaborate with them. We can provide the strategic roadmap and technical directives for your internal team to execute, or we can handle the entire intense technical execution, content scaling, and outreach strategies so your team can focus on other marketing channels.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We manage the entire SEO campaign lifecycle. From initial onboarding and competitor teardowns to monthly strategy pivots and authority building. We don't just send automated PDF reports; we provide strategic advisory on how to maximize your digital footprint across Connecticut.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 p-6 rounded-sm border border-slate-800">
                <Settings className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">Full Execution</h3>
                <p className="text-sm text-slate-400">We don't just consult. We implement the code, write the content, and build the links ourselves.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-sm border border-slate-800">
                <LineChart className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">Proactive Strategy</h3>
                <p className="text-sm text-slate-400">We constantly monitor Google's algorithm updates and adjust our tactics before your rankings drop.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-sm border border-slate-800 sm:col-span-2 flex items-start gap-4">
                <Users2 className="w-8 h-8 text-orange-400 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">Seamless Communication</h3>
                  <p className="text-sm text-slate-400">Direct access via Slack/email, scheduled strategy calls, and detailed video walkthroughs of your monthly performance data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Management Workflow */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
              Agency Campaign Management
            </h2>
            <p className="text-slate-400 text-lg">
              A successful SEO campaign requires aggressive, continuous optimization. Here is how our agency manages your digital growth month-over-month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Technical Sprint', desc: 'Resolving crawl traps, speed bottlenecks, mobile rendering issues, and deploying complex schema.' },
              { title: 'Content Production', desc: 'Researching and publishing optimized service pages, location hubs, and semantically rich blog content.' },
              { title: 'Authority Building', desc: 'Securing high-quality editorial backlinks, managing PR outreach, and ensuring local directory syndication.' },
              { title: 'Data Analysis', desc: 'Reviewing user behavior, conversion rates, call tracking data, and geo-grid ranking telemetry.' }
            ].map((phase, i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 p-6 rounded-sm hover:border-orange-500/50 transition-all relative group">
                <div className="text-5xl font-black text-slate-800 absolute top-4 right-4 group-hover:text-orange-900/20 transition-colors">0{i+1}</div>
                <h3 className="text-lg font-bold uppercase text-white mb-3 relative z-10 mt-8 tracking-tight">{phase.title}</h3>
                <p className="text-slate-400 text-sm relative z-10">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Scaling */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2">
                <ShieldAlert className="w-16 h-16 text-orange-500 mb-6" />
                <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mb-6">Built for Scaling Multi-Location Businesses</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Whether you are a plumbing company expanding your service routes to <Link to="/local-seo-waterford-ct/" className="text-orange-400 hover:underline">Waterford</Link> or a law firm trying to establish total market dominance in <Link to="/seo-new-haven-ct/" className="text-orange-400 hover:underline">New Haven</Link>, our agency provides the firepower required to unseat entrenched competitors.
                </p>
                <p className="text-slate-400 leading-relaxed mb-10">
                  We design scalable SEO architectures. When you open a new branch, acquire a competitor, or target a new Connecticut county, we have the systems in place to immediately replicate our proven local ranking formula in that specific geography without breaking your existing rankings.
                </p>
                <button
                  onClick={openAudit}
                  className="bg-orange-600 hover:bg-orange-500 text-white font-black text-sm uppercase tracking-tight px-8 py-4 rounded-sm transition shadow-lg shadow-orange-950/50 inline-flex items-center gap-2"
                >
                  Start Scaling Your Brand <ArrowRight className="w-5 h-5" />
                </button>
             </div>
             
             <div className="lg:w-1/2">
               <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm">
                 <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">Agency Integration</h3>
                 <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                     <span className="text-slate-300 text-sm">We handle all technical heavy lifting; your team approves content.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                     <span className="text-slate-300 text-sm">We integrate our lead tracking with your CRM (HubSpot, GoHighLevel, ServiceTitan).</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                     <span className="text-slate-300 text-sm">We provide white-label reporting options if you are a complementary marketing agency looking for an SEO partner.</span>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">
              Agency Partnership FAQs
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">Do you work with our internal marketing team?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Yes. We frequently act as the specialized SEO division for companies that already have internal marketing directors or content writers. We can provide the technical audits, keyword roadmaps, and overall strategy while your team handles the implementation, or we can handle the entire execution end-to-end.
              </p>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">How does an agency differ from a consultant?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A <Link to="/seo-consultant-connecticut/" className="text-orange-400 hover:underline">consultant</Link> typically provides analysis, strategy, and recommendations, leaving the actual implementation to you. As an agency, we provide the strategy and then perform the actual labor—writing the code, producing the content, and building the links.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">What size businesses do you typically work with?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We work best with established small to mid-market businesses ($1M - $20M+ annual revenue) in Connecticut that have a proven sales model, high customer lifetime value, and the operational capacity to handle a significant increase in lead volume.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-sm">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">Do you outsource your SEO work?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                No. All strategy, technical optimization, content creation, and link building is managed by our in-house team. We do not use offshore white-label services, which allows us to maintain strict quality control over every campaign we run.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
