import { ProductItem } from '../types';

export const products: ProductItem[] = [
  {
    id: 'p7',
    productName: 'Hybrid Solar System',
    image: 'hybrid_solar_system.jpg',
    description: 'Hybrid solar system combining solar, battery, and grid power for maximum savings and backup.',
    bullets: [
      'Earn high income during peak time selling',
      'Dual Power Source — Uses solar energy, batteries, and grid power together',
      'Uninterrupted Supply — Automatically switches during outages for seamless backup',
      'Flexible Usage — Stores extra solar power for nighttime or peak- demand hours',
      'Best For — Homes, offices, and businesses needing both backup and bill reduction',

    ]
  },
  {
    id: 'p5',
    productName: 'On-Grid Solar System',
    image: 'ongrid_solar_system.jpg',
    description: 'On-grid solar power system that reduces electricity bills through net metering and high efficiency.',
    bullets: [
      'Grid-Connected — Generates solar power and feeds excess energy to the utility grid while getting passive income',
      'Cost-Effective — Zero monthly electricity bill',
      'No Batteries Required — Lower installation cost and simple maintenance',
      'Best For — Homes, offices, shops, apartments, and commercial buildings with stable grid supply',

    ],
    price: 650000,
  },
  {

    id: 'p6',
    productName: 'Off-Grid Solar System',
    image: 'offgrid_solar_system.jpeg',
    description: 'Off-grid solar solution providing 24/7 power independence using solar panels and battery storage.',
    bullets: [
      'Fully Independent — Operates without grid connection using solar + battery storage',
      'Reliable Backup — 24/7 Uninterrupted stable power supply',
      'Battery-Based — Stores excess solar energy for nighttime use',
      'High Autonomy — Designed to run essential appliances even in low sunlight',
      'Best For — Shops, Farms, rural homes, cabana, telecom towers sites',

    ]
  },
  {
    id: 'p4',
    productName: 'Solar Outdoor LED Lights',
    image: 'solar_outdoor_light.jpg',
    description: 'Outdoor solar lighting solutions for streets, pathways, gardens, and security applications.',
    bullets: [
      'Solar Lighting Types — All-in-one street lights, split-type street lights, garden/pathway lights, flood lights, and motion-sensor lights for security and outdoor illumination',
      'Applications — Residential outdoors, gardens and pathways, parking lots, commercial areas, security perimeters, resorts, hotels, public parks, farms, and off-grid locations',
      'Easy Installation, Low Maintenance, High Efficiency, Smart Features, Weather Resistant Designed with IP65/IP66, Eco-Friendly',
    ]
  },

  {
    id: 'p1',
    productName: 'Solar Air Conditioner',
    image: 'solar_ac.jpeg',
    description: 'Energy-saving cooling solutions powered by solar panels, available in DC and hybrid models.',
    bullets: [
      'DC Solar Air Conditioner (100% Solar) — Runs directly on solar power from solar panels',
      'Hybrid Air Conditioner — Uses both solar power and grid electricity. Auto switch  Prioritizes solar; switches to grid during low sunlight or night',
      'Energy-efficient — Ideal for offices, schools, show rooms, hotels and educational institute',
    ],
  },

  {
    id: 'p2',
    productName: 'Solar Hot Water System',
    image: 'solar_hot_water.jpeg',
    description: 'Reliable solar-powered water heating system for homes and commercial use with long lifespan.',
    bullets: [
      'Energy Savings — Uses free solar energy to reduce monthly bills',
      'Long-Lasting — Minimal maintenance; 15-20+ year lifespan',
      'Wide Use — Suitable for homes, hotels, hospitals, factories, and more',
      'Eco-Friendly — Lowers carbon emissions and fossil-fuel dependence',
      'Capacities — 100-300L for homes; 500-5000L+ for commercial use',
    ],
    price: 65000,
  },
  {
    id: 'p3',
    productName: 'Solar Water Pump',
    image: 'solar_water_pum.jpeg',
    description: 'Efficient solar-driven water pumping solution designed for farms, gardens, and remote areas.',
    bullets: [
      'Efficient Performance — Ideal for small to medium water needs',
      'Direct Solar Use — Runs from solar panels with a dedicated controller',
      'Long Lifespan — Durable build with low maintenance',
      'High Output — MPPT technology ensures strong flow even in low sunlight',
      'Capacities — DC pumps from 0.5 HP to 3 HP',
    ]
  },



  {
    id: 'p8',
    productName: 'EV Charging Points - Commercial / Home',
    image: 'ev_charging_points.jpg',
    description: 'Smart and safe EV charging solutions for homes, apartments, offices, and commercial locations.',
    bullets: [
      'Fast & Reliable Charging — Supports standard and fast-charging options',
      'Smart Control — App monitoring, usage tracking, and scheduling features',
      'Safe & Durable — Built with protection against overloads, surges, and overheating',
      'Easy Installation — Suitable for homes, apartments, offices, and commercial spaces',
      'Supports All EVs — Compatible with major electric vehicle brands and models',
    ]
  },


];
