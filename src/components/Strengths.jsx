import React from 'react';
import { strengths } from '../data/strengths';
import { Sparkles, Layout, Zap, User } from 'lucide-react';

const icons = [
  <Sparkles size={24} strokeWidth={1.5} />, 
  <Layout size={24} strokeWidth={1.5} />, 
  <Zap size={24} strokeWidth={1.5} />, 
  <User size={24} strokeWidth={1.5} />
];

const Strengths = () => {
  return (
    <section id="strengths" className="section-spacing bg-[#F8F7F4]/50">
      <div className="container-custom">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">我的个人优势</h2>
          <div className="w-12 h-1 bg-[#7E8FB5]/20 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {strengths.map((item, index) => (
            <div key={item.id} className="flex gap-8 p-10 rounded-[2.5rem] bg-white border border-[#F0EEEA] hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#AFC3D9]/10 flex items-center justify-center text-[#7E8FB5]">
                {icons[index % icons.length]}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#2D3436]">{item.title}</h3>
                <p className="text-[#636E72] leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
