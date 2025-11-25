import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-dark-bg px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The blog post you are looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/blog')}
          className="px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <div className="absolute inset-0">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 md:p-12 z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors backdrop-blur-md bg-black/20 px-4 py-2 rounded-full text-sm font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 mb-4 text-sm font-medium text-primary-200">
              <span className="bg-primary-600 px-3 py-1 rounded-full text-white">{post.category}</span>
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-t border-white/20 pt-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={post.authorImage} 
                  alt={post.author} 
                  className="w-12 h-12 rounded-full border-2 border-white/50"
                />
                <div>
                  <div className="text-white font-bold">{post.author}</div>
                  <div className="text-white/60 text-sm">Tech Author</div>
                </div>
              </div>
              
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors" title="Share">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div 
          className="prose prose-lg dark:prose-invert prose-primary max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight 
            prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-2xl prose-img:shadow-lg
            leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
          <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >
                <Tag className="w-3 h-3 mr-2" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-white dark:from-[#1e293b] dark:to-[#0f172a] rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Enjoyed this article?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Subscribe to my newsletter to get the latest web development tips and tricks delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
            <button className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-500/30">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;