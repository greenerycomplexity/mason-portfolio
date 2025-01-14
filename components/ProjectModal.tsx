import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    tags: string[];
    images: (string | StaticImageData)[];
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.clientWidth * 0.5; // Scroll half the viewport width
    const newScrollPosition =
      carouselRef.current.scrollLeft +
      (direction === "right" ? scrollAmount : -scrollAmount);

    carouselRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  // Early return if modal is closed
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4 transition-opacity duration-500"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className={`bg-white rounded-lg w-[95vw] max-w-4xl p-16 max-h-[90vh] overflow-y-auto transform transition-all duration-500 relative ${
          isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-footer p-3 m-2 rounded-full text-gray-400 hover:text-gray-200 transition-colors"
        >
          <X size={24} strokeWidth={3} />
        </button>

        {/* Modal Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-sans font-extrabold">{project.title}</h2>
        </div>

        {/* Carousel Section */}
        <div className="relative h-full ">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="w-full h-full flex overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Image Slides */}
            {project.images.map((image, index) => (
              <div
                key={index}
                className="w-80 h-[700px] flex-shrink-0 relative mx-4 rounded-xl overflow-hidden"
                style={{ scrollSnapAlign: "start" }}
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover rounded-xl"
                  sizes="33vw"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-12 right-4 flex gap-2">
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollCarousel("left");
              }}
              className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
              aria-label="Previous images"
            >
              <ChevronLeft size={24} />
            </button>
            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollCarousel("right");
              }}
              className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
              aria-label="Next images"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Project Description */}
          <p className="text-gray-700 mb-6">{project.description}</p>

          {/* Project Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
