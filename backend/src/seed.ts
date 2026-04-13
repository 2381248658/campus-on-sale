import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { Banner } from './models/Banner.js';
import { Category } from './models/Category.js';
import { Goods } from './models/Goods.js';

dotenv.config();

// 清空并重新插入数据的封装函数
const seedData = async () => {
	await connectDB();
	console.log('🚀 开始清理旧数据...');
	await Banner.deleteMany({});
	await Category.deleteMany({});
	await Goods.deleteMany({});

	console.log('📦 开始插入新数据...');

	// 1. 插入轮播图
	const banners = await Banner.insertMany([
		{
			imgUrl: 'https://picsum.photos/seed/banner1/1200/400',
			distributionSite: '1',
		},
		{
			imgUrl: 'https://picsum.photos/seed/banner2/1200/400',
			distributionSite: '1',
		},
		{
			imgUrl: 'https://picsum.photos/seed/banner3/1200/400',
			distributionSite: '2',
		}, // 测试分发站点过滤
	]);

	// 2. 插入分类 (先插一级，再插二级)
	const cat1 = await Category.create({
		name: '手机数码',
		subtitle: '最新手机与数码产品',
		picture: 'https://picsum.photos/seed/cat-phone/200/200',
	});
	const cat2 = await Category.create({
		name: '电脑办公',
		subtitle: '电脑及外设装备',
		picture: 'https://picsum.photos/seed/cat-pc/200/200',
	});

	const subCat1_1 = await Category.create({
		name: '手机',
		picture: 'https://picsum.photos/seed/sub-phone/200/200',
		parentId: cat1._id,
	});
	const subCat1_2 = await Category.create({
		name: '手机壳',
		picture: 'https://picsum.photos/seed/sub-case/200/200',
		parentId: cat1._id,
	});
	const subCat2_1 = await Category.create({
		name: '游戏本',
		picture: 'https://picsum.photos/seed/sub-laptop/200/200',
		parentId: cat2._id,
	});
	const subCat2_2 = await Category.create({
		name: '显示器',
		picture: 'https://picsum.photos/seed/sub-monitor/200/200',
		parentId: cat2._id,
	});

	// 3. 插入商品 (包含复杂的 specs 和 skus)
	await Goods.insertMany([
		{
			name: 'Apple iPhone 15 Pro',
			desc: '全新A17 Pro芯片，钛金属设计',
			price: 8999,
			oldPrice: 9999,
			picture: 'https://picsum.photos/seed/iphone/400/400',
			mainPictures: [
				'https://picsum.photos/seed/iphone1/800/800',
				'https://picsum.photos/seed/iphone2/800/800',
			],
			orderNum: 100,
			inventory: 50,
			salesCount: 1200,
			categoryId: subCat1_1._id,
			brand: { name: '苹果' },
			specs: [
				{
					name: '颜色',
					values: [
						{
							name: '原色钛金属',
							picture: 'https://picsum.photos/seed/c1/50/50',
							desc: '闪亮银色',
						},
						{
							name: '蓝色钛金属',
							picture: 'https://picsum.photos/seed/c2/50/50',
							desc: '深海蓝',
						},
					],
				},
				{
					name: '存储',
					values: [{ name: '256GB' }, { name: '512GB' }],
				},
			],
			skus: [
				{
					id: 'sku-iphone-1',
					inventory: 20,
					price: 8999,
					oldPrice: 9999,
					specs: [
						{ name: '颜色', valueName: '原色钛金属' },
						{ name: '存储', valueName: '256GB' },
					],
				},
				{
					id: 'sku-iphone-2',
					inventory: 30,
					price: 9999,
					oldPrice: 10999,
					specs: [
						{ name: '颜色', valueName: '原色钛金属' },
						{ name: '存储', valueName: '512GB' },
					],
				},
			],
			details: {
				pictures: ['https://picsum.photos/seed/detail1/800/1000'],
				properties: [
					{ name: '屏幕尺寸', value: '6.1英寸' },
					{ name: '电池容量', value: '3274mAh' },
				],
			},
		},
		{
			name: '华为 Mate 60 Pro',
			desc: '麒麟芯片回归，卫星通话',
			price: 6999,
			oldPrice: 6999,
			picture: 'https://picsum.photos/seed/mate60/400/400',
			mainPictures: ['https://picsum.photos/seed/mate1/800/800'],
			orderNum: 90,
			inventory: 10,
			salesCount: 800,
			categoryId: subCat1_1._id,
			brand: { name: '华为' },
			specs: [
				{
					name: '颜色',
					values: [{ name: '雅丹黑' }, { name: '白沙银' }],
				},
			],
			skus: [
				{
					id: 'sku-mate-1',
					inventory: 10,
					price: 6999,
					oldPrice: 6999,
					specs: [{ name: '颜色', valueName: '雅丹黑' }],
				},
			],
			details: {
				pictures: ['https://picsum.photos/seed/matedetail/800/1000'],
				properties: [{ name: '系统', value: '鸿蒙OS 4.0' }],
			},
		},
		{
			name: 'iPhone 透明防摔壳',
			desc: '气囊防摔，高透亮面',
			price: 49.9,
			oldPrice: 99,
			picture: 'https://picsum.photos/seed/case1/400/400',
			orderNum: 10,
			inventory: 999,
			salesCount: 5000,
			categoryId: subCat1_2._id,
			brand: { name: '绿联' },
			specs: [
				{
					name: '型号',
					values: [{ name: 'iPhone 15' }, { name: 'iPhone 15 Pro' }],
				},
			],
			skus: [
				{
					id: 'sku-case-1',
					inventory: 500,
					price: 49.9,
					oldPrice: 99,
					specs: [{ name: '型号', valueName: 'iPhone 15' }],
				},
				{
					id: 'sku-case-2',
					inventory: 499,
					price: 49.9,
					oldPrice: 99,
					specs: [{ name: '型号', valueName: 'iPhone 15 Pro' }],
				},
			],
			details: {
				pictures: [],
				properties: [{ name: '材质', value: 'TPU' }],
			},
		},
		{
			name: '联想拯救者 Y9000P',
			desc: '满血i9+4060，电竞屏',
			price: 8999,
			oldPrice: 9999,
			picture: 'https://picsum.photos/seed/lenovo/400/400',
			mainPictures: ['https://picsum.photos/seed/lenovo1/800/800'],
			orderNum: 80,
			inventory: 15,
			salesCount: 600,
			categoryId: subCat2_1._id,
			brand: { name: '联想' },
			specs: [
				{
					name: '配置',
					values: [{ name: 'i9-13900HX / 16G / 1T / 4060' }],
				},
			],
			skus: [
				{
					id: 'sku-lenovo-1',
					inventory: 15,
					price: 8999,
					oldPrice: 9999,
					specs: [
						{
							name: '配置',
							valueName: 'i9-13900HX / 16G / 1T / 4060',
						},
					],
				},
			],
			details: {
				pictures: ['https://picsum.photos/seed/lenovod/800/1000'],
				properties: [{ name: '屏幕', value: '16英寸 2.5K 240Hz' }],
			},
		},
		{
			name: '小米 Redmi 27寸显示器',
			desc: '4K超清，Type-C反向充电',
			price: 1299,
			oldPrice: 1499,
			picture: 'https://picsum.photos/seed/monitor1/400/400',
			mainPictures: ['https://picsum.photos/seed/mon1/800/800'],
			orderNum: 50,
			inventory: 30,
			salesCount: 300,
			categoryId: subCat2_2._id,
			brand: { name: '小米' },
			specs: [{ name: '版本', values: [{ name: '标准版' }] }],
			skus: [
				{
					id: 'sku-mon-1',
					inventory: 30,
					price: 1299,
					oldPrice: 1499,
					specs: [{ name: '版本', valueName: '标准版' }],
				},
			],
			details: {
				pictures: [],
				properties: [{ name: '分辨率', value: '3840x2160' }],
			},
		},
		{
			name: '罗技 G502 游戏鼠标',
			desc: 'Hero传感器，自定义RGB',
			price: 249,
			oldPrice: 349,
			picture: 'https://picsum.photos/seed/mouse1/400/400',
			mainPictures: ['https://picsum.photos/seed/mouse2/800/800'],
			orderNum: 60,
			inventory: 100,
			salesCount: 2000,
			categoryId: subCat2_1._id, // 放在游戏本下面凑数据
			brand: { name: '罗技' },
			specs: [
				{ name: '颜色', values: [{ name: '黑色' }, { name: '白色' }] },
			],
			skus: [
				{
					id: 'sku-mouse-1',
					inventory: 50,
					price: 249,
					oldPrice: 349,
					specs: [{ name: '颜色', valueName: '黑色' }],
				},
				{
					id: 'sku-mouse-2',
					inventory: 50,
					price: 259,
					oldPrice: 359,
					specs: [{ name: '颜色', valueName: '白色' }],
				},
			],
			details: {
				pictures: [],
				properties: [{ name: '连接方式', value: '有线/无线双模' }],
			},
		},
	]);

	console.log('✅ 测试数据插入成功！');
	console.log(`- 插入了 ${banners.length} 条轮播图`);
	console.log(`- 插入了 2 个一级分类，4 个二级分类`);
	console.log(`- 插入了 6 个商品（包含完整的SKU和规格参数）`);

	// 退出进程
	process.exit(0);
};

// 执行并捕获错误
seedData().catch((err) => {
	console.error('❌ 数据初始化失败:', err);
	process.exit(1);
});
