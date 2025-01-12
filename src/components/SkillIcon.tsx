import React from "react";
import Image from "next/image";

interface SkillIconProps {
  icon: string; // Path to icon SVG
  delay: number; // Animation delay in seconds
  index: number; // Position index (0-4) for circular placement
  isEnlarged: boolean; // Whether this icon is currently enlarged
}

const SkillIcon = ({ icon, delay, index, isEnlarged }: SkillIconProps) => {
  // Calculate position on circle perimeter
  const angle = (index * (360 / 5)) % 360;
  const radius = 250; // Distance from center in pixels
  const initialX = radius * Math.cos((angle * Math.PI) / 180);
  const initialY = radius * Math.sin((angle * Math.PI) / 180);

  // Dynamic sizing based on enlarged state
  const sizeClass = isEnlarged ? "w-40 h-40" : "w-24 h-24";

  return (
    <div
      className={`absolute ${sizeClass} transition-all duration-500 ease-in-out opacity-0`}
      style={{
        animation: `fadeIn 0.7s ${delay}s forwards`,
        left: "50%",
        top: "50%",
        transform: `translate(${initialX}px, ${initialY}px) translate(-50%, -50%)`,
      }}
    >
      {/* Counter-rotate to keep icons upright while parent rotates */}
      <div style={{ animation: `counterRotate 20s linear infinite` }}>
        <Image
          src={icon}
          alt="Skill icon"
          width={isEnlarged ? 160 : 80}
          height={isEnlarged ? 160 : 80}
          className="w-full h-full object-contain transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default SkillIcon;
