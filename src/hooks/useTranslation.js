import { useState } from 'react';
import { siteContent as siteEn } from '../data/siteContent';
import { memberData as membersEn } from '../data/memberData';
import { researchData as researchEn } from '../data/researchData';
import { siteContent as siteZh } from '../data/siteContentZH';
import { memberData as membersZh } from '../data/memberDataZH';
import { researchData as researchZh } from '../data/researchDataZH';

export function useTranslation() {
  const getInitialLang = () => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('app_lang');
      return savedLang || 'zh'; 
    }
    return 'zh';
  };

  const [lang, setLang] = useState(getInitialLang());

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'zh' : 'en';
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('app_lang', newLang);
    }
  };

  const isEnglish = lang === 'en';
  const site = isEnglish ? siteEn : siteZh;
  const membersData = isEnglish ? membersEn : membersZh;
  const researchData = isEnglish ? researchEn : researchZh;

  // 核心逻辑：注入成员模块所需的动态翻译字段
  if (site.member) {
    // “探索更多”按钮文字
    site.member.exploreText = isEnglish ? "Explore More Members" : "探索更多成员";
    
    if (!site.member.labels) site.member.labels = {};
    
    // 注入卡片内的标签文字
    const labels = site.member.labels;
    labels.viewCV = isEnglish ? "View Personal CV" : "个人履历";
    labels.researchTitle = isEnglish ? "RESEARCH" : "研究方向";
    labels.placementTitle = isEnglish ? "PLACEMENT" : "去向";
    labels.readMore = isEnglish ? "Read More" : "查看更多";
    labels.showLess = isEnglish ? "Show Less" : "收起详情";
  }

  return {
    lang,
    isEnglish,
    ...site,
    membersData,
    researchData,
    langLabel: isEnglish ? "中文" : "EN",
    toggleLanguage 
  };
}