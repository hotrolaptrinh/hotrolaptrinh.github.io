import React from 'react';

const HomeExtra: React.FC = () => {
    return (
        <>
            {/* Banner Khuyến mãi */}
            <section className="py-12 md:py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Combo Đồ Án + Báo Cáo + Slide</h2>
                        <p className="text-indigo-200 text-base md:text-lg mb-6">Mua trọn bộ để được giảm giá 30% hôm nay. Dành riêng cho sinh viên năm cuối.</p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a
                                href="/products"
                                className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-block"
                            >
                                Xem gói Combo
                            </a>
                            <button className="bg-indigo-800 border border-indigo-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors">
                                Tư vấn miễn phí
                            </button>
                        </div>
                    </div>
                    <div className="relative hidden md:block">
                        {/* Decorative code block visual */}
                        <div className="w-80 h-48 bg-gray-900 rounded-xl border border-gray-700 p-4 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="flex gap-2 mb-3">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-3/4 bg-gray-700 rounded"></div>
                                <div className="h-2 w-1/2 bg-gray-700 rounded"></div>
                                <div className="h-2 w-5/6 bg-gray-700 rounded"></div>
                                <div className="h-2 w-full bg-gray-700 rounded"></div>
                                <div className="h-2 w-2/3 bg-gray-700 rounded"></div>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded shadow-lg transform -rotate-6">
                                SALE 30%
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter / Contact form reused */}
            <section id="contact" className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Nhận thông báo code mới</h2>
                    <p className="text-gray-600 mb-8">
                        Để lại email để nhận mã giảm giá 10% cho đơn hàng đầu tiên.
                    </p>
                    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Email của bạn..."
                            className="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                        />
                        <button className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-transform hover:-translate-y-1">
                            Đăng ký
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default HomeExtra;
