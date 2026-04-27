import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <div className="group bg-white rounded-[2rem] md:rounded-[2.5rem] border border-[#F0EEEA] overflow-hidden hover:border-[#7E8FB5]/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-700 flex flex-col lg:flex-row p-4 md:p-6 gap-6 md:gap-8 mb-12">
      <div className="w-full lg:w-[42%] aspect-video lg:aspect-square rounded-[1.5rem] md:rounded-[1.8rem] overflow-hidden relative">
        {project.images && project.images[0] ? (
          <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
        ) : (
          <div className="w-full h-full bg-[#FAF9F7] flex items-center justify-center text-[#AFC3D9]">
            <Layers size={48} strokeWidth={1} />
          </div>
        )}
        <div className="absolute top-4 left-4 md:bottom-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 bg-black/60 md:backdrop-blur-md rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-bold text-white uppercase tracking-[0.2em] shadow-sm">
          {project.category.split(' / ')[0]}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center py-2 md:py-4 px-2 md:px-8">
        <div className="space-y-4 md:space-y-6">
          <div className="space-y-1 md:space-y-2">
             <div className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold text-[#7E8FB5] uppercase tracking-[0.3em]">
                <span>CASE STUDY 0{index + 1}</span>
             </div>
             <h3 className="text-2xl md:text-5xl font-bold text-[#2D3436] tracking-tight group-hover:text-[#7E8FB5] transition-colors duration-500">
               {project.title}
             </h3>
          </div>
          
          <p className="text-[#636E72] text-sm md:text-lg leading-relaxed max-w-lg border-l-2 border-[#F3F1ED] pl-4 md:pl-6 italic">
            {project.oneLine}
          </p>

          <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
            {project.skills.slice(0, 4).map((skill, i) => (
              <span key={i} className="px-2 py-1 md:px-3 md:py-1.5 bg-[#FAF9F7] text-[#8C867F] border border-[#F0EEEA] rounded-lg text-[9px] md:text-[11px] font-bold uppercase tracking-wider">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4">
          <Link 
            to={`/projects/${project.slug}`} 
            className="px-8 py-3 bg-[#2D3436] text-white rounded-xl font-bold text-sm hover:bg-[#7E8FB5] transition-all flex items-center justify-center gap-3 group/btn"
          >
            详情探索 <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          {project.links?.live && (
            <a 
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white border border-[#E8E5E0] text-[#2D3436] rounded-xl font-bold text-sm hover:bg-[#FAF9F7] transition-all flex items-center justify-center"
            >
              在线体验
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
