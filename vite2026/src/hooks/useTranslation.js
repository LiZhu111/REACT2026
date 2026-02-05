import { useState, useEffect } from 'react';
import { siteContent as siteEn } from '../data/siteContent';
import { memberData as membersEn } from '../data/memberData';
import { researchData as researchEn } from '../data/researchData';
import { siteContent as siteZh } from '../data/siteContentZH';
import { memberData as membersZh } from '../data/memberDataZH';
import { researchData as researchZh } from '../data/researchDataZH';

export function useTranslation() {
  const getInitialLang = () => {
    if (typeof window !== 'undefined') {
      return window.location.pathname.includes('/zh') ? 'zh' : 'en';
    }
    return 'en';
  };

  const [lang, setLang] = useState(getInitialLang());

  useEffect(() => {
    const handleLocationChange = () => {
      setLang(window.location.pathname.includes('/zh') ? 'zh' : 'en');
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const isEnglish = lang === 'en';
  const site = isEnglish ? siteEn : siteZh;
  const members = isEnglish ? membersEn : membersZh;
  const research = isEnglish ? researchEn : researchZh;

  // 注入 [2026-01-29] 要求：Explore Publication
  if (site.about && !site.about.linkText) {
    site.about.linkText = isEnglish ? "Explore Publication" : "探索出版物";
  }

  return {
    lang,
    isEnglish,
    ...site, // 包含 member, research, header 等配置项
    membersData: members, // 统一导出名称
    researchData: research,
    langData: siteEn.header?.langBtn?.[isEnglish ? 'zh' : 'en'] || { short: "ZH", long: "中文" },
    targetPath: isEnglish ? '/zh' : '/'
  };
}