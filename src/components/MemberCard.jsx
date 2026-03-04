// src/components/MemberCard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MemberCard({ 
  primaryName, secondaryName, title, photo, email, bio, direction, destination, cvLink, labels 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // 1. 名字字号动态逻辑
  const isChinese = /[\u4e00-\u9fa5]/.test(primaryName);
  const getNameSize = (name) => {
    if (!name) return 'text-2xl';
    if (name.length > 15) return 'text-xl'; 
    return 'text-2xl'; 
  };

  // 2. Title 动态字号
  const getTitleSize = (text) => {
    if (!text) return 'text-[10px]';
    if (text?.length > 20) return 'text-[8.5px]';
    if (text?.length > 15) return 'text-[9px]';
    return 'text-[10px]';
  };

  const handleContact = (e) => {
    e.preventDefault();
    try {
      const decodedEmail = window.atob(email);
      window.location.href = `mailto:${decodedEmail}`;
    } catch (err) {
      console.error("Email decoding failed:", err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 md:p-10 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-700 group relative overflow-hidden h-fit w-full">
      
      {/* 照片容器 */}
      <div className="w-40 aspect-[40/52] flex-shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[#0a1126] shadow-xl">
        <img 
          src={photo} 
          alt={primaryName} 
          className="w-full h-full object-cover transition-all duration-1000 transform-gpu
               brightness-[0.8] saturate-[0.9]
               group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-110"
        />
      </div>

      {/* 内容区域 */}
      <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left min-w-0 w-full">
        
        {/* 名字部分 */}
        <div className="flex flex-col mb-4 w-full overflow-hidden">
          <h3 className={`
            ${getNameSize(primaryName)} 
            ${isChinese ? 'tracking-[0.3em] mr-[-0.3em]' : 'tracking-wider'} 
            font-[200] text-white whitespace-nowrap truncate uppercase transition-all duration-500
          `}>
            {primaryName}
          </h3>
          <span className="text-cyan-400/80 font-[300] tracking-[0.15em] text-sm uppercase mt-1">
            {secondaryName}
          </span>
        </div>
        
        {/* Title 标签 */}
        <div className="max-w-full px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 mb-8 overflow-hidden">
          <span className={`
            ${getTitleSize(title)} 
            tracking-[0.25em] text-cyan-400/80 font-[400] uppercase whitespace-nowrap truncate block
          `}>
            {title}
          </span>
        </div>

        {/* Bio 文字区域 */}
        <div className="space-y-6 w-full px-4 sm:px-10 md:px-0">
          <p className={`text-slate-400 font-[300] italic leading-relaxed text-[14px] sm:text-[15px] tracking-wide ${!isExpanded ? 'line-clamp-2' : ''}`}>
            {bio}
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden w-full"
              >
                <div className="pt-6 space-y-6 border-t border-white/10 mt-2 flex flex-col items-center md:items-start w-full">
                  
                  {/* 研究方向 */}
                  <div className="flex flex-col gap-1.5 w-full">
                    <span className="text-cyan-500/60 text-[9px] tracking-[0.3em] uppercase font-[500]">
                      {labels?.researchDirection || "RESEARCH DIRECTION"}
                    </span>
                    <span className="text-slate-300 text-sm font-[300] tracking-wider leading-relaxed italic">
                      {direction}
                    </span>
                  </div>

                  {/* 联系方式 - 修复翻译处 */}
                  <div className="flex flex-col items-center md:items-start gap-2 w-full">
                    <span className="text-cyan-500/60 text-[9px] tracking-[0.3em] uppercase font-[500]">
                      {labels?.emailLabel || "CONTACT"}
                    </span>
                    <button 
                      onClick={handleContact}
                      className="group/mail flex items-center gap-3 text-cyan-400 hover:text-white transition-all text-[11px] tracking-[0.2em] uppercase"
                    >
                      <span className="border-b border-cyan-500/30 group-hover:border-white pb-0.5">
                        {labels?.sendMessage || "SEND MESSAGE"}
                      </span>
                      <span className="text-[14px] transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>

                  {destination && (
                    <div className="flex flex-col gap-1.5 w-full">
                      <span className="text-cyan-500/60 text-[9px] tracking-[0.3em] uppercase font-[500]">
                        {labels?.placementTitle || "PLACEMENT"}
                      </span>
                      <span className="text-slate-300 text-sm font-[300] tracking-wider">
                        {destination}
                      </span>
                    </div>
                  )}
                  
                  {cvLink && (
                    <div className="pt-2 w-full flex justify-center md:justify-start">
                      <a 
                        href={cvLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-cyan-400 hover:text-white uppercase group/cv transition-all"
                      >
                        <span className="w-6 h-px bg-cyan-500/30 group-hover:w-10 transition-all"></span>
                        {labels?.viewCV}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* 展开按钮 */}
        <div className="flex justify-center md:justify-start w-full mt-6">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[9px] tracking-[0.4em] text-cyan-500/40 hover:text-cyan-300 uppercase transition-all border-b border-cyan-500/10 hover:border-cyan-300 pb-1"
          >
            {isExpanded ? (labels?.showLess || "Show Less") : (labels?.readMore || "Read More")}
          </button>
        </div>
      </div>
    </div>
  );
}