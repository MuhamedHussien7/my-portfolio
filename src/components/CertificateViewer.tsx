"use client";

import React, { useState } from "react";
import { Award, CheckCircle2, Download, ExternalLink, Eye, Maximize2, ShieldCheck, X } from "lucide-react";
import { Course } from "@/types/portfolio";

interface CertificateViewerProps {
  course: Course;
}

export default function CertificateViewer({ course }: CertificateViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isCompleted = course.status === "COMPLETED";
  const hasCustomImage = Boolean(course.certificateImage && !imageError);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[#A7A5AE] flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-accent-cyan" />
          COURSE CERTIFICATE & CREDENTIALS
        </h2>
        {course.credentialId && (
          <span className="font-mono text-[10px] text-[#A7A5AE] bg-[#1F1D26] px-2 py-0.5 rounded border border-white/5">
            ID: {course.credentialId}
          </span>
        )}
      </div>

      {/* Certificate Frame Preview */}
      <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#2B2935]/80 to-[#1F1D26]/90 p-1 sm:p-2 transition-all hover:border-accent-cyan/40">
        <div className="relative rounded-xl overflow-hidden bg-[#16141D] border border-white/5 p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[280px]">
          {/* Subtle Decorative Pattern Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl pointer-events-none" />

          {hasCustomImage ? (
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto rounded-lg overflow-hidden border border-white/10 group/img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={course.certificateImage}
                alt={`${course.title} Certificate`}
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                onError={() => setImageError(true)}
              />
              <button
                onClick={() => setIsOpen(true)}
                className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 flex items-center justify-center gap-2 text-white font-mono text-xs transition-opacity"
              >
                <Maximize2 className="w-4 h-4" />
                <span>EXPAND CERTIFICATE</span>
              </button>
            </div>
          ) : (
            /* Digital Certificate Presentation Card */
            <div className="relative z-10 w-full max-w-md mx-auto py-4 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#2B2935] border border-white/10 flex items-center justify-center text-accent-cyan shadow-lg shadow-black/40">
                <Award className="w-8 h-8 text-accent-cyan" />
              </div>

              <div>
                <span className="font-mono text-[11px] text-accent-cyan uppercase tracking-wider block mb-1">
                  Official Credential
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Certificate of Completion
                </h4>
                <p className="text-xs text-[#A7A5AE] mt-1">Issued to</p>
                <p className="text-base sm:text-lg font-semibold text-white tracking-wide mt-0.5">
                  Muhamed Hussein
                </p>
              </div>

              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="text-xs text-[#A7A5AE] max-w-sm mx-auto">
                <span className="text-white/90 font-medium">{course.provider}</span>
                <span className="block text-[11px] mt-1 font-mono text-[#A7A5AE]">
                  Issued: {course.date}
                </span>
              </div>

              {isCompleted ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified & Completed</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs">
                  <span>In Progress — Certificate on Graduation</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Toolbar */}
        <div className="p-3 bg-[#1F1D26]/70 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#A7A5AE]">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Digital Certificate Record</span>
          </div>

          <div className="flex items-center gap-2">
            {hasCustomImage && (
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2B2935] hover:bg-white/10 border border-white/10 text-white transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Full Size</span>
              </button>
            )}

            {course.certificateUrl ? (
              <a
                href={course.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#1F1D26] hover:bg-neutral-200 font-semibold transition-colors"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      {/* Modal / Lightbox for viewing full size */}
      {isOpen && hasCustomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1F1D26] border border-white/15 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-white">
                <Award className="w-4 h-4 text-accent-cyan" />
                <span>{course.title} — Official Certificate</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-[#A7A5AE] hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={course.certificateImage}
                alt={`${course.title} Certificate`}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A7A5AE]">
              <span>Issued to Muhamed Hussein</span>
              {course.certificateImage && (
                <a
                  href={course.certificateImage}
                  download
                  className="inline-flex items-center gap-1.5 text-white hover:text-accent-cyan transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
