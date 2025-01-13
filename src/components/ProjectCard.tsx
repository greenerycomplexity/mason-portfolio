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
    <div
      className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden cursor-pointer transition-all hover:scale-[1.05] p-6 flex flex-col"
      onClick={onClick}
    >
      <div className="relative w-full h-64 mb-auto">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-medium mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 bg-white text-gray-700 rounded-full text-sm border border-gray-100"
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
