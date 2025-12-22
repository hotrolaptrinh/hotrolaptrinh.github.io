import React from 'react';
import { Search, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-28 pb-12 lg:pt-36 lg:pb-20 overflow-hidden bg-slate-900">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Sàn giao dịch Source Code số 1 cho sinh viên
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
           Tìm Source Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Chất Lượng</span> <br className="hidden md:block" />
           Cho Đồ Án Của Bạn
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          Hàng ngàn đồ án mẫu, source code PHP, Python, React, Node.js, Mobile App... đã được kiểm duyệt.
          Code sạch, chạy ngon, đầy đủ báo cáo.
        </p>

        {/* Search Box Large */}
        <div className="max-w-3xl mx-auto relative group">
           <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
           <div className="relative flex items-center bg-white rounded-xl shadow-2xl p-2">
              <Search className="text-gray-400 ml-4 w-6 h-6" />
              <input 
                type="text" 
                placeholder="Bạn đang tìm code gì? (VD: Web bán hàng, App quản lý...)" 
                className="w-full p-4 text-gray-700 text-lg outline-none placeholder:text-gray-400 bg-transparent"
              />
              <button className="min-w-[200px] bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all hidden sm:block">
                Tìm kiếm
              </button>
           </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-slate-400 font-medium text-sm">
           <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-400" size={18} />
              <span>Đã kiểm duyệt 100%</span>
           </div>
           <div className="flex items-center gap-2">
              <Zap className="text-yellow-400" size={18} />
              <span>Cài đặt trong 5 phút</span>
           </div>
           <div className="flex items-center gap-2">
              <TrendingUp className="text-blue-400" size={18} />
              <span>Cập nhật công nghệ mới</span>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
