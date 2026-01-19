
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  included: string[];
  icon: string;
  price: string;
  features: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
