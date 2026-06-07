import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/user.js';
import homeRouter from './routes/home.js';
import categoryRouter from './routes/category.js';
import goodsRouter from './routes/goods.js';
import aiRouter from './routes/ai.js';
import { auth } from './middleware/auth.js';
import cartRouter from './routes/member/cart.js';
import orderRouter from './routes/member/order.js';
import addressRouter from './routes/member/address.js';

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('校园惠 API 运行中... 🚀'));

// 公共接口
app.use(userRouter);
app.use(homeRouter);
app.use(categoryRouter);
app.use(goodsRouter);
app.use('/ai', auth, aiRouter);

// 认证接口
app.use('/member/cart', auth, cartRouter);
app.use('/member/order', auth, orderRouter);
app.use('/member/address', auth, addressRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
	console.log(`✨ Server is running on http://localhost:${PORT}`),
);
