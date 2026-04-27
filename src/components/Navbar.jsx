import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-xl border-b border-[#F0EEEA]/50">
      <div className="container-custom h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-[#2D3436]">
          孟小琪 <span className="text-xs font-normal text-[#8C867F] ml-1 uppercase tracking-wider">AIGC Portfolio</span>
        </Link>
        <div className="hidden md:flex items-center space-x-10 text-[13px] font-semibold tracking-wide">
          <a href="/#services" className="text-[#636E72] hover:text-[#7E8FB5] transition-colors leading-none">技能服务</a>
          <a href="/#strengths" className="text-[#636E72] hover:text-[#7E8FB5] transition-colors leading-none">个人优势</a>
          <a href="/#projects" className="text-[#636E72] hover:text-[#7E8FB5] transition-colors leading-none">精选项目</a>
          <a href="/#workflow" className="text-[#636E72] hover:text-[#7E8FB5] transition-colors leading-none">工作流</a>
          <a href="/#about" className="text-[#2D3436] px-5 py-2 bg-[#AFC3D9]/15 rounded-full hover:bg-[#7E8FB5] hover:text-white transition-all leading-none flex items-center justify-center">关于与联系</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
