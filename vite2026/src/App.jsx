import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Member from './components/Member';
import Opportunities from './components/Opportunities';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  return (
    <div className="bg-[#101b39] min-h-screen text-[#e9e8ee] selection:bg-cyan-500/30 overflow-x-hidden font-sans relative">
      <Navbar />
      
      {/* 全局装饰背景层 */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute left-8 lg:left-16 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-32 items-center">
          <div className="rotate-90 text-[9px] tracking-[0.6em] text-cyan-500/20 uppercase font-[200] whitespace-nowrap">
            Galactic Dynamics Group · SHAO
          </div>
        </div>
      </div>

      <Hero />
      <About />

      {/* 主内容区域 */}
      <main className="max-w-[1440px] mx-auto px-10 sm:px-16 lg:px-32 py-32 space-y-60 relative">
        
        {/* 02. Research Section */}
        <section id="research" className="scroll-mt-40 relative">
          <div className="absolute -left-16 top-0 hidden lg:block text-[10px] tracking-[1em] text-cyan-500/10 uppercase vertical-text">
            Research
          </div>
          <ScrollReveal>
            <div className="text-cyan-500/40 font-[100] text-xs tracking-[0.5em] mb-4 uppercase">Archive // 02</div>
            <h2 className="text-4xl sm:text-5xl font-[200] tracking-[0.1em] uppercase mb-24 border-b border-white/5 pb-10">
              Recent Research
            </h2>
          </ScrollReveal>
          <Research /> 
        </section>

        {/* 03. Member Section */}
        <section id="member" className="scroll-mt-40 relative">
          <ScrollReveal>
            <div className="text-cyan-500/40 font-[100] text-xs tracking-[0.5em] mb-4 uppercase">Archive // 03</div>
            <h2 className="text-4xl sm:text-5xl font-[200] tracking-[0.1em] uppercase mb-20 border-b border-white/5 pb-10">
              Group Members
            </h2>
          </ScrollReveal>
          <Member />
        </section>

        {/* 04. Opportunities Section (新重构组件) */}
        <Opportunities />

      </main>

      <Footer />

      <style>{`
        .vertical-text { writing-mode: vertical-rl; text-orientation: mixed; }
        html { scroll-behavior: smooth; }
        @keyframes shimmer { 100% { transform: translateX(100%); } }
      `}</style>
    </div>
  );
}