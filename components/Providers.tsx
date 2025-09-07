'use client';
import React, { useEffect, useState } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setDark(saved);
    document.documentElement.classList.toggle('dark', saved);
  }, []);
  return <>{children}</>;
}
