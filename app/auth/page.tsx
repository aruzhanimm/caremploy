"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API;

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = isLogin ? "login" : "register";

    const res = await fetch(`${API}/auth/${endpoint}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        isLogin ? { email, password } : { name, email, password }
      ),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("Ошибка авторизации");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-3xl">

        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-black text-white">
            Caremploy<span className="text-purple-500">.</span>
          </Link>
        </div>

        <div className="flex mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 ${isLogin ? "text-white" : "text-slate-400"}`}
          >
            Войти
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 ${!isLogin ? "text-white" : "text-slate-400"}`}
          >
            Регистрация
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {!isLogin && (
            <input
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-slate-800 text-white rounded-lg"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-slate-800 text-white rounded-lg"
            required
          />

          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-slate-800 text-white rounded-lg"
            required
          />

          <button className="w-full bg-purple-600 py-3 rounded-lg text-white">
            {isLogin ? "Войти" : "Создать аккаунт"}
          </button>
        </form>
      </div>
    </div>
  );
}