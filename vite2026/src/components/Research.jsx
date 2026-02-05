// src/components/Research.jsx
import React, { useState } from 'react';
import ResearchItem from './ResearchItem';
import ScrollReveal from './ScrollReveal';
import { useTranslation } from '../hooks/useTranslation'; // 引入 Hook

export default function Research() {
  const [visibleCount, setVisibleCount] = useState(2);
  
  // 1. 获取当前语言的科研数据列表和文案配置
  const { research: researchConfig, researchData, isEnglish } = useTranslation();

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  return (
    <div className="flex flex-col" id="research">
      {/* 2. 这里的 researchData 会自动根据语言切换为英文或中文数组 */}
      {researchData.slice(0, visibleCount).map((item, index) => (
        <ScrollReveal key={item.id} delay={index * 100}>
          <ResearchItem
            index={index}
            {...item}
            isEnglish={isEnglish} // 透传语言状态用于样式微调
            sectionTitle={researchConfig.sectionTitle}
            exploreText={researchConfig.exploreText}
            linkText={researchConfig.linkText}
            readMoreText={researchConfig.readMoreText}
            readLessText={researchConfig.readLessText}
            isLastVisible={index === visibleCount - 1}
            hasMore={visibleCount < researchData.length}
            onLoadMore={handleLoadMore}
          />
        </ScrollReveal>
      ))}
    </div>
  );
}