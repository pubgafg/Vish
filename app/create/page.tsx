'use client';
import { useState } from 'react';
import provinces from '../../data/provinces.json';

export default function CreateAd(){
  const [title,setTitle] = useState(''); const [price,setPrice]=useState(''); const [province, setProvince] = useState(provinces[1]);
  const submit = () => {
    alert('آگهی ارسال شد (در نسخهٔ فعلی، ذخیره‌سازی لوکال می‌باشد)');
  };
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-3">ثبت آگهی جدید</h1>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full border p-2 rounded mb-2" placeholder="عنوان" />
      <input value={price} onChange={(e)=>setPrice(e.target.value)} className="w-full border p-2 rounded mb-2" placeholder="قیمت" />
      <select value={province} onChange={(e)=>setProvince(e.target.value)} className="w-full border p-2 rounded mb-2">
        {provinces.map(p=> <option key={p} value={p}>{p}</option>)}
      </select>
      <button onClick={submit} className="w-full bg-vishGreen text-white p-2 rounded">ارسال</button>
    </div>
  )
}
