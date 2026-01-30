import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../data/siteContent'; // 确保路径正确

export default function About() {
  const { about } = siteContent;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 监听窗口宽度，处理响应式显示逻辑
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < about.constraints.thresholdWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [about.constraints.thresholdWidth]);

  // 处理描述文本渲染：仅在移动端且未展开时应用字数限制
  const renderDescription = () => {
    if (isMobile && !isExpanded) {
      return about.description.slice(0, about.constraints.mobileMaxChars) + "...";
    }
    return about.description;
  };

  return (
    <section id="about" className="relative z-20 min-h-[70vh] lg:min-h-[80vh] flex items-center bg-[#101b39] py-20 lg:py-32 overflow-hidden">
      
      {/* 背景装饰保持不变 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.03),transparent)] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-16 lg:px-32 w-full relative z-10">
        <div className="max-w-5xl">
          
          {/* 序号与标题标签 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8 lg:mb-16"
          >
            <span className="text-cyan-500/60 font-[400] text-[9px] lg:text-[10px] tracking-[0.5em] uppercase">
              {about.sectionNum} {about.labels.separator} {about.sectionTitle}
            </span>
            <div className="h-px w-8 lg:w-12 bg-white/10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* 动态标题：通过 map 渲染，完全零硬编码 */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.4] mb-10 lg:mb-16">
              {about.titleStructure.map((item, index) => (
                <React.Fragment key={index}>
                  <span className={item.className}>{item.text}</span>
                  {item.break && <br className="hidden lg:block" />}
                </React.Fragment>
              ))}
            </h2>

            <div className="space-y-6 max-w-3xl">
              {/* 正文：应用字数限制逻辑 */}
              <div className="relative">
                <p className="text-base lg:text-xl text-slate-300 font-[300] leading-relaxed tracking-wide border-l border-cyan-500/30 pl-6 lg:pl-10 transition-all duration-500">
                  {renderDescription()}
                </p>

                {/* 移动端展开/收起按钮 */}
                {isMobile && (
                  <div className="mt-4">
                    <button 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-[10px] tracking-[0.2em] uppercase text-cyan-500/80 hover:text-cyan-400 flex items-center gap-2 transition-colors"
                    >
                      <span>{isExpanded ? about.labels.showLess : about.labels.readMore}</span>
                      <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                        ↓
                      </span>
                    </button>
                  </div>
                )}
              </div>

              {/* 核心领域标签：动态渲染数组 */}
              <AnimatePresence>
                {(!isMobile || isExpanded) && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-6 lg:pt-8 flex flex-wrap gap-x-8 lg:gap-x-16 gap-y-4 text-[9px] lg:text-[11px] uppercase tracking-[0.2em] lg:tracking-[0.3em] font-[400] text-slate-500"
                  >
                    {about.coreFields.map((field, index) => (
                      <div key={index} className="flex items-center gap-2 lg:gap-3 whitespace-nowrap">
                        <span className="w-1 h-1 bg-cyan-500/40"></span>
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