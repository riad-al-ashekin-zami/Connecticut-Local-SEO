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
  Layout,
  Code,
  Palette,
  ShoppingCart,
  Wrench,
  Scale,
  Sparkles,
  Eye,
  Check,
  Clock,
  HelpCircle
} from 'lucide-react';
import { BlogPost, AgencyListing } from '../data/blogPosts';
import { BUSINESS_ENTITY } from '../data/content';

interface ClutchWebDesignArticleProps {
  post: BlogPost;
}

export const ClutchWebDesignArticle: React.FC<ClutchWebDesignArticleProps> = ({ post }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [checkedHiringQuestions, setCheckedHiringQuestions] = useState<Record<number, boolean>>({});

  const agencies = post.agencies || [];

  const filteredAgencies = selectedCategory === 'all'
    ? agencies
    : agencies.filter((a) => a.categoryTag === selectedCategory);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleHiringCheck = (idx: number) => {
    setCheckedHiringQuestions((prev) => ({
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

  const hiringQuestions = [
    'Who will design and develop the website?',
    'Which platform do you recommend, and why?',
    'What content do you need from us?',
    'Which pages and features are included?',
    'How many revision rounds are covered?',
    'What could change the price or schedule?',
    'How will you handle existing content and URLs?',
    'What testing will you complete?',
    'What accounts and files will we own?',
    'What training and support will we receive?'
  ];

  const regionalAreas = [
    { area: 'Hartford and West Hartford', question: 'Can you provide relevant local examples and explain the full build scope?' },
    { area: 'New Haven', question: 'Can the website support our content, booking, or custom-function requirements?' },
    { area: 'Manchester and Middletown', question: 'Which editing tools, training, and maintenance come with the package?' },
    { area: 'Milford and the Connecticut shoreline', question: 'How will the website explain our actual service coverage?' },
    { area: 'Fairfield, Darien, and Stamford', question: 'Does your portfolio show work suited to our audience and brand?' },
    { area: 'Southington and Madison', question: 'Who handles the project, and what support is available after launch?' }
  ];

  const buildApproaches = [
    { approach: 'Template-based design', suits: 'A straightforward website with standard features', clarify: 'How much customization is included' },
    { approach: 'Custom page design', suits: 'A business needing distinct layouts and content presentation', clarify: 'Which page types receive individual designs' },
    { approach: 'Custom development', suits: 'A project with unusual functions or integrations', clarify: 'Testing, documentation, ownership, and maintenance' }
  ];

  const quoteItems = [
    { item: 'Pages', explain: 'Number of pages and unique layouts' },
    { item: 'Content', explain: 'Writing, editing, uploading, and revisions' },
    { item: 'Design', explain: 'Template customization or original page design' },
    { item: 'Features', explain: 'Forms, booking, store functions, or integrations' },
    { item: 'Launch', explain: 'Testing, migration, redirects, and setup' },
    { item: 'Ownership', explain: 'Domain, accounts, website files, and licensed assets' },
    { item: 'Recurring costs', explain: 'Hosting, maintenance, plugins, apps, and support' },
    { item: 'Changes', explain: 'Included revisions and charges for extra work' }
  ];

  const launchTestingItems = [
    'Navigation and internal links',
    'Contact forms and notification delivery',
    'Booking and payment flows, where applicable',
    'Mobile layouts and common browsers',
    'Images, downloads, and contact details',
    'Tracking setup and page access',
    'Redirects from old URLs when replacing a website'
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
                Best Web Design Company Connecticut
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
                Choosing the best web design company in Connecticut starts with what your website needs to do. A contractor may want more quote requests. A law firm may need clear practice-area pages and attorney profiles. A retailer needs a store that makes products easy to find and purchase. The right design partner should understand those needs before choosing layouts, colors, or software.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                This guide compares Connecticut website design options for small businesses, custom projects, and online stores. Local SEO CT appears first as the featured contact for search-led website planning, followed by six providers that advertise website design or development.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Use the list to compare relevant experience, project scope, editing access, and support. A website should look professional, work well on different screens, and remain manageable after launch.
              </p>

              {/* Editorial Disclaimer */}
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="italic">
                  <strong>About this comparison:</strong> Local SEO CT is the featured first listing, not an independently verified top-ranked designer. Its public information reviewed here emphasizes SEO and conversion improvement; full website design and development availability needs confirmation. The other summaries reflect providers’ advertised services, not hands-on testing.
                </p>
              </div>
            </div>

            {/* Quick Directory Stats Card */}
            <div className="lg:w-80 shrink-0 bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Design Overview</span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-black uppercase rounded">2026 Edition</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="text-2xl font-black text-slate-900">7</div>
                  <div className="text-xs text-slate-500 font-medium">Providers Vetted</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="text-2xl font-black text-blue-600">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Connecticut Reach</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Platforms:</span>
                  <span className="font-semibold text-slate-800">WordPress, Shopify, Webflow</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Featured Lead:</span>
                  <span className="font-semibold text-slate-800">Local SEO CT</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500">Service Models:</span>
                  <span className="font-semibold text-slate-800">Custom, CMS, E-Commerce</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/free-seo-audit')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wide py-3 px-4 rounded-lg transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Free Search & Site Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

        {/* Section: Connecticut Web Design Options at a Glance */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 block mb-1">
                Comparative Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Connecticut Web Design Options at a Glance
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Click any provider below to jump to full specifications
            </span>
          </div>

          {/* Clutch Style Comparison Table */}
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100/80 text-slate-900 text-xs font-black uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3.5 px-4 w-16 text-center">Pos</th>
                  <th className="py-3.5 px-4 min-w-[200px]">Provider</th>
                  <th className="py-3.5 px-4 min-w-[280px]">Focus supported by public information</th>
                  <th className="py-3.5 px-4 min-w-[280px]">Main question to ask</th>
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
                    <td className="py-4 px-4 text-slate-600 text-sm italic">
                      {agency.discussionOrAskContent.includes('?') ? agency.discussionOrAskContent.split('?')[0] + '?' : agency.discussionOrAskContent}
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
              onClick={() => setSelectedCategory('search-led')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'search-led' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Search-Led Planning
            </button>
            <button
              onClick={() => setSelectedCategory('wordpress')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'wordpress' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              WordPress Small Biz
            </button>
            <button
              onClick={() => setSelectedCategory('custom-dev')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'custom-dev' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Custom Web & Integrations
            </button>
            <button
              onClick={() => setSelectedCategory('creative-video')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'creative-video' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Creative & Lead Tracking
            </button>
            <button
              onClick={() => setSelectedCategory('multi-platform')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${selectedCategory === 'multi-platform' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Multi-Platform & E-Commerce
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

        {/* Section: 7 Provider Profiles */}
        <section className="space-y-8 mb-16">
          {filteredAgencies.map((agency) => (
            <article
              id={`agency-${agency.position}`}
              key={agency.position}
              className={`rounded-2xl border transition-all duration-200 scroll-mt-28 ${agency.isFeatured ? 'bg-white border-blue-400 shadow-md ring-2 ring-blue-500/20' : 'bg-white border-slate-200 shadow-xs'}`}
            >
              {/* Featured Ribbon for #1 */}
              {agency.isFeatured && (
                <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white px-6 py-2.5 rounded-t-2xl flex flex-wrap items-center justify-between gap-2 text-xs font-bold tracking-wide">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-300" />
                    <span>#1 FEATURED CONTACT FOR SEARCH-LED WEBSITE PLANNING</span>
                  </div>
                  <span className="bg-blue-800/80 px-2.5 py-0.5 rounded text-[11px] font-black uppercase">
                    Conversion & SEO Architecture
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Agency Card Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-200">
                  <div className="flex items-start gap-4">
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
                          Verified Provider
                        </span>
                      </div>

                      {/* Headline Focus */}
                      <p className="text-sm sm:text-base font-bold text-blue-700">
                        {agency.position === 1 && 'Featured Contact for Search-Led Website Planning'}
                        {agency.position === 2 && 'Responsive WordPress Websites for Small Businesses'}
                        {agency.position === 3 && 'Website Design and Custom Development'}
                        {agency.position === 4 && 'Custom Websites and Small-Business Support'}
                        {agency.position === 5 && 'Website Design With Creative and Lead-Tracking Support'}
                        {agency.position === 6 && 'Website Development Across Several Platforms'}
                        {agency.position === 7 && 'Website Development Alongside Search Services'}
                      </p>

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

                {/* Specs Strip */}
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

                {/* Due Diligence Box */}
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

        {/* Section: What Should Connecticut Web Design Services Include? */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Project Deliverables Benchmark
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
              What Should Connecticut Web Design Services Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A clear scope makes proposals easier to compare. Before choosing a Connecticut website design company, ask for the following items in writing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold mb-3">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Discovery and Page Planning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The designer should understand your audience, services, and main website goal. For a local service business, planned pages might include Home, About, individual services, project examples, and Contact.
              </p>
              <p className="text-xs font-bold text-blue-700 pt-1">
                Tip: Ask for a sitemap before design work begins.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold mb-3">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Content and Images</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Confirm who writes the content, supplies photographs, and checks business details. "Content included" can mean editing existing copy, writing new pages, or simply uploading text you provide.
              </p>
              <p className="text-xs font-bold text-blue-700 pt-1">
                Tip: State how many pages need writing and if original photography is required.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold mb-3">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Responsive Layouts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Responsive design adapts to phones, tablets, and desktops. Ask the designer to check navigation, buttons, galleries, and forms across layouts—a desktop preview alone is not enough.
              </p>
              <p className="text-xs font-bold text-blue-700 pt-1">
                Standard: Visitors should read, navigate, and contact without effort.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Accessibility Checks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Include accessibility in the brief. Ask how the team tests keyboard navigation, text contrast, form labels, image descriptions, and visible focus states.
              </p>
              <p className="text-xs font-bold text-blue-700 pt-1">
                Standard: Request a clear testing and remediation plan.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Testing and Launch</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rigorous testing before going live: links, forms, payment flows, browser checks, tracking, and 301 redirects from old URLs when replacing a legacy site.
              </p>
              <p className="text-xs font-bold text-blue-700 pt-1">
                Protocol: Agree on who approves the final site and handles launch-day issues.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Training and Ongoing Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ask for a handover session covering text updates, image replacement, and managing features. Confirm who handles backups, software updates, and maintenance.
              </p>
              <p className="text-xs font-bold text-blue-700 pt-1">
                Access: Ensure you receive full administrator credentials.
              </p>
            </div>

          </div>

          {/* Pre-launch Testing Checklist Strip */}
          <div className="p-5 bg-blue-50/70 rounded-xl border border-blue-200 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-blue-900 block">
              Essential Pre-Launch Inspection Checklist (7 Items)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-blue-950 font-medium">
              {launchTestingItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Custom Website Design or Template-Based Build */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Architecture Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              Custom Website Design or a Template-Based Build?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Both approaches can be suitable. The choice depends on your requirements, budget, and expected changes.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 text-xs font-black uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4 w-1/4">Approach</th>
                  <th className="py-3 px-4 w-1/3">May suit</th>
                  <th className="py-3 px-4">What to clarify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 text-sm">
                {buildApproaches.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{row.approach}</td>
                    <td className="py-3.5 px-4 text-slate-700">{row.suits}</td>
                    <td className="py-3.5 px-4 text-slate-700">{row.clarify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200 leading-relaxed">
            Custom website design in Connecticut does not need to mean building every component from scratch. A project can use an established platform while including original layouts and tailored functionality. Ask the provider to define "custom" in the proposal.
          </p>
        </section>

        {/* Section: WordPress Web Design & E-Commerce Web Design */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* WordPress Deep Dive */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-blue-600">
              <Code className="w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-wider">CMS Governance</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              WordPress Web Design in Connecticut
            </h3>
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
              <p>
                WordPress may be worth discussing when you want a content-managed business website. However, the platform name alone does not explain how easy the finished site will be to edit.
              </p>
              <p>
                Ask the designer to demonstrate the actual editing process: can your team change service descriptions, replace photos, add posts, and update contact details without breaking the layout?
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5 text-xs">
                <span className="font-bold text-slate-900 block">Milford & Statewide WordPress Checks:</span>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Which theme and editor will be used (e.g. Elementor, Gutenberg)</li>
                  <li>Who owns premium software licenses</li>
                  <li>Which updates and backups are included</li>
                  <li>Whether you receive full administrator access</li>
                  <li>How the site can be transferred to another host</li>
                </ul>
              </div>
            </div>
          </div>

          {/* E-Commerce Deep Dive */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-emerald-600">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-wider">Online Store Builds</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Connecticut E-Commerce Web Design
            </h3>
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
              <p>
                An online store requires more planning than a brochure website. The brief should cover how products are organized, purchased, fulfilled, and maintained.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs text-slate-700">
                <span className="font-bold text-slate-900 block mb-1">Key E-Commerce Discussion Areas:</span>
                <p>• Product categories, variants, and filters</p>
                <p>• Product photography and descriptions</p>
                <p>• Inventory and order-management connections</p>
                <p>• Shipping, pickup options, and payment integration</p>
                <p>• Mobile checkout testing and data migration</p>
              </div>
              <p className="text-xs text-slate-600 italic">
                Judge providers by relevant store experience rather than location alone. Request a demonstration of the buying process and the administration tools.
              </p>
            </div>
          </div>

        </section>

        {/* Section: Website Design for Connecticut Service Businesses */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Vertical Specializations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              Website Design for Connecticut Service Businesses
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Industry-specific pages should help customers decide whether your business can meet their needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <Wrench className="w-4 h-4" />
                <span>Contractors, Plumbers, and Handyman Businesses</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Website design for a contractor in Connecticut should make services, coverage, and the quote process easy to understand. Plumbers may need clear pages for different types of work. Handyman businesses should explain which jobs they accept. Include real project images where available. Forms should collect enough details without becoming burdensome.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <Building className="w-4 h-4" />
                <span>Landscaping Businesses</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                A landscaping website can separate ongoing maintenance from installation or larger project work. Use project galleries with useful context, such as the type of work completed. Explain service coverage, the inquiry process, and information needed for a quote.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                <Scale className="w-4 h-4" />
                <span>Connecticut Law Firms</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                A Connecticut law firm website design agency should be able to organize practice areas, attorney profiles, and consultation information clearly. Ask for examples showing how visitors find the right service. Attorneys should approve legal content and claims before publication.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-pink-700 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Lash and Appointment-Based Businesses</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                A Connecticut lash business website should make services, location, booking, and appointment preparation easy to find. Ask whether the designer will integrate your existing booking system and test the full booking journey on mobile.
              </p>
            </div>

          </div>
        </section>

        {/* Section: Regional Finding Guide */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Geographic Considerations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              Finding a Web Designer in Your Connecticut Area
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A nearby provider can be useful for meetings and photography. But local presence should be considered alongside project fit.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 text-xs font-black uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4 w-1/3">Area</th>
                  <th className="py-3 px-4">Useful questions for your project</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 text-sm">
                {regionalAreas.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{row.area}</td>
                    <td className="py-3.5 px-4 text-slate-700">{row.question}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200 leading-relaxed">
            Whether you need a web design company in New Haven or a website designer in Middletown, ask to see comparable work. A city-specific service page does not necessarily establish that the company has an office there. Confirm meeting arrangements if in-person collaboration matters.
          </p>
        </section>

        {/* Section: Affordable Web Design Quotes Breakdown */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Cost Evaluation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              How to Compare Affordable Web Design Quotes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Affordable web design should mean a manageable total cost for the work you need. A lower initial price may exclude copywriting, migration, software licenses, or maintenance. A higher quote may include them. Compare the scope before comparing the total:
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 text-xs font-black uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4 w-1/4">Item</th>
                  <th className="py-3 px-4">What the quote should explain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 text-sm">
                {quoteItems.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{row.item}</td>
                    <td className="py-3.5 px-4 text-slate-700">{row.explain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <strong>Portfolio Vetting Tip:</strong> Open several live websites from the portfolio. Browse them on your phone as well as a computer. Check whether you can understand the business, find its services, and reach the contact page easily. Then ask what the agency actually delivered.
          </div>
        </section>

        {/* Section: 10 Questions to Ask Before Hiring (Interactive Scorecard) */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-12">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">
              Client Vetting Checklist
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              Questions to Ask Before Hiring
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Before choosing a web design company in Connecticut, ask these 10 questions. Click to check off items as you interview design partners:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {hiringQuestions.map((q, idx) => {
              const isChecked = !!checkedHiringQuestions[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleHiringCheck(idx)}
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
                    <span className="text-xs font-bold text-slate-400 block mb-0.5">Question #{idx + 1}</span>
                    <span className={`text-sm font-semibold leading-snug ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                      {q}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <strong>Pro Tip:</strong> A clear proposal should answer all ten of these questions before the project begins.
          </div>
        </section>

        {/* Section: Frequently Asked Questions (Clutch Accordion) */}
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

        {/* Section: Choose a Website Partner With a Clear Scope (Conversion Card) */}
        <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-2xl p-8 sm:p-12 text-white shadow-xl mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider rounded border border-blue-400/30">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              Connecticut Web Design Consultation Anchor
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Choose a Website Partner With a Clear Scope
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Start with the pages, features, and customer actions your website must support. Then compare providers whose experience matches those requirements.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              If you want to discuss website improvements alongside local search, contact <a href="https://localseoct.com/" className="text-blue-400 underline font-bold hover:text-blue-300">Local SEO CT</a> and confirm its design capabilities. For a complete new build, compare relevant portfolios and written proposals from the web design providers above.
            </p>

            <p className="text-slate-200 text-sm font-semibold">
              The right Connecticut web design partner should make the project understandable: what will be built, what it will cost, who will own it, and how it will be maintained.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => navigate('/free-seo-audit')}
                className="bg-blue-600 hover:bg-blue-500 text-white font-black text-xs sm:text-sm uppercase tracking-wide py-4 px-8 rounded-lg transition-colors shadow-lg shadow-blue-600/30 cursor-pointer flex items-center gap-2"
              >
                <span>Request Free Site & Search Audit</span>
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
              Primary public domain websites and agency profiles referenced in this web design comparison:
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
