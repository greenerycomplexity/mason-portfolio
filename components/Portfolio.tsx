"use client";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Experience from "@/components/ExperienceSection";
import Contact from "@/components/ContactSection";
import StorySection from "@/components/StorySection";
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
