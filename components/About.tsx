
import React from 'react';
import { MapPin, ShieldCheck, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-green-600 font-bold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            Your Trusted Partner in <br /> Greater Manchester
          </h3>
          
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Accredited Experts</h4>
                <p className="text-slate-600">All our assessors are fully insured, DBS checked, and accredited by national bodies to ensure your EPC is legally compliant.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <Clock size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Next-Day Service</h4>
                <p className="text-slate-600">We understand that property deals move fast. That's why we offer rapid turnaround times, often with same or next-day appointments.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Local Knowledge</h4>
                <p className="text-slate-600">Based in Stretford, we have extensive experience with properties across Greater Manchester, from Salford apartments to Stockport semis.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative p-10 bg-slate-50 rounded-[40px] border border-slate-100 overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-6 text-slate-900">Area We Cover</h4>
              <div className="grid grid-cols-2 gap-4">
                {CONTACT_INFO.areas.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-slate-700 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-slate-500 italic text-sm">
                Plus all surrounding boroughs and neighborhoods in the M, SK, BL, and WA postcodes.
              </p>
            </div>
            
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full blur-2xl -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl translate-y-12 -translate-x-12"></div>
          </div>
          
          <div className="rounded-[32px] overflow-hidden shadow-lg border border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" 
              alt="Professional Property Surveying" 
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
