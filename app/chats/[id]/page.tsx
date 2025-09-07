'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ChatDetail(){
  const [messages, setMessages] = useState([{sender:'other', type:'text', content:'سلام، موجود است'}]);
  const [text, setText] = useState(''); const [blocked, setBlocked] = useState(false);
  const send = () => { if(!text || blocked) return; setMessages([...messages, {sender:'me', type:'text', content:text}]); setText(''); };
  const toggleBlock = () => setBlocked(!blocked);
  return (
    <div className="max-w-md mx-auto h-[600px] flex flex-col border rounded">
      <div className="flex justify-between items-center border-b p-2">
        <span className="font-bold">فروشنده</span>
        <button onClick={toggleBlock} className={`px-3 py-1 rounded ${blocked ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{blocked ? 'آن‌بلاک' : 'بلاک'}</button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {messages.map((m,i)=>(<div key={i} className={`p-2 rounded max-w-[70%] ${m.sender==='me' ? 'bg-green-200 ml-auto' : 'bg-gray-200 mr-auto'}`}>{m.type==='text' ? m.content : <audio controls src={m.content} />}</div>))}
        {blocked && <div className="text-center text-sm text-red-600 mt-4">🚫 این کاربر بلاک شده است.</div>}
      </div>
      {!blocked && <div className="flex items-center border-t p-2 space-x-2">
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="پیام..." className="flex-1 border p-2 rounded" />
        <button onClick={send} className="bg-vishGreen text-white px-3 py-1 rounded">ارسال</button>
      </div>}
    </div>
  )
}
