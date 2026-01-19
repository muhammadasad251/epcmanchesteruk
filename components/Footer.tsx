
import React from 'react';
import { ShieldCheck, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-green-600 p-2 rounded-lg text-white">
                <ShieldCheck size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight uppercase">EPC Manchester</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional, accredited energy assessments and floorplans serving Greater Manchester for over 10 years. Fast delivery, competitive rates, expert service.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-green-500 transition-colors">{link.label}</Link>
                </li>
              ))}
              <li><Link to="/privacy" className="hover:text-green-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-green-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/service/epc" className="hover:text-green-500 transition-colors">Residential EPC</Link></li>
              <li><Link to="/service/floorplans" className="hover:text-green-500 transition-colors">Professional Floorplans</Link></li>
              <li><Link to="/order/bundle" className="hover:text-green-500 transition-colors">Combined Marketing Bundle</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <p className="flex items-start gap-3">
                <span className="text-green-500 mt-1">📍</span>
                {CONTACT_INFO.address}
              </p>
              <p className="flex items-center gap-3">
                <span className="text-green-500">📞</span>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-green-500">✉️</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} EPC Manchester. All Rights Reserved. Accredited Energy Assessors.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
          >
            Back to Top
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
