import React from 'react';
import { Mail, GraduationCap, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-[#F8F7F4]/50">
      <div className="container-custom">
        <div className="glass-card p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
               <h2 className="text-3xl md:text-5xl font-bold text-[#2D3436]">关于我</h2>
               <div className="w-20 h-1.5 bg-[#AFC3D9] rounded-full" />
            </div>
            
            <div className="space-y-6 text-[#636E72] text-lg leading-relaxed">
              <p>
                我是 <span className="text-[#2D3436] font-bold">孟小琪</span>，目前专注于人工智能与数字媒体的交叉探索。
              </p>
              <p>
                我本科阶段接受了严谨的数据科学与大数据技术训练，这赋予了我理性的数据逻辑；研究生期间我转向人工智能与数字媒体，致力于将 AI 的强大能力转化为温情、有质感的内容表达。
              </p>
              <p>
                我追求的不仅是“用 AI 做完一件作品”，而是通过 Prompt 工作流的深度打磨，实现可控、可传承的创意表达。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#F0EEEA]">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#AFC3D9]/10 flex items-center justify-center text-[#7E8FB5]">
                    <GraduationCap size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-[#8C867F] uppercase tracking-wider">Education</p>
                    <p className="text-sm font-bold text-[#2D3436]">数据科学 / 数字媒体</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#AFC3D9]/10 flex items-center justify-center text-[#7E8FB5]">
                    <Briefcase size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-[#8C867F] uppercase tracking-wider">Career Focus</p>
                    <p className="text-sm font-bold text-[#2D3436]">AIGC 内容策划</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div id="contact" className="space-y-12">
             <div className="bg-[#FAF9F7] p-10 rounded-[2.5rem] space-y-8 border border-white">
                <h3 className="text-2xl font-bold text-[#2D3436]">联系方式</h3>
                <div className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-[#F0EEEA] group hover:border-[#7E8FB5] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#F0EEEA] flex items-center justify-center text-[#7E8FB5]">
                    <Mail size={22} />
                  </div>
                  <span className="text-[#2D3436] font-bold text-lg select-all">mengxiaooqi@163.com</span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <a href="/resume.pdf" className="btn-primary flex items-center justify-center gap-3 w-full">
                    下载个人简历
                  </a>
                  <a href="mailto:mengxiaooqi@163.com" className="btn-secondary flex items-center justify-center gap-3 w-full">
                    发送商务邮件
                  </a>
                </div>
             </div>

             <div className="px-6 text-center">
                <p className="text-[#8C867F] text-sm italic">
                  “ AI 是时代的笔触，我愿是那个执笔的人。 ”
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
