import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';
import { User } from './models/User.js';
import { Address } from './models/Address.js';
import { Banner } from './models/Banner.js';
import { Category } from './models/Category.js';
import { Goods } from './models/Goods.js';

dotenv.config();

// 辅助函数：生成指定范围的随机数
const randomNum = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;
const randomFloat = (min: number, max: number) =>
	Number((Math.random() * (max - min) + min).toFixed(2));

// 辅助函数：生成复杂的 SKU 笛卡尔积 (保证每个商品都有真实的规格组合)
function generateSkus(specsDef: any[]) {
	const skuList: any[] = [];
	// 提取所有规格的可能值
	const valueArrays = specsDef.map((spec: any) => spec.values);

	// 笛卡尔积递归计算组合
	function cartesianProduct(
		arr: any[][],
		index: number = 0,
		current: any[] = [],
	): any[] {
		if (index === arr.length) return [current];
		const result: any[] = [];
		for (const item of arr[index]) {
			result.push(
				...cartesianProduct(arr, index + 1, [...current, item]),
			);
		}
		return result;
	}

	const combinations = cartesianProduct(valueArrays);

	combinations.forEach((combo: any, idx: number) => {
		const basePrice = randomFloat(100, 5000); // 基础价格随机浮动模拟不同规格差价
		skuList.push({
			id: `sku_${Date.now()}_${randomNum(1000, 9999)}_${idx}`,
			inventory: randomNum(10, 500),
			price: basePrice,
			oldPrice: basePrice + randomFloat(100, 800),
			specs: combo.map((c: any) => ({
				name: c.specName,
				valueName: c.name,
			})),
		});
	});

	return skuList;
}

