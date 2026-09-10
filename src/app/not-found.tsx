import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase mb-2">
        404 — Page Not Found
      </span>
      <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
        System Entity Unavailable
      </h1>
      <p className="text-sm sm:text-base text-[#A7A5AE] max-w-md mb-8">
        The requested resource does not exist or has been relocated within the portfolio topology.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#1F1D26] font-semibold text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
