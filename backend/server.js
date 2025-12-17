import express from "express";
import cors from "cors";

const app = express();

// Cho phép CORS cho mọi nguồn
app.use(cors());

// Middleware để phân tích cú pháp JSON trong request body
app.use(express.json());

// ************ ROUTE GET (Giữ nguyên) ************
app.get("/", (req, res) => {
    res.json({ message: "Hello từ Backend 🚀" });
});

// ************ ROUTE POST (Mới) ************
app.post("/", (req, res) => {
    // Lấy dữ liệu từ body của request
    const receivedData = req.body;
    const inputData = receivedData.inputData; // Lấy trường 'inputData' từ Frontend gửi lên

    console.log("Dữ liệu nhận được từ Frontend:", receivedData);

    // Trả về một phản hồi cho Frontend, bao gồm cả dữ liệu đã nhận
    res.json({
        message: `Backend đã nhận thành công: "${inputData}" 🎉`,
        receivedData: inputData
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Backend chạy tại http://localhost:${PORT}`);
});