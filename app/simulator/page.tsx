import React from 'react';
import Link from 'next/link';

export default function InterviewSimulator() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex flex-col h-screen overflow-hidden">

      {/* Шапка */}
      <header className="h-16 border-b border-white/5 bg-slate-950 flex items-center justify-between px-6 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-xl font-black tracking-tighter text-white hover:opacity-80 transition">
            Caremploy<span className="text-purple-500">.</span>
          </Link>
          <span className="text-slate-600 text-sm border-l border-slate-800 pl-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            Mock-интервью: Junior Python/RAG Engineer
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-400">Роль: <span className="text-white">Senior Tech Lead</span></span>
          <button className="text-sm font-semibold bg-red-600/20 text-red-400 hover:bg-red-600/30 px-5 py-2 rounded-lg transition border border-red-500/30">
            Завершить сессию
          </button>
        </div>
      </header>

      {/* Основная зона */}
      <main className="flex-1 flex overflow-hidden">

        {/* ЛЕВАЯ ПАНЕЛЬ: Чат / Видео */}
        <section className="flex-1 flex flex-col border-r border-white/5 bg-slate-950 relative">

          {/* Имитация видео-аватара ИИ */}
          <div className="h-64 border-b border-white/5 bg-slate-900/50 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-slate-950/80"></div>
            <div className="h-24 w-24 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <span className="text-4xl">🤖</span>
            </div>
            <p className="mt-4 text-white font-medium z-10">AI Tech Lead</p>
            <div className="flex gap-1 mt-2 z-10">
              {/* Анимация голоса */}
              <div className="w-1 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1 h-5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>

          {/* Окно чата */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">

            {/* Сообщение от ИИ */}
            <div className="flex gap-4 max-w-3xl">
              <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-xl">🤖</div>
              <div className="bg-slate-900 border border-white/5 rounded-2xl p-4 rounded-tl-none">
                <p className="text-slate-300 leading-relaxed">
                  Привет! Вижу у тебя отличный опыт разработки на Python. Расскажи про самую сложную техническую проблему, с которой ты столкнулась при векторном поиске по большим текстовым документам, и как ты её решила?
                </p>
              </div>
            </div>

            {/* Сообщение от Пользователя */}
            <div className="flex gap-4 max-w-3xl ml-auto flex-row-reverse">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 text-white font-bold">С</div>
              <div className="bg-purple-600/20 border border-purple-500/30 rounded-2xl p-4 rounded-tr-none">
                <p className="text-slate-200 leading-relaxed">
                  Я использовала базу данных для хранения эмбеддингов, но при загрузке длинных текстов система начала терять контекст и выдавать неточные ответы.
                </p>
              </div>
            </div>
          </div>

          {/* Инпут для ввода */}
          <div className="p-6 border-t border-white/5 bg-slate-950">
            <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-full px-4 py-2 focus-within:border-purple-500/50 transition">
              <button className="text-slate-400 hover:text-emerald-400 transition p-2 bg-slate-800 rounded-full">
                🎙️
              </button>
              <input
                type="text"
                placeholder="Ответить текстом или нажать на микрофон (Whisper API)..."
                className="flex-1 bg-transparent border-none outline-none text-slate-200 placeholder-slate-600"
              />
              <button className="bg-purple-600 hover:bg-purple-500 text-white p-2 rounded-full transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </div>
          </div>
        </section>

        {/* ПРАВАЯ ПАНЕЛЬ: Real-time Tips & Scorecard */}
        <section className="w-80 bg-slate-900/30 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar">

          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Live Analysis
            </h3>

            {/* Подсказка STAR */}
            <div className="bg-slate-950 border border-emerald-500/30 rounded-xl p-4 relative overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">Метод STAR</span>
              </div>
              <p className="text-sm text-slate-300 mb-2">
                Отличное начало! Ты описала <span className="font-bold text-white">Situation</span> (потеря контекста).
              </p>
              <p className="text-xs text-slate-400">
                👉 Теперь расскажи про <span className="text-emerald-400">Action</span>: какой алгоритм чанкинга (chunking) или настройки RAG ты применила, чтобы это исправить?
              </p>
            </div>
          </div>

          {/* Оценка метрик */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Текущие метрики</h3>
            <div className="space-y-4 bg-slate-950 border border-white/5 rounded-xl p-4">

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">Технические знания</span>
                  <span className="text-white font-bold">85%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[85%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">Уверенность речи</span>
                  <span className="text-white font-bold">60%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 w-[60%]"></div>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">Используешь много слов-паразитов ("ну", "как бы").</p>
              </div>

            </div>
          </div>

          {/* Кнопка отчета */}
          <div className="mt-auto pt-6">
             <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold transition border border-white/5">
                Сгенерировать Scorecard
             </button>
          </div>

        </section>
      </main>
    </div>
  );
}