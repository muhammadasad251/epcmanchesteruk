
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, CreditCard, CheckCircle, Loader2, MapPin, Home } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../constants';

interface Suggestion {
  name?: string;
  street?: string;
  housenumber?: string;
  postcode?: string;
  city?: string;
  display_name: string;
}

const Order: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Autocomplete states
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const suggestionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    service: serviceId || 'epc',
    bedrooms: 3,
    date: '',
    timeSlot: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    paymentMethod: 'Bank Transfer'
  });

  // Price Calculation Logic
  const calculatePrice = () => {
    let base = 0;
    let extras = 0;
    const extraBedrooms = Math.max(0, formData.bedrooms - 3);

    if (formData.service === 'bundle') {
      base = 85;
      extras = extraBedrooms * 5;
    } else if (formData.service === 'epc') {
      base = 55;
      extras = extraBedrooms * 5;
    } else if (formData.service === 'floorplans') {
      base = 40;
      extras = 0; // Floorplans are usually fixed price
    } else {
      base = 55;
      extras = extraBedrooms * 5;
    }

    return base + extras;
  };

  const totalPrice = calculatePrice();

  // Handle clicking outside suggestions to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fetch address suggestions from Photon (Free OpenStreetMap-based API)
  const fetchSuggestions = async (query: string) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    setIsSearching(true);
    try {
      const searchTerms = query.toLowerCase().includes('manchester') ? query : `${query} Manchester`;
      const response = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(searchTerms)}&limit=5`);
      const data = await response.json();
      
      const results = data.features
        .filter((f: any) => f.properties.country === 'United Kingdom')
        .map((f: any) => {
          const p = f.properties;
          const parts = [
            p.housenumber,
            p.street,
            p.district,
            p.city,
            p.postcode
          ].filter(Boolean);
          
          return {
            name: p.name,
            street: p.street,
            housenumber: p.housenumber,
            postcode: p.postcode,
            city: p.city,
            display_name: parts.join(', ')
          };
        });

      setSuggestions(results);
      setShowSuggestions(results.length > 0);
    } catch (error) {
      console.error("Address lookup error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, address: value });
    if (value.length > 2) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (s: Suggestion) => {
    const addressLine = [s.housenumber, s.street].filter(Boolean).join(' ') || s.name || '';
    setFormData({
      ...formData,
      address: addressLine,
      postcode: s.postcode || formData.postcode
    });
    setShowSuggestions(false);
  };

  const getTitle = (id: string) => {
    if (id === 'bundle') return 'EPC + Floorplan Bundle';
    const s = SERVICES.find(service => service.id === id);
    return s ? s.title : 'Residential EPC';
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.timeSlot) {
      alert("Please select a time slot");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      window.scrollTo(0, 0);
    }, 2000);
  };

  const timeSlots = [
    { id: 'morning', label: 'Morning (9am - 12pm)', icon: '☀️' },
    { id: 'afternoon', label: 'Afternoon (1pm - 4pm)', icon: '⛅' },
    { id: 'evening', label: 'Evening (5pm - 7pm)', icon: '🌙' }
  ];

  if (success) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle size={48} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Order Placed Successfully!</h1>
          <p className="text-lg text-slate-600 mb-10">
            Thank you for your order. We have received your booking for {formData.date} during the {formData.timeSlot} slot.
            A confirmation email has been sent to <strong>{formData.email}</strong>.
          </p>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-left mb-10">
            <h2 className="font-bold text-slate-900 mb-4 border-b pb-2">Order Summary</h2>
            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <span className="text-slate-500">Service:</span>
              <span className="font-semibold text-slate-900">{getTitle(formData.service)}</span>
              <span className="text-slate-500">Bedrooms:</span>
              <span className="font-semibold text-slate-900">{formData.bedrooms}</span>
              <span className="text-slate-500">Appointment:</span>
              <span className="font-semibold text-slate-900">{formData.date} ({formData.timeSlot})</span>
              <span className="text-slate-500">Property:</span>
              <span className="font-semibold text-slate-900">{formData.address}, {formData.postcode}</span>
              <span className="text-slate-500">Total Price:</span>
              <span className="font-bold text-green-600">£{totalPrice}</span>
              <span className="text-slate-500">Payment:</span>
              <span className="font-semibold text-slate-900">{formData.paymentMethod}</span>
            </div>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-green-700 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-green-600 mb-8 font-medium transition-colors">
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-slate-200">
              <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Book Your Appointment</h1>
              <p className="text-slate-500 mb-10">Fill in the details below to schedule your property assessment in Greater Manchester.</p>

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* 1. Service Selection */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold">1</div>
                    <h2 className="text-xl font-bold text-slate-900">Select Service</h2>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-4">Choose your service</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                      {[
                        { id: 'epc', label: 'Residential EPC' },
                        { id: 'floorplans', label: 'Floorplan' },
                        { id: 'bundle', label: 'EPC + Floorplan' }
                      ].map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: s.id })}
                          className={`p-4 border rounded-xl text-sm font-bold transition-all ${
                            formData.service === s.id 
                              ? 'bg-green-600 border-green-600 text-white shadow-lg shadow-green-600/20' 
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>

                    {(formData.service === 'epc' || formData.service === 'bundle') && (
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-4">
                          <Home size={16} className="text-green-600" />
                          How many bedrooms are in the property?
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <button
                              key={n}
                              type="button"
                              onClick={() => setFormData({ ...formData, bedrooms: n })}
                              className={`w-12 h-12 rounded-xl border font-bold transition-all ${
                                formData.bedrooms === n
                                  ? 'bg-slate-900 border-slate-900 text-white'
                                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                              }`}
                            >
                              {n === 6 ? '6+' : n}
                            </button>
                          ))}
                        </div>
                        <p className="mt-3 text-xs text-slate-400">
                          Note: Base price covers up to 3 bedrooms. Each additional bedroom adds £5.
                        </p>
                      </div>
                    )}
                  </div>
                </section>

                {/* 2. Date & Time */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold">2</div>
                    <h2 className="text-xl font-bold text-slate-900">Select Date & Time</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          required
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-green-500 focus:bg-white transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Time Slot</label>
                      <div className="grid grid-cols-1 gap-3">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeSlot: slot.label })}
                            className={`flex items-center justify-between p-3.5 border rounded-xl transition-all ${
                              formData.timeSlot === slot.label 
                                ? 'bg-green-50 border-green-600 text-green-700' 
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <span className="text-lg">{slot.icon}</span>
                              <span className="font-medium">{slot.label}</span>
                            </span>
                            {formData.timeSlot === slot.label && <CheckCircle size={16} className="text-green-600" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* 3. Customer & Property Details */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold">3</div>
                    <h2 className="text-xl font-bold text-slate-900">Personal & Property Details</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <input
                        required
                        type="text"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-green-500 focus:bg-white transition-all outline-none"
                      />
                      <input
                        required
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-green-500 focus:bg-white transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-4">
                      <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-green-500 focus:bg-white transition-all outline-none"
                      />
                      <div className="flex flex-col gap-2 relative" ref={suggestionRef}>
                        <div className="flex gap-2">
                          <input
                            required
                            type="text"
                            placeholder="Postcode"
                            className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-green-500 focus:bg-white transition-all outline-none"
                            value={formData.postcode}
                            onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                          />
                          <div className="w-2/3 relative">
                             <input
                              required
                              type="text"
                              placeholder="Address Lookup..."
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-green-500 focus:bg-white transition-all outline-none"
                              value={formData.address}
                              onChange={handleAddressChange}
                              onFocus={() => formData.address.length > 2 && setShowSuggestions(true)}
                            />
                            {isSearching && (
                              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <Loader2 size={16} className="animate-spin text-slate-400" />
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Suggestions Dropdown */}
                        {showSuggestions && suggestions.length > 0 && (
                          <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden max-h-60 overflow-y-auto">
                            {suggestions.map((s, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => selectSuggestion(s)}
                                className="w-full text-left px-4 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-none transition-colors flex items-start gap-3"
                              >
                                <MapPin size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm font-medium text-slate-700">{s.display_name}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. Payment */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold">4</div>
                    <h2 className="text-xl font-bold text-slate-900">Payment Method</h2>
                  </div>
                  <div>
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <select
                        value={formData.paymentMethod}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 appearance-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all outline-none font-medium"
                      >
                        <option value="Bank Transfer">Bank Transfer (Preferred)</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Cash">Cash on Inspection</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        ▼
                      </div>
                    </div>
                  </div>
                </section>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-green-600 text-white py-5 rounded-2xl text-xl font-bold hover:bg-green-700 transition-all shadow-xl shadow-green-600/30 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={24} /> Processing...
                    </>
                  ) : (
                    <>Confirm Booking - £{totalPrice}</>
                  )}
                </button>
              </form>
            </div>
          </div>

          <aside>
            <div className="bg-slate-900 text-white p-8 rounded-[32px] sticky top-32">
              <h3 className="text-2xl font-bold mb-6">Booking Details</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                  <div>
                    <p className="font-bold text-lg">{getTitle(formData.service)}</p>
                    <p className="text-slate-400 text-sm">Greater Manchester Area</p>
                    {formData.bedrooms > 3 && (
                       <p className="text-green-500 text-xs mt-1">+{formData.bedrooms - 3} Extra Bedrooms</p>
                    )}
                  </div>
                  <span className="font-bold text-green-500 text-xl">£{totalPrice}</span>
                </div>
                
                <div className="flex justify-between font-bold text-2xl pt-4">
                  <span>Total Due</span>
                  <span className="text-white">£{totalPrice}</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-400 italic">
                <p>• Fully Accredited Assessors</p>
                <p>• Fast Turnaround (24-48h)</p>
                <p>• Valid for 10 years (EPC)</p>
              </div>

              <div className="mt-10 p-6 bg-slate-800 rounded-2xl text-center">
                <p className="text-slate-500 text-xs mb-2">Need help?</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-white font-bold">{CONTACT_INFO.phone}</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Order;
