import React, { useState } from 'react';
import { Menu, X, Code2, ShoppingCart, Search } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartCount] = useState(2); // Mock cart count

    return (
        <nav className="fixed w-full bg-white/95 backdrop-blur-md z-40 border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 md:h-20 items-center gap-4">
                    {/* Logo */}
                    <a
                        href="/"
                        className="flex-shrink-0 flex items-center gap-2 cursor-pointer min-w-fit"
                    >
                        <div className="bg-indigo-600 p-2 rounded-xl text-white">
                            <Code2 size={24} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl tracking-tight text-slate-800 leading-none">Code<span className="text-indigo-600">Store</span></span>
                            <span className="text-[10px] text-gray-500 font-medium tracking-wider">MARKETPLACE</span>
                        </div>
                    </a>

                    {/* Search Bar - Hidden on mobile */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
                        <input
                            type="text"
                            placeholder="Tìm kiếm source code (VD: Bán hàng, Chat app...)"
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border-transparent focus:bg-white border focus:border-indigo-500 rounded-full text-sm outline-none transition-all"
                        />
                        <Search className="absolute left-3.5 top-2.5 text-gray-400" size={18} />
                    </div>

                    {/* Desktop Menu & Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex gap-6 text-sm font-medium text-gray-600">
                            <a href="/products" className="hover:text-indigo-600 transition-colors">Tất cả Source</a>
                            <a href="/products?category=Website" className="hover:text-indigo-600 transition-colors">Website</a>
                            <a href="/products?category=Mobile App" className="hover:text-indigo-600 transition-colors">Mobile App</a>
                            <a href="/products?category=Other" className="hover:text-indigo-600 transition-colors">Đồ án mẫu</a>
                        </div>


                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            className="text-gray-600 hover:text-indigo-600"
                            onClick={() => {
                                // Future search toggle
                            }}
                        >
                            <Search size={24} />
                        </button>
                        <button className="relative p-2 text-gray-600">
                            <ShoppingCart size={24} />
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none ml-1"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in fixed top-16 left-0 w-full h-[calc(100vh-64px)] overflow-y-auto pb-20">
                    <div className="p-4">
                        <div className="flex flex-col space-y-2">
                            <a
                                href="/products"
                                className="block px-4 py-3 rounded-lg text-base font-bold text-gray-800 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600"
                            >
                                Tất cả Source Code
                            </a>
                            <a
                                href="/products?category=Website"
                                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                            >
                                Website (React/Node/PHP)
                            </a>
                            <a
                                href="/products?category=Mobile App"
                                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                            >
                                Mobile App (Flutter/Android)
                            </a>
                            <a
                                href="/products?category=AI/Data"
                                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                            >
                                AI / Machine Learning
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
