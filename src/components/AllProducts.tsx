import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../types';
import { Filter, SlidersHorizontal, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface AllProductsProps {
    products: Product[];
}

const AllProducts: React.FC<AllProductsProps> = ({ products }) => {
    const [activeCategory, setActiveCategory] = useState<string>('Tất cả');
    const [priceRange, setPriceRange] = useState<number>(10000000); // Max price increased
    const [minRating, setMinRating] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [showMobileFilter, setShowMobileFilter] = useState(false);

    const itemsPerPage = 9;

    // Filter Logic
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchCategory = activeCategory === 'Tất cả' || product.category === activeCategory;
            const matchPrice = product.price <= priceRange;
            const matchRating = product.rating >= minRating;
            return matchCategory && matchPrice && matchRating;
        });
    }, [products, activeCategory, priceRange, minRating]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const currentProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-50 min-h-screen py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Tất cả Source Code</h1>
                        <p className="text-gray-500 mt-1">Hiển thị {filteredProducts.length} kết quả</p>
                    </div>

                    <button
                        className="md:hidden flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm"
                        onClick={() => setShowMobileFilter(true)}
                    >
                        <SlidersHorizontal size={18} /> Bộ lọc
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar Filter - Desktop */}
                    <aside className={`
            fixed inset-0 z-50 bg-white md:bg-transparent md:static md:z-0 md:w-64 md:block transition-transform duration-300
            ${showMobileFilter ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
                        <div className="h-full overflow-y-auto p-6 md:p-0 md:overflow-visible">
                            <div className="flex justify-between items-center md:hidden mb-6">
                                <h3 className="text-xl font-bold">Bộ lọc</h3>
                                <button onClick={() => setShowMobileFilter(false)}>
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Categories */}
                            <div className="mb-8">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Filter size={18} /> Danh mục
                                </h3>
                                <div className="space-y-2">
                                    {['Tất cả', 'Website', 'Mobile App', 'Desktop', 'AI/Data'].map(cat => (
                                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`
                        w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                        ${activeCategory === cat ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300 group-hover:border-indigo-400'}
                      `}>
                                                {activeCategory === cat && <div className="w-2 h-2 bg-white rounded-full" />}
                                            </div>
                                            <input
                                                type="radio"
                                                name="category"
                                                className="hidden"
                                                checked={activeCategory === cat}
                                                onChange={() => {
                                                    setActiveCategory(cat);
                                                    setCurrentPage(1);
                                                }}
                                            />
                                            <span className={`${activeCategory === cat ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}>
                                                {cat}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="mb-8">
                                <h3 className="font-bold text-gray-900 mb-4">Khoảng giá</h3>
                                <div className="px-2">
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000000"
                                        step="50000"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                                        <span>0đ</span>
                                        <span className="font-medium text-indigo-600">{priceRange.toLocaleString('vi-VN')}đ</span>
                                    </div>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="mb-8">
                                <h3 className="font-bold text-gray-900 mb-4">Đánh giá</h3>
                                <div className="space-y-2">
                                    {[4, 3, 0].map(rating => (
                                        <label key={rating} className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="rating"
                                                className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                                checked={minRating === rating}
                                                onChange={() => setMinRating(rating)}
                                            />
                                            <span className="text-gray-600 text-sm">
                                                {rating === 0 ? 'Tất cả' : `Từ ${rating} sao`}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </aside>

                    {/* Overlay for mobile */}
                    {showMobileFilter && (
                        <div
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                            onClick={() => setShowMobileFilter(false)}
                        />
                    )}

                    {/* Product Grid */}
                    <div className="flex-1">
                        {currentProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {currentProducts.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                                <div className="inline-block p-4 rounded-full bg-gray-50 mb-4">
                                    <Filter size={32} className="text-gray-400" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Không tìm thấy sản phẩm</h3>
                                <p className="text-gray-500">Thử thay đổi bộ lọc hoặc tìm kiếm từ khóa khác</p>
                                <button
                                    onClick={() => {
                                        setActiveCategory('Tất cả');
                                        setPriceRange(10000000);
                                        setMinRating(0);
                                    }}
                                    className="mt-4 text-indigo-600 font-medium hover:underline"
                                >
                                    Xóa bộ lọc
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-12 flex justify-center items-center gap-2">
                                <button
                                    title='Trang trước'
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button
                                        title={'Trang số ' + page}
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === page
                                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                                            : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    title='Trang tiếp'
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
