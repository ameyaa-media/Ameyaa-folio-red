import React from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      className:
        "hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-gray-700",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      className: "hover:text-[#0077b5] hover:bg-[#0077b5]/10",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
      className: "hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10",
    },
  ];

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              AMEYAA-Dev
            </span>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Building the web, one pixel at a time.
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`p-3 rounded-full bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md ${link.className}`}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {currentYear} Ameyaa Media. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Made with{" "}
            <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> by
            Ameyaa Media
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
