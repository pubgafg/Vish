'use client';
import { useState } from 'react';
import categories from '../data/categories.json';

export default function Categories({ lang = 'fa', onSelect }: { lang?: string; onSelect?: (catKey: string, sub?: string) => void }){
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="p-2 grid grid-cols-4 gap-3">
      {Object.entries(categories).map(([key, cat]: any) => (
        <div key={key} className="text-center">
          <div className="w-14 h-14 mx-auto rounded-xl bg-red-50 flex items-center justify-center text-vishRed cursor-pointer" onClick={() => setOpen(open === key ? null : key)}>
            <div>{cat.fa.substring(0,2)}</div>
          </div>
          <div className="mt-1 text-xs font-medium">{cat[lang]}</div>
          {open === key && (
            <div className="mt-2 text-xs space-y-1 text-gray-700 text-right">
              {cat.sub.map((s:any, i:number) => (
                <div key={i} onClick={() => onSelect?.(key, s[lang])} className="cursor-pointer">{s[lang]}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
