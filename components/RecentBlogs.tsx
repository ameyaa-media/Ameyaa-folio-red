import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import { BLOG_POSTS } from '../constants';

const RecentBlogs: React.FC = () => {
  // Get only the first 3 posts
  const recentPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Our Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Latest Writings</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-red-500 rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
              Insights, thoughts, and tutorials on web development, design, and technology.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="hidden sm:inline-flex items-center px-6 py-3 rounded-full bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all font-medium group shadow-sm hover:shadow-md"
          >
            View All Articles <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-primary-500/30 transition-all transform hover:-translate-y-1 group"
          >
            Load More Articles <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;