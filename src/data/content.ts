import { ServiceItem, FaqItem, LocationHub, PricingTier, IndustrySpecialization, RoadmapMilestone } from '../types';

export const BUSINESS_ENTITY = {
  brandName: 'Connecticut Local SEO',
  legalName: 'Connecticut Local SEO LLC',
  targetDomain: 'localseoct.com',
  domainUrl: 'https://localseoct.com',
  address: {
    street: '50 Sunrise Cir',
    city: 'Wallingford',
    state: 'CT',
    postalCode: '06492',
    country: 'USA',
    fullFormatted: '50 Sunrise Cir, Wallingford, CT 06492, USA',
  },
  geo: {
    latitude: 41.4570,
    longitude: -72.8232,
  },
  phone: '+1 860-967-0660',
  phoneRaw: '+18609670660',
  category: 'Marketing Agency / Local SEO Specialist',
  priceRange: '$$$',
  foundingLocation: 'Wallingford, New Haven County, Connecticut',
  serviceAreaState: 'Statewide Connecticut',
  openingHours: 'Mo-Fr 08:30-18:00',
};

export const SEO_METADATA = {
  titleTag: 'Local SEO Company CT | Connecticut - Connecticut Local SEO',
  metaDescription: 'Dominate the Google 3-Pack with the top local SEO company in CT. Get more calls & high-intent leads. Call +1 860-967-0660 for your free CT audit today!',
  canonicalUrl: 'https://localseoct.com/',
  h1: 'Local SEO Company CT: Turn High-Intent Connecticut Searches into Inbound Phone Calls & Booked Jobs',
  leadParagraph:
    'As Connecticut’s premier data-driven local search partner, we engineer predictable inbound pipeline for commercial contractors, home service leaders, and regional enterprises. We do not sell vanity impressions or hollow traffic spikes; we weaponize Google Map 3-Packs, localized intent queries, and localized entity relevance to capture ready-to-buy prospects across Wallingford, Hartford, New Haven, and Fairfield County.',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'gmb-dominance',
    title: 'Google Business Profile Optimization',
    targetKeyword: 'local seo service ct',
    tagline: 'Claim uncontested real estate in the Google 3-Pack where 70%+ of local clicks happen.',
    deliverables: [
      'Primary & secondary GBP category hierarchy alignment',
      'Geotagged high-resolution visual entity uploads',
      'Systematic review velocity & NLP sentiment architecture',
      'Local spam elimination (removing fraudulent competitor listings)',
    ],
    description:
      'Dominate the Google Map 3-Pack with precision category calibration, weekly geotagged updates, and competitor spam elimination designed to convert nearby high-intent searchers into exclusive inbound phone calls for your Connecticut business.',
    impactMetric: 'Average 142% Increase in Direct Click-to-Call Actions',
  },
  {
    id: 'citations',
    title: 'Local Citations',
    targetKeyword: 'connecticut local seo services',
    tagline: 'Eradicate NAP inconsistencies and build rock-solid regional citation authority.',
    deliverables: [
      'Direct synchronization across Tier-1 data aggregators',
      'Cleanup of legacy inconsistent phone numbers and old addresses',
      'Connecticut regional chamber & trade directory syndication',
      'Hyper-local citation sync across 80+ trusted data ecosystems',
    ],
    description:
      'Lock down verified Name, Address, and Phone consistency across 80+ Tier-1 data aggregators, regional business directories, and local chambers to build unshakeable algorithmic trust and regional map authority.',
    impactMetric: 'Zero NAP Divergence Across 80+ Key Local Data Sources',
  },
  {
    id: 'ai-aeo',
    title: 'AI & Answer Engine Optimization',
    targetKeyword: 'local seo company ct',
    tagline: 'Win primary placement in Google AI Overviews, Gemini, and ChatGPT Local Search.',
    deliverables: [
      'Entity-rich semantic schema tailored for LLM scrapers',
      'Direct Q&A conversational content for voice and AI assistants',
      'Topical authority clustering around Connecticut regional hubs',
      'Citation grounding ensuring inclusion in AI synthesis sources',
    ],
    description:
      'Position your Connecticut business as the primary recommended answer in Google AI Overviews, Gemini, and ChatGPT Local Search by structuring entity-rich local content, conversational FAQs, and authoritative digital citations.',
    impactMetric: 'Featured Recommendation in AI Search Overviews',
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    targetKeyword: 'local seo for contractors ct',
    tagline: 'Hardwire your digital infrastructure for lightning speed and rich snippet indexation.',
    deliverables: [
      'Comprehensive LocalBusiness & ProfessionalService JSON-LD',
      'Town-by-town local landing page architecture without cannibalization',
      'Core Web Vitals tuning for mobile click-to-call conversion speed',
      'Crawl budget and indexation cleanup for localized service silos',
    ],
    description:
      'Accelerate rankings with military-grade nested LocalBusiness schema, high-speed mobile Core Web Vitals optimization, and clean town-by-town URL silos engineered to capture commercial search traffic without keyword cannibalization.',
    impactMetric: '100% Google Rich Snippet & Entity Verification Rate',
  },
];

