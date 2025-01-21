"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import ProfileImage from "/public/assets/images/ProfileImage.jpeg";
import AnimatedProfile from "./AnimatedProfile";

const LINKEDIN_URL = "https://www.linkedin.com/in/caohaison/";

const HeroSection = () => {
  return (
    <div id="home" className="min-h-screen flex items-center px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-28 md:gap-24 items-center">
          <div className="flex justify-center md:order-2">
            <AnimatedProfile
              profileImage={ProfileImage}
              size="w-[25vw] h-[25vw] max-w-[320px] max-h-[320px]"
            />
          </div>

          <div className="text-center md:text-left z-10 relative md:order-1">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-2">
              Mason Cao
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Software Engineer and Visual Designer
            </h2>

            <p className="text-lg md:text-l text-gray-600 mx-auto md:mx-0 max-w-2xl mb-8 md:mr-10">
              I build software that looks great and feels right, focusing on
              making intuitive and accessible user interfaces.
            </p>

            <div className="flex flex-row gap-4 mt-8 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                See my work
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-black border border-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-1"
              >
                Get in touch
                <ArrowRight size={16} className="rotate-[-45deg]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
