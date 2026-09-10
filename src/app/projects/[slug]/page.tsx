import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, Calendar, Tag, Layers, FileCode, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import ProjectVisualWrapper from "@/components/ProjectVisualWrapper";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Muhamed Hussein`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Back to Projects Button */}
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25232E] border border-white/10 text-xs font-mono text-[#A7A5AE] hover:text-white hover:border-white/30 transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO PROJECTS</span>
        </Link>
      </div>

      {/* Main Project Card Detail */}
      <article className="modular-card p-6 sm:p-10 space-y-10">
        {/* Header Section */}
        <div className="border-b border-white/10 pb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-xs uppercase px-3 py-1 rounded bg-[#2B2935] border border-white/10 text-accent-cyan">
              {project.category}
            </span>
            <div className="flex items-center gap-1.5 font-mono text-xs text-[#A7A5AE]">
              <Calendar className="w-3.5 h-3.5" />
              <span>{project.date}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {project.title}
          </h1>
        </div>

        {/* Overview & Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Overview */}
          <div className="md:col-span-2 space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A7A5AE] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-accent-cyan" />
              OVERVIEW
            </h2>
            <p className="text-base sm:text-lg text-[#F5F5F5] font-sans leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A7A5AE] flex items-center gap-2">
              <FileCode className="w-3.5 h-3.5 text-accent-purple" />
              TECHNOLOGIES
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md bg-[#1F1D26] border border-white/10 font-mono text-xs text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="space-y-3 pt-6 border-t border-white/10">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#A7A5AE]">
            PROJECT DESCRIPTION
          </h2>
          <div className="p-4 sm:p-6 rounded-xl bg-[#1F1D26] border border-white/5 text-sm sm:text-base text-[#A7A5AE] leading-relaxed">
            {project.description}
          </div>
        </div>

        {/* Abstract Visual Representation */}
        <div className="space-y-3 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A7A5AE]">
              VISUAL REPRESENTATION
            </h2>
            <span className="font-mono text-[11px] text-white/40">Conceptual Architecture</span>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10">
            <ProjectVisualWrapper visualType={project.visualType} compact={false} />
          </div>
        </div>

        {/* GitHub Repository Placeholder & Action */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#1F1D26] border border-white/10 text-white">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-mono text-[11px] text-[#A7A5AE] uppercase">
                Source Repository
              </span>
              <span className="text-xs font-mono text-white/70">
                GitHub Repository Placeholder
              </span>
            </div>
          </div>

          <a
            href={project.githubPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#1F1D26] font-semibold text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-all self-start sm:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>VIEW ON GITHUB</span>
          </a>
        </div>
      </article>

      {/* Bottom Navigation */}
      <div className="mt-8 flex justify-between items-center text-xs font-mono">
        <Link
          href="/#projects"
          className="text-[#A7A5AE] hover:text-white transition-colors flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all projects</span>
        </Link>
      </div>
    </div>
  );
}
