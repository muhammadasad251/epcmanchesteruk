
import React from 'react';
import { ShieldCheck, FileText, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-green-600 font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Comprehensive Property Solutions</h3>
        <p className="text-slate-600 text-lg">
          We provide high-quality energy assessments and property visualizations designed to meet all legal requirements and marketing needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {SERVICES.map((service) => (
          <Link 
            key={service.id} 
            to={`/service/${service.id}`}
            className="group p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-100 hover:border-green-200 transition-all hover:shadow-2xl hover:shadow-green-900/5 block text-left"
          >
            <div className="mb-8 inline-block p-4 bg-white rounded-2xl shadow-sm text-green-600 transition-transform group-hover:scale-110">
              {service.id === 'epc' ? <ShieldCheck size={40} /> : <FileText size={40} />}
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="space-y-4 mb-8">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-slate-700">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                    <Check size={12} />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
            <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-slate-500 font-medium">Starting from</span>
                <span className="text-3xl font-extrabold text-green-600 ml-2">{service.price}</span>
              </div>
              <div className="text-green-600 flex items-center gap-2 font-bold group-hover:translate-x-1 transition-transform">
                View Details <ArrowRight size={20} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
