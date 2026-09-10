"use client";

import React from "react";
import FlightRouteVisual from "./visuals/FlightRouteVisual";
import SupportWorkflowVisual from "./visuals/SupportWorkflowVisual";
import SentimentPipelineVisual from "./visuals/SentimentPipelineVisual";

interface ProjectVisualWrapperProps {
  visualType: "route-planner" | "support-agent" | "sentiment-pipeline";
  compact?: boolean;
}

export default function ProjectVisualWrapper({
  visualType,
  compact = false,
}: ProjectVisualWrapperProps) {
  switch (visualType) {
    case "route-planner":
      return <FlightRouteVisual compact={compact} />;
    case "support-agent":
      return <SupportWorkflowVisual compact={compact} />;
    case "sentiment-pipeline":
      return <SentimentPipelineVisual compact={compact} />;
    default:
      return null;
  }
}
