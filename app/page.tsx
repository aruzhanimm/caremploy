import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-purple-500/30 relative overflow-hidden">

      {/* Фоновый градиент в стиле AITUConnect (звездная/неоновая глубина) */}
      <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10"></div>

      {/* Навигация (Стиль плавающего "островка" как на скрине) */}
      <div className="fixed w-full top-4 z-50 flex justify-center px-4">
        <nav className="w-full max-w-4xl bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 h-16 flex items-center justify-between shadow-lg shadow-black/50">
          <div className="text-xl font-black tracking-tighter text-white">
            Caremploy<span className="text-purple-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Модули</a>
          </div>
          <Link href="/auth" className="text-sm font-semibold bg-blue-600/90 hover:bg-blue-500 text-white px-5 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            Войти ↗
          </Link>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          AI-помощник для твоей карьеры
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Твой помощник
          для  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-blue-600">успешной карьеры</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12">
          Умный анализ резюме, векторный подбор вакансий и симулятор собеседований со «злым HR». Получи оффер быстрее.
        </p>

        {/* Супер-светящаяся кнопка */}
        <Link href="/resume" className="relative group inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></div>
          <div className="relative bg-slate-950 border border-white/10 text-white font-semibold py-4 px-10 rounded-full flex items-center gap-2 transition-transform group-hover:scale-[1.02]">
            Загрузить резюме
            <span className="text-xl">✨</span>
          </div>
        </Link>

        {/* Блок с картинкой (Светящийся плейсхолдер) */}
        <div className="mt-24 w-full max-w-4xl relative group perspective-1000">
          {/* Свечение вокруг картинки */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>

          {/* Сама картинка */}
          <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-2 shadow-2xl overflow-hidden">
            {/* Сюда вставишь ссылку на свою картинку */}
            <img
              src="https://admin.thecurrent.pk/media/uploads/2025/5/2231-N7ZOSSYHHV_1748562619.jpg"
              alt="Caremploy Interface"
              className="w-full h-auto rounded-xl opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Features / Modules */}
      <section id="features" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Всё, что нужно для <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">оффера</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group bg-slate-900/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
              <div className="h-12 w-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">📄</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Resume Architect</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Превращаем скучные обязанности в активные достижения. ATS-Checker проверяет ключевые слова, а AI показывает, каких навыков не хватает.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Парсинг PDF/Docx</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Action Verbs Transformation</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="group bg-slate-900/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="h-12 w-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Job Matcher</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Ищем не по тегам, а по смыслу. Векторизуем твое резюме и находим идеальные совпадения. &#34; У тебя отличный проект, это именно то, что нужно. &#34;
              </p>
              <ul className="text-sm text-slate-500 space-y-2 relative z-10">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Vector Database (ChromaDB)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Semantic Search</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="group bg-slate-900/40 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300">
              <div className="h-12 w-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🎙️</div>
              <h3 className="text-xl font-bold text-white mb-3">Interview Simulator</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Выбери роль (Team Lead, CEO) и пройди хардкорное собеседование. Получи Scorecard с анализом твоих STARR-ответов.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Voice-to-Voice (Whisper)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Real-time Tips</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-slate-500 text-sm bg-slate-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Caremploy. AI Career Assistant.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}