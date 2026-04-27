import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <div className="group bg-white rounded-[2.5rem] border border-[#F0EEEA] overflow-hidden hover:border-[#7E8FB5]/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-700 flex flex-col lg:flex-row p-4 lg:p-6 gap-8 mb-12">
      <div className="w-full lg:w-[42%] aspect-[4/3] lg:aspect-square rounded-[1.8rem] overflow-hidden relative">
        {project.images && project.images[0] ? (
          <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
        ) : (
          <div className="w-full h-full bg-[#FAF9F7] flex items-center justify-center text-[#AFC3D9]">
            <Layers size={48} strokeWidth={1} />
          </div>
        )}
        <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-xl text-[10px] font-bold text-white uppercase tracking-[0.2em] shadow-sm">
          {project.category.split(' / ')[0]}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center py-4 px-4 lg:px-8">
        <div className="space-y-6">
          <div className="space-y-2">
             <div className="flex items-center gap-3 text-[11px] font-bold text-[#7E8FB5] uppercase tracking-[0.3em]">
                <span>CASE STUDY 0{index + 1}</span>
             </div>
             <h3 className="text-3xl md:text-5xl font-bold text-[#2D3436] tracking-tight group-hover:text-[#7E8FB5] transition-colors duration-500">
               {project.title}
             </h3>
          </div>
          
          <p className="text-[#636E72] text-lg leading-relaxed max-w-lg border-l-2 border-[#F3F1ED] pl-6 italic">
            {project.oneLine}
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {project.skills.slice(0, 4).map((skill, i) => (
              <span key={i} className="px-3 py-1.5 bg-[#FAF9F7] text-[#8C867F] border border-[#F0EEEA] rounded-lg text-[11px] font-bold uppercase tracking-wider">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link 
            to={`/projects/${project.slug}`} 
            className="px-8 py-3 bg-[#2D3436] text-white rounded-xl font-bold text-sm hover:bg-[#7E8FB5] transition-all flex items-center gap-3 group/btn"
          >
            详情探索 <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          {project.links?.live && (
            <a 
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white border border-[#E8E5E0] text-[#2D3436] rounded-xl font-bold text-sm hover:bg-[#FAF9F7] transition-all"
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
