import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/user.js';
import homeRouter from './routes/home.js'; // 确保引入了 home
import categoryRouter from './routes/category.js'; // 确保引入了 category
import goodsRouter from './routes/goods.js'; // 新增：引入 goods

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('校园惠 API 运行中... 🚀');
});

// 注册路由
app.use(userRouter);
app.use(homeRouter); // 挂载首页路由
app.use(categoryRouter); // 挂载分类路由
app.use(goodsRouter); // 挂载商品详情路由

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`✨ Server is running on http://localhost:${PORT}`);
});
