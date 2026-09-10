"use client";

import React from "react";
import { Award, Calendar, CheckCircle2, Clock, Hourglass, Trophy } from "lucide-react";
import { courses } from "@/data/portfolio";

export default function Courses() {
  return (
    <section id="courses" className="py-16 sm:py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <span className="font-mono text-xs text-accent-cyan tracking-wider font-semibold">
            06
          </span>
          <div className="h-px w-8 bg-white/20" />
          <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#A7A5AE]">
            COURSES & TRAINING
          </h2>
        </div>

        {/* Timeline / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, idx) => {
            const isInProgress = course.status === "IN PROGRESS";

            return (
              <div
                key={course.id}
                className={`modular-card p-6 sm:p-8 flex flex-col justify-between group transition-all ${
                  isInProgress
                    ? "border-amber-500/30 bg-gradient-to-b from-amber-500/5 to-transparent"
                    : "hover:border-white/20"
                }`}
              >
                <div>
                  {/* Top Bar: Date & Status Badge */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                    <div className="flex items-center gap-1.5 font-mono text-xs text-[#A7A5AE]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{course.date}</span>
                    </div>

                    {isInProgress ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-mono text-[11px] font-semibold bg-amber-500/15 border border-amber-500/40 text-amber-300 animate-pulse">
                        <Hourglass className="w-3 h-3" />
                        IN PROGRESS
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded font-mono text-[10px] bg-white/5 text-[#A7A5AE]">
                        <CheckCircle2 className="w-3 h-3 text-accent-green" />
                        COMPLETED
                      </span>
                    )}
                  </div>

                  {/* Course Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5">
                    {course.title}
                  </h3>

                  {/* Provider */}
                  <div className="text-xs sm:text-sm text-accent-cyan font-medium mb-4">
                    {course.provider}
                  </div>

                  {/* Description if present */}
                  {course.description && (
                    <p className="text-xs sm:text-sm text-[#A7A5AE] leading-relaxed mb-4 font-sans">
                      {course.description}
                    </p>
                  )}

                  {/* Achievements & Metrics */}
                  <div className="flex flex-wrap items-center gap-2">
                    {course.achievement && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300">
                        <Trophy className="w-3.5 h-3.5 text-amber-400" />
                        {course.achievement}
                      </span>
                    )}

                    {course.details && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1F1D26] border border-white/10 text-xs font-mono text-white">
                        <Clock className="w-3 h-3 text-[#A7A5AE]" />
                        {course.details}
                      </span>
                    )}

                    {course.score && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono font-semibold text-emerald-300">
                        <Award className="w-3.5 h-3.5" />
                        Score: {course.score}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#A7A5AE]">
                  <span>COURSE 0{idx + 1}</span>
                  <span className={isInProgress ? "text-amber-400" : "text-white/40"}>
                    {isInProgress ? "Current Enrollment" : "Verified Training"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
