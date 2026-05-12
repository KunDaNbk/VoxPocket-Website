import React, { forwardRef } from 'react';
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
      <div className="text-3xl font-heading font-bold text-white mb-1">{count}{suffix}</div>
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
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { value: 100, suffix: '%', label: '本地运行', icon: <ShieldSvg /> },
    { value: 0, suffix: '', label: '网络依赖', icon: <WifiOffSvg /> },
    { value: 99, suffix: '%', label: '数据留在本地', icon: <LockSvg /> },
    { value: 0, suffix: '', label: '注册账号', icon: <UserOffSvg /> },
  ];

  return (
    <section className="section-container" ref={ref}>
      <div ref={innerRef}>
        <h2 className="section-title">为什么选择<span className="text-gradient"> VoxPocket</span></h2>
        <p className="section-subtitle">本地运行，隐私至上，自由对话</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => <StatItem key={s.label} {...s} startCounting={inView} />)}
        </div>
      </div>
    </section>
  );
});
Stats.displayName = 'Stats';

function ShieldSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function WifiOffSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="1" y1="1" x2="23" y2="23" /><path d="M16.72 11.06A10.94 10.94 0 0119 12.55" /><path d="M5 12.55a10.94 10.94 0 015.17-2.39" /><path d="M10.71 5.05A16 16 0 0122.58 9" /><path d="M1.42 9a15.91 15.91 0 014.7-2.88" /><path d="M8.53 16.11a6 6 0 016.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  );
}
function LockSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}
function UserOffSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}
