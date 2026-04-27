import React from 'react';
import { workflow } from '../data/workflow';

const Workflow = () => {
  return (
    <section id="workflow" className="section-spacing">
      <div className="container-custom">
        <div className="mb-20 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3436]">我的 AIGC 工作流</h2>
          <p className="text-[#8C867F] max-w-xl mx-auto">
            体系化的创作流程，确保 AI 工具在既定逻辑下稳定产出高质量内容。
          </p>
        </div>
        
        <div className="relative">
          {/* 装饰进度线 - 让直线宽度适配网格内容的宽度 */}
          <div className="hidden lg:block absolute top-[44px] left-[28px] right-[28px] h-px bg-[#F0EEEA]" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {workflow.map((item) => (
              <div key={item.step} className="group relative pt-4">
                <div className="w-14 h-14 bg-white border border-[#F0EEEA] rounded-2xl flex items-center justify-center text-xl font-bold text-[#7E8FB5] shadow-sm mb-8 z-10 relative group-hover:border-[#7E8FB5] group-hover:bg-[#7E8FB5] group-hover:text-white transition-all duration-500">
                  {item.step}
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#2D3436]">{item.title}</h3>
                  <p className="text-[#636E72] text-[14px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
