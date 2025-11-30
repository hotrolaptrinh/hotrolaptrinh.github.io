import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';
import { Filter, SlidersHorizontal, ChevronLeft, ChevronRight, X } from 'lucide-react';

// Generate mock data for the store
const generateProducts = (): Product[] => {
  const categories = ['Website', 'Mobile App', 'Desktop', 'AI/Data'] as const;
  const baseProducts: Product[] = [
    {
        id: '1',
        title: 'Website Thương Mại Điện Tử Full Stack (MERN)',
        price: 299000,
        originalPrice: 599000,
        description: 'Hệ thống bán hàng đầy đủ tính năng: Giỏ hàng, Thanh toán, Admin Dashboard. Code chuẩn mô hình MVC.',
        category: 'Website',
        techStack: ['ReactJS', 'Node.js', 'Express', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
        rating: 4.8,
        sales: 128,
        author: 'DevTeam A'
      },
      {
        id: '2',
        title: 'App Chat Realtime giống Zalo',
        price: 349000,
        originalPrice: 699000,
        description: 'Ứng dụng nhắn tin thời gian thực, gửi ảnh, video call, tạo nhóm chat. Sử dụng Socket.io tối ưu tốc độ.',
        category: 'Website',
        techStack: ['React', 'Socket.io', 'Node.js', 'WebRTC'],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
        rating: 4.9,
        sales: 85,
        author: 'Senior JS'
      },
      {
        id: '3',
        title: 'App Đặt Đồ Ăn & Giao Hàng (Flutter)',
        price: 499000,
        originalPrice: 899000,
        description: 'Source code mobile app đặt đồ ăn, tracking vị trí shipper map, tích hợp cổng thanh toán.',
        category: 'Mobile App',
        techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
        image: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?w=800&q=80',
        rating: 4.7,
        sales: 56,
        author: 'Mobile Master'
      },
      {
        id: '4',
        title: 'Hệ Thống Quản Lý Thư Viện (Java Spring Boot)',
        price: 399000,
        originalPrice: 750000,
        description: 'Phần mềm quản lý sách, độc giả, phiếu mượn trả. Phù hợp đồ án môn Java nâng cao.',
        category: 'Desktop',
        techStack: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL'],
        image: 'https://images.unsplash.com/photo-1507842217121-9e9628376272?w=800&q=80',
        rating: 4.6,
        sales: 92,
        author: 'Java Pro'
      },
      {
        id: '5',
        title: 'Hệ Thống Điểm Danh Nhận Diện Khuôn Mặt (Python AI)',
        price: 599000,
        originalPrice: 1200000,
        description: 'Ứng dụng điểm danh tự động sử dụng Computer Vision. Độ chính xác cao, xuất báo cáo Excel.',
        category: 'AI/Data',
        techStack: ['Python', 'OpenCV', 'PyQt5', 'Face_recognition'],
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
        rating: 5.0,
        sales: 45,
        author: 'AI Lab'
      },
      {
        id: '6',
        title: 'Website Tuyển Dụng & Việc Làm (Next.js)',
        price: 250000,
        originalPrice: 500000,
        description: 'Sàn việc làm kết nối ứng viên và nhà tuyển dụng. Tối ưu SEO với Next.js SSR.',
        category: 'Website',
        techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
        rating: 4.5,
        sales: 110,
        author: 'Web Dev'
      }
  ];

  const products: Product[] = [...baseProducts];
  
  // Generate more products
  for (let i = 7; i <= 24; i++) {
    const randomBase = baseProducts[Math.floor(Math.random() * baseProducts.length)];
    products.push({
      ...randomBase,
      id: i.toString(),
      title: `${randomBase.title} - Version ${i}`,
      sales: Math.floor(Math.random() * 200),
      rating: 4 + Math.random(),
      price: randomBase.price + Math.floor(Math.random() * 100000) - 50000
    });
  }

  return products;
};

const allProductsData = generateProducts();

interface AllProductsProps {
  onProductSelect: (product: Product) => void;
}

const AllProducts: React.FC<AllProductsProps> = ({ onProductSelect }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Tất cả');
  const [priceRange, setPriceRange] = useState<number>(1000000); // Max price
  const [minRating, setMinRating] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  
  const itemsPerPage = 9;

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return allProductsData.filter(product => {
      const matchCategory = activeCategory === 'Tất cả' || product.category === activeCategory;
      const matchPrice = product.price <= priceRange;
      const matchRating = product.rating >= minRating;
      return matchCategory && matchPrice && matchRating;
    });
  }, [activeCategory, priceRange, minRating]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const categories = ['Tất cả', 'Website', 'Mobile App', 'Desktop', 'AI/Data'];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Cửa hàng Source Code</h1>
            <p className="text-gray-500 mt-1">Hiển thị {filteredProducts.length} kết quả</p>
          </div>
          <button 
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm"
            onClick={() => setShowMobileFilter(true)}
          >
            <Filter size={18} />
            <span>Bộ lọc</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters - Desktop */}
          <div className={`
            fixed inset-0 z-50 bg-white p-6 transform transition-transform duration-300 md:relative md:translate-x-0 md:bg-transparent md:p-0 md:w-64 md:block md:z-0
            ${showMobileFilter ? 'translate-x-0' : '-translate-x-full'}
          `}>
             <div className="flex justify-between items-center mb-6 md:hidden">
               <h3 className="text-lg font-bold">Bộ lọc tìm kiếm</h3>
               <button onClick={() => setShowMobileFilter(false)}>
                 <X size={24} />
               </button>
             </div>

             <div className="space-y-8">
                {/* Category Filter */}
                <div>
                   <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                     <SlidersHorizontal size={18} /> Danh mục
                   </h3>
                   <div className="space-y-2">
                     {categories.map(cat => (
                       <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                         <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${activeCategory === cat ? 'border-indigo-600' : 'border-gray-300'}`}>
                            {activeCategory === cat && <div className="w-2 h-2 rounded-full bg-indigo-600"></div>}
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
                         <span className={`text-sm ${activeCategory === cat ? 'text-indigo-600 font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>{cat}</span>
                       </label>
                     ))}
                   </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Khoảng giá</h3>
                  <input 
                    type="range" 
                    min="0" 
                    max="1000000" 
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

                {/* Rating Filter */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Đánh giá</h3>
                  <div className="space-y-2">
                    {[5, 4, 3].map(star => (
                      <label key={star} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="rating" 
                          className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                          checked={minRating === star}
                          onChange={() => setMinRating(star)}
                        />
                        <span className="text-sm text-gray-600 flex items-center gap-1">
                          Từ {star} sao
                        </span>
                      </label>
                    ))}
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="rating" 
                          className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                          checked={minRating === 0}
                          onChange={() => setMinRating(0)}
                        />
                        <span className="text-sm text-gray-600">Tất cả</span>
                      </label>
                  </div>
                </div>

                <button 
                  className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold md:hidden"
                  onClick={() => setShowMobileFilter(false)}
                >
                  Áp dụng
                </button>
             </div>
          </div>
          
          {/* Overlay for mobile sidebar */}
          {showMobileFilter && (
            <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setShowMobileFilter(false)}></div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
             {filteredProducts.length === 0 ? (
               <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                 <p className="text-gray-500 text-lg">Không tìm thấy sản phẩm phù hợp.</p>
                 <button 
                   onClick={() => {
                      setActiveCategory('Tất cả');
                      setPriceRange(1000000);
                      setMinRating(0);
                   }}
                   className="mt-4 text-indigo-600 font-medium hover:underline"
                 >
                   Xóa bộ lọc
                 </button>
               </div>
             ) : (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {currentProducts.map(product => (
                   <ProductCard 
                     key={product.id} 
                     product={product} 
                     onClick={onProductSelect}
                   />
                 ))}
               </div>
             )}

             {/* Pagination */}
             {filteredProducts.length > itemsPerPage && (
               <div className="mt-12 flex justify-center items-center gap-2">
                 <button 
                   onClick={() => handlePageChange(currentPage - 1)}
                   disabled={currentPage === 1}
                   className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   <ChevronLeft size={20} />
                 </button>
                 
                 {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                   <button
                     key={page}
                     onClick={() => handlePageChange(page)}
                     className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                       currentPage === page 
                         ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                         : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                     }`}
                   >
                     {page}
                   </button>
                 ))}

                 <button 
                   onClick={() => handlePageChange(currentPage + 1)}
                   disabled={currentPage === totalPages}
                   className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
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