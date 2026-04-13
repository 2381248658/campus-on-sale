import { Schema, model } from 'mongoose';

const addressSchema = new Schema(
	{
		// 关联用户
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		receiver: { type: String, required: true }, // 收货人
		contact: { type: String, required: true }, // 联系方式
		provinceCode: { type: String, default: '' }, // 省份编码
		cityCode: { type: String, default: '' }, // 城市编码
		countyCode: { type: String, default: '' }, // 区县编码
		address: { type: String, required: true }, // 详细地址
		isDefault: { type: Number, default: 0 }, // 是否默认：0-否，1-是
		fullLocation: { type: String, default: '' }, // 完整地址(前端拼接好的)
	},
	{ timestamps: true, versionKey: false },
);

export const Address = model('Address', addressSchema);
