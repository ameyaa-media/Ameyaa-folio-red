import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-red-800 dark:from-primary-900 dark:to-red-950"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-red-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to start your next project?
        </h2>
        <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
          I'm currently available for freelance work and open to new opportunities. 
          Let's discuss how we can build something amazing together.
        </p>
        <button 
          onClick={() => {
            const el = document.getElementById('contact');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center px-8 py-4 bg-white text-primary-700 dark:text-primary-900 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-1"
        >
          <Mail className="mr-2 h-5 w-5" />
          Let's Talk
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default CTA;