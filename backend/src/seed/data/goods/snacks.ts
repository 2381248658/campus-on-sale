import type { GoodsDataMap } from '../../types.js';

export const snacksGoods: GoodsDataMap = {
	膨化食品: [
		{
			name: '乐事薯片经典原味',
			desc: '经典原味，香脆可口，宿舍追剧必备',
			brand: { name: '乐事' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '原味' },
						{ name: '番茄味' },
						{ name: '黄瓜味' },
					],
				},
			],
			skus: [
				{
					id: 'snack_1_1_1',
					specs: [{ name: '口味', valueName: '原味' }],
					price: 7.5,
					oldPrice: 12.0,
					inventory: 200,
				},
				{
					id: 'snack_1_1_2',
					specs: [{ name: '口味', valueName: '番茄味' }],
					price: 7.5,
					oldPrice: 12.0,
					inventory: 200,
				},
				{
					id: 'snack_1_1_3',
					specs: [{ name: '口味', valueName: '黄瓜味' }],
					price: 7.5,
					oldPrice: 12.0,
					inventory: 180,
				},
			],
		},
		{
			name: '品客薯片桶装',
			desc: '超大容量桶装，加厚薯片，耐吃不脏手',
			brand: { name: '品客' },
			specs: [
				{
					name: '口味',
					values: [{ name: '原味' }, { name: '芝士味' }],
				},
			],
			skus: [
				{
					id: 'snack_1_2_1',
					specs: [{ name: '口味', valueName: '原味' }],
					price: 15.9,
					oldPrice: 24.0,
					inventory: 150,
				},
				{
					id: 'snack_1_2_2',
					specs: [{ name: '口味', valueName: '芝士味' }],
					price: 15.9,
					oldPrice: 24.0,
					inventory: 150,
				},
			],
		},
		{
			name: '多力多滋玉米片',
			desc: '香浓芝士裹满玉米片，一口酥脆',
			brand: { name: '多力多滋' },
			specs: [
				{
					name: '口味',
					values: [{ name: '玉米味' }, { name: '披萨味' }],
				},
			],
			skus: [
				{
					id: 'snack_1_3_1',
					specs: [{ name: '口味', valueName: '玉米味' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 180,
				},
				{
					id: 'snack_1_3_2',
					specs: [{ name: '口味', valueName: '披萨味' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 160,
				},
			],
		},
		{
			name: '奥利奥夹心脆',
			desc: '饼干与巧克力绝妙搭配，扭一扭泡一泡',
			brand: { name: '奥利奥' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '原味' },
						{ name: '草莓味' },
						{ name: '抹茶味' },
					],
				},
			],
			skus: [
				{
					id: 'snack_1_4_1',
					specs: [{ name: '口味', valueName: '原味' }],
					price: 8.8,
					oldPrice: 13.5,
					inventory: 220,
				},
				{
					id: 'snack_1_4_2',
					specs: [{ name: '口味', valueName: '草莓味' }],
					price: 8.8,
					oldPrice: 13.5,
					inventory: 200,
				},
				{
					id: 'snack_1_4_3',
					specs: [{ name: '口味', valueName: '抹茶味' }],
					price: 9.5,
					oldPrice: 14.0,
					inventory: 180,
				},
			],
		},
		{
			name: '旺旺仙贝',
			desc: '严选好米，香酥美味，童年回忆零食',
			brand: { name: '旺旺' },
			specs: [
				{
					name: '包装',
					values: [{ name: '单包' }, { name: '5包组合' }],
				},
			],
			skus: [
				{
					id: 'snack_1_5_1',
					specs: [{ name: '包装', valueName: '单包' }],
					price: 5.5,
					oldPrice: 9.0,
					inventory: 250,
				},
				{
					id: 'snack_1_5_2',
					specs: [{ name: '包装', valueName: '5包组合' }],
					price: 22.9,
					oldPrice: 40.0,
					inventory: 120,
				},
			],
		},
		{
			name: '盼盼法式小面包',
			desc: '松软可口，蛋香浓郁，早餐休闲皆可',
			brand: { name: '盼盼' },
			specs: [
				{
					name: '口味',
					values: [{ name: '原味' }, { name: '蛋黄味' }],
				},
			],
			skus: [
				{
					id: 'snack_1_6_1',
					specs: [{ name: '口味', valueName: '原味' }],
					price: 12.9,
					oldPrice: 19.9,
					inventory: 160,
				},
				{
					id: 'snack_1_6_2',
					specs: [{ name: '口味', valueName: '蛋黄味' }],
					price: 12.9,
					oldPrice: 19.9,
					inventory: 150,
				},
			],
		},
		{
			name: '好丽友薯片',
			desc: '韩国原装进口，独特弧形设计，口感轻盈',
			brand: { name: '好丽友' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '披萨味' },
						{ name: '烧烤味' },
						{ name: '香辣味' },
					],
				},
			],
			skus: [
				{
					id: 'snack_1_7_1',
					specs: [{ name: '口味', valueName: '披萨味' }],
					price: 11.9,
					oldPrice: 18.0,
					inventory: 140,
				},
				{
					id: 'snack_1_7_2',
					specs: [{ name: '口味', valueName: '烧烤味' }],
					price: 11.9,
					oldPrice: 18.0,
					inventory: 130,
				},
				{
					id: 'snack_1_7_3',
					specs: [{ name: '口味', valueName: '香辣味' }],
					price: 11.9,
					oldPrice: 18.0,
					inventory: 130,
				},
			],
		},
		{
			name: '卫龙魔芋爽',
			desc: 'Q弹爽滑，魔芋低卡解馋，好吃不怕胖',
			brand: { name: '卫龙' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '香辣味' },
						{ name: '麻辣味' },
						{ name: '酸辣味' },
					],
				},
			],
			skus: [
				{
					id: 'snack_1_8_1',
					specs: [{ name: '口味', valueName: '香辣味' }],
					price: 15.9,
					oldPrice: 25.0,
					inventory: 200,
				},
				{
					id: 'snack_1_8_2',
					specs: [{ name: '口味', valueName: '麻辣味' }],
					price: 15.9,
					oldPrice: 25.0,
					inventory: 180,
				},
				{
					id: 'snack_1_8_3',
					specs: [{ name: '口味', valueName: '酸辣味' }],
					price: 15.9,
					oldPrice: 25.0,
					inventory: 190,
				},
			],
		},
		{
			name: '艾比利薯片',
			desc: '波浪形切面，更好承托调料，嘎嘣脆',
			brand: { name: '艾比利' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '烧烤' },
						{ name: '番茄' },
						{ name: '原味' },
						{ name: '香辣' },
					],
				},
			],
			skus: [
				{
					id: 'snack_1_9_1',
					specs: [{ name: '口味', valueName: '烧烤' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 170,
				},
				{
					id: 'snack_1_9_2',
					specs: [{ name: '口味', valueName: '番茄' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 160,
				},
				{
					id: 'snack_1_9_3',
					specs: [{ name: '口味', valueName: '原味' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 160,
				},
				{
					id: 'snack_1_9_4',
					specs: [{ name: '口味', valueName: '香辣' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 150,
				},
			],
		},
	],
	饼干糕点: [
		{
			name: '奥利奥原味夹心饼干',
			desc: '扭一扭，舔一舔，泡一泡，经典吃法',
			brand: { name: '奥利奥' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '原味' },
						{ name: '草莓味' },
						{ name: '抹茶味' },
					],
				},
			],
			skus: [
				{
					id: 'snack_2_1_1',
					specs: [{ name: '口味', valueName: '原味' }],
					price: 9.9,
					oldPrice: 14.9,
					inventory: 200,
				},
				{
					id: 'snack_2_1_2',
					specs: [{ name: '口味', valueName: '草莓味' }],
					price: 9.9,
					oldPrice: 14.9,
					inventory: 180,
				},
				{
					id: 'snack_2_1_3',
					specs: [{ name: '口味', valueName: '抹茶味' }],
					price: 10.5,
					oldPrice: 15.9,
					inventory: 170,
				},
			],
		},
		{
			name: '闲趣薄脆饼干',
			desc: '轻盈薄脆，麦香四溢，下午茶好伴侣',
			brand: { name: '闲趣' },
			specs: [
				{
					name: '包装',
					values: [{ name: '散装称重' }, { name: '独立小包' }],
				},
			],
			skus: [
				{
					id: 'snack_2_2_1',
					specs: [{ name: '包装', valueName: '散装称重' }],
					price: 6.5,
					oldPrice: 10.0,
					inventory: 150,
				},
				{
					id: 'snack_2_2_2',
					specs: [{ name: '包装', valueName: '独立小包' }],
					price: 12.9,
					oldPrice: 19.9,
					inventory: 140,
				},
			],
		},
		{
			name: '太平梳打饼干',
			desc: '全麦发酵，轻盈不油腻，健康小饿随时吃',
			brand: { name: '太平' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '葱香' },
						{ name: '原味' },
						{ name: '海苔' },
					],
				},
			],
			skus: [
				{
					id: 'snack_2_3_1',
					specs: [{ name: '口味', valueName: '葱香' }],
					price: 10.9,
					oldPrice: 16.5,
					inventory: 160,
				},
				{
					id: 'snack_2_3_2',
					specs: [{ name: '口味', valueName: '原味' }],
					price: 10.9,
					oldPrice: 16.5,
					inventory: 150,
				},
				{
					id: 'snack_2_3_3',
					specs: [{ name: '口味', valueName: '海苔' }],
					price: 11.5,
					oldPrice: 17.5,
					inventory: 140,
				},
			],
		},
		{
			name: '达利园法式软面包',
			desc: '松软细腻，入口即化，营养早餐之选',
			brand: { name: '达利园' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '原味' },
						{ name: '巧克力味' },
						{ name: '柠檬味' },
					],
				},
			],
			skus: [
				{
					id: 'snack_2_4_1',
					specs: [{ name: '口味', valueName: '原味' }],
					price: 14.9,
					oldPrice: 22.9,
					inventory: 180,
				},
				{
					id: 'snack_2_4_2',
					specs: [{ name: '口味', valueName: '巧克力味' }],
					price: 14.9,
					oldPrice: 22.9,
					inventory: 170,
				},
				{
					id: 'snack_2_4_3',
					specs: [{ name: '口味', valueName: '柠檬味' }],
					price: 14.9,
					oldPrice: 22.9,
					inventory: 160,
				},
			],
		},
		{
			name: '盼盼麦香鸡味块',
			desc: '真实鸡肉含量，外酥里嫩，解馋神器',
			brand: { name: '盼盼' },
			specs: [
				{
					name: '包装',
					values: [{ name: '小包装' }, { name: '大包装' }],
				},
			],
			skus: [
				{
					id: 'snack_2_5_1',
					specs: [{ name: '包装', valueName: '小包装' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 190,
				},
				{
					id: 'snack_2_5_2',
					specs: [{ name: '包装', valueName: '大包装' }],
					price: 18.9,
					oldPrice: 29.0,
					inventory: 130,
				},
			],
		},
		{
			name: '旺旺雪饼',
			desc: '雪白饼皮夹心奶油，香甜酥脆',
			brand: { name: '旺旺' },
			specs: [
				{
					name: '规格',
					values: [{ name: '单包' }, { name: '家庭装' }],
				},
			],
			skus: [
				{
					id: 'snack_2_6_1',
					specs: [{ name: '规格', valueName: '单包' }],
					price: 6.9,
					oldPrice: 10.0,
					inventory: 220,
				},
				{
					id: 'snack_2_6_2',
					specs: [{ name: '规格', valueName: '家庭装' }],
					price: 24.9,
					oldPrice: 39.0,
					inventory: 110,
				},
			],
		},
		{
			name: '趣多多曲奇饼干',
			desc: '饱满巧克力豆，满口香浓，停不下来',
			brand: { name: '趣多多' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '黄油' },
						{ name: '巧克力' },
						{ name: '夏威夷果' },
					],
				},
			],
			skus: [
				{
					id: 'snack_2_7_1',
					specs: [{ name: '口味', valueName: '黄油' }],
					price: 12.9,
					oldPrice: 19.9,
					inventory: 150,
				},
				{
					id: 'snack_2_7_2',
					specs: [{ name: '口味', valueName: '巧克力' }],
					price: 13.9,
					oldPrice: 21.0,
					inventory: 140,
				},
				{
					id: 'snack_2_7_3',
					specs: [{ name: '口味', valueName: '夏威夷果' }],
					price: 15.9,
					oldPrice: 24.0,
					inventory: 120,
				},
			],
		},
		{
			name: '嘉士利芝士饼干',
			desc: '浓郁芝士夹心，咸香交融，越吃越有味',
			brand: { name: '嘉士利' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '蔬菜' },
						{ name: '芝士' },
						{ name: '红枣' },
					],
				},
			],
			skus: [
				{
					id: 'snack_2_8_1',
					specs: [{ name: '口味', valueName: '蔬菜' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 160,
				},
				{
					id: 'snack_2_8_2',
					specs: [{ name: '口味', valueName: '芝士' }],
					price: 10.9,
					oldPrice: 16.5,
					inventory: 150,
				},
				{
					id: 'snack_2_8_3',
					specs: [{ name: '口味', valueName: '红枣' }],
					price: 10.9,
					oldPrice: 16.5,
					inventory: 150,
				},
			],
		},
		{
			name: '三只松鼠小麻花',
			desc: '传统工艺，酥脆香甜，不粘牙',
			brand: { name: '三只松鼠' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '甜味' },
						{ name: '麻辣味' },
						{ name: '黑糖味' },
						{ name: '海苔味' },
					],
				},
			],
			skus: [
				{
					id: 'snack_2_9_1',
					specs: [{ name: '口味', valueName: '甜味' }],
					price: 12.9,
					oldPrice: 19.9,
					inventory: 130,
				},
				{
					id: 'snack_2_9_2',
					specs: [{ name: '口味', valueName: '麻辣味' }],
					price: 12.9,
					oldPrice: 19.9,
					inventory: 120,
				},
				{
					id: 'snack_2_9_3',
					specs: [{ name: '口味', valueName: '黑糖味' }],
					price: 12.9,
					oldPrice: 19.9,
					inventory: 120,
				},
				{
					id: 'snack_2_9_4',
					specs: [{ name: '口味', valueName: '海苔味' }],
					price: 12.9,
					oldPrice: 19.9,
					inventory: 110,
				},
			],
		},
	],
	饮料饮品: [
		{
			name: '可口可乐经典罐装',
			desc: '快乐肥宅水，气泡十足，冰镇更爽',
			brand: { name: '可口可乐' },
			specs: [
				{
					name: '规格',
					values: [{ name: '330ml罐装' }, { name: '2L瓶装' }],
				},
			],
			skus: [
				{
					id: 'snack_3_1_1',
					specs: [{ name: '规格', valueName: '330ml罐装' }],
					price: 3.5,
					oldPrice: 5.0,
					inventory: 300,
				},
				{
					id: 'snack_3_1_2',
					specs: [{ name: '规格', valueName: '2L瓶装' }],
					price: 6.9,
					oldPrice: 10.0,
					inventory: 200,
				},
			],
		},
		{
			name: '农夫山泉饮用天然水',
			desc: '我们不生产水，我们只是大自然的搬运工',
			brand: { name: '农夫山泉' },
			specs: [
				{
					name: '规格',
					values: [{ name: '550ml' }, { name: '2L' }, { name: '5L' }],
				},
			],
			skus: [
				{
					id: 'snack_3_2_1',
					specs: [{ name: '规格', valueName: '550ml' }],
					price: 2.0,
					oldPrice: 3.0,
					inventory: 400,
				},
				{
					id: 'snack_3_2_2',
					specs: [{ name: '规格', valueName: '2L' }],
					price: 5.0,
					oldPrice: 8.0,
					inventory: 250,
				},
				{
					id: 'snack_3_2_3',
					specs: [{ name: '规格', valueName: '5L' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 150,
				},
			],
		},
		{
			name: '元气森林白桃气泡水',
			desc: '0糖0脂0卡，白桃风味，清爽解腻',
			brand: { name: '元气森林' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '白桃' },
						{ name: '卡曼橘' },
						{ name: '夏黑葡萄' },
					],
				},
			],
			skus: [
				{
					id: 'snack_3_3_1',
					specs: [{ name: '口味', valueName: '白桃' }],
					price: 5.5,
					oldPrice: 8.0,
					inventory: 200,
				},
				{
					id: 'snack_3_3_2',
					specs: [{ name: '口味', valueName: '卡曼橘' }],
					price: 5.5,
					oldPrice: 8.0,
					inventory: 180,
				},
				{
					id: 'snack_3_3_3',
					specs: [{ name: '口味', valueName: '夏黑葡萄' }],
					price: 5.5,
					oldPrice: 8.0,
					inventory: 180,
				},
			],
		},
		{
			name: '东方树叶无糖茶饮料',
			desc: '原叶萃取，0糖0卡，国风茶饮',
			brand: { name: '农夫山泉' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '乌龙茶' },
						{ name: '绿茶' },
						{ name: '红茶' },
						{ name: '茉莉花茶' },
					],
				},
			],
			skus: [
				{
					id: 'snack_3_4_1',
					specs: [{ name: '口味', valueName: '乌龙茶' }],
					price: 5.0,
					oldPrice: 7.5,
					inventory: 220,
				},
				{
					id: 'snack_3_4_2',
					specs: [{ name: '口味', valueName: '绿茶' }],
					price: 5.0,
					oldPrice: 7.5,
					inventory: 210,
				},
				{
					id: 'snack_3_4_3',
					specs: [{ name: '口味', valueName: '红茶' }],
					price: 5.0,
					oldPrice: 7.5,
					inventory: 210,
				},
				{
					id: 'snack_3_4_4',
					specs: [{ name: '口味', valueName: '茉莉花茶' }],
					price: 5.0,
					oldPrice: 7.5,
					inventory: 200,
				},
			],
		},
		{
			name: '统一冰红茶',
			desc: '冰力十足，痛快解渴，青春的味道',
			brand: { name: '统一' },
			specs: [
				{ name: '规格', values: [{ name: '500ml' }, { name: '1.5L' }] },
			],
			skus: [
				{
					id: 'snack_3_5_1',
					specs: [{ name: '规格', valueName: '500ml' }],
					price: 3.5,
					oldPrice: 5.0,
					inventory: 280,
				},
				{
					id: 'snack_3_5_2',
					specs: [{ name: '规格', valueName: '1.5L' }],
					price: 6.0,
					oldPrice: 9.0,
					inventory: 180,
				},
			],
		},
		{
			name: '王老吉凉茶',
			desc: '怕上火喝王老吉，草本植物饮料',
			brand: { name: '王老吉' },
			specs: [
				{
					name: '规格',
					values: [{ name: '310ml罐装' }, { name: '500ml瓶装' }],
				},
			],
			skus: [
				{
					id: 'snack_3_6_1',
					specs: [{ name: '规格', valueName: '310ml罐装' }],
					price: 3.5,
					oldPrice: 5.5,
					inventory: 250,
				},
				{
					id: 'snack_3_6_2',
					specs: [{ name: '规格', valueName: '500ml瓶装' }],
					price: 5.0,
					oldPrice: 8.0,
					inventory: 200,
				},
			],
		},
		{
			name: '每日鲜语鲜牛奶',
			desc: 'GAP一级牧场，原生锁鲜技术，口感醇厚',
			brand: { name: '光明' },
			specs: [
				{
					name: '规格',
					values: [{ name: '300ml' }, { name: '720ml' }],
				},
			],
			skus: [
				{
					id: 'snack_3_7_1',
					specs: [{ name: '规格', valueName: '300ml' }],
					price: 8.9,
					oldPrice: 13.0,
					inventory: 150,
				},
				{
					id: 'snack_3_7_2',
					specs: [{ name: '规格', valueName: '720ml' }],
					price: 16.9,
					oldPrice: 25.0,
					inventory: 100,
				},
			],
		},
		{
			name: '汇源100%橙汁',
			desc: '真果汁，不加糖，补充维C，健康活力',
			brand: { name: '汇源' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '橙汁' },
						{ name: '苹果汁' },
						{ name: '葡萄汁' },
					],
				},
			],
			skus: [
				{
					id: 'snack_3_8_1',
					specs: [{ name: '口味', valueName: '橙汁' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 160,
				},
				{
					id: 'snack_3_8_2',
					specs: [{ name: '口味', valueName: '苹果汁' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 150,
				},
				{
					id: 'snack_3_8_3',
					specs: [{ name: '口味', valueName: '葡萄汁' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 140,
				},
			],
		},
		{
			name: '维他柠檬茶',
			desc: '真茶真柠檬，涩涩好回味，香港经典',
			brand: { name: '维他' },
			specs: [
				{
					name: '规格',
					values: [{ name: '250ml盒装' }, { name: '500ml瓶装' }],
				},
			],
			skus: [
				{
					id: 'snack_3_9_1',
					specs: [{ name: '规格', valueName: '250ml盒装' }],
					price: 4.5,
					oldPrice: 6.5,
					inventory: 220,
				},
				{
					id: 'snack_3_9_2',
					specs: [{ name: '规格', valueName: '500ml瓶装' }],
					price: 6.5,
					oldPrice: 10.0,
					inventory: 180,
				},
			],
		},
	],
	坚果炒货: [
		{
			name: '三只松鼠夏威夷果',
			desc: '果肉饱满，奶香浓郁，轻轻一捏就开',
			brand: { name: '三只松鼠' },
			specs: [
				{
					name: '包装',
					values: [
						{ name: '120g' },
						{ name: '230g' },
						{ name: '500g' },
					],
				},
			],
			skus: [
				{
					id: 'snack_4_1_1',
					specs: [{ name: '包装', valueName: '120g' }],
					price: 16.9,
					oldPrice: 25.0,
					inventory: 150,
				},
				{
					id: 'snack_4_1_2',
					specs: [{ name: '包装', valueName: '230g' }],
					price: 28.9,
					oldPrice: 42.0,
					inventory: 120,
				},
				{
					id: 'snack_4_1_3',
					specs: [{ name: '包装', valueName: '500g' }],
					price: 49.9,
					oldPrice: 72.0,
					inventory: 80,
				},
			],
		},
		{
			name: '洽洽香瓜子',
			desc: '百煮入味，香脆可口，嗑不停',
			brand: { name: '洽洽' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '原味' },
						{ name: '焦糖' },
						{ name: '甘草' },
					],
				},
			],
			skus: [
				{
					id: 'snack_4_2_1',
					specs: [{ name: '口味', valueName: '原味' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 200,
				},
				{
					id: 'snack_4_2_2',
					specs: [{ name: '口味', valueName: '焦糖' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 190,
				},
				{
					id: 'snack_4_2_3',
					specs: [{ name: '口味', valueName: '甘草' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 180,
				},
			],
		},
		{
			name: '良品铺子碧根果',
			desc: '原色原香，果仁完整，自然清甜',
			brand: { name: '良品铺子' },
			specs: [
				{
					name: '包装',
					values: [
						{ name: '160g' },
						{ name: '300g' },
						{ name: '500g' },
					],
				},
			],
			skus: [
				{
					id: 'snack_4_3_1',
					specs: [{ name: '包装', valueName: '160g' }],
					price: 15.9,
					oldPrice: 24.0,
					inventory: 140,
				},
				{
					id: 'snack_4_3_2',
					specs: [{ name: '包装', valueName: '300g' }],
					price: 26.9,
					oldPrice: 40.0,
					inventory: 110,
				},
				{
					id: 'snack_4_3_3',
					specs: [{ name: '包装', valueName: '500g' }],
					price: 42.9,
					oldPrice: 65.0,
					inventory: 70,
				},
			],
		},
		{
			name: '百草味开心果',
			desc: '自然开裂，壳薄仁大，咸香酥脆',
			brand: { name: '百草味' },
			specs: [
				{ name: '包装', values: [{ name: '100g' }, { name: '268g' }] },
			],
			skus: [
				{
					id: 'snack_4_4_1',
					specs: [{ name: '包装', valueName: '100g' }],
					price: 14.9,
					oldPrice: 22.0,
					inventory: 160,
				},
				{
					id: 'snack_4_4_2',
					specs: [{ name: '包装', valueName: '268g' }],
					price: 32.9,
					oldPrice: 49.0,
					inventory: 90,
				},
			],
		},
		{
			name: '老街口盐水花生',
			desc: '传统工艺煮制，入味好吃，下酒神器',
			brand: { name: '老街口' },
			specs: [
				{
					name: '包装',
					values: [{ name: '散装称重' }, { name: '独立小包' }],
				},
			],
			skus: [
				{
					id: 'snack_4_5_1',
					specs: [{ name: '包装', valueName: '散装称重' }],
					price: 7.8,
					oldPrice: 12.0,
					inventory: 180,
				},
				{
					id: 'snack_4_5_2',
					specs: [{ name: '包装', valueName: '独立小包' }],
					price: 13.9,
					oldPrice: 21.0,
					inventory: 140,
				},
			],
		},
		{
			name: '东北松子仁',
			desc: '颗粒饱满，松香浓郁，补脑佳品',
			brand: { name: '森林皇后' },
			specs: [
				{
					name: '包装',
					values: [
						{ name: '50g' },
						{ name: '100g' },
						{ name: '150g' },
					],
				},
			],
			skus: [
				{
					id: 'snack_4_6_1',
					specs: [{ name: '包装', valueName: '50g' }],
					price: 12.9,
					oldPrice: 19.0,
					inventory: 130,
				},
				{
					id: 'snack_4_6_2',
					specs: [{ name: '包装', valueName: '100g' }],
					price: 22.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'snack_4_6_3',
					specs: [{ name: '包装', valueName: '150g' }],
					price: 32.9,
					oldPrice: 49.0,
					inventory: 80,
				},
			],
		},
		{
			name: '琥珀核桃仁',
			desc: '裹糖油炸，香甜酥脆，核桃不苦涩',
			brand: { name: '百草味' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '原味' },
						{ name: '蜂蜜' },
						{ name: '奶香' },
					],
				},
			],
			skus: [
				{
					id: 'snack_4_7_1',
					specs: [{ name: '口味', valueName: '原味' }],
					price: 13.9,
					oldPrice: 21.0,
					inventory: 150,
				},
				{
					id: 'snack_4_7_2',
					specs: [{ name: '口味', valueName: '蜂蜜' }],
					price: 14.9,
					oldPrice: 22.0,
					inventory: 140,
				},
				{
					id: 'snack_4_7_3',
					specs: [{ name: '口味', valueName: '奶香' }],
					price: 14.9,
					oldPrice: 22.0,
					inventory: 130,
				},
			],
		},
		{
			name: '夏威夷果仁脱壳装',
			desc: '免剥壳吃得爽，奶油味浓郁，追剧必备',
			brand: { name: '洽洽' },
			specs: [
				{ name: '包装', values: [{ name: '100g' }, { name: '250g' }] },
			],
			skus: [
				{
					id: 'snack_4_8_1',
					specs: [{ name: '包装', valueName: '100g' }],
					price: 16.9,
					oldPrice: 25.0,
					inventory: 140,
				},
				{
					id: 'snack_4_8_2',
					specs: [{ name: '包装', valueName: '250g' }],
					price: 35.9,
					oldPrice: 54.0,
					inventory: 90,
				},
			],
		},
		{
			name: '每日坚果混合装',
			desc: '科学配比6种坚果，每天一包营养均衡',
			brand: { name: '三只松鼠' },
			specs: [
				{
					name: '规格',
					values: [
						{ name: '25g单日装' },
						{ name: '750g月装' },
						{ name: '30天装' },
					],
				},
			],
			skus: [
				{
					id: 'snack_4_9_1',
					specs: [{ name: '规格', valueName: '25g单日装' }],
					price: 3.5,
					oldPrice: 5.5,
					inventory: 300,
				},
				{
					id: 'snack_4_9_2',
					specs: [{ name: '规格', valueName: '750g月装' }],
					price: 68.0,
					oldPrice: 99.0,
					inventory: 80,
				},
				{
					id: 'snack_4_9_3',
					specs: [{ name: '规格', valueName: '30天装' }],
					price: 89.0,
					oldPrice: 129.0,
					inventory: 60,
				},
			],
		},
	],
	方便速食: [
		{
			name: '康师傅红烧牛肉面',
			desc: '就是这个味，经典红烧牛肉，汤浓面劲',
			brand: { name: '康师傅' },
			specs: [
				{
					name: '包装',
					values: [{ name: '桶装' }, { name: '袋装5连包' }],
				},
			],
			skus: [
				{
					id: 'snack_5_1_1',
					specs: [{ name: '包装', valueName: '桶装' }],
					price: 5.0,
					oldPrice: 7.5,
					inventory: 300,
				},
				{
					id: 'snack_5_1_2',
					specs: [{ name: '包装', valueName: '袋装5连包' }],
					price: 16.9,
					oldPrice: 25.0,
					inventory: 200,
				},
			],
		},
		{
			name: '统一老坛酸菜牛肉面',
			desc: '地道老坛发酵，酸爽开胃，够劲够味',
			brand: { name: '统一' },
			specs: [
				{
					name: '包装',
					values: [{ name: '桶装' }, { name: '袋装5连包' }],
				},
			],
			skus: [
				{
					id: 'snack_5_2_1',
					specs: [{ name: '包装', valueName: '桶装' }],
					price: 5.0,
					oldPrice: 7.5,
					inventory: 280,
				},
				{
					id: 'snack_5_2_2',
					specs: [{ name: '包装', valueName: '袋装5连包' }],
					price: 16.9,
					oldPrice: 25.0,
					inventory: 180,
				},
			],
		},
		{
			name: '海底捞自热火锅',
			desc: '不用电不用火，15分钟吃上火锅，懒人福音',
			brand: { name: '海底捞' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '麻辣牛肉' },
						{ name: '番茄牛腩' },
						{ name: '藤椒鸡肉' },
					],
				},
			],
			skus: [
				{
					id: 'snack_5_3_1',
					specs: [{ name: '口味', valueName: '麻辣牛肉' }],
					price: 45.0,
					oldPrice: 68.0,
					inventory: 120,
				},
				{
					id: 'snack_5_3_2',
					specs: [{ name: '口味', valueName: '番茄牛腩' }],
					price: 45.0,
					oldPrice: 68.0,
					inventory: 110,
				},
				{
					id: 'snack_5_3_3',
					specs: [{ name: '口味', valueName: '藤椒鸡肉' }],
					price: 42.0,
					oldPrice: 65.0,
					inventory: 100,
				},
			],
		},
		{
			name: '自热米饭',
			desc: '真材实料大块肉，米粒晶莹剔透，出门必带',
			brand: { name: '自嗨锅' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '鱼香肉丝' },
						{ name: '宫保鸡丁' },
						{ name: '咖喱牛肉' },
					],
				},
			],
			skus: [
				{
					id: 'snack_5_4_1',
					specs: [{ name: '口味', valueName: '鱼香肉丝' }],
					price: 18.9,
					oldPrice: 28.0,
					inventory: 150,
				},
				{
					id: 'snack_5_4_2',
					specs: [{ name: '口味', valueName: '宫保鸡丁' }],
					price: 18.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'snack_5_4_3',
					specs: [{ name: '口味', valueName: '咖喱牛肉' }],
					price: 19.9,
					oldPrice: 29.0,
					inventory: 130,
				},
			],
		},
		{
			name: '好欢螺螺蛳粉',
			desc: '柳州正宗味道，酸辣鲜香烫，加量腐竹配菜',
			brand: { name: '好欢螺' },
			specs: [
				{
					name: '包装',
					values: [
						{ name: '单包' },
						{ name: '3包组合' },
						{ name: '5包组合' },
					],
				},
			],
			skus: [
				{
					id: 'snack_5_5_1',
					specs: [{ name: '包装', valueName: '单包' }],
					price: 12.9,
					oldPrice: 19.0,
					inventory: 200,
				},
				{
					id: 'snack_5_5_2',
					specs: [{ name: '包装', valueName: '3包组合' }],
					price: 35.9,
					oldPrice: 54.0,
					inventory: 100,
				},
				{
					id: 'snack_5_5_3',
					specs: [{ name: '包装', valueName: '5包组合' }],
					price: 55.9,
					oldPrice: 85.0,
					inventory: 60,
				},
			],
		},
		{
			name: '食族人酸辣粉',
			desc: '红薯粉丝，秘制醋包，还原街头味道',
			brand: { name: '食族人' },
			specs: [
				{
					name: '口味',
					values: [{ name: '原味酸辣' }, { name: '加量肉沫' }],
				},
			],
			skus: [
				{
					id: 'snack_5_6_1',
					specs: [{ name: '口味', valueName: '原味酸辣' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 180,
				},
				{
					id: 'snack_5_6_2',
					specs: [{ name: '口味', valueName: '加量肉沫' }],
					price: 12.9,
					oldPrice: 19.0,
					inventory: 150,
				},
			],
		},
		{
			name: '速食意大利面',
			desc: '进口杜兰小麦面，酱料浓郁，西餐轻松做',
			brand: { name: '空刻' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '番茄肉酱' },
						{ name: '黑椒牛柳' },
						{ name: '奶油蘑菇' },
					],
				},
			],
			skus: [
				{
					id: 'snack_5_7_1',
					specs: [{ name: '口味', valueName: '番茄肉酱' }],
					price: 16.9,
					oldPrice: 25.0,
					inventory: 130,
				},
				{
					id: 'snack_5_7_2',
					specs: [{ name: '口味', valueName: '黑椒牛柳' }],
					price: 16.9,
					oldPrice: 25.0,
					inventory: 120,
				},
				{
					id: 'snack_5_7_3',
					specs: [{ name: '口味', valueName: '奶油蘑菇' }],
					price: 16.9,
					oldPrice: 25.0,
					inventory: 120,
				},
			],
		},
		{
			name: '阿宽红油面皮',
			desc: '宽大面皮，爽滑劲道，红油香辣过瘾',
			brand: { name: '阿宽' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '红油' },
						{ name: '麻辣' },
						{ name: '酸辣' },
					],
				},
			],
			skus: [
				{
					id: 'snack_5_8_1',
					specs: [{ name: '口味', valueName: '红油' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 170,
				},
				{
					id: 'snack_5_8_2',
					specs: [{ name: '口味', valueName: '麻辣' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 160,
				},
				{
					id: 'snack_5_8_3',
					specs: [{ name: '口味', valueName: '酸辣' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 160,
				},
			],
		},
		{
			name: '桂格即食燕麦粥',
			desc: '免煮即食，燕麦谷物营养，快手健康早餐',
			brand: { name: '桂格' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '紫薯' },
						{ name: '原味' },
						{ name: '牛奶' },
					],
				},
			],
			skus: [
				{
					id: 'snack_5_9_1',
					specs: [{ name: '口味', valueName: '紫薯' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 140,
				},
				{
					id: 'snack_5_9_2',
					specs: [{ name: '口味', valueName: '原味' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 130,
				},
				{
					id: 'snack_5_9_3',
					specs: [{ name: '口味', valueName: '牛奶' }],
					price: 10.9,
					oldPrice: 16.5,
					inventory: 120,
				},
			],
		},
	],
	糖果巧克力: [
		{
			name: '阿尔卑斯硬糖',
			desc: '果味浓郁，持久回味，经典散装糖果',
			brand: { name: '阿尔卑斯' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '草莓' },
						{ name: '葡萄' },
						{ name: '甜橙' },
					],
				},
			],
			skus: [
				{
					id: 'snack_6_1_1',
					specs: [{ name: '口味', valueName: '草莓' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 180,
				},
				{
					id: 'snack_6_1_2',
					specs: [{ name: '口味', valueName: '葡萄' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 170,
				},
				{
					id: 'snack_6_1_3',
					specs: [{ name: '口味', valueName: '甜橙' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 160,
				},
			],
		},
		{
			name: '德芙丝滑牛奶巧克力',
			desc: '纵享丝滑，浓郁可可香，送礼自用皆宜',
			brand: { name: '德芙' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '醇香黑巧' },
						{ name: '经典牛奶' },
						{ name: '丝滑榛仁' },
					],
				},
			],
			skus: [
				{
					id: 'snack_6_2_1',
					specs: [{ name: '口味', valueName: '醇香黑巧' }],
					price: 14.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'snack_6_2_2',
					specs: [{ name: '口味', valueName: '经典牛奶' }],
					price: 14.9,
					oldPrice: 22.0,
					inventory: 140,
				},
				{
					id: 'snack_6_2_3',
					specs: [{ name: '口味', valueName: '丝滑榛仁' }],
					price: 16.9,
					oldPrice: 25.0,
					inventory: 120,
				},
			],
		},
		{
			name: '旺仔QQ糖',
			desc: '软糯Q弹，果汁满满，童年的快乐味道',
			brand: { name: '旺仔' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '乳酸' },
						{ name: '葡萄' },
						{ name: '荔枝' },
					],
				},
			],
			skus: [
				{
					id: 'snack_6_3_1',
					specs: [{ name: '口味', valueName: '乳酸' }],
					price: 6.5,
					oldPrice: 10.0,
					inventory: 200,
				},
				{
					id: 'snack_6_3_2',
					specs: [{ name: '口味', valueName: '葡萄' }],
					price: 6.5,
					oldPrice: 10.0,
					inventory: 190,
				},
				{
					id: 'snack_6_3_3',
					specs: [{ name: '口味', valueName: '荔枝' }],
					price: 6.5,
					oldPrice: 10.0,
					inventory: 180,
				},
			],
		},
		{
			name: '绿箭无糖口香糖',
			desc: '清新口气，社交好帮手，无糖更健康',
			brand: { name: '绿箭' },
			specs: [
				{
					name: '口味',
					values: [{ name: '薄荷' }, { name: '留兰香' }],
				},
			],
			skus: [
				{
					id: 'snack_6_4_1',
					specs: [{ name: '口味', valueName: '薄荷' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 180,
				},
				{
					id: 'snack_6_4_2',
					specs: [{ name: '口味', valueName: '留兰香' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 170,
				},
			],
		},
		{
			name: '大白兔奶糖',
			desc: '经典国民奶糖，浓郁奶香，带来甜蜜回忆',
			brand: { name: '大白兔' },
			specs: [
				{
					name: '包装',
					values: [{ name: '散装称重' }, { name: '独立包装袋' }],
				},
			],
			skus: [
				{
					id: 'snack_6_5_1',
					specs: [{ name: '包装', valueName: '散装称重' }],
					price: 8.8,
					oldPrice: 13.5,
					inventory: 160,
				},
				{
					id: 'snack_6_5_2',
					specs: [{ name: '包装', valueName: '独立包装袋' }],
					price: 14.9,
					oldPrice: 22.0,
					inventory: 130,
				},
			],
		},
		{
			name: '徐福记沙琪玛',
			desc: '松软可口，蛋香浓郁，不粘牙不上火',
			brand: { name: '徐福记' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '原味' },
						{ name: '鸡蛋' },
						{ name: '黑糖' },
					],
				},
			],
			skus: [
				{
					id: 'snack_6_6_1',
					specs: [{ name: '口味', valueName: '原味' }],
					price: 12.9,
					oldPrice: 19.9,
					inventory: 150,
				},
				{
					id: 'snack_6_6_2',
					specs: [{ name: '口味', valueName: '鸡蛋' }],
					price: 12.9,
					oldPrice: 19.9,
					inventory: 140,
				},
				{
					id: 'snack_6_6_3',
					specs: [{ name: '口味', valueName: '黑糖' }],
					price: 13.9,
					oldPrice: 21.0,
					inventory: 130,
				},
			],
		},
		{
			name: '悠哈特浓牛奶糖',
			desc: '特浓牛奶夹心，入口即化，日式风味',
			brand: { name: '悠哈' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '原味' },
						{ name: '草莓' },
						{ name: '抹茶' },
					],
				},
			],
			skus: [
				{
					id: 'snack_6_7_1',
					specs: [{ name: '口味', valueName: '原味' }],
					price: 11.9,
					oldPrice: 18.0,
					inventory: 140,
				},
				{
					id: 'snack_6_7_2',
					specs: [{ name: '口味', valueName: '草莓' }],
					price: 11.9,
					oldPrice: 18.0,
					inventory: 130,
				},
				{
					id: 'snack_6_7_3',
					specs: [{ name: '口味', valueName: '抹茶' }],
					price: 11.9,
					oldPrice: 18.0,
					inventory: 130,
				},
			],
		},
		{
			name: '金丝猴麦丽素',
			desc: '外层脆皮内含奶心，嘎嘣脆的童年零食',
			brand: { name: '金丝猴' },
			specs: [
				{
					name: '包装',
					values: [{ name: '小包装' }, { name: '大包装' }],
				},
			],
			skus: [
				{
					id: 'snack_6_8_1',
					specs: [{ name: '包装', valueName: '小包装' }],
					price: 6.9,
					oldPrice: 10.5,
					inventory: 190,
				},
				{
					id: 'snack_6_8_2',
					specs: [{ name: '包装', valueName: '大包装' }],
					price: 13.9,
					oldPrice: 21.0,
					inventory: 120,
				},
			],
		},
		{
			name: '费列罗榛果威化巧克力',
			desc: '外层脆皮威化，内含整颗榛果，奢华享受',
			brand: { name: '费列罗' },
			specs: [
				{
					name: '包装',
					values: [
						{ name: '3粒装' },
						{ name: '15粒装' },
						{ name: '30粒装' },
					],
				},
			],
			skus: [
				{
					id: 'snack_6_9_1',
					specs: [{ name: '包装', valueName: '3粒装' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 200,
				},
				{
					id: 'snack_6_9_2',
					specs: [{ name: '包装', valueName: '15粒装' }],
					price: 39.9,
					oldPrice: 60.0,
					inventory: 100,
				},
				{
					id: 'snack_6_9_3',
					specs: [{ name: '包装', valueName: '30粒装' }],
					price: 75.0,
					oldPrice: 112.0,
					inventory: 60,
				},
			],
		},
	],
	水果零食: [
		{
			name: '良品铺子芒果干',
			desc: '精选大块芒果，厚切有嚼劲，酸甜适中',
			brand: { name: '良品铺子' },
			specs: [
				{
					name: '规格',
					values: [
						{ name: '50g' },
						{ name: '100g' },
						{ name: '180g' },
					],
				},
			],
			skus: [
				{
					id: 'snack_7_1_1',
					specs: [{ name: '规格', valueName: '50g' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 160,
				},
				{
					id: 'snack_7_1_2',
					specs: [{ name: '规格', valueName: '100g' }],
					price: 15.9,
					oldPrice: 24.0,
					inventory: 130,
				},
				{
					id: 'snack_7_1_3',
					specs: [{ name: '规格', valueName: '180g' }],
					price: 25.9,
					oldPrice: 39.0,
					inventory: 90,
				},
			],
		},
		{
			name: '百草味草莓干',
			desc: '整颗草莓脱水，保留果形，酸甜果香',
			brand: { name: '百草味' },
			specs: [
				{
					name: '规格',
					values: [
						{ name: '30g' },
						{ name: '60g' },
						{ name: '100g' },
					],
				},
			],
			skus: [
				{
					id: 'snack_7_2_1',
					specs: [{ name: '规格', valueName: '30g' }],
					price: 7.9,
					oldPrice: 12.0,
					inventory: 180,
				},
				{
					id: 'snack_7_2_2',
					specs: [{ name: '规格', valueName: '60g' }],
					price: 13.9,
					oldPrice: 21.0,
					inventory: 140,
				},
				{
					id: 'snack_7_2_3',
					specs: [{ name: '规格', valueName: '100g' }],
					price: 21.9,
					oldPrice: 33.0,
					inventory: 100,
				},
			],
		},
		{
			name: '三只松鼠黄桃罐头',
			desc: '新鲜黄桃制作，大块果肉，清甜多汁',
			brand: { name: '三只松鼠' },
			specs: [
				{
					name: '规格',
					values: [{ name: '425g单罐' }, { name: '6罐组合装' }],
				},
			],
			skus: [
				{
					id: 'snack_7_3_1',
					specs: [{ name: '规格', valueName: '425g单罐' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 150,
				},
				{
					id: 'snack_7_3_2',
					specs: [{ name: '规格', valueName: '6罐组合装' }],
					price: 49.9,
					oldPrice: 75.0,
					inventory: 80,
				},
			],
		},
		{
			name: '华味亨话梅干',
			desc: '传统工艺，酸甜适中，生津止渴',
			brand: { name: '华味亨' },
			specs: [
				{
					name: '口味',
					values: [
						{ name: '甜话梅' },
						{ name: '话梅条' },
						{ name: '盐津话梅' },
					],
				},
			],
			skus: [
				{
					id: 'snack_7_4_1',
					specs: [{ name: '口味', valueName: '甜话梅' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 170,
				},
				{
					id: 'snack_7_4_2',
					specs: [{ name: '口味', valueName: '话梅条' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 160,
				},
				{
					id: 'snack_7_4_3',
					specs: [{ name: '口味', valueName: '盐津话梅' }],
					price: 8.9,
					oldPrice: 13.5,
					inventory: 150,
				},
			],
		},
		{
			name: '冻干草莓',
			desc: '宇航员冻干技术，锁住营养，酥脆可口',
			brand: { name: '内幕' },
			specs: [
				{
					name: '包装',
					values: [{ name: '15g' }, { name: '30g' }, { name: '50g' }],
				},
			],
			skus: [
				{
					id: 'snack_7_5_1',
					specs: [{ name: '包装', valueName: '15g' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 150,
				},
				{
					id: 'snack_7_5_2',
					specs: [{ name: '包装', valueName: '30g' }],
					price: 16.9,
					oldPrice: 25.0,
					inventory: 120,
				},
				{
					id: 'snack_7_5_3',
					specs: [{ name: '包装', valueName: '50g' }],
					price: 25.9,
					oldPrice: 39.0,
					inventory: 90,
				},
			],
		},
		{
			name: '红杏干',
			desc: '自然晾晒，果肉厚实，酸甜开胃',
			brand: { name: '果园老农' },
			specs: [
				{
					name: '规格',
					values: [{ name: '散装称重' }, { name: '独立小包' }],
				},
			],
			skus: [
				{
					id: 'snack_7_6_1',
					specs: [{ name: '规格', valueName: '散装称重' }],
					price: 7.5,
					oldPrice: 11.5,
					inventory: 160,
				},
				{
					id: 'snack_7_6_2',
					specs: [{ name: '规格', valueName: '独立小包' }],
					price: 14.9,
					oldPrice: 22.0,
					inventory: 120,
				},
			],
		},
		{
			name: '冻干无花果',
			desc: '富含膳食纤维，天然果糖，健康小零食',
			brand: { name: '满小饱' },
			specs: [
				{ name: '包装', values: [{ name: '20g' }, { name: '40g' }] },
			],
			skus: [
				{
					id: 'snack_7_7_1',
					specs: [{ name: '包装', valueName: '20g' }],
					price: 12.9,
					oldPrice: 19.9,
					inventory: 130,
				},
				{
					id: 'snack_7_7_2',
					specs: [{ name: '包装', valueName: '40g' }],
					price: 22.9,
					oldPrice: 35.0,
					inventory: 90,
				},
			],
		},
		{
			name: '新疆猕猴桃干',
			desc: '精选猕猴桃切片，酸甜软糯，维C丰富',
			brand: { name: '楼兰蜜语' },
			specs: [
				{
					name: '规格',
					values: [
						{ name: '50g' },
						{ name: '100g' },
						{ name: '150g' },
					],
				},
			],
			skus: [
				{
					id: 'snack_7_8_1',
					specs: [{ name: '规格', valueName: '50g' }],
					price: 9.9,
					oldPrice: 15.0,
					inventory: 140,
				},
				{
					id: 'snack_7_8_2',
					specs: [{ name: '规格', valueName: '100g' }],
					price: 17.9,
					oldPrice: 27.0,
					inventory: 110,
				},
				{
					id: 'snack_7_8_3',
					specs: [{ name: '规格', valueName: '150g' }],
					price: 24.9,
					oldPrice: 38.0,
					inventory: 80,
				},
			],
		},
		{
			name: '桂圆肉干',
			desc: '去壳纯肉干，滋补佳品，甜度适中',
			brand: { name: '百草味' },
			specs: [
				{
					name: '包装',
					values: [
						{ name: '100g' },
						{ name: '250g' },
						{ name: '500g' },
					],
				},
			],
			skus: [
				{
					id: 'snack_7_9_1',
					specs: [{ name: '包装', valueName: '100g' }],
					price: 14.9,
					oldPrice: 22.0,
					inventory: 130,
				},
				{
					id: 'snack_7_9_2',
					specs: [{ name: '包装', valueName: '250g' }],
					price: 32.9,
					oldPrice: 49.0,
					inventory: 90,
				},
				{
					id: 'snack_7_9_3',
					specs: [{ name: '包装', valueName: '500g' }],
					price: 59.9,
					oldPrice: 89.0,
					inventory: 60,
				},
			],
		},
	],
};
