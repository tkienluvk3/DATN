# THÔNG TIN DỰ ÁN WEBSITE

## 1. Tên đề tài
Website gợi ý trang phục cá nhân hóa bằng trí tuệ nhân tạo (AI) tích hợp tiếp thị liên kết (Affiliate Marketing).

## 2. Mục tiêu website
Xây dựng website giúp người dùng tìm kiếm, khám phá và nhận gợi ý trang phục phù hợp với sở thích, phong cách cá nhân, hoàn cảnh sử dụng và ngân sách. Hệ thống sử dụng AI để hỗ trợ tư vấn phối đồ và đề xuất sản phẩm. Người dùng có thể xem thông tin sản phẩm và nhấn vào liên kết để mua hàng trên website của đối tác.

## 3. Công nghệ sử dụng
- Frontend: React.js, JavaScript, Vite.
- Giao diện: Bootstrap 5 kết hợp CSS tùy chỉnh.
- Backend: Node.js, Express.js.
- Cơ sở dữ liệu: MySQL, quản lý bằng Navicat.
- AI: Tích hợp mô hình ngôn ngữ lớn (LLM) để tư vấn và gợi ý trang phục.
- Giao tiếp frontend/backend: REST API, sử dụng Axios.
- Định tuyến frontend: React Router.

## 4. Đối tượng sử dụng
- Khách truy cập: xem sản phẩm và khám phá phong cách.
- Người dùng đã đăng nhập: cập nhật hồ sơ phong cách, nhận gợi ý cá nhân hóa, lưu sản phẩm yêu thích và xem lịch sử gợi ý.
- Quản trị viên: quản lý sản phẩm, danh mục, người dùng và dữ liệu hệ thống.

## 5. Các chức năng chính
1. Trang chủ giới thiệu website, phong cách nổi bật và sản phẩm được đề xuất.
2. Đăng ký, đăng nhập và quản lý thông tin cá nhân.
3. Khám phá, tìm kiếm và lọc sản phẩm theo danh mục, loại trang phục, màu sắc, giá tiền và phong cách.
4. Hồ sơ phong cách cá nhân: sở thích, phong cách yêu thích, màu sắc và ngân sách.
5. Gợi ý phối đồ bằng AI dựa trên thông tin người dùng và nhu cầu nhập vào.
6. Hiển thị bộ trang phục được gợi ý, gồm hình ảnh, mô tả và các sản phẩm thành phần.
7. Chi tiết sản phẩm, lưu yêu thích và liên kết mua hàng từ đối tác.
8. Lịch sử các lần gợi ý trang phục.
9. Trang quản trị để quản lý sản phẩm, danh mục và người dùng.

## 6. Định hướng giao diện
- Phong cách hiện đại, thời trang, tinh tế và tối giản.
- Màu chủ đạo: trắng kem, đen, be và nâu nhạt.
- Sử dụng hình ảnh thời trang chất lượng cao.
- Bố cục rõ ràng, khoảng cách thoáng, typography dễ đọc.
- Card sản phẩm có ảnh, tên sản phẩm, giá và nút xem chi tiết.
- Nút hành động nổi bật nhưng không sử dụng quá nhiều màu sắc.
- Header có logo, thanh tìm kiếm, menu điều hướng, tài khoản và danh sách yêu thích.
- Footer có thông tin website, liên hệ và các liên kết cần thiết.
- Responsive trên máy tính, máy tính bảng và điện thoại.

## 7. Nguyên tắc phát triển
- Sử dụng React component để tái sử dụng giao diện.
- Tách biệt components, pages, layouts, services và assets.
- Không viết toàn bộ website trong một file.
- Không tự ý thay đổi công nghệ của dự án.
- Không tạo chức năng giả vờ đã kết nối backend hoặc AI.
- Nếu API chưa có, sử dụng dữ liệu mẫu riêng để hoàn thiện giao diện và ghi rõ đây là dữ liệu mẫu.
- Ưu tiên giao diện hoàn chỉnh trước, sau đó tích hợp API.
- Giữ nguyên những phần code hiện có đang hoạt động.
- Trước khi tạo hoặc sửa file, kiểm tra cấu trúc dự án hiện tại.
