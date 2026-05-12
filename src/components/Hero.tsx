import { Download, Smartphone } from 'lucide-react';
import { GitHubIcon } from './icons/GitHubIcon';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 mb-8 animate-float">
          <Smartphone size={16} className="text-accent-cyan" />
          <span>Android 本地大模型助手</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight mb-6">
          口袋里的
          <span className="text-gradient"> AI</span>
          <br />
          <span className="text-glow-cyan">本地运行</span>，随时对话
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          VoxPocket 是一款 Android 应用，在你的手机上直接运行大语言模型。
          无需网络、无需注册、无需上传——AI 就在你的口袋里。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/KunDaNbk/VoxPocket/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            下载 APK
          </a>
          <a
            href="https://github.com/KunDaNbk/VoxPocket"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 text-white rounded-xl font-semibold transition-all hover:-translate-y-0.5 flex items-center gap-2"
          >
            <GitHubIcon size={20} />
            GitHub
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          支持 Android 9+，基于 llama.cpp 本地推理
        </p>
      </div>
    </section>
  );
}
