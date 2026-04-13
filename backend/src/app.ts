import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // 注意：ESM 模式下建议带上 .js 后缀

dotenv.config();

const app = express();

// 连接数据库
connectDB();

// 中内件
app.use(cors());
app.use(express.json());

// 基础测试路由
app.get('/', (req, res) => {
	res.send('校园惠 API 运行中... 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`✨ Server is running on http://localhost:${PORT}`);
});
