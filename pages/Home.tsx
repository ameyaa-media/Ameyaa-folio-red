import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import RecentProjects from '../components/RecentProjects';
import RecentBlogs from '../components/RecentBlogs';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling on initial load or route change
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <RecentProjects />
      <RecentBlogs />
      <CTA />
      <Contact />
    </div>
  );
};

export default Home;