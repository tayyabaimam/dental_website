'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Phone, Mail, Clock } from 'lucide-react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqkogwvw");
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    emergencyType: '',
    contactTime: '',
    description: ''
  });

  const emergencyTypes = [
    "Severe tooth pain",
    "Broken/chipped tooth", 
    "Lost filling",
    "Dental trauma",
    "Swelling/infection",
    "Other emergency"
  ];

  const contactTimes = [
    "ASAP",
    "Within 1 hour",
    "Within 2 hours", 
    "Today"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="bg-white rounded-3xl p-12 md:p-16 text-center shadow-2xl border border-blue-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
            </div>
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;ll call you within 5 minutes to schedule your emergency appointment.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 inline-block">
              <p className="text-lg font-semibold text-blue-900 mb-2">
                Need immediate assistance?
              </p>
              <a 
                href="tel:(02) 8000 0000"
                className="phone-number text-2xl font-extrabold flex items-center justify-center space-x-2"
                style={{ color: '#dc2626' }}
              >
                <Phone className="w-6 h-6" />
                <span>(02) 8000 0000</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">
            Get Emergency Care Now
          </h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and we&apos;ll contact you immediately to schedule your emergency appointment.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-blue-100 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label htmlFor="name" className="block text-base font-semibold text-blue-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input w-full text-lg rounded-xl px-5 py-4"
                  placeholder="Enter your full name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-base font-semibold text-blue-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="form-input w-full text-lg rounded-xl px-5 py-4"
                  placeholder="(02) 8000 0000"
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-semibold text-blue-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input w-full text-lg rounded-xl px-5 py-4"
                  placeholder="your@email.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="emergencyType" className="block text-base font-semibold text-blue-900 mb-2">
                  Emergency Type *
                </label>
                <select
                  id="emergencyType"
                  name="emergencyType"
                  value={formData.emergencyType}
                  onChange={handleInputChange}
                  required
                  className="form-input w-full text-lg rounded-full px-5 py-4"
                >
                  <option value="">Select emergency type</option>
                  {emergencyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <ValidationError prefix="Emergency Type" field="emergencyType" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="contactTime" className="block text-base font-semibold text-blue-900 mb-2">
                  Preferred Contact Time *
                </label>
                <select
                  id="contactTime"
                  name="contactTime"
                  value={formData.contactTime}
                  onChange={handleInputChange}
                  required
                  className="form-input w-full text-lg rounded-full px-5 py-4"
                >
                  <option value="">Select contact time</option>
                  {contactTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                <ValidationError prefix="Contact Time" field="contactTime" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="description" className="block text-base font-semibold text-blue-900 mb-2">
                  Brief Description (Optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="form-input w-full text-lg rounded-xl px-5 py-4 resize-none"
                  placeholder="Please describe your emergency situation..."
                />
                <ValidationError prefix="Description" field="description" errors={state.errors} />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="btn-urgent w-full text-lg py-4 rounded-full shadow-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Submit Emergency Request'}
              </button>
              <ValidationError errors={state.errors} />
            </form>
          </div>
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-blue-100">
              <h3 className="text-2xl font-extrabold text-blue-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Emergency Phone</h4>
                    <a 
                      href="tel:(02) 8000 0000"
                      className="phone-number text-xl font-extrabold"
                      style={{ color: '#dc2626' }}
                    >
                      (02) 8000 0000
                    </a>
                    <p className="text-gray-600 text-sm">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Email</h4>
                    <a href="mailto:emergency@sydneyemergencydental.com" className="text-blue-600 hover:text-blue-700">
                      emergency@sydneyemergencydental.com
                    </a>
                    <p className="text-gray-600 text-sm">Quick response guaranteed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Hours</h4>
                    <p className="text-blue-900 font-semibold">24/7 Emergency Care</p>
                    <p className="text-gray-600 text-sm">Including weekends and holidays</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center shadow-lg">
              <h4 className="text-xl font-bold mb-2">Licensed Emergency Dentists</h4>
              <p className="text-blue-100 mb-4">Modern pain-free treatment techniques</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-bold">Health Fund</div>
                  <div className="text-blue-100">Accepted</div>
                </div>
                <div>
                  <div className="font-bold">Same-Day</div>
                  <div className="text-blue-100">Appointments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 