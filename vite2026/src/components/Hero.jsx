import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

export default function Hero() {
  const { hero } = useTranslation();
  const [showGlow, setShowGlow] = useState(false); 
  const [isGlowFinished, setIsGlowFinished] = useState(false); 

  const truncate = (text, limit) => {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit) : text;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center bg-[#050a18] overflow-hidden">
      <style>
        {`
          @keyframes celestial-pulse {
            0%, 100% { text-shadow: 0 0 4px rgba(34, 211, 238, 0.2); opacity: 0.6; }
            50% { text-shadow: 0 0 10px rgba(34, 211, 238, 0.5); opacity: 1; }
          }
          .celestial-glow { animation: celestial-pulse 6s ease-in-out infinite; display: inline-block; }
          
          @keyframes shooting-star {
            0% { background-position: -150% 0; }
            100% { background-position: 150% 0; }
          }

          .animate-tagline-glow {
            background: linear-gradient(
              90deg, 
              transparent 0%, 
              transparent 40%, 
              rgba(34, 211, 238, 0.8) 50%, 
              transparent 60%, 
              transparent 100%
            );
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            display: inline-block;
            
            /* 关键点 1：使用 1 forwards 确保动画结束后停留在 150% 的位置（不可见），不会跳回起点 */
            animation: shooting-star 4s cubic-bezier(0.4, 0, 0.2, 1) 1 forwards;
            
            opacity: ${showGlow ? 1 : 0};
            transition: opacity 1s ease-in;
          }

          @media (max-height: 650px) {
            .hero-container { 
              padding-top: 140px !important; 
              padding-bottom: 60px !important; 
            }
          }
        `}
      </style>

      {/* 背景层 */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.75 }}
        transition={{ duration: 2.5 }}
        className="absolute inset-0 z-0 bg-cover bg-right md:bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('${hero.backgroundImage || "/assets/icons/background-img.jpg"}')` }} 
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050a18] via-[#050a18]/40 to-transparent opacity-95 pointer-events-none" />

      <div className={`hero-container relative z-20 w-full max-w-[1440px] mx-auto px-10 sm:px-16 lg:px-32 flex flex-col pt-32 pb-20 ${hero.styles.wrapperPadding}`}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8 }}
          onAnimationComplete={() => setShowGlow(true)} 
          className="max-w-4xl"
        >
          {/* 标题 */}
          <h1 className={`hero-title ${hero.styles.titleSize} ${hero.styles.titleFontFamily} tracking-tight leading-[1.1] mb-6 sm:mb-10 text-white select-none flex flex-wrap items-center`}>
            {hero.titleStructure.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className={item.className || ""}>
                  {truncate(item.text, hero.constraints.lineMaxChars)}
                </span>
                {item.hasConnector && (
                  <span className={`${hero.styles.connectorFontFamily} text-cyan-500 celestial-glow mx-3`}>
                    {hero.connector || "&"}
                  </span>
                )}
                {item.break && <div className="basis-full h-0" />}
              </React.Fragment>
            ))}
          </h1>
          
          {/* 副标题 */}
          <p className={`hero-subtitle ${hero.styles.subtitleSize} font-[300] ${hero.styles.subtitleTracking} text-slate-200/90 mb-10 sm:mb-16 drop-shadow-sm max-w-2xl`}>
            {hero.subtitleStructure ? hero.subtitleStructure.map((part, i) => (
              <span 
                key={i} 
                className={`
                  ${part.highlight ? "text-cyan-400 font-[400]" : ""} 
                  ${part.className || ""}
                `}
              >
                {part.text}
              </span>
            )) : truncate(hero.subtitle, hero.constraints.subtitleMaxChars)}
          </p>
          
          {/* Tagline 部分 */}
          <div className={`flex items-center gap-4 ${hero.styles.taglineMarginBottom} mt-6`}>
            <div className="h-px w-8 bg-cyan-500/50"></div>
            <span className={`relative text-white/40 font-mono ${hero.styles.taglineTracking} uppercase ${hero.styles.taglineSize}`}>
              <span className="opacity-100">{hero.tagline}</span>
              
              {/* 关键点 2：双保险。forwards 停住动画，onAnimationEnd 移除 DOM */}
              {showGlow && !isGlowFinished && (
                <span 
                  className="absolute inset-0 animate-tagline-glow text-transparent pointer-events-none"
                  onAnimationEnd={() => setIsGlowFinished(true)} 
                >
                  {hero.tagline}
                </span>
              )}
            </span>
          </div>

          {/* 按钮与链接 */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 relative z-30">
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
                <span className={`relative z-10 font-[500] ${hero.styles.buttonTracking || "tracking-[0.2em]"} ${hero.styles.buttonTextSize || hero.styles.btnTextSize || "text-[10px] sm:text-[11px]"} uppercase transition-colors ${
                  btn.primary ? 'text-white group-hover:text-cyan-200' : 'text-white/60 group-hover:text-white'
                }`}>
                  {btn.text}
                </span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-cyan-400 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
              </button>
            ))}

            <a 
              href="#publications" 
              className="ml-2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/40 hover:text-cyan-400 transition-colors duration-300"
            >
              
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}