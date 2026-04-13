import { Schema, model } from 'mongoose';

// 订单商品快照 Schema (不允许生成 _id)
const orderSkuSchema = new Schema(
	{
		id: { type: String, required: true }, // 商品ID
		name: { type: String, required: true }, // 商品名称
		picture: { type: String, required: true }, // 商品图片
		price: { type: Number, required: true }, // 下单时价格
		count: { type: Number, required: true }, // 购买数量
		attrsText: { type: String, default: '' }, // 规格文本
		skuId: { type: String, default: '' }, // SKU ID (订单详情需要)
		oldPrice: { type: Number, default: 0 }, // 原价 (订单详情需要)
	},
	{ _id: false },
);

// 订单收货地址快照 Schema
const orderAddressSchema = new Schema(
	{
		receiver: { type: String, required: true },
		contact: { type: String, required: true },
		provinceCode: { type: String, default: '' },
		cityCode: { type: String, default: '' },
		countyCode: { type: String, default: '' },
		address: { type: String, required: true },
		fullLocation: { type: String, default: '' },
	},
	{ _id: false },
);

const orderSchema = new Schema(
	{
		// 关联用户
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		// 订单状态：1-待支付，2-已支付，3-已发货
		orderState: {
			type: Number,
			default: 1,
		},
		// 实际支付金额
		payMoney: {
			type: Number,
			required: true,
		},
		// 商品总数
		totalNum: {
			type: Number,
			required: true,
		},
		// 商品列表快照
		skus: [orderSkuSchema],
		// 结算/创建订单时的扩展字段
		deliveryTimeType: Number, // 配送时间类型
		payType: Number, // 支付类型
		payChannel: Number, // 支付渠道
		buyerMessage: { type: String, default: '' }, // 买家留言
		// 收货地址快照
		deliveryAddress: orderAddressSchema,
	},
	{
		timestamps: true, // createdAt 会作为接口 6.1 的 createTime 返回
		versionKey: false,
	},
);

export const Order = model('Order', orderSchema);
