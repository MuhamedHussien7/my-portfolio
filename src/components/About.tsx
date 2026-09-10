"use client";

import React from "react";
import { User, Cpu, Sparkles, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <span className="font-mono text-xs text-accent-cyan tracking-wider font-semibold">
            01
          </span>
          <div className="h-px w-8 bg-white/20" />
          <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#A7A5AE]">
            ABOUT ME
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-snug">
              Focused on neural architectures, data intelligence, and scalable machine learning workflows.
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-[#A7A5AE] leading-relaxed">
              {personalInfo.aboutBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Domain Tags */}
            <div className="pt-4">
              <div className="text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
                Core Domains & Focus Areas
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.aboutTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25232E] border border-white/10 text-xs sm:text-sm text-white font-medium hover:border-accent-cyan/50 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Overview Card */}
          <div className="lg:col-span-4 modular-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-white">
                <Terminal className="w-4 h-4 text-accent-purple" />
                <span>ENGINEER PROFILE</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#A7A5AE]">
                ACTIVE
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className="block text-[11px] font-mono text-[#A7A5AE] uppercase mb-1">
                  Full Name
                </span>
                <span className="text-white font-medium">{personalInfo.name}</span>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-[#A7A5AE] uppercase mb-1">
                  Engineering Track
                </span>
                <span className="text-white font-medium">{personalInfo.title}</span>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-[#A7A5AE] uppercase mb-1">
                  Base Location
                </span>
                <span className="text-white font-medium">{personalInfo.location}</span>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-[#A7A5AE] uppercase mb-1">
                  Direct Inquiries
                </span>
                <span className="text-accent-cyan font-mono break-all">{personalInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
