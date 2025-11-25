import React from "react";
import {
  Code,
  Database,
  Layout,
  Server,
  Settings,
  Smartphone,
  MonitorSmartphone,
} from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    icon: Layout,
    description:
      "Crafting responsive, interactive UIs with React, Next JS Tailwind, and TypeScript.",
  },
  {
    name: "Backend Development",
    icon: Server,
    description:
      "Building robust APIs and server-side logic using Node.js, Express, and Python.",
  },
  {
    name: "WordPress Development",
    icon: MonitorSmartphone,
    description:
      "Creating cross-platform mobile experiences with React Native.",
  },
  {
    name: "Database Design",
    icon: Database,
    description:
      "Structuring data efficiently with PostgreSQL, MongoDB, and Redis.",
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">
            Get to know me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I am a dedicated developer with over 15 years of experience in
            building digital products. I love solving complex problems and
            turning ideas into reality through clean, efficient code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Journey
            </h3>
            <div className="prose dark:prose-invert text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                My journey began with a curiosity about how things work on the
                web. Starting with simple HTML/CSS pages, I evolved into a Full
                Stack Developer, constantly learning new technologies to keep up
                with the industry standards.
              </p>
              <p className="mt-4">
                When I'm not coding, I contribute to open-source projects, write
                technical articles, and mentor aspiring developers. I believe in
                the power of community and continuous learning.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-gray-800 rounded-2xl text-center hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                <span className="block text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-red-600">
                  15+
                </span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                  Years Experience
                </span>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-gray-800 rounded-2xl text-center hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                <span className="block text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-red-600">
                  50+
                </span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                  Projects Completed
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-6 bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400">
                  <skill.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
