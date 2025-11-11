import { MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';
import { staggerItem } from '../utils/animationConfig';

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{
        y: -15,
        boxShadow: '0 30px 60px rgba(6, 124, 100, 0.15)',
        transition: { duration: 0.3 }
      }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative overflow-hidden h-64">
        <motion.img
          src={item.image}
          alt={item.siteLocation}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80"
          transition={{ duration: 0.3 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
        >
          <motion.div
            className="flex items-start mb-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-[#FFB020]" />
            <h3 className="text-lg font-bold">{item.siteLocation}</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center text-sm text-white/90"
          >
            <Calendar className="w-4 h-4 mr-2" />
            <span>Completed {item.completedYear}</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="p-5 border-t-4 border-[#067C64] bg-white"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#6B7280] font-medium">
            Solar Installation Project
          </span>
          <motion.button
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
            className="text-[#067C64] hover:text-[#05684F] font-semibold text-sm transition-colors"
          >
            View Details →
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioCard;
