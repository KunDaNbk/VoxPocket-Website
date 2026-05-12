import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check } from 'lucide-react';

const CHANGES = [
  {
    version: 'v0.3.0',
    date: '2026-05-01',
    items: [
      '新增 AI 智能摘要功能，自动提取语音内容要点',
      '优化 Whisper 模型加载速度，启动时间减少 40%',
      '修复 macOS Ventura 兼容性问题',
      '改进 Markdown 导出排版格式',
    ],
  },
  {
    version: 'v0.2.0',
    date: '2026-04-15',
    items: [
      '新增 60+ 语言自动检测功能',
      '支持 CUDA GPU 加速推理',
      '添加录音音量可视化指示器',
      '修复 Linux Wayland 下窗口闪烁问题',
    ],
  },
  {
    version: 'v0.1.0',
    date: '2026-03-20',
    items: [
      '首次公开发布',
      '支持基础的语音录制和转录功能',
      '支持 Windows、macOS、Linux 三大平台',
      'Markdown 格式导出',
    ],
  },
];

export function Changelog() {
  const ref = useScrollReveal();

  return (
    <section className="section-container" ref={ref}>
      <h2 className="section-title">更新<span className="text-gradient"> 日志</span></h2>
      <p className="section-subtitle">持续进化，越来越好用</p>

      <div className="max-w-3xl mx-auto space-y-6">
        {CHANGES.map((release, i) => (
          <div
            key={release.version}
            className={`card p-6 reveal-delay-${Math.min(i, 6)}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-lg text-sm font-semibold font-mono">
                {release.version}
              </span>
              <span className="text-gray-500 text-sm">{release.date}</span>
            </div>
            <ul className="space-y-2" role="list">
              {release.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-gray-300">
                  <Check size={16} className="text-accent-green flex-shrink-0 mt-1" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
