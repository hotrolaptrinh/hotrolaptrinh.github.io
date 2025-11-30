import React, { useState } from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../types';
import { Filter, ArrowRight } from 'lucide-react';

const categories = ["Tất cả", "Website", "Mobile App", "Desktop", "AI/Data"];

interface ProductListProps {
  products: Product[];
  onProductSelect?: (product: Product) => void;
  onViewAll?: () => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductSelect, onViewAll }) => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredProducts = activeCategory === "Tất cả"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-8 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Kho Source Code Nổi Bật</h2>
            <p className="text-gray-500">Các dự án được sinh viên tìm mua nhiều nhất tuần qua</p>
          </div>

          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
              >
                {cat}
              </button>
            ))}
            <button
              className="px-3 py-2.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-indigo-600"
              onClick={onViewAll}
            >
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onProductSelect}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onViewAll}
            className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2 mx-auto"
          >
            Xem tất cả sản phẩm <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductList;