# Kho đề cương tách khỏi giao diện
SchemaVersion1. Cấu trúc khối / bộ / phần / câu; không cần chia năm học. Cập nhật tại chỗ, giữ ID và lịch sử Git.

## Ảnh nguyên bản
1901 WebP giữ nguyên byte, gom thành62 pack-XX.bin theo bộ/phần (mỗi gói tối đa1.5MB). Không nén lại, không mất pixel.
catalog.js: từng images[] chứa pack,offset,length,mime,sha256,sourceImage. asset-manifest.json giữ phép đối chiếu độc lập.
Đọc đúng byte [offset,offset+length) cho ra một WebP hoàn chỉnh; trình duyệt dùng Blob.slice, không cần thư viện giải nén. Cache tối đa2gói. URLảnh cũ hủy khi chuyển câu.
Có thể khôi phục ảnh riêng theo sourceImage bằng phép cắt byte trên, kiểm SHA256 trước sử dụng.
Khi thay hình, tái tạo pack của phần và cập nhật offsets/SHA của phần trong một commit thống nhất. Không thay pack đơn lẻ mà quên manifest.

## Nội dung
Mỗi câu có ID, set, documentId, sectionId, section, order, source{document,page,label},images[],type.
order theo vị trí thật trong PDF. source.document giữ đúng tên PDF. images có thể nhiều phần nếu nối trang hoặc dùng giả thiết chung.
answer:null nghĩa chưa có đáp án tự động kiểm. Đấu trường chỉ dùng câu bốn lựa chọn có đáp án kiểm chứng.
Không ghi đè/xóa câu cũ ngoài phạm vi thay thế đã xác định; lịch sử Git lưu bản trước.
