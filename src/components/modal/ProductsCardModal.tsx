import { Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductItem } from "../../types";
import { slideInLeft, slideInRight, staggerItem } from "../../utils/animationConfig";

interface ModalProductsCardProps {
    product: ProductItem;
    index: number;
    isOpen: boolean;
    onClose: () => void;
}

const ProductsCardModal = ({ product, index, isOpen, onClose }: ModalProductsCardProps) => {
    const isEven = index % 2 === 0;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >

                    {/* MODAL BOX */}
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.85, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-xl w-[90%] max-w-4xl overflow-hidden relative"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full shadow-md"
                        >
                            <X className="w-5 h-5 text-gray-800" />
                        </button>

                        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                            {/* IMAGE */}
                            <motion.div className="lg:w-[40%] relative overflow-hidden">
                                <motion.img
                                    src={`${import.meta.env.BASE_URL}product/${product.image}`}
                                    alt={product.productName}
                                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500"
                                    initial={{ scale: 1.05 }}
                                    animate={{ scale: 1 }}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                            </motion.div>

                            {/* CONTENT */}
                            <div className="lg:w-[60%] p-8 lg:p-10">
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-3xl font-bold text-[#0F1724] mb-6"
                                >
                                    {product.productName}
                                </motion.h3>

                                {/* BULLETS */}
                                <motion.ul
                                    className="space-y-4"
                                    initial="initial"
                                    animate="whileInView"
                                    variants={{
                                        initial: { opacity: 0 },
                                        whileInView: {
                                            opacity: 1,
                                            transition: { staggerChildren: 0.12 }
                                        }
                                    }}
                                >
                                    {product.bullets.slice(0, 5).map((bullet, idx) => (
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
                                    ))}
                                </motion.ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProductsCardModal;
