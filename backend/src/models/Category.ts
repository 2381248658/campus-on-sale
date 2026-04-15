import { Schema, model } from 'mongoose';

const categorySchema = new Schema(
	{
		name: { type: String, required: true }, // 分类名称
		subtitle: { type: String, default: '' }, // 副标题，对应接口 2.1
		picture: { type: String, default: '' }, // 分类图片
		parentId: {
			// 父分类ID (二级分类用，对应接口 2.2 的 parentId)
			type: Schema.Types.ObjectId,
			ref: 'Category',
			default: null,
		},
		goods: [
			{
				id: { type: String },
				name: { type: String },
				desc: { type: String },
				price: { type: Number },
				picture: { type: String },
			},
		],
	},
	{ timestamps: true, versionKey: false },
);

export const Category = model('Category', categorySchema);
