"use client";
import React from "react";
// import Header from "@/components/Header";
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
      {/* <Header /> */}

      {/* Add padding-top to account for fixed header */}
      <Hero />

      {/* Projects Grid */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
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

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-8">
            Currently seeking UX Engineer roles in Australia starting February
            2025
          </p>
          <a
            href="mailto:hsm.cao@gmail.com"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
