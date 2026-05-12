import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GraduationCap, Code, PenLine, HelpCircle } from 'lucide-react';

const CASES = [
  { icon: <GraduationCap size={24} />, title: '学习助手', description: '向AI提问知识问题，理解复杂概念，生成学习笔记。全部在本地完成，不受网络限制，随时随地查阅。' },
  { icon: <Code size={24} />, title: '编程伙伴', description: '讨论代码问题，让AI解释算法逻辑，生成代码片段。支持完整的 Markdown 代码块渲染。' },
  { icon: <PenLine size={24} />, title: '内容创作', description: '头脑风暴，文案润色，翻译校对。AI 帮你完善思路，所有草稿安全存储在你的手机上。' },
  { icon: <HelpCircle size={24} />, title: '知识问答', description: '不依赖搜索引擎，本地模型直接回答。没有广告、没有追踪、你的问题只有你和AI知道。' },
];

export function UseCases() {
  const ref = useScrollReveal();
  return (
    <section id="usecases" className="section-container" ref={ref}>
      <h2 className="section-title">使用<span className="text-gradient"> 场景</span></h2>
      <p className="section-subtitle">无论你的需求是什么，本地AI都能帮到你</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CASES.map((c, i) => (
          <div key={c.title} className={`card p-6 text-center group hover:-translate-y-1 transition-all duration-300 reveal-delay-${Math.min(i, 6)}`}>
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent-pink/10 flex items-center justify-center text-accent-pink group-hover:bg-accent-pink/20 transition-all">
              {c.icon}
            </div>
            <h3 className="text-lg font-heading font-semibold text-white mb-2">{c.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
