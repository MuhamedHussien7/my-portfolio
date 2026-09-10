"use client";

import React from "react";
import { ArrowUp, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#17151D] border-t border-white/10 text-xs text-[#A7A5AE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-sm font-bold text-white tracking-wider">
                {personalInfo.shortName}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-accent-cyan border border-white/5">
                AI / ML
              </span>
            </div>
            <p className="text-white/70 font-medium">{personalInfo.title}</p>
          </div>

          {/* Location, Email & Social Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-white/80">
                <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#A7A5AE]" />
                <a
                  href={`mailto:${socialLinks.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-white/80 hover:text-accent-cyan transition-colors"
                >
                  {socialLinks.email}
                </a>
              </div>
            </div>

            {/* Social Icons in Footer */}
            <div className="flex items-center gap-2 pt-2 sm:pt-0">
              <a
                href={socialLinks.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="p-2 rounded-lg bg-[#25232E] border border-white/10 text-[#A7A5AE] hover:text-accent-blue hover:border-accent-blue/40 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="p-2 rounded-lg bg-[#25232E] border border-white/10 text-[#A7A5AE] hover:text-white hover:border-white/30 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#25232E] border border-white/10 text-[#A7A5AE] hover:text-white hover:border-white/30 transition-all font-mono text-[11px] self-start md:self-auto"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] font-mono">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
          <p className="text-white/40">Magic Portfolio Architecture · Next.js & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
