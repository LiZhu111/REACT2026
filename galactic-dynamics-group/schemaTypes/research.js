export default {
  name: 'research',
  title: '科研项目',
  type: 'document',
  fields: [
    { name: 'title', title: '项目标题 (中文)', type: 'string' },
    { name: 'titleEn', title: 'Project Title (English)', type: 'string' },
    { name: 'content', title: '详细描述 (中文)', type: 'text' },
    { name: 'contentEn', title: 'Description (English)', type: 'text' },
    { name: 'image', title: '项目封面图', type: 'image', options: { hotspot: true } },
    { name: 'link', title: '外部链接 (可选)', type: 'url' }
  ]
}