import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

export default function Hero() {
  // 修改点 1：解构出 isEnglish，让组件感知语言变化
  const { hero, isEnglish } = useTranslation();
  const [showGlow, setShowGlow] = useState(false); 
  const [isGlowFinished, setIsGlowFinished] = useState(false); 

  // 修改点 2：语言切换时，重置动画状态
  useEffect(() => {
    setShowGlow(false);
    setIsGlowFinished(false);
  }, [isEnglish]);

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

  if (!hero) return null;

  return (
    // 修改点 3：添加关键 key。key 变化 = 组件强制重绘 = 文字更新
    <section 
      key={isEnglish ? 'hero-en' : 'hero-zh'}
      className="relative min-h-screen w-full flex flex-col justify-center bg-[#050a18] overflow-hidden"
    >
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
            animation: shooting-star 4s cubic-bezier(0.4, 0, 0.2, 1) 1 forwards;
            opacity: ${showGlow ? 1 : 0};
            transition: opacity 1s ease-in;
          }
        `}
      </style>

      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.75 }}
        transition={{ duration: 2.5 }}
        className="absolute inset-0 z-0 bg-cover bg-right md:bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('${hero.backgroundImage || "/assets/icons/background-img.jpg"}')` }} 
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050a18] via-[#050a18]/40 to-transparent opacity-95 pointer-events-none" />

      <div className={`hero-container relative z-20 w-full max-w-[1440px] mx-auto px-10 sm:px-16 lg:px-32 flex flex-col pt-0 pb-24 ${hero.styles?.wrapperPadding || ''}`}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8 }}
          onAnimationComplete={() => setShowGlow(true)} 
          className="max-w-4xl"
        >
          <h1 className={`hero-title ${hero.styles?.titleSize} ${hero.styles?.titleFontFamily} tracking-tight leading-[1.1] ${hero.styles?.titleMarginBottom} text-white select-none flex flex-wrap items-center`}>
            {hero.titleStructure?.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className={item.className || ""}>
                  {truncate(item.text, hero.constraints?.lineMaxChars || 50)}
                </span>
                {item.hasConnector && (
                  <span className={`${hero.styles?.connectorFontFamily} text-cyan-500 celestial-glow mx-3`}>
                    {hero.connector || "&"}
                  </span>
                )}
                {item.break && <div className="basis-full h-0" />}
              </React.Fragment>
            ))}
          </h1>
          
          <p className={`hero-subtitle ${hero.styles?.subtitleSize} font-[300] ${hero.styles?.subtitleTracking} text-slate-200/90 ${hero.styles?.subtitleMarginBottom} drop-shadow-sm max-w-2xl`}>
            {hero.subtitleStructure ? hero.subtitleStructure.map((part, i) => (
              <span key={i} className={`${part.highlight ? "text-cyan-400 font-[400]" : ""} ${part.className || ""}`}>
                {part.text}
              </span>
            )) : truncate(hero.subtitle, hero.constraints?.subtitleMaxChars || 200)}
          </p>
          
          <div className={`flex items-center gap-4 ${hero.styles?.taglineMarginBottom} mt-6`}>
            <div className="h-px w-8 bg-cyan-500/50"></div>
            <span className={`relative text-white/40 font-mono ${hero.styles?.taglineTracking} uppercase ${hero.styles?.taglineSize}`}>
              <span className="opacity-100">{hero.tagline}</span>
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

          <div className="flex flex-wrap items-center gap-4 sm:gap-8 relative z-30">
            {hero.buttons?.map((btn, index) => (
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
                <span className={`relative z-10 font-[500] ${hero.styles?.buttonTracking} ${hero.styles?.buttonTextSize || "text-[11px]"} uppercase transition-colors ${
                  btn.primary ? 'text-white group-hover:text-cyan-200' : 'text-white/60 group-hover:text-white'
                }`}>
                  {btn.text}
                </span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-cyan-400 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}