import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D3436]">精选项目</h2>
            <p className="text-[#8C867F] max-w-lg text-lg">
              探索我如何将 AI 技术与内容叙事完美融合，创造出具有生命力的数字作品。
            </p>
          </div>
          <div className="text-sm font-bold text-[#7E8FB5] tracking-widest uppercase pb-2 border-b border-[#7E8FB5]/20">
            Selected Works
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
