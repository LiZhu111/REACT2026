// src/data/zh/siteContent.js
export const siteContent = {
  header: {
    logo: { 
      line1: "星系", 
      line2: "结构&动力学",
      separator: "&"
    },
    navLinks: [
      { name: '关于小组', href: '#about' },
      { name: '科学研究', href: '#research' },
      { name: '团队成员', href: '#member' },
      { name: '加入我们', href: '#opportunities' },
    ],
    langBtn: { 
      en: { short: "EN", long: "English Version" }, 
      zh: { short: "中文", long: "中文版" }
    },
    constraints: {
      logoLine1Max: 10,
      logoLine2Max: 25,
      navLinkMax: 15
    },
    styles: {
      logoLine1Font: "font-[400]",
      logoLine2Font: "font-[500]",
      navFontWeight: "font-[400]",
      navTracking: "tracking-[0.05em]",
      langBtnTracking: "tracking-[0.1em]"
    }
  },

  hero: {
    backgroundImage: "/assets/icons/background-img.jpg",
    subtitleStructure: [
    { text: "利用先进动力学模型与观测数据，揭示星系的形成与演化奥秘" },
  ],
    tagline: "上海天文台 · 星系动力学研究小组",
    connector: "&",
    buttons: [
      { text: "研究成果", targetId: "research", primary: true },
      { text: "了解更多", targetId: "about", primary: false }
    ],
    constraints: {
      lineMaxChars: 12,
      subtitleMaxChars: 100,
      taglineMaxChars: 50
    },
    titleStructure: [
      { text: "探索", break: true }, 
      { text: "宇宙", hasConnector: true },
      { text: "动力学" }
    ],
    styles: {
      titleFontFamily: "font-[400]",
      connectorFontFamily: "font-[400]",
      wrapperPadding: "max-h-[850px]:pt-32 max-h-[700px]:pt-28",
      titleSize: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[90px] max-h-[850px]:text-5xl max-h-[700px]:text-4xl max-h-[600px]:text-3xl",
      subtitleTracking: "tracking-[0.05em]",
      taglineSize: "text-[11px] sm:text-xs",
      taglineMarginBottom: "mb-20 lg:mb-24", // 增加与按钮的距离
      // 修改点：Hero 按钮字体由原 10-11px 提升至 12-13px (即大一号)
      taglineTracking: "tracking-[0.2em] font-[200] opacity-90", // 缩小间距使流星效果更连贯
      buttonTextSize: "text-[15px] sm:text-[17px]", // 将 btnTextSize 改为 buttonTextSize 保持一致
      buttonTracking: "tracking-[0.1em]"
    },
  },

  about: {
    archiveLabel: "研究使命 01",
    sectionTitle: "关于我们",
    titleStructure: [
      { text: "自2018年起，在 ", className: "font-[100]", break: false },
      { text: "朱玲", className: "font-[500] text-cyan-400", break: false },
      { text: " 研究员带领下，团队致力于构建精确的", className: "font-[100]", break: true },
      { text: "星系演化动力学", className: "font-[500] text-cyan-400", break: false },
      { text: "图景", className: "font-[300] text-white/95", break: false },
    ],
    description: "我们隶属于中国科学院上海天文台。研究组利用先进的动力学建模技术，结合 Gaia、APOGEE 等前沿巡天数据，深入探索星系的形成与演化。我们通过高精度数值模拟与观测数据的交叉比对，旨在定量揭示银河系及近邻星系的物质分布与轨道结构。",
    labels: {
      readMore: "展开全文",
      showLess: "收起内容",
      separator: "//"
    },
    coreFields: ["银河系动力学", "恒星成分分析", "动力学建模", "星系考古"],
    constraints: {
      thresholdWidth: 1024,
      mobileMaxChars: 90
    },
    styles: {
    titleSize: "text-xl sm:text-3xl lg:text-4xl xl:text-[46px]",
    titleBottomMargin: "mb-10 lg:mb-20",
    descriptionLeading: "leading-relaxed lg:leading-[1.9]",
    sectionPadding: "py-20 lg:py-40",
    fieldTagSize: "text-[14px] lg:text-[15px]", 
    fieldTagTracking: "tracking-[0.05em]"
  }
  },

  research: {
    archiveLabel: "科研存档 // 02",
    sectionTitle: "近期研究成果",
    sideText: "科学研究",
    exploreText: "探索更多研究",
    linkText: "阅读全文", // 您提到的“Explore Publication”对应项
    readMoreText: "阅读更多",
    readLessText: "收起内容",
    labels: {
      caseBadge: "// 研究案例",
      summary: "项目概要",
      authorship: "作者信息",
      arrow: "→"
    },
    
  },

  member: {
    sectionTitle: "团队成员",
    archiveLabel: "归档 // 03",
    exploreText: "查看更多成员",
    categoryTitles: {
      faculty: "组长 / 教师",
      students: "博士后与学生",
      former: "往届成员"
    },
    labels: {
      research: "研究方向",
      placement: "毕业去向",
      readMore: "阅读详情",
      showLess: "收起"
    },
    styles: {
      // 修改点：成员卡片的操作按钮字体增大
     
      btnTextSize: "text-base lg:text-[19px]",
      btnTracking: "tracking-[0.1em]"
    }
  },

  opportunities: {
    archiveLabel: "04 / 招贤纳士",
    sectionTitle: "加入我们",
    content: "我们长期招聘具有天体物理背景的博士后，并欢迎对星系动力学感兴趣的研究生报考。研究组提供国际化的科研环境、充足的算力资源以及广泛的国际合作机会。如果你对揭开星系的秘密充满热情，请随时联系我们。",
    email: "lzhu@shao.ac.cn",
    emailLabel: "发送简历至",
    buttonText: "发送申请",
    labels: {
      readMore: "阅读详情",
      showLess: "返回"
    },
    styles: {
      titleTracking: "tracking-[0.1em]",
      contentLineHeight: "leading-relaxed",
      // 修改点：申请按钮字体增大一号，间距略微收紧以适应中文
      buttonTextSize: "text-[14px] lg:text-[16px]",
      buttonTracking: "tracking-[0.2em]"
    }
  },

  footer: {
    backToTop: "返回顶部",
    brand: {
      line1: "上海天文台",
      line2: "星系动力学组",
      orgName: "中国科学院上海天文台",
      address: "上海市徐汇区南丹路80号, 200030",
      locationLabel: "地址"
    },
    sections: [
      {
        title: "导航",
        links: [
          { name: "关于小组", url: "#about" },
          { name: "科研存档", url: "#research" },
          { name: "团队成员", url: "#member" },
          { name: "加入我们", url: "#opportunities" }
        ]
      },
      {
        title: "资源",
        links: [
          { name: "上海天文台官网", url: "https://www.shao.ac.cn", external: true },
          { name: "中国科学院", url: "https://www.cas.cn", external: true }
        ]
      }
    ],
    copyright: "星系动力学研究组. 保留所有权利.",
    tagline: "以精准模型定义宇宙之美",
    location: "中国 · 上海",
    constraints: {
      orgNameMax: 80,
      addressMax: 100,
      mobileAddressLimit: 55,
      linkNameMax: 20
    },
    styles: {
      brandTracking: "tracking-[0.1em]",
      orgTextSize: "text-[14px] lg:text-base", 
      orgFontWeight: "font-[400]",
      addressTextSize: "text-[13px] lg:text-[14px]",
      copyrightSize: "text-[13px] lg:text-sm",
      taglineTracking: "tracking-[0.1em]",
      navLinkTracking: "tracking-[0.05em]"
    }
  }
};