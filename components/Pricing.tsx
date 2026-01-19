
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-green-600 font-bold tracking-wider uppercase text-sm mb-3">Simple Pricing</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Transparent & Competitive</h3>
        <p className="text-slate-600 text-lg">
          Professional services at straightforward prices. No hidden travel fees in Greater Manchester.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* EPC Solo */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col">
          <h4 className="text-xl font-bold mb-2">EPC Only</h4>
          <p className="text-slate-500 text-sm mb-6">Standard Domestic EPC</p>
          <div className="mb-6">
            <span className="text-4xl font-extrabold text-slate-900">£55</span>
          </div>
          <ul className="space-y-4 mb-8 text-slate-600 text-sm flex-grow">
            <li>• <strong>Up to 3 bedrooms</strong></li>
            <li>• +£5 per extra bedroom</li>
            <li>• Fully Accredited Assessor</li>
            <li>• Valid for 10 years</li>
            <li>• Fast digital delivery</li>
          </ul>
          <Link to="/order/epc" className="block w-full text-center py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-colors">
            Order Now
          </Link>
        </div>

        {/* Combined Bundle */}
        <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl shadow-slate-900/20 transform md:scale-105 z-10 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-green-600 text-white text-[10px] uppercase font-black px-4 py-1 rotate-45 translate-x-12 translate-y-4 w-40 text-center">
            Best Value
          </div>
          <h4 className="text-xl font-bold mb-2 text-white">Full Marketing Pack</h4>
          <p className="text-slate-400 text-sm mb-6">EPC + Professional Floorplan</p>
          <div className="mb-6">
            <span className="text-5xl font-extrabold text-white">£85</span>
          </div>
          <ul className="space-y-4 mb-8 text-slate-300 text-sm flex-grow">
            <li>• <strong>Up to 3 bedrooms</strong></li>
            <li>• Accredited EPC Assessment</li>
            <li>• High-resolution Floorplan</li>
            <li>• Accurate Measurements</li>
            <li>• Quick 48-hour Turnaround</li>
          </ul>
          <Link to="/order/bundle" className="block w-full text-center py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-600/30">
            Book Bundle
          </Link>
        </div>

        {/* Floorplan Solo */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col">
          <h4 className="text-xl font-bold mb-2">Floorplan Only</h4>
          <p className="text-slate-500 text-sm mb-6">2D Professional Layout</p>
          <div className="mb-6">
            <span className="text-4xl font-extrabold text-slate-900">£40</span>
          </div>
          <ul className="space-y-4 mb-8 text-slate-600 text-sm flex-grow">
            <li>• Precise on-site measurement</li>
            <li>• Fixed price any size</li>
            <li>• Branding integration available</li>
            <li>• Multiple format delivery</li>
            <li>• Clear, modern design</li>
          </ul>
          <Link to="/order/floorplans" className="block w-full text-center py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-colors">
            Order Now
          </Link>
        </div>
      </div>
      
      <p className="text-center mt-12 text-slate-500 text-sm">
        * Standard pricing applies to properties with up to 3 bedrooms. <br />
        Contact us at <span className="font-bold text-slate-700">{CONTACT_INFO.phone}</span> for commercial or bulk quotes.
      </p>
    </div>
  );
};

export default Pricing;
