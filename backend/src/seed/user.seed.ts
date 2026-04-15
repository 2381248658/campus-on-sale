// src/seed/user.seed.ts
import bcryptjs from 'bcryptjs';
import { User } from '../models/User.js';
import { Address } from '../models/Address.js';

export async function seedUser() {
	console.log('👤 创建测试用户...');
	const hashedPassword = await bcryptjs.hash('123456', 10);
	const testUser = await User.create({
		account: 'test',
		password: hashedPassword,
		nickname: '校园惠剁手王',
		avatar: 'https://picsum.photos/seed/avatar_test/100/100',
	});

	console.log('📍 创建测试地址...');
	await Address.create([
		{
			userId: testUser._id,
			receiver: '张三',
			contact: '13800138000',
			provinceCode: '110000',
			cityCode: '110100',
			countyCode: '110105',
			address: '清华大学紫荆公寓2号楼409室',
			isDefault: 1,
			fullLocation: '北京市 市辖区 朝阳区',
		},
		{
			userId: testUser._id,
			receiver: '李四(代收)',
			contact: '13900139000',
			provinceCode: '330000',
			cityCode: '330100',
			countyCode: '330102',
			address: '浙江大学紫金港校区碧峰圆通驿站',
			isDefault: 0,
			fullLocation: '浙江省 杭州市 上城区',
		},
	]);
}
