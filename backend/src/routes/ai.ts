/**
 * AI 聊天路由
 * @description 接收前端消息，转发到阿里云 GLM-5，返回 SSE 流式响应
 */
import { Router, Request, Response, NextFunction } from 'express';
import { OpenAI } from 'openai';

const router = Router();

// ========== 简易限流器（基于 IP + Token） ==========
interface RateLimitEntry {
	count: number;
	resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW = 60_000; // 1 分钟窗口
const RATE_LIMIT_MAX = 10; // 每分钟最多 10 次请求

/** 定期清理过期条目（每分钟执行一次，防止内存泄漏） */
setInterval(() => {
	const now = Date.now();
	for (const [k, v] of rateLimitMap) {
		if (now > v.resetAt) rateLimitMap.delete(k);
	}
}, 60_000);

/** 检查并更新请求频率，超限返回 429 */
function rateLimitMiddleware(req: Request, res: Response, next: NextFunction) {
	const key = `${req.ip}_${req.headers.authorization || 'anon'}`;
	const now = Date.now();
	const entry = rateLimitMap.get(key);

	if (!entry || now > entry.resetAt) {
		// 新窗口或过期，重置计数
		rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
		return next();
	}

	if (entry.count >= RATE_LIMIT_MAX) {
		const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
		return res.status(429).json({
			message: `请求过于频繁，请 ${retryAfter} 秒后重试`,
			retryAfter,
		});
	}

	entry.count++;
	next();
}

/** 延迟初始化 OpenAI 客户端（确保 dotenv 已加载） */
let _client: InstanceType<typeof OpenAI> | null = null;
const getClient = () => {
	if (!_client) {
		_client = new OpenAI({
			apiKey: process.env.GLM_API_KEY,
			baseURL:
				process.env.GLM_BASE_URL ||
				'https://dashscope.aliyuncs.com/compatible-mode/v1',
		});
	}
	return _client;
};

/** 模型名称 */
const MODEL_NAME = () => process.env.GLM_MODEL || 'ZHIPU/GLM-5.1';

/** 系统提示词 */
const SYSTEM_PROMPT = `你是"校园惠"电商平台的 AI 商品导购助手，专门帮助大学生做出购买决策。

## 核心能力
- 基于商品信息（名称、价格、原价、规格、SKU列表）回答用户问题
- 对比不同规格的价格和性价比
- 给出客观的购买建议和注意事项

## 回答格式
根据问题类型选择合适格式：

### 购买建议类（如"值得买吗""怎么样"）
**结论**：一句话购买建议

**优势**：
- 要点1
- 要点2

**注意**：
- 要点1

**适合场景**：一句话描述

### 比较推荐类（如"哪个性价比高""选哪个好"）
直接给出推荐理由和具体建议，用 Markdown 列表展示对比要点。

### 其他问题
简洁清晰地回答，可使用 Markdown 列表、加粗等格式增强可读性。

## 输出规范
1. 不要添加开场白或结束语，直接给出答案
2. 标题使用 \`\`\`**标题**：\`\`\` 格式，冒号紧跟内容不加空格
3. 列表项以 \`-\` 开头
4. 总字数控制在 200 字以内`;

router.post('/chat', rateLimitMiddleware, async (req, res) => {
	const { message, context } = req.body;

	if (!message) {
		return res.status(400).json({ message: '消息不能为空' });
	}

	// 设置 SSE 响应头
	res.setHeader('Content-Type', 'text/event-stream');
	res.setHeader('Cache-Control', 'no-cache');
	res.setHeader('Connection', 'keep-alive');
	res.setHeader('X-Accel-Buffering', 'no');

	try {
		// 构建消息列表（支持多轮对话）
		const chatMessages: Array<{
			role: 'system' | 'user' | 'assistant';
			content: string;
		}> = [{ role: 'system', content: SYSTEM_PROMPT }];

		// 注入商品上下文（仅首轮）
		if (context) {
			let contextText = `我正在查看以下商品：\n- 名称：${context.name}\n- 价格：¥${context.price}${context.oldPrice ? `\n- 原价：¥${context.oldPrice}` : ''}${context.desc ? `\n- 描述：${context.desc}` : ''}${context.category ? `\n- 分类：${context.category}` : ''}`;

			// 规格选项
			if (Array.isArray(context.specs) && context.specs.length > 0) {
				contextText += '\n\n可选规格：';
				for (const spec of context.specs) {
					const values = spec.values
						.map((v: { name: string }) => v.name)
						.join('、');
					contextText += `\n- ${spec.name}：${values}`;
				}
			}

			// SKU 价格列表（格式优化：每个价格明确标注完整规格组合）
			if (Array.isArray(context.skus) && context.skus.length > 0) {
				contextText +=
					'\n\n各规格组合的价格（用户问"xx元是什么规格"时参考此表）：';
				for (const sku of context.skus) {
					const discount = sku.oldPrice
						? `（原价¥${sku.oldPrice}，省¥${(sku.oldPrice - sku.price).toFixed(1)}）`
						: '';
					const stock = sku.inventory <= 0 ? ' [已售罄]' : '';
					contextText += `\n- 【¥${sku.price}】${sku.specsText}${discount}${stock}`;
				}
				contextText +=
					'\n\n注意：以上是所有规格的完整价格列表，请根据此表回答用户关于具体规格的问题。';
			}

			chatMessages.push({ role: 'user', content: contextText });
			chatMessages.push({
				role: 'assistant',
				content: `好的，我已了解「${context.name}」的完整信息（含所有规格和价格），请问您有什么问题？`,
			});
		}

		// 添加历史对话
		if (Array.isArray(req.body.history)) {
			for (const msg of req.body.history) {
				if (msg.role === 'user' || msg.role === 'assistant') {
					chatMessages.push({ role: msg.role, content: msg.content });
				}
			}
		}

		// 添加当前用户消息
		chatMessages.push({ role: 'user', content: message });

		// 发送心跳，防止连接在等待首个 token 时超时
		let hasFirstToken = false;
		const heartbeat = setInterval(() => {
			if (!hasFirstToken && !res.writableEnded) {
				res.write(': heartbeat\n\n');
			}
		}, 5000);

		try {
			const stream = await getClient().chat.completions.create({
				model: MODEL_NAME(),
				messages: chatMessages,
				stream: true,
				max_tokens: 800,
			});

			for await (const chunk of stream) {
				const delta = chunk.choices[0]?.delta;
				// 只转发 content，忽略 reasoning_content（思考过程）
				const content = delta?.content;
				if (content) {
					if (!hasFirstToken) {
						hasFirstToken = true;
						clearInterval(heartbeat);
					}
					res.write(`data: ${content}\n\n`);
				}
			}

			clearInterval(heartbeat);

			res.write('data: [DONE]\n\n');
			res.end();
		} catch (error) {
			clearInterval(heartbeat);
			console.error('AI 聊天错误:', error);
			if (!res.writableEnded) {
				// 不泄露内部错误详情，仅返回通用提示
				res.write(`data: 抱歉，AI 服务暂时不可用，请稍后重试\n\n`);
				res.write('data: [DONE]\n\n');
				res.end();
			}
		}
	} catch (error) {
		// 设置 SSE 响应头失败等前置错误
		console.error('AI 聊天初始化错误:', error);
		if (!res.headersSent) {
			res.status(500).json({ message: 'AI 服务初始化失败' });
		}
	}
});

export default router;
