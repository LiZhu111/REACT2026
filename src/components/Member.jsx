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
                 <MemberCard 
                    {...member}
                    labels={memConfig.labels} 
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        );
      })}

      {/* 找到 Member.jsx 底部 allMembersFlat.length > visibleLimit 的部分 */}
      {allMembersFlat.length > visibleLimit && (
        <div className="pt-20 flex justify-center">
          <button 
            onClick={() => setVisibleLimit(prev => prev + 4)} 
            className="group flex flex-col items-center gap-4 transition-all"
          >
            {/* 1. 带有扫光效果的文字 */}
            <span className="text-[10px] tracking-[0.5em] text-cyan-400/40 group-hover:text-cyan-400 uppercase font-[200] relative px-4">
                {memConfig.exploreText}
                {/* 扫光遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </span>

            {/* 2. 垂直流星线条 */}
            <div className="relative w-px h-10 bg-white/10 overflow-hidden">
                <motion.div 
                  initial={{ y: "-100%" }} 
                  animate={{ y: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                  className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
                />
            </div>

            {/* 3. 底部发光脉冲点 */}
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_12px_#22d3ee] animate-pulse"></div>
          </button>
        </div>
      )}
    </div>
  );
}

