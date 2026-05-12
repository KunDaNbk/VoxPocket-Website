import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Shield, Wifi, Zap, Brain, FileText, MessageSquare } from 'lucide-react';

const FEATURES = [
  {
    icon: <Shield size={24} />,
    title: '完全离线',
    description: '所有语音处理在本地完成，你的声音永远不会离开设备。无需网络连接，隐私得到最大保护。',
  },
  {
    icon: <Wifi size={24} />,
    title: '无需网络',
    description: '没有云端服务器，没有数据传输。即使在飞机上、地下室或任何无网络环境，VoxPocket 都能完美工作。',
  },
  {
    icon: <Zap size={24} />,
    title: '实时转录',
    description: '边说边转，实时看到文字生成。支持分段记录，自动断句和标点，让笔记更加清晰易懂。',
  },
  {
    icon: <Brain size={24} />,
    title: 'AI 摘要',
    description: '内置 AI 引擎自动生成长篇语音的结构化摘要，提取关键要点，节省你的阅读时间。',
  },
  {
    icon: <FileText size={24} />,
    title: 'Markdown 导出',
    description: '一键导出为格式完美的 Markdown 文件，兼容 Obsidian、Notion、Typora 等所有主流笔记工具。',
  },
  {
    icon: <MessageSquare size={24} />,
    title: '多语言支持',
    description: '支持 60+ 语言的语音识别，包括中英日韩等主流语言，还能自动检测语种并切换模型。',
  },
];

export function Features() {
  const ref = useScrollReveal();

  return (
    <section id="features" className="section-container" ref={ref}>
      <h2 className="section-title">核心<span className="text-gradient"> 功能</span></h2>
      <p className="section-subtitle">从语音到笔记，一站式完成</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feature, i) => (
          <div
            key={feature.title}
            className={`card p-6 group hover:-translate-y-1 transition-all duration-300 reveal-delay-${Math.min(i, 6)}`}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:glow-purple group-hover:bg-primary/20 transition-all">
              {feature.icon}
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
