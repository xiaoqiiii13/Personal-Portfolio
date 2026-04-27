import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">项目未找到</h1>
        <Link to="/" className="text-blue-600">回到首页</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pb-20">
      <Navbar />
      
      <main className="container-custom pt-12">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-12">
          <ArrowLeft size={16} /> 返回精选项目
        </Link>
        
        <header className="space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-[#7E8FB5]" />
            <span className="text-[#7E8FB5] font-bold uppercase tracking-[0.2em] text-xs">{project.category}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight">{project.title}</h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl border-l-4 border-slate-100 pl-8">
            {project.oneLine}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-24">
          <div className="lg:col-span-2 space-y-24">
            <section className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">项目概览 / Overview</h2>
              <p className="text-lg text-slate-600 leading-[1.8] bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm">
                {project.overview}
              </p>
            </section>

            <section className="space-y-10">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">执行工作流 / Workflow</h2>
              <div className="grid gap-6">
                {project.workflow.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-8 p-10 rounded-[2rem] border border-slate-50 hover:border-slate-200 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                    <div className="text-4xl font-black text-slate-100 group-hover:text-[#7E8FB5]/20 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900">{item.step}</h3>
                      <p className="text-slate-500 leading-relaxed text-[16px]">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-10">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">能力证明 / Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.demonstrates.map((item, index) => (
                  <div key={index} className="p-8 bg-[#FAF9F7] rounded-3xl text-slate-700 text-sm font-semibold border border-slate-100 leading-relaxed relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#7E8FB5] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {project.reflection && (
              <section className="relative p-12 md:p-20 bg-slate-900 rounded-[3rem] overflow-hidden">
                {/* 装饰性引号背景 */}
                <div className="absolute top-10 left-10 text-[10rem] font-serif text-white/5 leading-none pointer-events-none">“</div>
                <div className="relative z-10 space-y-8">
                  <h2 className="text-sm font-bold text-[#7E8FB5] uppercase tracking-[0.3em]">Project Reflection</h2>
                  <p className="text-xl md:text-2xl leading-[1.8] text-slate-300 font-medium italic">
                    {project.reflection}
                  </p>
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-12">
            <div className="space-y-10 sticky top-32 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Core Roles</h3>
                <div className="flex flex-wrap gap-2">
                  {project.myRole.map((role, index) => (
                    <span key={index} className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold border border-slate-100">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Toolkit</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1.5 bg-[#FAF9F7] text-[#7E8FB5] rounded-lg text-xs font-bold border border-[#7E8FB5]/10">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {(project.links.live || project.links.github) && (
                <div className="pt-8 border-t border-slate-50">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full p-4 bg-[#2D3436] text-white rounded-2xl font-bold hover:bg-[#7E8FB5] transition-all shadow-lg active:scale-[0.98]">
                      访问在线作品 <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
