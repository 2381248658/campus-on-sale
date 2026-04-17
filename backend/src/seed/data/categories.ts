import type { CategoryTreeItem } from '../types.js';

export const categoryTree: CategoryTreeItem[] = [
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
