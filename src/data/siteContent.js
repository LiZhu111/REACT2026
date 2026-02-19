// src/data/siteContent.js
export const siteContent = {
  // 公共样式常量，避免重复
  commonStyles: {
    trackingNarrow: "tracking-[0.1em]",
    trackingWide: "tracking-[0.2em]",
    fontLight: "font-[200]",
    fontNormal: "font-[300]",
    fontMedium: "font-[400]"
  },

  header: {
    logo: { 
      line1: "GALAXY", 
      line2: "STRUCTURE & DYNAMICS",
      separator: "&" // 将符号也参数化
    },
    navLinks: [
      { name: 'About', href: '#about' },
      { name: 'Research', href: '#research' },
      { name: 'Members', href: '#member' },
      { name: 'Opportunities', href: '#opportunities' },
    ],
    // 语言切换按钮数据
    langBtn: { 
      en: { short: "EN", long: "English Version" }, 
      zh: { short: "中文", long: "中文版" }
    },
    // 零硬编码：文字限制
    constraints: {
      logoLine1Max: 10,
      logoLine2Max: 25,
      navLinkMax: 15
    },
    // 零硬编码：样式配置（可根据语言版本切换此对象）
    styles: {
      logoLine1Font: "font-[300]",
      logoLine2Font: "font-[400]",
      navFontWeight: "font-[450]",
      navTracking: "tracking-[0.12em]", // 英文通常需要更大间距
      langBtnTracking: "tracking-[0.15em]"
      // 中文版可配置为: navTracking: "tracking-normal", logoLine1Font: "font-bold"
    }
  },

  hero: {
    titleStructure: [
    { text: "GALAXY", break: true },
    { text: "STRUCTURE", hasConnector: true, break: true },
    { text: "DYNAMICS" }
  ],
    subtitleStructure: [
    { text: "Deciphering the mechanisms of galaxy formation and evolution through integrated dynamical modeling and multi-wavelength observations." },
   
  ],
    tagline: "Shanghai Astronomical Observatory · CAS",
    backgroundImage: "/assets/icons/background-img.jpg",
    buttons: [
      { text: "Explore Research", targetId: "research", primary: true },
      { text: "Our Team", targetId: "member", primary: false }
    ],
    // 零硬编码：文字限制与样式配置
    constraints: {
      lineMaxChars: 15,      // 标题每行最大字符
      subtitleMaxChars: 360,  // 副标题最大字符
      taglineMaxChars: 40    // 底部标签最大字符
    },
    
  styles: {
  // 合并后的 wrapperPadding
    wrapperPadding: "pt-48 sm:pt-40", 
    titleFontFamily: "font-[200]",
    connectorFontFamily: "font-[100]",
    titleSize: "text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl max-h-[850px]:text-6xl max-h-[700px]:text-5xl max-h-[600px]:text-4xl max-w-[1280px]:text-7xl max-w-[1024px]:text-6xl max-w-[768px]:text-3xl max-w-[640px]:text-2xl",
    subtitleSize: "text-sm sm:text-base lg:text-lg",
    // 合并后的 subtitleTracking
    subtitleTracking: "tracking-wide leading-[1.8] font-[300] italic antialiased", 
    subtitleColor: "text-slate-300/80",
    subtitleMarginBottom: "mb-2 sm:mb-3 lg:mb-6",
    taglineSize: "text-[11px] sm:text-xs",
    taglineTracking: "tracking-[0.3em]", // 统一命名
    taglineMarginBottom: "mb-4 sm:mb-6 lg:mb-12",
    buttonTextSize: "text-[12px] sm:text-[13px]", // 统一命名
    buttonTracking: "tracking-[0.2em]"
  },
  },

 about: {
    archiveLabel: "RESEARCH MISSION // 01",
    sectionTitle: "About Us",
    titleStructure: [
      { text: "Advancing our understanding of ", className: "font-[100] text-white/70", break: true },
      { text: "Galactic Evolution", className: "font-[300] text-cyan-400", break: true },
      { text: "through Dynamics & Observations led by ", className: "font-[100] text-white/70", break: true },
      { text: "Ling Zhu", className: "font-[300] text-cyan-400", break: false },
    ],
    description: "Our group at Shanghai Astronomical Observatory (SHAO) specializes in the physical processes that shape galaxies across cosmic time. By bridging the gap between massive cosmological simulations and high-precision sky surveys, we utilize advanced dynamical modeling to decode the complex fossil records of galaxies and probe the underlying nature of dark matter.",
    labels: { 
      readMore: "Explore Full Mission", 
      showLess: "Condense View", 
      separator: "//",
      linkText: "Explore Publication" // 已根据您的要求确保包含此项
    },
    coreFields: [
      "Chemo-dynamics Modeling",
      "Galaxy Assembly History",
      "Dark Matter Distribution",
      "SMBH Mass Estimation",
      "Multi-component Kinematics"
    ],
    constraints: { 
      thresholdWidth: 1024, 
      mobileMaxChars: 90 
    },
    styles: { 
      // 这里的 text-5xl 比之前的 6xl/7xl 更显精致
      titleSize: "text-2xl sm:text-4xl lg:text-5xl xl:text-[52px]",
      titleBottomMargin: "mb-12 lg:mb-24", // 增大间距
      descriptionLeading: "leading-relaxed lg:leading-[2]", // 增加行间距
      sectionPadding: "py-24 lg:py-48", // 显著增加上下呼吸感
      fieldTagSize: "text-[12px] lg:text-[14px]",
      fieldTagTracking: "tracking-[0.15em]"
      }
  },

research: {
    archiveLabel: "Archive // 02", // 或者 "项目编号 02"
    sectionTitle: "Recent Research",
    sideText: "Research", // 侧边垂直文字
    exploreText: "Explore More Research",
    linkText: "Explore Publication",
    // 100% 零硬编码：新增装饰性标签
    readMoreText: "Read More",
    readLessText: "Show Less",
    labels: {
      caseBadge: "// RESEARCH CASE",
      summary: "PROJECT SUMMARY",
      authorship: "AUTHORSHIP",
      arrow: "→"
    },
    
  },

  member: {
    sarchiveLabel: "Archive // 03",
    sectionTitle: "Group Members",
    exploreText: "Explore More Members",
    labels: {
      research: "Research:",
      placement: "Placement:",
      readMore: "Read More",
      showLess: "Show Less"
    },
    categoryTitles: {
      faculty: "Faculty",
      students: "Postdocs & Students",
      former: "Former Members"
    }
  },


  opportunities: {
  sectionNum: "04",
  sectionTitle: "Opportunities",
  archiveLabel: "Archive // 04",
  // 核心文案抽离
  content: "We are constantly seeking motivated postdocs and students who are interested in galaxy dynamics and evolution. Our group provides a collaborative environment with access to state-of-the-art computational resources and world-class observational data.",
  email: "lzhu@shao.ac.cn",
  buttonText: "Send Application",
  labels: {
    readMore: "Read More",
    showLess: "Show Less"
  },
  // 零硬编码配置：字数限制与阈值
  constraints: {
    mobileMaxChars: 160,
    thresholdWidth: 1024
  },
  // 零硬编码样式：支持双语切换调整
  styles: {
    titleTracking: "tracking-[0.1em]",
    contentLineHeight: "leading-relaxed",
    buttonTracking: "tracking-[0.4em]"
  }
  },

  footer: {
    backToTop: "Back to Top",
    brand: {
      line1: "SHAO",
      line2: "Galaxy Dynamics Group",
      orgName: "Shanghai Astronomical Observatory, Chinese Academy of Sciences",
      address: "80 Nandan Road, Xuhui District, Shanghai 200030, China",
      locationLabel: "LOC.", // 提取此处
      mapUrl: "https://api.map.baidu.com/direction?destination=上海天文台&mode=driving&region=上海&output=html&src=webapp.baidu.openAPIdemo"
    },
    sections: [
      {
        title: "Navigation",
        links: [
          { name: "About Group", url: "#about" },
          { name: "Research Archive", url: "#research" },
          { name: "Team Members", url: "#member" },
          { name: "Opportunities", url: "#opportunities" }
        ]
      },
      {
        title: "Resources",
        links: [
          { name: "SHAO Website", url: "https://www.shao.ac.cn", external: true },
          { name: "CAS Global", url: "https://english.cas.cn", external: true }
        ]
      }
    ],
    copyright: "Galactic Dynamics Group. All rights reserved.",
    tagline: "Engineered with Precision",
    location: "Shanghai, CN",

    // 1. 零硬编码：字数限制
    constraints: {
      orgNameMax: 80,       // 允许机构名完整显示
      addressMax: 100,      // 显著调高，尽量保证全地址显示
      mobileAddressLimit: 55, // 手机端保护阈值
      linkNameMax: 20
    },

    // 2. 零硬编码：样式配置 (支持双语切换调整)
    styles: {
      brandTracking: "tracking-[0.3em]",
      orgTextSize: "text-[13px] lg:text-sm",
      orgFontWeight: "font-[400]",
      addressTextSize: "text-[12px] lg:text-[13px]",
      navLinkTracking: "tracking-[0.1em]",
      copyrightSize: "text-xs",
      taglineTracking: "tracking-[0.2em]"
    }
  }
};