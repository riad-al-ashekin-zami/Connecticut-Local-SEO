import React, { useState } from 'react';
import { X, Copy, Check, FileCode, FileText, KeyRound, CheckCircle2 } from 'lucide-react';
import { TECHNICAL_JSON_LD } from '../data/content';
import { RAW_MARKDOWN_COPY } from '../data/rawMarkdown';

interface DevToolkitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DevToolkitModal: React.FC<DevToolkitModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'markdown' | 'schema' | 'keywords'>('markdown');
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const jsonLdString = JSON.stringify(TECHNICAL_JSON_LD, null, 2);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-lg w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-orange-600/20 flex items-center justify-center text-orange-400 border border-orange-500/30">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-white uppercase tracking-tight">
                Copywriter & Technical Schema Toolkit
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Production-ready code assets for localseoct.com
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-sm bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-6 pt-3 border-b border-slate-800 bg-slate-950 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('markdown')}
            className={`px-4 py-2 text-[11px] font-black uppercase tracking-wider rounded-t-sm transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'markdown'
                ? 'bg-slate-900 text-orange-400 border-t-2 border-x border-orange-500'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Complete Markdown Copy</span>
          </button>

          <button
            onClick={() => setActiveTab('schema')}
            className={`px-4 py-2 text-[11px] font-black uppercase tracking-wider rounded-t-sm transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'schema'
                ? 'bg-slate-900 text-orange-400 border-t-2 border-x border-orange-500'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Technical JSON-LD Schema</span>
          </button>

          <button
            onClick={() => setActiveTab('keywords')}
            className={`px-4 py-2 text-[11px] font-black uppercase tracking-wider rounded-t-sm transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'keywords'
                ? 'bg-slate-900 text-orange-400 border-t-2 border-x border-orange-500'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Target Keyword Matrix</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 flex-1 overflow-y-auto font-mono text-xs bg-slate-900">
          
          {activeTab === 'markdown' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2">
                <span className="text-slate-400 text-xs font-sans">
                  Ready to copy and deploy into WordPress, Elementor, or headless markdown CMS.
                </span>
                <button
                  onClick={() => handleCopy(RAW_MARKDOWN_COPY, 'markdown')}
                  className="px-4 py-2 rounded-sm bg-orange-600 hover:bg-orange-500 text-white font-black uppercase text-xs tracking-tight flex items-center gap-1.5 transition cursor-pointer shadow-lg shadow-orange-950/50"
                >
                  {copied === 'markdown' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  <span>{copied === 'markdown' ? 'Copied Markdown!' : 'Copy Entire Markdown'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-sm bg-slate-950 border border-slate-800 text-slate-200 whitespace-pre-wrap leading-relaxed overflow-x-auto select-all">
                {RAW_MARKDOWN_COPY}
              </pre>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2">
                <span className="text-slate-400 text-xs font-sans">
                  Valid schema.org graph including WebSite, LocalBusiness (ProfessionalService), NAP coordinates, and FAQPage.
                </span>
                <button
                  onClick={() => handleCopy(`<script type="application/ld+json">\n${jsonLdString}\n</script>`, 'schema')}
                  className="px-4 py-2 rounded-sm bg-orange-600 hover:bg-orange-500 text-white font-black uppercase text-xs tracking-tight flex items-center gap-1.5 transition cursor-pointer shadow-lg shadow-orange-950/50"
                >
                  {copied === 'schema' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  <span>{copied === 'schema' ? 'Copied Script!' : 'Copy <script> Tag'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-sm bg-slate-950 border border-slate-800 text-emerald-300 whitespace-pre-wrap leading-relaxed overflow-x-auto select-all">
{`<script type="application/ld+json">
${jsonLdString}
</script>`}
              </pre>
            </div>
          )}

          {activeTab === 'keywords' && (
            <div className="space-y-6 font-sans">
              <div>
                <h4 className="font-black uppercase tracking-tight text-sm text-white mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  Tier 1: Core High-Volume Search Targets
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-slate-950 rounded-sm border border-slate-800 flex justify-between">
                    <span className="font-mono text-orange-300 font-bold">local seo company ct</span>
                    <span className="text-slate-400 font-mono">Vol: 720/mo</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-sm border border-slate-800 flex justify-between">
                    <span className="font-mono text-orange-300 font-bold">local seo ct</span>
                    <span className="text-slate-400 font-mono">Vol: 590/mo</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-sm border border-slate-800 flex justify-between">
                    <span className="font-mono text-orange-300 font-bold">local seo company connecticut</span>
                    <span className="text-slate-400 font-mono">Vol: 390/mo</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-sm border border-slate-800 flex justify-between">
                    <span className="font-mono text-orange-300 font-bold">local seo consultant ct</span>
                    <span className="text-slate-400 font-mono">Vol: 260/mo</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-sm border border-slate-800 flex justify-between">
                    <span className="font-mono text-orange-300 font-bold">local seo service ct</span>
                    <span className="text-slate-400 font-mono">Vol: 210/mo</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-sm border border-slate-800 flex justify-between">
                    <span className="font-mono text-orange-300 font-bold">local seo in ct</span>
                    <span className="text-slate-400 font-mono">Vol: 110/mo</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-black uppercase tracking-tight text-sm text-white mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  Tier 2: Commercial & Intent Variations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-slate-950 rounded-sm border border-slate-800">
                    <span className="font-mono text-emerald-300 font-bold">local seo expert connecticut</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-sm border border-slate-800">
                    <span className="font-mono text-emerald-300 font-bold">connecticut local seo services</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-sm border border-slate-800">
                    <span className="font-mono text-emerald-300 font-bold">local seo for contractors ct</span>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-sm border border-slate-800">
                    <span className="font-mono text-emerald-300 font-bold">best seo company in ct</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-black uppercase tracking-tight text-sm text-white mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  Semantic & NLP Entity Vectors Implemented
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-sm border border-slate-800">
                  Google Business Profile (GBP) Optimization, Google Map 3-Pack, Geotargeted Citations, Review Velocity, On-Page Schema Markup, CTR Manipulation Resistance, Localized Relevance, Wallingford CT business district, New Haven County commercial corridors, Fairfield County luxury contractor demand.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400 font-mono">
          <div>Verified for localseoct.com</div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-sm bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase transition cursor-pointer"
          >
            Close Toolkit
          </button>
        </div>

      </div>
    </div>
  );
};
