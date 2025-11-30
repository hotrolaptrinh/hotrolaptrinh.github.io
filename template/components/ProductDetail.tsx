import React, { useState } from 'react';
import { Product } from '../types';
import { 
  ArrowLeft, Star, ShoppingCart, ShieldCheck, 
  Zap, Download, MessageSquare, CheckCircle, 
  Monitor, Smartphone, Database, Server, Globe
} from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [activeTab, setActiveTab] = useState<'desc' | 'setup' | 'reviews'>('desc');

  // Mock technical specs based on product info
  const specs = [
    { label: 'Phiên bản', value: 'v1.2.0' },
    { label: 'Cập nhật cuối', value: '24/05/2024' },
    { label: 'Framework', value: product.techStack[0] },
    { label: 'Database', value: product.techStack.includes('MongoDB') ? 'MongoDB' : 'MySQL' },
  ];

  const features = [
    "Source code sạch, chia module rõ ràng (Clean Architecture)",
    "Đầy đủ chức năng CRUD và Auth (Đăng nhập/Đăng ký/Quên mật khẩu)",
    "Tích hợp sẵn cổng thanh toán (Momo/VNPAY/Stripe demo)",
    "Giao diện Responsive 100% trên Mobile & Tablet",
    "Bao gồm file báo cáo .docx và Slide thuyết trình .pptx",
    "Hỗ trợ setup qua UltraViewer miễn phí"
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back */}
        <button 
          onClick={onBack}
          className="flex items-center text-gray-500 hover:text-indigo-600 mb-6 transition-colors font-medium group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Quay lại danh sách
        </button>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
            
            {/* Left Column: Images */}
            <div className="p-6 lg:p-10 bg-gray-50/50">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-4 group">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    {product.category}
                  </span>
                </div>
              </div>
              
              {/* Thumbnails (Mock) */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-video rounded-lg overflow-hidden border-2 border-transparent hover:border-indigo-600 cursor-pointer transition-all opacity-70 hover:opacity-100">
                    <img 
                      src={product.image} 
                      alt="Thumbnail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <ShieldCheck className="text-green-500 w-8 h-8" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Đã kiểm duyệt</p>
                    <p className="text-xs text-gray-500">Code chạy 100%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <Zap className="text-yellow-500 w-8 h-8" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Tải ngay</p>
                    <p className="text-xs text-gray-500">Link Google Drive</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Info */}
            <div className="p-6 lg:p-10 flex flex-col">
              <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                <span>Tác giả: <span className="text-indigo-600 font-semibold underline decoration-dotted">{product.author}</span></span>
                <span>•</span>
                <span>ID: #{product.id.padStart(4, '0')}</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                {product.title}
              </h1>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-100">
                  <Star className="text-yellow-400 w-5 h-5 fill-current" />
                  <span className="font-bold text-gray-900">{product.rating}</span>
                  <span className="text-gray-400 text-sm">/ 5.0</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Download className="w-4 h-4" />
                  <span>{product.sales} lượt mua</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <MessageSquare className="w-4 h-4" />
                  <span>24 đánh giá</span>
                </div>
              </div>

              <div className="flex items-end gap-3 mb-8 pb-8 border-b border-gray-100">
                <span className="text-4xl font-extrabold text-indigo-600">
                  {product.price.toLocaleString('vi-VN')}đ
                </span>
                <span className="text-xl text-gray-400 line-through mb-1">
                  {product.originalPrice.toLocaleString('vi-VN')}đ
                </span>
                <span className="mb-2 bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded">
                  -{(100 - (product.price / product.originalPrice) * 100).toFixed(0)}%
                </span>
              </div>

              {/* Tech Stack Chips */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Công nghệ sử dụng</h3>
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map((tech, idx) => (
                    <span key={idx} className="inline-flex items-center px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium">
                      {tech === 'React' || tech === 'ReactJS' ? <Globe size={14} className="mr-1.5 text-blue-500" /> :
                       tech === 'Node.js' ? <Server size={14} className="mr-1.5 text-green-600" /> :
                       tech === 'Flutter' ? <Smartphone size={14} className="mr-1.5 text-blue-400" /> :
                       <Database size={14} className="mr-1.5 text-gray-500" />}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Short Description */}
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {product.description} Đây là source code hoàn chỉnh, được tối ưu hóa hiệu suất và bảo mật. Phù hợp cho sinh viên làm đồ án tốt nghiệp hoặc lập trình viên cần tham khảo cấu trúc dự án thực tế.
              </p>

              {/* Actions */}
              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Download size={24} />
                  Mua ngay
                </button>
                <button className="flex-1 bg-white border-2 border-indigo-100 text-indigo-700 hover:bg-indigo-50 py-4 px-8 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart size={24} />
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Tabs */}
          <div className="border-t border-gray-100">
            <div className="flex border-b border-gray-200">
              <button 
                onClick={() => setActiveTab('desc')}
                className={`px-8 py-4 font-medium text-sm focus:outline-none border-b-2 transition-colors ${activeTab === 'desc' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Mô tả chi tiết
              </button>
              <button 
                onClick={() => setActiveTab('setup')}
                className={`px-8 py-4 font-medium text-sm focus:outline-none border-b-2 transition-colors ${activeTab === 'setup' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Hướng dẫn cài đặt
              </button>
              <button 
                onClick={() => setActiveTab('reviews')}
                className={`px-8 py-4 font-medium text-sm focus:outline-none border-b-2 transition-colors ${activeTab === 'reviews' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Đánh giá (24)
              </button>
            </div>

            <div className="p-6 lg:p-10 bg-gray-50 min-h-[300px]">
              {activeTab === 'desc' && (
                <div className="max-w-4xl">
                   <h3 className="text-xl font-bold text-gray-900 mb-4">Tổng quan đồ án</h3>
                   <p className="text-gray-600 mb-6 leading-relaxed">
                     Bộ mã nguồn này cung cấp giải pháp toàn diện cho việc {product.category === 'Website' ? 'xây dựng website' : 'phát triển ứng dụng'}. 
                     Được xây dựng dựa trên các Design Pattern chuẩn mực, code dễ đọc và dễ bảo trì.
                     Bao gồm đầy đủ Frontend, Backend và Database script.
                   </p>
                   
                   <h3 className="text-xl font-bold text-gray-900 mb-4">Các tính năng chính</h3>
                   <ul className="grid md:grid-cols-2 gap-3 mb-8">
                     {features.map((feat, i) => (
                       <li key={i} className="flex items-start gap-2 text-gray-700">
                         <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                         <span>{feat}</span>
                       </li>
                     ))}
                   </ul>

                   <h3 className="text-xl font-bold text-gray-900 mb-4">Thông số kỹ thuật</h3>
                   <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <table className="w-full text-sm text-left">
                        <tbody>
                          {specs.map((spec, i) => (
                            <tr key={i} className="border-b border-gray-100 last:border-0">
                              <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50 w-1/3">{spec.label}</td>
                              <td className="px-6 py-4 text-gray-600">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                   </div>
                </div>
              )}

              {activeTab === 'setup' && (
                <div className="max-w-4xl space-y-6">
                   <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
                     <Monitor className="text-blue-600 flex-shrink-0" />
                     <div>
                       <h4 className="font-bold text-blue-900">Yêu cầu hệ thống</h4>
                       <p className="text-sm text-blue-700">Node.js v14+, MongoDB 4.0+ (hoặc MySQL 8.0), VS Code.</p>
                     </div>
                   </div>

                   <ol className="relative border-l border-gray-200 ml-3 space-y-8 mt-6">
                      <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full -left-4 ring-4 ring-white">
                           <span className="font-bold text-indigo-600">1</span>
                        </span>
                        <h3 className="font-bold text-gray-900 mb-1">Tải về & Giải nén</h3>
                        <p className="text-gray-500 text-sm">Sau khi thanh toán, tải file .zip và giải nén vào thư mục làm việc.</p>
                      </li>
                      <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full -left-4 ring-4 ring-white">
                           <span className="font-bold text-indigo-600">2</span>
                        </span>
                        <h3 className="font-bold text-gray-900 mb-1">Cài đặt thư viện (Dependencies)</h3>
                        <div className="bg-slate-800 text-gray-300 p-3 rounded-lg font-mono text-sm mt-2">
                           npm install
                        </div>
                      </li>
                      <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full -left-4 ring-4 ring-white">
                           <span className="font-bold text-indigo-600">3</span>
                        </span>
                        <h3 className="font-bold text-gray-900 mb-1">Khởi chạy dự án</h3>
                        <div className="bg-slate-800 text-gray-300 p-3 rounded-lg font-mono text-sm mt-2">
                           npm run dev
                        </div>
                        <p className="text-gray-500 text-sm mt-2">Truy cập http://localhost:3000 để xem kết quả.</p>
                      </li>
                   </ol>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="max-w-4xl">
                   <div className="text-center py-10 bg-white rounded-xl border border-gray-200 mb-6">
                     <div className="text-5xl font-extrabold text-gray-900 mb-2">{product.rating}</div>
                     <div className="flex justify-center gap-1 mb-2 text-yellow-400">
                        <Star fill="currentColor" />
                        <Star fill="currentColor" />
                        <Star fill="currentColor" />
                        <Star fill="currentColor" />
                        <Star fill="currentColor" className={product.rating < 5 ? 'text-gray-300' : ''} />
                     </div>
                     <p className="text-gray-500">Dựa trên 24 đánh giá xác thực</p>
                   </div>
                   
                   {/* Mock Reviews */}
                   <div className="space-y-4">
                     {[1, 2].map((i) => (
                       <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                         <div className="flex justify-between items-start mb-2">
                           <div className="flex items-center gap-2">
                             <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">U{i}</div>
                             <div>
                               <p className="font-bold text-gray-900">Nguyễn Văn {i === 1 ? 'A' : 'B'}</p>
                               <div className="flex text-yellow-400 w-20">
                                 <Star size={12} fill="currentColor" />
                                 <Star size={12} fill="currentColor" />
                                 <Star size={12} fill="currentColor" />
                                 <Star size={12} fill="currentColor" />
                                 <Star size={12} fill="currentColor" />
                               </div>
                             </div>
                           </div>
                           <span className="text-xs text-gray-400">2 ngày trước</span>
                         </div>
                         <p className="text-gray-600 text-sm">
                           {i === 1 
                             ? "Code rất sạch, chạy phát ăn ngay. Tài liệu hướng dẫn chi tiết, mình làm đồ án được 9 điểm. Cảm ơn shop!" 
                             : "Support nhiệt tình, mình cài lỗi node_modules được admin ultraview fix trong 5 phút. Rất đáng tiền."}
                         </p>
                       </div>
                     ))}
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;