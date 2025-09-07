'use client';
import { useEffect, useState } from 'react';

export default function Favorites(){
  const [favs, setFavs] = useState<any[]>([]);
  useEffect(()=>{
    const saved = localStorage.getItem('vish_favs');
    if (saved) setFavs(JSON.parse(saved));
  },[]);
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">نشان‌ها</h1>
      {favs.length === 0 ? <div className="text-gray-500">هیچ آگهی نشان نشده است.</div> : <ul className="list-disc pl-4">{favs.map((id,i)=> <li key={i}>{id}</li>)}</ul>}
    </div>
  )
}
