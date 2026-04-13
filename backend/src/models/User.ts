import { Schema, model } from 'mongoose';

const userSchema = new Schema(
	{
		// 学号/账号
		account: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			select: false,
		},
		// 根据接口 4.1 LoginResult 补充字段
		nickname: {
			type: String,
			default: '',
		},
		avatar: {
			type: String,
			default: '',
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

export const User = model('User', userSchema);
