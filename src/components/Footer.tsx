import { GitHubIcon } from './icons/GitHubIcon';
import { Heart } from 'lucide-react';

const FOOTER_LINKS = {
  product: {
    title: '产品',
    links: [
      { href: '#features', label: '功能' },
      { href: '#comparison', label: '对比' },
      { href: '#architecture', label: '架构' },
      { href: '#usecases', label: '场景' },
    ],
  },
  resources: {
    title: '资源',
    links: [
      { href: '#getting-started', label: '快速开始' },
      { href: '#faq', label: 'FAQ' },
      { href: 'https://github.com/KunDaNbk/VoxPocket-Website', label: 'GitHub' },
      { href: 'https://github.com/KunDaNbk/VoxPocket-Website/releases', label: '下载' },
    ],
  },
  legal: {
    title: '法律',
    links: [
      { href: '#', label: '隐私政策' },
      { href: '#', label: '使用条款' },
      { href: 'https://github.com/KunDaNbk/VoxPocket-Website/blob/main/LICENSE', label: 'MIT 许可证' },
    ],
  },
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center font-bold text-white text-sm">
                V
              </div>
              <span className="text-xl font-heading font-bold text-white">
                <span className="text-gradient">Vox</span>Pocket
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              本地优先的跨平台语音笔记应用，让你的声音变成有价值的笔记。
            </p>
            <a
              href="https://github.com/KunDaNbk/VoxPocket-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <GitHubIcon size={18} />
              <span className="text-sm">GitHub</span>
            </a>
          </div>

          {Object.values(FOOTER_LINKS).map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2" role="list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} VoxPocket. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-accent-pink" /> by the open source community
          </p>
        </div>
      </div>
    </footer>
  );
}
