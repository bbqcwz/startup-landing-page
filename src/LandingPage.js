import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [views, setViews] = useState(0);
  const [joins, setJoins] = useState(0);

  useEffect(() => {
    setViews(prev => prev + 1);
  }, []);

  const handleJoinClick = () => {
    setJoins(prev => prev + 1);
    alert('感谢你的加入！');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 text-white">
      <header className="flex justify-between items-center px-8 py-6">
        <div className="text-3xl font-bold">创业之星</div>
        <nav>
          <a href="#" className="mx-4 hover:underline">首页</a>
          <a href="#features" className="mx-4 hover:underline">特色功能</a>
          <a href="#contact" className="mx-4 hover:underline">联系我们</a>
        </nav>
      </header>

      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6">探索你无限的可能性</h1>
        <p className="text-xl mb-8">加入我们的创新社区，一起实现创业梦想。</p>

        <div className="flex justify-center">
          <input
            type="email"
            placeholder="输入邮箱地址"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-l-lg"
          />
          <button
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-r-lg font-semibold"
            onClick={handleJoinClick}
          >
            立即加入
          </button>
        </div>

        <div className="mt-8">
          <p>浏览人数: {views}</p>
          <p>加入人数: {joins}</p>
        </div>
      </section>

      <section id="features" className="py-16 bg-white text-gray-800">
        <h2 className="text-center text-4xl font-bold mb-12">我们的特色</h2>
        <div className="grid grid-cols-3 gap-10 px-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">创新课程</h3>
            <p>通过创新性的在线课程快速提升。</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">专家指导</h3>
            <p>行业领先的专家为你的创业之路保驾护航。</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">资源社区</h3>
            <p>连接全球创业者，分享资源和经验。</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-gray-900 text-center py-8">
        <p>联系我们: info@chuangye.com</p>
        <p className="mt-2">© 2025 创业之星. 版权所有。</p>
      </footer>
    </div>
  );
}
