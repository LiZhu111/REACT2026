// src/components/Opportunities.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { useTranslation } from '../hooks/useTranslation';

export default function Opportunities() {
  const { opportunities: opp, isEnglish } = useTranslation(); 
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAdminContact = (e) => {
    e.preventDefault();
    if (!opp?.adminEmail) return;
    try {
      // 使用 trim() 确保解密后没有多余的空格或换行符
      const decodedEmail = window.atob(opp.adminEmail).trim();
      // 确保链接格式仅包含地址，防止客户端解析出双重显示名
      window.location.href = `mailto:${decodedEmail}`;
    } catch (err) {
      console.error("Email decoding failed:", err);
    }
  };

  const displayContent = isMobile && !isExpanded 
    ? opp.content.slice(0, 160) + "..." 
    : opp.content;

  return (
    <section id="opportunities" className="scroll-mt-40 relative">
      <ScrollReveal>
        <div className="text-cyan-500/40 font-[100] text-xs tracking-[0.5em] mb-4 uppercase">
          {opp.archiveLabel}
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
                className="mt-6 text-[10px] tracking-[0.3em] uppercase text-cyan-400/80 hover:text-cyan-400 lg:hidden flex items-center gap-2 bg-transparent border-none p-0 cursor-pointer"
              >
                {isExpanded ? opp.labels?.showLess : opp.labels?.readMore}
              </button>
            )}

            {/* --- 优化后的视觉入口：字号调小，更协调 --- */}
            <motion.div className="mt-16" whileHover={{ x: 10 }}>
              <button 
                onClick={handleAdminContact} 
                className="group inline-flex items-center gap-4 bg-transparent border-none cursor-pointer p-0 text-left outline-none"
              >
                {/* 引导箭头 */}
                <span className="text-cyan-400 text-xl sm:text-2xl font-[200] transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>

                <div className="flex flex-col">
                  {/* 使用注入的 contactAction 标签，不再显示邮箱原文 */}
                  <span className="text-cyan-400 font-[400] tracking-[0.05em] text-lg sm:text-2xl md:text-3xl lg:text-4xl transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                    {opp.labels?.contactAction || (isEnglish ? "Job Inquiries" : "职位咨询")}
                  </span>
                  {/* 装饰底线 */}
                  <div className="h-[1px] w-full bg-cyan-500/20 mt-1 origin-left transition-all duration-500 group-hover:bg-white group-hover:scale-x-105"></div>
                </div>
              </button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}