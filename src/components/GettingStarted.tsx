import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Download, Cpu, MessageSquare, Database } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    icon: <Download size={20} />,
    title: '下载 APK',
    description: '从 GitHub Releases 下载最新 APK 安装包，在 Android 手机上安装。支持 Android 9+ (API 28)。',
  },
  {
    num: '02',
    icon: <Cpu size={20} />,
    title: '下载模型',
    description: '下载 GGUF 格式的大语言模型文件到手机存储。推荐 DeepSeek-R1、Qwen 等中文优化模型，根据手机性能选择量化规格。',
  },
  {
    num: '03',
    icon: <MessageSquare size={20} />,
    title: '开始对话',
    description: '输入问题，AI 以流式输出逐字回复。支持 Markdown 渲染和思考过程显示，对话自动保存到本地。',
  },
  {
    num: '04',
    icon: <Database size={20} />,
    title: '管理对话',
    description: '左滑删除对话、点击头像切换对话、查看历史记录。所有数据安全存储在手机 Room 数据库中。',
  },
];

export function GettingStarted() {
  const ref = useScrollReveal();

  return (
    <section id="getting-started" className="section-container" ref={ref}>
      <h2 className="section-title">快速<span className="text-gradient"> 开始</span></h2>
      <p className="section-subtitle">四步上手，让 AI 在口袋里运行</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            className={`card p-6 relative group hover:-translate-y-1 transition-all duration-300 reveal-delay-${Math.min(i, 6)}`}
          >
            <span className="text-5xl font-heading font-extrabold text-white/5 absolute top-3 right-4 select-none">
              {step.num}
            </span>
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 relative z-10 group-hover:glow-purple transition-all">
              {step.icon}
            </div>
            <h3 className="text-lg font-heading font-semibold text-white mb-2 relative z-10">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
