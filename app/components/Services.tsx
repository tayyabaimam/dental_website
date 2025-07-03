'use client';

import { Zap, Calendar, UserCheck, Smile, Stethoscope, Syringe } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      icon: Smile,
      title: "Emergency Pain Relief",
      subtitle: "Severe toothache treatment",
      description: "Available within the hour",
      border: "border-orange-200",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500"
    },
    {
      icon: Syringe,
      title: "Same-Day Appointments",
      subtitle: "Broken teeth and dental trauma",
      description: "No waiting, immediate care",
      border: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500"
    },
    {
      icon: Stethoscope,
      title: "Expert Emergency Dentists",
      subtitle: "Qualified emergency specialists",
      description: "Modern pain-free techniques",
      border: "border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-500"
    }
  ];

  return (
    <section id="services" className="relative py-28 bg-gradient-to-b from-white to-blue-50 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-5 tracking-tight leading-tight">
            Emergency Dental Services
          </h2>
          <p className="text-2xl text-blue-800 max-w-2xl mx-auto font-medium">
            When dental emergencies strike, you need immediate care from experienced professionals. We provide comprehensive emergency dental services with same-day availability.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 w-full max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`rounded-3xl bg-white/80 backdrop-blur-lg p-12 flex flex-col items-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-2 ${service.border}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 flex items-center justify-center rounded-full mb-7 shadow ${service.iconBg}`}>
                <service.icon className={`w-10 h-10 ${service.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center tracking-tight">
                {service.title}
              </h3>
              <p className="text-lg font-semibold text-blue-800 mb-1 text-center">
                {service.subtitle}
              </p>
              <p className="text-blue-400 text-center font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/80 rounded-2xl shadow p-8 border border-blue-100 w-full max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-blue-600 mb-1">24/7</div>
            <div className="text-blue-800 font-semibold">Emergency Hotline</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-green-600 mb-1">30min</div>
            <div className="text-blue-800 font-semibold">Avg. Wait Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-orange-600 mb-1">100%</div>
            <div className="text-blue-800 font-semibold">Pain Relief Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-purple-600 mb-1">5+</div>
            <div className="text-blue-800 font-semibold">Sydney Locations</div>
          </div>
        </div>
      </div>
    </section>
  );
} 