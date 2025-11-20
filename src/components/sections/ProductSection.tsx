import React from 'react'
import { motion } from 'framer-motion';
import { products } from '../../data/productData';
import ProductsCard from '../ProductsCard';
import { staggerContainer, staggerItem } from '../../utils/animationConfig';

const ProductSection = () => {
    return (

        <>
            <motion.section
                id="products"
                className="py-20 bg-white"
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
                            Our Products
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
                            Premium solar energy products designed for efficiency and sustainability with electricity saving
                        </motion.p>
                    </motion.div>
                    <div className="space-y-8">
                        {products.map((product, index) => (
                            <ProductsCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default ProductSection