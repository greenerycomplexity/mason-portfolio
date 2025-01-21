"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Plus } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string | StaticImageData;
  onViewDetails: () => void;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  onViewDetails,
}: ProjectCardProps) => {
  return (
    // Card Container
    <button
      onClick={onViewDetails}
      className="w-full text-left bg-white rounded-2xl sm:rounded-3xl shadow-sm border h-full overflow-hidden px-4 sm:px-6 md:px-8 pb-12 sm:pb-14 md:pb-16 pt-3 sm:pt-4 flex flex-col relative hover:scale-[1.02] sm:hover:scale-[1.03] md:hover:scale-105 duration-300"
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
      <div className="mt-4 flex flex-col flex-1 text-black ">
        {/* Project Title */}
        <h3 className="text-xl sm:text-lg md:text-xl lg:text-xl pr-4 font-bold truncate">
          {title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 mt-2">{description}</p>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 bg-white text-gray-700 rounded-full text-sm border-2 border-gray-100 truncate max-w-[150px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Plus Button */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onViewDetails();
        }}
        className="absolute bottom-4 right-4 w-10 h-10 bg-lime-900 hover:bg-lime-800 duration-200 rounded-full flex items-center justify-center transition-colors"
      >
        <Plus className="w-7 h-7 text-white" strokeWidth={2.5} />
      </div>
    </button>
  );
};

export default ProjectCard;
