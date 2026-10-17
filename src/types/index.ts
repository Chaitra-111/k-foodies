export interface FoodItem {
  id: string;
  name: string;
  rating: number | null;
  price: string;
  cuisines: string;
  address: string;
  link: string;
  image: string;
  badge?: string;
  category: 'street-food' | 'biryani-meals' | 'fast-food' | 'desserts-beverages';
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  email: string;
  socials: {
    name: string;
    url?: string;
    icon: 'instagram' | 'youtube' | 'mail';
    color: string;
  }[];
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'Title Partner' | 'Powered By' | 'Associate Partner' | 'Festival Partner';
  website?: string;
  category: string;
}

export interface TabemonoStall {
  name: string;
  stall: string;
  location: string;
  color: string;
  edition: 1 | 2 | 3;
  category?: string;
}

export interface CollabOption {
  title: string;
  desc: string;
  icon: string;
  benefits: string[];
}
