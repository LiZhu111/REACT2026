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

  // 1. 定义统一的动态标签对象，包含您要求的 contactAction
  const commonLabels = {
    viewCV: isEnglish ? "View Personal CV" : "个人履历",
    researchTitle: isEnglish ? "RESEARCH" : "研究方向",
    placementTitle: isEnglish ? "PLACEMENT" : "去向",
    readMore: isEnglish ? "Read More" : "查看更多",
    showLess: isEnglish ? "Show Less" : "收起详情",
    sendMessage: isEnglish ? "SEND MESSAGE" : "发送邮件",
    contactAction: isEnglish ? "Job Inquiries" : "职位咨询" // 新增字段
  };

  // 2. 注入成员模块翻译
  if (site.member) {
    site.member.exploreText = isEnglish ? "Explore More Members" : "探索更多成员";
    site.member.labels = { ...site.member.labels, ...commonLabels };
  }

  // 3. 注入招贤纳士模块翻译
  if (site.opportunities) {
    site.opportunities.labels = { ...site.opportunities.labels, ...commonLabels };
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