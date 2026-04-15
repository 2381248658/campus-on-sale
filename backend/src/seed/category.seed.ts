// src/seed/category.seed.ts
import { Category } from '../models/Category.js';

export interface SubCategoryInfo {
	id: any;
	topName: string;
	subName: string;
}

export async function seedCategory() {
	console.log('📂 创建分类体系 (包含导航栏推荐商品)...');

	const categoryTree = [
		{
			name: '宿舍百货',
			subtitle: '生活必备',
			subs: [
				'床上用品',
				'洗漱用品',
				'收纳整理',
				'清洁用品',
				'文具用品',
				'装饰用品',
				'生活用品',
			],
		},
		{
			name: '校园零食',
			subtitle: '美味享不停',
			subs: [
				'膨化食品',
				'饼干糕点',
				'饮料饮品',
				'坚果炒货',
				'方便速食',
				'糖果巧克力',
				'水果零食',
			],
		},
		{
			name: '二手教材',
			subtitle: '学习好帮手',
			subs: [
				'专业课教材',
				'公共课教材',
				'辅导资料',
				'考试真题',
				'参考书籍',
				'外文原版',
				'工具书',
			],
		},
		{
			name: '代取服务',
			subtitle: '懒人福音',
			subs: ['快递代取', '外卖代买', '打印代送', '文件代交'],
		},
		{
			name: '数码租赁',
			subtitle: '科技生活',
			subs: ['笔记本租赁', '相机租赁', '平板租赁', '配件租赁'],
		},
		{
			name: '学长推荐',
			subtitle: '值得信赖',
			subs: ['学习好物', '生活神器', '备考干货', '校园攻略'],
		},
		{
			name: '电子产品',
			subtitle: '最新科技',
			subs: ['手机配件', '电脑外设', '智能穿戴', '影音设备'],
		},
	];

	const allSubCategories: SubCategoryInfo[] = [];
	let globalGoodsIndex = 0;

	for (const topCat of categoryTree) {
		const mockGoodsForHover = Array.from({ length: 9 }, () => {
			globalGoodsIndex++;
			return {
				id: `mock_nav_goods_${globalGoodsIndex}`,
				name: `${topCat.name}热门推荐好物 ${globalGoodsIndex}号`,
				desc: '学长都在买，性价比超高，速来围观！',
				price: Number((Math.random() * 200 + 10).toFixed(2)),
				picture: `https://picsum.photos/seed/nav_goods_${globalGoodsIndex}/200/200`,
			};
		});

		const topCategory = await Category.create({
			name: topCat.name,
			subtitle: topCat.subtitle,
			picture: `https://picsum.photos/seed/cat_${topCat.name}/150/150`,
			goods: mockGoodsForHover,
		});

		for (const subName of topCat.subs) {
			const subCategory = await Category.create({
				name: subName,
				picture: `https://picsum.photos/seed/sub_${subName}/150/150`,
				parentId: topCategory._id,
			});

			// 🔥🔥🔥 核心修改在这里 🔥🔥🔥
			// 把 subCategory._id 换成 topCategory._id
			// 这样商品生成时，就会全部挂到一级分类下
			allSubCategories.push({
				id: topCategory._id,
				topName: topCat.name,
				subName: subName, // subName 保留，用于匹配 goods.seed.ts 里的真实模板
			});
		}
	}

	return {
		topCount: categoryTree.length,
		subCategories: allSubCategories,
	};
}
