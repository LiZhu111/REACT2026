import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="relative z-20 min-h-[70vh] lg:min-h-[80vh] flex items-center bg-[#101b39] py-20 lg:py-32 overflow-hidden">
      
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.03),transparent)] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-16 lg:px-32 w-full relative z-10">
        <div className="max-w-5xl">
          
          {/* 序号标签 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8 lg:mb-16"
          >
            <span className="text-cyan-500/60 font-[400] text-[9px] lg:text-[10px] tracking-[0.5em] uppercase">01 // Mission</span>
            <div className="h-px w-8 lg:w-12 bg-white/10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* 主标题：增加 line-height (leading-[1.4]) 解决底部截断问题 */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[100] text-white tracking-tight leading-[1.4] mb-10 lg:mb-16 overflow-visible">
              Advancing our understanding of <br className="hidden lg:block" />
              <span className="font-[300] text-cyan-400">Galactic Evolution</span> through <br className="hidden lg:block" />
              computational and observational rigor.
            </h2>

            <div className="space-y-6 max-w-3xl">
              {/* 正文段落：小屏幕下受 isExpanded 控制 */}
              <div className="relative">
                <p className={`text-base lg:text-xl text-slate-300 font-[300] leading-relaxed tracking-wide border-l border-cyan-500/30 pl-6 lg:pl-10 transition-all duration-500 ${
                  !isExpanded ? 'line-clamp-3 lg:line-clamp-none' : 'line-clamp-none'
                }`}>
                  The Galaxy Structure and Dynamics group at Shanghai Astronomical Observatory (SHAO) 
                  specializes in the physical processes that shape galaxies across cosmic time.
                  Our research bridges the gap between massive cosmological simulations and 
                  high-precision sky surveys. We utilize high-resolution numerical simulations 
                  and observational data to probe dark matter and galactic evolution across cosmic time.
                </p>

                {/* 移动端/小屏幕下的 More 按钮 */}
                <div className="lg:hidden mt-4">
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[10px] tracking-[0.2em] uppercase text-cyan-500/80 hover:text-cyan-400 flex items-center gap-2 transition-colors"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                    <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                      ↓
                    </span>
                  </button>
                </div>
              </div>

              {/* 核心领域标签 */}
              <AnimatePresence>
                {(isExpanded || window.innerWidth >= 1024) && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-6 lg:pt-8 flex flex-wrap gap-x-8 lg:gap-x-16 gap-y-4 text-[9px] lg:text-[11px] uppercase tracking-[0.2em] lg:tracking-[0.3em] font-[400] text-slate-500"
                  >
                    <div className="flex items-center gap-2 lg:gap-3 whitespace-nowrap">
                      <span className="w-1 h-1 bg-cyan-500/40"></span>
                      <span>Numerical Simulations</span>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-3 whitespace-nowrap">
                      <span className="w-1 h-1 bg-cyan-500/40"></span>
                      <span>Dark Matter Dynamics</span>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-3 whitespace-nowrap">
                      <span className="w-1 h-1 bg-cyan-500/40"></span>
                      <span>Galactic Archaeology</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}