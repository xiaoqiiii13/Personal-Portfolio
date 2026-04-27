import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const tags = ["AIGC 策划", "Prompt 设计", "视觉叙事", "数字体验"];

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
      {/* 柔和装饰光斑 - 优化后的流动感 */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#EBD8C3] blur-[100px] opacity-25 -z-10 rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#AFC3D9] blur-[100px] opacity-20 -z-10 rounded-full" />

      <div className="container-custom flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div className="flex-[1.2] space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-[6.5rem] portfolio-title">
              孟小琪
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-[#7E8FB5] tracking-[0.2em] uppercase">
              AI Content & Digital Media
            </h2>
            <p className="text-lg md:text-xl text-[#8C867F] max-w-xl leading-relaxed mx-auto md:mx-0">
              专注于将 AI 技术转化为高质量的视觉叙事与数字内容体验。通过“AI 提效 + 人工审美”重塑未来媒体工作流。
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {tags.map((tag, index) => (
              <span key={index} className="px-4 py-2 border border-[#E8E5E0] bg-white/50 backdrop-blur-sm rounded-full text-xs font-bold text-[#8C867F] tracking-widest uppercase">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-center md:justify-start gap-5 pt-4">
            <a href="#projects" className="btn-primary flex items-center gap-2 group">
              精选作品 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="btn-secondary">
              关于我
            </a>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-[400px]">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#F3F1ED] rounded-[2.5rem] -z-10 group-hover:rotate-3 transition-transform duration-700" />
            <div className="aspect-[4/5] rounded-[2rem] bg-white shadow-2xl overflow-hidden border-8 border-white">
              <img 
                src="/me.jpg" 
                alt="Xiaoqi Meng" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
