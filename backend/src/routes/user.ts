import express from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

const router = express.Router();

// 4.1 用户登录
router.post('/login', async (req, res) => {
	const { account, password } = req.body;

	try {
		const user = await User.findOne({ account }).select('+password');

		if (!user) {
			return res.status(400).json({ code: '400', msg: '账号不存在' });
		}

		const isMatch = await bcryptjs.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ code: '400', msg: '密码错误' });
		}

		const token = jwt.sign(
			{ userId: user._id },
			process.env.JWT_SECRET as string,
			{ expiresIn: '7d' },
		);

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

// 4.2 用户注册
router.post('/register', async (req, res) => {
	const { account, password, nickname } = req.body;

	try {
		if (!account || !password) {
			return res.status(400).json({ code: '400', msg: '账号和密码不能为空' });
		}

		if (password.length < 6 || password.length > 14) {
			return res.status(400).json({ code: '400', msg: '密码长度应在6~14位之间' });
		}

		const existingUser = await User.findOne({ account });
		if (existingUser) {
			return res.status(400).json({ code: '400', msg: '该账号已被注册' });
		}

		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		const user = await User.create({
			account,
			password: hashedPassword,
			nickname: nickname || account,
			avatar: '',
		});

		const token = jwt.sign(
			{ userId: user._id },
			process.env.JWT_SECRET as string,
			{ expiresIn: '7d' },
		);

		res.json({
			code: '1',
			msg: '注册成功',
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
