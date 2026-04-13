import express from 'express';
import { Cart } from '../../models/Cart.js';
import { Goods } from '../../models/Goods.js';

const router = express.Router();

// 5.1 加入购物车
router.post('/', async (req, res) => {
	try {
		const userId = req.userId!;
		const { skuId, count = 1 } = req.body;

		if (!skuId)
			return res.status(400).json({ code: '400', msg: '缺少skuId' });

		// 查找是否已经加过该商品
		const existingItem = await Cart.findOne({ userId, skuId });

		if (existingItem) {
			// 如果已存在，数量叠加
			existingItem.count += count;
			await existingItem.save();
		} else {
			// 不存在，新建记录
			await Cart.create({ userId, skuId, count });
		}

		res.json({ code: '1', msg: '添加成功', result: null });
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 5.2 获取购物车列表 (核心复杂接口)
router.get('/', async (req, res) => {
	try {
		const userId = req.userId!;

		// 1. 拿到当前用户的所有购物车记录
		const cartList = await Cart.find({ userId }).lean();
		if (cartList.length === 0) {
			return res.json({ code: '1', msg: '操作成功', result: [] });
		}

		// 2. 提取所有的 skuId，去 Goods 表查对应的商品和 SKU 详情
		const skuIds = cartList.map((c) => c.skuId);
		// 使用 MongoDB 数组查询：匹配 skus 数组中 id 在 skuIds 列表里的商品
		const goodsList = await Goods.find({
			'skus.id': { $in: skuIds },
		}).lean();

		// 3. 内存组装：把购物车记录和商品详情拼起来
		const result = cartList.map((cartItem) => {
			// 在查出的商品列表里找包含当前 skuId 的那个商品
			const targetGoods = goodsList.find((g) =>
				g.skus.some((sku: any) => sku.id === cartItem.skuId),
			);

			// 容错处理：如果商品被删了，返回基础结构
			if (!targetGoods) {
				return {
					id: cartItem._id.toString(),
					skuId: cartItem.skuId,
					name: '商品已失效',
					picture: '',
					price: 0,
					nowPrice: 0,
					count: cartItem.count,
					selected: cartItem.selected,
					stock: 0,
					attrsText: '',
				};
			}

			// 找到具体的那个 SKU
			const targetSku = targetGoods.skus.find(
				(sku: any) => sku.id === cartItem.skuId,
			);

			// 拼装规格文本：比如 "颜色:黑 存储:256G"
			const attrsText =
				targetSku?.specs
					.map((spec: any) => `${spec.name} ${spec.valueName}`)
					.join(' ') || '';

			return {
				id: cartItem._id.toString(),
				skuId: cartItem.skuId,
				name: targetGoods.name,
				picture: targetGoods.picture,
				price: targetGoods.oldPrice, // 原价
				nowPrice: targetSku?.price, // 现价（SKU级别的价格）
				count: cartItem.count,
				selected: cartItem.selected,
				stock: targetSku?.inventory || 0, // SKU级别的库存
				attrsText,
			};
		});

		res.json({ code: '1', msg: '操作成功', result });
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 5.3 批量删除购物车商品
router.delete('/', async (req, res) => {
	try {
		const userId = req.userId!;
		const { ids } = req.body;

		if (!ids || !Array.isArray(ids)) {
			return res.status(400).json({ code: '400', msg: '缺少ids数组' });
		}

		await Cart.deleteMany({ userId, skuId: { $in: ids } });
		res.json({ code: '1', msg: '删除成功', result: null });
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 5.4 合并购物车 (本地 -> 云端)
router.post('/merge', async (req, res) => {
	try {
		const userId = req.userId!;
		const localCartList = req.body; // 接收数组 [{ skuId, selected, count }]

		if (!Array.isArray(localCartList)) {
			return res.status(400).json({ code: '400', msg: '参数格式错误' });
		}

		// 使用 Promise.all 并发处理每个本地购物车项
		const mergePromises = localCartList.map((item) => {
			return Cart.findOneAndUpdate(
				{ userId, skuId: item.skuId },
				{
					$setOnInsert: { selected: item.selected }, // 插入时使用本地状态
					$inc: { count: item.count }, // 数量叠加
				},
				{ upsert: true, new: true },
			).lean();
		});

		await Promise.all(mergePromises);
		res.json({ code: '1', msg: '合并成功', result: null });
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 5.5 更新购物车商品 (数量或选中状态)
router.put('/:skuId', async (req, res) => {
	try {
		const userId = req.userId!;
		const { skuId } = req.params;
		const { selected, count } = req.body;

		// 动态构建更新对象 (只更新传了的字段)
		const updateData: any = {};
		if (typeof selected === 'boolean') updateData.selected = selected;
		if (typeof count === 'number') updateData.count = count;

		await Cart.updateOne({ userId, skuId }, { $set: updateData });
		res.json({ code: '1', msg: '更新成功', result: null });
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 5.6 全选/取消全选
router.put('/selected', async (req, res) => {
	try {
		const userId = req.userId!;
		const { selected } = req.body;

		if (typeof selected !== 'boolean') {
			return res
				.status(400)
				.json({ code: '400', msg: '缺少selected参数' });
		}

		// 批量更新当前用户的所有购物车项
		await Cart.updateMany({ userId }, { $set: { selected } });
		res.json({ code: '1', msg: '操作成功', result: null });
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

export default router;
