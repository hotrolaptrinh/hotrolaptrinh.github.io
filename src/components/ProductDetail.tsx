import React, { useState } from 'react';
import type { Product } from '../types';
import {
  ArrowLeft, ShoppingCart, ShieldCheck,
  BrushCleaning, Download, BookOpenCheck,
  Monitor, Smartphone, Database, Server, Globe,
  ZoomIn, Maximize, ChevronLeft, ChevronRight, X, LifeBuoy
} from 'lucide-react';
import Markdown from 'react-markdown';
import ContactModal from './ContactModal';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<'desc' | 'setup' | 'changelog'>('desc');
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [startIndex, setStartIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  React.useEffect(() => {
    setSelectedImage(product.image);
    setStartIndex(0);
  }, [product]);

  const thumbnails = product.images || [];
  const visibleThumbnails = thumbnails.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 4 < thumbnails.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  const features = [
    "Source code sạch",
    "Không chứa mã độc",
    "Có báo cáo",
    "Cam kết hỗ trợ"
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Back */}
          <a
            href="/products"
            className="flex items-center text-gray-500 hover:text-indigo-600 mb-6 transition-colors font-medium group inline-flex"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Quay lại danh sách
          </a>

          <div className="bg-gray-50 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">

              {/* Left Column: Images */}
              <div className="p-6 lg:p-10 bg-gray-50/50">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-4 group bg-gray-100">
                  <img
                    src={selectedImage}
                    alt={product.title}
                    className={`w-full h-full object-contain transition-transform duration-500 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
                    onClick={() => setIsZoomed(!isZoomed)}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                      {product.category}
                    </span>
                  </div>

                  {/* Image Controls */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => { e.stopPropagation(); setIsZoomed(!isZoomed); }}
                      className="p-2 bg-white/90 backdrop-blur rounded-lg shadow-lg hover:bg-white text-gray-700 transition-colors"
                      title="Zoom"
                    >
                      <ZoomIn size={20} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setIsFullscreen(true); }}
                      className="p-2 bg-white/90 backdrop-blur rounded-lg shadow-lg hover:bg-white text-gray-700 transition-colors"
                      title="Fullscreen"
                    >
                      <Maximize size={20} />
                    </button>
                  </div>
                </div>

                {/* Thumbnails Carousel */}
                {thumbnails.length > 0 && (
                  <div className="relative flex items-center gap-2 select-none">
                    {thumbnails.length > 4 && (
                      <button
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                        className={`p-1.5 rounded-full bg-white shadow-md border border-gray-200 text-gray-600 hover:text-indigo-600 transition-colors ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                      >
                        <ChevronLeft size={20} />
                      </button>
                    )}

                    <div className="flex-1 grid grid-cols-3 gap-2">
                      {visibleThumbnails.map((thumbnail, index) => (
                        <div
                          key={startIndex + index}
                          onClick={() => setSelectedImage(thumbnail)}
                          className={`aspect-video rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${selectedImage === thumbnail ? 'border-indigo-600 ring-2 ring-indigo-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
                        >
                          <img
                            src={thumbnail}
                            alt="Thumbnail"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    {thumbnails.length > 4 && (
                      <button
                        onClick={handleNext}
                        disabled={startIndex + 4 >= thumbnails.length}
                        className={`p-1.5 rounded-full bg-white shadow-md border border-gray-200 text-gray-600 hover:text-indigo-600 transition-colors ${startIndex + 4 >= thumbnails.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                      >
                        <ChevronRight size={20} />
                      </button>
                    )}
                  </div>
                )}

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
                    <BrushCleaning className="text-green-500 w-8 h-8" />
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Không có mã độc</p>
                      <p className="text-xs text-gray-500">Source code sạch, rõ ràng</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <LifeBuoy className="text-green-500 w-8 h-8" />
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Cam kết hỗ trợ</p>
                      <p className="text-xs text-gray-500">Ultraview, 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <BookOpenCheck className="text-green-500 w-8 h-8" />
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Đầy đủ báo cáo</p>
                      <p className="text-xs text-gray-500">Word, PowerPoint, Sơ đồ</p>
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
                  {product.desc}
                </p>

                {/* Actions */}
                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <Download size={24} />
                    Mua ngay
                  </button>
                  <a href={product.demo} target="_blank" className="flex-1 bg-white border-2 border-indigo-100 text-indigo-700 hover:bg-indigo-50 py-4 px-8 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart size={24} />
                    Xem demo
                  </a>
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
                  <span className="hidden md:inline">Mô tả chi tiết</span>
                  <span className="md:hidden">Mô tả</span>
                </button>
                <button
                  onClick={() => setActiveTab('setup')}
                  className={`px-8 py-4 font-medium text-sm focus:outline-none border-b-2 transition-colors ${activeTab === 'setup' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  <span className="hidden md:inline">Hướng dẫn cài đặt</span>
                  <span className="md:hidden">Cài đặt</span>
                </button>
                <button
                  onClick={() => setActiveTab('changelog')}
                  className={`px-8 py-4 font-medium text-sm focus:outline-none border-b-2 transition-colors ${activeTab === 'changelog' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  <span className="hidden md:inline">Change log</span>
                  <span className="md:hidden">Log</span>
                </button>
              </div>

              <div className="p-4 lg:p-6 bg-white min-h-[300px]">
                {activeTab === 'desc' && (
                  <div id="desc">
                    <div className="text-gray-600 mb-6 leading-relaxed">
                      <Markdown>{product.description}</Markdown>
                    </div>

                  </div>
                )}

                {activeTab === 'setup' && (
                  <div className="max-w-4xl space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
                      <Monitor className="text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-blue-900">Yêu cầu hệ thống</h4>
                        <ul>
                          {product.require.map((require, i) => (
                            <li key={i} className="mb-1">
                              <span>{require}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <ol className="relative border-l border-gray-200 ml-3 space-y-8 mt-6">
                      {product.setup.map((setup, i) => (
                        <li className="mb-10 ml-6" key={i}>
                          <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full -left-4 ring-4 ring-white">
                            <span className="font-bold text-indigo-600">{i + 1}</span>
                          </span>
                          <h3 className="font-bold text-gray-900 mb-1">{setup.title}</h3>
                          <Markdown>{setup.description}</Markdown>
                        </li>
                      ))}

                    </ol>
                  </div>
                )}

                {activeTab === 'changelog' && (
                  <div className="max-w-4xl">
                    <ul className="relative border-l border-gray-200">
                      {product.changelog.map((changelog, i) => (
                        <li className="mb-10 ml-6" key={i}>
                          <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full -left-4 ring-4 ring-white">
                            <span className="font-bold text-indigo-600">-</span>
                          </span>
                          <Markdown>{changelog}</Markdown>
                        </li>
                      ))}

                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default ProductDetail;