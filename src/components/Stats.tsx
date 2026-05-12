import React, { forwardRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
  startCounting: boolean;
}

function StatItem({ value, suffix = '', label, icon, startCounting }: StatItemProps) {
  const count = useCountUp(value, 2000, startCounting);

  return (
    <div className="card p-6 text-center group hover:-translate-y-1 transition-transform">
      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:glow-purple transition-all">
        {icon}
      </div>
      <div className="text-3xl font-heading font-bold text-white mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
}

export const Stats = forwardRef<HTMLElement>((_props, ref) => {
  const [inView, setInView] = React.useState(false);
  const innerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { value: 100, suffix: '%', label: '离线运行', icon: <LockSvg /> },
    { value: 0, suffix: 'ms', label: '云端延迟', icon: <CloudOffSvg /> },
    { value: 60, suffix: '+', label: '支持语言', icon: <GlobeSvg /> },
    { value: 90, suffix: '%', label: '识别准确率', icon: <TargetSvg /> },
  ];

  return (
    <section className="section-container" ref={ref}>
      <div ref={innerRef}>
        <h2 className="section-title">为什么选择<span className="text-gradient"> VoxPocket</span></h2>
        <p className="section-subtitle">隐私、速度、准确性——三者兼得</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} startCounting={inView} />
          ))}
        </div>
      </div>
    </section>
  );
});

Stats.displayName = 'Stats';

function LockSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

function CloudOffSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.5 19H9a7 7 0 116.71-9h1.79a4.5 4.5 0 010 9H18" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function GlobeSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function TargetSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
