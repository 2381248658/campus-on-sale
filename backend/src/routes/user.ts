import express from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

const router = express.Router();

// 4.1 用户登录
router.post('/login', async (req, res) => {
	const { account, password } = req.body;

	try {
		// 1. 查找用户 (必须加 select('+password') 破除 model 里的 select:false)
		const user = await User.findOne({ account }).select('+password');

		// 2. 账号不存在直接报错，不做自动注册（符合常规电商逻辑）
		if (!user) {
			return res.status(400).json({ code: '400', msg: '账号不存在' });
		}

		// 3. 校验密码
		const isMatch = await bcryptjs.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ code: '400', msg: '密码错误' });
		}

		// 4. 生成 Token
		const token = jwt.sign(
			{ userId: user._id },
			process.env.JWT_SECRET as string,
			{ expiresIn: '7d' },
		);

		// 5. 返回数据 (正常返回 nickname 和 avatar)
		res.json({
			code: '1',
			msg: '操作成功',
			result: {
				id: user._id.toString(),
				account: user.account,
				nickname: user.nickname,
				avatar: user.avatar,
				token,
			},
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ code: '500', msg: '服务器内部错误' });
	}
});

export default router;
