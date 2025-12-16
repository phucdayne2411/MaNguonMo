import express from "express";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello từ Backend 🚀" });
});

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Backend chạy tại http://localhost:${PORT}`);
});