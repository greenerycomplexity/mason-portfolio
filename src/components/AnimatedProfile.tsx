import React, { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface SkillIconProps {
  icon: string;
  delay: number;
  index: number;
  isEnlarged: boolean;
}

const SkillIcon = ({ icon, delay, index, isEnlarged }: SkillIconProps) => {
  // Calculate initial position around the circle
  const angle = (index * (360 / 5)) % 360;
  const radius = 250; // Keep the same radius
  const initialX = radius * Math.cos((angle * Math.PI) / 180);
  const initialY = radius * Math.sin((angle * Math.PI) / 180);

  // Base size is w-20 (80px), enlarged size is w-40 (160px)
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

interface AnimatedProfileProps {
  profileImage: string | StaticImageData;
}

const AnimatedProfile = ({ profileImage }: AnimatedProfileProps) => {
  const [visibleIcons, setVisibleIcons] = useState<string[]>([]);
  const [enlargedIcon, setEnlargedIcon] = useState<number | null>(null);
  const [lastSelected, setLastSelected] = useState<number | null>(null);

  const skillIcons = [
    "/assets/icons/swiftui.svg",
    "/assets/icons/python.svg",
    "/assets/icons/csharp.svg",
    "/assets/icons/react.svg",
    "/assets/icons/git.svg",
  ];

  useEffect(() => {
    // Randomly select 5 icons to show
    const shuffled = [...skillIcons].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    setVisibleIcons(selected);
  }, []);

  useEffect(() => {
    // Initial delay to wait for fade-in animations
    const initialDelay = setTimeout(() => {
      // Select first random icon after fade-in
      const firstIndex = Math.floor(Math.random() * 5);
      setEnlargedIcon(firstIndex);
      setLastSelected(firstIndex);
    }, 3000); // Wait for initial fade-in animations

    const selectNewIcon = () => {
      let randomIndex: number;
      do {
        randomIndex = Math.floor(Math.random() * 5);
      } while (randomIndex === lastSelected);

      // Immediately update both states
      setEnlargedIcon(randomIndex);
      setLastSelected(randomIndex);
    };

    // Set up the continuous icon changes
    const interval = setInterval(() => {
      selectNewIcon();
    }, 3000);

    // Cleanup
    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [lastSelected]);

  return (
    <div className="relative w-80 h-80">
      {/* Profile Image */}
      <div className="relative w-full h-full">
        <Image
          src={profileImage}
          alt="Profile picture"
          fill
          className="rounded-full object-cover"
          priority
        />
      </div>

      {/* Floating Icons */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ animation: `rotate 20s linear infinite` }}
      >
        {visibleIcons.map((icon, index) => (
          <SkillIcon
            key={icon}
            icon={icon}
            delay={index * 0.3}
            index={index}
            isEnlarged={enlargedIcon === index}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedProfile;
