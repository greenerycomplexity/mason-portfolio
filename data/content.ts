import { StaticImageData } from "next/image";
import RMIT from "/public/assets/images/RMIT-Screenshots/RMIT-Preview.png";
import RMITDemo from "/public/assets/images/RMIT-Screenshots/Test Demo on Client - 1.jpg";
import RMITInterface from "/public/assets/images/RMIT-Screenshots/Recording User Interface - 2.png";
import RMITEyeCapture from "/public/assets/images/RMIT-Screenshots/Eye Capture Device - 3.jpg";
import RMITEyeTracking from "/public/assets/images/RMIT-Screenshots/Eye Pattern Tracking - 4.png";
import RMITHistory from "/public/assets/images/RMIT-Screenshots/Capture History - 5.png";
import MorningDewIcon from "/public/assets/images/MorningDew-Screenshots/MorningDew-Preview.png";
import MorningDewActive from "/public/assets/images/MorningDew-Screenshots/Active.png";
import MorningDewBreathe from "/public/assets/images/MorningDew-Screenshots/Breathe.png";
import MorningDewDetail from "/public/assets/images/MorningDew-Screenshots/Detail.png";
import MorningDewHome from "/public/assets/images/MorningDew-Screenshots/HomeScreen.png";
import Soil1 from "/public/assets/images/Soil-Screenshots/Soil-1.jpg";
import Soil2 from "/public/assets/images/Soil-Screenshots/Soil-2.jpg";
import Soil3 from "/public/assets/images/Soil-Screenshots/Soil-3.jpg";
import Soil4 from "/public/assets/images/Soil-Screenshots/Soil-4.jpg";
import Soil5 from "/public/assets/images/Soil-Screenshots/Soil-5.jpg";
import SoilPreview from "/public/assets/images/Soil-Screenshots/Soil-Preview.jpg";

// Project Types
export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  images: StaticImageData[];
}

// Experience Types
export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface AwardItem {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

// Projects Data
export const projects: Project[] = [
  {
    title: "MorningDew",
    description: "ADHD-focused morning routine tracker, built with SwiftUI.",
    tags: ["Apple WWDC24", "iOS", "SwiftUI", "Accessibility"],
    image: MorningDewIcon,
    images: [
      MorningDewHome,
      MorningDewActive,
      MorningDewDetail,
      MorningDewBreathe,
    ],
  },

  {
    title: "Capstone - SeeMySmile2",
    description:
      "Interactive VR program helping children with autism recognise and understand facial expressions.",
    tags: ["UX Design", "VR", "Unity"],
    image: RMIT,
    images: [
      RMITDemo,
      RMITInterface,
      RMITEyeCapture,
      RMITEyeTracking,
      RMITHistory,
    ],
  },
  {
    title: "Soil Website",
    description:
      "Modern ecommerce platform for organic produce with seamless shopping experience.",
    tags: ["ReactJS", "TailwindCSS", "UI Design"],
    image: SoilPreview,
    images: [Soil1, Soil2, Soil3, Soil4, Soil5],
  },
];

// Experience Data
export const experiences: ExperienceItem[] = [
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
export const awards: AwardItem[] = [
  {
    title: "Apple Swift Student Challenge 2024 Winner",
    issuer: "Apple",
    date: "Mar 2024",
    description:
      "Submitted an iOS app built in SwiftUI, see Projects section for more details.",
  },
  {
    title: "IELTS 9.0",
    issuer: "IELTS Official",
    date: "Dec 2024 - Dec 2026",
    description: "Internationally recognised English proficiency test.",
  },
  {
    title: "GPA 3.4/4.0",
    issuer: "RMIT University",
    date: "Dec 2024",
    description: "Cumulative GPA of entire Bachelor of Computer Science degree",
  },
];
