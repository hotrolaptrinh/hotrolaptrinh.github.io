---
id: 1
title: "Web thương mại điện tử bán Văn phòng phẩm Laravel PHP"
date: 2025-11-20
category: "web"
price: 250000
sale: 225000
thumbnail: "/img/1/1.png"
images: [
    "/img/1/1.png",
    "/img/1/2.png",
    "/img/1/3.png",
    "/img/1/4.png",
    "/img/1/5.png",
    "/img/1/6.png",
    "/img/1/7.png",
]
tags: ["php","mysql","laravel"]
published: true
desc: "Website thương mại điện tử bán phụ kiện và quà tặng xây dựng bằng Laravel 10 (PHP), MySQL, theo mô hình MVC, kèm tài liệu/báo cáo đầy đủ."
demo: "https://www.youtube.com/watch?v=rKzDxkKDumw"

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

# Tổng quan về các công nghệ sử dụng
- Hệ thống sử dụng Laravel làm nền tảng chính nhờ cấu trúc MVC rõ ràng và route linh hoạt.
- Middleware, queue, migration và seeder giúp quản trị dữ liệu và quy trình xử lý ổn định.
- Artisan command hỗ trợ tự động hóa nhiều tác vụ như backup, import và đồng bộ.
- Blade template cung cấp giao diện thống nhất với component, slot và directive tùy chỉnh.
- Eloquent ORM ánh xạ dữ liệu tự nhiên và hỗ trợ eager loading, global scope và observer.
- Các tính năng event broadcasting, notification và job scheduling mở rộng khả năng xử lý realtime.
- Sanctum hoặc Passport được sử dụng khi cần triển khai API bảo mật.
- Bootstrap 5.3 kết hợp SCSS tạo giao diện responsive theo grid 12 cột và hệ utilities linh hoạt.
- jQuery phục vụ thao tác DOM nhanh và tích hợp plugin như DataTables, Select2 và Dropzone.
- Chart.js hiển thị biểu đồ cho dashboard và CKEditor 5 cung cấp trình soạn thảo nội dung trực quan.
- MySQL/MariaDB đảm nhiệm cơ sở dữ liệu với InnoDB, index tối ưu và Redis/Memcached làm cache layer.


# Đối tượng và bối cảnh sử dụng
- **Khách hàng cuối**: học sinh, sinh viên, nhân viên văn phòng, doanh nghiệp nhỏ cần đặt văn phòng phẩm số lượng lớn. Họ thường truy cập bằng thiết bị di động, mong muốn tìm nhanh sản phẩm, xem đánh giá, chọn phương thức thanh toán phù hợp, theo dõi trạng thái đơn hàng. Khách hàng đề cao tính minh bạch giá, hình ảnh thực tế và chương trình điểm thưởng.
- **Quản trị viên (Admin)**: chủ cửa hàng hoặc nhân viên IT đảm nhiệm việc cấu hình hệ thống, phân quyền, duyệt nội dung và giám sát hoạt động. Họ cần công cụ cảnh báo khi tồn kho thấp, khi có đơn hàng giá trị cao, hoặc khi hệ thống ghi nhận lỗi bảo mật.
- **Nhân viên nội dung/marketing**: quản lý bài viết blog, banner, chương trình khuyến mãi, thiết lập popup thu thập email, đẩy thông báo. Họ cần lịch xuất bản, mẫu nội dung, phân quyền chi tiết.
- **Nhân viên kho – chăm sóc khách hàng**: cập nhật tồn kho, xử lý đơn, giao tiếp với khách, in hóa đơn. Họ cần quy trình rõ ràng, giao diện đơn giản, hạn chế thao tác thừa.

# Yêu cầu chức năng

