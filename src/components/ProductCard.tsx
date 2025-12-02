import React from 'react';
import type { Product } from '../types';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <a
            href={`/products/${product.id}`}
            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer block"
        >
            {/* Image Container */}
            <div className="relative aspect-video bg-gray-100 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-indigo-600 uppercase tracking-wide">
                    {product.category}
                </div>
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                        className="bg-white text-gray-900 p-2.5 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
                        title="Xem chi tiết"
                    >
                        <Eye size={20} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-indigo-600 transition-colors text-lg">
                        {product.title}
                    </h3>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {product.techStack.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-gray-50 border border-gray-200 text-gray-600 px-2 py-1 rounded text-xs">
                            {tech}
                        </span>
                    ))}
                    {product.techStack.length > 3 && (
                        <span className="bg-gray-50 border border-gray-200 text-gray-600 px-2 py-1 rounded text-xs">+{product.techStack.length - 3}</span>
                    )}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                        <div className="text-xs text-gray-400 line-through">
                            {product.originalPrice.toLocaleString('vi-VN')}đ
                        </div>
                        <div className="text-xl font-bold text-indigo-600">
                            {product.price.toLocaleString('vi-VN')}đ
                        </div>
                    </div>
                    <button
                        className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 p-2.5 rounded-xl transition-colors z-10 relative"
                        onClick={(e) => {
                            e.preventDefault(); // Prevent navigation when clicking add to cart
                            e.stopPropagation();
                            // Add to cart logic here
                        }}
                    >
                        <ShoppingCart size={20} />
                    </button>
                </div>
            </div>
        </a>
    );
};

export default ProductCard;
