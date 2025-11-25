import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ProductItem } from '../types';
import { staggerItem } from '../utils/animationConfig';
import ProductsCardModal from './modal/ProductsCardModal';
import { Eye, CircleEllipsis } from 'lucide-react';
import { formatCurrency } from '../utils';

interface ProductCardProps {
    product: ProductItem;
}

export const ProductCard_SM = ({ product }: ProductCardProps) => {
    const [selectedProduct, setSelectedProduct] = React.useState<ProductItem | undefined>(undefined);

    const open = useCallback((p: ProductItem) => setSelectedProduct(p), []);
    const close = useCallback(() => setSelectedProduct(undefined), []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <motion.div
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.01 }}
                transition={{ duration: 0.35 }}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-transform duration-300 flex flex-col h-full focus-within:ring-2 focus-within:ring-[#0B7D64]/30"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') open(product);
                }}
                aria-label={`Open ${product.productName} details`}
            >
                {product.image && (
                    <div className="relative overflow-hidden h-56 rounded-t-2xl">
                        <motion.img
                            src={`${import.meta.env.BASE_URL}product/${product.image}`}
                            alt={product.productName}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            draggable={false}
                        />

                        {/* green tint mask in front of image; increases on hover */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none rounded-t-2xl transition-opacity duration-300"
                            initial={{ opacity: 0.18 }}
                            // motion won't pick up group-hover, use CSS utility for hover transition
                            style={{
                                background:
                                    'linear-gradient(180deg, rgba(11,125,100,0.18) 0%, rgba(11,125,100,0.08) 35%, rgba(11,125,100,0.04) 50%, transparent 100%)'
                            }}
                        />
                        <div className="absolute inset-0 rounded-t-2xl pointer-events-none bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-60" />
                        {/* subtle accent at bottom of image */}
                        <div
                            aria-hidden
                            className="absolute left-4 bottom-4 rounded-full h-3 w-20"
                            style={{ background: 'linear-gradient(90deg,#FFB020,#0B7D64)' }}
                        />
                    </div>
                )}

                <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-lg font-semibold text-[#0B7D64] mb-1 leading-tight line-clamp-2">
                        {product.productName}
                    </h3>

                    <p className="text-sm text-[#6B7280] mb-4 flex-grow">
                        {product.description ? product.description : 'High quality solar product.'}
                    </p>

                    <div className="flex items-center justify-between gap-4 mt-auto">
                        <div>
                            <div className="text-sm text-[#6B7280]">Price Starting</div>
                            <div className="text-xl font-bold text-[#0B7D64]">
                                {product.price ? `${formatCurrency(product.price)}` : 'Pending'}
                            </div>
                        </div>

                        <div className="flex items-center gap-1">

                            <button
                                onClick={() => {
                                    if (product.link) {
                                        window.open(product.link, "_blank");
                                    } else {
                                        scrollToSection("#contact");
                                    }
                                }}
                                className=""
                                aria-label={`Request quote for ${product.productName}`}
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}icon/whatsapp2.gif`}
                                    alt="WhatsApp icon"
                                />
                            </button>
                            <button
                                onClick={() => open(product)}
                                className="items-center text-[#0B7D64] shadow-sm hover:scale-[1.02] transition-transform duration-200"
                                aria-label={`View ${product.productName} details`}
                            >
                                {/* <Eye className="w-9 h-9 mr-0" /> */}
                                <CircleEllipsis className="w-9 h-9 mr-0" />
                            </button>
                        </div>
                    </div>
                </div >
            </motion.div >

            <ProductsCardModal product={selectedProduct!} index={0} isOpen={!!selectedProduct} onClose={close} />
        </>
    );
};

export default ProductCard_SM;
