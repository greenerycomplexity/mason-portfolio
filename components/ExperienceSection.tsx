import React from "react";
import { experiences, awards } from "@/data/content";

// Main Experience Component
const Experience = () => {
  // State Management
  const [expandedWork, setExpandedWork] = React.useState(false);
  const [expandedAwards, setExpandedAwards] = React.useState(false);

  return (
    <section id="experience" className="py-20 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-6 text-black">
        {/* Section Header */}
        <h2 className="text-5xl font-bold mb-12">Experience</h2>

        {/* Work Experience Submenu */}
        <div className="mb-8">
          {/* Work Experience Toggle Button */}
          <button
            onClick={() => setExpandedWork(!expandedWork)}
            className="w-full flex items-center justify-between text-3xl font-semibold p-4 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex items-center">
              <span>Work 💼</span>
            </div>
            <span className="text-2xl transition-transform duration-300">
              {expandedWork ? "−" : "+"}
            </span>
          </button>

          {/* Work Experience Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedWork ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="max-w-3xl mt-6 mx-10">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-4 relative">
                  <div className="flex">
                    {/* Experience Card */}
                    <div className="flex-1 bg-white mb-4 rounded-lg">
                      <h4 className="text-xl font-semibold">{exp.title}</h4>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                      <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
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
            className="w-full flex items-center justify-between text-3xl font-semibold p-4 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-2">
              <span>Awards & Achievements 🏆</span>
            </div>
            <span className="text-2xl transition-transform duration-300">
              {expandedAwards ? "−" : "+"}
            </span>
          </button>

          {/* Awards Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedAwards
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="max-w-3xl mx-10 space-y-4 mt-6">
              {awards.map((award, index) => (
                <div key={index} className="flex flex-col">
                  <h4 className="text-lg font-semibold">{award.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    {award.issuer && (
                      <span className="text-purple-600">{award.issuer}</span>
                    )}
                    {award.issuer && award.date && <span>•</span>}
                    {award.date && <span>{award.date}</span>}
                  </div>
                  {award.description && (
                    <p className="text-sm text-gray-600 mt-1">
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
