import type { GoodsDataMap } from '../../types.js';

export const rentalGoods: GoodsDataMap = {
	笔记本租赁: [
		{
			name: '轻薄本日常租赁',
			desc: '适合写论文、查资料、看网课，续航持久，携带方便',
			brand: { name: '联想' },
			specs: [
				{
					name: '租期',
					values: [
						{ name: '按天' },
						{ name: '按周' },
						{ name: '按月' },
					],
				},
			],
			skus: [
				{
					id: 'rental_1_1_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 15,
					oldPrice: 25,
					inventory: 20,
				},
				{
					id: 'rental_1_1_2',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 80,
					oldPrice: 105,
					inventory: 15,
				},
				{
					id: 'rental_1_1_3',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 250,
					oldPrice: 450,
					inventory: 10,
				},
			],
		},
		{
			name: '游戏本租赁',
			desc: '高配游戏本，RTX4060显卡，畅玩主流游戏',
			brand: { name: '华硕' },
			specs: [
				{
					name: '租期',
					values: [
						{ name: '按天' },
						{ name: '按周' },
						{ name: '按月' },
					],
				},
			],
			skus: [
				{
					id: 'rental_1_2_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 30,
					oldPrice: 50,
					inventory: 10,
				},
				{
					id: 'rental_1_2_2',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 160,
					oldPrice: 210,
					inventory: 8,
				},
				{
					id: 'rental_1_2_3',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 500,
					oldPrice: 900,
					inventory: 5,
				},
			],
		},
		{
			name: '设计本租赁',
			desc: '专业设计笔记本，高色域屏幕，适合PS、AI等设计软件',
			brand: { name: '苹果' },
			specs: [
				{
					name: '租期',
					values: [
						{ name: '按天' },
						{ name: '按周' },
						{ name: '按月' },
					],
				},
			],
			skus: [
				{
					id: 'rental_1_3_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 25,
					oldPrice: 40,
					inventory: 10,
				},
				{
					id: 'rental_1_3_2',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 130,
					oldPrice: 175,
					inventory: 8,
				},
				{
					id: 'rental_1_3_3',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 400,
					oldPrice: 750,
					inventory: 5,
				},
			],
		},
		{
			name: '编程开发本租赁',
			desc: '大内存高性能，适合代码编译、跑虚拟机等开发需求',
			brand: { name: ' ThinkPad' },
			specs: [
				{ name: '租期', values: [{ name: '按天' }, { name: '按月' }] },
			],
			skus: [
				{
					id: 'rental_1_4_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 20,
					oldPrice: 35,
					inventory: 15,
				},
				{
					id: 'rental_1_4_2',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 350,
					oldPrice: 600,
					inventory: 8,
				},
			],
		},
		{
			name: '短期答辩演示本',
			desc: '适合课程答辩、社团展示等短期使用，预装Office',
			brand: { name: '戴尔' },
			specs: [
				{
					name: '租期',
					values: [
						{ name: '半天' },
						{ name: '一天' },
						{ name: '三天' },
					],
				},
			],
			skus: [
				{
					id: 'rental_1_5_1',
					specs: [{ name: '租期', valueName: '半天' }],
					price: 10,
					oldPrice: 15,
					inventory: 30,
				},
				{
					id: 'rental_1_5_2',
					specs: [{ name: '租期', valueName: '一天' }],
					price: 15,
					oldPrice: 25,
					inventory: 25,
				},
				{
					id: 'rental_1_5_3',
					specs: [{ name: '租期', valueName: '三天' }],
					price: 35,
					oldPrice: 60,
					inventory: 20,
				},
			],
		},
		{
			name: '考研专用本租赁',
			desc: '长期租赁专享价，适合考研看网课、刷题使用',
			brand: { name: '联想' },
			specs: [
				{
					name: '租期',
					values: [
						{ name: '三个月' },
						{ name: '半年' },
						{ name: '一年' },
					],
				},
			],
			skus: [
				{
					id: 'rental_1_6_1',
					specs: [{ name: '租期', valueName: '三个月' }],
					price: 500,
					oldPrice: 750,
					inventory: 15,
				},
				{
					id: 'rental_1_6_2',
					specs: [{ name: '租期', valueName: '半年' }],
					price: 800,
					oldPrice: 1500,
					inventory: 10,
				},
				{
					id: 'rental_1_6_3',
					specs: [{ name: '租期', valueName: '一年' }],
					price: 1200,
					oldPrice: 3000,
					inventory: 5,
				},
			],
		},
		{
			name: '迷你主机租赁',
			desc: '体积小巧，接上显示器即可办公，适合宿舍桌面',
			brand: { name: '零刻' },
			specs: [
				{ name: '租期', values: [{ name: '按天' }, { name: '按月' }] },
			],
			skus: [
				{
					id: 'rental_1_7_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 10,
					oldPrice: 18,
					inventory: 15,
				},
				{
					id: 'rental_1_7_2',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 200,
					oldPrice: 360,
					inventory: 10,
				},
			],
		},
		{
			name: '二手笔记本租赁',
			desc: '二手笔记本低价租赁，功能完好，经济实惠之选',
			brand: { name: '校园二手' },
			specs: [
				{
					name: '租期',
					values: [
						{ name: '按天' },
						{ name: '按周' },
						{ name: '按月' },
					],
				},
			],
			skus: [
				{
					id: 'rental_1_8_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 8,
					oldPrice: 15,
					inventory: 20,
				},
				{
					id: 'rental_1_8_2',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 45,
					oldPrice: 70,
					inventory: 15,
				},
				{
					id: 'rental_1_8_3',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 150,
					oldPrice: 300,
					inventory: 10,
				},
			],
		},
		{
			name: '笔记本+显示器套装',
			desc: '笔记本外接显示器套装，双屏办公效率翻倍',
			brand: { name: 'AOC' },
			specs: [
				{ name: '租期', values: [{ name: '按周' }, { name: '按月' }] },
			],
			skus: [
				{
					id: 'rental_1_9_1',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 60,
					oldPrice: 90,
					inventory: 8,
				},
				{
					id: 'rental_1_9_2',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 200,
					oldPrice: 360,
					inventory: 5,
				},
			],
		},
	],
	相机租赁: [
		{
			name: '入门微单相机租赁',
			desc: '索尼A6400入门微单，轻便易上手，适合拍照入门',
			brand: { name: '索尼' },
			specs: [
				{ name: '租期', values: [{ name: '按天' }, { name: '按周' }] },
			],
			skus: [
				{
					id: 'rental_2_1_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 30,
					oldPrice: 50,
					inventory: 10,
				},
				{
					id: 'rental_2_1_2',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 160,
					oldPrice: 250,
					inventory: 8,
				},
			],
		},
		{
			name: '全画幅单反相机租赁',
			desc: '佳能5D4全画幅单反，画质出色，适合人像风景',
			brand: { name: '佳能' },
			specs: [
				{ name: '租期', values: [{ name: '按天' }, { name: '按周' }] },
			],
			skus: [
				{
					id: 'rental_2_2_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 60,
					oldPrice: 100,
					inventory: 5,
				},
				{
					id: 'rental_2_2_2',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 350,
					oldPrice: 500,
					inventory: 3,
				},
			],
		},
		{
			name: '运动相机租赁',
			desc: 'GoPro运动相机，防水防抖，适合运动、旅行记录',
			brand: { name: 'GoPro' },
			specs: [
				{ name: '租期', values: [{ name: '按天' }, { name: '按周' }] },
			],
			skus: [
				{
					id: 'rental_2_3_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 25,
					oldPrice: 40,
					inventory: 10,
				},
				{
					id: 'rental_2_3_2',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 130,
					oldPrice: 200,
					inventory: 8,
				},
			],
		},
		{
			name: '拍立得相机租赁',
			desc: '富士instax拍立得，毕业季、活动留念必备',
			brand: { name: '富士' },
			specs: [
				{
					name: '套餐',
					values: [
						{ name: '仅相机' },
						{ name: '相机+20张相纸' },
						{ name: '相机+40张相纸' },
					],
				},
			],
			skus: [
				{
					id: 'rental_2_4_1',
					specs: [{ name: '套餐', valueName: '仅相机' }],
					price: 15,
					oldPrice: 25,
					inventory: 15,
				},
				{
					id: 'rental_2_4_2',
					specs: [{ name: '套餐', valueName: '相机+20张相纸' }],
					price: 25,
					oldPrice: 40,
					inventory: 15,
				},
				{
					id: 'rental_2_4_3',
					specs: [{ name: '套餐', valueName: '相机+40张相纸' }],
					price: 35,
					oldPrice: 55,
					inventory: 10,
				},
			],
		},
		{
			name: '航拍无人机租赁',
			desc: '大疆Mini 3无人机，4K高清航拍，新手友好',
			brand: { name: '大疆' },
			specs: [
				{ name: '租期', values: [{ name: '按天' }, { name: '按周' }] },
			],
			skus: [
				{
					id: 'rental_2_5_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 80,
					oldPrice: 120,
					inventory: 5,
				},
				{
					id: 'rental_2_5_2',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 450,
					oldPrice: 700,
					inventory: 3,
				},
			],
		},
		{
			name: '相机稳定器租赁',
			desc: '大疆RS3稳定器，拍视频不抖动，Vlog必备',
			brand: { name: '大疆' },
			specs: [
				{ name: '租期', values: [{ name: '按天' }, { name: '按周' }] },
			],
			skus: [
				{
					id: 'rental_2_6_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 20,
					oldPrice: 35,
					inventory: 8,
				},
				{
					id: 'rental_2_6_2',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 100,
					oldPrice: 175,
					inventory: 5,
				},
			],
		},
		{
			name: '三脚架租赁',
			desc: '铝合金三脚架，稳定性好，适合自拍、长曝光',
			brand: { name: '曼富图' },
			specs: [
				{
					name: '类型',
					values: [{ name: '普通三脚架' }, { name: '专业三脚架' }],
				},
			],
			skus: [
				{
					id: 'rental_2_7_1',
					specs: [{ name: '类型', valueName: '普通三脚架' }],
					price: 10,
					oldPrice: 18,
					inventory: 15,
				},
				{
					id: 'rental_2_7_2',
					specs: [{ name: '类型', valueName: '专业三脚架' }],
					price: 20,
					oldPrice: 35,
					inventory: 8,
				},
			],
		},
		{
			name: '摄影灯套装租赁',
			desc: '双灯补光套装，含柔光箱，适合人像、产品拍摄',
			brand: { name: '神牛' },
			specs: [
				{
					name: '套餐',
					values: [{ name: '单灯' }, { name: '双灯套装' }],
				},
			],
			skus: [
				{
					id: 'rental_2_8_1',
					specs: [{ name: '套餐', valueName: '单灯' }],
					price: 15,
					oldPrice: 25,
					inventory: 10,
				},
				{
					id: 'rental_2_8_2',
					specs: [{ name: '套餐', valueName: '双灯套装' }],
					price: 25,
					oldPrice: 45,
					inventory: 8,
				},
			],
		},
		{
			name: '镜头租赁',
			desc: '多款镜头可选，人像、广角、长焦满足不同需求',
			brand: { name: '索尼' },
			specs: [
				{
					name: '焦段',
					values: [
						{ name: '50mm人像' },
						{ name: '16-35mm广角' },
						{ name: '70-200mm长焦' },
					],
				},
			],
			skus: [
				{
					id: 'rental_2_9_1',
					specs: [{ name: '焦段', valueName: '50mm人像' }],
					price: 20,
					oldPrice: 35,
					inventory: 8,
				},
				{
					id: 'rental_2_9_2',
					specs: [{ name: '焦段', valueName: '16-35mm广角' }],
					price: 30,
					oldPrice: 50,
					inventory: 5,
				},
				{
					id: 'rental_2_9_3',
					specs: [{ name: '焦段', valueName: '70-200mm长焦' }],
					price: 50,
					oldPrice: 80,
					inventory: 3,
				},
			],
		},
	],
	平板租赁: [
		{
			name: 'iPad基础款租赁',
			desc: 'iPad 10基础款，看网课、记笔记够用就好',
			brand: { name: '苹果' },
			specs: [
				{
					name: '租期',
					values: [
						{ name: '按天' },
						{ name: '按周' },
						{ name: '按月' },
					],
				},
			],
			skus: [
				{
					id: 'rental_3_1_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 10,
					oldPrice: 18,
					inventory: 20,
				},
				{
					id: 'rental_3_1_2',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 55,
					oldPrice: 85,
					inventory: 15,
				},
				{
					id: 'rental_3_1_3',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 180,
					oldPrice: 300,
					inventory: 10,
				},
			],
		},
		{
			name: 'iPad Air租赁',
			desc: 'iPad Air 5，M1芯片性能强劲，画画绘图更流畅',
			brand: { name: '苹果' },
			specs: [
				{
					name: '租期',
					values: [
						{ name: '按天' },
						{ name: '按周' },
						{ name: '按月' },
					],
				},
			],
			skus: [
				{
					id: 'rental_3_2_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 15,
					oldPrice: 25,
					inventory: 15,
				},
				{
					id: 'rental_3_2_2',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 80,
					oldPrice: 125,
					inventory: 10,
				},
				{
					id: 'rental_3_2_3',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 250,
					oldPrice: 450,
					inventory: 8,
				},
			],
		},
		{
			name: 'iPad Pro租赁',
			desc: 'iPad Pro 12.9寸，专业级屏幕，适合设计剪辑',
			brand: { name: '苹果' },
			specs: [
				{
					name: '租期',
					values: [
						{ name: '按天' },
						{ name: '按周' },
						{ name: '按月' },
					],
				},
			],
			skus: [
				{
					id: 'rental_3_3_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 25,
					oldPrice: 40,
					inventory: 8,
				},
				{
					id: 'rental_3_3_2',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 130,
					oldPrice: 200,
					inventory: 6,
				},
				{
					id: 'rental_3_3_3',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 400,
					oldPrice: 750,
					inventory: 5,
				},
			],
		},
		{
			name: '安卓平板租赁',
			desc: '华为/小米安卓平板，性价比之选，看剧学习两不误',
			brand: { name: '华为' },
			specs: [
				{ name: '租期', values: [{ name: '按天' }, { name: '按月' }] },
			],
			skus: [
				{
					id: 'rental_3_4_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 8,
					oldPrice: 15,
					inventory: 15,
				},
				{
					id: 'rental_3_4_2',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 120,
					oldPrice: 225,
					inventory: 10,
				},
			],
		},
		{
			name: '数位板租赁',
			desc: 'Wacom数位板，专业绘画工具，适合美术、设计专业',
			brand: { name: 'Wacom' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '小号(CTL-672)' },
						{ name: '中号(CTH-680)' },
					],
				},
			],
			skus: [
				{
					id: 'rental_3_5_1',
					specs: [{ name: '尺寸', valueName: '小号(CTL-672)' }],
					price: 10,
					oldPrice: 18,
					inventory: 10,
				},
				{
					id: 'rental_3_5_2',
					specs: [{ name: '尺寸', valueName: '中号(CTH-680)' }],
					price: 15,
					oldPrice: 25,
					inventory: 8,
				},
			],
		},
		{
			name: '电子书阅读器租赁',
			desc: 'Kindle电子墨水屏，护眼阅读，考研阅读利器',
			brand: { name: '亚马逊' },
			specs: [
				{
					name: '租期',
					values: [{ name: '按月' }, { name: '按学期' }],
				},
			],
			skus: [
				{
					id: 'rental_3_6_1',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 20,
					oldPrice: 35,
					inventory: 15,
				},
				{
					id: 'rental_3_6_2',
					specs: [{ name: '租期', valueName: '按学期' }],
					price: 80,
					oldPrice: 140,
					inventory: 10,
				},
			],
		},
		{
			name: 'iPad+手写笔套装',
			desc: 'iPad搭配Apple Pencil，笔记、绘图一步到位',
			brand: { name: '苹果' },
			specs: [
				{ name: '租期', values: [{ name: '按周' }, { name: '按月' }] },
			],
			skus: [
				{
					id: 'rental_3_7_1',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 90,
					oldPrice: 140,
					inventory: 10,
				},
				{
					id: 'rental_3_7_2',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 300,
					oldPrice: 560,
					inventory: 8,
				},
			],
		},
		{
			name: '二手平板租赁',
			desc: '二手iPad低价租赁，功能完好，经济实惠',
			brand: { name: '校园二手' },
			specs: [
				{ name: '租期', values: [{ name: '按天' }, { name: '按月' }] },
			],
			skus: [
				{
					id: 'rental_3_8_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 6,
					oldPrice: 12,
					inventory: 20,
				},
				{
					id: 'rental_3_8_2',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 100,
					oldPrice: 200,
					inventory: 15,
				},
			],
		},
		{
			name: '平板键盘套装租赁',
			desc: '平板搭配蓝牙键盘，轻便办公方案',
			brand: { name: '苹果' },
			specs: [
				{ name: '租期', values: [{ name: '按周' }, { name: '按月' }] },
			],
			skus: [
				{
					id: 'rental_3_9_1',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 80,
					oldPrice: 120,
					inventory: 8,
				},
				{
					id: 'rental_3_9_2',
					specs: [{ name: '租期', valueName: '按月' }],
					price: 280,
					oldPrice: 480,
					inventory: 5,
				},
			],
		},
	],
	配件租赁: [
		{
			name: '移动硬盘租赁',
			desc: '1TB/2TB移动硬盘，毕业设计拷资料、备份用',
			brand: { name: '西部数据' },
			specs: [
				{ name: '容量', values: [{ name: '1TB' }, { name: '2TB' }] },
			],
			skus: [
				{
					id: 'rental_4_1_1',
					specs: [{ name: '容量', valueName: '1TB' }],
					price: 5,
					oldPrice: 10,
					inventory: 30,
				},
				{
					id: 'rental_4_1_2',
					specs: [{ name: '容量', valueName: '2TB' }],
					price: 8,
					oldPrice: 15,
					inventory: 20,
				},
			],
		},
		{
			name: 'U盘大容量租赁',
			desc: '64G/128G高速U盘，临时传文件用',
			brand: { name: '闪迪' },
			specs: [
				{ name: '容量', values: [{ name: '64GB' }, { name: '128GB' }] },
			],
			skus: [
				{
					id: 'rental_4_2_1',
					specs: [{ name: '容量', valueName: '64GB' }],
					price: 2,
					oldPrice: 5,
					inventory: 50,
				},
				{
					id: 'rental_4_2_2',
					specs: [{ name: '容量', valueName: '128GB' }],
					price: 3,
					oldPrice: 8,
					inventory: 30,
				},
			],
		},
		{
			name: '蓝牙键盘租赁',
			desc: '轻薄蓝牙键盘，平板、手机都能用，打字效率翻倍',
			brand: { name: '罗技' },
			specs: [
				{
					name: '类型',
					values: [{ name: '薄膜键盘' }, { name: '机械键盘' }],
				},
			],
			skus: [
				{
					id: 'rental_4_3_1',
					specs: [{ name: '类型', valueName: '薄膜键盘' }],
					price: 3,
					oldPrice: 6,
					inventory: 20,
				},
				{
					id: 'rental_4_3_2',
					specs: [{ name: '类型', valueName: '机械键盘' }],
					price: 8,
					oldPrice: 15,
					inventory: 10,
				},
			],
		},
		{
			name: '鼠标租赁',
			desc: '无线鼠标，办公学习更方便',
			brand: { name: '罗技' },
			specs: [
				{
					name: '类型',
					values: [{ name: '普通鼠标' }, { name: '静音鼠标' }],
				},
			],
			skus: [
				{
					id: 'rental_4_4_1',
					specs: [{ name: '类型', valueName: '普通鼠标' }],
					price: 2,
					oldPrice: 4,
					inventory: 30,
				},
				{
					id: 'rental_4_4_2',
					specs: [{ name: '类型', valueName: '静音鼠标' }],
					price: 3,
					oldPrice: 6,
					inventory: 20,
				},
			],
		},
		{
			name: '投影仪租赁',
			desc: '便携投影仪，宿舍看电影、小组展示用',
			brand: { name: '极米' },
			specs: [
				{ name: '租期', values: [{ name: '按天' }, { name: '按周' }] },
			],
			skus: [
				{
					id: 'rental_4_5_1',
					specs: [{ name: '租期', valueName: '按天' }],
					price: 20,
					oldPrice: 35,
					inventory: 8,
				},
				{
					id: 'rental_4_5_2',
					specs: [{ name: '租期', valueName: '按周' }],
					price: 100,
					oldPrice: 175,
					inventory: 5,
				},
			],
		},
		{
			name: '扩展坞租赁',
			desc: '多接口扩展坞，解决笔记本接口不足问题',
			brand: { name: '绿联' },
			specs: [
				{ name: '接口数', values: [{ name: '6口' }, { name: '9口' }] },
			],
			skus: [
				{
					id: 'rental_4_6_1',
					specs: [{ name: '接口数', valueName: '6口' }],
					price: 3,
					oldPrice: 6,
					inventory: 20,
				},
				{
					id: 'rental_4_6_2',
					specs: [{ name: '接口数', valueName: '9口' }],
					price: 5,
					oldPrice: 10,
					inventory: 15,
				},
			],
		},
		{
			name: '充电宝租赁',
			desc: '20000mAh大容量充电宝，外出、考试必备',
			brand: { name: '小米' },
			specs: [
				{
					name: '容量',
					values: [{ name: '10000mAh' }, { name: '20000mAh' }],
				},
			],
			skus: [
				{
					id: 'rental_4_7_1',
					specs: [{ name: '容量', valueName: '10000mAh' }],
					price: 2,
					oldPrice: 4,
					inventory: 50,
				},
				{
					id: 'rental_4_7_2',
					specs: [{ name: '容量', valueName: '20000mAh' }],
					price: 3,
					oldPrice: 6,
					inventory: 30,
				},
			],
		},
		{
			name: '蓝牙耳机租赁',
			desc: '降噪蓝牙耳机，图书馆自习、网课听讲好伴侣',
			brand: { name: '索尼' },
			specs: [
				{
					name: '类型',
					values: [{ name: '入耳式' }, { name: '头戴式' }],
				},
			],
			skus: [
				{
					id: 'rental_4_8_1',
					specs: [{ name: '类型', valueName: '入耳式' }],
					price: 5,
					oldPrice: 10,
					inventory: 20,
				},
				{
					id: 'rental_4_8_2',
					specs: [{ name: '类型', valueName: '头戴式' }],
					price: 8,
					oldPrice: 15,
					inventory: 10,
				},
			],
		},
		{
			name: '蓝牙音箱租赁',
			desc: '便携蓝牙音箱，宿舍聚会、户外活动用',
			brand: { name: 'JBL' },
			specs: [
				{
					name: '大小',
					values: [{ name: '迷你款' }, { name: '标准款' }],
				},
			],
			skus: [
				{
					id: 'rental_4_9_1',
					specs: [{ name: '大小', valueName: '迷你款' }],
					price: 3,
					oldPrice: 6,
					inventory: 15,
				},
				{
					id: 'rental_4_9_2',
					specs: [{ name: '大小', valueName: '标准款' }],
					price: 6,
					oldPrice: 12,
					inventory: 10,
				},
			],
		},
	],
};
