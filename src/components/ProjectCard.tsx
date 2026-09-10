"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import { Project } from "@/types/portfolio";
import ProjectVisualWrapper from "./ProjectVisualWrapper";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getGradientClass = (accent: Project["accentColor"]) => {
    switch (accent) {
      case "cyan":
        return "from-cyan-500/10 via-blue-500/5 to-transparent hover:border-cyan-500/40";
      case "purple":
        return "from-purple-500/10 via-indigo-500/5 to-transparent hover:border-purple-500/40";
      case "orange":
        return "from-orange-500/10 via-amber-500/5 to-transparent hover:border-orange-500/40";
      case "green":
        return "from-emerald-500/10 via-teal-500/5 to-transparent hover:border-emerald-500/40";
      default:
        return "from-blue-500/10 via-cyan-500/5 to-transparent hover:border-blue-500/40";
    }
  };

  const getBadgeAccent = (accent: Project["accentColor"]) => {
    switch (accent) {
      case "cyan":
        return "text-accent-cyan border-cyan-500/30 bg-cyan-500/10";
      case "purple":
        return "text-accent-purple border-purple-500/30 bg-purple-500/10";
      case "orange":
        return "text-accent-orange border-orange-500/30 bg-orange-500/10";
      case "green":
        return "text-accent-green border-emerald-500/30 bg-emerald-500/10";
      default:
        return "text-accent-blue border-blue-500/30 bg-blue-500/10";
    }
  };

  return (
    <div
      className={`modular-card bg-gradient-to-b ${getGradientClass(
        project.accentColor
      )} p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden transition-all duration-300`}
    >
      <div>
        {/* Card Header: Number & Category & Date */}
        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm sm:text-base font-bold text-white/40 group-hover:text-white transition-colors">
              {project.number}
            </span>
            <span
              className={`font-mono text-[11px] px-2.5 py-0.5 rounded border uppercase tracking-wider ${getBadgeAccent(
                project.accentColor
              )}`}
            >
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-1 font-mono text-xs text-[#A7A5AE]">
            <Calendar className="w-3.5 h-3.5" />
            <span>{project.date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#A7A5AE] leading-relaxed mb-6 font-sans">
          {project.description}
        </p>

        {/* Abstract Visual Representation Preview */}
        <div className="mb-6 rounded-xl overflow-hidden shadow-inner">
          <ProjectVisualWrapper visualType={project.visualType} compact={true} />
        </div>
      </div>

      {/* Card Footer: Tech Tags & View Detail Link */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-[#1F1D26] border border-white/10 font-mono text-[11px] text-[#F5F5F5]"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-white hover:text-accent-cyan transition-colors self-start sm:self-auto shrink-0 group/link"
        >
          <span>EXPLORE PROJECT</span>
          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
