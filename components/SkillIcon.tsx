import React from "react";
import Image from "next/image";

interface SkillIconProps {
  icon: string;
  delay: number;
  index: number;
  isEnlarged: boolean;
  containerSize: string;
}

const SkillIcon = ({
  icon,
  delay,
  index,
  isEnlarged,
  containerSize,
}: SkillIconProps) => {
  const containerVW = parseInt(containerSize.match(/\d+/)?.[0] || "0");

  // Calculate actual container size in pixels
  const maxContainerPx = 400; // Maximum container size in pixels
  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const containerPx = Math.min(
    (viewportWidth * containerVW) / 100,
    maxContainerPx
  );
  const containerPercentage = (containerPx / viewportWidth) * 100;

  // Adjust radius scale based on screen size
  const radiusScale =
    typeof window !== "undefined" && window.innerWidth < 768
      ? 1.0 // Larger radius for mobile
      : 0.75; // Original radius for desktop
  const radius = `${containerPercentage * radiusScale}vw`;

  // Calculate icon sizes relative to container with max size limit
  const normalSize = `min(${containerVW * 0.35}vw, ${maxContainerPx * 0.35}px)`;
  const enlargedSize = `min(${containerVW * 0.45}vw, ${
    maxContainerPx * 0.45
  }px)`;
  const sizeClass = isEnlarged ? enlargedSize : normalSize;

  // Calculate position on circle perimeter
  const angle = (index * (360 / 5)) % 360;

  return (
    <div
      className="absolute transition-all duration-500 ease-in-out opacity-0"
      style={{
        animation: `fadeIn 0.7s ${delay}s forwards`,
        left: "50%",
        top: "50%",
        width: sizeClass,
        height: sizeClass,
        transform: `rotate(${angle}deg) translateX(${radius}) rotate(-${angle}deg) translate(-50%, -50%)`,
      }}
    >
      {/* Counter-rotate to keep icons upright while parent rotates */}
      <div style={{ animation: `counterRotate 20s linear infinite` }}>
        <Image
          src={icon}
          alt="Skill icon"
          width={160}
          height={160}
          className="w-full h-full object-contain transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default SkillIcon;
