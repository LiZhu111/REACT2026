import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { siteContent } from '../data/siteContent'; // 关键引用

export default function Opportunities() {
  const { opportunities: opp } = siteContent; // 解构数据
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 动态截断逻辑
  const displayContent = isMobile && !isExpanded 
    ? opp.content.slice(0, 160) + "..." 
    : opp.content;

  return (
    <section id="opportunities" className="scroll-mt-40 relative">
      <ScrollReveal>
        <div className="text-cyan-500/40 font-[100] text-xs tracking-[0.5em] mb-4 uppercase">
          {opp.archiveLabel} {/* 动态序号标题 */}
        </div>
        <h2 className="text-4xl sm:text-5xl font-[200] tracking-[0.1em] uppercase mb-16 border-b border-white/5 pb-10">
          {opp.sectionTitle}
        </h2>
      </ScrollReveal>

      <div className="relative">
        <ScrollReveal delay={200}>
          <div className="max-w-4xl">
            <p className="text-gray-400 text-lg sm:text-xl font-[300] leading-relaxed transition-all duration-500">
              {displayContent}
            </p>
            
            {isMobile && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="mt-6 text-[10px] tracking-[0.3em] uppercase text-cyan-400/80 hover:text-cyan-400 lg:hidden flex items-center gap-2"
              >
                {isExpanded ? opp.labels.showLess : opp.labels.readMore}
              </button>
            )}

            <motion.div className="mt-16" whileHover={{ x: 10 }}>
              <a href={`mailto:${opp.email}`} className="group inline-flex items-center gap-8">
                <span className="text-white font-[200] tracking-[0.4em] text-xs uppercase border-b border-white/10 pb-2 group-hover:border-cyan-500/50">
                  {opp.buttonText}
                </span>
                <span className="text-cyan-500 group-hover:translate-x-2 transition-transform duration-500 text-xl font-[100]">→</span>
              </a>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}