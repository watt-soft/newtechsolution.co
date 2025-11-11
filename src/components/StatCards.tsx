import { Briefcase, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { stats } from '../data/statData';
import { staggerContainer, staggerItem } from '../utils/animationConfig';

const iconMap = {
  briefcase: Briefcase,
  users: Users,
  award: Award
};

interface CounterProps {
  value: string;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ value, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true, margin: '0px 0px -100px 0px' });
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const hasPlus = value.includes('+');

  return (
    <motion.div ref={ref} variants={staggerItem}>
      {inView ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-[#067C64] mb-2"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {numericValue}
          </motion.span>
          {hasPlus && '+'}
        </motion.div>
      ) : (
        <div className="text-4xl font-bold text-[#067C64] mb-2 opacity-0">{value}</div>
      )}
      <div className="text-[#6B7280] font-medium">{label}</div>
    </motion.div>
  );
};

const StatCards = () => {
  const { ref, inView } = useInView({ triggerOnce: true, margin: '0px 0px -100px 0px' });

  return (
    <section className="py-16 bg-[#F7F7F7]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          variants={staggerContainer}
        >
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={stat.id}
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(6, 124, 100, 0.15)',
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <Counter value={stat.value} label={stat.label} />
                  </div>
                  <motion.div
                    className="bg-gradient-to-br from-[#067C64] to-[#05684F] p-4 rounded-xl group-hover:from-[#FFB020] group-hover:to-[#ff9800] transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatCards;
