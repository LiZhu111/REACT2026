// src/components/Member.jsx
import React, { useState } from 'react';
import MemberCard from './MemberCard';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

export default function Member() {
  const { membersData, member: memConfig } = useTranslation(); 

  const categories = [
    { key: 'faculty', label: memConfig.categoryTitles?.faculty || "Faculty" },
    { key: 'postdocsAndStudents', label: memConfig.categoryTitles?.students || "Postdocs & Students" },
    { key: 'former', label: memConfig.categoryTitles?.former || "Former Members" }
  ];

  const allMembersFlat = [
    ...(membersData.faculty || []),
    ...(membersData.postdocsAndStudents || []),
    ...(membersData.former || [])
  ];

  const [visibleLimit, setVisibleLimit] = useState(4);
  let globalCounter = 0; 

  return (
    <div id="member" className="space-y-32">
      {categories.map((cat) => {
        const catMembers = membersData[cat.key] || [];
        const displayInThisCat = catMembers.filter(() => {
          const isVisible = globalCounter < visibleLimit;
          globalCounter++;
          return isVisible;
        });

        if (displayInThisCat.length === 0) return null;

        return (
          <div key={cat.key} className="space-y-12">
            <ScrollReveal>
              <div className="flex items-center gap-4">
                <h3 className="text-cyan-500/50 text-[10px] tracking-[0.4em] uppercase font-[300]">
                  // {cat.label}
                </h3>
                <div className="h-px flex-1 bg-white/5"></div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {displayInThisCat.map((member, idx) => (
                <ScrollReveal key={member.id} delay={(idx % 2) * 150}>
                  <MemberCard {...member} labels={memConfig.labels} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        );
      })}

      {/* --- 展开链接：完美还原 Research 视觉特效 --- */}
      {visibleLimit < allMembersFlat.length && (
        <div className="pt-20 flex justify-center">
          <button 
            onClick={() => setVisibleLimit(prev => prev + 4)} 
            className="group relative flex flex-col items-center gap-6 transition-all"
          >
            {/* 1. 左侧装饰性光晕/晕染特效 (还原图3) */}
            <div className="absolute top-[10px] -left-64 w-48 h-[2px] 
                            bg-gradient-to-r from-transparent via-white/20 to-transparent 
                            blur-md opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

            {/* 2. 带有扫光效果的文字 */}
            <span className="text-[10px] tracking-[0.5em] text-cyan-400/40 group-hover:text-cyan-400 uppercase font-[200] relative px-4">
                {memConfig.exploreText}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </span>
            
            <div className="flex flex-col items-center gap-4">
              {/* 3. 垂直流星线条 */}
              <div className="relative w-px h-10 bg-white/10 overflow-hidden">
                <motion.div 
                  initial={{ y: "-100%" }} 
                  animate={{ y: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                  className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
                />
              </div>

              {/* 4. 底部发光点 */}
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_15px_#22d3ee]"></div>
                <div className="absolute inset-0 w-full h-full rounded-full bg-cyan-400 blur-sm animate-pulse"></div>
              </div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}