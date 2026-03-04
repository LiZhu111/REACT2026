import { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

export default function Navbar({ onToggleLanguage, currentLang, header }) {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 1. 滚动监听：复刻旧版的流畅背景过渡逻辑
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. 修复 Logo 点击：平滑回顶并触发全站特效重置感
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // 模拟重新打开网站的视觉冲击，触发 Hero 动画重演
    setTimeout(() => {
      window.location.hash = ''; 
      window.location.reload(); 
    }, 600);
    
    if (active) setActive(false);
  };

  const handleLangChange = () => {
    if (onToggleLanguage) onToggleLanguage();
    if (active) setActive(false);
  };

  if (!header) return null;

  return (
    <>
      <nav className={`fixed top-0 w-full z-[1000] transition-all duration-1000 ${
        scrolled ? 'bg-[#050a18]/90 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-10' 
      }`}>
        <div className="max-w-[1440px] mx-auto px-10 sm:px-16 lg:px-32 flex justify-between items-center">
          
          {/* Logo 区域：悬停变蓝特效 */}
          <a href="#" onClick={handleLogoClick} className="flex flex-col group select-none cursor-pointer">
            <span className={`text-3xl ${header.styles.logoLine1Font} text-white tracking-[0.15em] transition-colors duration-500 group-hover:text-cyan-400`}>
              {header.logo.line1}
            </span>
            <div className="flex items-center gap-1.5 mt-2 text-[12px] uppercase opacity-80">
              <span className="text-gray-300 group-hover:text-white transition-colors duration-500">{header.logo.line2.split(header.logo.separator)[0]}</span>
              <span className="text-cyan-500 group-hover:animate-pulse">{header.logo.separator}</span>
              <span className="text-gray-300 group-hover:text-white transition-colors duration-500">{header.logo.line2.split(header.logo.separator)[1]}</span>
            </div>
          </a>

          {/* 桌面端导航：星光线条特效 */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-10">
              {header.navLinks.map((link) => (
                <li key={link.name} className="relative group py-2">
                  <a href={link.href} className="text-white/70 hover:text-white uppercase text-[15px] transition-all tracking-[0.2em]">
                    {link.name}
                  </a>
                  {/* 星光流动线条渲染层 */}
                  <span className="star-line-container">
                    <span className="star-line-glow"></span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center ml-4 pl-8 border-l border-white/20">
              <button 
                onClick={handleLangChange} 
                className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors bg-transparent border-none cursor-pointer"
              >
                <span className="text-[14px] uppercase font-[400]">
                  {currentLang === 'en' ? "中文" : "EN"}
                </span>
                <span className="text-[12px] opacity-60 group-hover:rotate-180 transition-transform duration-700">↺</span>
              </button>
            </div>
          </div>

          {/* 移动端汉堡菜单 */}
          <button className="lg:hidden w-8 h-8 flex flex-col justify-center items-end gap-2.5 relative z-[1001]" onClick={() => setActive(!active)}>
            <span className={`h-[1.5px] bg-white transition-all duration-300 ${active ? 'w-8 rotate-45 translate-y-[6px]' : 'w-8'}`}></span>
            <span className={`h-[1.5px] bg-white transition-all duration-300 ${active ? 'opacity-0' : 'w-5'}`}></span>
            <span className={`h-[1.5px] bg-white transition-all duration-300 ${active ? 'w-8 -rotate-45 -translate-y-[6px]' : 'w-8'}`}></span>
          </button>
        </div>

        {/* 移动端菜单层 */}
        <div className={`fixed inset-0 h-screen bg-[#050a18]/98 backdrop-blur-3xl flex flex-col items-center justify-center transition-all lg:hidden ${
          active ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
          <div className="flex flex-col items-center gap-8 w-full">
            {header.navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-2xl text-white/80 hover:text-cyan-400 uppercase" onClick={() => setActive(false)}>
                {link.name}
              </a>
            ))}
            <button 
              onClick={handleLangChange}
              className="mt-6 px-8 py-3 border border-cyan-500/40 text-cyan-400 text-lg uppercase bg-transparent"
            >
              {currentLang === 'en' ? "切换至中文版" : "Switch to English"}
            </button>
          </div>
        </div>
      </nav>

      {/* 注入星光线条特效的专属 CSS */}
      <style>{`
        .star-line-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #22d3ee, transparent);
          transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          overflow: hidden;
        }

        .group:hover .star-line-container {
          width: 100%;
        }

        .star-line-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          animation: star-flow 2s infinite linear;
          box-shadow: 0 0 8px #22d3ee;
        }

        @keyframes star-flow {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </>
  );
}