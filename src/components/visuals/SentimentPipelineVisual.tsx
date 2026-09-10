"use client";

import React from "react";
import { MessageSquare, Binary, Layers, CheckCircle2, ArrowDown } from "lucide-react";

export default function SentimentPipelineVisual({ compact = false }: { compact?: boolean }) {
  const stages = [
    {
      stageNumber: "01",
      name: "Customer Feedback",
      subtext: "Raw textual feedback stream",
      icon: MessageSquare,
      color: "border-orange-500/30 text-orange-400 bg-orange-500/10",
    },
    {
      stageNumber: "02",
      name: "Text Processing",
      subtext: "Tokenization, cleaning & embeddings",
      icon: Binary,
      color: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    },
    {
      stageNumber: "03",
      name: "Transformer Model",
      subtext: "Self-attention encoder representations",
      icon: Layers,
      color: "border-purple-500/30 text-purple-400 bg-purple-500/10",
    },
    {
      stageNumber: "04",
      name: "Classification",
      subtext: "Sentiment class prediction output",
      icon: CheckCircle2,
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
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
          <span className="inline-block w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
          <span className="font-mono uppercase tracking-wider text-[11px] text-white">
            Transformer Text Classifier Pipeline
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="text-accent-orange px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
            TensorFlow & Transformers
          </span>
        </div>
      </div>

      {/* Conceptual Pipeline Grid / Flow */}
      <div className="w-full my-auto flex flex-col items-center justify-center gap-1.5 py-2">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <React.Fragment key={stage.stageNumber}>
              <div className="w-full max-w-sm rounded-lg bg-[#211F2A] border border-white/10 p-2 sm:p-2.5 flex items-center justify-between transition-all hover:border-white/20">
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center border ${stage.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-white/50">STAGE {stage.stageNumber}</span>
                      <span className="text-white text-xs sm:text-sm font-medium">{stage.name}</span>
                    </div>
                    {!compact && (
                      <p className="text-[10px] text-[#A7A5AE] font-sans leading-tight">
                        {stage.subtext}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>

              {idx < stages.length - 1 && (
                <div className="flex items-center justify-center my-[-2px] text-white/30">
                  <ArrowDown className="w-3 h-3" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="w-full flex items-center justify-between text-[11px] font-mono border-t border-white/5 pt-3 text-[#A7A5AE]">
        <span className="text-white/60">Sequential Inference Flow</span>
        <span className="text-accent-orange">End-to-End NLP Architecture</span>
      </div>
    </div>
  );
}
