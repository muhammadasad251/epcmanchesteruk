
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-green-600 font-bold tracking-wider uppercase text-sm mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            Book Your Assessment Today
          </h3>
          <p className="text-slate-600 text-lg mb-10">
            Have questions or want to book an appointment? Fill out the form, and our team will get back to you within 2 hours during business hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-green-600">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Call Us</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold text-slate-900 hover:text-green-600 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-green-600">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Email Us</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-bold text-slate-900 hover:text-green-600 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-green-600">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Our Office</p>
                <p className="text-lg font-bold text-slate-900">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden">
          {formState === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Send size={40} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
              <p className="text-slate-600">Thank you for reaching out. We'll be in touch very soon.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-8 text-green-600 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all"
                    placeholder="07xxx xxxxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Required</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all">
                  <option>Domestic EPC (£55 starting)</option>
                  <option>Professional Floorplan (£40)</option>
                  <option>EPC + Floorplan Bundle (£85 starting)</option>
                  <option>Other / Multiple Properties</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Property Postcode</label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all"
                  placeholder="M32 xxx"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Message (Optional)</label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all resize-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>

              <button
                disabled={formState === 'submitting'}
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-green-700 transition-all flex items-center justify-center gap-2"
              >
                {formState === 'submitting' ? (
                  <>
                    <Loader2 className="animate-spin" size={24} /> Processing...
                  </>
                ) : (
                  <>Book Appointment</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
