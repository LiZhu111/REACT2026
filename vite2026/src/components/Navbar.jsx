import { useState, useEffect } from 'react';

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 假设当前是英文版，您可以根据路由或状态控制此变量
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
        ? 'bg-[#050a18]/80 backdrop-blur-xl border-b border-white/5 py-4' 
        : 'bg-transparent py-8' 
    }`}>
      <div className="max-w-[1440px] mx-auto px-10 sm:px-16 lg:px-32 flex justify-between items-center">
        
        {/* Logo 部分 */}
        <a href="#" className="flex flex-col group select-none">
          <span className="text-2xl font-[200] text-white tracking-[0.12em] leading-none transition-all group-hover:text-cyan-400">
            GALAXY
          </span>
          <div className="flex items-center gap-1.5 mt-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] tracking-[0.15em] text-white font-[300] uppercase">Structure</span>
            <span className="text-[10px] font-[100] text-cyan-400">&</span>
            <span className="text-[10px] tracking-[0.15em] text-white font-[300] uppercase">Dynamics</span>
          </div>
        </a>

        {/* 桌面端菜单 */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a 
                  href={link.href} 
                  className="text-white/50 hover:text-white text-[13px] font-[400] tracking-[0.15em] uppercase transition-all duration-500"
                >
                  {link.name}
                </a>
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-500 group-hover:w-full shadow-[0_0_8px_rgba(34,211,238,0.4)]"></span>
              </li>
            ))}
          </ul>

          {/* --- 新增：语言切换按钮 --- */}
          <div className="flex items-center ml-4 pl-8 border-l border-white/10">
            <a 
              href={isEnglish ? "/zh" : "/en"} // 此处替换为您实际的中文/英文版跳转路径
              className="group relative flex items-center gap-2 text-cyan-500/80 hover:text-cyan-400 transition-colors"
            >
              <span className="text-[12px] font-[300] tracking-[0.2em] uppercase">
                {isEnglish ? '中文' : 'EN'}
              </span>
              <span className="text-[10px] opacity-40 group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>

        {/* 汉堡按钮 */}
        <button 
          className="lg:hidden relative z-[110] w-8 h-8 flex flex-col justify-center items-end gap-2.5" 
          onClick={() => setActive(!active)}
        >
          <span className={`h-[1px] bg-white/80 transition-all duration-500 ${active ? 'w-8 rotate-45 translate-y-[5.5px]' : 'w-8'}`}></span>
          <span className={`h-[1px] bg-white/80 transition-all duration-500 ${active ? 'w-8 -rotate-45 -translate-y-[5.5px]' : 'w-5'}`}></span>
        </button>
      </div>

      {/* 移动端菜单 */}
      <div className={`fixed inset-0 h-screen bg-[#050a18]/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-10 transition-all duration-700 lg:hidden ${
        active ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        {navLinks.map((link, i) => (
          <a 
            key={link.name}
            href={link.href}
            className={`text-lg font-[300] tracking-[0.2em] text-white/70 hover:text-cyan-400 uppercase transition-all transform ${
              active ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setActive(false)}
          >
            {link.name}
          </a>
        ))}
        
        {/* 移动端语言切换链接 */}
        <a 
          href={isEnglish ? "/zh" : "/en"}
          className={`mt-8 px-6 py-2 border border-cyan-500/30 text-cyan-400 text-sm tracking-[0.3em] uppercase transition-all transform ${
            active ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          onClick={() => setActive(false)}
        >
          {isEnglish ? 'Switch to 中文' : 'Switch to English'}
        </a>
      </div>
    </nav>
  );
}