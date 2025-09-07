'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin(){
  const [pass, setPass] = useState(''); const router = useRouter();
  const login = () => { if (pass === 'admin123'){ localStorage.setItem('vish_admin', 'true'); router.push('/admin/dashboard'); } else alert('رمز اشتباه'); };
  return (
    <div className="max-w-sm mx-auto mt-20 border p-6 rounded">
      <h1 className="text-xl font-bold mb-4 text-center">ورود ادمین</h1>
      <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="رمز عبور" className="w-full border p-2 mb-3 rounded" />
      <button onClick={login} className="w-full bg-blue-600 text-white py-2 rounded">ورود</button>
    </div>
  )
}
