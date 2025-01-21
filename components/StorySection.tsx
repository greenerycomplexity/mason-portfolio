import React from "react";

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 font-sans">
        <h2 className="text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-black">
          About me!
        </h2>
        <div className="text-base sm:text-lg text-gray-600 max-w-[95%] sm:max-w-2xl md:max-w-3xl">
          <p className="mb-4 sm:mb-6">
            I am a recent Computer Science graduate from RMIT University,
            graduating with Distinction. My passion lies at the intersection of
            technology and user experience design, demonstrated by winning
            Apple&apos;s Swift Student Challenge with an ADHD accessibility app
            🏆
          </p>
          <p>
            As a 21-year-old international student from Vietnam, I bring fresh
            perspectives to software engineering. I combine technical expertise
            with personal insights to create human-centric, accessible solutions
            that make technology work for everyone ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
