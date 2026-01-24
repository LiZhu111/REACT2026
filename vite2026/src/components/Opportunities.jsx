import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Opportunities() {
  const [isExpanded, setIsExpanded] = useState(false);

  // 核心文案
  const content = "We are constantly seeking motivated postdocs and students who are interested in galaxy dynamics and evolution. Our group provides a collaborative environment with access to state-of-the-art computational resources and world-class observational data. Whether you are interested in dynamical modelling, dark matter distribution, or the co-evolution of galaxies and black holes, we welcome your application.";

  return (
    <section id="opportunities" className="scroll-mt-40 relative">
      {/* 标题部分：与 Research/Member 保持一致 */}
      <ScrollReveal>
        <div className="text-cyan-500/40 font-[100] text-xs tracking-[0.5em] mb-4 uppercase">Archive // 04</div>
        <h2 className="text-4xl sm:text-5xl font-[200] tracking-[0.1em] uppercase mb-16 border-b border-white/5 pb-10">
          Opportunities
        </h2>
      </ScrollReveal>

      {/* 内容部分：借鉴 About Section 的无边框纯文字风格 */}
      <div className="relative">
        <ScrollReveal delay={200}>
          <div className="max-w-4xl">
            {/* 装饰性小标 */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-cyan-500/40"></div>
              <span className="text-cyan-400/60 text-[10px] tracking-[0.4em] uppercase font-[300]">Recruitment</span>
            </div>

            {/* 响应式正文：大屏显示全文，小屏 line-clamp-3 */}
            <div className="relative">
              <p className={`text-xl sm:text-2xl lg:text-3xl font-[100] text-gray-300 tracking-wide leading-relaxed transition-all duration-700 ${
                isExpanded ? 'line-clamp-none' : 'line-clamp-3 lg:line-clamp-none'
              }`}>
                {content}
              </p>
              
              {/* 移动端 Read More 按钮 */}
              <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="mt-6 text-[10px] tracking-[0.3em] uppercase text-cyan-400/80 hover:text-cyan-400 lg:hidden flex items-center gap-2 transition-colors"
              >
                <span className="w-4 h-px bg-cyan-400/40"></span>
                {isExpanded ? 'Show Less' : 'Read More'}
              </button>
            </div>

            {/* 按钮部分：采用无背景、带箭头的简洁风格 */}
            <motion.div 
              className="mt-16"
              whileHover={{ x: 10 }}
            >
              <a 
                href="mailto:lzhu@shao.ac.cn"
                className="group inline-flex items-center gap-8"
              >
                <span className="text-white font-[200] tracking-[0.4em] text-xs uppercase border-b border-white/10 pb-2 group-hover:border-cyan-500/50 transition-all">
                  Send Application
                </span>
                <span className="text-cyan-500 group-hover:translate-x-2 transition-transform duration-500 text-xl font-[100]">→</span>
              </a>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* 背景微弱光晕：保持呼吸感但无实体框 */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/[0.02] blur-[120px] rounded-full pointer-events-none"></div>
      </div>
    </section>
  );
}