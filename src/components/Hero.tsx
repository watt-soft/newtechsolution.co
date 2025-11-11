import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, buttonHover } from '../utils/animationConfig';

const Hero = () => {
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Investing in a Brighter Future with{' '}
            <span className="text-[#FFB020] animate-glow-pulse">Solar Energy</span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 leading-relaxed"
          >
            Leading solar energy solutions for residential and commercial sectors
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
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FFB020] to-[#ff9800] hover:shadow-2xl text-white font-semibold rounded-lg shadow-lg transition-all duration-200 group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-wave" />
              Contact Us
            </motion.button>
            <motion.button
              {...buttonHover}
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-[#067C64] font-semibold rounded-lg shadow-lg transition-all duration-200 group"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            {[
              { value: '55MW', label: 'Installed Capacity' },
              { value: '400+', label: 'Projects' },
              { value: '23+', label: 'Years' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl font-bold text-[#FFB020]">{stat.value}</div>
                <div className="text-white/80 text-sm mt-1">{stat.label}</div>
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

export default Hero;
