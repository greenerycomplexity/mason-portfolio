"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string | StaticImageData;
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  onClick,
}: ProjectCardProps) => {
  return (
    // Card Container
    <div
      className="bg-white rounded-lg drop-shadow h-full overflow-hidden cursor-pointer transition-all hover:scale-[1.05] p-6 flex flex-col"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="mt-4 flex flex-col flex-1">
        {/* Project Title */}
        <h3 className="text-xl font-medium mb-3 truncate">{title}</h3>

        {/* Project Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 bg-white text-gray-700 rounded-full text-sm border border-gray-100 truncate max-w-[150px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
