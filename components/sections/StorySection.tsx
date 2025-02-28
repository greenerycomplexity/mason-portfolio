import React from "react";

const LINKEDIN_URL = "https://www.linkedin.com/in/caohaison/";

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-6xl mx-auto px-2 sm:px-6 md:px-8 lg:px-10">
        <h2 className="text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-black font-sans">
          About me!
        </h2>
        <div className="text-base sm:text-lg text-gray-600 max-w-[95%] sm:max-w-2xl md:max-w-3xl">
          <p className="mb-4 sm:mb-6">
            I am a recent Computer Science graduate from RMIT University,
            graduating with Distinction. My focus is on accessible and
            human-centric software design. In 2024, I won the Apple Swift
            Student Challenge for developing an ADHD-focused accessibility app
            on iOS, as 1 out of 350 student winners worldwide.
          </p>
          <p className="mb-4 sm:mb-6">
            Originally from Vietnam, my background and experience in both
            Western & Asian markets helps me approach technical challenges from
            multiple angles, with an understanding of cross-cultural user needs
            and design considerations.
          </p>
          <p>Below are some of my past projects and experiences.</p>

          <p>
            Have a browse, then{" "}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              let&apos;s chat
            </a>
            !
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
