
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, FileText, CheckCircle2, ArrowLeft, Phone, Mail } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Service Not Found</h2>
        <Link to="/" className="text-green-600 font-bold flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  const Icon = service.icon === 'ShieldCheck' ? ShieldCheck : FileText;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-24 pb-12 md:pt-40 md:pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={service.imageUrl} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 md:mb-10 transition-colors text-sm font-medium">
            <ArrowLeft size={18} /> Back to home
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="p-2 md:p-3 bg-green-600 rounded-lg md:rounded-xl text-white">
                <Icon size={24} className="md:w-8 md:h-8" />
              </div>
              <span className="text-green-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">Professional Property Service</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-base md:text-xl text-slate-300 leading-relaxed mb-6 md:mb-10 max-w-2xl">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8">
              <div className="text-2xl md:text-4xl font-black text-white">
                {service.price}
              </div>
              <Link 
                to={`/order/${service.id}`} 
                className="w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 md:py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-600/30 text-sm md:text-base"
              >
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-3 gap-10 md:gap-16">
          <div className="lg:col-span-2 space-y-12 md:space-y-20">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6">Overview</h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {service.longDescription}
              </p>
            </section>

            <section className="bg-slate-50 p-6 md:p-12 rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8">What's Included in our {service.title}</h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {service.included.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="mt-1 flex-shrink-0 text-green-600">
                      <CheckCircle2 size={20} className="md:w-6 md:h-6" />
                    </div>
                    <p className="text-slate-700 font-medium text-sm md:text-base leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8">Key Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="p-5 md:p-6 rounded-2xl border border-slate-100 hover:border-green-100 hover:bg-green-50/50 transition-all group">
                    <p className="text-base md:text-lg text-slate-800 font-bold mb-2 group-hover:text-green-700 transition-colors">"{benefit}"</p>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Essential for property owners in Manchester and surrounding areas.</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6 md:space-y-8">
            <div className="bg-slate-900 text-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] lg:sticky lg:top-32 shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Fast Booking</h3>
              <p className="text-slate-400 mb-6 md:mb-8 text-xs md:text-sm leading-relaxed">
                We respond within 2 hours during business hours. For urgent bookings, please call our mobile directly.
              </p>
              
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-slate-800 rounded-xl md:rounded-2xl hover:bg-slate-700 transition-colors">
                  <div className="text-green-500"><Phone size={20} className="md:w-6 md:h-6" /></div>
                  <div>
                    <p className="text-[8px] md:text-[10px] text-slate-500 uppercase font-black tracking-widest">Call Now</p>
                    <p className="font-bold text-sm md:text-base">{CONTACT_INFO.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-slate-800 rounded-xl md:rounded-2xl hover:bg-slate-700 transition-colors">
                  <div className="text-green-500"><Mail size={20} className="md:w-6 md:h-6" /></div>
                  <div>
                    <p className="text-[8px] md:text-[10px] text-slate-500 uppercase font-black tracking-widest">Email Us</p>
                    <p className="font-bold truncate text-xs md:text-sm">{CONTACT_INFO.email}</p>
                  </div>
                </a>
              </div>

              <div className="p-4 md:p-6 bg-green-600/10 border border-green-600/20 rounded-xl md:rounded-2xl text-center">
                <p className="text-green-400 font-bold mb-1 md:mb-2 text-sm md:text-base">Local Area Coverage:</p>
                <p className="text-[10px] md:text-xs text-slate-300">Stretford, Salford, Trafford, Stockport, and Greater Manchester.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Services CTA */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-8 md:mb-12">Looking for a combined deal?</h2>
          <div className="max-w-2xl mx-auto bg-white p-6 md:p-12 rounded-[24px] md:rounded-[40px] shadow-lg border border-slate-100">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-900">Marketing Pack Bundle</h3>
            <p className="text-slate-500 mb-6 md:mb-8 text-sm md:text-base max-w-lg mx-auto">Save time and money by getting both an EPC and a Professional Floorplan for your property listing simultaneously.</p>
            <div className="text-4xl md:text-6xl font-black text-slate-900 mb-8 md:mb-10">£80 <span className="text-base md:text-xl font-normal text-slate-400">Fixed Fee</span></div>
            <Link to="/order/bundle" className="inline-block w-full sm:w-auto bg-slate-900 text-white px-10 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold hover:bg-slate-800 transition-all text-sm md:text-lg">
              Explore Our Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
