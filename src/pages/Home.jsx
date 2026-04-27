import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Assignments from '../components/Assignments';
import Strengths from '../components/Strengths';
import FeaturedProjects from '../components/FeaturedProjects';
import Workflow from '../components/Workflow';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Assignments />
      <Strengths />
      <FeaturedProjects />
      <Workflow />
      <AboutSection />
      <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-100">
        © 2026 孟小琪 · AIGC 内容与数字媒体作品集
      </footer>
    </div>
  );
};

export default Home;
