
import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-green-600 p-2 rounded-lg text-white transform group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                EPC MANCHESTER
              </span>
              <span className="text-[10px] font-semibold text-green-600 uppercase tracking-widest leading-none">
                Energy Assessments
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/order"
              className="bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl font-bold">EPC MANCHESTER</span>
            <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-8 text-2xl font-semibold">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-green-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/order"
              onClick={() => setIsMenuOpen(false)}
              className="text-green-600 font-bold hover:text-green-700 transition-colors"
            >
              Book Appointment
            </Link>
          </div>
          <div className="mt-auto space-y-4">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="block w-full text-center bg-slate-900 text-white py-4 rounded-xl text-lg font-bold"
            >
              Call Us: {CONTACT_INFO.phone}
            </a>
            <p className="text-center text-slate-500 text-sm">{CONTACT_INFO.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
