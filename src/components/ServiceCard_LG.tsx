import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProductItem, ServiceItem } from '../types';
import { slideInLeft, slideInRight, staggerItem } from '../utils/animationConfig';

interface ServiceCardProps {
    service: ServiceItem;
    index: number;
}

const ServiceCard_LG = ({ service, index }: ServiceCardProps) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={isEven ? slideInLeft.initial : slideInRight.initial}
            whileInView={isEven ? slideInLeft.whileInView : slideInRight.whileInView}
            transition={slideInLeft.transition}
            viewport={slideInLeft.viewport}
            whileHover={{
                y: -5,
                boxShadow: '0 30px 60px rgba(6, 124, 100, 0.15)',
                transition: { duration: 0.3 }
            }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
            <div
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } items-stretch`}
            >
                <motion.div className="lg:w-[30%] relative overflow-hidden group">
                    <motion.img
                        src={`${import.meta.env.BASE_URL}service/${service.image}`}
                        alt={service.title}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40"
                        transition={{ duration: 0.3 }}
                    ></motion.div>
                </motion.div>

                <div className="lg:w-[70%] p-8 lg:p-10 flex flex-col justify-center">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl lg:text-3xl font-bold text-[#0F1724] mb-6"
                    >
                        {service.title}
                    </motion.h3>

                    <motion.ul
                        className="space-y-4 h-[120px]"
                        initial="initial"
                        whileInView="whileInView"
                        variants={{
                            initial: { opacity: 0 },
                            whileInView: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        viewport={{ once: true }}
                    >
                        {service.description}
                        {/* {product.bullets.slice(0, 5).map((bullet, idx) => (
                            <motion.li
                                key={idx}
                                variants={staggerItem}
                                className="flex items-start"
                            >
                                <motion.div
                                    className="flex-shrink-0 mt-1"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="bg-gradient-to-br from-[#067C64] to-[#05684F] rounded-full p-1 shadow-md">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                </motion.div>
                                <span className="ml-3 text-[#0F1724] leading-relaxed">
                                    {bullet}
                                </span>
                            </motion.li>
                        ))} */}
                    </motion.ul>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard_LG;
