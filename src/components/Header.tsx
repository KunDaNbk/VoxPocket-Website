import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#features', label: '功能' },
  { href: '#comparison', label: '对比' },
  { href: '#architecture', label: '架构' },
  { href: '#usecases', label: '场景' },
  { href: '#getting-started', label: '开始' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="主导航">
        <a href="#" className="flex items-center gap-2 group" aria-label="VoxPocket 首页">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform">
            V
          </div>
          <span className="text-xl font-heading font-bold text-white">
            <span className="text-gradient">Vox</span>Pocket
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/KunDaNbk/VoxPocket-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 text-sm"
          >
            下载
          </a>
          <a
            href="#getting-started"
            className="px-5 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            快速开始
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? '关闭菜单' : '打开菜单'}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-16 bg-[#0A0A0F]/95 backdrop-blur-xl transition-opacity duration-300 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="移动端菜单"
      >
        <ul className="flex flex-col items-center gap-2 pt-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMobile}
                className="block px-8 py-3 text-lg text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-3 pt-8">
          <a
            href="https://github.com/KunDaNbk/VoxPocket-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
          >
            下载
          </a>
          <a
            href="#getting-started"
            onClick={closeMobile}
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all"
          >
            快速开始
          </a>
        </div>
      </div>
    </header>
  );
}
