import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Hourglass,
  Layers,
  Sparkles,
  Tag,
  Trophy,
  Award,
} from "lucide-react";
import { courses } from "@/data/portfolio";
import CertificateViewer from "@/components/CertificateViewer";

interface CourseDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export function generateMetadata({ params }: CourseDetailPageProps) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.title} — Muhamed Hussein`,
    description: course.description || `Course details and certificate for ${course.title}`,
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  const isInProgress = course.status === "IN PROGRESS";

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Back to Courses Button */}
      <div className="mb-8">
        <Link
          href="/#courses"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25232E] border border-white/10 text-xs font-mono text-[#A7A5AE] hover:text-white hover:border-white/30 transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO COURSES & TRAINING</span>
        </Link>
      </div>

      {/* Main Course Detail Card */}
      <article className="modular-card p-6 sm:p-10 space-y-10">
        {/* Header Section */}
        <div className="border-b border-white/10 pb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {isInProgress ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-amber-500/15 border border-amber-500/40 text-amber-300">
                  <Hourglass className="w-3.5 h-3.5 animate-spin" />
                  IN PROGRESS
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-emerald-500/15 border border-emerald-500/40 text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-green" />
                  COMPLETED
                </span>
              )}

              {course.achievement && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 font-mono">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  {course.achievement}
                </span>
              )}

              {course.score && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300 font-mono">
                  <Award className="w-3.5 h-3.5" />
                  Final Score: {course.score}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 font-mono text-xs text-[#A7A5AE]">
              <Calendar className="w-3.5 h-3.5" />
              <span>{course.date}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {course.title}
          </h1>

          <div className="flex items-center gap-2 text-sm sm:text-base text-accent-cyan font-medium">
            <GraduationCap className="w-5 h-5 shrink-0" />
            <span>{course.provider}</span>
          </div>
        </div>

        {/* Overview & Quick Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A7A5AE] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-accent-cyan" />
              COURSE OVERVIEW
            </h2>
            <p className="text-base sm:text-lg text-[#F5F5F5] font-sans leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Quick Metrics Card */}
          <div className="p-5 rounded-xl bg-[#1F1D26] border border-white/10 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#A7A5AE]">
              METRICS & DETAILS
            </h3>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-[#A7A5AE]">Duration</span>
                <span className="text-white font-medium">{course.details || "Comprehensive"}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-[#A7A5AE]">Status</span>
                <span className={isInProgress ? "text-amber-300" : "text-emerald-300"}>
                  {course.status}
                </span>
              </div>
              {course.score && (
                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className="text-[#A7A5AE]">Score</span>
                  <span className="text-emerald-300 font-bold">{course.score}</span>
                </div>
              )}
              {course.credentialId && (
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-[#A7A5AE]">Credential ID</span>
                  <span className="text-accent-cyan">{course.credentialId}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Section: THINGS I LEARNED */}
        {course.skillsLearned && course.skillsLearned.length > 0 && (
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#A7A5AE] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
                THINGS I LEARNED & KEY TAKEAWAYS
              </h2>
              <span className="font-mono text-[11px] text-white/40">
                {course.skillsLearned.length} Core Modules
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {course.skillsLearned.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-[#1F1D26] border border-white/5 hover:border-white/15 transition-colors group"
                >
                  <div className="w-6 h-6 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0 mt-0.5 text-accent-cyan">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm sm:text-base text-[#F5F5F5]/90 leading-relaxed font-sans">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section: SKILLS & TOOLS ACQUIRED */}
        {course.skills && course.skills.length > 0 && (
          <div className="space-y-3 pt-6 border-t border-white/10">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A7A5AE] flex items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-accent-purple" />
              SKILLS & TOOLS ACQUIRED
            </h2>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-[#1F1D26] border border-white/10 font-mono text-xs text-white hover:border-accent-cyan/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Section: CERTIFICATE & CREDENTIAL VIEWER */}
        <div className="pt-6 border-t border-white/10">
          <CertificateViewer course={course} />
        </div>
      </article>

      {/* Bottom Navigation */}
      <div className="mt-8 flex justify-between items-center text-xs font-mono">
        <Link
          href="/#courses"
          className="text-[#A7A5AE] hover:text-white transition-colors flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all courses</span>
        </Link>

        <Link
          href="/#projects"
          className="text-[#A7A5AE] hover:text-accent-cyan transition-colors"
        >
          <span>Explore Projects →</span>
        </Link>
      </div>
    </div>
  );
}
