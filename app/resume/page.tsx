"use client";
import React, { useState } from 'react';
import Link from 'next/link';
const API = process.env.NEXT_PUBLIC_API;

export default function ResumeArchitect() {
  // Состояния приложения
  const [step, setStep] = useState<'choose' | 'edit'>('choose');
  const [template, setTemplate] = useState<'classic' | 'modern'>('classic');
  const [isUploading, setIsUploading] = useState(false);

  // Данные резюме (связаны с формой слева и шаблоном справа)
  const [resumeData, setResumeData] = useState({
    name: '',
    role: '',
    email: '',
    education: '',
    skills: '',
    experience: ''
  });

  // Имитация загрузки и парсинга PDF
  const handleFileUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setResumeData({
        name: 'Aruzhan Kartam',
        role: 'Software Engineer',
        email: 'aruzhan@example.com',
        education: 'Astana IT University, SE-2423',
        skills: 'Python, JavaScript, Next.js, RAG, Solidity',
        experience: '• Спроектировала RAG-систему для анализа законодательства РК на Python.\n• Разрабатывала смарт-контракты (Ethereum, Solidity).'
      });
      setIsUploading(false);
      setStep('edit');
    }, 1500); // Имитация задержки ИИ
  };

  const handleManualEntry = () => {
    setResumeData({ name: '', role: '', email: '', education: '', skills: '', experience: '' });
    setStep('edit');
  };

  // --- ЭКРАН 1: ВЫБОР ---
  if (step === 'choose') {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[100px] rounded-full"></div>

        <Link href="/dashboard" className="absolute top-6 left-6 text-slate-400 hover:text-white flex items-center gap-2 transition">
          ← В Дашборд
        </Link>

        <h1 className="text-4xl font-bold mb-4 z-10">Создание резюме</h1>
        <p className="text-slate-400 mb-12 z-10">Выбери, как хочешь начать. ИИ поможет в любом случае.</p>

        <div className="flex gap-6 z-10">
          {/* Кнопка: Парсинг PDF */}
          <button
            onClick={handleFileUpload}
            disabled={isUploading}
            className="w-72 h-80 bg-slate-900/50 border border-white/10 hover:border-purple-500/50 rounded-3xl p-8 flex flex-col items-center justify-center gap-6 transition-all hover:-translate-y-2 group relative overflow-hidden"
          >
            {isUploading && <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-20"><span className="animate-pulse">ИИ анализирует...</span></div>}
            <div className="h-20 w-20 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-4xl group-hover:scale-110 transition">📄</div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Загрузить PDF</h3>
              <p className="text-sm text-slate-400">ИИ сам достанет всю информацию и разложит по полочкам.</p>
            </div>
          </button>

          {/* Кнопка: Вручную */}
          <button
            onClick={handleManualEntry}
            className="w-72 h-80 bg-slate-900/50 border border-white/10 hover:border-blue-500/50 rounded-3xl p-8 flex flex-col items-center justify-center gap-6 transition-all hover:-translate-y-2 group"
          >
            <div className="h-20 w-20 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-4xl group-hover:scale-110 transition">✍️</div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">С чистого листа</h3>
              <p className="text-sm text-slate-400">Заполни базовую форму, а ИИ превратит это в профессиональный текст.</p>
            </div>
          </button>
        </div>
      </div>
    );
  }

  // --- ЭКРАН 2: РЕДАКТОР (SPLIT VIEW) ---
  return (
    <div className="h-screen bg-slate-950 text-slate-200 flex flex-col overflow-hidden">

      {/* Шапка */}
      <header className="h-16 border-b border-white/5 bg-slate-950 flex items-center justify-between px-6 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-xl font-black tracking-tighter text-white">
            Caremploy<span className="text-purple-500">.</span>
          </Link>
          <span className="text-slate-600 text-sm border-l border-slate-800 pl-4">AI Builder</span>
        </div>
        <button className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-lg text-sm font-semibold transition">
          Экспорт в PDF (LaTeX)
        </button>
      </header>

      <main className="flex-1 flex overflow-hidden">

        {/* ЛЕВАЯ ПАНЕЛЬ: Форма ввода */}
        <section className="w-[45%] p-8 overflow-y-auto border-r border-white/5 bg-slate-950 custom-scrollbar">
          <h2 className="text-xl font-bold text-white mb-6">Данные резюме</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-xs text-slate-400 mb-1">ФИО</label>
              <input
                type="text"
                value={resumeData.name}
                onChange={e => setResumeData({...resumeData, name: e.target.value})}
                className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-purple-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Желаемая должность</label>
              <input
                type="text"
                value={resumeData.role}
                onChange={e => setResumeData({...resumeData, role: e.target.value})}
                className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-purple-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Email / Контакты</label>
              <input
                type="text"
                value={resumeData.email}
                onChange={e => setResumeData({...resumeData, email: e.target.value})}
                className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-purple-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Образование</label>
              <input
                type="text"
                value={resumeData.education}
                onChange={e => setResumeData({...resumeData, education: e.target.value})}
                className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-purple-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Ключевые навыки (через запятую)</label>
              <textarea
                value={resumeData.skills}
                onChange={e => setResumeData({...resumeData, skills: e.target.value})}
                className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-purple-500 outline-none h-20"
              />
            </div>
            <div>
              <div className="flex justify-between items-end mb-1">
                <label className="block text-xs text-slate-400">Опыт и проекты</label>
                <button className="text-xs text-purple-400 hover:text-purple-300">✨ Улучшить с ИИ</button>
              </div>
              <textarea
                value={resumeData.experience}
                onChange={e => setResumeData({...resumeData, experience: e.target.value})}
                className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-purple-500 outline-none h-40"
              />
            </div>
          </div>
        </section>

        {/* ПРАВАЯ ПАНЕЛЬ: Превью и AI Советы */}
        <section className="w-[55%] bg-slate-900 flex flex-col relative">

          {/* Панель управления шаблоном */}
          <div className="absolute top-4 left-4 right-4 bg-slate-950/80 backdrop-blur border border-white/10 rounded-xl p-3 flex justify-between items-center z-10 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-400">Оценка ИИ:</span>
              <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-1 rounded">85 / 100</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-400">Шаблон:</span>
              <select
                value={template}
                onChange={(e) => setTemplate(e.target.value as 'classic' | 'modern')}
                className="bg-slate-900 border border-white/10 text-white text-sm rounded-lg px-3 py-1 outline-none focus:border-purple-500"
              >
                <option value="classic">Academic (LaTeX Style)</option>
                <option value="modern">Modern Tech</option>
              </select>
            </div>
          </div>

          {/* Рабочий стол (Серый фон) */}
          <div className="flex-1 overflow-y-auto p-10 pt-24 pb-40 flex justify-center custom-scrollbar">

            {/* Лист А4 (Само превью) */}
            <div className={`w-[210mm] min-h-[297mm] bg-white text-slate-900 shadow-2xl p-12 transition-all ${template === 'classic' ? 'font-serif' : 'font-sans'}`}>

              {/* Шаблон 1: Строгий академический (Имитация LaTeX) */}
              {template === 'classic' && (
                <div>
                  <div className="text-center border-b-2 border-slate-900 pb-4 mb-6">
                    <h1 className="text-3xl font-bold uppercase tracking-wider mb-1">{resumeData.name || 'Имя Фамилия'}</h1>
                    <p className="text-sm">{resumeData.email || 'email@example.com'} | {resumeData.role || 'Должность'}</p>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2">Education</h2>
                    <p className="text-sm whitespace-pre-line">{resumeData.education || 'Напиши про свой ВУЗ'}</p>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2">Technical Skills</h2>
                    <p className="text-sm">{resumeData.skills || 'Перечисли технологии'}</p>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2">Experience & Projects</h2>
                    <p className="text-sm whitespace-pre-line leading-relaxed">{resumeData.experience || 'Опиши свой опыт работы или пет-проекты'}</p>
                  </div>
                </div>
              )}

              {/* Шаблон 2: Современный (Modern Tech) */}
              {template === 'modern' && (
                <div className="flex gap-8">
                  <div className="w-1/3 border-r border-slate-200 pr-6">
                    <h1 className="text-3xl font-black text-slate-900 mb-2 leading-tight">{resumeData.name || 'Имя Фамилия'}</h1>
                    <p className="text-purple-600 font-bold text-sm mb-6">{resumeData.role || 'Должность'}</p>

                    <h3 className="font-bold text-xs uppercase text-slate-400 mb-2">Контакты</h3>
                    <p className="text-sm mb-6">{resumeData.email || 'email@example.com'}</p>

                    <h3 className="font-bold text-xs uppercase text-slate-400 mb-2">Навыки</h3>
                    <p className="text-sm">{resumeData.skills || 'Перечисли технологии'}</p>
                  </div>
                  <div className="w-2/3">
                    <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2"><span className="text-purple-500">■</span> Опыт</h3>
                    <p className="text-sm whitespace-pre-line mb-8">{resumeData.experience || 'Опиши свой опыт работы'}</p>

                    <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2"><span className="text-purple-500">■</span> Образование</h3>
                    <p className="text-sm whitespace-pre-line">{resumeData.education || 'Напиши про свой ВУЗ'}</p>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Плавающая панель советов снизу */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] bg-slate-950/90 backdrop-blur border border-purple-500/30 rounded-2xl p-4 shadow-2xl flex gap-4 items-start">
            <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">🤖</div>
            <div>
              <p className="text-xs text-purple-400 font-bold mb-1">Совет от ИИ:</p>
              <p className="text-sm text-slate-300">
                В блоке "Опыт" ты используешь пассивные глаголы ("Делала", "Разрабатывала"). Нажми кнопку <span className="text-purple-400 font-medium cursor-pointer">✨ Улучшить с ИИ</span> слева, и я перепишу их на язык достижений ("Спроектировала", "Оптимизировала").
              </p>
            </div>
          </div>

        </section>
      </main>
    </div>
  );

   const handleImprove = async () => {
  const res = await fetch(`${API}/resumes/improve`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: resumeData.experience }),
  });

  const data = await res.json();

  setResumeData({
    ...resumeData,
    experience: data.improved,
  });
};

const handleSave = async () => {
  await fetch(`${API}/resumes`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: JSON.stringify(resumeData),
      skills: resumeData.skills.split(",").map(s => s.trim()),
      template,
    }),
  });

  alert("Сохранено в базу данных");
};

}