'use client';

import { Phone } from 'lucide-react';

export default function Header() {
  const phoneNumber = "(02) 8000 0000";
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-5xl rounded-2xl bg-white/60 backdrop-blur-lg shadow-2xl border border-white/40 flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <div className="flex items-center gap-2 select-none">
        <span className="text-2xl font-extrabold text-blue-700 tracking-tight">VYNLOX</span>
        <span className="hidden sm:inline text-base font-semibold text-blue-400 tracking-wide">Emergency Dental</span>
      </div>
      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 shadow-lg border border-red-100 hover:bg-white/100 hover:scale-105 transition-all"
        style={{ color: '#dc2626' }}
      >
        <Phone className="w-6 h-6" />
        <span className="hidden sm:inline text-lg font-bold">{phoneNumber}</span>
      </a>
    </header>
  );
} 