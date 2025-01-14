import React from "react";

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20">
      <div className="max-w-6xl mx-auto px-6 font-sans">
        <h2 className="text-5xl font-bold mb-8">About me!</h2>
        <div className="text-lg text-gray-600 max-w-4xl">
          <p className="mb-6">
            I'm a recent Computer Science graduate from RMIT University,
            graduating with Distinction. My passion lies at the intersection of
            technology and user experience design, demonstrated by winning
            Apple's Swift Student Challenge with an ADHD accessibility app. 🏆
          </p>
          <p>
            As a 21-year-old international student from Vietnam, I bring fresh
            perspectives to software engineering. I combine technical expertise
            with personal insights to create human-centric, accessible solutions
            that make technology work for everyone. ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
