import express from 'express';
import { Goods } from '../models/Goods.js';
import { Category } from '../models/Category.js';

const router = express.Router();

// 3.1 获取商品详情
router.get('/goods', async (req, res) => {
	try {
		const { id } = req.query;
		if (!id)
			return res.status(400).json({ code: '400', msg: '缺少商品ID' });

		const goods = await Goods.findById(id as string).lean();
		if (!goods) {
			return res.status(404).json({ code: '404', msg: '商品不存在' });
		}

		// 组装 categories 数组 (文档要求返回 [{id, name}] 结构)
		let categories: Array<{ id: string; name: string }> = [];
		if (goods.categoryId) {
			const subCat = await Category.findById(goods.categoryId).lean();
			if (subCat) {
				categories.push({
					id: subCat._id.toString(),
					name: subCat.name,
				});
				if (subCat.parentId) {
					const parentCat = await Category.findById(
						subCat.parentId,
					).lean();
					if (parentCat) {
						categories.push({
							id: parentCat._id.toString(),
							name: parentCat.name,
						});
					}
				}
			}
		}

		// 严格按照接口文档 3.1 返回
		res.json({
			code: '1',
			msg: '操作成功',
			result: {
				id: goods._id.toString(),
				name: goods.name,
				price: goods.price,
				oldPrice: goods.oldPrice,
				mainPictures: goods.mainPictures,
				specs: goods.specs,
				skus: goods.skus,
				details: goods.details,
				categories,
				desc: goods.desc,
				inventory: goods.inventory,
				salesCount: goods.salesCount,
				commentCount: goods.commentCount,
				collectCount: goods.collectCount,
				brand: goods.brand,
			},
		});
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 3.2 获取热销商品
router.get('/goods/hot', async (req, res) => {
	try {
		const { id, type, limit = 3 } = req.query;

		if (!id || !type) {
			return res.status(400).json({ code: '400', msg: '缺少必传参数' });
		}

		// 根据类型决定排序字段 (1: 24小时热销, 2: 周热销)
		// 注：由于Model里没有区分24h和周的字段，这里统一用 salesCount 模拟
		const sortField =
			type === '1' || type === '2' ? 'salesCount' : 'salesCount';

		const goods = await Goods.find({ _id: { $ne: id as string } })
			.sort({ [sortField]: -1 })
			.limit(Number(limit))
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

// 4.2 猜你喜欢
router.get('/goods/relevant', async (req, res) => {
	try {
		const { limit = 4 } = req.query;

		// 简单实现：随机或按最新创建推荐
		const goods = await Goods.find()
			.sort({ createdAt: -1 })
			.limit(Number(limit))
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

export default router;
