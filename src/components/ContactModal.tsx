import React from 'react';
import { X, MessageCircle, Facebook } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={onClose}></div>

            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm relative overflow-hidden animate-slide-up z-10">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors z-20"
                >
                    <X size={24} />
                </button>

                <div className="p-6 text-center">
                    <div className="mb-2 inline-flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-full text-indigo-600 mb-4">
                        <MessageCircle size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Liên hệ mua Code</h3>
                    <p className="text-gray-500 text-sm mb-6">Gửi tin nhắn để nhận báo giá & demo chi tiết</p>

                    {/* QR Code */}
                    <div className="mb-6 flex justify-center">
                        <div className="p-2 bg-white border border-gray-100 rounded-xl shadow-sm">
                            {/* QR Code pointing to Zalo */}
                            <img
                                src="/img/qrzalo.jpg"
                                alt="Zalo QR Code"
                                className="w-32 h-32 object-contain"
                            />
                            <p className="text-[10px] text-gray-400 mt-2 font-medium uppercase tracking-wide">Quét mã Zalo</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <a
                            href="https://zalo.me/0358993264"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-bold text-base shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5"
                        >
                            <span className="bg-white/20 p-1 rounded-full">
                                <MessageCircle size={16} fill="currentColor" className="text-white" />
                            </span>
                            Chat qua Zalo
                        </a>

                        <a
                            href="https://m.me/kha1999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-200 py-3 px-6 rounded-xl font-bold text-base transition-all"
                        >
                            <Facebook size={20} className="text-blue-600" />
                            Chat Messenger
                        </a>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-50 text-xs text-gray-400">
                        Hỗ trợ cài đặt & hướng dẫn 24/7
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
