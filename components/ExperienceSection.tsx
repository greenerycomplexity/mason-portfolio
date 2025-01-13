import React from "react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface AwardItem {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

// Experience Data
const experiences: ExperienceItem[] = [
  {
    title: "Peer Mentor",
    company: "RMIT University",
    period: "Mar 2024 - Jul 2024 · 5 mos",
    description: [
      "For the second-year course Software Engineering Fundamentals (IT Systems Design, UML, and Java Unit Testing)",
    ],
  },
  {
    title: "Technology & Business Development Intern",
    company: "Project Flock",
    period: "Dec 2023 - Feb 2024 · 3 mos",
    description: [
      "Developed plans to migrate customer records from Kickstarter to Shopify, then mass-announced these changes through Klaviyo",
      "Supported product photoshoots, thoroughly tested Shopify storefront website for bugs/grammatical errors/accessibility issues before going live",
    ],
  },
  {
    title: "Event Staff",
    company: "Spark Event Group",
    period: "May 2023 - Dec 2023 · 8 mos",
    description: ["Customer Service and Event Planning"],
  },
];

// Awards Data
const awards: AwardItem[] = [
  {
    title: "IELTS 9.0",
    issuer: "IELTS Official",
    date: "Dec 2024 - Dec 2026",
    description: "Internationally recognised English proficiency test.",
  },
  {
    title: "Apple Swift Student Challenge 2024 Winner",
    issuer: "Apple",
    date: "Mar 2024",
    description:
      "Submitted an iOS app built in SwiftUI, see Projects section for more details.",
  },
  {
    title: "GPA 3.4/4.0",
    issuer: "RMIT University",
    date: "Dec 2024",
    description: "Cumulative GPA of entire Bachelor of Computer Science degree",
  },
];

// Main Experience Component
const Experience = () => {
  // State Management
  const [expandedWork, setExpandedWork] = React.useState(false);
  const [expandedAwards, setExpandedAwards] = React.useState(false);

  return (
    <section id="experience" className="py-20 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-6">
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
