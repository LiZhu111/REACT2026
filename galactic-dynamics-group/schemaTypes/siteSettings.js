export default {
  name: 'siteSettings',
  title: '网站文案与设置',
  type: 'document',
  fields: [
    // --- 导航栏与页脚 ---
    { name: 'navHome', title: '导航: 首页 (中/英)', type: 'object', fields: [
        { name: 'zh', type: 'string' }, { name: 'en', type: 'string' }
    ]},
    { name: 'footerText', title: '页脚版权信息 (中文)', type: 'string' },
    
    // --- Hero 区域 ---
    { name: 'heroTitle', title: '首页大标题 (中文)', type: 'string' },
    { name: 'heroTitleEn', title: 'Hero Title (English)', type: 'string' },
    { name: 'heroSubtitle', title: '首页副标题 (中文)', type: 'text' },
    { name: 'heroSubtitleEn', title: 'Hero Subtitle (English)', type: 'text' },

    // --- About 区域 ---
    { name: 'aboutTitle', title: '关于我们标题 (中文)', type: 'string' },
    { name: 'aboutTitleEn', title: 'About Section Title (English)', type: 'string' },
    { name: 'aboutContent', title: '关于我们内容 (中文)', type: 'text' },
    { name: 'aboutContentEn', title: 'About Content (English)', type: 'text' }
  ]
}