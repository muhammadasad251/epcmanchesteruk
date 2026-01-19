
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import ServiceDetail from './pages/ServiceDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Order from './pages/Order';

const LandingPage: React.FC = () => (
  <main className="flex-grow">
    <section id="home" className="scroll-mt-24">
      <Hero />
    </section>
    
    <section id="services" className="py-20 bg-white scroll-mt-20">
      <Services />
    </section>

    <section id="pricing" className="py-20 bg-slate-50 scroll-mt-20">
      <Pricing />
    </section>

    <section id="about" className="py-20 bg-white scroll-mt-20">
      <About />
    </section>

    <section id="contact" className="py-20 bg-slate-50 scroll-mt-20">
      <Contact />
    </section>
  </main>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scrolling to hash when navigating back to home or directly to a section
  useEffect(() => {
    if (pathname === '/' && hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/:serviceId" element={<Order />} />
      </Routes>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
