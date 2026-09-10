"use client";

import React from "react";
import { MessageSquareText, Cpu, SendHorizontal, ArrowDown, Sparkles } from "lucide-react";

export default function SupportWorkflowVisual({ compact = false }: { compact?: boolean }) {
  const steps = [
    {
      stepNumber: "01",
      title: "Customer Inquiry",
      subtitle: "Inbound webhook trigger",
      icon: MessageSquareText,
      accent: "border-purple-500/40 text-purple-400 bg-purple-500/10",
      glow: "hover:border-purple-500/60",
      tag: "Trigger Event",
    },
    {
      stepNumber: "02",
      title: "AI Analysis",
      subtitle: "OpenAI API prompt & context processing",
      icon: Cpu,
      accent: "border-blue-500/40 text-blue-400 bg-blue-500/10",
      glow: "hover:border-blue-500/60",
      tag: "LLM Processing",
    },
    {
      stepNumber: "03",
      title: "Response Generation",
      subtitle: "Automated response output & delivery",
      icon: SendHorizontal,
      accent: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
      glow: "hover:border-emerald-500/60",
      tag: "Action Delivery",
    },
  ];

  return (
    <div
      className={`relative w-full rounded-xl bg-[#17151D] border border-white/10 overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none ${
        compact ? "h-64" : "min-h-[360px]"
      }`}
    >
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between text-xs text-[#A7A5AE] border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
          <span className="font-mono uppercase tracking-wider text-[11px] text-white">
            n8n & OpenAI Automation Pipeline
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="text-accent-purple px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> 3-Step Flow
          </span>
        </div>
      </div>

      {/* 3 Steps Pipeline */}
      <div className="w-full my-auto flex flex-col items-center justify-center gap-2 py-3">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={step.stepNumber}>
              <div
                className={`w-full max-w-sm rounded-lg bg-[#211F2A] border border-white/10 p-2.5 sm:p-3 flex items-center justify-between transition-all duration-200 ${step.glow}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center border ${step.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#A7A5AE]">STEP {step.stepNumber}</span>
                      <span className="text-white text-xs sm:text-sm font-medium">{step.title}</span>
                    </div>
                    {!compact && (
                      <p className="text-[11px] text-[#A7A5AE] mt-0.5 font-sans leading-tight">
                        {step.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <span className="hidden sm:inline font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#A7A5AE] border border-white/5">
                  {step.tag}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <div className="flex items-center justify-center my-[-2px] text-white/40">
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="w-full flex items-center justify-between text-[11px] font-mono border-t border-white/5 pt-3 text-[#A7A5AE]">
        <span className="text-white/60">n8n Execution Engine</span>
        <span className="text-accent-purple">Inquiry → Analysis → Response</span>
      </div>
    </div>
  );
}
