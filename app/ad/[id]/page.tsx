'use client';
import { useParams } from 'next/navigation';

export default function AdDetail(){
  // This is a simple placeholder detail page
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold">جزئیات آگهی</h1>
      <p className="text-gray-600">محتوای آگهی در اینجا نمایش داده می‌شود.</p>
    </div>
  )
}
