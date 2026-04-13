import express from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

const router = express.Router();

/**
 * @interface 4.1 用户登录
 */
router.post('/login', async (req, res) => {
	const { account, password } = req.body;

	try {
		// 1. 查找用户
		let user = await User.findOne({ account }).select('+password');

		// 如果账号不存在则自动创建
		if (!user) {
			const hashedPassword = await bcryptjs.hash(password, 10);
			user = await User.create({
				account,
				password: hashedPassword,
			});
		} else {
			// 2. 校验密码
			const isMatch = await bcryptjs.compare(password, user.password);
			if (!isMatch) {
				return res.status(400).json({ code: '400', msg: '密码错误' });
			}
		}

		// 3. 生成 7 天有效期的 Token
		const token = jwt.sign(
			{ userId: user._id },
			process.env.JWT_SECRET as string,
			{ expiresIn: '7d', algorithm: 'HS256' },
		);

		// 4. 返回符合 ApiResponse<LoginResult> 规范的数据
		// 移除模型中的 nickname 和 avatar，返回给前端时保持结构一致
		res.json({
			code: '1',
			msg: '操作成功',
			result: {
				id: user._id,
				account: user.account,
				nickname: '', // 保持字段但返回空
				avatar: '', // 保持字段但返回空
				token,
			},
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ code: '500', msg: '服务器内部错误' });
	}
});

export default router;
