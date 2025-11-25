import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a href={project.link} className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary-500 hover:text-white transition-colors">
            <ExternalLink className="h-5 w-5" />
          </a>
          {project.github && (
            <a href={project.github} className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary-500 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm">{project.description}</p>
        
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;