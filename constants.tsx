
import { NavLink, Service, Testimonial } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'epc',
    title: 'Residential EPC',
    description: 'Legally required Energy Performance Certificates for all domestic properties being sold or let in the UK.',
    longDescription: 'An Energy Performance Certificate (EPC) is a legally required document for any residential property that is being sold, rented, or built. It provides an energy efficiency rating (from A to G) and offers recommendations on how to reduce energy use and save money. At EPC Manchester, we provide fast, professional, and accredited assessments throughout Greater Manchester.',
    benefits: [
      'Legal compliance for sales and rentals',
      'Lower energy bills through expert recommendations',
      'Increase property value by improving rating',
      'Contribute to a greener environment'
    ],
    included: [
      'Site visit by a qualified DEA (Domestic Energy Assessor)',
      'Full internal and external inspection',
      'Measurement of walls, windows, and doors',
      'Assessment of heating, lighting, and insulation',
      'Digital certificate lodged on the national register',
      'Professional recommendations report'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=1200&q=80',
    icon: 'ShieldCheck',
    price: 'From £55',
    features: [
      'Accredited Assessors',
      'Lodged on National Register',
      '24-48 Hour Turnaround',
      '10-Year Validity',
      'Expert Recommendations'
    ]
  },
  {
    id: 'floorplans',
    title: 'Professional Floorplans',
    description: 'High-quality 2D floorplans to help potential buyers or tenants visualize property layouts accurately.',
    longDescription: 'High-quality floorplans are one of the most important marketing tools for any property listing. They provide potential buyers or tenants with a clear understanding of the layout, room sizes, and overall flow of the property. Our professional floorplans are created using industry-standard software and are suitable for use on major property portals like Rightmove and Zoopla.',
    benefits: [
      'Help buyers visualize the space immediately',
      'Increase engagement on property listings',
      'Save time by filtering out unsuitable viewings',
      'Accurate representation of room dimensions'
    ],
    included: [
      'On-site laser measurements',
      'Detailed room names and dimensions',
      'Total square footage/meterage calculation',
      'Professional 2D layout design',
      'High-resolution JPG and PDF formats',
      'Optional branding with agent/company logo'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&w=1200&q=80',
    icon: 'FileText',
    price: 'From £40',
    features: [
      'Precise Measurements',
      'High-Resolution Outputs',
      'Branded/Unbranded Options',
      'Fast Delivery',
      'Industry Standard Software'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Thompson',
    role: 'Homeowner, Stretford',
    content: 'Very professional service. Booked on Monday, assessment done Tuesday morning, and had the EPC certificate by the afternoon. Highly recommended.',
    rating: 5
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'Lettings Agent, Salford',
    content: 'We use EPC Manchester for all our managed properties. Their floorplans are excellent and the communication is always top-notch.',
    rating: 5
  },
  {
    id: 3,
    name: 'David Miller',
    role: 'Landlord, Manchester City Centre',
    content: 'Fast, efficient, and great value for money. Essential for any landlord in Greater Manchester.',
    rating: 5
  }
];

export const CONTACT_INFO = {
  phone: '07869 746355',
  email: 'info@epcmanchester.uk',
  address: '13 North Lonsdale Street, Stretford, Manchester M32 0PD',
  areas: ['Manchester', 'Salford', 'Trafford', 'Stockport', 'Bury', 'Bolton', 'Rochdale', 'Oldham', 'Tameside', 'Wigan']
};
