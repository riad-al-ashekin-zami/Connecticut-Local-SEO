import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ChevronRight, ArrowRight, BookOpen } from 'lucide-react';
import { PUBLISHED_BLOG_POSTS } from '../data/blogPosts';
import { BUSINESS_ENTITY } from '../data/content';

export const BlogIndex: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Local SEO Guides, Case Studies & Insights | {BUSINESS_ENTITY.brandName}</title>
        <meta
          name="description"
          content="Actionable local SEO guides, Google Business Profile tips, and regional ranking strategies for Connecticut contractors and service businesses."
        />
        <link rel="canonical" href={`${BUSINESS_ENTITY.domainUrl}/blog`} />
      </Helmet>

      <section className="bg-slate-50 pt-16 pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Insights & Knowledge Hub
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none mb-4">
              Local SEO <span className="text-blue-600 underline decoration-4 underline-offset-4">Guides & Articles</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Proven tactics, algorithmic updates, and conversion-focused local search insights crafted specifically for Connecticut service businesses.
            </p>
          </div>
        </div>
      </section>

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
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md text-sm"
              >
                Claim Free Local SEO Audit
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PUBLISHED_BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  {post.featuredImage && (
                    <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden bg-slate-100">
                      <img
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  )}
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
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
