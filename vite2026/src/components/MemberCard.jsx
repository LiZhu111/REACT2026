import React, { useState } from 'react';

export default function MemberCard({ nameEn, nameCn, title, photo, email, bio, direction, destination }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-700 group h-full relative overflow-hidden">
      
      {/* 悬浮明亮照片 */}
      <div className="w-40 h-52 flex-shrink-0 overflow-hidden rounded-lg border-2 border-white/10 bg-[#0a1126]">
        <img 
          src={photo} 
          alt={nameEn} 
          className="w-full h-full object-cover brightness-[0.75] saturate-[0.8] group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-105 transition-all duration-1000"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/200x250?text=No+Photo'; }}
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <div className="mb-4">
          <h3 className="text-2xl font-[200] text-white tracking-widest flex items-center justify-center md:justify-start gap-3">
            {nameEn} <span className="text-lg text-cyan-500/40 font-[100]">{nameCn}</span>
          </h3>
          <p className="text-cyan-400/60 text-[10px] tracking-[0.4em] uppercase mt-1 font-[300]">{title}</p>
        </div>

        {email && (
          <div className="mb-4">
            <a href={`mailto:${email}`} className="text-[11px] tracking-widest text-gray-500 hover:text-cyan-400 transition-colors border-b border-white/5 pb-1">
              {email}
            </a>
          </div>
        )}

        {/* 字段限制：移动端 line-clamp-3，点击展开 */}
        <div className="relative">
          <div className={`text-gray-400 text-sm leading-relaxed font-[300] space-y-3 transition-all duration-700 ${
            isExpanded ? 'line-clamp-none' : 'line-clamp-3 md:line-clamp-none'
          }`}>
            {bio && <p className="italic text-slate-300/90 leading-snug">"{bio}"</p>}
            {direction && (
              <p><span className="text-cyan-500/40 mr-2">//</span><span className="text-xs uppercase tracking-tighter mr-2 text-slate-500">Research:</span>{direction}</p>
            )}
            {destination && (
              <p><span className="text-cyan-500/40 mr-2">//</span><span className="text-xs uppercase tracking-tighter mr-2 text-slate-500">Placement:</span>{destination}</p>
            )}
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-[9px] tracking-[0.3em] text-cyan-500/50 hover:text-cyan-300 uppercase md:hidden transition-all"
          >
            {isExpanded ? "// Show Less" : "// Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}