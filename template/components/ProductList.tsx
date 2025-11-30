import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';
import { Filter, ArrowRight } from 'lucide-react';

const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Website Thương Mại Điện Tử Full Stack (MERN)',
    price: 299000,
    originalPrice: 599000,
    description: 'Hệ thống bán hàng đầy đủ tính năng: Giỏ hàng, Thanh toán, Admin Dashboard. Code chuẩn mô hình MVC.',
    category: 'Website',
    techStack: ['ReactJS', 'Node.js', 'Express', 'MongoDB', 'Redux'],
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

const categories = ["Tất cả", "Website", "Mobile App", "Desktop", "AI/Data"];

interface ProductListProps {
  onProductSelect?: (product: Product) => void;
  onViewAll?: () => void;
}

const ProductList: React.FC<ProductListProps> = ({ onProductSelect, onViewAll }) => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredProducts = activeCategory === "Tất cả" 
    ? mockProducts 
    : mockProducts.filter(p => p.category === activeCategory);

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
                  className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                     activeCategory === cat 
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