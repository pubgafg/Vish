'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Profile(){
  const [user, setUser] = useState<any>(null);
  const [dark, setDark] = useState(false);
  const router = useRouter();

  useEffect(()=>{
    const u = localStorage.getItem('vish_user');
    if (!u) router.push('/login');
    else setUser(JSON.parse(u));
    setDark(localStorage.getItem('darkMode') === 'true');
  },[]);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem('darkMode', String(next));
    document.documentElement.classList.toggle('dark', next);
  };

  if (!user) return null;

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">ویش من</h1>
      <p>👤 شماره: {user.phone}</p>
      <div className="mt-4">
        <button onClick={toggleDark} className="px-3 py-1 rounded bg-gray-200 dark:bg-slate-700">
          حالت شب: {dark ? 'روشن' : 'تاریک'}
        </button>
      </div>
      <div className="mt-4">
        <button onClick={() => { localStorage.removeItem('vish_user'); router.push('/') }} className="px-3 py-1 rounded bg-red-500 text-white">خروج</button>
      </div>
    </div>
  )
}
