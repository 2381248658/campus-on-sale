import express from 'express';
import { Banner } from '../models/Banner.js';
import { Goods } from '../models/Goods.js';
import { Category } from '../models/Category.js';

const router = express.Router();

// 1.1 获取轮播图
router.get('/recommend/banner', async (req, res) => {
	try {
		const banners = await Banner.find({}).lean();
		res.json({
			code: '1',
			msg: '操作成功',
			result: banners.map((b) => ({
				id: b._id.toString(),
				imgUrl: b.imgUrl,
			})),
		});
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 1.15 获取首页分类导航 (补齐缺失接口)
router.get('/home/category/head', async (req, res) => {
	try {
		const topCategories = await Category.find({ parentId: null }).lean();

		const result = await Promise.all(
			topCategories.map(async (cat) => {
				const [goods, children] = await Promise.all([
					Goods.find({ categoryId: cat._id })
						.sort({ orderNum: -1 })
						.limit(9)
						.lean(),
					Category.find({ parentId: cat._id }).lean(),
				]);

				return {
					id: cat._id.toString(),
					name: cat.name,
					subtitle: cat.subtitle || '',
					goods: goods.map((g) => ({
						id: g._id.toString(),
						name: g.name,
						desc: g.desc,
						price: g.price,
						picture: g.picture,
					})),
					children: children.map((child) => ({
						id: child._id.toString(),
						name: child.name,
						picture: child.picture,
					})),
				};
			}),
		);

		res.json({
			code: '1',
			msg: '操作成功',
			result,
		});
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 1.2 获取新鲜好物
router.get('/recommend/fresh', async (req, res) => {
	try {
		const goods = await Goods.find()
			.sort({ createdAt: -1 })
			.limit(4)
			.lean();
		res.json({
			code: '1',
			msg: '操作成功',
			result: goods.map((g) => ({
				id: g._id.toString(),
				name: g.name,
				desc: g.desc,
				price: g.price,
				picture: g.picture,
			})),
		});
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 1.3 获取人气推荐
router.get('/recommend/hot', async (req, res) => {
	try {
		const goods = await Goods.find().sort({ orderNum: -1 }).limit(4).lean();
		res.json({
			code: '1',
			msg: '操作成功',
			result: goods.map((g) => ({
				id: g._id.toString(),
				title: g.name,
				alt: g.name,
				picture: g.picture,
			})),
		});
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 1.4 获取首页产品板块
router.get('/campus/goods/all', async (req, res) => {
	try {
		const topCategories = await Category.find({ parentId: null }).lean();

		const result = await Promise.all(
			topCategories.map(async (cat) => {
				const goods = await Goods.find({ categoryId: cat._id })
					.sort({ orderNum: -1 })
					.limit(9) // 每个板块显示 9 个商品
					.lean();

				return {
					id: cat._id.toString(),
					name: cat.name,
					picture: cat.picture,
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
			result,
		});
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

export default router;
