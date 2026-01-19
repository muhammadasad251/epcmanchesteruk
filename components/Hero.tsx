
import React from 'react';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor with subtle float/parallax effect */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50 pointer-events-none animate-float"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none animate-float-reverse"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="reveal-init animate-fadeInUp inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Shield size={16} />
              Accredited EPC Assessors in Greater Manchester
            </div>
            
            <h1 className="reveal-init animate-fadeInUp delay-100 text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Fast, Professional <br />
              <span className="text-green-600">EPCs & Floorplans</span>
            </h1>
            
            <p className="reveal-init animate-fadeInUp delay-200 text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Official energy assessments and precision floorplans for homeowners, landlords, and agents across all Greater Manchester areas.
            </p>
            
            <div className="reveal-init animate-fadeInUp delay-300 flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-700 transition-all shadow-xl shadow-green-600/30 hover:-translate-y-1"
              >
                Get a Quote <ArrowRight size={20} />
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-100 px-8 py-4 rounded-xl text-lg font-bold hover:border-green-600 hover:text-green-600 transition-all shadow-sm"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>

            <div className="reveal-init animate-fadeInUp delay-400 grid grid-cols-2 gap-y-4 gap-x-8">
              {['24-48h Delivery', 'Fully Accredited', 'Expert Advice', 'Competitive Rates'].map((item, idx) => (
                <div key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle size={18} className="text-green-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative reveal-init animate-fadeInRight delay-500">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Property in Manchester"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    10+
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Years Experience</p>
                    <p className="text-xs text-slate-600">Local Area Experts</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative dots with subtle parallax feel */}
            <div className="absolute -top-6 -right-6 w-32 h-32 grid grid-cols-6 gap-2 pointer-events-none opacity-20">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
