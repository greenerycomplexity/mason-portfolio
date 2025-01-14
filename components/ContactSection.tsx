import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/greenerycomplexity",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/caohaison123",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:hsm.cao@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer id="contact" className="bg-footer text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Let's chat!</h2>

        <div className="max-w-3xl mx-auto">
          {/* Social Links */}
          <div className="flex justify-center gap-8 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-100 hover:text-blue-400 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-100 mt-8">
            <p>Mason Cao © 2025</p>
            <p className="text-sm mt-2">
              Built with Next.js. Deployed with Vercel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
