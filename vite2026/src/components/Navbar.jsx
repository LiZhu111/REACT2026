import { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 从 Hook 获取完全抽象的数据
  const { header, langData, targetPath } = useTranslation();

  // 文字限制工具函数
  const truncate = (text, limit) => {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit) : text;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'unset';
  }, [active]);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-1000 ${
      scrolled 
        ? 'bg-[#050a18]/90 backdrop-blur-xl border-b border-white/10 py-4' 
        : 'bg-transparent py-10' 
    }`}>
      <div className="max-w-[1440px] mx-auto px-10 sm:px-16 lg:px-32 flex justify-between items-center">
        
        {/* 1. Logo 部分：实现零硬编码与字符限制 */}
        <a href="/" className="flex flex-col group select-none">
          <span className={`text-3xl ${header.styles.logoLine1Font} text-white tracking-[0.15em] leading-none transition-all group-hover:text-cyan-400`}>
            {truncate(header.logo.line1, header.constraints.logoLine1Max)}
          </span>
          <div className="flex items-center gap-1.5 mt-2 opacity-80 group-hover:opacity-100 transition-opacity text-[12px] uppercase">
            <span className={`tracking-[0.2em] text-gray-300 ${header.styles.logoLine2Font}`}>
              {truncate(header.logo.line2.split(header.logo.separator)[0].trim(), header.constraints.logoLine2Max)}
            </span>
            <span className="font-[300] text-cyan-500">{header.logo.separator}</span>
            <span className={`tracking-[0.2em] text-gray-300 ${header.styles.logoLine2Font}`}>
              {truncate(header.logo.line2.split(header.logo.separator)[1]?.trim(), header.constraints.logoLine2Max)}
            </span>
          </div>
        </a>

        {/* 2. 桌面端菜单：样式完全由数据驱动 */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {header.navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a 
                  href={link.href} 
                  className={`text-white/70 hover:text-white text-[15px] ${header.styles.navFontWeight} ${header.styles.navTracking} uppercase transition-all duration-500`}
                >
                  {truncate(link.name, header.constraints.navLinkMax)}
                </a>
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-500 group-hover:w-full shadow-[0_0_12px_rgba(34,211,238,0.6)]"></span>
              </li>
            ))}
          </ul>

          <div className="flex items-center ml-4 pl-8 border-l border-white/20">
            <a href={targetPath} className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <span className={`text-[14px] font-[400] ${header.styles.langBtnTracking} uppercase`}>
                {langData.short}
              </span>
              <span className="text-[12px] opacity-60 group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>

        {/* 汉堡按钮 */}
        <button className="lg:hidden relative z-[110] w-8 h-8 flex flex-col justify-center items-end gap-2.5" onClick={() => setActive(!active)}>
          <span className={`h-[1.5px] bg-white transition-all duration-500 ${active ? 'w-8 rotate-45 translate-y-[6px]' : 'w-8'}`}></span>
          <span className={`h-[1.5px] bg-white transition-all duration-500 ${active ? 'w-8 -rotate-45 -translate-y-[6px]' : 'w-5'}`}></span>
        </button>
      </div>

      {/* 3. 移动端全屏菜单 */}
      <div className={`fixed inset-0 h-screen bg-[#050a18]/98 backdrop-blur-3xl flex flex-col items-center transition-all duration-700 lg:hidden overflow-y-auto ${
        active ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="min-h-[120px] w-full shrink-0" />
        <div className="flex flex-col items-center gap-8 pb-20 w-full">
          {header.navLinks.map((link, i) => (
            <a 
              key={link.name}
              href={link.href}
              className={`text-2xl font-[300] tracking-[0.2em] text-white/80 hover:text-cyan-400 uppercase transition-all transform ${active ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setActive(false)}
            >
              {truncate(link.name, header.constraints.navLinkMax)}
            </a>
          ))}
          <a 
            href={targetPath}
            className={`mt-6 px-8 py-3 border border-cyan-500/40 text-cyan-400 text-lg tracking-[0.2em] uppercase transition-all transform ${active ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${header.navLinks.length * 100}ms` }}
            onClick={() => setActive(false)}
          >
            {langData.long}
          </a>
        </div>
      </div>
    </nav>
  );
}