import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PortraitModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    tags: string[];
    images: (string | StaticImageData)[];
  };
}

const PortraitModal: React.FC<PortraitModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.clientWidth * 0.5;
    const newScrollPosition =
      carouselRef.current.scrollLeft +
      (direction === "right" ? scrollAmount : -scrollAmount);

    carouselRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  if (!isOpen) return null;

  return (
    // Modal overlay - covers entire screen with semi-transparent background
    <div
      className="fixed inset-0 pt-20 bg-black/80 z-50 h-full flex items-end overflow-y-auto justify-center transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Modal container with animation */}
      <div
        ref={containerRef}
        className={`bg-white rounded-xl w-full max-w-5xl h-full transform transition-all duration-500 ease-out ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header section with close button */}
        <div className="sticky top-0 z-10  pt-4 pb-2 text-black ">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-footer p-3 rounded-full text-gray-400 hover:text-gray-200 transition-colors"
          >
            <X size={24} strokeWidth={3} />
          </button>

          {/* Project title section */}
          <div className="px-16 pt-8 pb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-5xl font-sans font-extrabold">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Image carousel section */}
          <div className="relative overflow-hidden">
            <div className="px-8">
              {/* Scrollable carousel container */}
              <div
                ref={carouselRef}
                className="flex overflow-x-auto scrollbar-hide scroll-smooth -mx-16 px-16"
                style={{
                  WebkitOverflowScrolling: "touch",
                  scrollBehavior: "smooth",
                  overscrollBehavior: "contain",
                  scrollSnapType: "x mandatory",
                }}
              >
                {/* Map through project images */}
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-60 h-[520px] flex-shrink-0 relative mx-3 first:ml-8 last:mr-8 rounded-xl overflow-hidden"
                    style={{
                      scrollSnapAlign: "center",
                      scrollSnapStop: "always",
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover rounded-xl"
                      sizes="(max-width: 768px) 80vw, 288px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel navigation buttons */}
            <div className="absolute -bottom-12 right-20 flex gap-2">
              {/* Previous image button */}
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
              {/* Next image button */}
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

          {/* Project details section */}
        </div>
        <div className="p-16 bg-white pb-20 rounded-b-xl mb-16">
          {/* Project description */}
          <p className="text-gray-700 mb-6">{project.description}</p>
          {/* Project tags */}
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

export default PortraitModal;
