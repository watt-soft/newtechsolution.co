export interface ProductItem {
  id: string;
  productName: string;
  image: string;
  price?: number;
  link?: string;
  description?: string
  bullets: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  image: string;
  siteLocation: string;
  completedYear: number;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: string;
}
