import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation'; 

export default function About() {
  const { about, isEnglish } = useTranslation(); 
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < (about.constraints?.thresholdWidth || 1024));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [about.constraints]);

  const renderDescription = () => {
    if (isMobile && !isExpanded) {
      return about.description.slice(0, about.constraints.mobileMaxChars) + "...";
    }
    return about.description;
  };

  return (
    <section id="about" className="relative z-20 min-h-[70vh] lg:min-h-[80vh] flex items-center bg-[#101b39] py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.03),transparent)] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-16 lg:px-32 w-full relative z-10">
        <div className="max-w-5xl">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8 lg:mb-16"
          >
            <span className={`text-cyan-500/60 font-[400] text-[9px] lg:text-[10px] uppercase ${isEnglish ? 'tracking-[0.5em]' : 'tracking-[0.2em]'}`}>
              {about.sectionNum || "01"} {about.labels.separator || "//"} {about.sectionTitle}
            </span>
            <div className="h-px w-8 lg:w-12 bg-white/10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className={`text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.4] mb-10 lg:mb-16 ${isEnglish ? 'tracking-tight' : 'tracking-normal'}`}>
              {isEnglish ? (
                about.titleStructure.map((item, index) => (
                  <React.Fragment key={index}>
                    <span className={item.className}>{item.text}</span>
                    {item.break && <br className="hidden lg:block" />}
                  </React.Fragment>
                ))
              ) : (
                <span className="font-[400] opacity-95">{about.sectionTitleZH || "探索星系演化的动力学奥秘"}</span>
              )}
            </h2>

            <div className="space-y-6 max-w-3xl">
              <div className="relative">
                <p className={`text-base lg:text-xl text-slate-300 font-[300] leading-relaxed border-l border-cyan-500/30 pl-6 lg:pl-10 transition-all duration-500 ${isEnglish ? 'tracking-wide' : 'tracking-normal'}`}>
                  {renderDescription()}
                </p>

                {isMobile && (
                  <div className="mt-4">
                    <button 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-[10px] tracking-[0.2em] uppercase text-cyan-500/80 hover:text-cyan-400 flex items-center gap-2 transition-colors"
                    >
                      <span>{isExpanded ? about.labels.showLess : about.labels.readMore}</span>
                      <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>↓</span>
                    </button>
                  </div>
                )}
              </div>

              <AnimatePresence>
                {(!isMobile || isExpanded) && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`pt-6 lg:pt-8 flex flex-wrap gap-x-8 lg:gap-x-16 gap-y-4 font-[400] text-slate-500 ${about.styles.fieldTagSize} ${about.styles.fieldTagTracking}`}
                  >
                    {about.coreFields.map((field, index) => (
                      <div key={index} className="flex items-center gap-2 lg:gap-3 whitespace-nowrap">
                        {/* 闪烁的星光圆点 */}
                        <motion.span 
                          className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
                          animate={{ 
                            // 透明度循环，模拟呼吸闪烁
                            opacity: [0.4, 1, 0.4],
                            // 极轻微的外发光
                            boxShadow: [
                              "0 0 0px rgba(34, 211, 238, 0)",
                              "0 0 10px rgba(34, 211, 238, 0.8)",
                              "0 0 0px rgba(34, 211, 238, 0)"
                            ]
                          }}
                          transition={{ 
                            // 随机时长让每个点闪烁错开，更自然
                            duration: 2 + (index * 0.5) % 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                        />
                        <span>{field}</span>
                      </div>
                    ))}
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