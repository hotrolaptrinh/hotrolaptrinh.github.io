import React from 'react';
import { FileCode2, ShieldCheck, Zap, Headphones } from 'lucide-react';
import type { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Chất lượng Code chuẩn",
    description: "Tất cả source code đều được Senior Dev review, đảm bảo clean code, dễ đọc, dễ mở rộng.",
    icon: <FileCode2 className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Bảo hành trọn đời",
    description: "Cam kết source code chạy được 100%. Nếu có lỗi do code, hoàn tiền hoặc fix bug miễn phí.",
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Support 24/7",
    description: "Đội ngũ support kỹ thuật luôn sẵn sàng teamviewer hỗ trợ bạn cài đặt môi trường.",
    icon: <Headphones className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Full Tài liệu",
    description: "Tặng kèm file báo cáo, slide thuyết trình, script database. Chỉ việc đổi tên và nộp.",
    icon: <Zap className="w-6 h-6 text-indigo-600" />,
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
