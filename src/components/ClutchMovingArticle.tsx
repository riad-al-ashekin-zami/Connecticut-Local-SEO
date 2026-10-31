import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  MapPin,
  DollarSign,
  Truck,
  Building,
  Briefcase,
  Share2,
  Calendar,
  Layers,
  Info,
  CheckSquare,
  Square,
  Check,
  Clock,
  HelpCircle,
  Package,
  Home,
  Archive,
  ArrowRight,
  Phone,
  Scale,
  AlertTriangle,
  Award,
  ChevronDown,
  ChevronUp,
  Filter,
  FileText
} from 'lucide-react';
import { BlogPost, AgencyListing } from '../data/blogPosts';
import { BUSINESS_ENTITY } from '../data/content';

interface ClutchMovingArticleProps {
  post: BlogPost;
}

export const ClutchMovingArticle: React.FC<ClutchMovingArticleProps> = ({ post }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [checkedMovingList, setCheckedMovingList] = useState<Record<number, boolean>>({});

  const agencies = post.agencies || [];

  const filteredAgencies = selectedCategory === 'all'
    ? agencies
    : agencies.filter((a) => a.categoryTag === selectedCategory);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleCheck = (idx: number) => {
    setCheckedMovingList((prev) => ({
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

  const packingServiceRows = [
    { task: 'Packing', confirm: 'All rooms or selected fragile items only' },
    { task: 'Materials', confirm: 'Boxes, wrapping paper, bubble wrap, specialty dish packs, and custom wooden crates' },
    { task: 'Furniture', confirm: 'Bed frames, desks, and modular furniture dismantling and reassembly responsibilities' },
    { task: 'Unpacking', confirm: 'Box opening, counter placement, furniture positioning, and debris removal' },
    { task: 'Cleanup', confirm: 'Whether corrugated packing materials and boxes are hauled away on moving day' },
    { task: 'Specialty Work', confirm: 'Appliance disconnects, piano rigging, gun safes, or custom crating arrangements' }
  ];

  const costFactorsRows = [
    { factor: 'Labor', questions: 'What crew size, minimum hourly charge (e.g., 3-hr minimum), and travel time assumptions apply?' },
    { factor: 'Transport', questions: 'Are travel, vehicle fuel surcharges, tolls, and route-related charges included in the quote?' },
    { factor: 'Access', questions: 'Are stairs, long carries (>75 ft), elevator delays, or shuttle trucks charged as additional fees?' },
    { factor: 'Packing', questions: 'Which boxes, tape, shrink-wrap, and labor hours are bundled versus billed by unit?' },
    { factor: 'Specialty Items', questions: 'What requires a separate handling fee (upright/grand pianos, heavy safes, fine art)?' },
    { factor: 'Storage', questions: 'What are the monthly storage warehouse rates, warehouse handling fees, and redelivery fees?' },
    { factor: 'Protection', questions: 'What valuation option is selected (60¢/lb Released Value vs Full Value Protection) and its cost?' },
    { factor: 'Changes', questions: 'How are added inventory items, additional stops, or rescheduled move dates priced?' }
  ];

  const apartmentChecklist = [
    'Elevator reservations & dedicated service car scheduling',
    'Approved moving hours and building noise ordinances (e.g., 9 AM – 5 PM)',
    'Loading-dock access, height clearances, and parking permits',
    'Certificate of Insurance (COI) naming the property management company as additionally insured',
    'Floor and hallway wall protection (Masonite sheets and door jamb pads)',
    'Rules and dumpsters for disposing of moving debris and cartons'
  ];

  return (
    <article className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Breadcrumb & Metadata Bar */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4 text-xs">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-slate-400">
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-amber-400 transition-colors">Directory</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium truncate max-w-[200px] sm:max-w-xs">
              Moving Companies CT
            </span>
          </nav>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              Published: {post.publishDate}
            </span>
            <span className="hidden sm:inline-block text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {post.readingTime}
            </span>
            <button
              onClick={handleShare}
              className="flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors ml-2 bg-slate-800/80 hover:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700/60"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Directory Hero Header */}
      <header className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-12 pb-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.06),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
            <Truck className="w-3.5 h-3.5" />
            <span>2026 Connecticut Moving & Logistics Directory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            {post.title}
          </h1>

          <p className="mt-5 text-lg text-slate-300 max-w-3xl leading-relaxed">
            Choosing a moving company in Connecticut involves more than finding an available truck. You need a team that can handle your belongings, work around building access, and explain the price before moving day. A small apartment move needs different planning from an office relocation or a household move to Florida.
          </p>

          <p className="mt-3 text-sm text-slate-400 max-w-3xl leading-relaxed">
            The best moving companies for your shortlist are those that offer the services your move requires and can document how the job will be handled. Packing, temporary storage, delivery timing, and protection for valuable items can all affect the decision.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
                <Truck className="w-4 h-4 text-amber-400" />
                Evaluated
              </div>
              <div className="text-2xl font-bold text-white">7 Movers</div>
              <div className="text-xs text-slate-400 mt-0.5">Local, interstate & commercial</div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4 text-blue-400" />
                Coverage
              </div>
              <div className="text-2xl font-bold text-white">Statewide CT</div>
              <div className="text-xs text-slate-400 mt-0.5">Plus CT-to-FL corridors</div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Compliance
              </div>
              <div className="text-2xl font-bold text-white">CTDOT & FMCSA</div>
              <div className="text-xs text-slate-400 mt-0.5">Verified operating authority</div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
                <Archive className="w-4 h-4 text-purple-400" />
                Services
              </div>
              <div className="text-2xl font-bold text-white">Full-Service</div>
              <div className="text-xs text-slate-400 mt-0.5">Packing, crating & storage</div>
            </div>
          </div>

          {/* Editorial Disclaimer Badge */}
          <div className="mt-8 bg-slate-900/60 border border-slate-800 rounded-lg p-4 text-xs text-slate-400 leading-relaxed flex items-start gap-3 max-w-4xl">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-300">About this comparison:</span> The list is based on publicly advertised services, not an independently tested quality ranking. Suggested fit reflects those services. Availability, current operating authority, prices, and protection terms should be checked before booking.
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Quick-Glance Comparison Matrix Table */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Connecticut Moving Companies at a Glance</h2>
                    <p className="text-xs text-slate-400">Publicly advertised services and reasons to include each in your shortlist</p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-slate-950/80 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-3">#</th>
                      <th className="py-3 px-4">Company</th>
                      <th className="py-3 px-4">Advertised Services</th>
                      <th className="py-3 px-4">Reason to Include in Shortlist</th>
                      <th className="py-3 px-3 text-right">View</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-normal">
                    {agencies.map((agency) => (
                      <tr key={agency.position} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-3 font-mono text-amber-400 font-bold">{agency.position}</td>
                        <td className="py-3 px-4 font-semibold text-white whitespace-nowrap">
                          <button
                            onClick={() => scrollToAgency(agency.position)}
                            className="text-left hover:text-amber-400 transition-colors flex items-center gap-2"
                          >
                            <span className="w-6 h-6 rounded bg-slate-800 text-[10px] flex items-center justify-center font-bold text-slate-300 border border-slate-700">
                              {agency.monogram}
                            </span>
                            {agency.name}
                          </button>
                        </td>
                        <td className="py-3 px-4 text-xs text-slate-300 max-w-[220px]">
                          {agency.focusArea}
                        </td>
                        <td className="py-3 px-4 text-xs text-slate-400 max-w-[240px]">
                          {agency.considerWhen}
                        </td>
                        <td className="py-3 px-3 text-right whitespace-nowrap">
                          <button
                            onClick={() => scrollToAgency(agency.position)}
                            className="text-xs text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1"
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

            {/* Interactive Category Filter Bar */}
            <section className="bg-slate-900/50 border border-slate-800/80 p-4 rounded-xl flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold flex items-center gap-1.5 mr-2">
                <Filter className="w-3.5 h-3.5 text-amber-400" />
                Filter by Service Focus:
              </span>
              {[
                { id: 'all', label: 'All Movers (7)' },
                { id: 'long-distance', label: 'CT-to-Florida / Long-Distance (1)' },
                { id: 'residential', label: 'Local & Crating (1)' },
                { id: 'van-line', label: 'Van Line Affiliates (2)' },
                { id: 'interstate', label: 'Interstate & Relocation (1)' },
                { id: 'commercial', label: 'Commercial & Office (1)' },
                { id: 'storage', label: 'Moving & Storage (1)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    selectedCategory === tab.id
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </section>

            {/* Detailed Mover Profiles (Clutch / GoodFirms Directory Cards) */}
            <div className="space-y-10">
              {filteredAgencies.map((agency) => (
                <article
                  key={agency.position}
                  id={`agency-${agency.position}`}
                  className="relative rounded-2xl border transition-all scroll-mt-24 bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-xl"
                >
                  <div className="p-6 sm:p-8">
                    {/* Header Row: Rank, Monogram, Name, Badges & Ratings */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg border bg-slate-800 text-white border-slate-700">
                            {agency.monogram}
                          </div>
                          <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-slate-950 border border-slate-700 text-xs font-mono font-bold text-amber-400 flex items-center justify-center">
                            #{agency.position}
                          </span>
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-2xl font-bold text-white tracking-tight">
                              {agency.name}
                            </h3>
                            {agency.badge && (
                              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                {agency.badge}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 mt-2">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-500" />
                              {agency.location}
                            </span>
                            <span className="flex items-center gap-1 text-amber-400 font-semibold">
                              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                              {agency.rating.toFixed(1)}
                              <span className="text-slate-500 font-normal">({agency.reviewsCount} reviews)</span>
                            </span>
                            <a
                              href={agency.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium"
                            >
                              {agency.websiteDisplay}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Header CTA */}
                      <div className="sm:self-center shrink-0">
                        <a
                          href={agency.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
                        >
                          Visit Website
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Clutch-style Specifications Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-b border-slate-800/80 text-xs">
                      <div className="bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/60">
                        <span className="text-slate-400 block mb-0.5">Advertised Services:</span>
                        <span className="font-semibold text-slate-200 line-clamp-1">{agency.focusArea}</span>
                      </div>
                      <div className="bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/60">
                        <span className="text-slate-400 block mb-0.5">Reason to Include:</span>
                        <span className="font-semibold text-slate-200 line-clamp-1">{agency.considerWhen}</span>
                      </div>
                      <div className="bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/60">
                        <span className="text-slate-400 block mb-0.5">Estimated Rates:</span>
                        <span className="font-semibold text-amber-400">{agency.pricing}</span>
                      </div>
                      <div className="bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/60">
                        <span className="text-slate-400 block mb-0.5">Fleet & Network:</span>
                        <span className="font-semibold text-slate-200">{agency.teamSize}</span>
                      </div>
                    </div>

                    {/* Editorial Profile Description */}
                    <div className="mt-5 space-y-3 text-sm text-slate-300 leading-relaxed">
                      {agency.description.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    {/* What to Discuss / Why Consider Box */}
                    <div className="mt-6 bg-slate-950/70 border border-slate-800 rounded-xl p-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                        <Briefcase className="w-4 h-4 text-amber-400" />
                        {agency.discussionOrAskTitle}
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {agency.discussionOrAskContent}
                      </p>
                    </div>

                    {/* Suggested Fit Callout */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs bg-slate-900 border border-slate-800/80 px-4 py-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-slate-400">Suggested Fit:</span>
                        <span className="font-medium text-slate-200">{agency.suggestedFit}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Editorial Guide 1: How to Choose a Local Moving Company */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Home className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  How to Choose a Local Moving Company in Connecticut
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                For a local move, start with accurate information. Give each company the same inventory, addresses, preferred date, and building-access details.
              </p>
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                <p className="font-semibold text-xs text-amber-400 uppercase tracking-wider">
                  Mention anything that could affect the move on moving day:
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Stairs or limited elevator access at either pickup or drop-off location.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Long distances between the truck parking spot and the building entrance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Narrow driveways, low tree branches, or restricted municipal parking zones.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Furniture that needs dismantling (e.g., sectional sofas, king bed frames).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Heavy, fragile, or unusually shaped items (pianos, safes, gym equipment).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Additional pickup or delivery stops along the route.</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ask how the estimate is calculated. Confirm crew size, minimum charges, travel time, materials, and any access-related fees. A dependable local moving company should be able to explain the plan and its assumptions before you book.
              </p>
            </section>

            {/* Editorial Guide 2: Apartment Moving in Connecticut */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                  <Building className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Best Moving Companies for Apartment Moving in Connecticut
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Apartment moves can be small in volume but difficult in access. The most suitable mover is one that can work within your building’s requirements. Meyer explicitly advertises apartment moving, while Hands On lists residential and college moving services. Joyce also mentions apartment moves. These are starting points for inquiries, not proof that a particular company can meet your building’s schedule.
              </p>
              
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Questions to Ask Your Property Manager Before Booking:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  {apartmentChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Give the same information to every mover. Also confirm whether large furniture will fit through doors, stairwells, and elevators. Ask how waiting time is charged if access is delayed.
              </p>
            </section>

            {/* Editorial Guide 3: Long-Distance and Interstate Moving */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Truck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Connecticut Long-Distance and Interstate Moving Companies
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                A long-distance move needs a clear transport and delivery plan. A move across a state line is interstate even when the mileage is relatively short.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                When comparing interstate moving companies serving Connecticut, ask who will transport your belongings and whether you are dealing with the carrier or a broker. FMCSA’s moving guidance emphasizes understanding that distinction and checking registration. [8]
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your written documents should explain the inventory, services, pickup arrangements, delivery window, and charges. For routes such as Connecticut to New Jersey, Arizona, Colorado, or Washington, confirm availability directly. A general long-distance service listing does not establish that a company can handle your specific route and dates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
                  <h3 className="font-bold text-sm text-amber-400">Moving From Connecticut to Florida</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Collegian Movers explicitly advertises this route. Other interstate providers may also quote it, subject to availability. Ask whether the shipment travels directly or as part of a combined load. Clarify expected delivery timing, possible transfers, and any storage requirements.
                  </p>
                </div>

                <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
                  <h3 className="font-bold text-sm text-blue-400">Moving From Florida to Connecticut</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Confirm the reverse route separately. Ask who handles pickup in Florida and delivery in Connecticut. Do not assume that a company promoting Connecticut-to-Florida moving offers identical arrangements in the opposite direction.
                  </p>
                </div>
              </div>
            </section>

            {/* Editorial Guide 4: Full-Service Packing and Moving */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Full-Service Packing and Moving
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  “Full service” should be defined in the estimate rather than assumed.
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                It may involve packing, loading, transportation, unloading, and selected unpacking or assembly tasks. Ask which of those services are included and whether materials are charged separately.
              </p>

              <div className="overflow-x-auto -mx-6 sm:mx-0">
                <table className="w-full text-left text-sm text-slate-300 border border-slate-800 rounded-xl overflow-hidden">
                  <thead className="bg-slate-950 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4">Task</th>
                      <th className="py-3 px-4">What to Confirm</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-xs">
                    {packingServiceRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3 px-4 font-bold text-amber-400 whitespace-nowrap">{row.task}</td>
                        <td className="py-3 px-4 text-slate-300">{row.confirm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                You can also request partial packing. For example, the mover may pack fragile kitchen items while you handle clothing and books.
              </p>
            </section>

            {/* Editorial Guide 5: Moving and Storage Companies in Connecticut */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  <Archive className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Moving and Storage Companies in Connecticut
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Storage can help when closing dates do not align, a renovation is unfinished, or a business needs a staged move. Before choosing a local moving and storage company in Connecticut, ask where the goods will be kept and how access works. Warehouse storage is not necessarily accessible in the same way as a self-storage unit.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                {[
                  'The storage facility location and type of vault space',
                  'Whether temperature or humidity climate control is provided',
                  'How your items are inventoried upon warehouse intake',
                  'Minimum storage billing periods (e.g., 1-month minimum)',
                  'Access fees and warehouse handling charges',
                  'Redelivery fees and required advance notice periods',
                  'Valuation protection terms while items remain stored'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                If you may need certain items early, identify them before packing. Ask whether the storage arrangement allows partial retrieval.
              </p>
            </section>

            {/* Editorial Guide 6: High-Value & Valuation Protection */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Moving High-Value and Fragile Items
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                For artwork, antiques, pianos, or other valuable items, request a handling plan before moving day. Collegian lists antique, fine-art, and piano services. Hands On lists piano moving and custom crating. Confirm that the provider has experience with your specific item and that the proposed materials and equipment are included.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Photograph items and record their condition. Tell the mover about unusual dimensions, weight, or handling requirements.
              </p>

              <div className="bg-slate-950/80 border border-rose-500/30 rounded-xl p-5 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  Understand Federal & State Protection Options
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For interstate household moves, FMCSA distinguishes Full Value Protection from Released Value. Released Value generally limits liability to <strong>60 cents per pound per article</strong>, which may be far below an item’s actual value (e.g., a 10-lb $1,000 laptop would yield only $6.00). These valuation options are not the same as a separate third-party insurance policy. [9]
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Request written terms, exclusions, deductibles, and instructions for declaring high-value items. In-state moves may have different requirements, so do not assume interstate terms apply.
                </p>
              </div>
            </section>

            {/* Editorial Guide 7: Senior Moving Services */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Senior Moving Services in Connecticut
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                A senior move may involve downsizing, family coordination, packing help, and careful setup at the destination. Collegian advertises senior moving services, and Hands On lists senior move management. Ask what those services include rather than assume they cover sorting, donations, disposal, or unpacking.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                {[
                  'Who makes final decisions about belongings',
                  'Which items are moving, staying, or being donated',
                  'Who is designated as the primary family contact',
                  'What needs to be unpacked and set up first (bed, bath, chairs)',
                  'Any building access or scheduling rules at the retirement community'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Keep essential medication, personal documents, and immediately needed belongings accessible and with you in your vehicle.
              </p>
            </section>

            {/* Editorial Guide 8: Office, Commercial, and Warehouse Moving */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Office, Commercial, and Warehouse Moving
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Business moves need a plan for keeping disruption manageable. For commercial moving companies serving Stamford, Connecticut, or another city, ask how the team will coordinate with building management and your staff. Confirm whether evening or weekend work is available if required.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Label items by destination room or department. Identify furniture that requires reassembly and equipment that needs specialist handling. Greene advertises commercial relocation and modular furniture work. Barnes and Hands On also list business moving services. Request examples relevant to your project.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                A warehouse move may require different equipment and expertise from an office move. Discuss machinery, racks, stock, loading access, and installation separately.
              </p>
            </section>

            {/* Editorial Guide 9: How Much Do Connecticut Movers Charge? Table */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  How Much Do Connecticut Moving Companies Charge?
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  The cost depends on inventory volume, distance, access, dates, packing, storage, and handling requirements. Compare written estimates using the exact same scope.
                </p>
              </div>

              <div className="overflow-x-auto -mx-6 sm:mx-0">
                <table className="w-full text-left text-sm text-slate-300 border border-slate-800 rounded-xl overflow-hidden">
                  <thead className="bg-slate-950 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4">Cost Factor</th>
                      <th className="py-3 px-4">Questions to Ask</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-xs">
                    {costFactorsRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3 px-4 font-bold text-amber-400 whitespace-nowrap">{row.factor}</td>
                        <td className="py-3 px-4 text-slate-300">{row.questions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 text-xs text-slate-400 space-y-2">
                <p className="text-slate-300 font-medium">
                  To make a move more affordable, reduce your household inventory before estimates are finalized and ask whether mid-week or mid-month date flexibility affects availability or price.
                </p>
              </div>
            </section>

            {/* Editorial Guide 10: Check Registration, Reviews, and the Written Agreement */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Check Registration, Reviews, and the Written Agreement
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connecticut’s consumer guidance directs customers to CTDOT for in-state household-goods mover regulation. Interstate customers can use FMCSA’s Protect Your Move resources to research movers and verify USDOT and MC numbers. [8][10]
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Match the legal company name and identifying details to the company issuing your estimate. A website’s statement that it is licensed and insured should not replace a current check.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Read recent reviews about moves similar to yours. Look for details about communication, estimate accuracy, handling, delivery, and how problems were resolved. A high rating does not prove that a company is the best fit for every move. This comparison does not certify the current credentials or performance of the listed providers.
              </p>
            </section>

            {/* Consumer Alert: Connecticut River Moving Company */}
            <section className="bg-amber-950/20 border border-amber-500/40 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                Consumer Verification Note: Is Connecticut River Moving Company Based in Connecticut?
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Despite its name, <strong>Connecticut River Moving Company</strong> lists an address in Lyme, New Hampshire, on its website. It advertises house and office moves, packing, and storage. [11]
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                If you are searching for that specific company, contact it directly to confirm service coverage for your Connecticut move. It should not be assumed to be Connecticut-based simply because of the river in its brand name.
              </p>
            </section>

            {/* Interactive Moving Scope Checklist */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Request Estimates for the Same Move: Pre-Booking Checklist
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Prepare one complete scope sheet and share it with each company you contact.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  'Room-by-room inventory list (furniture count and estimated box quantities)',
                  'Complete origin and destination addresses with floor/elevator specs',
                  'Loading dock, parking regulations, and walking distance to entrance',
                  'Preferred move dates and acceptable delivery date windows',
                  'Specific fragile, antique, piano, or specialty crating needs',
                  'Storage requirements (temporary transit vault vs long-term storage)',
                  'Choice of valuation protection (Full Value Protection vs 60¢/lb Released Value)'
                ].map((item, idx) => {
                  const isChecked = !!checkedMovingList[idx];
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleCheck(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'bg-amber-950/30 border-amber-500/50 text-slate-200'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0 text-amber-400">
                        {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-600" />}
                      </div>
                      <span className="text-xs sm:text-sm font-medium leading-snug">{item}</span>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Choose a Connecticut moving company that explains the work clearly and provides written terms you understand. A useful estimate should show who will handle the move, what is included, and what could change before delivery.
              </p>
            </section>

            {/* Frequently Asked Questions (FAQ Accordion with Schema Sync) */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Answers to key questions about hiring a moving company in Connecticut.
                </p>
              </div>

              <div className="space-y-3">
                {(post.faqs || []).map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/60 transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-white hover:text-amber-400 transition-colors text-sm sm:text-base"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Local SEO CT Context Banner */}
            <section className="bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                  Are You a Connecticut Contractor or Local Service Provider?
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Grow Your High-Intent Local Search Rankings in CT
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Local SEO CT specializes in local search visibility, Google Maps 3-Pack placement, and localized organic discovery for moving companies, home service contractors, and regional businesses across Connecticut.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Speak with Local SEO CT
                  </Link>
                  <Link
                    to="/free-audit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
                  >
                    Claim Free CT SEO Audit
                  </Link>
                </div>
              </div>
            </section>

            {/* Verified Sources Citation Section */}
            <section className="pt-8 border-t border-slate-800 text-xs text-slate-500 space-y-2">
              <h3 className="font-semibold text-slate-400 uppercase tracking-wider text-[11px]">
                Research References & Sources Cited
              </h3>
              <ol className="list-decimal list-inside space-y-1">
                {(post.sources || []).map((source) => (
                  <li key={source.id} className="truncate">
                    <span className="text-slate-400">[{source.id}] </span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-amber-400 underline transition-colors"
                    >
                      {source.url}
                    </a>
                  </li>
                ))}
              </ol>
            </section>

          </div>

          {/* Right Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Quick Navigation Anchor Card */}
            <div className="sticky top-20 space-y-6">
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <h3 className="font-bold text-sm text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-amber-400" />
                  Jump to Mover Profile
                </h3>
                <nav className="space-y-2 text-xs">
                  {agencies.map((agency) => (
                    <button
                      key={agency.position}
                      onClick={() => scrollToAgency(agency.position)}
                      className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center justify-between group border border-transparent hover:border-slate-700"
                    >
                      <span className="truncate">
                        <span className="font-mono text-amber-400 font-bold mr-2">#{agency.position}</span>
                        {agency.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition-colors shrink-0" />
                    </button>
                  ))}
                </nav>
              </div>

              {/* Moving Checklist Box */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <FileText className="w-4 h-4 text-amber-400" />
                  CT Moving Essentials
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Moving within Connecticut or out-of-state? Remember to always obtain a written binding or not-to-exceed estimate.
                </p>
                <div className="text-[11px] text-slate-400 space-y-1.5 pt-2 border-t border-slate-800">
                  <div>✓ Check CTDOT regulation for in-state</div>
                  <div>✓ Verify FMCSA USDOT/MC for interstate</div>
                  <div>✓ Review valuation protection terms</div>
                  <div>✓ Lock in building elevator reservations</div>
                </div>
              </div>

              {/* Related CT Market Directories */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
                <h3 className="font-bold text-sm text-white uppercase tracking-wider mb-3">
                  Related Connecticut Guides
                </h3>
                <div className="space-y-2 text-xs">
                  <Link
                    to="/blog/best-seo-company-connecticut/"
                    className="block p-2.5 rounded-lg bg-slate-950/60 hover:bg-slate-800 border border-slate-800/80 text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    <div className="font-bold text-white">Best SEO Companies in CT</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Top 7 Connecticut search agencies</div>
                  </Link>
                  <Link
                    to="/blog/best-digital-marketing-agency-connecticut/"
                    className="block p-2.5 rounded-lg bg-slate-950/60 hover:bg-slate-800 border border-slate-800/80 text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    <div className="font-bold text-white">Best Digital Marketing Agencies CT</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Full-funnel digital marketing firms</div>
                  </Link>
                  <Link
                    to="/blog/best-web-development-companies-connecticut/"
                    className="block p-2.5 rounded-lg bg-slate-950/60 hover:bg-slate-800 border border-slate-800/80 text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    <div className="font-bold text-white">Best Web Development Companies CT</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Custom, WordPress & B2B platforms</div>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};
