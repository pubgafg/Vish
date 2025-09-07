'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AdminChart(){
  const data = [
    {date: 'روز 1', users: 50, ads: 120},
    {date: 'روز 2', users: 80, ads: 200},
    {date: 'روز 3', users: 120, ads: 260},
    {date: 'روز 4', users: 160, ads: 320},
    {date: 'روز 5', users: 200, ads: 400},
  ];
  return (
    <div className="bg-white border rounded-lg p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">روند رشد</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="users" stroke="#82ca9d" name="کاربران" />
          <Line type="monotone" dataKey="ads" stroke="#8884d8" name="آگهی‌ها" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
