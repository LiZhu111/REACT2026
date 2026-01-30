// src/components/Member.jsx
import React, { useState } from 'react';
import MemberCard from './MemberCard';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import { memberData } from '../data/memberData';
import { siteContent } from '../data/siteContent';

export default function Member() {
  const { member: memConfig } = siteContent; 

  // 1. 彻底消除分类名称的硬编码
  const categories = [
    { id: 'faculty', title: memConfig.categoryTitles.faculty, data: memberData.faculty || [] },
    { id: 'students', title: memConfig.categoryTitles.students, data: memberData.postdocsAndStudents || [] },
    { id: 'former', title: memConfig.categoryTitles.former, data: memberData.former || [] }
  ];

  const totalMembers = categories.reduce((sum, cat) => sum + cat.data.length, 0);
  const [visibleLimit, setVisibleLimit] = useState(4);
  let globalIndexCounter = 0;

  return (
    <div className="space-y-24">
      {categories.map((category) => {
        const visibleInCategory = category.data.filter(() => {
          const isVisible = globalIndexCounter < visibleLimit;
          globalIndexCounter++;
          return isVisible;
        });

        if (visibleInCategory.length === 0) return null;

        return (
          <div key={category.id} className="space-y-10">
            <ScrollReveal>
              <div className="flex items-center gap-6">
                <h3 className="text-[14px] font-[300] tracking-[0.4em] uppercase text-cyan-500/60">
                  {category.title}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent"></div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {visibleInCategory.map((member, idx) => (
                <ScrollReveal key={member.id} delay={(idx % 2) * 150}>
                  {/* 关键：透传 labels 对象 */}
                  <MemberCard {...member} labels={memConfig.labels} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        );
      })}

      {/* 加载更多按钮 - 文字已通过 memConfig 获取 */}
      {visibleLimit < totalMembers && (
        <div className="pt-10 flex justify-center">
          <button 
            onClick={() => setVisibleLimit(prev => prev + 2)}
            className="group flex flex-col items-center gap-4 transition-all"
          >
            <span className="text-[10px] tracking-[0.5em] text-cyan-400/40 group-hover:text-cyan-400 uppercase font-[200] relative px-4">
              {memConfig.exploreText}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </span>
            {/* 动画节点保持不变 */}
            <div className="relative w-px h-10 bg-white/10 overflow-hidden">
              <motion.div initial={{ y: "-100%" }} animate={{ y: "100%" }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_12px_#22d3ee] animate-pulse"></div>
          </button>
        </div>
      )}
    </div>
  );
}