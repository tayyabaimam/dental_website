'use client';

import { Phone } from 'lucide-react';

export default function StickyPhone() {
  const phoneNumber = "(02) 8000 0000";
  
  return (
    <>
      {/* Mobile Sticky Phone Button */}
      <div className="md:hidden">
        <a 
          href={`tel:${phoneNumber}`}
          className="fixed bottom-5 right-5 z-50 bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl border-4 border-white transition-all duration-200 hover:scale-110 animate-pulse-slow"
          aria-label="Call emergency dental hotline"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>
      
      {/* Desktop Floating Phone Button (smaller, less prominent) */}
      <div className="hidden md:block">
        <a 
          href={`tel:${phoneNumber}`}
          className="fixed bottom-8 right-8 z-50 bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl border-4 border-white transition-all duration-200 hover:scale-110"
          aria-label="Call emergency dental hotline"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </>
  );
} 