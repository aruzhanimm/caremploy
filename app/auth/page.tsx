"use client"; // Обязательно для использования useState
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  // Имитация отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь в будущем будет реальный запрос (fetch) к FastAPI
    // Но для визуального демо мы просто редиректим на Дашборд
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">

      {/* Фоновые эффекты */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10">

        {/* Логотип */}
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-black tracking-tighter text-white">
            Caremploy<span className="text-purple-500">.</span>
          </Link>
          <p className="text-slate-400 mt-2 text-sm">Твой AI-карьерный консультант</p>
        </div>

        {/* Переключатель Вход/Регистрация */}
        <div className="flex p-1 bg-slate-950/50 rounded-xl mb-8 border border-white/5">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${isLogin ? 'bg-slate-800 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Войти
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${!isLogin ? 'bg-slate-800 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Регистрация
          </button>
        </div>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1 ml-1">Имя</label>
              <input
                type="text"
                placeholder="Aruzhan"
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1 ml-1">Email</label>
            <input
              type="email"
              required
              placeholder="student@aitu.edu.kz"
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1 ml-1">Пароль</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] mt-4"
          >
            {isLogin ? 'Войти в систему' : 'Создать аккаунт'}
          </button>
        </form>

        {/* Разделитель */}
        <div className="my-6 flex items-center text-slate-600">
          <div className="flex-1 border-t border-white/5"></div>
          <span className="px-3 text-xs font-medium uppercase tracking-wider">Или</span>
          <div className="flex-1 border-t border-white/5"></div>
        </div>

        {/* Кнопка Google (Заглушка) */}
        <button
          onClick={(e) => { e.preventDefault(); router.push('/dashboard'); }}
          className="w-full bg-slate-900 border border-white/10 hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-all flex justify-center items-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Продолжить с Google
        </button>

      </div>
    </div>
  );
}