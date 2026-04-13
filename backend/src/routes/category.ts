import express from 'express';
import { Category } from '../models/Category.js';
import { Goods } from '../models/Goods.js';

const router = express.Router();

// 2.1 获取一级分类详情
router.get('/category', async (req, res) => {
	const { id } = req.query;

	try {
		if (!id)
			return res.status(400).json({ code: '400', msg: '缺少分类ID' });

		// 修复：加上 as string 断言
		const topCategory = await Category.findById(id as string).lean();
		if (!topCategory) {
			return res.status(404).json({ code: '404', msg: '分类不存在' });
		}

		// 修复：加上 as string 断言
		const children = await Category.find({ parentId: id as string }).lean();

		const childrenWithGoods = await Promise.all(
			children.map(async (sub) => {
				const goods = await Goods.find({ categoryId: sub._id })
					.limit(10)
					.lean();
				return {
					id: sub._id.toString(),
					name: sub.name,
					picture: sub.picture,
					goods: goods.map((g) => ({
						id: g._id.toString(),
						name: g.name,
						desc: g.desc,
						price: g.price,
						picture: g.picture,
					})),
				};
			}),
		);

		res.json({
			code: '1',
			msg: '操作成功',
			result: {
				id: topCategory._id.toString(),
				name: topCategory.name,
				subtitle: topCategory.subtitle || '',
				picture: topCategory.picture,
				children: childrenWithGoods,
			},
		});
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 2.2 获取二级分类筛选条件
router.get('/category/sub/filter', async (req, res) => {
	const { id } = req.query;

	try {
		if (!id)
			return res.status(400).json({ code: '400', msg: '缺少分类ID' });

		// 修复：加上 as string 断言
		const subCategory = await Category.findById(id as string).lean();
		if (!subCategory) {
			return res.status(404).json({ code: '404', msg: '分类不存在' });
		}

		let parentName = '';
		// 修复：显式声明数组类型，解决隐式 any 报错
		let categories: Array<{ id: string; name: string }> = [];

		if (subCategory.parentId) {
			const parent = await Category.findById(subCategory.parentId).lean();
			parentName = parent?.name || '';

			const siblings = await Category.find({
				parentId: subCategory.parentId,
			}).lean();
			categories = siblings.map((s) => ({
				id: s._id.toString(),
				name: s.name,
			}));
		}

		res.json({
			code: '1',
			msg: '操作成功',
			result: {
				id: subCategory._id.toString(),
				name: subCategory.name,
				parentId: subCategory.parentId?.toString() || '',
				parentName,
				categories,
			},
		});
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 2.3 获取二级分类商品列表
router.post('/category/goods/temporary', async (req, res) => {
	const {
		categoryId,
		sortField = 'publishTime',
		page = 1,
		pageSize = 10,
	} = req.body;

	try {
		if (!categoryId)
			return res.status(400).json({ code: '400', msg: '缺少分类ID' });

		const sortMap: Record<string, any> = {
			publishTime: { createdAt: -1 },
			orderNum: { orderNum: -1 },
			evaluateNum: { commentCount: -1 },
		};
		const sortCondition = sortMap[sortField] || { createdAt: -1 };

		const counts = await Goods.countDocuments({ categoryId });
		const pages = Math.ceil(counts / pageSize);

		const items = await Goods.find({ categoryId })
			.sort(sortCondition)
			.skip((page - 1) * pageSize)
			.limit(pageSize)
			.lean();

		res.json({
			code: '1',
			msg: '操作成功',
			result: {
				counts,
				pageSize,
				pages,
				page,
				items: items.map((g) => ({
					id: g._id.toString(),
					name: g.name,
					desc: g.desc,
					price: g.price,
					picture: g.picture,
				})),
			},
		});
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

export default router;
