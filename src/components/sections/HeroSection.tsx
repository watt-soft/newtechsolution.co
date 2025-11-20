import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, buttonHover } from '../../utils/animationConfig';
import { Logo } from '../atoms/Logo';
import TechVibeBackground from '../backgrounds/TechVibeBackground';

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
      className="relative min-h-screen flex items-center pt-4 bg-gradient-to-br from-[#067C64] via-[#05684F] to-[#044839] overflow-hidden"
    >
      <TechVibeBackground />
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="max-w-3xl flex-1">
            {/* <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6 }}
             className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-float"
           >
             <p className="text-white/90 text-sm font-medium">
               Leading Solar Energy Provider in Sri Lanka
             </p>
           </motion.div> */}

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
          <div className="hidden md:flex my-auto items-center">
            <Logo size="xxl" className="drop-shadow-lg" />
          </div>
        </div>
      </div>
      {/* Layer 1 — soft wide glow */}
      <motion.div
        className="
    absolute bottom-0 left-0 right-0 h-24
    bg-gradient-to-t from-white via-[#fff4b0]/60 to-transparent
  "
        animate={{ opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Layer 2 — sharper yellow highlight */}
      <motion.div
        className="
    absolute bottom-0 left-0 right-0 h-20
    bg-gradient-to-t from-transparent via-[#ffe27a]/70 to-transparent
  "
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />



    </section>
  );
};

export default HeroSection;
