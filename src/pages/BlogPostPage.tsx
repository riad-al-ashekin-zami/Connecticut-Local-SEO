import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Phone,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { getBlogPostBySlug } from '../data/blogPosts';
import { BUSINESS_ENTITY } from '../data/content';
import { ClutchDirectoryArticle } from '../components/ClutchDirectoryArticle';
import { ClutchDigitalMarketingArticle } from '../components/ClutchDigitalMarketingArticle';
import { ClutchWebDesignArticle } from '../components/ClutchWebDesignArticle';
import { ClutchWebDevelopmentArticle } from '../components/ClutchWebDevelopmentArticle';
import { ClutchMovingArticle } from '../components/ClutchMovingArticle';

interface BlogPostPageProps {
  forcedSlug?: string;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ forcedSlug }) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const slug = forcedSlug || paramSlug;

  const post = useMemo(() => {
    if (!slug) return undefined;
    return getBlogPostBySlug(slug);
  }, [slug]);

  // If no post exists or is matching
  if (!post) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-20">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 mb-2">Article Not Found</h1>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            The requested article could not be located. Explore our published local SEO guides or return to the homepage.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/blog"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md text-sm"
            >
              Browse All Blog Articles
            </Link>
            <Link
              to="/"
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article URL copied to clipboard!');
    }
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_ENTITY.brandName,
      url: BUSINESS_ENTITY.domainUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${BUSINESS_ENTITY.domainUrl}/favicon.svg`,
      },
    },
    datePublished: post.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.canonicalUrl,
    },
    ...(post.featuredImage?.url ? { image: post.featuredImage.url } : {}),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BUSINESS_ENTITY.domainUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${BUSINESS_ENTITY.domainUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: post.canonicalUrl,
      },
    ],
  };

  // Structured ItemList schema for directory rankings
  const itemListJsonLd = post.agencies && post.agencies.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: post.title,
    description: post.metaDescription,
    numberOfItems: post.agencies.length,
    itemListElement: post.agencies.map((agency) => ({
      '@type': 'ListItem',
      position: agency.position,
      name: agency.name,
      url: agency.website,
    })),
  } : null;

  // Structured FAQPage schema
  const faqJsonLd = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  const pageTitle = post.seoTitle || post.title;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={post.canonicalUrl} />
        
        {/* OpenGraph & Social Cards */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={post.canonicalUrl} />
        {post.featuredImage?.url && <meta property="og:image" content={post.featuredImage.url} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        {post.featuredImage?.url && <meta name="twitter:image" content={post.featuredImage.url} />}

        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        {itemListJsonLd && (
          <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
        )}
        {faqJsonLd && (
          <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        )}
      </Helmet>

      {/* Render Clutch/GoodFirms layout if flagged as directory comparison */}
      {post.directoryType === 'digital-marketing' ? (
        <ClutchDigitalMarketingArticle post={post} />
      ) : post.directoryType === 'web-design' ? (
        <ClutchWebDesignArticle post={post} />
      ) : post.directoryType === 'web-development' ? (
        <ClutchWebDevelopmentArticle post={post} />
      ) : post.directoryType === 'moving' ? (
        <ClutchMovingArticle post={post} />
      ) : post.isDirectoryPost ? (
        <ClutchDirectoryArticle post={post} />
      ) : (
        <article className="min-h-screen bg-white">
          {/* Breadcrumb Header */}
          <div className="bg-slate-50 border-b border-slate-200 py-4">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex items-center text-xs font-semibold text-slate-500 space-x-2">
                <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-900 truncate max-w-[280px] sm:max-w-md">{post.title}</span>
              </nav>
            </div>
          </div>

          {/* Article Hero */}
          <header className="pt-10 pb-10 bg-slate-50/70 border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                {post.category || 'Local SEO Guide'}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 text-sm text-slate-600">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block leading-tight">{post.author.name}</span>
                      <span className="text-xs text-slate-500">{post.author.role}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 border-l border-slate-200 pl-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      {post.publishDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400" />
                      {post.readingTime}
                    </span>
                  </div>
                </div>

                <button
                  onClick={shareArticle}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Share
                </button>
              </div>
            </div>
          </header>

          {/* Article Body Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="prose prose-slate max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* In-Article Conversion Banner */}
            <div className="my-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-blue-400/30">
                  Connecticut Local SEO Specialists
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                  Ready to Dominate the Google 3-Pack in Your Service Area?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
                  Get an exhaustive, hyper-local search audit of your business rankings, citations, and Google Business Profile. 100% free, no sales pressure.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => navigate('/free-seo-audit')}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wide cursor-pointer"
                  >
                    Claim Free Local SEO Audit
                  </button>
                  <a
                    href={`tel:${BUSINESS_ENTITY.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-xl transition-colors text-sm border border-white/20"
                  >
                    <Phone className="w-4 h-4 text-blue-400" />
                    Call: {BUSINESS_ENTITY.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Post Footer Navigation */}
            <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All Articles
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs font-bold text-slate-500 hover:text-slate-900 uppercase tracking-wider cursor-pointer"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </article>
      )}
    </>
  );
};
