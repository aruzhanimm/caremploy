import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-purple-500/30">

      {/* Навигация */}
      <nav className="border-b border-white/5 bg-slate-950/50 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-white">
            Caremploy<span className="text-purple-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition">Модули</a>
            <a href="#how-it-works" className="hover:text-white transition">Как это работает</a>
          </div>
          <button className="text-sm font-semibold bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full transition">
            Войти
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
          AI-помощник для твоей карьеры
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Твоя первая стажировка — <br />
          работа <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">ИИ</span>, а не случайности.
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10">
          Умный анализ резюме, векторный подбор вакансий и симулятор собеседований со «злым HR». Получи оффер быстрее.
        </p>

        <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-4 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] transition-all hover:scale-105">
          Загрузить резюме
        </button>

        {/* Trust Block (Имитация) */}
        <div className="mt-24 pt-10 border-t border-white/5 w-full">
          <p className="text-sm text-slate-500 font-medium mb-6 uppercase tracking-widest">Студенты находят стажировки после подготовки у нас</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">
            <span className="text-xl font-bold font-serif">Kolesa Group</span>
            <span className="text-xl font-bold tracking-tighter">Astana Hub</span>
            <span className="text-xl font-bold">Yandex</span>
            <span className="text-xl font-bold tracking-widest">EPAM</span>
          </div>
        </div>
      </section>

      {/* Features / Modules */}
      <section id="features" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Всё, что нужно для <span className="text-purple-400">оффера</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-950 border border-white/5 p-8 rounded-2xl hover:border-purple-500/30 transition-colors">
              <div className="h-12 w-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center text-2xl mb-6">📄</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Resume Architect</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Превращаем скучные обязанности в активные достижения. ATS-Checker проверяет ключевые слова, а AI показывает, каких навыков не хватает.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>✓ Парсинг PDF/Docx</li>
                <li>✓ Action Verbs Transformation</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-950 border border-white/5 p-8 rounded-2xl hover:border-purple-500/30 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
              <div className="h-12 w-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center text-2xl mb-6">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Job Matcher</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Ищем не по тегам, а по смыслу (RAG). Векторизуем твое резюме и находим идеальные совпадения. "У тебя отличный проект на RAG, это именно то, что ищет компания."
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>✓ Vector Database (ChromaDB)</li>
                <li>✓ Semantic Search</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-950 border border-white/5 p-8 rounded-2xl hover:border-purple-500/30 transition-colors">
              <div className="h-12 w-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center text-2xl mb-6">🎙️</div>
              <h3 className="text-xl font-bold text-white mb-3">Interview Simulator</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Выбери роль (Team Lead, CEO) и пройди хардкорное собеседование. Получи Scorecard с анализом твоих STARR-ответов.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>✓ Voice-to-Voice (Whisper)</li>
                <li>✓ Real-time Tips</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Caremploy. AI Career Assistant.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}