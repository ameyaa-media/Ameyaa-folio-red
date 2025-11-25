import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const RecentProjects: React.FC = () => {
  // Limit to 6 projects
  const recentProjects = PROJECTS.slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#0b1120] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Featured Work</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-red-500 rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
              A selection of my recent projects demonstrating my expertise in web development and design.
            </p>
          </div>
          {/* Top 'View All' link - kept for easy access, but less prominent than the bottom CTA */}
          <Link 
            to="/projects" 
            className="hidden sm:inline-flex items-center px-6 py-3 rounded-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all font-medium group shadow-sm hover:shadow-md"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/projects" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-primary-500/30 transition-all transform hover:-translate-y-1 group"
          >
            Load More Projects <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;