"use client";

import React from "react";
import { GraduationCap, MapPin, Calendar, BookOpen, School } from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <span className="font-mono text-xs text-accent-cyan tracking-wider font-semibold">
            02
          </span>
          <div className="h-px w-8 bg-white/20" />
          <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#A7A5AE]">
            EDUCATION
          </h2>
        </div>

        <div className="max-w-4xl">
          {/* Premium Education Card */}
          <div className="modular-card p-6 sm:p-10 relative overflow-hidden group">
            {/* Subtle glow border */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-blue/20 transition-all duration-500" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-white/10 pb-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2B2935] border border-white/10 flex items-center justify-center text-accent-cyan shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-block font-mono text-[11px] text-accent-cyan uppercase tracking-wider mb-1">
                    Academic Degree
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {education.degree}
                  </h3>
                  <div className="text-sm sm:text-base text-white/80 font-medium mt-1">
                    {education.institution}
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="self-start sm:self-auto font-mono text-xs px-3 py-1.5 rounded-full bg-[#2B2935] border border-white/10 text-white flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-accent-green" />
                <span>{education.period}</span>
              </div>
            </div>

            {/* Sub details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-[#1F1D26] border border-white/5">
                <School className="w-4 h-4 text-[#A7A5AE]" />
                <div>
                  <span className="block font-mono text-[10px] text-[#A7A5AE] uppercase">Faculty</span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    {education.faculty}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-[#1F1D26] border border-white/5">
                <MapPin className="w-4 h-4 text-[#A7A5AE]" />
                <div>
                  <span className="block font-mono text-[10px] text-[#A7A5AE] uppercase">Location</span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    {education.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
