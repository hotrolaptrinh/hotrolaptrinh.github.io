import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// IMPORTANT: Access API key from process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Bạn là "Dev Bot" - trợ lý ảo của sàn thương mại điện tử "CodeStore" - nơi bán source code cho sinh viên.
Khách hàng của bạn là sinh viên IT tìm code mẫu.

Dữ liệu sản phẩm hiện có trong kho (hãy gợi ý dựa trên list này):
1. Website Thương Mại Điện Tử (MERN Stack) - 299k: Giỏ hàng, Admin, ReactJS, Node.js.
2. App Chat Realtime (Socket.io) - 349k: Nhắn tin, Zalo clone, WebRTC.
3. App Đặt Đồ Ăn (Flutter) - 499k: Mobile app, map, Firebase.
4. Quản Lý Thư Viện (Java Spring Boot) - 399k: Java backend, Thymeleaf.
5. Điểm Danh AI (Python) - 599k: Nhận diện khuôn mặt, Computer Vision.
6. Web Tuyển Dụng (Next.js) - 250k: SEO tốt, SSR.

Nhiệm vụ:
- Hỏi khách đang làm đồ án về chủ đề gì (Web, App, AI...)?
- Gợi ý sản phẩm phù hợp nhất từ danh sách trên.
- Nếu khách hỏi công nghệ, hãy giải thích chi tiết stack (VD: MERN là Mongo, Express, React, Node).
- Nhấn mạnh: Code sạch, có báo cáo mẫu đi kèm, hỗ trợ cài đặt.

Phong cách:
- Nhanh gọn, chuyên nghiệp, dùng từ chuyên ngành (Fullstack, API, Deploy, Frontend, Backend).
- Đừng bịa ra sản phẩm không có trong danh sách trên, nếu không có hãy nói "Hiện tại bên mình chưa có, nhưng bạn có thể tham khảo [sản phẩm gần nhất]".
`;

let chatSession: Chat | null = null;

export const initializeChat = (): void => {
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  try {
    if (!chatSession) throw new Error("Chat session not initialized");
    
    const result: GenerateContentResponse = await chatSession.sendMessage({
      message: message
    });
    
    return result.text || "Mình đang check kho code chút nhé...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Server đang quá tải, bạn hỏi lại sau xíu nhé.";
  }
};
