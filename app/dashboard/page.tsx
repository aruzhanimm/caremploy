"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_API;

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch(`${API}/users/me`, {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setUser)
      .catch(() => {
        window.location.href = "/auth";
      });
  }, []);

  if (!user) return <div className="p-10 text-white">Загрузка...</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">
        С возвращением, {user.name} 👋
      </h1>

      <div className="flex gap-4">
        <Link href="/resume" className="bg-purple-600 px-4 py-2 rounded">
          AI Резюме
        </Link>
        <Link href="/matcher" className="bg-blue-600 px-4 py-2 rounded">
          Мэтчинг
        </Link>
      </div>
    </div>
  );
}