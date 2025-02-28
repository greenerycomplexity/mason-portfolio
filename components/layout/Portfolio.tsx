"use client";
import { Header } from "@/components/layout";
import {
  HeroSection,
  StorySection,
  ProjectSection,
  ExperienceSection as Experience,
  ContactSection as Contact,
} from "@/components/sections";
import { projects } from "@/data/content";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Add padding-top to account for fixed header */}
      <HeroSection />
      <StorySection />
      <ProjectSection projects={projects} />
      <Experience />
      <Contact />
    </div>
  );
};

export default Portfolio;
