import React from 'react';
import Link from 'next/link';

export default function SmartMatcher() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex flex-col h-screen overflow-hidden">

      {/* Шапка */}
      <header className="h-16 border-b border-white/5 bg-slate-950 flex items-center justify-between px-6 flex-shrink-0 z-10">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-xl font-black tracking-tighter text-white hover:opacity-80 transition">
            Caremploy<span className="text-purple-500">.</span>
          </Link>
          <span className="text-slate-600 text-sm border-l border-slate-800 pl-4">Smart Job Matcher</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1.5 rounded-lg flex items-center gap-2">
            <span>Векторная база активна</span>
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
          </div>
        </div>
      </header>

      {/* Основная зона */}
      <main className="flex-1 flex overflow-hidden">

        {/* ЛЕВАЯ ПАНЕЛЬ: Фильтры (Опциональные, так как работает RAG) */}
        <aside className="w-64 border-r border-white/5 bg-slate-950 p-6 flex flex-col gap-8 custom-scrollbar overflow-y-auto">
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Настройки AI-поиска</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-sm text-slate-300">
                <input type="checkbox" defaultChecked className="rounded border-slate-700 bg-slate-900 text-purple-500 focus:ring-purple-500/50" />
                Учитывать Soft Skills
              </label>
              <label className="flex items-center gap-3 text-sm text-slate-300">
                <input type="checkbox" defaultChecked className="rounded border-slate-700 bg-slate-900 text-purple-500 focus:ring-purple-500/50" />
                Искать скрытые стажировки
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Стек (Приоритет)</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-600/20 text-purple-400 border border-purple-500/30 text-xs px-3 py-1.5 rounded-lg cursor-pointer hover:bg-purple-600/30 transition">Python</span>
              <span className="bg-slate-800 text-slate-300 border border-slate-700 text-xs px-3 py-1.5 rounded-lg cursor-pointer hover:bg-slate-700 transition">Next.js</span>
              <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs px-3 py-1.5 rounded-lg cursor-pointer hover:bg-blue-600/30 transition">RAG / LLM</span>
              <span className="bg-slate-800 text-slate-300 border border-slate-700 text-xs px-3 py-1.5 rounded-lg cursor-pointer hover:bg-slate-700 transition">Solidity</span>
            </div>
          </div>
        </aside>

        {/* ПРАВАЯ ПАНЕЛЬ: Лента вакансий */}
        <section className="flex-1 overflow-y-auto p-8 bg-slate-900/30 custom-scrollbar relative">

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Найдено 3 идеальных совпадения</h1>
                <p className="text-slate-400 text-sm">Основано на семантическом анализе твоего резюме и проектов.</p>
              </div>
            </div>

            <div className="space-y-6">

              {/* Карточка 1: Высокий Match */}
              <div className="bg-slate-950 border border-purple-500/30 rounded-2xl p-6 relative overflow-hidden shadow-[0_0_30px_-10px_rgba(168,85,247,0.2)] hover:border-purple-500/60 transition-colors group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-3xl rounded-full pointer-events-none"></div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <h2 className="text-xl font-bold text-white group-hover:text-purple-400 transition">Junior AI / Python Engineer</h2>
                    <p className="text-slate-500 text-sm mt-1">TechData AI Hub • Офис / Гибрид • Оплачиваемая стажировка</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                      96%
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest">Match Score</span>
                  </div>
                </div>

                <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-4 mb-6 relative z-10">
                  <h3 className="text-xs font-bold text-purple-400 uppercase mb-2 flex items-center gap-2">
                    <span>✨</span> Почему ты подходишь:
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Твой опыт проектирования <span className="text-white font-medium">RAG-системы для анализа законодательства</span> с использованием Python и LLM API идеально закрывает наши текущие задачи. Мы как раз ищем стажера для работы с векторными базами данных и автоматизации работы с документами.
                  </p>
                </div>

                <div className="flex gap-4 relative z-10">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2.5 rounded-lg transition shadow-lg shadow-purple-500/20">
                    Откликнуться в 1 клик
                  </button>
                  <button className="flex-1 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-semibold py-2.5 rounded-lg transition flex justify-center items-center gap-2">
                    <span>✍️</span> Сгенерировать Cover Letter
                  </button>
                </div>
              </div>

              {/* Карточка 2: Web3/Solidity */}
              <div className="bg-slate-950 border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group">

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition">Junior Smart Contract Developer</h2>
                    <p className="text-slate-500 text-sm mt-1">DeFi Startup • Удаленка • Проектная работа</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-black text-blue-400">89%</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest">Match Score</span>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-white/5 rounded-xl p-4 mb-6">
                  <h3 className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-2">
                    <span>🧠</span> Анализ ИИ:
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Нам нужен джуниор с базовым пониманием блокчейна. Твои учебные проекты по написанию смарт-контрактов на <span className="text-white font-medium">Solidity</span> для тестовой сети Ethereum показывают, что ты готова быстро влиться в разработку наших Web3-продуктов.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 rounded-lg transition">
                    Изучить вакансию
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}