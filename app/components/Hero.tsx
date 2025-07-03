'use client';

import { Phone, ShieldCheck, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const phoneNumber = "(02) 8000 0000";
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200 pt-32 pb-16">
      {/* Animated blurred blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-red-200/30 rounded-full blur-2xl animate-pulse-slow z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-100/40 rounded-full blur-2xl z-0" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-6xl mx-auto gap-16 lg:gap-24">
        {/* Left: Headline/CTA */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          <div className="space-y-4 w-full">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-blue-900 drop-shadow-xl">
              Emergency<br />
              <span className="text-blue-600">Dental Care</span><br />
              <span className="text-3xl md:text-5xl font-bold text-blue-400">Sydney</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-800 max-w-xl font-medium mx-auto lg:mx-0">
              Severe tooth pain? Broken tooth? <span className="text-blue-600 font-bold">We&apos;ll see you today.</span> Call now for immediate relief.
            </p>
          </div>
          {/* Phone CTA Card */}
          <div className="w-full max-w-md mx-auto lg:mx-0 flex flex-col gap-4 bg-white/80 backdrop-blur-lg shadow-2xl border border-white/40 rounded-2xl px-8 py-7">
            <a
              href={`tel:${phoneNumber}`}
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/90 shadow-lg border border-red-100 hover:bg-white/100 hover:scale-105 transition-all text-3xl font-extrabold"
              style={{ color: '#dc2626' }}
            >
              <Phone className="w-8 h-8" />
              <span>{phoneNumber}</span>
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="btn-urgent text-lg md:text-xl flex items-center justify-center gap-2 px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all animate-pulse-slow"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now for Same-Day Appointment</span>
            </a>
          </div>
          {/* Trust badges row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2 w-full">
            <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full text-blue-700 font-semibold text-sm shadow border border-blue-100 backdrop-blur">
              <ShieldCheck className="w-5 h-5 text-blue-600" /> Licensed Dentists
            </div>
            <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full text-green-700 font-semibold text-sm shadow border border-green-100 backdrop-blur">
              <Clock className="w-5 h-5 text-green-600" /> 24/7 Emergency
            </div>
            <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full text-orange-700 font-semibold text-sm shadow border border-orange-100 backdrop-blur">
              <MapPin className="w-5 h-5 text-orange-600" /> Multiple Locations
            </div>
          </div>
        </div>
        {/* Right: Dental Image */}
        <div className="flex-1 flex justify-center items-center w-full max-w-md animate-fade-in-up">
          <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white/60">
            <Image
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80"
              alt="Dentist treating a patient in a dental chair"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
} 