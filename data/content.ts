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
  detailedDescription?: string[];
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
    detailedDescription: [
      "MorningDew is an iOS app I developed that won the Apple Swift Student Challenge 2024. Born from my personal struggles with ADHD and time management, it transforms chaotic morning routines into structured, achievable tasks. The app's core concept is simple: users input their morning tasks and typical duration, then MorningDew displays one task at a time with a visual timer, complemented by high-intensity music to maintain momentum, and loud check-in alarms to prevent distractions.",
      "Beyond acting as a tool to manage my morning routines, MorningDew represents a broader mission: to empower individuals with ADHD in their daily lives and demonstrate that with the right level of support, neurodivergent people can excel in any environment. Through MorningDew, I hope it showcases not only my technical skills in iOS development, but also my commitment to creating technology that makes a meaningful difference.",
    ],
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
    detailedDescription: [
      "The program creates a controlled, distraction-free environment where users can practice identifying and interpreting various emotional expressions displayed by 3D avatar-based faces. This application integrates eye-tracking functionality, enabling researchers and facilitators to gain insights into how a patient scan and process facial expressions.",
      "As the UI/UX lead for the project, my primary responsibility centered on completely reimagining and implementing the user interface to enhance overall usability and accessibility. The redesign focused on creating an intuitive and clean layout that simplified a VR agent's emotion selection and intensity control. I developed new features including a comprehensive session recording system with playback controls, an improved agent preview and selection system, and an organized capture history interface for reviewing past sessions.",
      "Turning an originally complex interface to a streamlined, user-friendly design represented a significant improvement in the program's accessibility, and SeeMySmile2 had evolved into a more effective tool for emotional intelligence training and research.",
    ],
    tags: ["UI/UX Design", "Figma", "VR", "Unity"],
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
    detailedDescription: [
      "This website was created as part of an assignment for my Full Stack Development course at RMIT. I worked in a pair with another student to develop a comprehensive full-stack e-commerce platform called SOIL. The platform is designed to serve as an online marketplace where customers can purchase organic produce.",
      "The implementation features both a customer-facing marketplace and a separate admin dashboard. The system was built using React JS for the frontend and TailwindCSS for styling, Node.js/Express for the middleware, and a cloud-based MySQL database provided by RMIT for data persistence.",
      "The system employed two distinct architectural approaches. I used REST API for the main, customer-facing site, which provides standard CRUD operations. For the admin dashboard, I opted for GraphQL because it enables real-time subscriptions, which in turn provides real-time analytics and monitoring for user purchases.",
      'One of the most critical design decisions involved modeling the shopping cart system. Rather than using a simple one-to-many relationship between users and products, we implemented a dedicated CartItems table that tracked the relationship between users, products, and quantities. This approach solved multiple challenges by allowing multiple users to have the same product in their carts simultaneously, separating the concept of "quantity in cart" from "quantity in stock" for any given product, and enabling detailed analytics on user shopping behavior and cart abandonment patterns.',
      "The system also implemented a token-based authentication system with password hashing and role-based access control. User sessions were managed through localStorage with extra API validation to ensure blocked users couldn't perform restricted actions (e.g logging in, finalise a purchase, etc), even if they had valid tokens.",
      "In terms of codebase size and complexity, the project comprised two separate React frontend applications totaling approximately 5,000 lines of code, complemented by backend REST and GraphQL APIs spanning roughly 3,000 lines. The database architecture consisted of 8 interconnected tables supporting core functionalities including user authentication, product management, shopping cart operations, a review system, real-time analytics, and administrative moderation tools.",
    ],
    tags: ["React.js", "TailwindCSS", "Node.js", "MySQL"],
    image: SoilPreview,
    images: [Soil1, Soil2, Soil3, Soil4, Soil5],
  },
];

// Experience Data
export const experiences: ExperienceItem[] = [
  {
    title: "Peer Mentor",
    company: "RMIT University",
    period: "Mar 2024 - Jul 2024 • 5 mos",
    description: [
      "For the second-year course Software Engineering Fundamentals (IT Systems Design, UML, and Java Unit Testing)",
    ],
  },
  {
    title: "Technology & Business Development Intern",
    company: "Project Flock",
    period: "Dec 2023 - Feb 2024 • 3 mos",
    description: [
      "Developed plans to migrate customer records from Kickstarter to Shopify, then mass-announced these changes through Klaviyo",
      "Supported product photoshoots, thoroughly tested Shopify storefront website for bugs/grammatical errors/accessibility issues before going live",
    ],
  },
  {
    title: "Event Staff",
    company: "Spark Event Group",
    period: "May 2023 - Dec 2023 • 8 mos",
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
