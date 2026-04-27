import React from 'react';
import { assignments } from '../data/assignments';

const Assignments = () => {
  return (
    <section id="services" className="section-spacing">
      <div className="container-custom">
        <div className="mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3436]">你可以交给我的工作</h2>
          <p className="text-[#8C867F] text-lg max-w-2xl">
            看完我的作品集后，希望你能清楚地知道，我适合承担哪些 AIGC 内容与数字媒体相关任务。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {assignments.map((item) => (
            <div key={item.id} className="glass-card p-10 group">
              <div className="w-10 h-10 rounded-xl bg-[#F4F0F8] text-[#8E79D6] flex items-center justify-center mb-8 font-bold text-sm">
                0{item.id}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2D3436] group-hover:text-[#7E8FB5] transition-colors">{item.title}</h3>
              <p className="text-[#636E72] leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assignments;
