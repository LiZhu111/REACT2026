import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#050a18] pt-40 pb-16 border-t border-white/5 mt-60">
      
      {/* 顶部中央：回到顶部流星按钮 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button 
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-4 transition-all"
        >
          {/* 垂直流星引导线 */}
          <div className="relative w-px h-16 bg-white/10 overflow-hidden">
            <div className="absolute inset-0 w-full h-1/2 bg-gradient-to-t from-cyan-500 via-cyan-400 to-transparent group-hover:h-full transition-all duration-700"></div>
          </div>
          
          <span className="text-[10px] tracking-[0.6em] text-cyan-400/40 group-hover:text-cyan-400 uppercase font-[200] transition-colors">
            Back to Top
          </span>
          
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_12px_#22d3ee] group-hover:scale-125 transition-all"></div>
        </button>
      </div>

      {/* 页脚主体内容：遵循左对齐原则 */}
      <div className="max-w-[1440px] mx-auto px-10 sm:px-16 lg:px-32">
        
        {/* 上半部分：机构信息与导航 */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-32">
          
          {/* 左侧：品牌与地址 (强左对齐) */}
          <div className="max-w-xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-[200] tracking-widest text-white leading-tight">
                SHAO <br />
                <span className="text-cyan-500/50 text-base italic tracking-[0.2em]">Galaxy Dynamics Group</span>
              </h2>
              <div className="h-px w-12 bg-cyan-500/30"></div>
            </div>

            <div className="space-y-2">
              <p className="text-gray-400 text-xs tracking-[0.2em] uppercase font-[300] leading-loose">
                Shanghai Astronomical Observatory, <br />
                Chinese Academy of Sciences
              </p>
              <p className="text-gray-600 text-[10px] tracking-[0.1em] font-[200]">
                80 Nandan Road, Shanghai 200030, China
              </p>
            </div>
          </div>

          {/* 右侧：快速链接 (在大屏下也保持左对齐风格的排布) */}
          <div className="flex flex-wrap gap-x-20 gap-y-10">
            <div className="space-y-6">
              <h4 className="text-[10px] tracking-[0.4em] text-cyan-500/40 uppercase font-[400]">Navigation</h4>
              <ul className="space-y-4 text-[11px] tracking-[0.2em] uppercase font-[300] text-gray-500">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors block">About Group</a></li>
                <li><a href="#research" className="hover:text-cyan-400 transition-colors block">Research Archive</a></li>
                <li><a href="#member" className="hover:text-cyan-400 transition-colors block">Team Members</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] tracking-[0.4em] text-cyan-500/40 uppercase font-[400]">Resources</h4>
              <ul className="space-y-4 text-[11px] tracking-[0.2em] uppercase font-[300] text-gray-500">
                <li><a href="https://www.shao.ac.cn" target="_blank" className="hover:text-cyan-400 transition-colors block">SHAO Website</a></li>
                <li><a href="https://english.cas.cn" target="_blank" className="hover:text-cyan-400 transition-colors block">CAS Global</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 底部：版权声明 */}
        <div className="mt-32 pt-12 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-start gap-6">
          <p className="text-[9px] tracking-[0.3em] text-gray-600 uppercase font-[200]">
            © {new Date().getFullYear()} Galactic Dynamics Group. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-[9px] tracking-[0.2em] text-gray-700 uppercase font-[200]">
            <span>Engineered with Precision</span>
            <div className="w-1 h-1 rounded-full bg-gray-800"></div>
            <span>Shanghai, CN</span>
          </div>
        </div>
      </div>

      {/* 装饰性背景：右下角淡淡的星系标识 */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    </footer>
  );
}