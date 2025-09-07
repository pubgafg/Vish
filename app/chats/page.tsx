'use client';
import Link from 'next/link';

export default function Chats(){
  const chats = [{id:'c1', title:'گفتگو با فروشنده'}];
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-3">چت‌ها</h1>
      <div className="space-y-2">
        {chats.map(c=> <Link key={c.id} href={`/chats/${c.id}`} className="block p-3 border rounded">{c.title}</Link>)}
      </div>
    </div>
  )
}
