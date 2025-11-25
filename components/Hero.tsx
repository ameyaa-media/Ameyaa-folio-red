import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=2070" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Modern glassmorphism overlay for readability */}
        <div className="absolute inset-0 bg-white/90 dark:bg-[#0f172a]/95 backdrop-blur-[2px]"></div>
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent"></div>
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-50 dark:opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-300 dark:bg-primary-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-red-300 dark:bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 dark:bg-orange-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 z-10 relative">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-100/80 dark:bg-primary-900/50 border border-primary-200 dark:border-primary-700 backdrop-blur-sm">
             <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">Available for Freelance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 leading-tight drop-shadow-sm">
            Building Digital <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-red-600 dark:from-primary-400 dark:to-red-400">Experiences</span> That Matter
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
            I'm a Full Stack Developer passionate about crafting accessible, pixel-perfect user interfaces that blend form and function into seamless experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button 
              onClick={() => {
                 const el = document.getElementById('projects');
                 el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all transform hover:scale-105 flex items-center shadow-lg hover:shadow-primary-500/30"
            >
              View Work <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 dark:hover:border-primary-400 bg-white/60 dark:bg-black/40 backdrop-blur-sm transition-all"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-10 flex items-center justify-center md:justify-start space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:-translate-y-1 bg-white/50 dark:bg-black/20 p-2 rounded-full backdrop-blur-sm">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:-translate-y-1 bg-white/50 dark:bg-black/20 p-2 rounded-full backdrop-blur-sm">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:-translate-y-1 bg-white/50 dark:bg-black/20 p-2 rounded-full backdrop-blur-sm">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Image/Visual */}
        <div className="flex-1 relative flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-red-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 dark:ring-white/10 rotate-3 hover:rotate-0 transition-all duration-700 ease-out">
              <img 
                src="https://picsum.photos/800/800?random=100" 
                alt="Developer Workspace" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-sm font-medium opacity-90">Latest Project</div>
                <div className="text-lg font-bold">E-Commerce System</div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white/90 dark:bg-dark-card/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-bold">
                  98%
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Performance</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">Optimized</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/90 dark:bg-dark-card/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 z-20 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <span className="font-bold">React</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Stack</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">Modern Tech</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;