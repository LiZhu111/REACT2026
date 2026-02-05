// src/data/siteContent.js
export const siteContent = {
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
    subtitle: "Shanghai Astronomical Observatory · CAS",
    tagline: "Epoch J2000.0 // 31.23° N, 121.47° E",
    backgroundImage: "/assets/icons/background-img.jpg",
    buttons: [
      { text: "Explore Research", targetId: "research", primary: true },
      { text: "Our Team", targetId: "member", primary: false }
    ],
    // 零硬编码：文字限制与样式配置
    constraints: {
      lineMaxChars: 15,      // 标题每行最大字符
      subtitleMaxChars: 60,  // 副标题最大字符
      taglineMaxChars: 40    // 底部标签最大字符
    },
    titleStructure: [
    { text: "GALAXY", break: true },
    { text: "STRUCTURE", hasConnector: true, break: true },
    { text: "DYNAMICS" }
  ],
  styles: {
    // 增加高度适配：当屏幕高度小于 750px 时，减少 Padding 和 字号
    wrapperPadding: "pt-0 max-h-[750px]:pt-12", 
    titleFontFamily: "font-[200]",
    connectorFontFamily: "font-[100]",
    // 阶梯式响应：[极窄, 小, 中, 大, 极大] + [矮屏幕适配]
    titleSize: "text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[110px] max-h-[850px]:text-6xl max-h-[700px]:text-5xl max-h-[600px]:text-4xl",
    wrapperPadding: "max-h-[850px]:pt-32 max-h-[700px]:pt-28", 
    subtitleSize: "text-sm md:text-base max-h-[700px]:text-xs",
    subtitleTracking: "tracking-[0.25em]",
    taglineSize: "text-[9px]",
    buttonTextSize: "text-[10px] sm:text-[11px]",
    buttonTracking: "tracking-[0.2em]"
  },
  },

 about: {
  archiveLabel: "Archive // 01",
  sectionTitle: "Our Mission",
    // 标题结构：className 控制样式，break 控制桌面端换行
    titleStructure: [
      { text: "Advancing our understanding of ", className: "font-[100]", break: true },
      { text: "Galactic Evolution", className: "font-[300] text-cyan-400", break: true },
      { text: " through computational and observational rigor.", className: "font-[100]", break: false }
    ],
    description: "The Galaxy Structure and Dynamics group at Shanghai Astronomical Observatory (SHAO) specializes in the physical processes that shape galaxies across cosmic time. Our research bridges the gap between massive cosmological simulations and high-precision sky surveys. We utilize high-resolution numerical simulations and observational data to probe dark matter and galactic evolution across cosmic time.",
    coreFields: ["Numerical Simulations", "Dark Matter Dynamics", "Galactic Archaeology"],
    labels: {
      readMore: "Read More",
      showLess: "Show Less",
      separator: "//"
    },
    // 字数与显示限制
    constraints: {
      mobileMaxChars: 120, // 移动端折叠时显示的字符数
      thresholdWidth: 1024 // 判定为移动端的像素阈值 (lg 断点)
    },
    styles: {
    btnTextSize: "text-base lg:text-lg",
    // 英文单词通常比中文长，字号可以稍微调小 1px 以保持单行显示
    fieldTagSize: "text-[15px] lg:text-[17px]", 
    fieldTagTracking: "tracking-[0.05em]" 
  }
  },

research: {
    archiveLabel: "Archive // 02", // 或者 "项目编号 02"
    sectionTitle: "Recent Research",
    sideText: "Research", // 侧边垂直文字
    exploreText: "Explore More Research",
    linkText: "Explore Publication",
    // 100% 零硬编码：新增装饰性标签
    readMoreText: "READ MORE",
    readLessText: "SHOW LESS",
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
      readMore: "// Read More",
      showLess: "// Show Less"
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
      locationLabel: "LOC." // 提取此处
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