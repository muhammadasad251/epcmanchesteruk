
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 font-bold transition-colors">
          <ArrowLeft size={20} /> Back to home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate lg:prose-lg">
          <p className="text-slate-600 mb-6 text-sm font-bold">PLEASE READ THESE TERMS CAREFULLY BEFORE USING OUR SERVICES.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Agreement to Terms</h2>
          <p className="text-slate-600 mb-6">By accessing or using the services of EPC Manchester, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Services</h2>
          <p className="text-slate-600 mb-6">EPC Manchester provides domestic energy assessments (EPCs) and property floorplans across Greater Manchester. All assessments are performed by accredited Domestic Energy Assessors (DEAs).</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Fees and Payments</h2>
          <p className="text-slate-600 mb-6">Payment is required upon completion of the assessment unless otherwise agreed. We reserve the right to withhold lodgement of certificates or delivery of floorplans until payment is cleared.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Cancellations</h2>
          <p className="text-slate-600 mb-6">Appointments must be cancelled at least 24 hours in advance. Failure to provide access to the property at the agreed time may result in a call-out fee.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Liability</h2>
          <p className="text-slate-600 mb-6">EPC Manchester is not liable for any discrepancies caused by inaccessible areas of the property. All measurements for floorplans are approximate and intended for marketing purposes only.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
