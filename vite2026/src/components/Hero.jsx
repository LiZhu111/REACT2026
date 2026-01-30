import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/siteContent';

export default function Hero() {
  const { hero } = siteContent;

  // 文字限制处理函数：确保内容不会超出设计的布局边界
  const truncate = (text, limit) => {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-start min-[900px]:items-center justify-start bg-[#050a18] overflow-visible">
      <style>
        {`
          @keyframes celestial-pulse {
            0%, 100% { text-shadow: 0 0 4px rgba(34, 211, 238, 0.2); opacity: 0.6; }
            50% { text-shadow: 0 0 10px rgba(34, 211, 238, 0.5); opacity: 1; }
          }
          .celestial-glow { animation: celestial-pulse 6s ease-in-out infinite; display: inline-block; }
          @media (max-height: 750px) {
            .hero-content-wrapper { padding-top: 140px !important; padding-bottom: 60px !important; }
            .hero-title { font-size: clamp(2.5rem, 12vh, 5.5rem) !important; line-height: 1.0 !important; }
          }
        `}
      </style>

      {/* 背景图引用 */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.75 }}
        transition={{ duration: 2.5 }}
        className="absolute inset-0 z-0 bg-cover bg-right md:bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('${hero.backgroundImage}')` }} 
      />
      
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050a18] via-[#050a18]/40 to-transparent opacity-95 pointer-events-none" />

      <div className="hero-content-wrapper relative z-20 w-full max-w-[1440px] mx-auto px-10 sm:px-16 lg:px-32 pt-32 min-[900px]:pt-0 flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8 }}
          className="max-w-4xl"
        >
          {/* 标题：带字数限制与动态式样 */}
          <h1 className={`hero-title ${hero.styles.titleSize} ${hero.styles.titleFontFamily} tracking-tight leading-[0.95] mb-10 bg-clip-text text-transparent bg-gradient-to-br from-white via-white/80 to-gray-400 select-none`}>
            {truncate(hero.title.line1, hero.constraints.lineMaxChars)} <br /> 
            {truncate(hero.title.line2, hero.constraints.lineMaxChars)} 
            <span className={`${hero.styles.connectorFontFamily} text-cyan-400/60 celestial-glow mx-2`}>
              {hero.title.connector}
            </span> <br />
            {truncate(hero.title.line3, hero.constraints.lineMaxChars)}
          </h1>
          
          {/* 副标题：带字数限制与动态式样 */}
          <p className={`hero-subtitle ${hero.styles.subtitleSize} font-[300] ${hero.styles.subtitleTracking} uppercase text-slate-200/90 mb-16 drop-shadow-sm`}>
            {truncate(hero.subtitle, hero.constraints.subtitleMaxChars)}
          </p>

          <div className="flex flex-wrap gap-6 sm:gap-8 relative z-30">
            {hero.buttons.map((btn, index) => (
              <button 
                key={index}
                onClick={() => scrollToSection(btn.targetId)}
                className={`relative px-8 sm:px-12 py-3 sm:py-4 group transition-all duration-500 rounded-sm overflow-hidden ${
                  btn.primary ? 'bg-white/5' : 'bg-white/[0.02]'
                }`}
              >
                <div className={`absolute inset-0 border transition-all duration-500 ${
                  btn.primary ? 'border-white/20 group-hover:border-cyan-500/50' : 'border-white/10 group-hover:border-white/40'
                }`}></div>
                <span className={`relative z-10 font-[500] tracking-[0.2em] text-[10px] sm:text-[11px] uppercase transition-colors ${
                  btn.primary ? 'text-white group-hover:text-cyan-200' : 'text-white/60 group-hover:text-white'
                }`}>
                  {truncate(btn.text, 20)}
                </span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-cyan-400 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 底部 Tagline：带字数限制 */}
      <div className="absolute bottom-12 left-10 lg:left-32 z-20 opacity-30 hidden min-[1200px]:min-[max-height:800px]:block select-none">
        <p className={`${hero.styles.taglineSize} tracking-[0.15em] text-white font-light uppercase`}>
          {truncate(hero.tagline, hero.constraints.taglineMaxChars)}
        </p>
      </div>
    </section>
  );
}