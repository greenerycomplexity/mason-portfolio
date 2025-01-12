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
  // Extract the numeric value from containerSize (e.g., "25vw" -> 25)
  const containerVW = parseInt(containerSize.match(/\d+/)?.[0] || "0");

  // Calculate radius as a percentage of container size
  const radiusScale = 0.75; // Adjust this value to change orbit size
  const radius = `${containerVW * radiusScale}vw`;

  // Calculate icon sizes relative to container
  const normalSize = `${containerVW * 0.35}vw`; // Increased from 0.25 (35% of container)
  const enlargedSize = `${containerVW * 0.5}vw`; // Increased from 0.4 (50% of container)
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
