import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, buttonHover } from '../../utils/animationConfig';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-[#067C64] via-[#05684F] to-[#044839] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>

      {/* Tech-grids & subtle particles overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.01) 0 1px, transparent 1px 60px)'
        }}
      />

      {/* Pulsing energy orb (animated) */}
      <motion.svg
        className="absolute -right-32 top-1/4 w-96 h-96 pointer-events-none"
        viewBox="0 0 400 400"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <radialGradient id="energyGrad" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#FFB020" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#067C64" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#044839" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="techLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#AFFF7A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFB020" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="160" r="120" fill="url(#energyGrad)" />
        {/* Thin tech arcs */}
        <motion.path
          d="M60,220 C130,160 270,160 340,220"
          stroke="url(#techLine)"
          strokeWidth="1.8"
          fill="transparent"
          strokeOpacity="0.55"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0.85] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="120"
          cy="180"
          r="4"
          fill="#FFB020"
          animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3.2, repeat: Infinity }}
        />
        <motion.circle
          cx="260"
          cy="150"
          r="5"
          fill="#AFFF7A"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3.6, repeat: Infinity, delay: 0.4 }}
        />
      </motion.svg>

      {/* small floating tech nodes (right-bottom) */}
      <div className="absolute right-8 bottom-12 flex flex-col gap-2 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ y: 6, opacity: 0.5 }}
            animate={{ y: [-6, 6, -6], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5"
          >
            <div
              className={`h-${6 + i * 2} w-1.5 rounded-md`}
              style={{
                background:
                  i % 2 === 0
                    ? 'linear-gradient(180deg,#FFB020,#067C64)'
                    : 'linear-gradient(180deg,#AFFF7A,#06A06A)'
              }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#FFB020] to-[#067C64] rounded-full opacity-10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      ></motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-float"
          >
            <p className="text-white/90 text-sm font-medium">
              Leading Solar Energy Provider in Sri Lanka
            </p>
          </motion.div>

          <motion.h1
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Investing in a Brighter Future with{' '}
            <span className="text-[#FFB020] bg-clip-text text-transparent bg-gradient-to-r from-[#FFB020] via-[#FFD57A] to-[#AFFF7A] animate-glow-pulse">
              Solar Energy
            </span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl"
          >
            Scalable On-grid, Hybrid, Off-grid solar systems, smart monitoring and energy optimization for homes, businesses and industries - engineered with modern tech and a sustainable vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              {...buttonHover}
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FFB020] to-[#ff9800] hover:shadow-2xl text-white font-semibold rounded-lg shadow-lg transition-all duration-200 group ring-1 ring-white/10"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-wave" />
              Contact Us
            </motion.button>
            <motion.button
              {...buttonHover}
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-[#067C64] font-semibold rounded-lg shadow-lg transition-all duration-200 group ring-1 ring-white/10"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-4 gap-6"
          >
            {[
              { value: '1.5MW+', label: 'Installed Capacity' },
              { value: '3GW+', label: 'Average Daily Generation' },
              { value: '100+', label: 'Projects' },
              { value: '5+', label: 'Years' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors flex flex-col items-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#FFB020]">{stat.value}</div>
                <div className="text-white/80 text-sm mt-1">{stat.label}</div>
                {/* small tech accent */}
                <div className="mt-3 h-1 w-12 rounded-full" style={{ background: 'linear-gradient(90deg,#FFB020,#067C64)' }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
    </section>
  );
};

export default HeroSection;
