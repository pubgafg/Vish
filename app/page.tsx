'use client';
import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import AdCard from '../components/AdCard';
import provinces from '../data/provinces.json';

const sampleAds = [
  { id: 'ad1', title: 'فروش خانه در کابل', price: 12000000, province: 'کابل', createdAt: new Date().toISOString() },
  { id: 'ad2', title: 'موتر کرولا 2012', price: 4500000, province: 'هرات', createdAt: new Date(Date.now()-3600*1000).toISOString() },
  { id: 'ad3', title: 'موبایل نو', price: 25000, province: 'مزار شریف', createdAt: new Date(Date.now()-86400*1000).toISOString() }
];

export default function HomePage(){
  const [lang, setLang] = useState<'fa'|'en'|'ps'>('fa');
  const [selectedProvince, setSelectedProvince] = useState<string>('همه ولایت‌ها');
  const [ads, setAds] = useState(sampleAds);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(()=>{
    const saved = localStorage.getItem('vish_favs');
    if (saved) setFavorites(JSON.parse(saved));
  },[]);

  const toggleFav = (id:string) => {
    setFavorites(prev => {
      const next = prev.includes(id) ? prev.filter(x=>x!==id) : [...prev,id];
      localStorage.setItem('vish_favs', JSON.stringify(next));
      return next;
    });
  };

  const filtered = selectedProvince === 'همه ولایت‌ها' ? ads : ads.filter(a=>a.province === selectedProvince);

  return (
    <div className="max-w-md mx-auto p-3">
      <header className="flex items-center gap-2 p-2 border-b">
        <div className="text-xl font-bold text-vishRed">ویش</div>
        <input className="flex-1 rounded-full bg-gray-100 px-3 py-2 text-sm" placeholder={lang==='fa' ? 'جستجو...' : 'Search...'} />
        <select value={lang} onChange={(e)=>setLang(e.target.value as any)} className="text-xs p-1 border rounded">
          <option value="fa">دری</option>
          <option value="ps">پشتو</option>
          <option value="en">EN</option>
        </select>
      </header>

      <div className="p-3">
        <select value={selectedProvince} onChange={(e)=>setSelectedProvince(e.target.value)} className="w-full border rounded-lg p-2 mb-3">
          {provinces.map((p:any)=> <option key={p} value={p}>{p}</option>)}
        </select>

        <Categories lang={lang} onSelect={(k,s)=>alert(`فیلتر: ${k} → ${s}`)} />

        <div className="space-y-4 mt-3">
          {filtered.map(ad => (
            <AdCard key={ad.id} ad={ad} onToggleFav={toggleFav} isFav={favorites.includes(ad.id)} />
          ))}
          {filtered.length === 0 && <div className="text-center text-gray-500">هیچ آگهی‌ای وجود ندارد.</div>}
        </div>
      </div>
    </div>
  )
}
