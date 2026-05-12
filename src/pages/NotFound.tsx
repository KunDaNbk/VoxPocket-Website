import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';

export function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0A0A0F] px-4">
      <div className="text-center">
        <p className="text-8xl font-heading font-extrabold text-gradient mb-4">404</p>
        <h1 className="text-2xl font-heading font-bold text-white mb-2">页面未找到</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          你访问的页面不存在或已被移动。请检查链接是否正确，或返回首页。
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-primary/30"
        >
          <HomeIcon size={20} />
          返回首页
        </Link>
      </div>
    </main>
  );
}
