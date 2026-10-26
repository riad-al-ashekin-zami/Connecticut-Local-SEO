import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  MapPin,
  DollarSign,
  Users,
  Award,
  ChevronDown,
  ChevronUp,
  Filter,
  Phone,
  Search,
  HelpCircle,
  ArrowRight,
  Building,
  Briefcase,
  Sparkles,
  Scale,
  Waves,
  Clock,
  Check,
  Share2,
  Calendar,
  Layers,
  ArrowUpRight,
  Info,
  CheckSquare,
  Square
} from 'lucide-react';
import { BlogPost, AgencyListing } from '../data/blogPosts';
import { BUSINESS_ENTITY } from '../data/content';

interface ClutchDirectoryArticleProps {
  post: BlogPost;
}

export const ClutchDirectoryArticle: React.FC<ClutchDirectoryArticleProps> = ({ post }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [checkedQuestions, setCheckedQuestions] = useState<Record<number, boolean>>({});

  const agencies = post.agencies || [];

  const filteredAgencies = selectedCategory === 'all'
    ? agencies
    : agencies.filter((a) => a.categoryTag === selectedCategory);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleQuestionCheck = (idx: number) => {
    setCheckedQuestions((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  const scrollToAgency = (pos: number) => {
    const el = document.getElementById(`agency-${pos}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const contractQuestions = [
    'What will you work on first, and why?',
    'Which services and locations will the campaign target?',
    'Who implements technical changes?',
    'How much content is included?',
    'How will you measure qualified inquiries or sales?',
    'What access will we have to accounts and reports?',
    'What costs fall outside the monthly fee?',
    'What happens to our website and content if we leave?'
  ];

  return (
    <div className="bg-slate-100/70 text-slate-900 font-sans pb-20">
      
      {/* Top Breadcrumb & Clutch-Style Category Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <nav className="flex items-center space-x-2 text-slate-500 font-medium">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold truncate max-w-[240px] sm:max-w-md">
                Best SEO Company Connecticut
              </span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Directory Guide
              </span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Directory Hero / Leaderboard Header */}
      <header className="bg-white border-b border-slate-200 pt-10 pb-12 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[11px] font-black uppercase tracking-wider rounded">
                  B2B Directory & Comparison
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                  <Calendar className="w-3.5 h-3.5" /> Updated {post.publishDate}
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                  <Clock className="w-3.5 h-3.5" /> {post.readingTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {post.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Finding the best SEO company in Connecticut means finding a team that understands your customers, services, and business goals. A local contractor may need more calls from nearby homeowners. A law firm may want inquiries about specific practice areas. An online store may need stronger product pages and more sales from organic search. Each needs a different approach.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                This comparison starts with Local SEO CT, our featured listing for businesses focused on local search. It also covers six other agencies offering services ranging from small-business website design to SEO, paid media, and AI search optimization.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Use the list to build a shortlist based on the work you need. The right Connecticut SEO company should explain its priorities, show relevant examples, and make its scope easy to understand.
              </p>

              {/* Editorial Disclaimer (Clutch / GoodFirms standard notice) */}
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="italic">
                  <strong>About this list:</strong> Local SEO CT is the featured first listing. Agency summaries reflect publicly advertised services; the order is not an independently tested performance ranking. Suggested fit is an editorial assessment of those services.
                </p>
              </div>
            </div>

            {/* Quick Directory Stats Card */}
            <div className="lg:w-80 shrink-0 bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Directory Snapshot</span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-black uppercase rounded">2026 Edition</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="text-2xl font-black text-slate-900">7</div>
                  <div className="text-xs text-slate-500 font-medium">Agencies Analyzed</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="text-2xl font-black text-blue-600">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Connecticut Focus</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Research Grounding:</span>
                  <span className="font-semibold text-slate-800">Public & Verified</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Editorial Lead:</span>
                  <span className="font-semibold text-slate-800">Local SEO CT</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500">Service Coverage:</span>
                  <span className="font-semibold text-slate-800">Statewide (8 Counties)</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/free-seo-audit')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wide py-3 px-4 rounded-lg transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Free Local SEO Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

        {/* Section: Connecticut SEO Companies at a Glance (The Comparison Matrix) */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 block mb-1">
                Comparative Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Connecticut SEO Companies at a Glance
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Click any company below to jump to its full profile
            </span>
          </div>

          {/* Clutch Style Comparison Table */}
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100/80 text-slate-900 text-xs font-black uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3.5 px-4 w-16 text-center">Pos</th>
                  <th className="py-3.5 px-4 min-w-[200px]">Company</th>
                  <th className="py-3.5 px-4 min-w-[260px]">Main focus in this comparison</th>
                  <th className="py-3.5 px-4 min-w-[260px]">Consider it when you need</th>
                  <th className="py-3.5 px-4 w-28 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {agencies.map((agency) => (
                  <tr
                    key={agency.position}
                    className={`hover:bg-slate-50 transition-colors ${agency.isFeatured ? 'bg-blue-50/40' : ''}`}
                  >
                    <td className="py-4 px-4 text-center">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-black ${agency.isFeatured ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'}`}>
                        {agency.position}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded flex items-center justify-center font-black text-xs shrink-0 ${agency.isFeatured ? 'bg-blue-600 text-white' : 'bg-slate-800 text-white'}`}>
                          {agency.monogram}
                        </div>
                        <div>
                          <button
                            onClick={() => scrollToAgency(agency.position)}
                            className="font-bold text-slate-900 hover:text-blue-600 transition-colors text-left text-sm block cursor-pointer"
                          >
                            {agency.name}
                          </button>
                          <div className="flex items-center gap-1 mt-0.5">
                            <div className="flex text-amber-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-current" />
                              ))}
                            </div>
                            <span className="text-[11px] text-slate-500 font-semibold">({agency.reviewsCount})</span>
                            {agency.isFeatured && (
                              <span className="ml-1 text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.2 rounded">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-800 text-sm font-medium">
                      {agency.focusArea}
                    </td>
                    <td className="py-4 px-4 text-slate-600 text-sm">
                      {agency.considerWhen}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => scrollToAgency(agency.position)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
                      >
                        Profile <ArrowRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Agency Filtering & Quick Navigation Bar */}
        <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 p-3 shadow-sm mb-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1 pl-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              All (7)
            </button>
            <button
              onClick={() => setSelectedCategory('local')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'local' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Local Search & Maps
            </button>
            <button
              onClick={() => setSelectedCategory('web-design')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'web-design' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Web Design + SEO
            </button>
            <button
              onClick={() => setSelectedCategory('organic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'organic' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Organic SEO
            </button>
            <button
              onClick={() => setSelectedCategory('ai-geo')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'ai-geo' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              AI & Generative SEO
            </button>
            <button
              onClick={() => setSelectedCategory('ecommerce')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'ecommerce' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              E-Commerce
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-500">
            <span>Jump:</span>
            {agencies.map((a) => (
              <button
                key={a.position}
                onClick={() => scrollToAgency(a.position)}
                className="w-6 h-6 rounded bg-slate-100 hover:bg-blue-100 hover:text-blue-700 text-slate-700 text-xs font-black flex items-center justify-center cursor-pointer transition-colors"
                title={a.name}
              >
                {a.position}
              </button>
            ))}
          </div>
        </div>

        {/* Section: 7 Agency Directory Profiles (Clutch / GoodFirms Card Style) */}
        <section className="space-y-8 mb-16">
          {filteredAgencies.map((agency) => (
            <article
              id={`agency-${agency.position}`}
              key={agency.position}
              className={`rounded-2xl border transition-all duration-200 scroll-mt-28 ${agency.isFeatured ? 'bg-white border-blue-400 shadow-md ring-2 ring-blue-500/20' : 'bg-white border-slate-200 shadow-xs'}`}
            >
              {/* Featured Badge Ribbon for #1 */}
              {agency.isFeatured && (
                <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white px-6 py-2.5 rounded-t-2xl flex flex-wrap items-center justify-between gap-2 text-xs font-bold tracking-wide">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-300" />
                    <span>#1 FEATURED CHOICE FOR CONNECTICUT LOCAL SEARCH</span>
                  </div>
                  <span className="bg-blue-800/80 px-2.5 py-0.5 rounded text-[11px] font-black uppercase">
                    Map 3-Pack Specialist
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Agency Card Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-200">
                  <div className="flex items-start gap-4">
                    {/* Position Number & Monogram */}
                    <div className="relative shrink-0">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center font-black text-xl sm:text-2xl shadow-sm ${agency.isFeatured ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'}`}>
                        {agency.monogram}
                      </div>
                      <span className="absolute -bottom-2 -right-2 bg-slate-900 text-white text-[11px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                        #{agency.position}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                          {agency.position}. {agency.name}
                        </h2>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Verified
                        </span>
                      </div>

                      {/* Headline / Focus Subhead */}
                      <p className="text-sm sm:text-base font-bold text-blue-700">
                        {agency.position === 1 && 'Featured Choice for Connecticut Local Search'}
                        {agency.position === 2 && 'Small-Business SEO and Website Support'}
                        {agency.position === 3 && 'Organic SEO With Broader Marketing Support'}
                        {agency.position === 4 && 'SEO, Website Design, and Marketing Coordination'}
                        {agency.position === 5 && 'Website Design, Local SEO, and Lead Tracking'}
                        {agency.position === 6 && 'SEO and AI Search Visibility'}
                        {agency.position === 7 && 'SEO for Established E-Commerce Brands'}
                      </p>

                      {/* Review Stars & Location */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-1">
                        <div className="flex items-center gap-1">
                          <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                          <span className="font-bold text-slate-900 ml-1">{agency.rating.toFixed(1)}</span>
                          <span className="text-slate-500">({agency.reviewsCount} reviews)</span>
                        </div>
                        <span className="text-slate-300">•</span>
                        <span className="flex items-center gap-1 font-medium text-slate-700">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" /> {agency.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Top Action CTAs */}
                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <a
                      href={agency.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition-colors cursor-pointer shadow-2xs"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    </a>

                    {agency.isFeatured ? (
                      <button
                        onClick={() => navigate('/free-seo-audit')}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                      >
                        <span>Claim Free Audit</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <a
                        href={agency.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        <span>Contact Agency</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Clutch Specifications Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 my-5 bg-slate-50 rounded-xl px-4 border border-slate-200/80 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[11px] font-semibold uppercase">Pricing Range</span>
                    <span className="font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                      <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                      {agency.pricing}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px] font-semibold uppercase">Team Size</span>
                    <span className="font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      {agency.teamSize}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px] font-semibold uppercase">Focus Specialty</span>
                    <span className="font-bold text-slate-900 block truncate mt-0.5" title={agency.focusArea}>
                      {agency.focusArea}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px] font-semibold uppercase">Official Website</span>
                    <a
                      href={agency.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-600 hover:text-blue-800 underline block truncate mt-0.5"
                    >
                      {agency.websiteDisplay}
                    </a>
                  </div>
                </div>

                {/* Editorial Body Text (Exact from Article) */}
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {agency.description.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Clutch Due Diligence / Ask Before Hiring Box */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{agency.discussionOrAskTitle}</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pl-6">
                    {agency.discussionOrAskContent}
                  </p>
                </div>

                {/* Suggested Fit Badge & Next Step */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="font-bold text-slate-900">Suggested fit:</span>
                    <span className="text-slate-700 bg-slate-100 px-2.5 py-1 rounded font-medium">
                      {agency.suggestedFit}
                    </span>
                  </div>

                  {agency.nextStepText && agency.nextStepUrl && (
                    <div className="text-xs sm:text-sm font-semibold">
                      <span className="text-slate-500 mr-1.5">Next step:</span>
                      <Link
                        to="/contact"
                        className="text-blue-600 hover:text-blue-800 underline font-bold inline-flex items-center gap-1"
                      >
                        Contact Local SEO CT <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Section: Which Connecticut SEO Company Fits Your Business? */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Shortlist Selection Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
              Which Connecticut SEO Company Fits Your Business?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The companies above serve different needs. Start with the outcome you want, then compare the relevant providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Scenario 1: Local Calls */}
            <div className="p-6 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">For Local Calls and Service Inquiries</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Begin with Local SEO CT if your main priority is discussing local search visibility and leads across your service area. Compare its proposal with other agencies offering local SEO.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your brief should identify the services you want to grow and the towns you can realistically serve. A contractor looking for installation projects should not use the same success criteria as a business seeking maintenance bookings.
              </p>
              <div className="pt-2">
                <Link to="/contact" className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1">
                  Discuss Local Calls with Local SEO CT <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Scenario 2: Web Design & SEO */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">For Website Design and SEO Together</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Web Services CT, Aspire Digital Solutions, and Develomark advertise website services alongside SEO.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ask how the team will preserve useful existing content, handle changed URLs, test forms, and confirm tracking before launch. A redesigned website should be easy for customers to use and easy for your team to manage.
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-500">
                  Recommended Shortlist: Web Services CT, Aspire Digital, Develomark
                </span>
              </div>
            </div>

            {/* Scenario 3: Broader Organic */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">For Broader Organic Search Work</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Zero Gravity Marketing offers a range of organic search services. Skyfield Digital also advertises SEO across local and wider markets.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Discuss whether you need technical repairs, service-page improvements, supporting content, or a combination. The proposal should identify the main constraint rather than give every task equal priority.
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-500">
                  Recommended Shortlist: Zero Gravity Marketing, Skyfield Digital
                </span>
              </div>
            </div>

            {/* Scenario 4: E-Commerce */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900">For E-Commerce Growth</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Digital Position is the most explicitly focused on established e-commerce brands among the companies described here.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Check its client-fit requirements before requesting a proposal. A local service business and a multi-category online store need different expertise, reporting, and workflows.
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-500">
                  Recommended Shortlist: Digital Position ($1M+ ARR stores)
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Regional & Industry Deep Dives */}
        <section className="space-y-8 mb-12">
          
          {/* Bridgeport, Milford, Shoreline */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Geographic Intent & Territory Analysis
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
              Finding an SEO Company in Bridgeport, Milford, or the Connecticut Shoreline
            </h2>
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                A company does not need an office in every town it serves. What matters is whether its strategy reflects your real locations and customer coverage.
              </p>
              <p>
                If you need an SEO company in Bridgeport, Connecticut, ask the agency to review the businesses appearing for your priority services. The competitors for emergency repairs may differ from those for larger planned projects.
              </p>
              <p>
                When comparing an SEO company in Milford, Connecticut, clarify whether your goal is reaching Milford customers or a wider service area. That decision affects page planning and how leads should be assessed.
              </p>
              <p>
                For businesses seeking an SEO company for the Connecticut shoreline, define the towns you actually serve. A broad regional label alone does not explain travel limits, service availability, or where your customers are located.
              </p>
              <p className="font-medium text-slate-900">
                Useful local content can include completed projects, original photos, and accurate location details. It should help a potential customer decide whether your business is a suitable choice.
              </p>
            </div>
          </div>

          {/* Law Firm SEO & Pool Company SEO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Law Firm SEO */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-blue-600">
                <Scale className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-wider">Practice Area Marketing</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Choosing a Connecticut Lawyer or Law Firm SEO Company
              </h3>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  A law firm should assess industry fit separately from general agency services.
                </p>
                <p>
                  When comparing a Connecticut law firm SEO company, ask how it plans content around your practice areas. Visitors seeking estate planning have different questions from those seeking help with a business dispute.
                </p>
                <p>
                  The agency should explain how it will organize service pages, present attorney information, and measure relevant consultation inquiries. Attorneys should review legal content before publication.
                </p>
                <p className="bg-amber-50 text-amber-900 p-3 rounded-lg border border-amber-200 text-xs font-medium">
                  Do not assume that an agency specializes in legal marketing simply because it offers local SEO. Request relevant examples and ask who will write and review the content.
                </p>
              </div>
            </div>

            {/* Pool Company SEO */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-cyan-600">
                <Waves className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-wider">Specialty Contractor Search</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                What to Look for in Pool Company SEO in Connecticut
              </h3>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  Pool company SEO in Connecticut should reflect the services you actually offer. Installation, renovation, repairs, maintenance, openings, and closings involve different customer needs.
                </p>
                <p>
                  A homeowner planning a new pool may want project photos and an explanation of the quoting process. A customer seeking repairs may need to confirm service coverage and whether you handle their equipment.
                </p>
                <p className="bg-blue-50 text-blue-900 p-3 rounded-lg border border-blue-200 text-xs font-medium">
                  Ask the agency how it will account for seasonal demand and booking capacity. Measure inquiries by service type so that a rise in low-value requests does not hide weak performance for your priority work.
                </p>
              </div>
            </div>

          </div>

          {/* Reviews & Fast Results Guidance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Reviews Comparison */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
                Due Diligence Strategy
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                How to Compare Connecticut SEO Company Reviews
              </h3>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  Connecticut SEO company reviews can help you assess communication and reliability. Read the details as well as the rating.
                </p>
                <p>
                  Look for feedback about the work delivered, how questions were handled, and whether the client understood the reporting. Recent reviews from businesses with similar needs may be particularly useful.
                </p>
                <p>
                  Then ask for a relevant case study. Check the starting point, time period, work completed, and outcome measured. A traffic increase needs context: which pages gained visitors, and did those visitors become suitable inquiries or customers?
                </p>
                <p className="italic text-xs text-slate-500">
                  Agency testimonials are useful starting points, but they should not be your only source of evidence.
                </p>
              </div>
            </div>

            {/* Quick Results Reality Check */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-red-600 block">
                Algorithmic Reality Check
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Can a Local SEO Company Deliver Quick Results?
              </h3>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  An agency can often complete initial fixes quickly. It may correct inaccurate information, repair a broken form, or improve a weak service page early in the campaign.
                </p>
                <p>
                  Ranking changes and steady lead growth are less predictable. If you are looking for the best local SEO company in Connecticut for quick results, ask the provider to distinguish its delivery deadlines from its performance expectations.
                </p>
                <div className="p-3 bg-red-50 text-red-900 rounded-lg border border-red-200 text-xs font-semibold">
                  Google advises against hiring an SEO provider that guarantees first place in search results. [8]
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Also be clear about indexing tools. A rapid index checker can help monitor page status; it does not guarantee rankings. Google says requesting a recrawl does not guarantee immediate inclusion in search results, or inclusion at all. [9]
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* Section: Questions to Ask Before Signing an SEO Contract (Clutch Scorecard Checklist) */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Client Vetting Scorecard
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              Questions to Ask Before Signing an SEO Contract
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Before choosing a provider, ask these 8 critical questions. Compare the answers in writing. Clear responsibilities and a defined scope make it easier to assess progress. Click to check off as you evaluate providers:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {contractQuestions.map((q, idx) => {
              const isChecked = !!checkedQuestions[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleQuestionCheck(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${isChecked ? 'bg-emerald-50/70 border-emerald-300 text-slate-900' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/70'}`}
                >
                  <div className="mt-0.5 shrink-0 text-emerald-600">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block mb-0.5">Item #{idx + 1}</span>
                    <span className={`text-sm font-semibold leading-snug ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                      {q}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <strong>Pro Tip:</strong> Compare the answers in writing across every agency proposal. Clear responsibilities, delivery milestones, and written scope prevent scope creep and align expectations before spending marketing dollars.
          </div>
        </section>

        {/* Section: Frequently Asked Questions (Clutch Style Accordion + Schema) */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Editorial FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {(post.faqs || []).map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left bg-slate-50 hover:bg-slate-100/80 transition-colors flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-600">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white border-t border-slate-200 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: Start With Local SEO CT and Compare the Scope (Direct Conversion Card) */}
        <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-2xl p-8 sm:p-12 text-white shadow-xl mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider rounded border border-blue-400/30">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              Connecticut Local SEO Evaluation Anchor
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Start With Local SEO CT and Compare the Scope
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              If local visibility and customer inquiries are your main priorities, <a href="https://localseoct.com/" className="text-blue-400 underline font-bold hover:text-blue-300">Local SEO CT</a> is the featured starting point in this list.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Share your website, priority services, and target towns. Ask for a proposal explaining the work, reporting, fees, and responsibilities. Compare that scope with other suitable agencies before choosing the partner that fits your business.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => navigate('/free-seo-audit')}
                className="bg-blue-600 hover:bg-blue-500 text-white font-black text-xs sm:text-sm uppercase tracking-wide py-4 px-8 rounded-lg transition-colors shadow-lg shadow-blue-600/30 cursor-pointer flex items-center gap-2"
              >
                <span>Request Your Free Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_ENTITY.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-lg transition-colors text-xs sm:text-sm border border-white/20"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call Directly: {BUSINESS_ENTITY.phone}</span>
              </a>

              <Link
                to="/contact"
                className="text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4 pl-2"
              >
                Visit Contact Page →
              </Link>
            </div>
          </div>
        </section>

        {/* Section: Academic & Regulatory Sources */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="pb-4 mb-4 border-b border-slate-200">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Sources & Documentation References
            </h3>
            <p className="text-xs text-slate-500">
              Primary public domain, agency profiles, and Google Search Central algorithmic documentations cited in this guide:
            </p>
          </div>

          <ol className="list-decimal list-outside pl-5 space-y-2 text-xs text-slate-600 font-mono">
            {(post.sources || []).map((src) => (
              <li key={src.id} className="leading-relaxed">
                <span className="font-sans font-semibold text-slate-700 mr-1">[{src.id}]</span>
                <a
                  href={src.url.includes(' ') ? src.url.split(' ')[0] : src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {src.url}
                </a>
              </li>
            ))}
          </ol>
        </section>

      </main>
    </div>
  );
};
