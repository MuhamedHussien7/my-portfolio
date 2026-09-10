"use client";

import React from "react";
import {
  BrainCircuit,
  Bot,
  TerminalSquare,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "ml-dl":
        return BrainCircuit;
      case "ai-auto":
        return Bot;
      case "prog-tools":
        return TerminalSquare;
      case "data-proc":
        return BarChart3;
      case "soft-skills":
        return Lightbulb;
      default:
        return BrainCircuit;
    }
  };

  const getAccentDot = (accent: string) => {
    switch (accent) {
      case "blue":
        return "bg-accent-blue";
      case "purple":
        return "bg-accent-purple";
      case "cyan":
        return "bg-accent-cyan";
      case "green":
        return "bg-accent-green";
      case "orange":
        return "bg-accent-orange";
      default:
        return "bg-accent-blue";
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <span className="font-mono text-xs text-accent-cyan tracking-wider font-semibold">
            03
          </span>
          <div className="h-px w-8 bg-white/20" />
          <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#A7A5AE]">
            TECHNICAL SKILLS
          </h2>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = getCategoryIcon(category.id);
            const dotClass = getAccentDot(category.accent);

            return (
              <div
                key={category.id}
                className="modular-card p-6 flex flex-col justify-between group hover:border-white/20 transition-all"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#2B2935] text-white border border-white/5 group-hover:border-white/15 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-mono text-xs font-semibold text-white tracking-wider">
                        {category.title}
                      </h3>
                    </div>
                    <span className={`w-2 h-2 rounded-full ${dotClass}`} />
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#1F1D26] border border-white/10 text-xs text-[#F5F5F5] font-medium hover:border-white/30 hover:bg-[#282532] transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#A7A5AE]">
                  <span>{category.skills.length} Capabilities</span>
                  <span className="text-white/40">Verified CV</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
