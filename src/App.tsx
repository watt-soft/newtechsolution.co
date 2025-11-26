import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import StatCards from './components/StatCards';

import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';

import ProductSection from './components/sections/ProductSection';
import { ServiceSection } from './components/sections/ServiceSection';
import { PortfolioSection } from './components/sections/PortfolioSection';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        <HeroSection />
        {/* <StatCards /> */}
        <ProductSection />
        <ServiceSection />
        {/* <PortfolioSection /> */}
        <AboutSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
