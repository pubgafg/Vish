'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage(){
  const [step, setStep] = useState<'phone'|'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const sendOtp = async () => {
    if(!phone) return alert('شماره وارد نشده');
    await fetch('/api/auth/send-otp', {method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({phone})});
    setStep('otp');
  };

  const verify = async () => {
    const res = await fetch('/api/auth/verify-otp', {method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({phone, code: otp})});
    if (res.ok) {
      localStorage.setItem('vish_user', JSON.stringify({phone}));
      router.push('/profile');
    } else {
      alert('کد اشتباه است');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">ورود به ویش</h1>
      {step === 'phone' && (
        <div className="space-y-3">
          <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="شماره موبایل" className="w-full border p-2 rounded" />
          <button onClick={sendOtp} className="w-full bg-vishGreen text-white p-2 rounded">دریافت کد تایید</button>
        </div>
      )}
      {step === 'otp' && (
        <div className="space-y-3">
          <input value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="کد تایید" className="w-full border p-2 rounded" />
          <button onClick={verify} className="w-full bg-blue-600 text-white p-2 rounded">تایید و ورود</button>
        </div>
      )}
    </div>
  )
}
