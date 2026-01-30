import { useState, useEffect } from 'react';
import { siteContent } from '../data/siteContent';

export function useTranslation() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // 自动识别 URL：支持 /zh, /ja, /fr 等
    const path = window.location.pathname;
    if (path.includes('/zh')) setLang('zh');
    else if (path.includes('/ja')) setLang('ja');
    else if (path.includes('/fr')) setLang('fr');
    else setLang('en');
  }, []);

  const { header } = siteContent;
  
  // 核心逻辑：判断“当前语言”和“目标切换语言”
  const isEnglish = lang === 'en';
  const targetLangKey = isEnglish ? 'zh' : 'en'; 

  return {
    lang,
    isEnglish,
    header,
    langData: header.langBtn[targetLangKey],
    targetPath: isEnglish ? '/zh' : '/en'
  };
}