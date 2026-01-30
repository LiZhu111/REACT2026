import React, { useState, useEffect } from 'react';
import { siteContent } from '../data/siteContent';

export default function Footer() {
  const { footer } = siteContent;
  const [isMobile, setIsMobile] = useState(false);

  // 监听屏幕尺寸，用于智能截断逻辑
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 智能截断函数：地址在桌面端优先完整显示，移动端安全截断
  const adaptiveTruncate = (text, limit, mobileLimit) => {
    if (!text) return "";
    const currentLimit = isMobile ? (mobileLimit || limit) : 150; // 桌面端给极大上限
    return text.length > currentLimit ? text.slice(0, currentLimit) + "..." : text;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050a18] pt-40 pb-16 border-t border-white/5 mt-60">
      
      {/* 1. 回到顶部按钮：完全参数化 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button onClick={scrollToTop} className="group flex flex-col items-center gap-4 transition-all">
          <div className="relative w-px h-16 bg-white/10 overflow-hidden">
            <div className="absolute inset-0 w-full h-1/2 bg-gradient-to-t from-cyan-500 via-cyan-400 to-transparent group-hover:h-full transition-all duration-700"></div>
          </div>
          <span className="text-xs tracking-[0.4em] text-cyan-400/60 group-hover:text-cyan-400 uppercase font-[400] transition-colors">
            {footer.backToTop}
          </span>
          <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_12px_#22d3ee] group-hover:scale-125 transition-all"></div>
        </button>
      </div>

      <div className="max-w-[1440px] mx-auto px-10 sm:px-16 lg:px-32">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-32">
          
          {/* 2. 品牌与地址区：响应式保护逻辑 */}
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <h2 className={`text-3xl font-[300] ${footer.styles.brandTracking} text-white leading-tight`}>
                {footer.brand.line1} <br />
                <span className="text-cyan-500/70 text-lg italic tracking-[0.1em]">{footer.brand.line2}</span>
              </h2>
              <div className="h-px w-16 bg-cyan-500/30"></div>
            </div>

            <div className="space-y-4">
              {/* 机构名称 */}
              <p className={`${footer.styles.orgTextSize} ${footer.styles.orgFontWeight} text-gray-300 tracking-[0.1em] uppercase leading-relaxed`}>
                {adaptiveTruncate(footer.brand.orgName, footer.constraints.orgNameMax)}
              </p>
              
              {/* 地址：桌面端换行全显，移动端按 mobileLimit 截断 */}
              <p className={`${footer.styles.addressTextSize} text-gray-400 font-[300] leading-loose`}>
                <span className="text-cyan-500/40 mr-2">LOC.</span>
                {adaptiveTruncate(footer.brand.address, footer.constraints.addressMax, footer.constraints.mobileAddressLimit)}
              </p>
            </div>
          </div>

          {/* 3. 导航区：动态循环映射 */}
          <div className="flex flex-wrap gap-x-24 gap-y-10">
            {footer.sections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-xs tracking-[0.2em] text-cyan-500/60 uppercase font-[600]">
                  {section.title}
                </h4>
                <ul className={`space-y-4 text-sm ${footer.styles.navLinkTracking} uppercase font-[400] text-gray-400`}>
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a 
                        href={link.url} 
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noreferrer" : ""}
                        className="hover:text-cyan-400 transition-colors block"
                      >
                        {adaptiveTruncate(link.name, footer.constraints.linkNameMax)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 4. 底部版权：动态年份 + 数据驱动样式 */}
        <div className="mt-32 pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-start gap-6">
          <p className={`${footer.styles.copyrightSize} tracking-[0.1em] text-gray-500 uppercase font-[300]`}>
            © {new Date().getFullYear()} {footer.copyright}
          </p>
          
          <div className={`flex items-center gap-4 ${footer.styles.copyrightSize} tracking-[0.1em] text-gray-500 uppercase font-[300]`}>
            <span className={footer.styles.taglineTracking}>{footer.tagline}</span>
            <div className="w-1 h-1 rounded-full bg-gray-700"></div>
            <span>{footer.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}