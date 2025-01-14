"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import PortraitModal from "@/components/PortraitModal";
import LandscapeModal from "@/components/LandscapeModal";
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
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6 font-sans">
        <h2 className="text-5xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <>
          {isPortraitProject(selectedProject.title) ? (
            <PortraitModal
              isOpen={!!selectedProject}
              onClose={() => setSelectedProject(null)}
              project={selectedProject}
            />
          ) : (
            <LandscapeModal
              isOpen={!!selectedProject}
              onClose={() => setSelectedProject(null)}
              project={selectedProject}
            />
          )}
        </>
      )}
    </section>
  );
};

export default ProjectSection;
