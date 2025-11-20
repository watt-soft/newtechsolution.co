import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../../utils/animationConfig';
import ServiceCard from '../ServiceCard';
import { services } from '../../data/serviceData';

export const ServiceSection = () => {
    return (
        <>
            <motion.section
                id="services"
                className="py-20 bg-[#F7F7F7]"
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                variants={staggerContainer}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div className="text-center mb-16" variants={staggerItem}>
                        <motion.h2
                            className="text-4xl font-bold text-[#0F1724] mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Our Services
                        </motion.h2>
                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-[#067C64] to-[#FFB020] mx-auto mb-4"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <motion.p
                            className="text-[#6B7280] text-lg max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Comprehensive solar energy services from installation to maintenance
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                        variants={staggerContainer}
                    >
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}
