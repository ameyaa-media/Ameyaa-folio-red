import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { BLOG_POSTS } from '../constants';

const BlogList: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-gray-50 dark:bg-[#0b1120] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-red-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Thoughts, tutorials, and insights on the ever-evolving world of web development, design, and technology.
          </p>
        </div>

        {/* Featured/Latest Post (First one) - Optional Layout Variation */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-xl group">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
             <img 
               src={BLOG_POSTS[0].imageUrl} 
               alt={BLOG_POSTS[0].title}
               className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute bottom-0 left-0 p-6 md:p-12 z-20 max-w-4xl">
                <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                  Featured
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  <Link to={`/blog/${BLOG_POSTS[0].id}`} className="hover:text-primary-200 transition-colors">
                    {BLOG_POSTS[0].title}
                  </Link>
                </h2>
                <p className="text-gray-200 text-lg mb-6 line-clamp-2 md:line-clamp-none max-w-2xl">
                  {BLOG_POSTS[0].excerpt}
                </p>
                <div className="flex items-center space-x-4">
                  <img src={BLOG_POSTS[0].authorImage} alt={BLOG_POSTS[0].author} className="w-10 h-10 rounded-full border-2 border-white/50" />
                  <div className="text-white">
                    <div className="font-bold text-sm">{BLOG_POSTS[0].author}</div>
                    <div className="text-xs opacity-80">{BLOG_POSTS[0].date} • {BLOG_POSTS[0].readTime}</div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Categories / Search Bar could go here */}

        {/* Grid of Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-16 flex justify-center">
           <button className="px-6 py-3 bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
             Load More Articles
           </button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;