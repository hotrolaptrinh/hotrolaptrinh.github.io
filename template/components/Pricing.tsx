import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'Gói Tham Khảo',
    price: '99k',
    period: '/source',
    description: 'Dành cho bạn muốn tham khảo cấu trúc code frontend.',
    features: [
      'Source Code Frontend (ReactJS)',
      'Giao diện responsive hoàn chỉnh',
      'Không bao gồm Backend',
      'Không bao gồm Database',
      'Tự setup môi trường'
    ],
    cta: 'Tải ngay',
    popular: false
  },
  {
    name: 'Gói Đồ Án',
    price: '299k',
    period: '/full-stack',
    description: 'Gói đầy đủ nhất để nộp bài tập lớn hoặc đồ án môn học.',
    features: [
      'Full Source (Front + Back)',
      'Database Script + Data mẫu',
      'Tài liệu hướng dẫn cài đặt PDF',
      'Video demo chức năng',
      'Fix bug cài đặt 1 lần',
      'Cam kết chạy 100%'
    ],
    cta: 'Mua ngay',
    popular: true
  },
  {
    name: 'Gói Tốt Nghiệp',
    price: '599k',
    period: '/vip',
    description: 'Trọn gói từ A-Z để bảo vệ đồ án tốt nghiệp.',
    features: [
      'Mọi quyền lợi gói Đồ Án',
      'File Word Báo Cáo (50 trang)',
      'Slide thuyết trình PowerPoint',
      'Hỗ trợ setup qua UltraViewer',
      'Giải thích code (30 phút)',
      'Hỗ trợ chỉnh sửa nhỏ'
    ],
    cta: 'Liên hệ Admin',
    popular: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative background */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden z-0">
          <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-3">Bảng giá sinh viên</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Đầu tư nhỏ cho <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">kết quả lớn</span>
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            Tiết kiệm hàng trăm giờ code với chi phí chỉ bằng vài ly trà sữa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-2xl transition-transform duration-300 hover:-translate-y-2 ${
                tier.popular 
                  ? 'bg-white text-gray-900 shadow-2xl shadow-indigo-900/50 scale-105 z-10' 
                  : 'bg-slate-800 text-white border border-slate-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 -mr-1 -mt-1 w-24 h-24 overflow-hidden rounded-tr-xl">
                    <div className="absolute top-0 right-0 w-36 h-8 bg-indigo-600 text-white text-xs font-bold flex items-center justify-center rotate-45 translate-x-8 translate-y-4 shadow-md">
                        HOT
                    </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className={`text-xl font-bold mb-2 ${tier.popular ? 'text-gray-900' : 'text-white'}`}>{tier.name}</h4>
                <p className={`text-sm ${tier.popular ? 'text-gray-500' : 'text-slate-400'}`}>{tier.description}</p>
              </div>

              <div className="mb-6 flex items-baseline">
                <span className={`text-4xl font-extrabold ${tier.popular ? 'text-gray-900' : 'text-white'}`}>{tier.price}</span>
                <span className={`text-sm ml-2 ${tier.popular ? 'text-gray-500' : 'text-slate-400'}`}>{tier.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check size={20} className={`mr-3 flex-shrink-0 ${tier.popular ? 'text-indigo-600' : 'text-green-400'}`} />
                    <span className={`text-sm ${tier.popular ? 'text-gray-700' : 'text-slate-300'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/30' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;