export const PRICING_DATA: PricingTier[] = [
  {
    id: 'starter',
    name: 'Local Starter',
    badge: 'Single Territory',
    price: '$299',
    cadence: '/ month',
    idealFor: 'Local businesses & single-crew contractors focused on dominating their home municipality.',
    deliverables: [
      'Complete Google Business Profile optimization & weekly geo-updates',
      '30 Tier-1 local citation builds & complete NAP consistency cleanup',
      'Core website on-page local SEO & LocalBusiness JSON-LD schema',
      'Review generation strategy & custom review link generator',
      'Monthly 13x13 geo-grid ranking & inbound call performance reporting',
    ],
    ctaText: 'Get Started with Local Starter',
  },
  {
    id: 'growth',
    name: 'Map Pack Growth',
    badge: 'Most Popular',
    featured: true,
    price: '$499',
    cadence: '/ month',
    idealFor: 'Growing service companies expanding into 3–5 neighboring towns and commercial corridors.',
    deliverables: [
      'Advanced Google Business Profile management & continuous spam removal',
      '60+ Local directory citations with ongoing aggregator data syndication',
      'Up to 5 custom geo-targeted town landing pages with dedicated schema',
      'Automated SMS/Email review acquisition funnel & sentiment monitoring',
      'Bi-weekly geo-grid proximity tracking with dedicated account strategist',
    ],
    ctaText: 'Claim Map Pack Growth',
  },
  {
    id: 'dominance',
    name: 'Dominance',
    badge: 'Statewide Market Leader',
    price: '$799',
    cadence: '/ month',
    idealFor: 'High-ticket contractors, multi-truck fleets, and firms demanding multi-county market leadership.',
    deliverables: [
      'Multi-profile or statewide multi-location search domination (up to 12 CT towns)',
      '100+ Enterprise citation distribution with real-time sync across major aggregators',
      'Hyper-local digital PR, local news mentions & regional trade authority backlinks',
      'Conversion-rate optimized localized landing silos & call recording integration',
      'Weekly geo-grid proximity audits & bi-weekly executive strategy reviews',
    ],
    ctaText: 'Secure Market Dominance',
  },
];

export const INDUSTRIES_DATA: IndustrySpecialization[] = [
  {
    id: 'contractors',
    title: 'Contractors & Home Builders',
    iconName: 'Hammer',
    description: 'Bespoke local search engines capturing high-ticket residential and commercial remodel jobs.',
    subTrades: ['Roofing Contractors', 'Kitchen & Bath Remodelers', 'Masonry & Paving', 'Custom Home Builders'],
    keyOutcome: '3.4x average increase in qualified quote requests for high-ticket projects.',
  },
  {
    id: 'hvac',
    title: 'HVAC & Heat Pump Specialists',
    iconName: 'Flame',
    description: 'High-converting 24/7 dispatch funnels designed for seasonal demand surges and emergency repairs.',
    subTrades: ['Emergency AC Repair', 'Heat Pump & Ductless Mini-Splits', 'Commercial Refrigeration', 'Furnace Replacement'],
    keyOutcome: 'Top 3 Map Pack rank across priority Connecticut service zip codes.',
  },
  {
    id: 'appliance-repair',
    title: 'Appliance Repair Technicians',
    iconName: 'Wrench',
    description: 'Same-day emergency call capture connecting homeowners with immediate diagnostic dispatch.',
    subTrades: ['Refrigerator Repair', 'Washer & Dryer Service', 'Dishwasher Diagnostics', 'Oven & Range Repair'],
    keyOutcome: 'Immediate click-to-call phone lead generation from mobile searchers.',
  },
  {
    id: 'tree-service',
    title: 'Tree Service & Landscaping',
    iconName: 'Trees',
    description: 'Immediate storm response visibility and recurring maintenance client acquisition.',
    subTrades: ['Emergency Tree Removal', 'Stump Grinding', 'Certified Arborist Care', 'Commercial Grounds Maintenance'],
    keyOutcome: 'Dominating storm-driven emergency queries within minutes of weather events.',
  },
  {
    id: 'plumbing',
    title: 'Plumbing & Drain Cleaning',
    iconName: 'Droplets',
    description: 'Targeted high-urgency search funnels capturing burst pipe and sewer backup calls before competitors.',
    subTrades: ['24/7 Emergency Plumbing', 'Water Heater Replacement', 'Drain & Sewer Jetting', 'Trenchless Repiping'],
    keyOutcome: 'Maximum visibility for high-intent emergency keywords across town borders.',
  },
  {
    id: 'electrical',
    title: 'Electricians & Generator Installers',
    iconName: 'Zap',
    description: 'Capturing lucrative whole-home standby generator installations and commercial panel upgrades.',
    subTrades: ['Standby Generator Installation', 'Panel Upgrades', 'EV Charger Installation', 'Commercial Wiring'],
    keyOutcome: 'Sustained inbound call volume for profitable system installs.',
  },
];

