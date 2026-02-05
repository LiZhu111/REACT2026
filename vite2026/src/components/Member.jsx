// src/components/Member.jsx
import React, { useState } from 'react';
import MemberCard from './MemberCard';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation'; // 引入翻译钩子

export default function Member() {
  // 从钩子中获取当前语言的数据和配置
  const { membersData, member: memConfig } = useTranslation(); 

  // 使用动态获取的 memConfig 和 membersData
  const categories = [
    { id: 'faculty', title: memConfig.categoryTitles.faculty, data: membersData.faculty || [] },
    { id: 'students', title: memConfig.categoryTitles.students, data: membersData.postdocsAndStudents || [] },
    { id: 'former', title: memConfig.categoryTitles.former, data: membersData.former || [] }
  ];

  const totalMembers = categories.reduce((sum, cat) => sum + cat.data.length, 0);
  const [visibleLimit, setVisibleLimit] = useState(4);
  let globalIndexCounter = 0;

  return (
    <div id="member" className="space-y-24"> {/* 确保 ID 与导航链接一致 */}
      {categories.map((category) => {
        // 重置局部计数器逻辑以支持“加载更多”在分类间的全局计算
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
                  {/* labels 包含 research, placement, readMore 等翻译 */}
                  <MemberCard {...member} labels={memConfig.labels} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        );
      })}

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