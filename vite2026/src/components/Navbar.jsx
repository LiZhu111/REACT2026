import { useState, useEffect } from 'react';

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const isEnglish = true; 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Members', href: '#member' },
    { name: 'Opportunities', href: '#opportunities' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-1000 ${
      scrolled 
        ? 'bg-[#050a18]/90 backdrop-blur-xl border-b border-white/10 py-4' 
        : 'bg-transparent py-10' 
    }`}>
      <div className="max-w-[1440px] mx-auto px-10 sm:px-16 lg:px-32 flex justify-between items-center">
        
        {/* Logo 部分：增强对比度 */}
        <a href="#" className="flex flex-col group select-none">
          <span className="text-3xl font-[300] text-white tracking-[0.15em] leading-none transition-all group-hover:text-cyan-400">
            GALAXY
          </span>
          <div className="flex items-center gap-1.5 mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
            {/* 副标题从 10px 提升至 12px */}
            <span className="text-[12px] tracking-[0.2em] text-gray-300 font-[400] uppercase">Structure</span>
            <span className="text-[12px] font-[300] text-cyan-500">&</span>
            <span className="text-[12px] tracking-[0.2em] text-gray-300 font-[400] uppercase">Dynamics</span>
          </div>
        </a>

        {/* 桌面端菜单 */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a 
                  href={link.href} 
                  /* 字体从 13px 提升至 15px，颜色从 50% 透明提升至 70% */
                  className="text-white/70 hover:text-white text-[15px] font-[450] tracking-[0.12em] uppercase transition-all duration-500"
                >
                  {link.name}
                </a>
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-500 group-hover:w-full shadow-[0_0_12px_rgba(34,211,238,0.6)]"></span>
              </li>
            ))}
          </ul>

          {/* 语言切换按钮 */}
          <div className="flex items-center ml-4 pl-8 border-l border-white/20">
            <a 
              href={isEnglish ? "/zh" : "/en"}
              className="group relative flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {/* 语言文字从 12px 提升至 14px */}
              <span className="text-[14px] font-[400] tracking-[0.15em] uppercase">
                {isEnglish ? '中文' : 'EN'}
              </span>
              <span className="text-[12px] opacity-60 group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>

        {/* 汉堡按钮（移动端）：稍稍加粗线条 */}
        <button 
          className="lg:hidden relative z-[110] w-8 h-8 flex flex-col justify-center items-end gap-2.5" 
          onClick={() => setActive(!active)}
        >
          <span className={`h-[1.5px] bg-white transition-all duration-500 ${active ? 'w-8 rotate-45 translate-y-[6px]' : 'w-8'}`}></span>
          <span className={`h-[1.5px] bg-white transition-all duration-500 ${active ? 'w-8 -rotate-45 -translate-y-[6px]' : 'w-5'}`}></span>
        </button>
      </div>

      {/* 移动端菜单：同样提升字体大小 */}
      <div className={`fixed inset-0 h-screen bg-[#050a18]/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-12 transition-all duration-700 lg:hidden ${
        active ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        {navLinks.map((link, i) => (
          <a 
            key={link.name}
            href={link.href}
            /* 移动端文字提升至 2xl (24px) */
            className={`text-2xl font-[300] tracking-[0.2em] text-white/80 hover:text-cyan-400 uppercase transition-all transform ${
              active ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setActive(false)}
          >
            {link.name}
          </a>
        ))}
        
        <a 
          href={isEnglish ? "/zh" : "/en"}
          className={`mt-10 px-8 py-3 border border-cyan-500/40 text-cyan-400 text-lg tracking-[0.2em] uppercase transition-all transform ${
            active ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          onClick={() => setActive(false)}
        >
          {isEnglish ? '中文版' : 'English Version'}
        </a>
      </div>
    </nav>
  );
}