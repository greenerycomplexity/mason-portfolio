"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import ProfileImage from "/public/assets/images/ProfileImage.jpeg";
import AnimatedProfile from "./AnimatedProfile";

const Hero = () => {
  return (
    <div className="min-h-screen bg-white flex items-center px-8">
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
                href="#work"
                className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-black border border-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Get in touch
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* <div className="flex justify-center">
            <div className="relative w-80 h-80 hidden md:block">
              <Image
                src={ProfileImage}
                alt="Profile picture"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div> */}

          <div className="flex justify-center">
            <AnimatedProfile profileImage={ProfileImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
