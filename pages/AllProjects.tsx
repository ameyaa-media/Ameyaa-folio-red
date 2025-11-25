import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllProjects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-gray-50 dark:bg-[#0b1120] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">All Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
            A comprehensive list of my work, featuring experiments, open source contributions, and client projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;