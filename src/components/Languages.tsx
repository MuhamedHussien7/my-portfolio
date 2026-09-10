"use client";

import React from "react";
import { Globe } from "lucide-react";
import { languages } from "@/data/portfolio";

export default function Languages() {
  return (
    <section className="py-12 sm:py-16 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-1.5 rounded-md bg-[#25232E] border border-white/10 text-accent-cyan">
            <Globe className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#A7A5AE]">
            LANGUAGES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
          {languages.map((item) => (
            <div
              key={item.language}
              className="modular-card p-4 sm:p-5 flex items-center justify-between group hover:border-white/20 transition-colors"
            >
              <div>
                <span className="text-sm sm:text-base font-semibold text-white block">
                  {item.language}
                </span>
                <span className="text-xs text-[#A7A5AE] font-mono">Proficiency</span>
              </div>

              <span className="font-mono text-xs px-3 py-1 rounded-md bg-[#1F1D26] border border-white/10 text-accent-cyan font-medium">
                {item.proficiency}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
