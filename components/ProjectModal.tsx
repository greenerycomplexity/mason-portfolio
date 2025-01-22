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
    detailedDescription?: string[];
    tags: string[];
    images: (string | StaticImageData)[];
  };
  layout?: "portrait" | "landscape";
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
  layout = "landscape",
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure animation triggers properly
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
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
    <div
      className={`fixed inset-0 z-50 overflow-y-auto transition-all duration-500 ease-in-out text-black ${
        isAnimating ? "bg-black/75" : "bg-black/0"
      }`}
      onClick={onClose}
    >
      <div className="min-h-full pt-12 sm:p-8 md:p-10 lg:p-12 flex justify-center items-center">
        <div
          ref={containerRef}
          className={`bg-white sm:rounded-xl rounded-t-xl w-full max-w-5xl transform transition-all duration-700 ease-in-out text-black ${
            isAnimating
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header section with close button */}
          <div className="relative text-black">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-footer p-2 sm:p-3 rounded-full text-gray-400 hover:text-gray-200 transition-colors"
            >
              <X size={20} strokeWidth={3} className="sm:w-6 sm:h-6" />
            </button>

            {/* Project title section */}
            <div className="p-6 sm:p-8 md:p-12 lg:p-16">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold">
                  {project.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Image carousel section */}
          <div className="overflow-hidden relative">
            <div className="px-4 sm:px-6 md:px-8">
              {/* Scrollable carousel container */}
              <div
                ref={carouselRef}
                className="flex overflow-x-auto scrollbar-hide scroll-smooth -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 px-4 sm:px-8 md:px-12 lg:px-16"
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
                    className={`flex-shrink-0 relative mx-2 sm:mx-3 first:ml-4 sm:first:ml-8 last:mr-4 sm:last:mr-8 rounded-xl overflow-hidden ${
                      layout === "portrait"
                        ? "w-48 sm:w-52 md:w-56 lg:w-60 h-[400px] sm:h-[440px] md:h-[480px] lg:h-[520px]"
                        : "w-full"
                    }`}
                    style={{
                      ...(layout === "landscape" && { aspectRatio: "16/9" }),
                      scrollSnapAlign: "center",
                      scrollSnapStop: "always",
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className={`rounded-xl ${
                        layout === "portrait"
                          ? "object-cover"
                          : "object-contain"
                      }`}
                      sizes={
                        layout === "portrait"
                          ? "(max-width: 640px) 192px, (max-width: 768px) 208px, (max-width: 1024px) 224px, 240px"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1024px"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel navigation buttons */}
            <div className="flex gap-2 justify-end mt-4 sm:mt-6 mr-6 sm:mr-12 md:mr-16 lg:mr-20">
              {/* Previous image button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  scrollCarousel("left");
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                aria-label="Previous images"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
              {/* Next image button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  scrollCarousel("right");
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                aria-label="Next images"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          <div className="px-6 py-2 sm:px-8 md:px-12 lg:px-16 pb-6 sm:pb-8 md:pb-12 lg:pb-16 bg-white rounded-b-xl">
            {/* Project description */}
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              {project.description}
            </p>
            {/* Project tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.detailedDescription && (
              <div className="mt-6 sm:mt-8">
                {project.detailedDescription.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base sm:text-lg mb-3 sm:mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
