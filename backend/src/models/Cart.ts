import { Schema, model } from 'mongoose';

const cartSchema = new Schema(
	{
		// 关联用户
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		// 对应 Goods.skus[].id (我们在Goods模型里定义的是String)
		skuId: {
			type: String,
			required: true,
		},
		// 数量，默认1
		count: {
			type: Number,
			default: 1,
		},
		// 是否选中
		selected: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
);
// 保证同一个用户下，同一个SKU只能有一条记录
cartSchema.index({ userId: 1, skuId: 1 });

export const Cart = model('Cart', cartSchema);
