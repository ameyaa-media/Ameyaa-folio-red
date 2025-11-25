import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="flex flex-col h-full bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-sm text-xs font-bold text-primary-600 dark:text-primary-400 rounded-full uppercase tracking-wider">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3 space-x-2">
          <span>{post.date}</span>
          <span>•</span>
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {post.readTime}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          <Link to={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={post.authorImage} 
              alt={post.author} 
              className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-600"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {post.author}
            </span>
          </div>
          <Link 
            to={`/blog/${post.id}`} 
            className="text-primary-600 dark:text-primary-400 font-medium text-sm flex items-center hover:translate-x-1 transition-transform"
          >
            Read <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;