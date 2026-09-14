import React from 'react';
import { Calendar, CheckCircle2, Flag, ArrowRight, ShieldCheck, Milestone } from 'lucide-react';
import { ROADMAP_DATA } from '../data/content';

interface RoadmapSectionProps {
  onOpenAudit: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="roadmap" className="py-20 bg-white text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="bg-orange-500/10 border-l-4 border-orange-500 px-4 py-2 w-fit mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 flex items-center gap-2">
              <Milestone className="w-3.5 h-3.5" />
              Transparent Implementation Timeline
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase">
            The 6-Month Local SEO Roadmap: <br className="hidden sm:inline" />
            <span className="text-blue-600 underline decoration-4 underline-offset-4">Engineered for Measurable ROI</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            No vague retainers or hidden tasks. We operate on a clear, milestone-driven sprint framework that systematically diagnoses algorithmic bottlenecks, cements local proximity signals, and scales inbound phone calls.
          </p>
        </div>

        {/* 3 Milestone Cards in a Linear Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {ROADMAP_DATA.map((milestone, index) => (
            <div
              key={milestone.month}
              className="bg-slate-50 rounded-lg border border-slate-200 p-8 flex flex-col justify-between hover:border-orange-500/70 transition duration-300 shadow-2xl relative group"
            >
              {/* Step indicator badge */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-orange-500/20 text-blue-600 font-mono text-xs font-bold border border-orange-500/30">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{milestone.month}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-500">Phase 0{index + 1}</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition">
                    {milestone.title}
                  </h3>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-wide mt-1">
                    {milestone.subtitle}
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-3">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                    Key Execution Deliverables:
                  </span>
                  {milestone.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestone Expected Outcome */}
              <div className="mt-8 pt-4 border-t border-slate-200/80 bg-white/60 -mx-8 -mb-8 p-6 rounded-b-lg">
                <div className="text-[10px] uppercase font-mono text-slate-500 font-bold flex items-center gap-1.5 mb-1">
                  <Flag className="w-3.5 h-3.5 text-blue-600" />
                  Target Milestone Outcome:
                </div>
                <div className="text-xs text-emerald-400 font-semibold leading-normal">
                  {milestone.expectedMilestone}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap CTA Strip */}
        <div className="mt-14 text-center space-y-4">
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Ready to accelerate your timeline? We begin by analyzing your current baseline ranking perimeter and competitor citation profile on Day 1.
          </p>
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-xs sm:text-sm tracking-tight rounded-sm uppercase shadow-xl shadow-orange-500/30 transition cursor-pointer group"
          >
            <span>Start Month 1 With a Free Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
