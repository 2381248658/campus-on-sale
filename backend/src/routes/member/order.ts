import express from 'express';
import { Cart } from '../../models/Cart.js';
import { Goods } from '../../models/Goods.js';
import { Order } from '../../models/Order.js';
import { Address } from '../../models/Address.js';

const router = express.Router();

// ==========================================
// 7.1 获取结算信息 (GET /member/order/pre)
// ==========================================
router.get('/pre', async (req, res) => {
	try {
		const userId = req.userId!;

		// 1. 查询用户地址列表
		const userAddresses = await Address.find({ userId }).lean();

		// 2. 查询购物车中【已选中】的商品
		const selectedCarts = await Cart.find({
			userId,
			selected: true,
		}).lean();
		if (selectedCarts.length === 0) {
			return res.json({
				code: '1',
				msg: '操作成功',
				result: {
					userAddresses: [],
					goods: [],
					summary: {
						goodsCount: 0,
						totalPrice: 0,
						postFee: 0,
						discountMoney: 0,
						totalPay: 0,
					},
				},
			});
		}

		// 3. 去 Goods 表捞出对应的 SKU 详情（复用购物车逻辑）
		const skuIds = selectedCarts.map((c) => c.skuId);
		const goodsList = await Goods.find({
			'skus.id': { $in: skuIds },
		}).lean();

		let goodsCount = 0;
		let totalPrice = 0;
		let totalPay = 0;

		const goods = selectedCarts
			.map((cartItem) => {
				const targetGoods = goodsList.find((g) =>
					g.skus.some((sku: any) => sku.id === cartItem.skuId),
				);
				if (!targetGoods) return null;

				const targetSku = targetGoods.skus.find(
					(sku: any) => sku.id === cartItem.skuId,
				);
				const attrsText =
					targetSku?.specs
						.map((spec: any) => `${spec.name} ${spec.valueName}`)
						.join(' ') || '';

				const itemTotalPrice =
					(targetGoods.oldPrice || 0) * cartItem.count; // 原价总价
				const itemTotalPayPrice =
					(targetSku?.price || 0) * cartItem.count; // 现价应付总价

				goodsCount += cartItem.count;
				totalPrice += itemTotalPrice;
				totalPay += itemTotalPayPrice;

				return {
					id: targetGoods._id.toString(),
					name: targetGoods.name,
					picture: targetGoods.picture,
					price: targetSku?.price || 0,
					count: cartItem.count,
					attrsText,
					totalPrice: itemTotalPrice,
					totalPayPrice: itemTotalPayPrice,
					skuId: cartItem.skuId,
				};
			})
			.filter(Boolean); // 过滤掉失效商品

		res.json({
			code: '1',
			msg: '操作成功',
			result: {
				userAddresses,
				goods,
				summary: {
					goodsCount,
					totalPrice,
					postFee: 0, // 校园惠免运费
					discountMoney: 0, // 暂无优惠
					totalPay,
				},
			},
		});
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// ==========================================
// 7.2 创建订单 (POST /member/order)
// ==========================================
router.post('/', async (req, res) => {
	try {
		const userId = req.userId!;
		const { goods, addressId, deliveryAddress, buyerMessage } = req.body;

		if (!goods || goods.length === 0) {
			return res.status(400).json({ code: '400', msg: '缺少商品信息' });
		}

		// 1. 获取真实的收货地址
		let finalAddress = deliveryAddress;
		if (addressId) {
			const addr = await Address.findById(addressId).lean();
			if (addr) finalAddress = addr;
		}
		if (!finalAddress) {
			return res.status(400).json({ code: '400', msg: '请填写收货地址' });
		}

		// 2. 校验库存并组装订单商品快照
		const skuIds = goods.map((g: any) => g.skuId);
		const goodsList = await Goods.find({
			'skus.id': { $in: skuIds },
		}).lean();

		let payMoney = 0;
		let totalNum = 0;
		const orderSkus = [];

		for (const item of goods) {
			const targetGoods = goodsList.find((g) =>
				g.skus.some((sku: any) => sku.id === item.skuId),
			);
			if (!targetGoods)
				return res
					.status(400)
					.json({ code: '400', msg: `商品已下架: ${item.skuId}` });

			const targetSku = targetGoods.skus.find(
				(sku: any) => sku.id === item.skuId,
			);
			if (!targetSku)
				return res
					.status(400)
					.json({ code: '400', msg: `SKU不存在: ${item.skuId}` });
			if ((targetSku?.inventory ?? 0) < item.count)
				return res
					.status(400)
					.json({ code: '400', msg: `${targetGoods.name} 库存不足` });

			const attrsText = targetSku.specs
				.map((spec: any) => `${spec.name} ${spec.valueName}`)
				.join(' ');

			orderSkus.push({
				id: targetGoods._id.toString(),
				name: targetGoods.name,
				picture: targetGoods.picture,
				price: targetSku.price,
				count: item.count,
				attrsText,
			});

			payMoney += (targetSku?.price ?? 0) * item.count;
			totalNum += item.count;
		}

		// 3. 扣减库存 (使用 $inc 原子操作保证并发安全)
		for (const item of goods) {
			await Goods.updateOne(
				{
					'skus.id': item.skuId,
					'skus.inventory': { $gte: item.count },
				},
				{ $inc: { 'skus.$.inventory': -item.count } },
			);
		}

		// 4. 创建订单
		const order = await Order.create({
			userId,
			payMoney,
			totalNum,
			skus: orderSkus,
			buyerMessage: buyerMessage || '',
			deliveryAddress: finalAddress,
		});

		// 5. 清除购物车中已下单的商品
		await Cart.deleteMany({ userId, skuId: { $in: skuIds } });

		res.json({
			code: '1',
			msg: '下单成功',
			result: {
				id: order._id.toString(),
				payMoney,
			},
		});
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// ==========================================
// 6.1 获取订单列表 (GET /member/order)
// ==========================================
router.get('/', async (req, res) => {
	try {
		const userId = req.userId!;
		const { orderState, page = 1, pageSize = 10 } = req.query;

		// 构建查询条件
		const filter: any = { userId };
		// orderState 为 0 或不传时查全部，否则按状态查
		if (orderState && Number(orderState) !== 0) {
			filter.orderState = Number(orderState);
		}

		const counts = await Order.countDocuments(filter);
		const pages = Math.ceil(counts / Number(pageSize));
		const items = await Order.find(filter)
			.sort({ createdAt: -1 })
			.skip((Number(page) - 1) * Number(pageSize))
			.limit(Number(pageSize))
			.lean();

		res.json({
			code: '1',
			msg: '操作成功',
			result: {
				counts,
				pageSize: Number(pageSize),
				pages,
				page: Number(page),
				items: items.map((order) => ({
					id: order._id.toString(),
					createTime: order.createdAt, // Mongoose 会自动转为 ISO 字符串
					orderState: order.orderState,
					payMoney: order.payMoney,
					totalNum: order.totalNum,
					skus: order.skus,
				})),
			},
		});
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

export default router;
