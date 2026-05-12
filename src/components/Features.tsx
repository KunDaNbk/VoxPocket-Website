import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MessageSquare, Brain, FileText, Database, Zap, Monitor } from 'lucide-react';

const FEATURES = [
  {
    icon: <MessageSquare size={24} />,
    title: 'AI 对话',
    description: '与本地部署的大语言模型实时对话，支持流式输出，AI 响应逐字呈现，对话自动保存到本地数据库。',
  },
  {
    icon: <Brain size={24} />,
    title: '思考过程',
    description: '支持 DeepSeek-R1 等模型的思考过程显示，可折叠/展开思考卡片，一键隐藏/显示所有思考过程。',
  },
  {
    icon: <FileText size={24} />,
    title: 'Markdown 渲染',
    description: '完整支持标题、加粗、斜体、代码块、引用、列表、链接等 Markdown 格式，让 AI 回复更清晰易读。',
  },
  {
    icon: <Database size={24} />,
    title: '本地存储',
    description: '基于 Room 数据库永久保存对话历史，所有数据都在你的手机内，删除对话、上下文压缩轻松管理。',
  },
  {
    icon: <Zap size={24} />,
    title: '实时流式响应',
    description: '基于 SSE 协议的流式输出，AI 想一个字说一个字，无需等待完整生成即可开始阅读回复内容。',
  },
  {
    icon: <Monitor size={24} />,
    title: '深色主题',
    description: '统一的 VoxPocket 紫色品牌视觉效果，护眼深色主题，用户/AI 消息气泡清晰区分，流畅动画。',
  },
];

export function Features() {
  const ref = useScrollReveal();
  return (
    <section id="features" className="section-container" ref={ref}>
      <h2 className="section-title">核心<span className="text-gradient"> 功能</span></h2>
      <p className="section-subtitle">本地大模型助手的完整体验</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f, i) => (
          <div key={f.title} className={`card p-6 group hover:-translate-y-1 transition-all duration-300 reveal-delay-${Math.min(i, 6)}`}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:glow-purple group-hover:bg-primary/20 transition-all">
              {f.icon}
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-gray-400 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
