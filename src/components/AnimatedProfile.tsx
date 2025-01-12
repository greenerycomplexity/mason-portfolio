import React, { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import SkillIcon from "./SkillIcon";

const skillIcons = [
  "/assets/icons/swiftui.svg",
  "/assets/icons/python.svg",
  "/assets/icons/csharp.svg",
  "/assets/icons/react.svg",
  "/assets/icons/git.svg",
];

interface AnimatedProfileProps {
  profileImage: string | StaticImageData; // Profile image source
}

const AnimatedProfile = ({ profileImage }: AnimatedProfileProps) => {
  // ===== State Management =====
  const [visibleIcons, setVisibleIcons] = useState<string[]>([]); // Currently displayed icons
  const [enlargedIcon, setEnlargedIcon] = useState<number | null>(null); // Index of enlarged icon
  const [lastSelected, setLastSelected] = useState<number | null>(null); // Track last enlarged icon
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Profile image load state

  // ===== Initial Icon Selection =====
  useEffect(() => {
    // Randomly select and shuffle 5 icons on mount
    const shuffled = [...skillIcons].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    setVisibleIcons(selected);
  }, []);

  // ===== Animation Logic =====
  useEffect(() => {
    // Wait for profile image to load before starting animations
    if (!isImageLoaded) return;

    // Initial delay before starting icon enlargement
    const initialDelay = setTimeout(() => {
      const firstIndex = Math.floor(Math.random() * 5);
      setEnlargedIcon(firstIndex);
      setLastSelected(firstIndex);
    }, 3000);

    // Helper function to select next random icon
    const selectNewIcon = () => {
      let randomIndex: number;
      do {
        randomIndex = Math.floor(Math.random() * 5);
      } while (randomIndex === lastSelected);

      setEnlargedIcon(randomIndex);
      setLastSelected(randomIndex);
    };

    // Set up periodic icon changes
    const interval = setInterval(selectNewIcon, 2500);

    // Cleanup timers on unmount
    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [lastSelected, isImageLoaded]);

  return (
    <div className="relative w-80 h-80">
      {/* Profile Image Container */}
      <div className="relative w-full h-full">
        <Image
          src={profileImage}
          alt="Profile picture"
          fill
          className="rounded-full object-cover opacity-0"
          style={{ animation: "fadeIn 1s 0.5s forwards" }}
          priority
          onLoad={() => setTimeout(() => setIsImageLoaded(true), 1000)}
        />
      </div>

      {/* Rotating Skill Icons Container */}
      {isImageLoaded && (
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
      )}
    </div>
  );
};

export default AnimatedProfile;
