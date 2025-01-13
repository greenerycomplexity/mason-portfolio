import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
}

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
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
  );
};

export default ProjectSection;
