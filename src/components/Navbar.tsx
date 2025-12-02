import React, { useState } from 'react';
import { Menu, X, Code2, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center gap-4">
          {/* Logo */}
          <a
            href="/"
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-600/20 group-hover:scale-105 transition-transform duration-300">
              <Code2 size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-slate-800 leading-none group-hover:text-indigo-600 transition-colors">Code<span className="text-indigo-600">Store</span></span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">Marketplace</span>
            </div>
          </a>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 relative group">
            <input
              type="text"
              placeholder="Tìm kiếm source code..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 rounded-full text-sm outline-none transition-all duration-300"
            />
            <Search className="absolute left-3.5 top-2.5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-medium text-gray-600">
              <a href="/products" className="hover:text-indigo-600 transition-colors relative group py-2">
                Tất cả Source
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/products?category=Website" className="hover:text-indigo-600 transition-colors relative group py-2">
                Website
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/products?category=Mobile App" className="hover:text-indigo-600 transition-colors relative group py-2">
                Mobile App
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/products?category=Other" className="hover:text-indigo-600 transition-colors relative group py-2">
                Đồ án mẫu
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
            <button
              className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search size={24} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed inset-x-0 top-[64px] bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out transform origin-top ${isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'
          }`}
        style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}
      >
        <div className="p-4 space-y-2">
          <a
            href="/products"
            className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-gray-800 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
          >
            Tất cả Source Code
          </a>
          <a
            href="/products?category=Website"
            className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
          >
            Website (React/Node/PHP)
          </a>
          <a
            href="/products?category=Mobile App"
            className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
          >
            Mobile App (Flutter/Android)
          </a>
          <a
            href="/products?category=AI/Data"
            className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
          >
            AI / Machine Learning
          </a>

          <div className="pt-4 border-t border-gray-100 mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
              <Search className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
