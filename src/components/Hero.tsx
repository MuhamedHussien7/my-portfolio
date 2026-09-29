"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowDownRight,
  Mail,
  MapPin,
  GraduationCap,
  Calendar,
  FileDown,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden border-b border-white/5"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-accent-purple/10 via-accent-blue/10 to-accent-cyan/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left Column: Content & CTAs */}
          <div>
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25232E] border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5]">
                {personalInfo.title}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.1] mb-6">
              {personalInfo.heroHeading}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#A7A5AE] leading-relaxed mb-8 max-w-2xl font-sans">
              {personalInfo.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-lg bg-white text-[#1F1D26] font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-lg hover:shadow-white/10"
              >
                <span>VIEW PROJECTS</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="/Muhamed_Hussein_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-lg bg-[#25232E] text-white border border-white/10 font-semibold text-xs uppercase tracking-wider hover:bg-[#2B2935] hover:border-white/25 transition-all shadow-md group"
              >
                <FileDown className="w-4 h-4 text-accent-cyan group-hover:translate-y-0.5 transition-transform" />
                <span>DOWNLOAD CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-lg bg-[#25232E] text-white border border-white/10 font-semibold text-xs uppercase tracking-wider hover:bg-[#2B2935] hover:border-white/25 transition-all"
              >
                <Mail className="w-4 h-4 text-accent-cyan" />
                <span>CONTACT ME</span>
              </a>
            </div>

            {/* Hero Metadata Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#25232E]/60 border border-white/5">
                <div className="p-2 rounded-md bg-[#2B2935] text-accent-cyan border border-white/5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[#A7A5AE] uppercase">Location</span>
                  <span className="text-xs sm:text-sm font-medium text-white">{personalInfo.heroMetadata.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#25232E]/60 border border-white/5">
                <div className="p-2 rounded-md bg-[#2B2935] text-accent-purple border border-white/5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[#A7A5AE] uppercase">Specialization</span>
                  <span className="text-xs sm:text-sm font-medium text-white leading-tight">
                    {personalInfo.heroMetadata.field}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#25232E]/60 border border-white/5">
                <div className="p-2 rounded-md bg-[#2B2935] text-accent-green border border-white/5">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[#A7A5AE] uppercase">Timeline</span>
                  <span className="text-xs sm:text-sm font-medium text-white">{personalInfo.heroMetadata.period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Profile Image Container */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] h-[520px] overflow-hidden rounded-2xl border border-white/10 shadow-xl bg-[#25232E]">
              <Image
                src="/profile.jpg"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 320px, 360px"
                className="object-cover object-[center_0%]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}