'use client';
import { useState } from 'react';

export default function AdminReports(){
  const [reports, setReports] = useState([{id:'r1', targetId:'ad12', reason:'کلاهبرداری', status:'pending'}]);
  const update = (id:any, s:any) => setReports(reports.map(r=> r.id===id? {...r, status:s}: r));
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">گزارش‌ها</h1>
      {reports.map(r=> <div key={r.id} className="border p-3 mb-3 rounded">
        <p>مورد: {r.targetId}</p><p>دلیل: {r.reason}</p><p>وضعیت: {r.status}</p>
        <div className="flex space-x-2 mt-2"><button onClick={()=>update(r.id,'resolved')} className="bg-red-500 text-white px-3 py-1 rounded">حذف/مسدود</button><button onClick={()=>update(r.id,'rejected')} className="bg-green-500 text-white px-3 py-1 rounded">بی‌اثر</button></div>
      </div>)}
    </div>
  )
}
