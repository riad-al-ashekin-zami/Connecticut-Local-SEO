export interface ServiceItem {
  id: string;
  title: string;
  targetKeyword: string;
  tagline: string;
  deliverables: string[];
  description: string;
  impactMetric: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  wordCount: number;
  snippetAnchor: string;
}

export interface LocationHub {
  county: string;
  hubCity: string;
  towns: string[];
  distanceFromWallingford: string;
  marketProfile: string;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  cadence: string;
  idealFor: string;
  deliverables: string[];
  ctaText: string;
  featured?: boolean;
}

export interface AuditRequest {
  businessName: string;
  websiteOrGbp: string;
  city: string;
  primaryService: string;
  phone: string;
  email: string;
}

export interface IndustrySpecialization {
  id: string;
  title: string;
  iconName: string;
  description: string;
  subTrades: string[];
  keyOutcome: string;
}

export interface RoadmapMilestone {
  month: string;
  title: string;
  subtitle: string;
  deliverables: string[];
  expectedMilestone: string;
}
