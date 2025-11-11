import { motion } from 'framer-motion';
import { ServiceItem } from '../types';
import { staggerItem } from '../utils/animationConfig';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{
        y: -15,
        boxShadow: '0 30px 60px rgba(6, 124, 100, 0.15)',
        transition: { duration: 0.3 }
      }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
    >
      {service.image && (
        <motion.div className="relative overflow-hidden h-56">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent group-hover:from-black/60"
            transition={{ duration: 0.3 }}
          ></motion.div>
        </motion.div>
      )}

      <div className="p-6 flex-grow flex flex-col">
        <motion.h3
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xl font-bold text-[#0F1724] mb-3"
        >
          {service.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[#6B7280] leading-relaxed flex-grow"
        >
          {service.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 pt-4 border-t border-gray-100"
        >
          <motion.div
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center text-[#067C64] font-semibold hover:text-[#05684F] transition-colors cursor-pointer"
          >
            Learn More
            <motion.svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
