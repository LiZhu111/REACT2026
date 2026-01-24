import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-[#050a18]">
      <style>
        {`
          @keyframes celestial-pulse {
            0%, 100% {
              text-shadow: 0 0 4px rgba(34, 211, 238, 0.2), 0 0 12px rgba(34, 211, 238, 0.1);
              opacity: 0.6;
            }
            50% {
              text-shadow: 0 0 10px rgba(34, 211, 238, 0.5), 0 0 25px rgba(34, 211, 238, 0.3);
              opacity: 1;
            }
          }
          .celestial-glow {
            animation: celestial-pulse 6s ease-in-out infinite;
            display: inline-block;
          }
        `}
      </style>

      {/* 背景星空 */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.75 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-right md:bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/icons/background-img.jpg')" }} 
      />
      
      {/* 核心过渡：遮罩渐变 */}
      {/* 左侧文字区背后的黑晕 */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050a18] via-[#050a18]/40 to-transparent opacity-95" />
      
      {/* 【新增】底部消融渐变：让星空平滑切入下方的深蓝色 App 背景 */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#101b39] via-[#101b39]/50 to-transparent z-15" />

      {/* 文字内容 */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-10 sm:px-16 lg:px-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-[90px] lg:text-[110px] font-[200] tracking-tight leading-[0.95] mb-10 bg-clip-text text-transparent bg-gradient-to-br from-white via-white/80 to-gray-400 select-none">
            GALAXY <br /> 
            STRUCTURE <span className="font-[100] text-cyan-400/60 celestial-glow">&</span> <br />
            DYNAMICS
          </h1>
          
          <p className="text-sm md:text-base font-[300] tracking-[0.25em] uppercase text-slate-200/90 mb-16 drop-shadow-sm">
            Shanghai Astronomical Observatory · CAS
          </p>

          <div className="flex flex-wrap gap-8">
            <button 
              onClick={() => scrollToSection('research')}
              className="relative px-12 py-4 group transition-all duration-500 rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10"></div>
              <span className="relative z-10 text-white font-[500] tracking-[0.2em] text-[11px] uppercase group-hover:text-cyan-200 transition-colors">
                Explore Research
              </span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-cyan-400 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
            </button>

            <button 
              onClick={() => scrollToSection('member')}
              className="relative px-12 py-4 group transition-all duration-500 rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/5"></div>
              <span className="relative z-10 text-white/60 font-[500] tracking-[0.2em] text-[11px] uppercase group-hover:text-white transition-colors">
                Our Team
              </span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-700"></div>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-10 lg:left-32 z-20 opacity-30 hidden md:block select-none">
        <p className="text-[9px] tracking-[0.15em] text-white font-light uppercase">
          Epoch J2000.0 // 31.23° N, 121.47° E
        </p>
      </div>
    </section>
  );
}