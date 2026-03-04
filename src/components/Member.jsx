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
            <h2 className="text-2xl font-[200] tracking-[0.2em] text-white/50 uppercase border-l-2 border-cyan-500/30 pl-6">
              {cat.label}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {displayInThisCat.map((member) => (
                <ScrollReveal key={member.id}>
                  <MemberCard {...member} labels={memConfig.labels} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        );
      })}

      {allMembersFlat.length > visibleLimit && (
        <div className="pt-20 flex justify-center">
          <button 
            onClick={() => setVisibleLimit(prev => prev + 4)} 
            className="group flex flex-col items-center gap-4 transition-all"
          >
            <span className="text-[10px] tracking-[0.5em] text-cyan-400/40 group-hover:text-cyan-400 uppercase font-[200] relative px-4">
                {memConfig.exploreText}
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
          </button>
        </div>
      )}
    </div>
  );
}