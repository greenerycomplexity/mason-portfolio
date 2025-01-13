"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import Experience from "@/components/ExperienceSection";
import Contact from "@/components/ContactSection";

import RMIT from "/public/assets/images/RMIT.png";
import MorningDew from "/public/assets/images/MorningDew.png";

const Portfolio = () => {
  const projects = [
    {
      title: "MorningDew",
      description:
        "An ADHD-focused morning routine tracker built with SwiftUI.",
      tags: ["Apple", "WWDC24", "iOS", "SwiftUI", "Accessibility"],
      image: MorningDew,
    },
    {
      title: "Capstone - SeeMySmile VR",
      description:
        "An interactive VR program helping children with autism recognize and understand facial expressions.",
      tags: ["UX Design", "VR", "Unity"],
      image: RMIT,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Add padding-top to account for fixed header */}
      <Hero />
      <ProjectSection projects={projects} />
      <Experience />
      <Contact />
    </div>
  );
};

export default Portfolio;
