import { ProductItem } from '../types';

export const products: ProductItem[] = [
  {
    id: 'p1',
    productName: 'Residential Solar Panel Systems',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    bullets: [
      'High-efficiency monocrystalline and polycrystalline panels',
      'Complete home solar solutions from 3kW to 15kW',
      '25-year performance warranty on all panels',
      'Smart monitoring systems for real-time energy tracking',
      'Professional installation with grid-tie or off-grid options'
    ]
  },
  {
    id: 'p2',
    productName: 'Commercial Solar Solutions',
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
    bullets: [
      'Large-scale solar installations from 50kW to multi-megawatt systems',
      'Customized energy solutions for factories, offices, and warehouses',
      'Advanced energy storage systems for uninterrupted power',
      'ROI-focused designs with rapid payback periods',
      'Comprehensive maintenance and monitoring packages'
    ]
  },
  {
    id: 'p3',
    productName: 'Solar Inverters & Batteries',
    image: 'https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=800',
    bullets: [
      'Premium hybrid and on-grid inverters from leading brands',
      'Lithium-ion and lead-acid battery storage solutions',
      'Intelligent power management systems',
      'Compatible with all major solar panel brands',
      'Extended warranty and after-sales support'
    ]
  },
  {
    id: 'p4',
    productName: 'EV Charging Stations',
    image: 'https://images.pexels.com/photos/7656750/pexels-photo-7656750.jpeg?auto=compress&cs=tinysrgb&w=800',
    bullets: [
      'DC fast charging stations up to 150kW',
      'Level 2 home chargers (7kW - 22kW)',
      'Smart charging with mobile app integration',
      'Weather-resistant outdoor installations',
      'Compatible with all major EV brands'
    ]
  }
];
