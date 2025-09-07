'use client';
import React from 'react';

export default function AdCard({ ad, onToggleFav, isFav }: { ad: any; onToggleFav: Function; isFav: boolean }){
  const timeAgo = (d: string) => {
    const date = new Date(d);
    const seconds = Math.floor((Date.now() - date.getTime())/1000);
    if (seconds < 60) return 'لحظاتی پیش';
    const minutes = Math.floor(seconds/60);
    if (minutes < 60) return `${minutes} دقیقه پیش`;
    const hours = Math.floor(minutes/60);
    if (hours < 24) return `${hours} ساعت پیش`;
    const days = Math.floor(hours/24);
    return `${days} روز پیش`;
  };

  return (
    <div className="border rounded-xl overflow-hidden shadow-sm">
      <div className="aspect-[4/3] w-full bg-gray-100 flex items-center justify-center">تصویر</div>
      <div className="p-3 text-sm space-y-1">
        <h3 className="font-bold">{ad.title}</h3>
        <p className="text-gray-700">{ad.price?.toLocaleString()} افغانی - {ad.province}</p>
        <p className="text-xs text-gray-500">{timeAgo(ad.createdAt)}</p>
        <div className="flex justify-between items-center mt-2">
          <button onClick={() => onToggleFav(ad.id)} className={`text-xl ${isFav ? 'text-red-500' : 'text-gray-400'}`}>
            {isFav ? '❤️' : '🤍'}
          </button>
          <button onClick={() => window.location.href = `/ad/${ad.id}`} className="text-sm bg-vishGreen text-white px-3 py-1 rounded">مشاهده</button>
        </div>
      </div>
    </div>
  )
}
