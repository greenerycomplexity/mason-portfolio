"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Header Component
 * A responsive navigation header that highlights the current section based on scroll position
 */
const Header = () => {
  // --- State Management ---
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = useState("story");

  // --- Navigation Configuration ---
  const navItems = [
    { href: "#story", label: "Story" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  // --- Scroll Handler ---
  useEffect(() => {
    /**
     * Updates the active section based on current scroll position
     * Uses a 75px buffer zone for tighter transitions
     */
    const handleScroll = () => {
      const sections = ["story", "projects", "experience"];
      // Calculate trigger point at 1/4 of viewport height
      const triggerPoint = window.innerHeight * 0.25;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Add and cleanup scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Utility Functions ---
  /**
   * Generates className string for navigation links
   * @param href - The link's href attribute
   * @returns className string with appropriate styling based on active state
   */
  const getLinkClasses = (href: string) => {
    const isActive = activeSection === href.substring(1);
    return `flex items-center px-4 py-1 h-10 rounded-full transition-all duration-300 ease-in-out ${
      isActive
        ? "text-black font-semibold border-2 border-gray-200 text-sm px-8"
        : "text-gray-500 hover:text-gray-900 font-semibold text-sm"
    }`;
  };

  // --- Render Component ---
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-full z-50 border h-14">
      <div className="px-4">
        {/* Main Navigation Container */}
        <div className="flex justify-center items-center py-2">
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={getLinkClasses(item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle - Visible only on mobile */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation Menu - Conditionally rendered */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block ${getLinkClasses(item.href)}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
