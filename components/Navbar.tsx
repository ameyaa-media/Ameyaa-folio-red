import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";
import { NAV_ITEMS } from "../constants";
import { useTheme } from "./ThemeContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isRoute?: boolean) => {
    setIsOpen(false);
    if (isRoute) {
      navigate(href);
      window.scrollTo(0, 0);
    } else {
      // Handle hash navigation
      if (location.pathname !== "/") {
        navigate("/");
        // Use timeout to allow navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-dark-bg/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => handleNavClick("/", true)}
          >
            <div className="p-2 bg-gradient-to-br from-primary-500 to-red-600 rounded-lg text-white group-hover:shadow-lg transition-all duration-300">
              <Code2 className="h-6 w-6" />
            </div>
            <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              AMEYAA-Dev
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.isRoute)}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}

            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-gray-600" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-400" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-dark-bg/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 transition-all duration-300 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.isRoute)}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
