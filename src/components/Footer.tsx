import { Sun, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../utils/animationConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gradient-to-br from-[#0F1724] to-[#1a2332] text-white"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          initial="initial"
          whileInView="whileInView"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem}>
            <motion.div
              className="flex items-center space-x-3 mb-4"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-[#067C64] p-2 rounded-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Sun className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold">NEW TECH SOLUTION</h3>
                <p className="text-xs text-gray-400">(PVT) LTD</p>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading solar energy solutions provider with 23+ years of experience in delivering
              sustainable power systems.
            </p>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'Products', 'Services', 'Portfolio', 'About'].map((link, idx) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#FFB020] transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Solar Installing', 'Solar Item Supply', 'Maintenance & Troubleshooting', 'EV Charging Solutions'].map((service) => (
                <motion.li key={service} whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <motion.div className="flex space-x-4 mb-4" initial="initial" whileInView="whileInView" variants={staggerContainer}>
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="bg-white/10 hover:bg-[#067C64] p-2 rounded-lg transition-colors"
                  variants={staggerItem}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
            <p className="text-gray-400 text-sm">
              <span className="font-semibold">Email:</span> info@newtechsolution.lk
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-semibold">Phone:</span> +94 77 123 4567
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {currentYear} New Tech Solution (PVT) LTD. All rights reserved. | Powered by
            Clean Energy
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
