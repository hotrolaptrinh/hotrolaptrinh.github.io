import React from 'react';

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  category: 'Website' | 'Mobile App' | 'Desktop' | 'AI/Data';
  techStack: string[];
  image: string;
  rating: number;
  sales: number;
  author: string;
  desc: string;
  listthumbnail: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}