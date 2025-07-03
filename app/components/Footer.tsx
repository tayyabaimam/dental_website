'use client';

import { Phone, Mail, MapPin, Clock, Smile } from 'lucide-react';

export default function Footer() {
  const phoneNumber = "(02) 8000 0000";
  
  return (
    <footer className="relative bg-gradient-to-br from-blue-100/80 via-white/80 to-blue-200/80 rounded-t-3xl mt-24 shadow-2xl overflow-hidden">
      {/* Floating dental icon */}
      <div className="absolute -top-8 left-8 w-24 h-24 bg-blue-200/40 rounded-full flex items-center justify-center z-0 blur-2xl">
        <Smile className="w-12 h-12 text-blue-400 opacity-70" />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Smile className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-extrabold tracking-tight text-blue-900">VYNLOX Emergency Dental</h3>
            </div>
            <p className="text-blue-800 mb-6 max-w-md font-medium">
              Sydney&apos;s trusted emergency dental care provider. Available 24/7 for immediate relief from severe tooth pain, broken teeth, and dental trauma.
            </p>
            {/* Emergency Phone Number */}
            <div className="mb-6">
              <a 
                href={`tel:${phoneNumber}`}
                className="phone-number text-2xl font-extrabold flex items-center space-x-2 px-5 py-2 rounded-full bg-white shadow border border-red-100 hover:scale-105 transition-transform"
                style={{ color: '#dc2626' }}
              >
                <Phone className="w-6 h-6" />
                <span>{phoneNumber}</span>
              </a>
              <p className="text-blue-600 text-sm mt-2 font-semibold">Available 24/7 for emergencies</p>
            </div>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="bg-blue-100 px-3 py-1 rounded-full text-sm font-semibold text-blue-700">Licensed Dentists</div>
              <div className="bg-green-100 px-3 py-1 rounded-full text-sm font-semibold text-green-700">Same-Day Appointments</div>
              <div className="bg-orange-100 px-3 py-1 rounded-full text-sm font-semibold text-orange-700">Health Fund Accepted</div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-900">Services</h4>
            <ul className="space-y-2 text-blue-700 font-medium">
              <li><a href="#services" className="hover:text-blue-900 transition-colors">Emergency Pain Relief</a></li>
              <li><a href="#services" className="hover:text-blue-900 transition-colors">Same-Day Appointments</a></li>
              <li><a href="#services" className="hover:text-blue-900 transition-colors">Broken Tooth Repair</a></li>
              <li><a href="#services" className="hover:text-blue-900 transition-colors">Dental Trauma Care</a></li>
              <li><a href="#services" className="hover:text-blue-900 transition-colors">Root Canal Treatment</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-900">Contact</h4>
            <div className="space-y-3 text-blue-700 font-medium">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-400" />
                <a href={`tel:${phoneNumber}`} className="hover:text-blue-900 transition-colors" style={{ color: '#dc2626' }}>{phoneNumber}</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:emergency@sydneyemergencydental.com" className="hover:text-blue-900 transition-colors">emergency@sydneyemergencydental.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Multiple Sydney Locations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>24/7 Emergency Care</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-blue-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-700 text-sm mb-4 md:mb-0 font-medium">
              © 2024 VYNLOX Emergency Dental. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors font-medium">Privacy Policy</a>
              <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors font-medium">Terms of Service</a>
              <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors font-medium">Emergency Protocol</a>
            </div>
          </div>
        </div>
      </div>
      {/* Emergency CTA Bar */}
      <div className="bg-red-600 py-5 rounded-b-3xl shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white text-center md:text-left mb-2 md:mb-0 text-lg font-semibold">
              <span className="font-bold">Dental Emergency?</span>
              <span className="ml-2">Don&apos;t wait – call now for immediate relief</span>
            </div>
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center space-x-2 shadow-lg hover:scale-105 border-2 border-red-200"
            >
              <Phone className="w-5 h-5" />
              <span>Call {phoneNumber}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 