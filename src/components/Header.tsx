"use client";
import React from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-4 left-10 right-10 bg-white shadow-md rounded-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold">Mason Cao</span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#story" className="text-black hover:text-gray-900">
              Story
            </a>
            <a href="#works" className="text-black hover:text-gray-900">
              Works
            </a>
            <a href="#contact" className="text-black hover:text-gray-900">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#hire"
            className="hidden md:block px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Say Hello!
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#story"
                className="block px-3 py-2 text-black hover:bg-gray-50 rounded-md"
              >
                Story
              </a>
              <a
                href="#works"
                className="block px-3 py-2 text-black hover:bg-gray-50 rounded-md"
              >
                Works
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 text-black hover:bg-gray-50 rounded-md"
              >
                Skills
              </a>
              <a
                href="#explorations"
                className="block px-3 py-2 text-black hover:bg-gray-50 rounded-md"
              >
                Explorations
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-black hover:bg-gray-50 rounded-md"
              >
                Contact
              </a>
              <a
                href="#hire"
                className="block px-3 py-2 bg-black text-white rounded-md"
              >
                Say Hello!
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
