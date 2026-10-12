
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    message: "Backend Node.js đang hoạt động!"
  });
});

app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Frontend đã kết nối Backend!'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
