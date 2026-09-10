"use client";

import React from "react";
import { FolderGit2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent-cyan tracking-wider font-semibold">
              05
            </span>
            <div className="h-px w-8 bg-white/20" />
            <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#A7A5AE]">
              SELECTED PROJECTS
            </h2>
          </div>

          <span className="hidden sm:inline-block font-mono text-xs text-white/50">
            03 Engineered Systems
          </span>
        </div>

        {/* 2-Column / Stacked Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={idx === 2 ? "lg:col-span-2 max-w-3xl mx-auto w-full" : "w-full"}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
