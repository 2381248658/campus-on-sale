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
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

export const User = model('User', userSchema);
