"use client";

import React, { useState } from "react";
import { Navigation, Play, RotateCcw } from "lucide-react";

export default function FlightRouteVisual({ compact = false }: { compact?: boolean }) {
  const [activeStep, setActiveStep] = useState(2);

  const nodes = [
    { id: "CAI", name: "Node A (Origin)", x: 45, y: 75, isStart: true },
    { id: "ALX", name: "Node B", x: 130, y: 35 },
    { id: "ASW", name: "Node C", x: 140, y: 125 },
    { id: "HRG", name: "Node D", x: 230, y: 65, isOptimal: true },
    { id: "SSH", name: "Node E", x: 240, y: 135 },
    { id: "LXR", name: "Node F (Goal)", x: 335, y: 85, isGoal: true },
  ];

  const edges = [
    { from: "CAI", to: "ALX", cost: "g: 12, h: 28" },
    { from: "CAI", to: "ASW", cost: "g: 18, h: 25" },
    { from: "ALX", to: "HRG", cost: "g: 15, h: 14", optimal: true },
    { from: "ASW", to: "SSH", cost: "g: 22, h: 20" },
    { from: "HRG", to: "SSH", cost: "g: 14, h: 19" },
    { from: "HRG", to: "LXR", cost: "g: 11, h: 0", optimal: true },
    { from: "SSH", to: "LXR", cost: "g: 20, h: 0" },
    { from: "CAI", to: "HRG", cost: "g: 24, h: 14", optimal: true },
  ];

  const optimalPath = ["CAI", "HRG", "LXR"];

  return (
    <div
      className={`relative w-full rounded-xl bg-[#17151D] border border-white/10 overflow-hidden flex flex-col items-center justify-between p-4 sm:p-6 select-none ${
        compact ? "h-64" : "min-h-[360px]"
      }`}
    >
      {/* Header bar */}
      <div className="w-full flex items-center justify-between text-xs text-[#A7A5AE] border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span className="font-mono uppercase tracking-wider text-[11px] text-white">
            A* Search Optimization Graph
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="hidden sm:inline text-white/50">Algorithm:</span>
          <span className="text-accent-cyan px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
            f(n) = g(n) + h(n)
          </span>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="w-full max-w-[390px] my-auto py-2">
        <svg viewBox="0 0 380 170" className="w-full h-auto overflow-visible">
          <defs>
            <linearGradient id="optimalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#06B6D4" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Regular / Explored Edges */}
          <line x1="45" y1="75" x2="130" y2="35" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="45" y1="75" x2="140" y2="125" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="130" y1="35" x2="230" y2="65" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="140" y1="125" x2="240" y2="135" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="240" y1="135" x2="335" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="230" y1="65" x2="240" y2="135" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Optimal Route Highlight */}
          <line
            x1="45"
            y1="75"
            x2="230"
            y2="65"
            stroke="url(#optimalGradient)"
            strokeWidth="3"
            filter="url(#cyanGlow)"
          />
          <line
            x1="230"
            y1="65"
            x2="335"
            y2="85"
            stroke="url(#optimalGradient)"
            strokeWidth="3"
            filter="url(#cyanGlow)"
          />

          {/* Animated signal on optimal route */}
          <circle r="3.5" fill="#FFFFFF">
            <animateMotion
              path="M 45 75 L 230 65 L 335 85"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Nodes */}
          {nodes.map((node) => {
            const isOptimalNode = optimalPath.includes(node.id);
            return (
              <g key={node.id} className="cursor-default">
                {/* Outer halo */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.isStart || node.isGoal ? 13 : 9}
                  fill={
                    node.isGoal
                      ? "rgba(16, 185, 129, 0.2)"
                      : node.isStart
                      ? "rgba(6, 182, 212, 0.2)"
                      : isOptimalNode
                      ? "rgba(59, 130, 246, 0.15)"
                      : "rgba(255, 255, 255, 0.05)"
                  }
                  stroke={
                    node.isGoal
                      ? "#10B981"
                      : node.isStart
                      ? "#06B6D4"
                      : isOptimalNode
                      ? "#3B82F6"
                      : "rgba(255, 255, 255, 0.2)"
                  }
                  strokeWidth={node.isStart || node.isGoal ? "2" : "1.5"}
                />

                {/* Inner dot */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.isStart || node.isGoal ? 4 : 3}
                  fill={
                    node.isGoal
                      ? "#10B981"
                      : node.isStart
                      ? "#06B6D4"
                      : isOptimalNode
                      ? "#60A5FA"
                      : "#A7A5AE"
                  }
                />

                {/* Label */}
                <text
                  x={node.x}
                  y={node.y > 100 ? node.y + 20 : node.y - 14}
                  textAnchor="middle"
                  fill={node.isGoal || node.isStart ? "#FFFFFF" : "#A7A5AE"}
                  fontSize="9.5"
                  fontFamily="monospace"
                  fontWeight={node.isGoal || node.isStart ? "600" : "400"}
                >
                  {node.id}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Footer Info */}
      <div className="w-full flex items-center justify-between text-[11px] font-mono border-t border-white/5 pt-3 text-[#A7A5AE]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" /> Origin
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6]" /> Optimal Path
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-accent-green" /> Goal
          </span>
        </div>
        <div className="text-white/60">Connected Topology</div>
      </div>
    </div>
  );
}
