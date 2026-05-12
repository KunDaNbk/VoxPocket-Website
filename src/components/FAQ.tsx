import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'VoxPocket 真的完全离线吗？',
    answer: '是的。所有语音识别和处理都在你的设备本地运行，不依赖任何云端服务。你可以飞行模式使用它，数据永远不会离开你的设备。',
  },
  {
    question: '支持哪些操作系统？',
    answer: 'VoxPocket 支持 Windows 10+、macOS 12+ 和主流 Linux 发行版（Ubuntu、Fedora、Arch 等）。我们使用 Electron 构建，确保跨平台体验一致。',
  },
  {
    question: '语音识别准确率如何？',
    answer: '基于 OpenAI Whisper 模型，在安静环境下中文识别准确率可达 95%+，英文 98%+。支持 large、medium、small 三种模型规格，可根据硬件选择。',
  },
  {
    question: '需要什么硬件配置？',
    answer: '推荐 8GB+ 内存和 4 核 CPU。如果使用 GPU 加速（支持 CUDA/Metal），小模型甚至可以在 4GB 设备上流畅运行。首次使用需下载语音模型（50MB-3GB）。',
  },
  {
    question: '如何导出笔记？',
    answer: '目前支持 Markdown 格式导出，兼容 Obsidian、Notion、Typora 等主流笔记软件。更多导出格式（PDF、Word）正在开发中。',
  },
  {
    question: 'VoxPocket 是免费的吗？',
    answer: '是的，完全开源免费，使用 MIT 许可证。你可以自由使用、修改和分发。欢迎通过 GitHub Sponsors 赞助开发。',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card overflow-hidden transition-all duration-300">
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-white pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ${
          isOpen ? 'pb-4 max-h-96' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const ref = useScrollReveal();

  return (
    <section id="faq" className="section-container" ref={ref}>
      <h2 className="section-title">常见<span className="text-gradient"> 问题</span></h2>
      <p className="section-subtitle">你可能想了解的事情</p>

      <div className="max-w-3xl mx-auto space-y-3">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className={`reveal-delay-${Math.min(i, 6)}`}>
            <FAQItem question={item.question} answer={item.answer} />
          </div>
        ))}
      </div>
    </section>
  );
}
