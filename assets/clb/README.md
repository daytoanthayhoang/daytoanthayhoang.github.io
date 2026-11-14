# Thêm hoạt động CLB theo tuần

1. Mở `sessions.js`, thêm bản ghi vào `CLB_SESSIONS` với id duy nhất, date dạng YYYY-MM-DD, kind `session`, title, description và activities.
2. Mỗi activity có phase, title, description, url. URL có thể trỏ ngay đến công cụ hiện có (Sudoku, Nonogram, Futoshiki, nghịch lý ngày sinh…) hoặc đến một tab `#...` trong trang buổi mới. Không cần viết lại công cụ hay sửa giao diện danh mục.
3. Giữ nguyên id/URL buổi cũ. Danh mục tự xếp ngày mới trước, hỗ trợ tìm kiếm không dấu và xem lại. Bộ chưa xác minh ngày dùng kind `collection`, không bịa ngày.
4. Nếu công cụ cần dữ liệu riêng: tách dữ liệu khỏi mã, thêm bộ dữ liệu với ID mới; chỉ thêm tham số URL khi công cụ đã thực sự hỗ trợ và có kiểm thử. Không tự truyền tham số giả vào công cụ cũ.
5. Buổi 14/11: `#khoidong` là Sudoku giải mã cố định; `#1089`, `#matma`, `#logic` vẫn giữ liên kết trước. Khởi động là phần ngắn trước ba phần chính, không thay đổi phiếu in.
6. Sau cập nhật chạy `python3 scripts/club_catalog_check.py`, mở hub, tìm kiếm, mở từng thẻ, thử quay lại và TV/mobile. Kiểm nội dung toán và đối chiếu phiếu riêng nếu đổi dữ liệu.

Danh mục không có trình quản trị/đăng nhập. Muốn thêm buổi vẫn cập nhật dữ liệu trong repository rồi publish GitHub Pages. Không tự tạo lịch sử buổi học chưa xác minh.
