// src/components/MemberCard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MemberCard({ 
  nameEn, nameCn, title, photo, email, bio, direction, destination, cvLink, labels 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-700 group relative overflow-hidden h-fit">
      
      {/* 照片容器 */}
      {/* touch-none: 彻底禁止手机端的原生手势缩放 */}
      {/* select-none: 禁止长按选择图片文字 */}
      <div className="w-40 aspect-[40/52] flex-shrink-0 overflow-hidden rounded-lg border-2 border-white/10 bg-[#0a1126] touch-none select-none">
        <img 
          src={photo} 
          alt={nameEn} 
          className="w-full h-full object-cover 
                     /* 默认：低亮度 */
                     brightness-[0.75] saturate-[0.8] 
                     /* 全平台：悬停/触摸时提亮 */
                     group-hover:brightness-100 group-hover:saturate-100 
                     /* 过渡效果 */
                     transition-all duration-1000 transform-gpu
                     /* 核心修改： */
                     /* 1. 只有宽度大于 768px (md, 包含iPad和电脑) 才允许缩放 */
                     md:group-hover:scale-105 
                     /* 2. 禁止图片层本身响应系统长按菜单 */
                     pointer-events-none"
          /* 额外保险：禁止手机长按弹出系统菜单 */
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>

      <div className="flex-1 text-center md:text-left min-w-0 w-full">
        <div className="mb-4">
          <h3 className="text-[1.2rem] sm:text-[1.5rem] font-[200] text-white tracking-widest flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1">
            <span className="whitespace-nowrap">{nameEn}</span>
            <span className="text-lg text-cyan-500/40 font-[100] whitespace-nowrap">{nameCn}</span>
          </h3>
          <p className="text-cyan-400/60 text-[10px] tracking-[0.4em] uppercase mt-1 font-[300]">{title}</p>
          
          {email && (
            <a href={`mailto:${email}`} className="text-xs text-slate-500 hover:text-cyan-400 transition-colors mt-2 block font-mono tracking-tighter">
              {email}
            </a>
          )}
        </div>

        <div className="relative">
          <div className="text-gray-400 text-sm leading-relaxed font-[300]">
            <p className={`italic text-slate-300/90 leading-snug transition-all duration-500 ${isExpanded ? '' : 'line-clamp-2'}`}>
              "{bio || direction || "Research member."}"
            </p>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-white/5 space-y-3">
                    {direction && (
                      <p className="text-xs break-words">
                        <span className="text-cyan-500/40 mr-2 font-mono uppercase tracking-normal">
                          // {labels?.researchTitle || "RESEARCH"}:
                        </span>
                        <span className="text-slate-300">{direction}</span>
                      </p>
                    )}
                    {destination && (
                      <p className="text-xs break-words">
                        <span className="text-cyan-500/40 mr-2 font-mono uppercase tracking-normal">
                          // {labels?.placementTitle || "PLACEMENT"}:
                        </span>
                        <span className="text-slate-300">{destination}</span>
                      </p>
                    )}
                    
                    {cvLink && (
                      <div className="pt-2">
                        <a 
                          href={cvLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-cyan-400 hover:text-white uppercase group/btn transition-all"
                        >
                          <span className="w-4 h-px bg-cyan-500/50 group-hover/btn:w-8 transition-all"></span>
                          {labels?.viewCV}
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-[9px] tracking-[0.3em] text-cyan-500/50 hover:text-cyan-300 uppercase transition-all border-b border-cyan-500/20"
          >
            {isExpanded ? (labels?.showLess || "Show Less") : (labels?.readMore || "Read More")}
          </button>
        </div>
      </div>
    </div>
  );
}