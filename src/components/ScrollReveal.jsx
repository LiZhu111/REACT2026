import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // 如果想让页面往回滚动时也重复动画，保留下面这行；否则删掉。
          setIsVisible(false);
        }
      },
      { threshold: 0.15 } // 元素进入 15% 时触发
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-transition ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      {children}
    </div>
  );
}