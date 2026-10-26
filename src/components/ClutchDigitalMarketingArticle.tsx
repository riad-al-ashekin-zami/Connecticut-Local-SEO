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
  ArrowRight,
  Building,
  Briefcase,
  Share2,
  Calendar,
  Layers,
  Info,
  CheckSquare,
  Square,
  Search,
  Megaphone,
  Share,
  Mail,
  Palette,
  FileText,
  Map,
  Compass,
  Scale,
  Sparkles,
  Clock,
  HelpCircle
} from 'lucide-react';
import { BlogPost, AgencyListing } from '../data/blogPosts';
import { BUSINESS_ENTITY } from '../data/content';

interface ClutchDigitalMarketingArticleProps {
  post: BlogPost;
}

export const ClutchDigitalMarketingArticle: React.FC<ClutchDigitalMarketingArticleProps> = ({ post }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [checkedStrategyQuestions, setCheckedStrategyQuestions] = useState<Record<number, boolean>>({});

  const agencies = post.agencies || [];

  const filteredAgencies = selectedCategory === 'all'
    ? agencies
    : agencies.filter((a) => a.categoryTag === selectedCategory);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleStrategyCheck = (idx: number) => {
    setCheckedStrategyQuestions((prev) => ({
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

  const strategyQuestions = [
    { title: 'Who are we trying to reach?', desc: 'Define the customer, location, and need.' },
    { title: 'What are we promoting?', desc: 'Choose priority services or products.' },
    { title: 'Where will we reach them?', desc: 'Select channels for a clear reason.' },
    { title: 'What should they do next?', desc: 'Provide a suitable page and call to action.' },
    { title: 'How will we judge progress?', desc: 'Agree on business outcomes and reporting.' }
  ];

  const regionalAreas = [
    { area: 'Hartford and West Hartford', clarify: 'Whether you need one local campaign or coverage across several service areas' },
    { area: 'New Haven and Middletown', clarify: 'Which services and customer groups the campaign should prioritize' },
    { area: 'Manchester', clarify: 'Whether website maintenance and marketing need to be managed together' },
    { area: 'Milford and the shoreline', clarify: 'Which towns you serve and whether travel limits affect lead quality' },
    { area: 'Stamford and nearby New York markets', clarify: 'Whether campaigns need separate targeting, messaging, or reporting' },
    { area: 'Windham and southeastern Connecticut', clarify: 'Whether the agency understands your actual customer reach and offers suitable support' }
  ];

  const costCategories = [
    { category: 'Initial strategy and setup', check: 'Research, account setup, tracking, and initial planning' },
    { category: 'Monthly management', check: 'Included channels, deliverables, meetings, and reporting' },
    { category: 'Advertising spend', check: 'Media budget paid to the platforms' },
    { category: 'Content and creative', check: 'Writing, design, photography, video, and revisions' },
    { category: 'Website work', check: 'Development, landing pages, maintenance, and hosting' },
    { category: 'Software', check: 'Email, reporting, CRM, and other platform fees' }
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
                Best Digital Marketing Agency Connecticut
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
                The best digital marketing agency in Connecticut should help you reach the right customers and turn their interest into business. That could mean more appointment requests, better leads, repeat purchases, or higher online sales. Before comparing agencies, decide which outcome matters most and where your current marketing falls short.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Some Connecticut digital marketing agencies focus on local search. Others bring together website design, paid advertising, email, social media, and content. A company offering many services is not automatically the right choice. What matters is whether its team can plan and deliver the work your business needs.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                This list features Local SEO CT first, followed by six agencies with different service offerings. Use the comparison to find providers worth contacting and prepare better questions for your first meeting.
              </p>

              {/* Editorial Disclaimer */}
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="italic">
                  <strong>Editorial note:</strong> Local SEO CT is the featured first listing. This is a curated comparison of publicly advertised services, not an independently tested performance ranking. Suggested fit reflects the services described by each provider.
                </p>
              </div>
            </div>

            {/* Quick Directory Stats Card */}
            <div className="lg:w-80 shrink-0 bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Agency Snapshot</span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-black uppercase rounded">2026 Edition</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="text-2xl font-black text-slate-900">7</div>
                  <div className="text-xs text-slate-500 font-medium">Agencies Compared</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="text-2xl font-black text-blue-600">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Connecticut Base</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Service Mix:</span>
                  <span className="font-semibold text-slate-800">Search, Web, Ads, Email</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Featured Provider:</span>
                  <span className="font-semibold text-slate-800">Local SEO CT</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500">Geographic Nexus:</span>
                  <span className="font-semibold text-slate-800">Statewide Connecticut</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/free-seo-audit')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wide py-3 px-4 rounded-lg transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Free Marketing Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

        {/* Section: Connecticut Digital Marketing Agencies Compared Table */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 block mb-1">
                Comparative Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Connecticut Digital Marketing Agencies Compared
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Click any agency below to view complete details
            </span>
          </div>

          {/* Clutch Style Comparison Table */}
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100/80 text-slate-900 text-xs font-black uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3.5 px-4 w-16 text-center">Pos</th>
                  <th className="py-3.5 px-4 min-w-[200px]">Agency</th>
                  <th className="py-3.5 px-4 min-w-[280px]">Advertised focus</th>
                  <th className="py-3.5 px-4 min-w-[260px]">Suggested fit</th>
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
                      {agency.suggestedFit}
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

        {/* Agency Filter Bar */}
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
              onClick={() => setSelectedCategory('multi-channel')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'multi-channel' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Multi-Channel Strategy
            </button>
            <button
              onClick={() => setSelectedCategory('web-design')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'web-design' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Branding & Websites
            </button>
            <button
              onClick={() => setSelectedCategory('creative-video')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'creative-video' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Creative & Video
            </button>
            <button
              onClick={() => setSelectedCategory('ecommerce')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'ecommerce' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              E-Commerce ($1M+ ARR)
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

        {/* Section: 7 Agency Directory Profiles (Clutch Style) */}
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
                    <span>#1 FEATURED CHOICE FOR LOCAL SEARCH MARKETING</span>
                  </div>
                  <span className="bg-blue-800/80 px-2.5 py-0.5 rounded text-[11px] font-black uppercase">
                    Map Pack & Inquiries Leader
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
                          Verified Agency
                        </span>
                      </div>

                      {/* Headline / Focus Subhead */}
                      <p className="text-sm sm:text-base font-bold text-blue-700">
                        {agency.position === 1 && 'Featured Choice for Local Search Marketing'}
                        {agency.position === 2 && 'Marketing Across Multiple Channels'}
                        {agency.position === 3 && 'Branding, Websites, and Marketing'}
                        {agency.position === 4 && 'Small-Business Digital Marketing Support'}
                        {agency.position === 5 && 'Website Design, Advertising, and Creative Production'}
                        {agency.position === 6 && 'An Option for Southeastern Connecticut'}
                        {agency.position === 7 && 'Marketing for Established E-Commerce Brands'}
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

                {/* Editorial Body Text */}
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {agency.description.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Clutch "Why Consider / Ask Before Hiring" Box */}
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

        {/* Section: What Digital Marketing Services Does Your Connecticut Business Need? */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Core Capabilities Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
              What Digital Marketing Services Does Your Connecticut Business Need?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Start with the problem you need to solve. A useful Connecticut digital marketing company should explain how its proposed services address that problem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service 1: Local SEO */}
            <div className="p-6 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold mb-3">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Local SEO and Organic Search</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  Local SEO may be a priority when customers search for nearby providers. Broader organic search work can support service pages, product categories, and questions people research before buying.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For example, a home-service company may need accurate location information and clear pages for its main services. A retailer may need better product and category content.
                </p>
              </div>
              <p className="text-xs font-bold text-blue-800 bg-blue-100/70 p-2.5 rounded">
                Key question: Ask which pages and searches the agency plans to prioritize, and why.
              </p>
            </div>

            {/* Service 2: Paid Ads */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold mb-3">
                  <Megaphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Paid Search and Social Advertising</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  Paid campaigns require more than ad setup. The plan should explain the audience, offer, landing page, creative, budget, and method for measuring results.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Keep advertising spend separate from management fees. Also confirm who owns the ad accounts and who approves budget changes.
                </p>
              </div>
              <p className="text-xs font-semibold text-slate-700 bg-slate-200/70 p-2.5 rounded">
                Key principle: A campaign report should connect spending to useful outcomes rather than stop at clicks.
              </p>
            </div>

            {/* Service 3: Social & Content */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold mb-3">
                  <Share className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Social Media and Content Marketing</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  Social content can introduce your business, answer questions, and show the work behind your services. The right plan depends on what you can consistently share and where your audience spends time.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For a contractor, original project photos may be useful. For a professional service, clear explanations may help prospective clients understand the process.
                </p>
              </div>
              <p className="text-xs font-semibold text-slate-700 bg-slate-200/70 p-2.5 rounded">
                Key question: Ask who supplies ideas, creates the content, handles approvals, and responds to comments.
              </p>
            </div>

            {/* Service 4: Email */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Email Marketing and Follow-Up</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  Email may support repeat purchases, appointment reminders, seasonal updates, or follow-up with interested prospects.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If you are comparing email marketing agencies in Connecticut, clarify who manages the software, writes messages, maintains lists, and reports on results.
                </p>
              </div>
              <p className="text-xs font-semibold text-slate-700 bg-slate-200/70 p-2.5 rounded">
                Key principle: The plan should reflect the contacts you have. More sends are not a useful goal by themselves.
              </p>
            </div>

            {/* Service 5: Web Design & Branding */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-3 flex flex-col justify-between md:col-span-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold mb-3">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Website Design, Logos, and Branding</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  Website and branding services should help customers understand and recognize your business.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If logo design is included, ask for the file formats, usage rights, and any brand guidelines you will receive. For website work, clarify editing access, hosting responsibilities, maintenance, and ownership.
                </p>
              </div>
              <p className="text-xs font-semibold text-slate-700 bg-slate-200/70 p-2.5 rounded">
                Portfolio tip: Review the agency’s portfolio for clear messaging, usable navigation, and appropriate design—not just attractive screenshots.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Choosing an Agency for Your Connecticut Location */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Regional Proximity Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
              Choosing an Agency for Your Connecticut Location
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Your agency search may begin with a town name, but the campaign should reflect where your customers are and how your business serves them.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 text-xs font-black uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4 w-1/3">Search area</th>
                  <th className="py-3 px-4">What to clarify with the agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 text-sm">
                {regionalAreas.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{row.area}</td>
                    <td className="py-3.5 px-4 text-slate-700">{row.clarify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-2">
            <p>
              If you need a digital marketing agency in New Haven, Connecticut, ask about relevant local projects. Apply the same approach when comparing a digital marketing agency in Middletown, Hartford, or West Hartford.
            </p>
            <p className="font-medium text-slate-800">
              A page mentioning your city does not necessarily mean the agency has an office there. Confirm location and service arrangements when they matter to your project.
            </p>
          </div>
        </section>

        {/* Section: Industry Specific Marketing */}
        <section className="space-y-8 mb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Law Firms */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-blue-600">
                <Scale className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-wider">Legal Sector</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Digital Marketing for Connecticut Law Firms
              </h3>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  Connecticut law firm digital marketing services should be planned around the firm’s practice areas and the inquiries it wants.
                </p>
                <p>
                  A firm seeking estate-planning consultations needs different content from one focused on commercial disputes. Ask potential consultants how they will organize practice-area pages, explain the consultation process, and assess lead quality.
                </p>
                <p>
                  When comparing a Connecticut attorney digital marketing company, request relevant examples. Also agree on who reviews legal content and approves advertising claims before publication.
                </p>
                <p className="bg-blue-50 text-blue-900 p-3 rounded-lg border border-blue-200 text-xs font-bold">
                  A higher number of inquiries is useful only when those inquiries concern work the firm can accept.
                </p>
              </div>
            </div>

            {/* Dental Practices */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-cyan-600">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-wider">Healthcare & Dental</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Digital Marketing for Connecticut Dental Practices
              </h3>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  A Connecticut dental digital marketing agency should understand the difference between general appointment requests and interest in a specific treatment.
                </p>
                <p>
                  Ask how it will present services, location details, team information, and the next step for a prospective patient. The practice should approve treatment descriptions and any patient materials used in campaigns.
                </p>
                <p>
                  Reporting should help identify relevant appointment inquiries. A broad traffic increase alone does not show whether the campaign is reaching suitable patients.
                </p>
                <p className="bg-amber-50 text-amber-900 p-3 rounded-lg border border-amber-200 text-xs font-bold">
                  Do not assume that every agency on a statewide list has dental experience. Request practice-specific examples before hiring.
                </p>
              </div>
            </div>

          </div>

          {/* Landscaping, Real Estate, Travel */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
              Vertical Customization
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Marketing for Landscaping, Real Estate, and Travel Businesses
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Different businesses need different offers and content.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Landscaping Contractors</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For landscaping, a plan might separate maintenance from larger installation projects and account for the company’s seasonal capacity.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Real Estate Brokerages</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For real estate, discuss service areas, property types, original imagery, and how inquiries will be handled. Businesses serving CT and NY should explain that coverage accurately.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Travel Agencies</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For a travel agency, the focus may be a destination, travel style, or customer group. Campaigns should match the trips and planning support the agency actually offers.
                </p>
              </div>
            </div>
            <p className="text-xs font-semibold text-slate-800 pt-1">
              Takeaway: Choose digital marketing services in Connecticut based on your business model rather than a fixed list of channels.
            </p>
          </div>

        </section>

        {/* Section: Reviews & Portfolio Vetting Checklist */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Due Diligence
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              How to Compare Agency Reviews and Portfolios
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When reading digital marketing agency Connecticut reviews, look for details about the working relationship. Useful feedback may explain whether the agency met deadlines, answered questions clearly, handled revisions, and provided understandable reporting.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mt-2 font-medium">
              Then review its portfolio and case studies. Ask these 6 questions:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'What problem did the client need to solve?',
              'What work did the agency complete?',
              'Over what period were results measured?',
              'What counted as a lead or conversion?',
              'Were advertising costs included?',
              'Is the example relevant to your business?'
            ].map((q, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{q}</span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <strong>Editorial Insight:</strong> A polished portfolio shows presentation skills. A well-explained case study helps you understand the agency’s decisions and the limits of its results.
          </div>
        </section>

        {/* Section: Cost Breakdown Table */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Pricing Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              How Much Do Connecticut Digital Marketing Services Cost?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Costs depend on the services, production needs, website condition, campaign size, and level of support. Compare proposals using the same categories:
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 text-xs font-black uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4 w-1/3">Cost category</th>
                  <th className="py-3 px-4">What to check</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 text-sm">
                {costCategories.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{row.category}</td>
                    <td className="py-3.5 px-4 text-slate-700">{row.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <strong>Key Advice:</strong> Ask each Connecticut digital marketing firm to identify required costs and optional services. A low management fee may exclude work that another proposal includes.
          </div>
        </section>

        {/* Section: Strategy 5-Question Framework Checklist */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Strategy Scorecard
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              What Should a Digital Marketing Strategy Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A useful strategy should answer five essential questions. Click to check off as your agency outlines their roadmap:
            </p>
          </div>

          <div className="space-y-3 mb-6">
            {strategyQuestions.map((item, idx) => {
              const isChecked = !!checkedStrategyQuestions[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleStrategyCheck(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${isChecked ? 'bg-emerald-50/70 border-emerald-300' : 'bg-slate-50 border-slate-200 hover:bg-slate-100/70'}`}
                >
                  <div className="mt-0.5 shrink-0 text-emerald-600">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block mb-0.5">Strategy Pillar #{idx + 1}</span>
                    <h4 className={`text-sm font-bold ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs mt-0.5 ${isChecked ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-1.5">
            <p>
              The first phase should also confirm account access, ownership, tracking, and approval responsibilities.
            </p>
            <p className="font-semibold text-slate-800">
              Ask the agency to explain what it would delay. A focused plan often requires choosing the most useful work before expanding.
            </p>
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

        {/* Section: Start With a Clear Brief (Direct Conversion Card) */}
        <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-2xl p-8 sm:p-12 text-white shadow-xl mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider rounded border border-blue-400/30">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              Connecticut Digital Marketing Strategy Anchor
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Start With a Clear Brief
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              If your priority is local search visibility and relevant inquiries, begin by speaking with <a href="https://localseoct.com/" className="text-blue-400 underline font-bold hover:text-blue-300">Local SEO CT</a>. If you need a wider mix of advertising, email, creative, or website work, compare proposals from agencies whose advertised services match those needs.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Share your website, priority services, target locations, current marketing activity, and budget range. Ask for a clear scope, reporting plan, and explanation of what the team will work on first.
            </p>

            <p className="text-slate-200 text-sm font-semibold">
              The right digital marketing agency in Connecticut should leave you understanding the plan, the costs, and how you will assess the work.
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

        {/* Section: Academic & Documentation Sources */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="pb-4 mb-4 border-b border-slate-200">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Sources & Documentation References
            </h3>
            <p className="text-xs text-slate-500">
              Primary public domain websites and agency profiles referenced in this comparison:
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
