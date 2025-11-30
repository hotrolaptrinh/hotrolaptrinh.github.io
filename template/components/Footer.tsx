import React from 'react';
import { Code2, Facebook, Github, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
                <Code2 size={20} />
              </div>
              <span className="font-bold text-xl text-slate-800">Dev<span className="text-indigo-600">Student</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Nền tảng cung cấp mã nguồn đồ án, bài tập lớn chất lượng cao cho sinh viên CNTT. Giúp bạn học code nhanh hơn, hiệu quả hơn.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-black"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-600"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Danh mục Code</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-indigo-600">Source Web Bán Hàng</a></li>
              <li><a href="#" className="hover:text-indigo-600">Source App Chat</a></li>
              <li><a href="#" className="hover:text-indigo-600">Source App Booking</a></li>
              <li><a href="#" className="hover:text-indigo-600">Source Quản Lý Kho</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Hỗ trợ sinh viên</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-indigo-600">Hướng dẫn cài đặt</a></li>
              <li><a href="#" className="hover:text-indigo-600">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-indigo-600">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-indigo-600">Blog công nghệ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Liên hệ Admin</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-indigo-600 mt-0.5" />
                <span>Khu Công Nghệ Cao, Q9, TP.HCM</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-indigo-600" />
                <span>0988 888 888 (Zalo)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-indigo-600" />
                <span>admin@devstudent.vn</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 DevStudent Store. Code for learning purposes only.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-gray-600">Bảo mật thông tin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;