// src/seed/goods.seed.ts
import { Goods } from '../models/Goods.js';
import { randomNum, randomFloat } from './utils.js';
import type { SubCategoryInfo } from './category.seed.js';
import mongoose from 'mongoose'; // 🔥 新增：导入 mongoose

// ==========================================
// 1. 定义严格类型，彻底告别隐式 any 报错
// ==========================================
interface SkuSeedItem {
	id: string;
	specs: Array<{ name: string; valueName: string }>;
	price: number;
	oldPrice: number;
	inventory: number;
}

interface GoodsSeedItem {
	name: string;
	desc: string;
	price: number;
	oldPrice: number;
	picture: string;
	mainPictures: string[];
	orderNum: number;
	inventory: number;
	salesCount: number;
	commentCount: number;
	collectCount: number;
	categoryId: mongoose.Types.ObjectId; // 🔥 修正：明确为 ObjectId 类型
	brand: { name: string };
	specs: any[];
	skus: SkuSeedItem[];
	details: {
		pictures: string[];
		properties: Array<{ name: string; value: string }>;
	};
}

export async function seedGoods(allSubCategories: SubCategoryInfo[]) {
	console.log('🛍️  开始生成商品数据...');

	const goodsToInsert: GoodsSeedItem[] = [];

	// ==========================================
	// 2. 真实商品模板库 (已修正 Key 匹配最新分类表)
	// ==========================================
	const realProductTemplates: Record<string, any[]> = {
		// 匹配分类：电子产品 -> 手机配件
		手机配件: [
			{
				name: 'Apple iPhone 15 Pro Max 磁吸防摔手机壳',
				desc: '官方磁吸设计，气垫防摔四角包边，液态硅胶磨砂手感，毕业季清仓特惠！',
				brand: { name: '绿联' },
				specs: [
					{
						name: '颜色',
						values: [
							{ name: '原色钛金属' },
							{ name: '蓝色钛金属' },
							{ name: '白色钛金属' },
							{ name: '黑色钛金属' },
						],
					},
					{
						name: '适用型号',
						values: [
							{ name: '15 Pro Max' },
							{ name: '15 Pro' },
							{ name: '15' },
						],
					},
				],
				skus: [
					{
						id: 'sku_case_1',
						specs: [
							{ name: '颜色', valueName: '原色钛金属' },
							{ name: '适用型号', valueName: '15 Pro Max' },
						],
						price: 49.9,
						oldPrice: 89.9,
						inventory: 150,
					},
					{
						id: 'sku_case_2',
						specs: [
							{ name: '颜色', valueName: '原色钛金属' },
							{ name: '适用型号', valueName: '15 Pro' },
						],
						price: 49.9,
						oldPrice: 89.9,
						inventory: 120,
					},
					{
						id: 'sku_case_3',
						specs: [
							{ name: '颜色', valueName: '蓝色钛金属' },
							{ name: '适用型号', valueName: '15 Pro Max' },
						],
						price: 49.9,
						oldPrice: 89.9,
						inventory: 80,
					},
					// ⚠️ 边界测试：白色钛金属 全部缺货
					{
						id: 'sku_case_4',
						specs: [
							{ name: '颜色', valueName: '白色钛金属' },
							{ name: '适用型号', valueName: '15 Pro Max' },
						],
						price: 59.9,
						oldPrice: 99.9,
						inventory: 0,
					},
					{
						id: 'sku_case_5',
						specs: [
							{ name: '颜色', valueName: '白色钛金属' },
							{ name: '适用型号', valueName: '15 Pro' },
						],
						price: 59.9,
						oldPrice: 99.9,
						inventory: 0,
					},
					{
						id: 'sku_case_6',
						specs: [
							{ name: '颜色', valueName: '黑色钛金属' },
							{ name: '适用型号', valueName: '15 Pro Max' },
						],
						price: 49.9,
						oldPrice: 89.9,
						inventory: 200,
					},
				],
			},
		],
		// 匹配分类：二手教材 -> 专业课教材
		专业课教材: [
			{
				name: '考研数学张宇高等数学18讲 (最新版)',
				desc: '内有少量铅笔笔记，重点章节已用荧光笔标注，附赠学长手写错题本复印件。',
				brand: { name: '张宇考研系列' },
				specs: [
					{
						name: '版本',
						values: [{ name: '2024最新版' }, { name: '2023版' }],
					},
					{
						name: '笔记情况',
						values: [{ name: '有重点标注' }, { name: '无笔记' }],
					},
				],
				skus: [
					{
						id: 'sku_book_1',
						specs: [
							{ name: '版本', valueName: '2024最新版' },
							{ name: '笔记情况', valueName: '有重点标注' },
						],
						price: 25.0,
						oldPrice: 68.0,
						inventory: 5,
					},
					{
						id: 'sku_book_2',
						specs: [
							{ name: '版本', valueName: '2024最新版' },
							{ name: '笔记情况', valueName: '无笔记' },
						],
						price: 35.0,
						oldPrice: 68.0,
						inventory: 2,
					},
					// ⚠️ 边界测试：旧版缺货
					{
						id: 'sku_book_3',
						specs: [
							{ name: '版本', valueName: '2023版' },
							{ name: '笔记情况', valueName: '有重点标注' },
						],
						price: 10.0,
						oldPrice: 58.0,
						inventory: 0,
					},
					{
						id: 'sku_book_4',
						specs: [
							{ name: '版本', valueName: '2023版' },
							{ name: '笔记情况', valueName: '无笔记' },
						],
						price: 15.0,
						oldPrice: 58.0,
						inventory: 8,
					},
				],
			},
		],
	};

	// ==========================================
	// 3. 遍历分类，组装数据
	// ==========================================
	let totalCount = 0;

	for (const cat of allSubCategories) {
		const templates = realProductTemplates[cat.subName];

		if (templates && templates.length > 0) {
			// 【有模板】：使用真实数据
			for (const template of templates) {
				totalCount++;
				const mainPicture = `https://picsum.photos/seed/real_${totalCount}/800/800`;
				goodsToInsert.push({
					name: template.name,
					desc: template.desc,
					price: template.skus[0].price,
					oldPrice: template.skus[0].oldPrice,
					picture: mainPicture,
					mainPictures: [
						mainPicture,
						`https://picsum.photos/seed/real_${totalCount}_2/800/800`,
					],
					orderNum: randomNum(1000, 9999),
					inventory: template.skus.reduce(
						(acc: number, sku: any) => acc + sku.inventory,
						0,
					),
					salesCount: randomNum(500, 5000),
					commentCount: randomNum(100, 500),
					collectCount: randomNum(200, 1000),
					// 🔥 关键修改：将字符串转换为 ObjectId
					categoryId: new mongoose.Types.ObjectId(cat.id),
					brand: template.brand,
					specs: template.specs,
					skus: template.skus,
					details: {
						pictures: Array.from(
							{ length: 4 },
							(_, idx) =>
								`https://picsum.photos/seed/detail_real_${totalCount}_${idx}/1200/800`,
						),
						properties: [
							{
								name: '成色',
								value:
									cat.topName === '二手教材'
										? '九成新'
										: '全新',
							},
							{ name: '发货地', value: '本校区当面交易' },
						],
					},
				});
			}
		} else {
			// 【无模板】：生成随机占位数据
			const fakeCount = randomNum(5, 8);
			for (let i = 0; i < fakeCount; i++) {
				totalCount++;
				const mainPicture = `https://picsum.photos/seed/fake_${totalCount}/800/800`;
				const fakePrice = randomFloat(10, 100);
				goodsToInsert.push({
					name: `${cat.subName} 通用商品 ${totalCount}号`,
					desc: `${cat.subName}类目下的普通商品，数据随机生成。`,
					price: fakePrice,
					oldPrice: fakePrice + randomFloat(10, 50),
					picture: mainPicture,
					mainPictures: [mainPicture],
					orderNum: randomNum(0, 100),
					inventory: randomNum(50, 200),
					salesCount: randomNum(0, 50),
					commentCount: 0,
					collectCount: 0,
					// 🔥 关键修改：将字符串转换为 ObjectId
					categoryId: new mongoose.Types.ObjectId(cat.id),
					brand: { name: '校园惠优选' },
					specs: [{ name: '默认规格', values: [{ name: '标准' }] }],
					skus: [
						{
							id: `sku_fake_${totalCount}`,
							specs: [{ name: '默认规格', valueName: '标准' }],
							price: fakePrice,
							oldPrice: fakePrice + 10,
							inventory: 100,
						},
					],
					details: { pictures: [], properties: [] },
				});
			}
		}
	}

	// 批量插入
	await Goods.insertMany(goodsToInsert);

	// ==========================================
	// 4. 提取 reduce 逻辑，使用显式类型注解
	// ==========================================
	const totalSkus = goodsToInsert.reduce(
		(acc: number, g: GoodsSeedItem) => acc + g.skus.length,
		0,
	);

	console.log(
		`✅ 商品生成完毕！包含 ${goodsToInsert.length} 个商品，${totalSkus} 个 SKU。`,
	);
	return { totalGoodsCount: goodsToInsert.length, totalSkus };
}
