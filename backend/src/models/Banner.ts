import { Schema, model } from 'mongoose';

const bannerSchema = new Schema(
	{
		imgUrl: { type: String, required: true }, // 图片URL
		distributionSite: { type: String, default: '1' }, // 分发站点
	},
	{ timestamps: true, versionKey: false },
);

export const Banner = model('Banner', bannerSchema);
