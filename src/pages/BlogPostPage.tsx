import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  CheckCircle2,
  Phone,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { getBlogPostBySlug, PUBLISHED_BLOG_POSTS } from '../data/blogPosts';
import { BUSINESS_ENTITY } from '../data/content';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

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
          <h1 className="text-2xl font-black text-slate-900 mb-2">Article Ready for Publishing</h1>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            The article reader and publishing engine is configured. Please provide your Markdown file or text to complete publication of <code className="bg-slate-100 text-blue-600 px-2 py-0.5 rounded text-xs">/{slug || 'article'}</code>.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/free-seo-audit')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md"
            >
              Claim Free CT Local SEO Audit
            </button>
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

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={post.canonicalUrl} />
        
        {/* OpenGraph & Social Cards */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={post.canonicalUrl} />
        {post.featuredImage?.url && <meta property="og:image" content={post.featuredImage.url} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        {post.featuredImage?.url && <meta name="twitter:image" content={post.featuredImage.url} />}

        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
              >
                <Share2 className="w-3.5 h-3.5" />
                Share
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image if present */}
        {post.featuredImage?.url && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src={post.featuredImage.url}
                alt={post.featuredImage.alt}
                className="w-full h-auto object-cover max-h-[480px]"
                loading="eager"
              />
            </div>
          </div>
        )}

        {/* Article Body Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-img:rounded-xl prose-img:shadow-md prose-table:border-collapse prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border prose-td:border-slate-200">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ ...props }) => (
                  <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-10 mb-6 tracking-tight" {...props} />
                ),
                h2: ({ ...props }) => {
                  const headingText = String(props.children);
                  const id = headingText.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return (
                    <h2
                      id={id}
                      className="text-2xl sm:text-3xl font-black text-slate-900 mt-12 mb-5 pb-3 border-b border-slate-200 tracking-tight scroll-mt-24"
                      {...props}
                    />
                  );
                },
                h3: ({ ...props }) => {
                  const headingText = String(props.children);
                  const id = headingText.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return (
                    <h3
                      id={id}
                      className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-4 tracking-tight scroll-mt-24"
                      {...props}
                    />
                  );
                },
                h4: ({ ...props }) => (
                  <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3" {...props} />
                ),
                p: ({ ...props }) => (
                  <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6 font-normal" {...props} />
                ),
                ul: ({ ...props }) => (
                  <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-slate-700 text-base sm:text-lg" {...props} />
                ),
                ol: ({ ...props }) => (
                  <ol className="list-decimal list-outside pl-6 mb-6 space-y-2 text-slate-700 text-base sm:text-lg" {...props} />
                ),
                li: ({ ...props }) => (
                  <li className="leading-relaxed" {...props} />
                ),
                blockquote: ({ ...props }) => (
                  <blockquote
                    className="border-l-4 border-blue-600 bg-blue-50/60 rounded-r-xl px-6 py-4 my-8 text-slate-800 italic font-medium text-lg shadow-sm"
                    {...props}
                  />
                ),
                table: ({ ...props }) => (
                  <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200 bg-white text-left text-sm" {...props} />
                  </div>
                ),
                thead: ({ ...props }) => (
                  <thead className="bg-slate-100 text-slate-900 font-bold" {...props} />
                ),
                th: ({ ...props }) => (
                  <th className="px-4 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200" {...props} />
                ),
                td: ({ ...props }) => (
                  <td className="px-4 py-3.5 text-slate-700 border-b border-slate-100 text-sm align-top leading-normal" {...props} />
                ),
                tr: ({ ...props }) => (
                  <tr className="hover:bg-slate-50 transition-colors" {...props} />
                ),
                a: ({ href, children, ...props }) => {
                  const isExternal = href?.startsWith('http') && !href.includes('localseoct.com');
                  return (
                    <a
                      href={href}
                      className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors"
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      {...props}
                    >
                      {children}
                    </a>
                  );
                },
                img: ({ src, alt, ...props }) => (
                  <figure className="my-8">
                    <img
                      src={src}
                      alt={alt || 'Local SEO illustration'}
                      className="rounded-xl shadow-md w-full h-auto max-h-[500px] object-cover border border-slate-200"
                      loading="lazy"
                      {...props}
                    />
                    {alt && (
                      <figcaption className="text-center text-xs text-slate-500 mt-2 font-medium">
                        {alt}
                      </figcaption>
                    )}
                  </figure>
                ),
                code: ({ className, children, ...props }) => {
                  const isBlock = className?.includes('language-');
                  if (isBlock) {
                    return (
                      <div className="rounded-xl bg-slate-900 text-slate-100 p-4 overflow-x-auto my-6 text-sm font-mono">
                        <code className={className} {...props}>{children}</code>
                      </div>
                    );
                  }
                  return (
                    <code className="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded text-sm font-mono font-semibold" {...props}>
                      {children}
                    </code>
                  );
                },
                hr: () => (
                  <hr className="my-10 border-t border-slate-200" />
                ),
              }}
            >
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
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wide"
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
              className="text-xs font-bold text-slate-500 hover:text-slate-900 uppercase tracking-wider"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </article>
    </>
  );
};
