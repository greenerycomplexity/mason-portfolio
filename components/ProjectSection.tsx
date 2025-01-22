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

  const isPortraitProject = (title: string) => title === "MorningDew";

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 lg:py-24 text-black"
    >
      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-6xl mx-auto px-2 sm:px-6 md:px-8 lg:px-10 font-sans">
        <h2 className="text-5xl font-bold mb-8 sm:mb-10 md:mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 lg:gap-8">
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
