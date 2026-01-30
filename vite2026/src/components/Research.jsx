import React, { useState } from 'react';
import ResearchItem from './ResearchItem';
import ScrollReveal from './ScrollReveal';
import { researchData } from '../data/researchData';
import { siteContent } from '../data/siteContent'; // 导入配置文件

export default function Research() {
  const [visibleCount, setVisibleCount] = useState(2);
  const { research: researchConfig } = siteContent; // 解构出 Research 的配置

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  return (
    <div className="flex flex-col" id="research">
      {researchData.slice(0, visibleCount).map((item, index) => (
        <ScrollReveal key={item.id} delay={index * 100}>
          <ResearchItem
            index={index}
            {...item}
            // 传递来自 siteContent 的配置
            sectionNum={researchConfig.sectionNum}
            sectionTitle={researchConfig.sectionTitle}
            exploreText={researchConfig.exploreText}
            isLastVisible={index === visibleCount - 1}
            hasMore={visibleCount < researchData.length}
            onLoadMore={handleLoadMore}
          />
        </ScrollReveal>
      ))}
    </div>
  );
}