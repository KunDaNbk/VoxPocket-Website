import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Cpu, Layers, Database, Server, GitBranch, Smartphone, Shield } from 'lucide-react';

const TECHS = [
  { icon: <Cpu size={24} />, name: 'llama.cpp 推理引擎', desc: '高性能 C++ 推理库，通过 NDK 编译为 Android 原生库，支持 GGUF 量化模型，在手机上高效运行大语言模型' },
  { icon: <Layers size={24} />, name: 'Jetpack Compose', desc: '现代 Android UI 框架，声明式编程，Material3 设计语言，统一的深色主题和品牌视觉体验' },
  { icon: <Database size={24} />, name: 'Room 数据库', desc: 'Android 官方推荐的本地持久化方案，自动保存对话历史，支持 Flow 实时数据观察' },
  { icon: <Server size={24} />, name: 'llama-server', desc: '内置 HTTP 服务器，通过 OkHttp 客户端与本地模型通信，无需云端服务器即可完成推理' },
  { icon: <GitBranch size={24} />, name: 'Kotlin 协程', desc: '多 StateFlow 协调管理 UI 状态、部分响应、思考过程、服务器日志等多个异步数据流' },
  { icon: <Smartphone size={24} />, name: 'ContentResolver', desc: '标准 Android API 处理模型文件访问，无需 Root 权限，支持 SAF 文件选择器' },
];

export function Architecture() {
  const ref = useScrollReveal();
  return (
    <section id="architecture" className="section-container" ref={ref}>
      <h2 className="section-title">技术<span className="text-gradient"> 架构</span></h2>
      <p className="section-subtitle">在 Android 上运行本地大模型的完整技术栈</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECHS.map((t, i) => (
          <div key={t.name} className={`card p-6 group hover:-translate-y-1 transition-all duration-300 reveal-delay-${Math.min(i, 6)}`}>
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-4 group-hover:glow-cyan transition-all">
              {t.icon}
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">{t.name}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">{t.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 card p-6 text-center max-w-2xl mx-auto">
        <Shield className="w-10 h-10 text-accent-green mx-auto mb-3" />
        <p className="text-gray-300">
          纯<span className="text-accent-green font-semibold"> 本地 </span>架构——从推理引擎到数据存储，全程无网络依赖
        </p>
      </div>
    </section>
  );
}
