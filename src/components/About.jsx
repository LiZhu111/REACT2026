import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation'; 

export default function About() {
  const { about, isEnglish } = useTranslation(); 
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < (about.constraints?.thresholdWidth || 1024);
      setIsMobile(mobile);
      if (!mobile) setIsExpanded(true); // 桌面端强制展开
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [about.constraints]);

  // 定义局部动画
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    // 确保使用 relative 且没有奇怪的 h-screen 限制，防止遮挡下方 section
    <section 
      id="about" 
      className={`relative z-20 w-full bg-[#101b39] overflow-hidden ${about.styles.sectionPadding || 'py-32'}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.03),transparent)] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-16 lg:px-32 relative z-10">
        <div className="max-w-5xl">
          
          {/* 1. 顶部标识 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="flex items-center gap-4 mb-12 lg:mb-20"
          >
            <span className={`text-cyan-500/60 font-[400] text-[10px] uppercase ${isEnglish ? 'tracking-[0.5em]' : 'tracking-[0.2em]'}`}>
              {about.archiveLabel}
            </span>
            <div className="h-px w-10 bg-white/10"></div>
          </motion.div>

          {/* 2. 标题 */}
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className={`${about.styles.titleSize} text-white leading-[1.4] ${about.styles.titleBottomMargin}`}
          >
            {about.titleStructure?.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className={item.className}>{item.text}</span>
                {item.break && <br className="hidden md:block" />}
              </React.Fragment>
            ))}
          </motion.h2>

          <div className="space-y-12 lg:space-y-20 max-w-4xl"> 
            {/* 3. 描述正文 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="relative"
            >
              <p className={`text-base lg:text-xl text-slate-300/90 font-[300] border-l-2 border-cyan-500/20 pl-8 lg:pl-12 ${about.styles.descriptionLeading} ${isEnglish ? 'tracking-wide' : 'tracking-normal'}`}>
                {isMobile && !isExpanded 
                  ? about.description.slice(0, about.constraints.mobileMaxChars) + "..." 
                  : about.description}
              </p>

              {isMobile && (
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-6 text-[10px] tracking-[0.2em] uppercase text-cyan-500/80 flex items-center gap-2"
                >
                  <span>{isExpanded ? about.labels.showLess : about.labels.readMore}</span>
                  <motion.span animate={{ y: isExpanded ? -2 : 2 }} transition={{ repeat: Infinity, duration: 1.5 }}>↓</motion.span>
                </button>
              )}
            </motion.div>

            {/* 4. 核心领域 - 优化 AnimatePresence 确保不影响外部布局 */}
            <div className="relative">
              <AnimatePresence initial={false}>
                {(isExpanded || !isMobile) && (
                  <motion.div 
                    key="core-fields"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className={`pt-10 lg:pt-16 border-t border-white/5 flex flex-wrap gap-x-12 lg:gap-x-24 gap-y-8 font-[400] text-slate-400/80 ${about.styles.fieldTagSize} ${about.styles.fieldTagTracking}`}>
                      {about.coreFields.map((field, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (index * 0.05) }} // 稍微加快一点进入速度
                          whileHover={{ x: 10, color: '#22d3ee' }}
                          className="flex items-center gap-4 cursor-default group whitespace-nowrap"
                        >
                          <motion.span 
                            className="bg-cyan-500 rounded-full"
                            style={{ 
                              width: index % 2 === 0 ? '5px' : '3px', 
                              height: index % 2 === 0 ? '5px' : '3px' 
                            }}
                            animate={{ 
                              opacity: [0.3, 0.8, 0.3],
                              boxShadow: ["0 0 0px #22d3ee00", "0 0 10px #22d3ee99", "0 0 0px #22d3ee00"]
                            }}
                            transition={{ duration: 3 + (index % 3), repeat: Infinity }}
                          />
                          <span className={isEnglish ? 'uppercase tracking-wider text-[12px]' : ''}>{field}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}