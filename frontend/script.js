// Thay thế nội dung trong file script.js của bạn
document.getElementById('dataForm').addEventListener('submit', function(event) {
    // Ngăn chặn hành vi submit mặc định của form
    event.preventDefault();

    const inputElement = document.getElementById('dataInput');
    const userInput = inputElement.value;

    // Chuẩn bị dữ liệu gửi đi
    const dataToSend = {
        inputData: userInput
    };

    // Hiển thị dữ liệu người dùng đã nhập ngay lập tức
    document.getElementById('userInputResult').innerText = "Bạn đã nhập: " + userInput;
    document.getElementById('userInputResult').classList.remove('hidden');

    // Gọi API Backend
    fetch("https://ma-nguon-mo.onrender.com", {
        method: 'POST', // Đổi sang phương thức POST
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        // Hiển thị kết quả từ Backend
        const backendResultElement = document.getElementById('backendResult');
        // Giả sử Backend trả về một object có chứa data.message hoặc data.receivedData
        // Tôi sẽ dùng data.message từ Backend đã chỉnh sửa.
        backendResultElement.innerText = "Backend Message: " + data.message;
        backendResultElement.classList.remove('hidden');
    })


    // Xóa trường nhập liệu sau khi gửi thành công
    inputElement.value = '';
});

// Thêm một hàm khởi tạo để ẩn kết quả ban đầu (không bắt buộc nhưng tốt cho UI)
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('backendResult').classList.add('hidden');
    document.getElementById('userInputResult').classList.add('hidden');
});