import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: '需要什么配置的 Android 手机？',
    answer: '推荐 8GB+ 运行内存和骁龙 8 系 / 天玑 9000 系等旗舰处理器。入门机型可使用 4GB 量化模型，旗舰机型可流畅运行 7B-14B 参数的模型。最低支持 Android 9 (API 28)。',
  },
  {
    question: '支持哪些模型？如何下载？',
    answer: '支持所有 GGUF 格式的大语言模型，推荐 DeepSeek-R1、Qwen2.5、Llama 3 等主流开源模型。可以从 Hugging Face 或魔搭社区下载 GGUF 量化文件，放到手机存储中通过内置文件选择器加载。',
  },
  {
    question: '真的完全离线吗？',
    answer: '是的。默认模式下，模型推理完全在你的手机本地运行，不需要任何网络连接。你也可以在设置中配置 OpenAI 兼容的远程 API 地址，切换到云端模式使用。',
  },
  {
    question: '对话数据存储在哪里？',
    answer: '所有对话历史使用 Room 数据库存储在应用私有目录中，其他应用无法访问。数据完全在你的手机上，不会上传到任何服务器。卸载应用前请导出你需要保留的对话。',
  },
  {
    question: 'VoxPocket 是免费的吗？',
    answer: '是的，完全开源免费，使用 MIT 许可证。没有付费墙、没有使用次数限制、没有广告。你可以自由使用、修改和分发代码。',
  },
  {
    question: '支持语音输入吗？',
    answer: '当前版本以文字输入为主，利用系统键盘的语音输入功能可以实现语音转文字。原生语音输入功能正在规划中。',
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
      <p className="section-subtitle">关于 VoxPocket 你可能想了解的事情</p>

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
