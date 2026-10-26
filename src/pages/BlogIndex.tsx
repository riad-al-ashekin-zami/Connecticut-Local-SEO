import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Star,
  ShieldCheck,
  Award,
  Layers
} from 'lucide-react';
import { PUBLISHED_BLOG_POSTS } from '../data/blogPosts';
import { BUSINESS_ENTITY } from '../data/content';

export const BlogIndex: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Local SEO Guides, Agency Comparisons & Insights | {BUSINESS_ENTITY.brandName}</title>
        <meta
          name="description"
          content="Actionable local SEO guides, Connecticut agency comparisons, Google Business Profile tips, and regional ranking strategies for Connecticut businesses."
        />
        <link rel="canonical" href={`${BUSINESS_ENTITY.domainUrl}/blog`} />
      </Helmet>

      {/* Hero Header */}
      <section className="bg-slate-50 pt-16 pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded mb-4">
              Insights & Agency Comparisons
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none mb-4">
              Local SEO <span className="text-blue-600 underline decoration-4 underline-offset-4">Guides & Rankings</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              In-depth agency comparisons, market directory evaluations, and proven local search strategies crafted specifically for Connecticut businesses and service contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Listing */}
      <section className="py-16 bg-white min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {PUBLISHED_BLOG_POSTS.length === 0 ? (
            <div className="max-w-xl mx-auto text-center py-12 px-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Publishing Pipeline Ready</h2>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Our publishing engine is configured to accept your complete Markdown article with full tables, images, links, and SEO schemas.
              </p>
              <button
                onClick={() => navigate('/free-seo-audit')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md text-sm cursor-pointer"
              >
                Claim Free Local SEO Audit
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {PUBLISHED_BLOG_POSTS.map((post) => {
                const isDirectory = post.isDirectoryPost;

                if (isDirectory) {
                  return (
                    <article
                      key={post.slug}
                      className="lg:col-span-12 bg-white rounded-2xl border-2 border-blue-400/80 overflow-hidden shadow-md hover:shadow-lg transition-all"
                    >
                      {/* Top Clutch-style Leaderboard Ribbon */}
                      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-bold tracking-wide">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-amber-300" />
                          <span>FEATURED B2B DIRECTORY & COMPARISON • 2026 EDITION</span>
                        </div>
                        <span className="bg-white/20 px-2.5 py-0.5 rounded text-[11px] font-black uppercase">
                          7 Agencies Evaluated
                        </span>
                      </div>

                      <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8 space-y-4">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-xs font-black text-blue-700 bg-blue-50 px-3 py-1 rounded border border-blue-200 uppercase tracking-wider">
                              {post.category}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                              Clutch & GoodFirms Framework
                            </span>
                            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readingTime}
                            </span>
                          </div>

                          <Link to={`/blog/${post.slug}`}>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 hover:text-blue-600 transition-colors leading-tight">
                              {post.title}
                            </h2>
                          </Link>

                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                            {post.metaDescription}
                          </p>

                          {/* Quick Mini Badges for the 7 Agencies */}
                          <div className="pt-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                              Ranked & Compared Agencies:
                            </span>
                            <div className="flex flex-wrap items-center gap-2">
                              {(post.agencies || []).map((agency, idx) => (
                                <span
                                  key={idx}
                                  className={`text-xs px-2.5 py-1 rounded font-semibold ${idx === 0 ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100 text-slate-700'}`}
                                >
                                  {idx === 0 ? `#1 ${agency.name}` : agency.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="lg:col-span-4 bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-4">
                          <div className="flex items-center gap-1.5 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                            <span className="text-xs font-black text-slate-900 ml-1.5">5.0 Star Rating</span>
                          </div>

                          <div className="text-xs text-slate-600 space-y-1.5">
                            <p className="font-semibold text-slate-800">
                              Includes Comparison Matrix, Agency Pricing, Vetting Questions & Editorial Guidance.
                            </p>
                            <p className="text-slate-500 text-[11px]">
                              Published: {post.publishDate}
                            </p>
                          </div>

                          <Link
                            to={`/blog/${post.slug}`}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wide py-3.5 px-4 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
                          >
                            <span>Explore 7 Agencies Comparison</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                }

                // Standard articles if any in the future
                return (
                  <article
                    key={post.slug}
                    className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
                  >
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            {post.category}
                          </span>
                          <span className="text-xs text-slate-400">•</span>
                          <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readingTime}
                          </span>
                        </div>
                        <Link to={`/blog/${post.slug}`}>
                          <h2 className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors mb-3 leading-snug">
                            {post.title}
                          </h2>
                        </Link>
                        <p className="text-sm text-slate-600 line-clamp-3 mb-6 leading-relaxed">
                          {post.metaDescription}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.publishDate}
                        </span>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                        >
                          Read Article <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
