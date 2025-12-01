---
id: 2
title: "Web Quản lý cửa hàng bán phụ kiện quà tặng"
date: 2025-11-25
category: "web"
price: 250000
sale: 225000
thumbnail: "/img/2/screenshot.png"
images: [
    "/img/2/screenshot.png",
    "/img/2/admin_product-categories.png",
    "/img/2/admin_products.png",
    "/img/2/checkout.png",
    "/img/2/products.png",
]
tags: ["php","mysql","laravel"]
published: true
desc: "Website thương mại điện tử bán phụ kiện và quà tặng xây dựng bằng Laravel 10 (PHP), MySQL, theo mô hình MVC, kèm tài liệu/báo cáo đầy đủ."
demo: "https://www.youtube.com/watch?v=gkJFcilkEDw"

setup:
  - title: "Thiết lập môi trường"
    description: |
        Tạo file cấu hình `cp .env.example .env`

        Cập nhật các biến trong **.env**: APP_NAME, APP_URL, DB_DATABASE, DB_USERNAME, DB_PASSWORD
  - title: "Cài đặt phụ thuộc"
    description: |
        ```composer install```

        ```npm install```
  - title: "Generate key & build assets"
    description: |
        ```php artisan key:generate```
        ```npm run build```
  - title: "Khởi động ứng dụng"
    description: |
        ```php artisan serve```

        Truy cập `http://localhost:8000`

changelog: [ "v1.1: fix lỗi trang bán hàng","v1.0: fix lỗi trang bán hàng"]
require: ["PHP >= 8.1","MySQL/MariaDB 10.4+ hoặc tương đương","Node.js 18+ và npm", "Composer 2.6+"]
---

# 1. YÊU CẦU CHỨC NĂNG

## 1.1. Quản lý sản phẩm & danh mục

Hệ thống hỗ trợ đầy đủ nghiệp vụ về sản phẩm và danh mục:

Thêm, sửa, xóa sản phẩm.

Quản lý bộ sưu tập hình ảnh, mô tả chi tiết, giá bán, giá giảm, tồn kho.

Quản lý danh mục đa cấp và thương hiệu (brand).

Hỗ trợ sản phẩm nổi bật, biến thể, tối ưu SEO (slug, metadata).

Hỗ trợ import/export dữ liệu để cập nhật hàng loạt.

1.2. Tìm kiếm & lọc
Người dùng có thể tìm kiếm theo:

Tên sản phẩm

Thương hiệu

Danh mục

Hỗ trợ bộ lọc nâng cao:

Khoảng giá

Mức đánh giá (rating)

Tình trạng tồn kho

1.3. Giỏ hàng & đặt hàng
Thêm sản phẩm vào giỏ (kể cả khi chưa đăng nhập).

Thay đổi số lượng, xóa sản phẩm, xem tổng tiền.

Nhập thông tin giao hàng để đặt hàng.

Áp dụng mã giảm giá, tính phí vận chuyển, thanh toán bằng mã QR.

1.4. Thanh toán
Hỗ trợ thanh toán qua QR ngân hàng (QR tĩnh).

Lưu giao dịch vào bảng payments.

Gửi email xác nhận đơn hàng sau khi đặt và thanh toán.

1.5. Giao hàng
Lưu địa chỉ, ghi chú và phí vận chuyển.

Quản trị viên cập nhật trạng thái đơn:
pending → processing → shipping → completed

Cấu trúc database đã sẵn sàng để tích hợp API giao vận.

1.6. So sánh sản phẩm
Tính năng chưa triển khai nhưng có thể bổ sung dễ dàng do cấu trúc dữ liệu đã chuẩn hóa.

1.7. Đánh giá & bình luận sản phẩm
Người dùng đánh giá (1–5 sao), kèm ảnh minh họa.

Admin duyệt, phản hồi, ẩn/hiện bình luận.

Hỗ trợ bình luận đa hình (morph) cho cả sản phẩm và bài viết.

1.8. Hỏi đáp & tương tác nội dung
Cho phép đặt câu hỏi ngay trên trang sản phẩm.

Hệ thống blog có:

Danh mục bài viết

Lịch đăng bài

Bài viết nổi bật

1.9. Tin tức & truyền thông
Quản lý bài viết, banner, menu, trang tĩnh.

Soạn thảo nội dung bằng CKEditor.

1.10. Dashboard & báo cáo
Hiển thị:

Biểu đồ doanh thu

Số lượng đơn hàng

Top sản phẩm bán chạy

Heatmap giờ mua sắm

Thống kê lượt xem bài viết

1.11. Quản trị hệ thống
Quản lý sản phẩm và tồn kho.

Quản lý đơn hàng, in hóa đơn.

Quản lý danh mục, thương hiệu, banner, bài viết.

Quản lý người dùng: phân quyền, khóa/mở tài khoản.

Quản lý bình luận.

Quản lý phương thức giao hàng.

Tạo, sửa, xóa chương trình khuyến mãi.

Nhận thông báo realtime khi có đơn mới hoặc bình luận cần duyệt.

Theo dõi nhật ký hoạt động (log).

2. YÊU CẦU PHI CHỨC NĂNG

2.1. Tốc độ tải & hiệu năng
Tối ưu cache, index, phân trang, lazy-load hình ảnh.

Trang chủ đạt tốc độ tải lần đầu khoảng 1.2 giây.

Xử lý tốt dữ liệu lớn với hàng nghìn sản phẩm.

2.2. Thiết kế đáp ứng (Responsive)
Hoạt động tốt trên mọi thiết bị: desktop, tablet, mobile.

Sử dụng Bootstrap 5 + SCSS + grid 12 cột.

2.3. Trải nghiệm người dùng (UX/UI)
Bố cục rõ ràng: sidebar lọc, popup newsletter, wishlist, combo sản phẩm.

Giao diện admin hỗ trợ dark mode.

2.4. Bảo mật
Chống CSRF, XSS, SQL Injection.

Mật khẩu mã hóa bằng bcrypt/argon2.

Ghi log hệ thống và cảnh báo khi có hoạt động bất thường.

Hỗ trợ backup định kỳ.

2.5. Khả năng mở rộng
Kiến trúc module hóa (MVC, Service Layer, Repository Pattern).

Dễ tích hợp API thanh toán, giao vận, CRM, ứng dụng mobile.

Hỗ trợ chuẩn REST API và webhook trong tương lai.

2.6. Khả năng SEO
Tối ưu metadata, URL thân thiện, slug tự sinh.

Hỗ trợ schema, sitemap, OpenGraph.

2.7. Khả năng tích hợp
Hệ thống tương thích với:

GHN, GHTK, Viettel Post

VNPay, MoMo, ZaloPay

Ứng dụng di động (Flutter, PWA)

Facebook Catalog, Google Merchant

### HÌNH ẢNH DEMO

![Demo 1](/img/2/screenshot.png)  
![Demo 2](/img/2/admin_product-categories.png)  
![Demo 3](/img/2/admin_products.png)  
![Demo 4](/img/2/checkout.png)  
![Demo 5](/img/2/products.png)
---
