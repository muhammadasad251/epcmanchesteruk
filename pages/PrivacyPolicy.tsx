
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 font-bold transition-colors">
          <ArrowLeft size={20} /> Back to home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate lg:prose-lg">
          <p className="text-slate-600 mb-6">Last Updated: May 2024</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Introduction</h2>
          <p className="text-slate-600 mb-6">Welcome to EPC Manchester. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at info@epcmanchester.uk.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Information We Collect</h2>
          <p className="text-slate-600 mb-6">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, such as your name, email address, phone number, and property address.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. How We Use Your Information</h2>
          <p className="text-slate-600 mb-6">We use personal information collected via our website for a variety of business purposes, including to provide services like EPC assessments and floorplans, to respond to inquiries, and for legal and regulatory compliance.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Sharing Your Information</h2>
          <p className="text-slate-600 mb-6">We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. For EPC assessments, your data will be uploaded to the National EPC Register as required by UK law.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Contact Us</h2>
          <p className="text-slate-600 mb-6">If you have questions or comments about this policy, you may email us at info@epcmanchester.uk or by post to: 13 North Lonsdale Street, Stretford, Manchester M32 0PD.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
