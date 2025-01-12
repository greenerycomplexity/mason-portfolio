"use client";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Add padding-top to account for fixed header */}
      <Hero />

      {/* Projects Grid */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
