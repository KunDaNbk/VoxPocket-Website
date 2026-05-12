import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Cog, Layers, Database, Smartphone, GitBranch, Network, Shield } from 'lucide-react';

const TECHS = [
  { icon: <Cog size={24} />, name: 'Whisper.cpp', desc: '高性能 C++ 推理引擎，支持 GPU 加速，模型量化确保低内存占用' },
  { icon: <Layers size={24} />, name: 'Electron + React', desc: '跨平台桌面框架，统一的 UI 体验，一次开发全平台部署' },
  { icon: <Database size={24} />, name: 'SQLite 本地存储', desc: '零配置嵌入式数据库，所有笔记和设置安全存储在你的设备上' },
  { icon: <Smartphone size={24} />, name: '响应式设计', desc: '自适应不同分辨率，从笔记本到 4K 屏幕都拥有完美体验' },
  { icon: <GitBranch size={24} />, name: 'Git 版本管理', desc: '开源透明，任何人都可以审查代码、提交 PR，共同构建更好的产品' },
  { icon: <Network size={24} />, name: '本地 AI 引擎', desc: '完全本地运行的 AI 模型，零网络依赖，快速响应的推理速度' },
];

export function Architecture() {
  const ref = useScrollReveal();

  return (
    <section id="architecture" className="section-container" ref={ref}>
      <h2 className="section-title">技术<span className="text-gradient"> 架构</span></h2>
      <p className="section-subtitle">现代技术栈构建的本地优先应用</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECHS.map((tech, i) => (
          <div
            key={tech.name}
            className={`card p-6 group hover:-translate-y-1 transition-all duration-300 reveal-delay-${Math.min(i, 6)}`}
          >
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-4 group-hover:glow-cyan transition-all">
              {tech.icon}
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">{tech.name}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">{tech.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 card p-6 text-center max-w-2xl mx-auto">
        <Shield className="w-10 h-10 text-accent-green mx-auto mb-3" />
        <p className="text-gray-300">
          整个技术栈均为<span className="text-accent-green font-semibold"> 本地优先 </span>
          设计，没有任何数据离开你的设备
        </p>
      </div>
    </section>
  );
}
