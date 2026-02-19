// src/components/MemberCard.jsx
import React, { useState } from 'react';

export default function MemberCard({ 
  nameEn, nameCn, title, photo, email, bio, direction, destination, labels 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-700 group h-full relative overflow-hidden">
      
      {/* 照片部分保持原有格式 */}
      <div className="w-40 h-52 flex-shrink-0 overflow-hidden rounded-lg border-2 border-white/10 bg-[#0a1126]">
        <img src={photo} alt={nameEn} className="w-full h-full object-cover brightness-[0.75] saturate-[0.8] group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-105 transition-all duration-1000" />
      </div>

      <div className="flex-1 text-center md:text-left">
        <div className="mb-4">
          <h3 className="text-2xl font-[200] text-white tracking-widest flex items-center justify-center md:justify-start gap-3">
            {nameEn} <span className="text-lg text-cyan-500/40 font-[100]">{nameCn}</span>
          </h3>
          <p className="text-cyan-400/60 text-[10px] tracking-[0.4em] uppercase mt-1 font-[300]">{title}</p>
        </div>

        {/* 动态内容渲染 */}
        <div className="relative">
          <div className={`text-gray-400 text-sm leading-relaxed font-[300] space-y-3 transition-all duration-700 ${isExpanded ? 'line-clamp-none' : 'line-clamp-3 md:line-clamp-none'}`}>
            {bio && <p className="italic text-slate-300/90 leading-snug">"{bio}"</p>}
            
            {direction && (
              <p>
                <span className="text-cyan-500/40 mr-2">//</span>
                <span className="text-xs uppercase tracking-tighter mr-2 text-slate-500">{labels?.research}</span>
                {direction}
              </p>
            )}
            
            {destination && (
              <p>
                <span className="text-cyan-500/40 mr-2">//</span>
                <span className="text-xs uppercase tracking-tighter mr-2 text-slate-500">{labels?.placement}</span>
                {destination}
              </p>
            )}
          </div>
          
          {/* 修正：移动端按钮文字改为动态 */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-[9px] tracking-[0.3em] text-cyan-500/50 hover:text-cyan-300 uppercase md:hidden transition-all"
          >
            {isExpanded ? labels?.showLess : labels?.readMore}
          </button>
        </div>
      </div>
    </div>
  );
}