import express from 'express';
import { Cart } from '../../models/Cart.js';
import { Goods } from '../../models/Goods.js';

const router = express.Router();

// 5.1 加入购物车
router.post('/', async (req, res) => {
	try {
		const userId = req.userId!;
		const { skuId, count = 1 } = req.body;

		// 1. 基础参数校验
		if (!skuId)
			return res.status(400).json({ code: '400', msg: '缺少skuId' });
		if (!Number.isInteger(count) || count <= 0) {
			return res
				.status(400)
				.json({ code: '400', msg: '商品数量必须为正整数' });
		}

		// 2. 校验 SKU 是否真实存在 (防止脏数据/幽灵数据)
		const skuExists = await Goods.findOne({ 'skus.id': skuId }).lean();
		if (!skuExists) {
			return res
				.status(400)
				.json({ code: '400', msg: '商品或规格不存在' });
		}

		// 3. 查找是否已经加过该商品
		const existingItem = await Cart.findOne({ userId, skuId });

		if (existingItem) {
			existingItem.count += count;
			await existingItem.save();
		} else {
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
		const cartList = await Cart.find({ userId }).lean();

		if (cartList.length === 0) {
			return res.json({ code: '1', msg: '操作成功', result: [] });
		}

		const skuIds = cartList.map((c) => c.skuId);
		const goodsList = await Goods.find({
			'skus.id': { $in: skuIds },
		}).lean();

		const result = cartList.map((cartItem) => {
			const targetGoods = goodsList.find((g) =>
				g.skus.some((sku: any) => sku.id === cartItem.skuId),
			);

			// 容错1：整个商品被删了
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

			const targetSku = targetGoods.skus.find(
				(sku: any) => sku.id === cartItem.skuId,
			);

			// 容错2：商品在，但具体SKU下架了 (修复 undefined 隐患)
			if (!targetSku) {
				return {
					id: cartItem._id.toString(),
					skuId: cartItem.skuId,
					name: `${targetGoods.name} (规格已失效)`,
					picture: targetGoods.picture,
					price: targetGoods.oldPrice || 0,
					nowPrice: 0,
					count: cartItem.count,
					selected: false, // 规格失效自动取消选中
					stock: 0,
					attrsText: '规格已下架',
				};
			}

			const attrsText =
				targetSku.specs
					.map((spec: any) => `${spec.name} ${spec.valueName}`)
					.join(' ') || '';

			return {
				id: cartItem._id.toString(),
				skuId: cartItem.skuId,
				name: targetGoods.name,
				picture: targetGoods.picture,
				price: targetGoods.oldPrice,
				nowPrice: targetSku.price,
				count: cartItem.count,
				selected: cartItem.selected,
				stock: targetSku.inventory || 0,
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

		if (!ids || !Array.isArray(ids) || ids.length === 0) {
			// 补充：防止传空数组进行无意义的DB操作
			return res.status(400).json({ code: '400', msg: '缺少ids数组' });
		}

		await Cart.deleteMany({ userId, skuId: { $in: ids } });
		res.json({ code: '1', msg: '删除成功', result: null });
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 5.4 合并购物车 (本地 -> 云端) 【核心重构】
router.post('/merge', async (req, res) => {
	try {
		const userId = req.userId!;
		const localCartList = req.body;

		if (!Array.isArray(localCartList)) {
			return res.status(400).json({ code: '400', msg: '参数格式错误' });
		}

		// 批量提取所有的 skuId 去校验存在性 (避免在 for 循环里 N 次查询数据库，提升性能)
		const validSkuIds = localCartList
			.filter(
				(item) =>
					item.skuId &&
					Number.isInteger(item.count) &&
					item.count > 0,
			)
			.map((item) => item.skuId);

		if (validSkuIds.length > 0) {
			const existingGoods = await Goods.find({
				'skus.id': { $in: validSkuIds },
			}).lean();
			const realSkuIds = new Set(
				existingGoods.flatMap((g) => g.skus.map((s: any) => s.id)),
			);

			// 过滤出真正合法的本地购物车项
			const validItems = localCartList.filter((item) =>
				realSkuIds.has(item.skuId),
			);

			// 并发执行更新/插入
			const mergePromises = validItems.map((item) => {
				// 修复逻辑：放弃 $setOnInsert，改用 $set 强制覆盖 selected 状态
				return Cart.updateOne(
					{ userId, skuId: item.skuId },
					{
						$inc: { count: item.count },
						$set: { selected: item.selected }, // 本地状态为准
					},
					{ upsert: true },
				);
			});

			await Promise.all(mergePromises);
		}

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

		const updateData: any = {};
		if (typeof selected === 'boolean') updateData.selected = selected;

		// 补充：数量正数校验
		if (typeof count === 'number') {
			if (!Number.isInteger(count) || count <= 0) {
				return res
					.status(400)
					.json({ code: '400', msg: '商品数量必须为正整数' });
			}
			updateData.count = count;
		}

		if (Object.keys(updateData).length === 0) {
			return res
				.status(400)
				.json({ code: '400', msg: '没有需要更新的数据' });
		}

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

		await Cart.updateMany({ userId }, { $set: { selected } });
		res.json({ code: '1', msg: '操作成功', result: null });
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

export default router;
