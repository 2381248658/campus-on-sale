import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// 扩展 Express 的 Request 类型，增加 userId 属性
declare global {
	namespace Express {
		interface Request {
			userId?: string;
		}
	}
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization;

	if (!process.env.JWT_SECRET) {
		return res
			.status(500)
			.json({ code: '500', msg: '服务器配置错误：JWT_SECRET 未定义' });
	}

	// 1. 检查 Authorization 头
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return res
			.status(401)
			.json({ code: '401', msg: '未提供认证令牌或格式错误' });
	}

	// 2. 提取并清洗 Token
	const token = authHeader.replace('Bearer ', '').trim();
	if (!token) {
		return res.status(401).json({ code: '401', msg: '认证令牌不能为空' });
	}

	try {
		// 3. 验证令牌 (强制 HS256)
		const decoded = jwt.verify(token, process.env.JWT_SECRET, {
			algorithms: ['HS256'],
		}) as { userId: string };

		if (!decoded.userId) {
			return res
				.status(401)
				.json({ code: '401', msg: '令牌无效：用户信息缺失' });
		}

		// 4. 将用户 ID 挂载到请求对象，供后续业务使用
		req.userId = decoded.userId;
		next();
	} catch (err: any) {
		const msg =
			err.name === 'TokenExpiredError'
				? '令牌已过期，请重新登录'
				: '令牌无效或被篡改';
		return res.status(401).json({ code: '401', msg });
	}
};
