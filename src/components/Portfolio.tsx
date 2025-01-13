"use client";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";

import Boeing from "/public/assets/images/Boeing.png";
import MorningDew from "/public/assets/images/MorningDew.png";

const Portfolio = () => {
  const projects = [
    {
      title: "MorningDew",
      description: "ADHD-focused morning routine tracker built with SwiftUI...",
      tags: ["Apple", "WWDC24", "iOS", "SwiftUI", "Accessibility"],
      image: MorningDew,
    },
    {
      title: "Boeing x RMIT Activator Hackathon",
      description: "Developed ergonomic solutions for Boeing's factory...",
      tags: ["Innovation", "UX Design"],
      image: Boeing,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Add padding-top to account for fixed header */}
      <Hero />

      <ProjectSection projects={projects} />
    </div>
  );
};

export default Portfolio;