1. **Quản lý danh mục và sản phẩm**: hỗ trợ danh mục nhiều cấp, thuộc tính tùy biến (màu sắc, chất liệu, kích thước), giá nhập – giá bán, tồn kho theo biến thể. Cho phép import/export CSV, đồng bộ SKU, tạo slug tự động, thiết lập combo sản phẩm.
2. **Quản lý truyền thông**: tạo bài viết blog, trang giới thiệu, FAQ, banner slider, khối nội dung tĩnh; có lịch xuất bản, trạng thái nháp, phân quyền duyệt nhiều cấp, hỗ trợ SEO (meta title, schema).
3. **Giỏ hàng và đặt hàng**: cho phép khách vãng lai thêm sản phẩm, lưu giỏ vào session; khách đăng nhập được đồng bộ giỏ giữa các thiết bị. Quy trình đặt hàng gồm bước nhập thông tin giao hàng, lựa chọn phương thức thanh toán (COD, chuyển khoản QR), áp dụng mã giảm giá, xác nhận email. Hệ thống tạo mã đơn tự động, gửi thông báo cho admin.
4. **Quản lý bình luận – đánh giá**: người dùng đánh giá sản phẩm với thang điểm 1–5, upload ảnh minh họa; quản trị viên duyệt trước khi hiển thị, phản hồi bình luận, gắn tag “đã xác thực mua hàng”.
5. **Quản lý người dùng và phân quyền**: hỗ trợ vai trò admin, editor, warehouse, customer; cho phép tạo vai trò tùy chỉnh với tập quyền chi tiết (policy + gate). Hệ thống ghi nhận lần đăng nhập gần nhất, cho phép khóa tài khoản, reset mật khẩu.
6. **Dashboard thống kê**: biểu đồ doanh thu theo tháng, bảng top sản phẩm bán chạy, tỷ lệ chuyển đổi, danh sách đơn hàng gần nhất, biểu đồ bài viết phổ biến, bản đồ khách hàng theo tỉnh thành, heatmap truy cập theo khung giờ.
7. **Tìm kiếm và lọc**: tìm kiếm toàn văn theo tên sản phẩm, mô tả; lọc theo danh mục, khoảng giá, thương hiệu, tag; gợi ý sản phẩm liên quan dựa trên lượt xem và mua chung.
8. **Quản lý phương tiện**: lưu trữ ảnh theo thư viện media, hỗ trợ resize, sinh thumbnail, gắn tag để tái sử dụng, tích hợp trình chọn ảnh vào CKEditor.
9. **Cấu hình hệ thống**: cài đặt thông tin cửa hàng, SMTP, SMS, khóa API, tham số hiển thị trên trang chủ, chế độ bảo trì, cấu hình SEO tổng thể, thiết lập ngôn ngữ và tiền tệ.
10. **Thông báo và nhật ký**: gửi thông báo realtime cho admin khi có đơn mới, bình luận chờ duyệt, tồn kho dưới ngưỡng. Lưu nhật ký thao tác (log) để truy vết.

# Yêu cầu phi chức năng
- **Hiệu năng**: thời gian phản hồi trang chủ < 1.5s, trang danh sách sản phẩm < 2s với 10.000 bản ghi; sử dụng pagination, cache query, lazy load ảnh. Hỗ trợ CDN khi cần.
- **Bảo mật**: áp dụng HTTPS, mã hóa mật khẩu bằng bcrypt/argon2, CSRF token cho form, rate limit đăng nhập, log audit các hành động quan trọng, backup dữ liệu hàng ngày, cảnh báo khi có nỗ lực đăng nhập thất bại nhiều lần.
- **Khả năng mở rộng**: kiến trúc module hóa, sử dụng service container, repository, event để dễ mở rộng; hỗ trợ đa ngôn ngữ thông qua localization file và database translation. Codebase tuân thủ SOLID, Clean Architecture ở module phức tạp.
- **Khả năng quan sát**: log tập trung (Monolog channel), tích hợp dịch vụ giám sát như Sentry/New Relic; sử dụng Laravel Telescope trong môi trường staging để phân tích query, request, job.
- **Khả năng sử dụng**: giao diện nhất quán, hỗ trợ người dùng khuyết tật thông qua chuẩn WCAG cơ bản, phím tắt, tooltip, hiển thị thông báo rõ ràng. Đảm bảo admin có dark mode, hỗ trợ đa trình duyệt.
- **Độ tin cậy**: có cơ chế retry cho queue job, transaction trong các thao tác quan trọng, test backup khôi phục định kỳ.

# HÌNH ẢNH DEMO

![Demo 1](/img/1/1.png)  
![Demo 2](/img/1/2.png)  
![Demo 3](/img/1/3.png)  
![Demo 4](/img/1/4.png)  
![Demo 5](/img/1/5.png)
![Demo 6](/img/1/6.png)
![Demo 7](/img/1/7.png)