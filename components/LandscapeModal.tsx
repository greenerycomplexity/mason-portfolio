import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LandscapeModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    tags: string[];
    images: (string | StaticImageData)[];
  };
}

const LandscapeModal: React.FC<LandscapeModalProps> = ({
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

    const scrollAmount = carouselRef.current.clientWidth;
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
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center transition-opacity duration-500"
      onClick={onClose}
    >
      <div
        ref={containerRef}
        className={`bg-white rounded-lg w-[95vw] max-w-5xl max-h-[90vh] overflow-hidden transform transition-all duration-500 relative ${
          isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-footer p-3 m-2 rounded-full text-gray-400 hover:text-gray-200 transition-colors"
        >
          <X size={24} strokeWidth={3} />
        </button>

        <div className="px-16 pt-16 pb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-sans font-extrabold">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Carousel Section - 16:9 Aspect Ratio */}
        <div className="relative overflow-hidden">
          <div className="px-8">
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
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 relative mx-3 first:ml-8 last:mr-8 rounded-xl overflow-hidden"
                  style={{
                    aspectRatio: "16/9",
                    scrollSnapAlign: "center",
                    scrollSnapStop: "always",
                  }}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-contain rounded-xl"
                    sizes="(max-width: 1280px) 95vw, 1024px"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 right-20 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollCarousel("left");
              }}
              className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollCarousel("right");
              }}
              className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="p-16 pt-8">
          <p className="text-gray-700 mb-6">{project.description}</p>
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

export default LandscapeModal;
