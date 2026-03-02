import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Member from './components/Member';
import Opportunities from './components/Opportunities';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import { useTranslation } from './hooks/useTranslation';

export default function App() {
  const { lang, toggleLanguage, header, footer, research: resConfig, member: memConfig } = useTranslation();

  return (
    <div className="bg-[#101b39] min-h-screen text-[#e9e8ee] selection:bg-cyan-500/30 overflow-x-hidden font-sans relative">
      
      {/* 核心：将切换逻辑和 header 传入 Navbar */}
      <Navbar onToggleLanguage={toggleLanguage} currentLang={lang} header={header} />
      
      {/* 关键：pointer-events-none 确保装饰线条不遮挡 Nav 的交互 */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute left-8 lg:left-16 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        {/* ... 其他装饰 */}
      </div>

      {/* 点击 Logo 时，由于 reload()，Hero 会重新播放入场动画 */}
      <section id="home">
        <Hero key={`hero-${lang}`} />
      </section>

      <About key={`about-${lang}`} />

      <main className="max-w-[1440px] mx-auto px-10 sm:px-16 lg:px-32 py-32 space-y-60 relative">
        <section id="research" className="scroll-mt-40">
          <ScrollReveal key={`res-reveal-${lang}`}>
            <h2 className="text-4xl sm:text-5xl font-[200] tracking-[0.1em] uppercase mb-24 border-b border-white/5 pb-10">
              {resConfig?.sectionTitle}
            </h2>
          </ScrollReveal>
          <Research key={`res-list-${lang}`} /> 
        </section>

        <section id="member" className="scroll-mt-40">
          <ScrollReveal key={`mem-reveal-${lang}`}>
            <h2 className="text-4xl sm:text-5xl font-[200] tracking-[0.1em] uppercase mb-20 border-b border-white/5 pb-10">
              {memConfig?.sectionTitle}
            </h2>
          </ScrollReveal>
          <Member key={`mem-list-${lang}`} />
        </section>

        <Opportunities key={`opp-${lang}`} />
      </main>

      <Footer key={`footer-${lang}`} />

      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}