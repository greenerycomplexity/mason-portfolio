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
  const [activeSection, setActiveSection] = useState("");

  // --- Navigation Configuration ---
  const navItems = [
    { href: "#story", label: "Story" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    // { href: "#contact", label: "Contact" },
  ];

  // --- Scroll Handler ---
  useEffect(() => {
    /**
     * Updates the active section based on current scroll position
     * Uses a 75px buffer zone for tighter transitions
     */
    const handleScroll = () => {
      const sections = ["story", "projects", "experience"];
      const triggerPoint = window.innerHeight * 0.25;

      // Check if we're at the top of the page (home section)
      if (window.scrollY === 0) {
        setActiveSection(""); // Clear active section when at top
        return;
      }

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
    return `flex items-center px-2 font-sans py-1 h-10 rounded-full transition-all duration-300 ease-in-out ${
      isActive
        ? "text-black font-semibold border-2 border-gray-200 text-sm px-8"
        : "text-gray-500 hover:text-gray-900 font-semibold text-sm"
    }`;
  };

  // --- Render Component ---
  return (
    <nav className="fixed top-4 z-50 w-full px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:block left-1/2 bg-white shadow-md rounded-full border h-14 w-fit mx-auto">
        <div className="px-6">
          <div className="flex items-center py-2">
            <div className="w-[100px] mr-6">
              <a href="#home" className="hover:text-gray-600 transition-all">
                <h1 className="text-lg font-sans font-semibold tracking-tight text-black">
                  Mason Cao
                </h1>
              </a>
            </div>

            <div className="flex items-center justify-center space-x-4">
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
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden absolute top-0 right-4">
        <button
          className="bg-white p-3 rounded-full shadow-md border transition-all duration-200 hover:scale-105 active:scale-95"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-16 right-0 w-40 bg-white rounded-2xl shadow-lg border overflow-hidden transition-all duration-300 origin-top-right ${
            isMenuOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="p-4 space-y-2">
            <a
              href="#home"
              className="block text-right py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <h1 className="text-lg font-sans font-semibold tracking-tight text-black">
                Mason Cao
              </h1>
            </a>
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block text-right py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gray-100 text-black "
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  } ${isMenuOpen ? "animate-slideIn" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
