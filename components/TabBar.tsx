'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TabBar(){
  const router = useRouter();
  return (
    <div className="fixed bottom-0 left-0 right-0 grid grid-cols-5 border-t bg-white dark:bg-slate-800 text-sm z-50">
      <button onClick={() => router.push('/')} className="p-2">🏠 آگهی‌ها</button>
      <button onClick={() => router.push('/favorites')} className="p-2">⭐ نشان‌ها</button>
      <button onClick={() => router.push('/create') } className="p-2">➕ ثبت آگهی</button>
      <button onClick={() => router.push('/chats')} className="p-2">💬 چت</button>
      <button onClick={() => router.push('/profile')} className="p-2">👤 ویش من</button>
    </div>
  )
}
