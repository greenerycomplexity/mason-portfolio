import React from "react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Peer Mentor",
    company: "RMIT University",
    period: "Mar 2024 - Jul 2024 · 5 mos",
    description: [
      "Software Engineering Fundamentals (IT Systems Design, UML, and Java Unit Testing)",
    ],
  },
  {
    title: "Technology & Business Development Intern",
    company: "Project Flick",
    period: "Dec 2023 - Feb 2024 · 3 mos",
    description: [
      "Developed plans to migrate customer records from Kickstarter to Shopify, then mass-announced these changes through Klaviyo",
      "Supported product photoshoots, thoroughly tested Shopify storefront website for bugs/grammatical errors/accessibility issues before going live",
    ],
  },
  {
    title: "Casual Event Staff",
    company: "Spark Event Group",
    period: "May 2023 - Dec 2023 · 8 mos",
    description: ["Customer Service and Event Planning"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-8">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative">
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mt-2" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white p-6 rounded-lg drop-shadow-md">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
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
    </section>
  );
};

export default Experience;
