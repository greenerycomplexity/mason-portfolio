"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  images: StaticImageData[];
}

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const isPortraitProject = (title: string) => title === "MorningDew";

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const slideWidth = container.clientWidth;
    const newSlide = Math.round(container.scrollLeft / slideWidth);
    setCurrentSlide(newSlide);
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 lg:py-24 text-black"
    >
      {/* Header with its own padding */}
      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 font-sans">
        <h2 className="text-5xl font-bold mb-8 sm:mb-10 md:mb-12">Projects</h2>
      </div>

      {/* Desktop Grid */}
      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 font-sans">
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 lg:gap-8 hidden">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Mobile Carousel - Full width */}
      <div className="sm:hidden w-full">
        <div
          className="flex overflow-x-auto h-96 snap-x snap-mandatory scrollbar-hide touch-pan-x"
          onScroll={handleScroll}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[80vw] max-w-[300px] flex-shrink-0 snap-center mx-2 first:ml-8 last:mr-8"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                onViewDetails={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                currentSlide === index ? "bg-black/70" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
          layout={
            isPortraitProject(selectedProject.title) ? "portrait" : "landscape"
          }
        />
      )}
    </section>
  );
};

export default ProjectSection;
