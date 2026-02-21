import React from 'react';
import Link from 'next/link'; // <-- Добавили импорт Link

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex">

      {/* Sidebar (Боковая панель) */}
      <aside className="w-64 border-r border-white/5 bg-slate-950/50 hidden md:flex flex-col p-6 fixed h-full">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white mb-12 hover:opacity-80 transition">
          Caremploy<span className="text-purple-500">.</span>
        </Link>
        <nav className="flex flex-col space-y-4">
          <Link href="/dashboard" className="flex items-center space-x-3 text-purple-400 bg-purple-500/10 px-4 py-3 rounded-xl font-medium transition">
            <span>📊</span> <span>Дашборд</span>
          </Link>
          <Link href="/resume" className="flex items-center space-x-3 text-slate-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition">
            <span>📄</span> <span>AI Резюме</span>
          </Link>
          <Link href="/matcher" className="flex items-center space-x-3 text-slate-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition">
            <span>🎯</span> <span>Мэтчинг</span>
          </Link>
          <Link href="/simulator" className="flex items-center space-x-3 text-slate-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition">
            <span>🎙️</span> <span>Симулятор</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-64 p-8 max-w-6xl">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white">С возвращением, Студент 👋</h1>
            <p className="text-slate-400 mt-1">Твой карьерный путь под контролем ИИ.</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 border-2 border-slate-950 flex items-center justify-center font-bold text-white shadow-lg">
            С
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Левая колонка: Скоринг и Задачи */}
          <div className="lg:col-span-2 space-y-8">

            {/* Карточка: Action Items */}
            <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                ⚡ Action Items <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">От ИИ</span>
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-950 border border-white/5 hover:border-purple-500/30 transition">
                  <div className="mt-1 h-5 w-5 rounded-full border-2 border-slate-600 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-medium">Добавь проект на FastAPI в резюме</p>
                    <p className="text-sm text-slate-400">Это повысит твой Match Score для 14 вакансий Python-разработчика.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-950 border border-white/5 hover:border-purple-500/30 transition">
                  <div className="mt-1 h-5 w-5 rounded-full border-2 border-slate-600 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-medium">Пройди Mock-интервью на Junior Backend</p>
                    <p className="text-sm text-slate-400">Ты давно не тренировал ответы по базам данных.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Секция: Топ Мэтчи */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Топ-3 стажировки для тебя</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Карточка вакансии 1 */}
                <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-5 hover:border-blue-500/30 transition group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-blue-500/10 text-blue-400 text-xs font-bold px-2 py-1 rounded-md">98% Match</span>
                    <span className="text-slate-500 text-sm">FinTech Hub</span>
                  </div>
                  <h3 className="text-white font-bold mb-1 group-hover:text-blue-400 transition">Python / RAG Intern</h3>
                  <p className="text-sm text-slate-400 mb-4 line-clamp-2">Ищем стажера для работы с LangChain и векторными базами данных...</p>
                  <Link href="/matcher" className="block text-center w-full py-2 mt-2 bg-slate-950 hover:bg-blue-600/20 text-blue-400 rounded-lg text-sm font-semibold transition border border-white/5 hover:border-blue-500/30">
                    Анализ + Отклик
                  </Link>
                </div>

                {/* Карточка вакансии 2 */}
                <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-5 hover:border-purple-500/30 transition group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-purple-500/10 text-purple-400 text-xs font-bold px-2 py-1 rounded-md">92% Match</span>
                    <span className="text-slate-500 text-sm">Tech Corp</span>
                  </div>
                  <h3 className="text-white font-bold mb-1 group-hover:text-purple-400 transition">Junior Backend Dev</h3>
                  <p className="text-sm text-slate-400 mb-4 line-clamp-2">Разработка API на FastAPI, оптимизация запросов к PostgreSQL...</p>
                  <Link href="/matcher" className="block text-center w-full py-2 mt-2 bg-slate-950 hover:bg-purple-600/20 text-purple-400 rounded-lg text-sm font-semibold transition border border-white/5 hover:border-purple-500/30">
                    Анализ + Отклик
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Правая колонка: Статус */}
          <div className="space-y-8">
            {/* Круговой прогресс (Имитация через CSS) */}
            <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
              <h2 className="text-lg font-bold text-white mb-6 z-10">Карьерный статус</h2>

              <div className="relative w-32 h-32 mb-4 z-10">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path className="text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" strokeDasharray="72, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-white">72%</span>
                </div>
              </div>

              <p className="text-sm text-slate-400 z-10">Готовность к рынку. <br/>Резюме отлично бьется с Junior-вакансиями.</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}