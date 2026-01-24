import React, { useState } from 'react';
import MemberCard from './MemberCard';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import { memberData } from '../data/memberData';

export default function Member() {
  // 1. 统筹分类数据
  const categories = [
    { id: 'faculty', title: 'Faculty', data: memberData.faculty || [] },
    { id: 'students', title: 'Postdocs & Students', data: memberData.postdocsAndStudents || [] },
    { id: 'former', title: 'Former Members', data: memberData.former || [] }
  ];

  // 计算所有人总数
  const totalMembers = categories.reduce((sum, cat) => sum + cat.data.length, 0);

  // 2. 初始显示 4 条，每次增加 2 条
  const [visibleLimit, setVisibleLimit] = useState(4);

  // 3. 辅助逻辑：判断哪些成员在当前可见范围内
  let globalIndexCounter = 0;

  return (
    <div className="space-y-24">
      {categories.map((category) => {
        // 计算当前分类中哪些成员应该显示
        const visibleInCategory = category.data.filter(() => {
          const isVisible = globalIndexCounter < visibleLimit;
          globalIndexCounter++;
          return isVisible;
        });

        // 如果该分类下没有可见成员，暂不渲染该分区标题
        if (visibleInCategory.length === 0) return null;

        return (
          <div key={category.id} className="space-y-10">
            {/* 分类标题装饰线 */}
            <ScrollReveal>
              <div className="flex items-center gap-6">
                <h3 className="text-[14px] font-[300] tracking-[0.4em] uppercase text-cyan-500/60">
                  {category.title}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent"></div>
              </div>
            </ScrollReveal>

            {/* 成员网格 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {visibleInCategory.map((member, idx) => (
                <ScrollReveal key={member.id} delay={(idx % 2) * 150}>
                  <MemberCard {...member} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        );
      })}

      {/* 英文流星加载按钮 - 只有当总可见数小于总人数时显示 */}
      {visibleLimit < totalMembers && (
        <div className="pt-10 flex justify-center">
          <button 
            onClick={() => setVisibleLimit(prev => prev + 2)}
            className="group flex flex-col items-center gap-4 transition-all"
          >
            <span className="text-[10px] tracking-[0.5em] text-cyan-400/40 group-hover:text-cyan-400 uppercase font-[200] relative px-4">
              EXPLORE MORE MEMBERS
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </span>
            
            {/* 短流星动画 */}
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
      
      <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>
    </div>
  );
}