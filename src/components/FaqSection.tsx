import React, { useState } from 'react';
import { ChevronDown, Sparkles, Check, HelpCircle, Bot } from 'lucide-react';
import { FAQS_DATA } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const copySnippet = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section id="faq" className="py-20 bg-slate-950 text-slate-50 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with H2 */}
        <div className="text-center space-y-4 mb-14">
          <div className="bg-orange-600/10 border-l-4 border-orange-600 px-4 py-2 w-fit mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 flex items-center gap-2">
              <Bot className="w-3.5 h-3.5" />
              Engineered for Google AI Overviews & Answer Engine Optimization (AEO)
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Frequently Asked Questions <br className="hidden sm:inline" />
            <span className="text-orange-500 underline decoration-4 underline-offset-4">About Local SEO in Connecticut</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Direct, data-driven answers synthesized for Google Knowledge Graph, AI Overviews, and business owners seeking clear local search guidance.
          </p>
        </div>

        {/* 5 Specific FAQs with H3 tags */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.snippetAnchor}
                className={`rounded-sm border transition duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-2 border-orange-500 shadow-2xl'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Accordion Toggle / H3 Header */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                  id={`faq-btn-${idx}`}
                >
                  <div className="space-y-1.5 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded-sm bg-slate-950 text-orange-400 border border-slate-800">
                        FAQ 0{idx + 1}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {faq.wordCount} words (AEO Snippet Target)
                      </span>
                    </div>
                    {/* H3 Heading */}
                    <h3 className="text-base sm:text-lg font-black text-white leading-snug uppercase tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-sm bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-orange-600 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* FAQ Answer Body (Direct 40-55 words) */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800 space-y-4 animate-in fade-in duration-200">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                      {faq.answer}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs">
                      <div className="text-slate-400 text-[11px] font-mono">
                        Structured Data Mapping: <code className="text-orange-400 font-bold">schema.org/Question</code>
                      </div>
                      <button
                        onClick={() => copySnippet(faq.answer, idx)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition font-mono text-[11px] cursor-pointer"
                      >
                        {copiedIdx === idx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-bold">Copied Snippet!</span>
                          </>
                        ) : (
                          <>
                            <HelpCircle className="w-3.5 h-3.5 text-orange-400" />
                            <span>Copy Answer Text</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
