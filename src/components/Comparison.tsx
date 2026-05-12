import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CheckCircle, XCircle } from 'lucide-react';

const COMPARISON_ROWS = [
  { feature: '完全离线运行', voxpocket: true, others: false },
  { feature: '无需注册账号', voxpocket: true, others: false },
  { feature: '数据留在本地', voxpocket: true, others: false },
  { feature: '完全免费无限制', voxpocket: true, others: false },
  { feature: '开源代码可审查', voxpocket: true, others: false },
  { feature: '思考过程展示', voxpocket: true, others: false },
  { feature: 'Markdown 渲染', voxpocket: true, others: true },
  { feature: '流式响应输出', voxpocket: true, others: true },
];

export function Comparison() {
  const ref = useScrollReveal();

  return (
    <section id="comparison" className="section-container" ref={ref}>
      <h2 className="section-title">与<span className="text-gradient"> 同类产品</span>对比</h2>
      <p className="section-subtitle">本地 AI 助手 vs 云端 AI 助手的本质区别</p>

      <div className="max-w-3xl mx-auto card overflow-hidden">
        <div className="grid grid-cols-3 gap-0">
          <div className="bg-white/5 p-4 font-heading font-semibold text-white">功能</div>
          <div className="bg-primary/20 p-4 font-heading font-semibold text-primary-light text-center">VoxPocket</div>
          <div className="bg-white/5 p-4 font-heading font-semibold text-gray-400 text-center">云端AI</div>

          {COMPARISON_ROWS.map((row, i) => (
            <div key={row.feature} className="contents">
              <div className={`p-4 text-gray-300 border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                {row.feature}
              </div>
              <div className={`p-4 flex justify-center border-t border-white/5 ${i % 2 === 0 ? 'bg-primary/[0.02]' : ''}`}>
                {row.voxpocket ? (
                  <CheckCircle size={20} className="text-accent-green" />
                ) : (
                  <XCircle size={20} className="text-accent-red" />
                )}
              </div>
              <div className={`p-4 flex justify-center border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                {row.others ? (
                  <CheckCircle size={20} className="text-accent-green" />
                ) : (
                  <XCircle size={20} className="text-accent-red opacity-50" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
