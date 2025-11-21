import React from 'react'
import { motion } from 'framer-motion';
import { ProductItem, ServiceItem } from '../types';
import { staggerItem } from '../utils/animationConfig';
import ProductsCardModal from './modal/ProductsCardModal';

interface ProductCardProps {
    product: ProductItem;
}

export const ProductCard_SM = ({ product }: ProductCardProps) => {
    const [selectedProduct, setSelectedProduct] = React.useState<ProductItem | undefined>(undefined);
    return (
        <>
            <motion.div
                variants={staggerItem}
                whileHover={{
                    y: -15,
                    boxShadow: '0 30px 60px rgba(6, 124, 100, 0.15)',
                    transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
            >
                {product.image && (
                    <motion.div className="relative overflow-hidden h-56">
                        <div
                            className={`absolute inset-0 bg-gradient-to-br #0B7D64 opacity-45`}
                        />
                        <motion.img
                            src={`${import.meta.env.BASE_URL}product/${product.image}`}
                            alt={product.productName}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.6 }}
                        />
                        <motion.div
                            // className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent group-hover:from-black/60"
                            className="absolute inset-0 bg-gradient-to-t from-[#0B7D64]/50 via-[#0B7D64]/10 to-transparent group-hover:from-[#0B7D64]/30 group-hover:via-[#0B7D64]/20"
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
                        className="text-xl font-bold  text-[#067C64] h-[40px] mb-3"
                    >
                        {product.productName}
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-[#6B7280] py-2 h-[50px] leading-relaxed flex-grow"
                    >
                        Price
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-auto pt-0 border-t border-gray-100"
                    >
                        <motion.div
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.3 }}
                            className="inline-flex items-center text-[#067C64] font-semibold hover:text-[#05684F] transition-colors cursor-pointer"
                        >
                            <button
                                onClick={() => setSelectedProduct(product)}
                                className="inline-flex items-center"
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
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
            <ProductsCardModal
                product={selectedProduct!}
                index={0}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(undefined)}
            />
        </>
    )
}
