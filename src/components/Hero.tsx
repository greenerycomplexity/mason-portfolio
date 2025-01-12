"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import ProfileImage from "/public/assets/images/ProfileImage.jpeg";
import AnimatedProfile from "./AnimatedProfile";

const LINKEDIN_URL = "https://www.linkedin.com/in/caohaison/";

const Hero = () => {
  return (
    <div id="story" className="min-h-screen bg-white flex items-center px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Mason Cao
              <span className="block text-xl md:text-2xl mt-1">
                Software Engineer and Visual Designer
              </span>
            </h1>

            <p className="text-lg md:text-l text-gray-600 mx-auto md:mx-0 max-w-2xl mb-8 mr-10">
              I create software that is both aesthetically pleasing and
              emotionally resonant, incorporating user interfaces that are
              intuitive and user-friendly.
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
                className="px-6 py-3 bg-white text-black border border-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-1"
              >
                Get in touch
                <ArrowRight size={16} className="rotate-[-45deg]" />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <AnimatedProfile
              profileImage={ProfileImage}
              size="w-[25vw] h-[25vw] max-w-[320px] max-h-[320px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