async function seedData() {
	try {
		await mongoose.connect(process.env.MONGO_URI as string);
		console.log('🗑️  清空旧数据...');
		await mongoose.connection.dropDatabase();

		// ==========================================
		// 1. 创建测试用户
		// ==========================================
		console.log('👤 创建测试用户...');
		const hashedPassword = await bcryptjs.hash('123456', 10);
		const testUser = await User.create({
			account: 'test',
			password: hashedPassword,
			nickname: '校园惠剁手王',
			avatar: 'https://picsum.photos/seed/avatar_test/100/100',
		});

		// ==========================================
		// 2. 创建测试地址 (让结算页有数据展示)
		// ==========================================
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

		// ==========================================
		// 3. 创建轮播图
		// ==========================================
		console.log('🎠 创建轮播图...');
		const bannerImgs = [
			'https://picsum.photos/seed/banner_summer/1240/500',
			'https://picsum.photos/seed/banner_digital/1240/500',
			'https://picsum.photos/seed/banner_books/1240/500',
			'https://picsum.photos/seed/banner_snacks/1240/500',
			'https://picsum.photos/seed/banner_sports/1240/500',
			'https://picsum.photos/seed/banner_beauty/1240/500',
		];
		await Banner.create(
			bannerImgs.map((img: string) => ({
				imgUrl: img,
				distributionSite: '1',
			})),
		);

		// ==========================================
		// 4. 创建分类体系 (一级 & 二级) - 完全匹配前端截图
		// ==========================================
		console.log('📂 创建分类体系...');
		const categoryTree = [
			{
				name: '宿舍百货',
				subtitle: '生活必备',
				subs: ['床品四件套', '收纳神器', '个护清洁', '实用小家电'],
			},
			{
				name: '校园零食',
				subtitle: '美味享不停',
				subs: ['膨化速食', '坚果甜品', '饮料冲调', '新鲜水果'],
			},
			{
				name: '二手教材',
				subtitle: '学习好帮手',
				subs: ['理工类专业', '文史类专业', '经管类专业', '考研考证'],
			},
			{
				name: '代取服务',
				subtitle: '懒人福音',
				subs: ['快递代取', '外卖代拿', '文件打印', '跑腿服务'],
			},
			{
				name: '数码租赁',
				subtitle: '科技生活',
				subs: ['手机租赁', '电脑租赁', '相机租赁', '其他设备'],
			},
			{
				name: '学长推荐',
				subtitle: '值得信赖',
				subs: ['学习用品', '生活好物', '数码产品', '娱乐设备'],
			},
			{
				name: '电子产品',
				subtitle: '最新科技',
				subs: ['手机', '电脑平板', '耳机音箱', '智能配件'],
			},
		];

		const allSubCategories: any[] = []; // 存放所有二级分类，用于后续生成商品

		for (const topCat of categoryTree) {
			// 创建一级分类
			const topCategory = await Category.create({
				name: topCat.name,
				subtitle: topCat.subtitle,
				picture: `https://picsum.photos/seed/cat_${topCat.name}/150/150`,
			});

			// 创建二级分类
			for (const subName of topCat.subs) {
				const subCategory = await Category.create({
					name: subName,
					picture: `https://picsum.photos/seed/sub_${subName}/150/150`,
					parentId: topCategory._id,
				});
				allSubCategories.push({
					id: subCategory._id,
					topName: topCat.name,
					subName: subName,
				});
			}
		}

		// ==========================================
		// 5. 批量生成海量商品 (核心重头戏)
		// ==========================================
		console.log('🛍️  开始批量生成海量商品 (可能需要几秒钟)...');

		// 定义不同分类的规格池和价格区间
		const specPool: Record<string, any> = {
			宿舍百货: {
				priceRange: [10, 300],
				specs: [
					{
						name: '款式',
						values: [
							{ name: '简约风' },
							{ name: 'ins风' },
							{ name: '可爱风' },
						],
					},
					{
						name: '尺寸',
						values: [
							{ name: '小号' },
							{ name: '标准款' },
							{ name: '加大号' },
						],
					},
				],
				prefixes: ['【高配】', '【自用】', '【毕业急出】'],
			},
			校园零食: {
				priceRange: [5, 80],
				specs: [
					{
						name: '口味',
						values: [
							{ name: '经典原味' },
							{ name: '香辣味' },
							{ name: '番茄味' },
						],
					},
					{
						name: '规格',
						values: [
							{ name: '小包装' },
							{ name: '家庭装' },
							{ name: '整箱装' },
						],
					},
				],
				prefixes: ['【临期特惠】', '【免税仓发】', '【爆款秒杀】'],
			},
			二手教材: {
				priceRange: [5, 60],
				specs: [
					{
						name: '版本',
						values: [{ name: '最新版' }, { name: '上一版' }],
					},
					{
						name: '笔记情况',
						values: [
							{ name: '无笔记' },
							{ name: '有少量笔记' },
							{ name: '有重点标注' },
						],
					},
				],
				prefixes: ['【学霸笔记】', '【九成新】', '【划重点版】'],
			},
			代取服务: {
				priceRange: [5, 50],
				specs: [
					{
						name: '服务类型',
						values: [
							{ name: '快递代取' },
							{ name: '外卖代拿' },
							{ name: '文件打印' },
						],
					},
					{
						name: '服务范围',
						values: [{ name: '校内' }, { name: '校外' }],
					},
				],
				prefixes: ['【急速配送】', '【超值服务】', '【24小时响应】'],
			},
			数码租赁: {
				priceRange: [50, 500],
				specs: [
					{
						name: '设备类型',
						values: [
							{ name: '手机' },
							{ name: '电脑' },
							{ name: '相机' },
						],
					},
					{
						name: '租赁时长',
						values: [
							{ name: '日租' },
							{ name: '周租' },
							{ name: '月租' },
						],
					},
				],
				prefixes: ['【全新设备】', '【优惠套餐】', '【学生专享】'],
			},
			学长推荐: {
				priceRange: [20, 500],
				specs: [
					{
						name: '推荐类型',
						values: [
							{ name: '学习用品' },
							{ name: '生活好物' },
							{ name: '数码产品' },
						],
					},
					{
						name: '推荐理由',
						values: [
							{ name: '实用' },
							{ name: '高性价比' },
							{ name: '口碑好' },
						],
					},
				],
				prefixes: ['【学长亲测】', '【闭眼入】', '【宝藏单品】'],
			},
			电子产品: {
				priceRange: [500, 8000],
				specs: [
					{
						name: '成色',
						values: [
							{ name: '全新' },
							{ name: '九成新' },
							{ name: '八成新' },
						],
					},
					{
						name: '颜色',
						values: [
							{ name: '暗夜黑' },
							{ name: '钛空白' },
							{ name: '远峰蓝' },
						],
					},
				],
				prefixes: ['【高配】', '【自用】', '【毕业急出】'],
			},
		};

		const goodsToInsert: any[] = [];
		let totalGoodsCount = 0;

		for (const cat of allSubCategories) {
			const pool = specPool[cat.topName] || specPool['宿舍百货']; // 兜底
			const goodsCountPerSub = randomNum(9, 12); // 每个二级分类 9~12 个商品（匹配前端展示）

			for (let i = 0; i < goodsCountPerSub; i++) {
				totalGoodsCount++;
				const prefix =
					pool.prefixes[randomNum(0, pool.prefixes.length - 1)];

				// 给 specs 里的 values 加上 specName，方便后续笛卡尔积算法识别
				const currentSpecs = pool.specs.map((spec: any) => ({
					...spec,
					values: spec.values.map((v: any) => ({
						...v,
						specName: spec.name,
					})),
				}));

				// 生成复杂的 SKU 列表
				const skus = generateSkus(currentSpecs);
				// 取第一个 SKU 的价格作为商品主价格
				const mainPrice =
					skus[0]?.price ||
					randomFloat(pool.priceRange[0], pool.priceRange[1]);
				const mainOldPrice =
					skus[0]?.oldPrice || mainPrice + randomFloat(50, 200);

				// 组装主图列表 (5-6张，匹配详情页缩略图展示)
			const mainPictureCount = randomNum(5, 6);
			const mainPictures = [];
			for (let p = 0; p < mainPictureCount; p++) {
				mainPictures.push(`https://picsum.photos/seed/goods_${totalGoodsCount}_${p}/800/800`);
			}

				goodsToInsert.push({
					name: `${prefix}${cat.subName}精选商品 ${totalGoodsCount}号`,
					desc: `${cat.topName}类目下的优质${cat.subName}，性价比超高，${cat.topName === '二手教材' ? '笔记清晰' : '成色极新'}，手慢无！`,
					price: mainPrice,
					oldPrice: mainOldPrice,
					picture: mainPictures[0],
					mainPictures: mainPictures,
					orderNum: randomNum(0, 10000),
					inventory: randomNum(50, 1000),
					salesCount: randomNum(10, 5000),
					commentCount: randomNum(0, 500),
					collectCount: randomNum(0, 300),
					categoryId: cat.id,
					brand: {
						name:
							cat.topName === '电子产品'
								? ['苹果', '华为', '小米', '联想'][
										randomNum(0, 3)
									]
								: '校园惠优选',
					},
					specs: currentSpecs.map((s: any) => ({
						name: s.name,
						values: s.values.map((v: any) => ({
							name: v.name,
							picture: `https://picsum.photos/seed/spec_${v.name}/50/50`,
							desc: v.name,
						})),
					})),
					skus: skus,
					details: {
					// 详情图片 6-7 张（匹配详情页介绍区域）
					pictures: Array.from({ length: randomNum(6, 7) }, (_, idx) =>
						`https://picsum.photos/seed/detail_${totalGoodsCount}_${idx}/1200/800`,
					),
						properties: [
							{ name: '所属类目', value: cat.subName },
							{ name: '上架时间', value: '2024-05-01' },
						],
					},
				});
			}
		}

		// 批量插入数据库 (极快)
		await Goods.insertMany(goodsToInsert);

		console.log(`\n✅ 数据初始化彻底完成！`);
		console.log(`📊 数据统计：`);
		console.log(`   - 测试账号: 1 个 (账号: test, 密码: 123456)`);
		console.log(`   - 收货地址: 2 个`);
		console.log(`   - 轮播图: ${bannerImgs.length} 张`);
		console.log(`   - 一级分类: ${categoryTree.length} 个`);
		console.log(`   - 二级分类: ${allSubCategories.length} 个`);
		console.log(
			`   - 商品总数: ${totalGoodsCount} 个 (每个商品包含 3~9 个独立SKU)`,
		);
		console.log(
			`   - SKU总数: 约 ${goodsToInsert.reduce((acc: number, g: any) => acc + g.skus.length, 0)} 个`,
		);
		console.log(`\n🚀 前端可以使用 test / 123456 登录了！`);
	} catch (error) {
		console.error('❌ 数据初始化失败:', error);
	} finally {
		await mongoose.disconnect();
	}
}

seedData();
