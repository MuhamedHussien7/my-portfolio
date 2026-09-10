"use client";

import React from "react";
import { Briefcase, Calendar, CheckCircle2, Clock } from "lucide-react";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <span className="font-mono text-xs text-accent-cyan tracking-wider font-semibold">
            04
          </span>
          <div className="h-px w-8 bg-white/20" />
          <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#A7A5AE]">
            PROFESSIONAL EXPERIENCE
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl space-y-8 before:absolute before:inset-0 before:left-3 sm:before:left-5 before:w-0.5 before:bg-white/10">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-start gap-4 sm:gap-6 group">
              {/* Timeline Marker */}
              <div className="relative z-10 w-7 h-7 sm:w-11 sm:h-11 rounded-xl bg-[#25232E] border border-white/20 flex items-center justify-center text-accent-cyan shrink-0 group-hover:border-accent-cyan group-hover:scale-105 transition-all">
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Experience Card */}
              <div className="modular-card p-6 sm:p-8 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="inline-block font-mono text-[10px] uppercase text-[#A7A5AE] tracking-wider mb-1">
                      EXPERIENCE 0{index + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-accent-cyan mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {exp.hoursBadge && (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-1 rounded bg-accent-blue/10 border border-accent-blue/30 text-accent-blue font-semibold">
                        <Clock className="w-3 h-3" />
                        {exp.hoursBadge}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 font-mono text-xs px-2.5 py-1 rounded bg-[#2B2935] border border-white/10 text-[#F5F5F5]">
                      <Calendar className="w-3 h-3 text-[#A7A5AE]" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description if present */}
                {exp.description && (
                  <p className="text-sm text-[#F5F5F5]/90 mb-4 font-sans leading-relaxed">
                    {exp.description}
                  </p>
                )}

                {/* Responsibilities */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono uppercase text-[#A7A5AE] tracking-wider mb-2">
                    Key Responsibilities & Deliverables
                  </div>
                  {exp.responsibilities.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A7A5AE]">
                      <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                      <span className="leading-normal">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-white/50 mr-1">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#1F1D26] border border-white/10 font-mono text-[11px] text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
