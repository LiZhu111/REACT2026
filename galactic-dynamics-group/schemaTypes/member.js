export default {
  name: 'member',
  title: '团队成员',
  type: 'document',
  fields: [
    { name: 'primaryName', title: '主要姓名 (如: 中文名)', type: 'string' },
    { name: 'secondaryName', title: '次要姓名 (如: 英文名/头衔)', type: 'string' },
    { name: 'photo', title: '成员照片', type: 'image', options: { hotspot: true } },
    { name: 'bio', title: '个人简介 (中文)', type: 'text' },
    { name: 'bioEn', title: 'Biography (English)', type: 'text' },
    { name: 'order', title: '排序权重 (数字越大越靠前)', type: 'number' }
  ]
}