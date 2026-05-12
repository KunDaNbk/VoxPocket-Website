import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mic, GraduationCap, Stethoscope, Briefcase } from 'lucide-react';

const CASES = [
  {
    icon: <Mic size={24} />,
    title: '记者采访',
    description: '实时转录采访内容，自动分段、标注说话人，采访结束即可获得完整稿件。',
  },
  {
    icon: <GraduationCap size={24} />,
    title: '学生课堂',
    description: '录制课堂讲解，AI 自动提取重点，生成结构化复习笔记，备考更高效。',
  },
  {
    icon: <Stethoscope size={24} />,
    title: '会议记录',
    description: '离线记录会议讨论，保护商业机密，自动生成会议纪要和待办事项清单。',
  },
  {
    icon: <Briefcase size={24} />,
    title: '创意灵感',
    description: '随时随地捕捉灵感，边说边记，不打断思维流，写好导出继续创作。',
  },
];

export function UseCases() {
  const ref = useScrollReveal();

  return (
    <section id="usecases" className="section-container" ref={ref}>
      <h2 className="section-title">使用<span className="text-gradient"> 场景</span></h2>
      <p className="section-subtitle">无论你是什么角色，VoxPocket 都能提升你的效率</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CASES.map((item, i) => (
          <div
            key={item.title}
            className={`card p-6 text-center group hover:-translate-y-1 transition-all duration-300 reveal-delay-${Math.min(i, 6)}`}
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent-pink/10 flex items-center justify-center text-accent-pink group-hover:bg-accent-pink/20 transition-all">
              {item.icon}
            </div>
            <h3 className="text-lg font-heading font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