export const ROADMAP_DATA: RoadmapMilestone[] = [
  {
    month: 'Month 1',
    title: 'Foundation & GBP Setup',
    subtitle: 'Diagnostic Forensic Audit & Immediate Map Pack Anchoring',
    deliverables: [
      'Comprehensive 13x13 Geo-Grid Baseline Rank Audit across key CT zip codes',
      'Complete Google Business Profile verification, category calibration, and NAP audit',
      'Suppression and cleanup of duplicate or erroneous legacy business listings',
      'Deployment of base LocalBusiness JSON-LD schema on primary web domain',
    ],
    expectedMilestone: 'Elimination of listing confusion and immediate baseline indexing in local algorithm.',
  },
  {
    month: 'Month 3',
    title: 'On-Page & Maps Optimization',
    subtitle: 'Relevance Expansion & Algorithmic Trust Acceleration',
    deliverables: [
      'Deployment of custom geo-targeted town landing silos for secondary CT municipalities',
      'Syndication of 60+ verified Tier-1 citations and local business directory profiles',
      'Implementation of automated 5-star review acquisition and sentiment monitoring funnels',
      'Aggressive identification and reporting of fraudulent competitor spam listings',
    ],
    expectedMilestone: 'Transitioning outer red geo-grid nodes to orange and green within primary service radius.',
  },
  {
    month: 'Month 6',
    title: 'Scaling & Call Tracking',
    subtitle: 'Market Dominance & Granular Revenue Attribution',
    deliverables: [
      'Multi-county geo-grid expansion across high-value Fairfield, New Haven & Hartford markets',
      'Dynamic whisper call-tracking integration and CRM lead status attribution (ServiceTitan, Jobber)',
      'Optimization for Google AI Overviews, voice search, and generative local search engines',
      'Comprehensive ROI reporting comparing verified inbound job value against monthly investment',
    ],
    expectedMilestone: 'Consistent Top-3 Map Pack placement across target cities with measurable revenue ROI.',
  },
];

