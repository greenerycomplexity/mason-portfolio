import React from "react";
import { experiences, awards } from "@/data/content";

// Main Experience Component
const Experience = () => {
  // State Management
  const [expandedWork, setExpandedWork] = React.useState(false);
  const [expandedAwards, setExpandedAwards] = React.useState(false);

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 bg-white font-sans lg:py-24 text-black"
    >
      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-6xl mx-auto px-2 sm:px-6 md:px-8 lg:px-10">
        <h2 className="text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-black font-sans">
          Experience
        </h2>

        {/* Work Experience Submenu */}
        <div className="mb-6 sm:mb-8">
          {/* Work Experience Toggle Button */}
          <button
            onClick={() => setExpandedWork(!expandedWork)}
            className="w-full flex items-center justify-between font-semibold p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex items-center text-xl sm:text-2xl md:text-3xl">
              <span>Work 💼</span>
            </div>
            <span className="text-2xl sm:text-3xl transition-transform duration-300">
              {expandedWork ? "−" : "+"}
            </span>
          </button>

          {/* Work Experience Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedWork ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="max-w-[95%] sm:max-w-2xl md:max-w-3xl mt-4 sm:mt-5 md:mt-6 mx-4 sm:mx-6 md:mx-10">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-4 sm:mb-6 relative">
                  <div className="flex">
                    {/* Experience Card */}
                    <div className="flex-1 bg-white mb-3 rounded-lg">
                      <h4 className="text-lg sm:text-xl font-semibold">
                        {exp.title}
                      </h4>
                      <div className="text-sm sm:text-base">
                        <p className="font-medium text-blue-600">
                          {exp.company}
                        </p>
                        <p className="mb-2 text-gray-600">{exp.period}</p>
                      </div>
                      <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-1 sm:space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards Submenu */}
        <div>
          {/* Awards Toggle Button */}
          <button
            onClick={() => setExpandedAwards(!expandedAwards)}
            className="w-full flex items-center justify-between font-semibold p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex items-center text-xl sm:text-2xl md:text-3xl">
              <span>Achievements 🏆</span>
            </div>
            <span className="text-2xl sm:text-3xl transition-transform duration-300">
              {expandedAwards ? "−" : "+"}
            </span>
          </button>

          {/* Awards Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedAwards
                ? "max-h-[2000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="max-w-[95%] sm:max-w-2xl md:max-w-3xl mx-4 sm:mx-6 md:mx-10 space-y-3 sm:space-y-4 mt-4 sm:mt-5 md:mt-6">
              {awards.map((award, index) => (
                <div key={index} className="flex flex-col">
                  <h4 className="text-lg sm:text-xl font-semibold">
                    {award.title}
                  </h4>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-gray-600">
                    {award.issuer && (
                      <span className="text-purple-600">{award.issuer}</span>
                    )}
                    {award.issuer && award.date && <span>•</span>}
                    {award.date && <span>{award.date}</span>}
                  </div>
                  {award.description && (
                    <p className="text-sm sm:text-base text-gray-600 mt-1">
                      {award.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
