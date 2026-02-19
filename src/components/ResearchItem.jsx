// src/components/ResearchItem.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResearchItem({ 
  title, 
  description, 
  image, 
  link, 
  index, 
  isLastVisible, 
  onLoadMore, 
  hasMore,
  sectionTitle,
  exploreText,
  linkText,
  readMoreText,
  readLessText
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const bgColor = index % 2 === 0 ? 'bg-[#0a1229]' : 'bg-[#101b39]';

  // 处理编号逻辑
  const displayIndex = (index + 1).toString().padStart(2, '0');

  return (
    <section className={`relative min-h-screen flex flex-col justify-center ${bgColor} overflow-hidden border-b border-white/5`}>
      {/* 背景纹理 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-16 lg:px-32 w-full relative z-10 py-24">
        <div className="max-w-5xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 mb-10 lg:mb-16">
            <span className="text-cyan-500/60 font-[400] text-[10px] tracking-[0.5em] uppercase">
              {sectionTitle} // {displayIndex}
            </span>
            <div className="h-px w-10 bg-cyan-500/20"></div>
          </motion.div>

          <div className="space-y-12">
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-[100] text-white tracking-tight leading-[1.3]">
              {title}
            </h3>
            
            <div className="relative border-l border-cyan-500/20 pl-6 lg:pl-12 space-y-8">
              <p className={`text-base lg:text-xl text-slate-400 font-[300] leading-relaxed transition-all duration-700 ${isExpanded ? 'line-clamp-none' : 'line-clamp-3 lg:line-clamp-none'}`}>
                {description}
              </p>
              
              {/* 移动端展开按钮 - 动态文本 */}
              <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="mt-6 text-[10px] tracking-[0.3em] uppercase text-cyan-500/80 lg:hidden underline"
              >
                {isExpanded ? readLessText : readMoreText}
              </button>

              <AnimatePresence>
                {(isExpanded || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-6 space-y-10">
                    <div className="relative overflow-hidden border border-white/5 bg-[#050a18]/50 group">
                      <img src={image} alt={title} className="w-full aspect-video lg:aspect-[21/9] object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-1000" />
                    </div>
                    <a href={link} target="_blank" rel="noreferrer" className="text-[11px] font-[500] tracking-[0.3em] text-white/60 hover:text-cyan-400 transition-all uppercase inline-flex items-center gap-2">
                      {linkText} <span>→</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* 加载更多按钮：与 Member 部分保持一致格式 */}
      {isLastVisible && hasMore && (
        <div className="pt-10 flex justify-center">
          <button onClick={onLoadMore} className="group flex flex-col items-center gap-4 transition-all">
            <span className="text-[10px] tracking-[0.5em] text-cyan-400/40 group-hover:text-cyan-400 uppercase font-[200] relative px-4">
                {exploreText}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </span>
            <div className="relative w-px h-10 bg-white/10 overflow-hidden">
                <motion.div 
                  initial={{ y: "-100%" }} 
                  animate={{ y: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                  className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
                />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_12px_#22d3ee] animate-pulse"></div>
            </button>
        </div>
      )}
    </section>
  );
}