export const LOCATION_HUBS: LocationHub[] = [
  {
    county: 'New Haven County (Home Base)',
    hubCity: 'Wallingford',
    towns: ['Wallingford (06492)', 'New Haven', 'Meriden', 'Hamden', 'Cheshire', 'North Haven', 'Milford', 'Waterbury'],
    distanceFromWallingford: '0 – 18 miles',
    marketProfile: 'Central Connecticut industrial & trade corridor with massive search density for local home services.',
  },
  {
    county: 'Hartford County',
    hubCity: 'Hartford',
    towns: ['Hartford', 'West Hartford', 'Glastonbury', 'Avon', 'Farmington', 'Newington', 'Manchester', 'Bristol'],
    distanceFromWallingford: '15 – 35 miles',
    marketProfile: 'Corporate headquarters, high-net-worth residential suburbs, and competitive medical and legal verticals.',
  },
  {
    county: 'Fairfield County (Gold Coast)',
    hubCity: 'Stamford & Greenwich',
    towns: ['Stamford', 'Greenwich', 'Norwalk', 'Bridgeport', 'Fairfield', 'Westport', 'Darien', 'New Canaan'],
    distanceFromWallingford: '35 – 55 miles',
    marketProfile: 'The highest-ticket service market in New England. Extreme buyer intent for luxury trades and premier services.',
  },
  {
    county: 'Eastern & Shoreline CT',
    hubCity: 'Groton & New London',
    towns: ['Groton', 'New London', 'Norwich', 'Old Saybrook', 'Guilford', 'Branford', 'Madison', 'Mystic'],
    distanceFromWallingford: '25 – 60 miles',
    marketProfile: 'Thriving coastal communities, maritime enterprises, hospitality, and residential trade demand.',
  },
  {
    county: 'Western CT & Litchfield Hills',
    hubCity: 'Danbury & Torrington',
    towns: ['Danbury', 'Bethel', 'Brookfield', 'New Milford', 'Ridgefield', 'Torrington', 'Watertown', 'Newtown'],
    distanceFromWallingford: '28 – 50 miles',
    marketProfile: 'High residential density bordering New York state lines with robust regional commercial contractor demand.',
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'How does local SEO differ from traditional organic SEO for Connecticut businesses?',
    answer:
      'Traditional organic SEO focuses on broad national keywords regardless of user location. Local SEO specifically targets geographic search intent, Google Business Profile placement, localized review velocity, and Google Map 3-Pack prominence to drive direct inbound phone calls and foot traffic from prospective customers within specific Connecticut towns and counties.',
    wordCount: 49,
    snippetAnchor: 'local-vs-traditional-seo-ct',
  },
  {
    question: 'How quickly can a Connecticut business rank in the Google Map 3-Pack?',
    answer:
      'Most Connecticut service businesses see measurable 3-Pack ranking improvements within 60 to 90 days. High-competition corridors like Stamford, Norwalk, Hartford, and New Haven typically require 3 to 6 months of systematic citation cleanup, continuous profile optimization, review acquisition, and localized entity reinforcement to secure and retain top-three dominance.',
    wordCount: 48,
    snippetAnchor: 'ranking-timeline-3-pack-ct',
  },
  {
    question: 'What key factors determine local Google search ranking in Connecticut?',
    answer:
      'Google calculates local rankings based on three core algorithmic signals: Relevance (category accuracy, keyword alignment, and localized schema), Distance (proximity of the business to the searcher or verified service territory), and Prominence (Google review ratings and velocity, local citation consistency across major directories, and regional backlink authority).',
    wordCount: 47,
    snippetAnchor: 'local-ranking-factors-ct',
  },
  {
    question: 'What is the expected ROI of hiring a local SEO company in CT?',
    answer:
      'Local SEO yields superior ROI compared to pay-per-click advertising because it captures high-intent prospects actively seeking immediate services. Rather than paying for every individual ad click, local SEO builds durable organic real estate that generates a consistent, compounding pipeline of verified inbound phone calls and high-ticket service contracts.',
    wordCount: 47,
    snippetAnchor: 'local-seo-roi-ct',
  },
];

export const TECHNICAL_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://localseoct.com/#website',
      'url': 'https://localseoct.com/',
      'name': 'Connecticut Local SEO',
      'description': 'Connecticut premier data-driven local SEO and Google Map 3-Pack agency.',
      'publisher': {
        '@id': 'https://localseoct.com/#localbusiness',
      },
      'inLanguage': 'en-US',
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://localseoct.com/#localbusiness',
      'name': 'Connecticut Local SEO',
      'legalName': 'Connecticut Local SEO LLC',
      'url': 'https://localseoct.com/',
      'telephone': '+1-860-967-0660',
      'email': 'lead@localseoct.com',
      'priceRange': '$$$',
      'image': 'https://localseoct.com/assets/connecticut-local-seo-og.png',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '50 Sunrise Cir',
        'addressLocality': 'Wallingford',
        'addressRegion': 'CT',
        'postalCode': '06492',
        'addressCountry': 'US',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 41.4570,
        'longitude': -72.8232,
      },
      'hasMap': 'https://maps.google.com/?q=50+Sunrise+Cir,+Wallingford,+CT+06492',
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '08:30',
          'closes': '18:00',
        },
      ],
      'areaServed': [
        { '@type': 'AdministrativeArea', 'name': 'Connecticut' },
        { '@type': 'City', 'name': 'Wallingford' },
        { '@type': 'City', 'name': 'New Haven' },
        { '@type': 'City', 'name': 'Hartford' },
        { '@type': 'City', 'name': 'Stamford' },
        { '@type': 'City', 'name': 'Greenwich' },
        { '@type': 'City', 'name': 'Norwalk' },
        { '@type': 'City', 'name': 'Bridgeport' },
        { '@type': 'City', 'name': 'Waterbury' },
        { '@type': 'City', 'name': 'Danbury' },
        { '@type': 'City', 'name': 'Groton' },
      ],
      'knowsAbout': [
        'Local SEO',
        'Google Business Profile Optimization',
        'Google Map 3-Pack Rankings',
        'Local Schema Markup',
        'Citation Building & Audit',
        'Contractor SEO',
        'Reputation Management',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://localseoct.com/#faq',
      'mainEntity': FAQS_DATA.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer,
        },
      })),
    },
  ],
};
