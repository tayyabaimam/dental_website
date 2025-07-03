'use client';

import { Shield, Award, Clock, MapPin, Users, Star, Smile } from 'lucide-react';
import Image from 'next/image';

export default function Trust() {
  const trustSignals = [
    {
      icon: Shield,
      title: "Licensed Emergency Dentists",
      description: "Fully qualified and registered dental professionals",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Award,
      title: "Modern Pain-Free Treatment",
      description: "Latest technology and techniques for comfortable care",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Clock,
      title: "Extended Hours Including Weekends",
      description: "Available when you need us most",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: MapPin,
      title: "Multiple Sydney Locations",
      description: "Convenient access across the city",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Bondi",
      rating: 5,
      text: "Called at 2am with severe tooth pain. They saw me within 30 minutes. Amazing service!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Michael R.",
      location: "Surry Hills",
      rating: 5,
      text: "Broken tooth on a Sunday. They fixed it same day. Professional and pain-free treatment.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Emma L.",
      location: "Manly",
      rating: 5,
      text: "Emergency root canal on a holiday. They were the only ones open. Lifesavers!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Subtle dental background image */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Dental clinic background"
          fill
          className="object-cover opacity-20 blur-sm"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Trust Signals */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in-up flex flex-col items-center">
            <div className="mb-4 flex items-center justify-center">
              <Smile className="w-10 h-10 text-blue-400 mr-2" />
              <h2 className="text-5xl font-extrabold text-blue-900 tracking-tight leading-tight">
                Why Choose Sydney Emergency Dental?
              </h2>
            </div>
            <p className="text-2xl text-blue-800 max-w-2xl mx-auto font-medium">
              We&apos;re Sydney&apos;s trusted emergency dental care provider with a proven track record of immediate relief and exceptional patient care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {trustSignals.map((signal, index) => (
              <div 
                key={index}
                className={`${signal.bgColor} rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-blue-100`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${signal.color} mb-4 flex justify-center`}>
                  <signal.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {signal.title}
                </h3>
                <p className="text-gray-600">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">
              What Our Patients Say
            </h2>
            <p className="text-xl text-blue-800 font-medium">
              Real stories from patients who received emergency care when they needed it most.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-10 hover:shadow-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-blue-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-4 border-blue-100 shadow">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
        {/* Accreditation */}
        <div className="mt-20 text-center">
          <div className="bg-white border-2 border-blue-100 rounded-3xl p-10 shadow-lg inline-block">
            <h3 className="text-2xl font-extrabold text-blue-900 mb-6">
              Professional Accreditation
            </h3>
            <div className="grid md:grid-cols-3 gap-10 items-center">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-blue-900">AHPRA Registered</div>
                  <div className="text-sm text-gray-500">Licensed practitioners</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-blue-900">ADA Member</div>
                  <div className="text-sm text-gray-500">Australian Dental Association</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-blue-900">Health Fund</div>
                  <div className="text-sm text-gray-500">Accepted providers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 