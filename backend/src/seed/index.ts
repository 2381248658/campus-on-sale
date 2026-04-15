// src/seed/index.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { seedUser } from './user.seed.js';
import { seedBanner } from './banner.seed.js';
import { seedCategory } from './category.seed.js';
import { seedGoods } from './goods.seed.js';

dotenv.config();

// 判断是否传了 --reset
const isReset = process.argv.includes('--reset');

async function main() {
	try {
		await mongoose.connect(process.env.MONGO_URI as string);
		console.log('\n🚀 连接数据库成功...');

		if (isReset) {
			console.log('🗑️  检测到 --reset 参数，清空旧数据...');
			await mongoose.connection.dropDatabase();
		}

		// 1. 基础数据 (无依赖)
		await seedUser();
		const bannerCount = await seedBanner();

		// 2. 分类数据 (无依赖，但需返回结果)
		const { topCount, subCategories } = await seedCategory();

		// 3. 商品数据 (强依赖分类数据)
		const { totalGoodsCount, totalSkus } = await seedGoods(subCategories);

		console.log(`\n✅ 数据初始化彻底完成！`);
		console.log(`📊 数据统计：`);
		console.log(`   - 测试账号: 1 个 (账号: test, 密码: 123456)`);
		console.log(`   - 收货地址: 2 个`);
		console.log(`   - 轮播图: ${bannerCount} 张`);
		console.log(`   - 一级分类: ${topCount} 个`);
		console.log(`   - 二级分类: ${subCategories.length} 个`);
		console.log(
			`   - 商品总数: ${totalGoodsCount} 个 (每个商品包含多个独立SKU)`,
		);
		console.log(`   - SKU总数: 约 ${totalSkus} 个`);
		console.log(`\n🚀 前端可以使用 test / 123456 登录了！`);
	} catch (error) {
		console.error('❌ 数据初始化失败:', error);
	} finally {
		await mongoose.disconnect();
	}
}

main();
