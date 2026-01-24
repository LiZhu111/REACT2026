import React, { useState } from 'react';
import ResearchItem from './ResearchItem';
import ScrollReveal from './ScrollReveal';
import { researchData } from '../data/researchData'; // 导入您包含 3 条数据的源

export default function Research() {
  // 核心：初始只显示前 2 条
  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    // 每次点击加载更多，显示名额增加 2
    setVisibleCount(prev => prev + 2);
  };

  return (
    <div className="flex flex-col">
      {/* 仅截取并渲染当前 visibleCount 范围内的条数 */}
      {researchData.slice(0, visibleCount).map((item, index) => (
        <ScrollReveal key={item.id} delay={index * 100}>
          <ResearchItem
            index={index}
            {...item}
            // 标记当前列表显示的最后一项
            isLastVisible={index === visibleCount - 1}
            // 只有数据还没显示完时，hasMore 为 true
            hasMore={visibleCount < researchData.length}
            onLoadMore={handleLoadMore}
          />
        </ScrollReveal>
      ))}
    </div>
  );
}