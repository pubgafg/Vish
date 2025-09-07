'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Recharts = dynamic(()=>import('../../components/AdminChart'), { ssr:false });

export default function Dashboard(){
  useEffect(()=>{ if (localStorage.getItem('vish_admin') !== 'true') window.location.href = '/admin/login'; },[]);
  const [stats, setStats] = useState({users:1540, ads:3200, activeAds:3100, reports:47});
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">📊 پنل مدیریت ویش</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 border rounded-lg bg-gray-50 text-center"><p className="text-lg font-bold">{stats.users}</p><p className="text-sm">کاربران</p></div>
        <div className="p-4 border rounded-lg bg-gray-50 text-center"><p className="text-lg font-bold">{stats.ads}</p><p className="text-sm">کل آگهی‌ها</p></div>
        <div className="p-4 border rounded-lg bg-gray-50 text-center"><p className="text-lg font-bold">{stats.activeAds}</p><p className="text-sm">آگهی فعال</p></div>
        <div className="p-4 border rounded-lg bg-gray-50 text-center"><p className="text-lg font-bold">{stats.reports}</p><p className="text-sm">گزارش‌ها</p></div>
      </div>
      <Recharts />
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Link href="/admin/reports"><div className="p-4 border rounded-lg hover:bg-gray-100 text-center">🚨 گزارش‌ها</div></Link>
        <Link href="/admin/users"><div className="p-4 border rounded-lg hover:bg-gray-100 text-center">👤 کاربران</div></Link>
      </div>
    </div>
  )
}
