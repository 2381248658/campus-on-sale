import { Schema, model } from 'mongoose';

const goodsSchema = new Schema(
	{
		name: { type: String, required: true },
		desc: { type: String, default: '' },
		price: { type: Number, required: true },
		oldPrice: { type: Number, default: 0 },
		picture: { type: String, required: true }, // 对应接口 1.2 的 picture
		mainPictures: [String], // 对应接口 3.1
		orderNum: { type: Number, default: 0 }, // 对应接口 1.5 排序
		inventory: { type: Number, default: 0 },
		salesCount: { type: Number, default: 0 },
		// 接口 3.1 新增字段
		commentCount: { type: Number, default: 0 }, // 评论数
		collectCount: { type: Number, default: 0 }, // 收藏数
		brand: {
			// 品牌信息
			name: { type: String, default: '' },
		},
		// 严格匹配 3.1 接口定义的 specs
		specs: [
			{
				name: String,
				values: [{ name: String, picture: String, desc: String }],
			},
		],
		// 严格匹配 3.1 接口定义的 skus
		skus: [
			{
				id: String,
				inventory: Number,
				price: Number,
				oldPrice: Number,
				specs: [{ name: String, valueName: String }],
			},
		],
		// 详情页属性
		details: {
			pictures: [String],
			properties: [{ name: String, value: String }],
		},
		// 关联分类
		categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
	},
	{ timestamps: true, versionKey: false },
);

export const Goods = model('Goods', goodsSchema);
