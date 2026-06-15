import { createContext, createElement, useContext, useMemo, useState } from 'react';
import siteEn from '../content/site.en.json';
import membersEn from '../content/members.en.json';
import researchEn from '../content/research.en.json';
import siteZh from '../content/site.zh.json';
import membersZh from '../content/members.zh.json';
import researchZh from '../content/research.zh.json';
import editableEn from '../content/editable.en.json';
import editableZh from '../content/editable.zh.json';

if (import.meta.hot) {
  import.meta.hot.accept([
    '../content/editable.en.json',
    '../content/editable.zh.json',
    '../content/members.en.json',
    '../content/members.zh.json',
    '../content/research.en.json',
    '../content/research.zh.json',
  ], () => {
    window.location.reload();
  });
}

const TranslationContext = createContext(null);

const memberLabelText = {
  en: {
    exploreText: 'Explore More Members',
    labels: {
      viewCV: 'View Personal CV',
      researchTitle: 'RESEARCH',
      placementTitle: 'PLACEMENT',
      readMore: 'Read More',
      showLess: 'Show Less',
    },
    langLabel: '中文',
  },
  zh: {
    exploreText: '探索更多成员',
    labels: {
      viewCV: '个人履历',
      researchTitle: '研究方向',
      placementTitle: '去向',
      readMore: '查看更多',
      showLess: '收起详情',
    },
    langLabel: 'EN',
  },
};

function getInitialLang() {
  if (typeof window === 'undefined') return 'zh';
  return localStorage.getItem('app_lang') || 'zh';
}

function mergeContent(base, edits) {
  if (edits === undefined) return base;
  if (edits === null || typeof edits !== 'object') return edits;
  if (Array.isArray(base) || Array.isArray(edits)) return edits;

  return Object.entries(edits).reduce(
    (merged, [key, value]) => ({
      ...merged,
      [key]: mergeContent(merged[key], value),
    }),
    { ...base }
  );
}

function buildTranslationValue(lang, toggleLanguage) {
  const isEnglish = lang === 'en';
  const siteBase = isEnglish ? siteEn : siteZh;
  const editable = isEnglish ? editableEn : editableZh;
  const site = mergeContent(siteBase, editable);
  const membersData = isEnglish ? membersEn : membersZh;
  const researchContent = isEnglish ? researchEn : researchZh;
  const researchData = researchContent.items || researchContent;
  const text = isEnglish ? memberLabelText.en : memberLabelText.zh;

  return {
    lang,
    isEnglish,
    ...site,
    member: site.member
      ? {
          ...site.member,
          exploreText: site.member.exploreText || text.exploreText,
          labels: {
            ...text.labels,
            ...(site.member.labels || {}),
          },
        }
      : site.member,
    membersData,
    researchData,
    langLabel: text.langLabel,
    toggleLanguage,
  };
}

export function TranslationProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  const toggleLanguage = () => {
    setLang((currentLang) => {
      const nextLang = currentLang === 'en' ? 'zh' : 'en';
      if (typeof window !== 'undefined') {
        localStorage.setItem('app_lang', nextLang);
      }
      return nextLang;
    });
  };

  const value = useMemo(
    () => buildTranslationValue(lang, toggleLanguage),
    [lang]
  );

  return createElement(
    TranslationContext.Provider,
    { value },
    children
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}
