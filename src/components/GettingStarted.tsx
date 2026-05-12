import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Download, Mic, FileText, Rocket } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    icon: <Download size={20} />,
    title: '下载 & 安装',
    description: '从 GitHub Release 下载对应平台的安装包，双击安装即可使用。支持 Windows、macOS、Linux。',
  },
  {
    num: '02',
    icon: <Mic size={20} />,
    title: '开始录音',
    description: '选择你的麦克风设备，点击录音按钮开始。VoxPocket 会自动检测语言并开始转录。',
  },
  {
    num: '03',
    icon: <FileText size={20} />,
    title: '导出笔记',
    description: '录制完成后，你可以查看 AI 摘要、编辑文字，然后一键导出为 Markdown 文件。',
  },
  {
    num: '04',
    icon: <Rocket size={20} />,
    title: '融入工作流',
    description: '导出的 Markdown 文件可直接导入 Obsidian、Notion 等工具，无缝融入你的笔记系统。',
  },
];

export function GettingStarted() {
  const ref = useScrollReveal();

  return (
    <section id="getting-started" className="section-container" ref={ref}>
      <h2 className="section-title">快速<span className="text-gradient"> 开始</span></h2>
      <p className="section-subtitle">四步上手，开始你的语音笔记之旅</p>

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
