import type { GoodsDataMap } from '../../types.js';

export const dormitoryGoods: GoodsDataMap = {
	床上用品: [
		{
			name: '学生宿舍床帘遮光帘',
			desc: '适合90x190cm宿舍床铺，遮光率95%，透气面料，安装简便',
			brand: { name: '睡得香' },
			specs: [
				{
					name: '颜色',
					values: [
						{ name: '星空蓝' },
						{ name: '樱花粉' },
						{ name: '薄荷绿' },
					],
				},
				{
					name: '尺寸',
					values: [
						{ name: '单人(90x190)' },
						{ name: '加长(90x200)' },
					],
				},
			],
			skus: [
				{
					id: 'sku_bed_1_1',
					specs: [
						{ name: '颜色', valueName: '星空蓝' },
						{ name: '尺寸', valueName: '单人(90x190)' },
					],
					price: 39.9,
					oldPrice: 59.9,
					inventory: 50,
				},
				{
					id: 'sku_bed_1_2',
					specs: [
						{ name: '颜色', valueName: '星空蓝' },
						{ name: '尺寸', valueName: '加长(90x200)' },
					],
					price: 49.9,
					oldPrice: 69.9,
					inventory: 30,
				},
				{
					id: 'sku_bed_1_3',
					specs: [
						{ name: '颜色', valueName: '樱花粉' },
						{ name: '尺寸', valueName: '单人(90x190)' },
					],
					price: 39.9,
					oldPrice: 59.9,
					inventory: 45,
				},
				{
					id: 'sku_bed_1_4',
					specs: [
						{ name: '颜色', valueName: '樱花粉' },
						{ name: '尺寸', valueName: '加长(90x200)' },
					],
					price: 49.9,
					oldPrice: 69.9,
					inventory: 25,
				},
				{
					id: 'sku_bed_1_5',
					specs: [
						{ name: '颜色', valueName: '薄荷绿' },
						{ name: '尺寸', valueName: '单人(90x190)' },
					],
					price: 39.9,
					oldPrice: 59.9,
					inventory: 60,
				},
				{
					id: 'sku_bed_1_6',
					specs: [
						{ name: '颜色', valueName: '薄荷绿' },
						{ name: '尺寸', valueName: '加长(90x200)' },
					],
					price: 49.9,
					oldPrice: 69.9,
					inventory: 35,
				},
			],
		},
		{
			name: '全棉宿舍单人床单三件套',
			desc: '100%纯棉面料，亲肤透气，学生宿舍专用尺寸',
			brand: { name: '棉柔坊' },
			specs: [
				{
					name: '花色',
					values: [
						{ name: '小碎花' },
						{ name: '纯白' },
						{ name: '条纹' },
					],
				},
				{
					name: '尺寸',
					values: [{ name: '1.2m床' }, { name: '0.9m床' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_2_1',
					specs: [
						{ name: '花色', valueName: '小碎花' },
						{ name: '尺寸', valueName: '1.2m床' },
					],
					price: 69.9,
					oldPrice: 99.9,
					inventory: 20,
				},
				{
					id: 'sku_bed_2_2',
					specs: [
						{ name: '花色', valueName: '小碎花' },
						{ name: '尺寸', valueName: '0.9m床' },
					],
					price: 59.9,
					oldPrice: 89.9,
					inventory: 30,
				},
				{
					id: 'sku_bed_2_3',
					specs: [
						{ name: '花色', valueName: '纯白' },
						{ name: '尺寸', valueName: '1.2m床' },
					],
					price: 69.9,
					oldPrice: 99.9,
					inventory: 15,
				},
				{
					id: 'sku_bed_2_4',
					specs: [
						{ name: '花色', valueName: '纯白' },
						{ name: '尺寸', valueName: '0.9m床' },
					],
					price: 59.9,
					oldPrice: 89.9,
					inventory: 25,
				},
				{
					id: 'sku_bed_2_5',
					specs: [
						{ name: '花色', valueName: '条纹' },
						{ name: '尺寸', valueName: '1.2m床' },
					],
					price: 69.9,
					oldPrice: 99.9,
					inventory: 18,
				},
				{
					id: 'sku_bed_2_6',
					specs: [
						{ name: '花色', valueName: '条纹' },
						{ name: '尺寸', valueName: '0.9m床' },
					],
					price: 59.9,
					oldPrice: 89.9,
					inventory: 22,
				},
			],
		},
		{
			name: '夏季冰丝凉席宿舍单人款',
			desc: '冰丝面料清凉透气，可折叠收纳，宿舍必备',
			brand: { name: '凉爽家' },
			specs: [
				{
					name: '颜色',
					values: [
						{ name: '浅灰' },
						{ name: '冰蓝' },
						{ name: '米白' },
					],
				},
				{
					name: '尺寸',
					values: [{ name: '90x190' }, { name: '120x190' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_3_1',
					specs: [
						{ name: '颜色', valueName: '浅灰' },
						{ name: '尺寸', valueName: '90x190' },
					],
					price: 35.9,
					oldPrice: 55.0,
					inventory: 40,
				},
				{
					id: 'sku_bed_3_2',
					specs: [
						{ name: '颜色', valueName: '浅灰' },
						{ name: '尺寸', valueName: '120x190' },
					],
					price: 45.9,
					oldPrice: 65.0,
					inventory: 30,
				},
				{
					id: 'sku_bed_3_3',
					specs: [
						{ name: '颜色', valueName: '冰蓝' },
						{ name: '尺寸', valueName: '90x190' },
					],
					price: 35.9,
					oldPrice: 55.0,
					inventory: 55,
				},
				{
					id: 'sku_bed_3_4',
					specs: [
						{ name: '颜色', valueName: '冰蓝' },
						{ name: '尺寸', valueName: '120x190' },
					],
					price: 45.9,
					oldPrice: 65.0,
					inventory: 35,
				},
				{
					id: 'sku_bed_3_5',
					specs: [
						{ name: '颜色', valueName: '米白' },
						{ name: '尺寸', valueName: '90x190' },
					],
					price: 35.9,
					oldPrice: 55.0,
					inventory: 0,
				},
				{
					id: 'sku_bed_3_6',
					specs: [
						{ name: '颜色', valueName: '米白' },
						{ name: '尺寸', valueName: '120x190' },
					],
					price: 45.9,
					oldPrice: 65.0,
					inventory: 0,
				},
			],
		},
		{
			name: '宿舍枕头护颈记忆棉枕',
			desc: '慢回弹记忆棉，符合人体工学，改善睡眠质量',
			brand: { name: '安睡宝' },
			specs: [
				{
					name: '高度',
					values: [{ name: '低枕(8cm)' }, { name: '高枕(12cm)' }],
				},
				{
					name: '枕套',
					values: [
						{ name: '含纯棉枕套' },
						{ name: '含冰丝枕套' },
						{ name: '不含枕套' },
					],
				},
			],
			skus: [
				{
					id: 'sku_bed_4_1',
					specs: [
						{ name: '高度', valueName: '低枕(8cm)' },
						{ name: '枕套', valueName: '含纯棉枕套' },
					],
					price: 29.9,
					oldPrice: 49.9,
					inventory: 60,
				},
				{
					id: 'sku_bed_4_2',
					specs: [
						{ name: '高度', valueName: '低枕(8cm)' },
						{ name: '枕套', valueName: '含冰丝枕套' },
					],
					price: 32.9,
					oldPrice: 52.9,
					inventory: 45,
				},
				{
					id: 'sku_bed_4_3',
					specs: [
						{ name: '高度', valueName: '低枕(8cm)' },
						{ name: '枕套', valueName: '不含枕套' },
					],
					price: 19.9,
					oldPrice: 39.9,
					inventory: 80,
				},
				{
					id: 'sku_bed_4_4',
					specs: [
						{ name: '高度', valueName: '高枕(12cm)' },
						{ name: '枕套', valueName: '含纯棉枕套' },
					],
					price: 32.9,
					oldPrice: 52.9,
					inventory: 50,
				},
				{
					id: 'sku_bed_4_5',
					specs: [
						{ name: '高度', valueName: '高枕(12cm)' },
						{ name: '枕套', valueName: '含冰丝枕套' },
					],
					price: 35.9,
					oldPrice: 55.9,
					inventory: 40,
				},
				{
					id: 'sku_bed_4_6',
					specs: [
						{ name: '高度', valueName: '高枕(12cm)' },
						{ name: '枕套', valueName: '不含枕套' },
					],
					price: 22.9,
					oldPrice: 42.9,
					inventory: 70,
				},
			],
		},
		{
			name: '宿舍冬被加厚保暖棉被',
			desc: '优质聚酯纤维填充，保暖轻盈，可机洗',
			brand: { name: '暖冬' },
			specs: [
				{
					name: '厚度',
					values: [
						{ name: '春秋款(2kg)' },
						{ name: '加厚冬款(3kg)' },
						{ name: '极寒款(4kg)' },
					],
				},
				{
					name: '尺寸',
					values: [{ name: '150x200' }, { name: '180x220' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_5_1',
					specs: [
						{ name: '厚度', valueName: '春秋款(2kg)' },
						{ name: '尺寸', valueName: '150x200' },
					],
					price: 59.9,
					oldPrice: 89.9,
					inventory: 25,
				},
				{
					id: 'sku_bed_5_2',
					specs: [
						{ name: '厚度', valueName: '春秋款(2kg)' },
						{ name: '尺寸', valueName: '180x220' },
					],
					price: 69.9,
					oldPrice: 99.9,
					inventory: 20,
				},
				{
					id: 'sku_bed_5_3',
					specs: [
						{ name: '厚度', valueName: '加厚冬款(3kg)' },
						{ name: '尺寸', valueName: '150x200' },
					],
					price: 79.9,
					oldPrice: 119.9,
					inventory: 35,
				},
				{
					id: 'sku_bed_5_4',
					specs: [
						{ name: '厚度', valueName: '加厚冬款(3kg)' },
						{ name: '尺寸', valueName: '180x220' },
					],
					price: 89.9,
					oldPrice: 129.9,
					inventory: 30,
				},
				{
					id: 'sku_bed_5_5',
					specs: [
						{ name: '厚度', valueName: '极寒款(4kg)' },
						{ name: '尺寸', valueName: '150x200' },
					],
					price: 99.9,
					oldPrice: 149.9,
					inventory: 15,
				},
				{
					id: 'sku_bed_5_6',
					specs: [
						{ name: '厚度', valueName: '极寒款(4kg)' },
						{ name: '尺寸', valueName: '180x220' },
					],
					price: 109.9,
					oldPrice: 159.9,
					inventory: 10,
				},
			],
		},
		{
			name: '宿舍防滑床垫软垫',
			desc: '高密度海绵，防滑底面，改善硬板床睡眠体验',
			brand: { name: '舒适达' },
			specs: [
				{ name: '厚度', values: [{ name: '5cm' }, { name: '8cm' }] },
				{
					name: '尺寸',
					values: [{ name: '90x190' }, { name: '120x200' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_6_1',
					specs: [
						{ name: '厚度', valueName: '5cm' },
						{ name: '尺寸', valueName: '90x190' },
					],
					price: 49.9,
					oldPrice: 79.9,
					inventory: 40,
				},
				{
					id: 'sku_bed_6_2',
					specs: [
						{ name: '厚度', valueName: '5cm' },
						{ name: '尺寸', valueName: '120x200' },
					],
					price: 69.9,
					oldPrice: 99.9,
					inventory: 30,
				},
				{
					id: 'sku_bed_6_3',
					specs: [
						{ name: '厚度', valueName: '8cm' },
						{ name: '尺寸', valueName: '90x190' },
					],
					price: 69.9,
					oldPrice: 99.9,
					inventory: 25,
				},
				{
					id: 'sku_bed_6_4',
					specs: [
						{ name: '厚度', valueName: '8cm' },
						{ name: '尺寸', valueName: '120x200' },
					],
					price: 89.9,
					oldPrice: 119.9,
					inventory: 20,
				},
			],
		},
		{
			name: '宿舍蚊帐防蚊帐帘',
			desc: '加密网眼，有效防蚊，免打孔安装，不伤床架',
			brand: { name: '净蚊' },
			specs: [
				{
					name: '款式',
					values: [
						{ name: '蒙古包款' },
						{ name: '方顶款' },
						{ name: 'U型拉链款' },
					],
				},
				{
					name: '尺寸',
					values: [{ name: '单人(0.9m)' }, { name: '双人(1.2m)' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_7_1',
					specs: [
						{ name: '款式', valueName: '蒙古包款' },
						{ name: '尺寸', valueName: '单人(0.9m)' },
					],
					price: 25.9,
					oldPrice: 39.9,
					inventory: 80,
				},
				{
					id: 'sku_bed_7_2',
					specs: [
						{ name: '款式', valueName: '蒙古包款' },
						{ name: '尺寸', valueName: '双人(1.2m)' },
					],
					price: 32.9,
					oldPrice: 49.9,
					inventory: 60,
				},
				{
					id: 'sku_bed_7_3',
					specs: [
						{ name: '款式', valueName: '方顶款' },
						{ name: '尺寸', valueName: '单人(0.9m)' },
					],
					price: 35.9,
					oldPrice: 55.0,
					inventory: 45,
				},
				{
					id: 'sku_bed_7_4',
					specs: [
						{ name: '款式', valueName: '方顶款' },
						{ name: '尺寸', valueName: '双人(1.2m)' },
					],
					price: 42.9,
					oldPrice: 65.0,
					inventory: 35,
				},
				{
					id: 'sku_bed_7_5',
					specs: [
						{ name: '款式', valueName: 'U型拉链款' },
						{ name: '尺寸', valueName: '单人(0.9m)' },
					],
					price: 45.9,
					oldPrice: 69.9,
					inventory: 50,
				},
				{
					id: 'sku_bed_7_6',
					specs: [
						{ name: '款式', valueName: 'U型拉链款' },
						{ name: '尺寸', valueName: '双人(1.2m)' },
					],
					price: 55.9,
					oldPrice: 79.9,
					inventory: 40,
				},
			],
		},
		{
			name: '宿舍抱枕靠垫床上靠背',
			desc: '阅读看书必备，高弹填充，可拆洗外套',
			brand: { name: '依恋' },
			specs: [
				{
					name: '造型',
					values: [
						{ name: '长方形' },
						{ name: 'U型' },
						{ name: '圆柱形' },
					],
				},
				{ name: '颜色', values: [{ name: '灰色' }, { name: '粉色' }] },
			],
			skus: [
				{
					id: 'sku_bed_8_1',
					specs: [
						{ name: '造型', valueName: '长方形' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 70,
				},
				{
					id: 'sku_bed_8_2',
					specs: [
						{ name: '造型', valueName: '长方形' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 65,
				},
				{
					id: 'sku_bed_8_3',
					specs: [
						{ name: '造型', valueName: 'U型' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 25.9,
					oldPrice: 42.0,
					inventory: 50,
				},
				{
					id: 'sku_bed_8_4',
					specs: [
						{ name: '造型', valueName: 'U型' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 25.9,
					oldPrice: 42.0,
					inventory: 55,
				},
				{
					id: 'sku_bed_8_5',
					specs: [
						{ name: '造型', valueName: '圆柱形' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 40,
				},
				{
					id: 'sku_bed_8_6',
					specs: [
						{ name: '造型', valueName: '圆柱形' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 45,
				},
			],
		},
		{
			name: '宿舍床边挂篮收纳架',
			desc: '免打孔安装，挂床侧放手机眼镜书籍，承重5kg',
			brand: { name: '巧收纳' },
			specs: [
				{
					name: '层数',
					values: [
						{ name: '单层' },
						{ name: '双层' },
						{ name: '三层' },
					],
				},
				{
					name: '材质',
					values: [{ name: '铁艺喷塑' }, { name: '实木' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_9_1',
					specs: [
						{ name: '层数', valueName: '单层' },
						{ name: '材质', valueName: '铁艺喷塑' },
					],
					price: 15.9,
					oldPrice: 25.0,
					inventory: 100,
				},
				{
					id: 'sku_bed_9_2',
					specs: [
						{ name: '层数', valueName: '单层' },
						{ name: '材质', valueName: '实木' },
					],
					price: 22.9,
					oldPrice: 35.0,
					inventory: 60,
				},
				{
					id: 'sku_bed_9_3',
					specs: [
						{ name: '层数', valueName: '双层' },
						{ name: '材质', valueName: '铁艺喷塑' },
					],
					price: 25.9,
					oldPrice: 39.0,
					inventory: 80,
				},
				{
					id: 'sku_bed_9_4',
					specs: [
						{ name: '层数', valueName: '双层' },
						{ name: '材质', valueName: '实木' },
					],
					price: 35.9,
					oldPrice: 52.0,
					inventory: 45,
				},
				{
					id: 'sku_bed_9_5',
					specs: [
						{ name: '层数', valueName: '三层' },
						{ name: '材质', valueName: '铁艺喷塑' },
					],
					price: 35.9,
					oldPrice: 55.0,
					inventory: 55,
				},
				{
					id: 'sku_bed_9_6',
					specs: [
						{ name: '层数', valueName: '三层' },
						{ name: '材质', valueName: '实木' },
					],
					price: 49.9,
					oldPrice: 72.0,
					inventory: 30,
				},
			],
		},
		{
			name: '乳胶床垫薄款宿舍专用',
			desc: '天然乳胶，防螨抑菌，5cm厚度适合宿舍床板',
			brand: { name: '乳胶世家' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '90x190cm' }, { name: '90x200cm' }],
				},
				{
					name: '密度',
					values: [{ name: '85D柔软' }, { name: '95D支撑' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_10_1',
					specs: [
						{ name: '尺寸', valueName: '90x190cm' },
						{ name: '密度', valueName: '85D柔软' },
					],
					price: 89.9,
					oldPrice: 149.9,
					inventory: 30,
				},
				{
					id: 'sku_bed_10_2',
					specs: [
						{ name: '尺寸', valueName: '90x190cm' },
						{ name: '密度', valueName: '95D支撑' },
					],
					price: 99.9,
					oldPrice: 159.9,
					inventory: 25,
				},
				{
					id: 'sku_bed_10_3',
					specs: [
						{ name: '尺寸', valueName: '90x200cm' },
						{ name: '密度', valueName: '85D柔软' },
					],
					price: 95.9,
					oldPrice: 159.9,
					inventory: 20,
				},
				{
					id: 'sku_bed_10_4',
					specs: [
						{ name: '尺寸', valueName: '90x200cm' },
						{ name: '密度', valueName: '95D支撑' },
					],
					price: 105.9,
					oldPrice: 169.9,
					inventory: 18,
				},
			],
		},
		{
			name: 'U型枕护颈枕旅行枕',
			desc: '记忆棉填充，支撑颈部，午睡旅行两用',
			brand: { name: '旅途伴' },
			specs: [
				{
					name: '颜色',
					values: [
						{ name: '灰色' },
						{ name: '藏青' },
						{ name: '粉色' },
					],
				},
				{
					name: '外套',
					values: [{ name: '普通款' }, { name: '冰丝款' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_11_1',
					specs: [
						{ name: '颜色', valueName: '灰色' },
						{ name: '外套', valueName: '普通款' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
				{
					id: 'sku_bed_11_2',
					specs: [
						{ name: '颜色', valueName: '灰色' },
						{ name: '外套', valueName: '冰丝款' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 60,
				},
				{
					id: 'sku_bed_11_3',
					specs: [
						{ name: '颜色', valueName: '藏青' },
						{ name: '外套', valueName: '普通款' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 75,
				},
				{
					id: 'sku_bed_11_4',
					specs: [
						{ name: '颜色', valueName: '藏青' },
						{ name: '外套', valueName: '冰丝款' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 55,
				},
				{
					id: 'sku_bed_11_5',
					specs: [
						{ name: '颜色', valueName: '粉色' },
						{ name: '外套', valueName: '普通款' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 85,
				},
				{
					id: 'sku_bed_11_6',
					specs: [
						{ name: '颜色', valueName: '粉色' },
						{ name: '外套', valueName: '冰丝款' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 65,
				},
			],
		},
		{
			name: '宿舍床帘支架可伸缩',
			desc: '不锈钢材质，免打孔安装，适用于各类宿舍床',
			brand: { name: '支架王' },
			specs: [
				{
					name: '款式',
					values: [{ name: 'U型支架' }, { name: '全框支架' }],
				},
				{
					name: '长度',
					values: [
						{ name: '伸缩款(适用0.9-1.2m)' },
						{ name: '固定款(1.9m)' },
					],
				},
			],
			skus: [
				{
					id: 'sku_bed_12_1',
					specs: [
						{ name: '款式', valueName: 'U型支架' },
						{ name: '长度', valueName: '伸缩款(适用0.9-1.2m)' },
					],
					price: 35.9,
					oldPrice: 59.9,
					inventory: 50,
				},
				{
					id: 'sku_bed_12_2',
					specs: [
						{ name: '款式', valueName: 'U型支架' },
						{ name: '长度', valueName: '固定款(1.9m)' },
					],
					price: 29.9,
					oldPrice: 49.9,
					inventory: 45,
				},
				{
					id: 'sku_bed_12_3',
					specs: [
						{ name: '款式', valueName: '全框支架' },
						{ name: '长度', valueName: '伸缩款(适用0.9-1.2m)' },
					],
					price: 49.9,
					oldPrice: 79.9,
					inventory: 40,
				},
				{
					id: 'sku_bed_12_4',
					specs: [
						{ name: '款式', valueName: '全框支架' },
						{ name: '长度', valueName: '固定款(1.9m)' },
					],
					price: 42.9,
					oldPrice: 69.9,
					inventory: 35,
				},
			],
		},
		{
			name: '珊瑚绒毯子午睡毯',
			desc: '加厚珊瑚绒，柔软亲肤，办公室午睡或宿舍盖毯',
			brand: { name: '暖绒绒' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '100x120cm' }, { name: '120x200cm' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '米白' },
						{ name: '浅灰' },
						{ name: '粉紫' },
					],
				},
			],
			skus: [
				{
					id: 'sku_bed_13_1',
					specs: [
						{ name: '尺寸', valueName: '100x120cm' },
						{ name: '颜色', valueName: '米白' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 100,
				},
				{
					id: 'sku_bed_13_2',
					specs: [
						{ name: '尺寸', valueName: '100x120cm' },
						{ name: '颜色', valueName: '浅灰' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 95,
				},
				{
					id: 'sku_bed_13_3',
					specs: [
						{ name: '尺寸', valueName: '100x120cm' },
						{ name: '颜色', valueName: '粉紫' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 90,
				},
				{
					id: 'sku_bed_13_4',
					specs: [
						{ name: '尺寸', valueName: '120x200cm' },
						{ name: '颜色', valueName: '米白' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 70,
				},
				{
					id: 'sku_bed_13_5',
					specs: [
						{ name: '尺寸', valueName: '120x200cm' },
						{ name: '颜色', valueName: '浅灰' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 65,
				},
				{
					id: 'sku_bed_13_6',
					specs: [
						{ name: '尺寸', valueName: '120x200cm' },
						{ name: '颜色', valueName: '粉紫' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 60,
				},
			],
		},
		{
			name: '耳塞式眼罩二合一',
			desc: '遮光眼罩附带降噪耳塞，睡觉神器组合装',
			brand: { name: '安眠宝' },
			specs: [
				{
					name: '眼罩颜色',
					values: [{ name: '黑色' }, { name: '藏青' }],
				},
				{
					name: '耳塞对数',
					values: [{ name: '含1对' }, { name: '含3对' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_14_1',
					specs: [
						{ name: '眼罩颜色', valueName: '黑色' },
						{ name: '耳塞对数', valueName: '含1对' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_bed_14_2',
					specs: [
						{ name: '眼罩颜色', valueName: '黑色' },
						{ name: '耳塞对数', valueName: '含3对' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 90,
				},
				{
					id: 'sku_bed_14_3',
					specs: [
						{ name: '眼罩颜色', valueName: '藏青' },
						{ name: '耳塞对数', valueName: '含1对' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_bed_14_4',
					specs: [
						{ name: '眼罩颜色', valueName: '藏青' },
						{ name: '耳塞对数', valueName: '含3对' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 85,
				},
			],
		},
		{
			name: '荞麦枕头护颈椎枕',
			desc: '天然荞麦壳填充，可高低调节，透气凉爽',
			brand: { name: '草本眠' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '标准款(40x60)' },
						{ name: '加大款(48x74)' },
					],
				},
				{
					name: '填充量',
					values: [{ name: '标准填充' }, { name: '加量填充' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_15_1',
					specs: [
						{ name: '尺寸', valueName: '标准款(40x60)' },
						{ name: '填充量', valueName: '标准填充' },
					],
					price: 35.9,
					oldPrice: 59.9,
					inventory: 60,
				},
				{
					id: 'sku_bed_15_2',
					specs: [
						{ name: '尺寸', valueName: '标准款(40x60)' },
						{ name: '填充量', valueName: '加量填充' },
					],
					price: 42.9,
					oldPrice: 69.9,
					inventory: 50,
				},
				{
					id: 'sku_bed_15_3',
					specs: [
						{ name: '尺寸', valueName: '加大款(48x74)' },
						{ name: '填充量', valueName: '标准填充' },
					],
					price: 45.9,
					oldPrice: 75.9,
					inventory: 45,
				},
				{
					id: 'sku_bed_15_4',
					specs: [
						{ name: '尺寸', valueName: '加大款(48x74)' },
						{ name: '填充量', valueName: '加量填充' },
					],
					price: 52.9,
					oldPrice: 85.9,
					inventory: 40,
				},
			],
		},
		{
			name: '宿舍床梯垫防滑垫',
			desc: '海绵包覆床梯，上下床防硌脚，可水洗',
			brand: { name: '安全家' },
			specs: [
				{
					name: '长度',
					values: [
						{ name: '2米(上下铺专用)' },
						{ name: '5米(上床下桌专用)' },
					],
				},
				{ name: '颜色', values: [{ name: '米色' }, { name: '浅蓝' }] },
			],
			skus: [
				{
					id: 'sku_bed_16_1',
					specs: [
						{ name: '长度', valueName: '2米(上下铺专用)' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_bed_16_2',
					specs: [
						{ name: '长度', valueName: '2米(上下铺专用)' },
						{ name: '颜色', valueName: '浅蓝' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 140,
				},
				{
					id: 'sku_bed_16_3',
					specs: [
						{ name: '长度', valueName: '5米(上床下桌专用)' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 100,
				},
				{
					id: 'sku_bed_16_4',
					specs: [
						{ name: '长度', valueName: '5米(上床下桌专用)' },
						{ name: '颜色', valueName: '浅蓝' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 95,
				},
			],
		},
		{
			name: '空调被夏凉被单人',
			desc: '轻薄透气，可机洗，夏季宿舍空调房必备',
			brand: { name: '清凉一夏' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '150x200cm' }, { name: '180x220cm' }],
				},
				{
					name: '花色',
					values: [
						{ name: '纯色灰' },
						{ name: '小碎花' },
						{ name: '条纹' },
					],
				},
			],
			skus: [
				{
					id: 'sku_bed_17_1',
					specs: [
						{ name: '尺寸', valueName: '150x200cm' },
						{ name: '花色', valueName: '纯色灰' },
					],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 80,
				},
				{
					id: 'sku_bed_17_2',
					specs: [
						{ name: '尺寸', valueName: '150x200cm' },
						{ name: '花色', valueName: '小碎花' },
					],
					price: 49.9,
					oldPrice: 85.9,
					inventory: 75,
				},
				{
					id: 'sku_bed_17_3',
					specs: [
						{ name: '尺寸', valueName: '150x200cm' },
						{ name: '花色', valueName: '条纹' },
					],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 70,
				},
				{
					id: 'sku_bed_17_4',
					specs: [
						{ name: '尺寸', valueName: '180x220cm' },
						{ name: '花色', valueName: '纯色灰' },
					],
					price: 55.9,
					oldPrice: 95.9,
					inventory: 60,
				},
				{
					id: 'sku_bed_17_5',
					specs: [
						{ name: '尺寸', valueName: '180x220cm' },
						{ name: '花色', valueName: '小碎花' },
					],
					price: 59.9,
					oldPrice: 99.9,
					inventory: 55,
				},
				{
					id: 'sku_bed_17_6',
					specs: [
						{ name: '尺寸', valueName: '180x220cm' },
						{ name: '花色', valueName: '条纹' },
					],
					price: 55.9,
					oldPrice: 95.9,
					inventory: 50,
				},
			],
		},
		{
			name: '床头软包靠垫大靠背',
			desc: '榻榻米风格，可拆洗，靠着看书玩手机不累',
			brand: { name: '舒适靠' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '单人(60x50cm)' },
						{ name: '双人(90x50cm)' },
					],
				},
				{
					name: '颜色',
					values: [
						{ name: '浅灰' },
						{ name: '卡其' },
						{ name: '藏蓝' },
					],
				},
			],
			skus: [
				{
					id: 'sku_bed_18_1',
					specs: [
						{ name: '尺寸', valueName: '单人(60x50cm)' },
						{ name: '颜色', valueName: '浅灰' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 70,
				},
				{
					id: 'sku_bed_18_2',
					specs: [
						{ name: '尺寸', valueName: '单人(60x50cm)' },
						{ name: '颜色', valueName: '卡其' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 65,
				},
				{
					id: 'sku_bed_18_3',
					specs: [
						{ name: '尺寸', valueName: '单人(60x50cm)' },
						{ name: '颜色', valueName: '藏蓝' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 60,
				},
				{
					id: 'sku_bed_18_4',
					specs: [
						{ name: '尺寸', valueName: '双人(90x50cm)' },
						{ name: '颜色', valueName: '浅灰' },
					],
					price: 55.9,
					oldPrice: 95.9,
					inventory: 50,
				},
				{
					id: 'sku_bed_18_5',
					specs: [
						{ name: '尺寸', valueName: '双人(90x50cm)' },
						{ name: '颜色', valueName: '卡其' },
					],
					price: 55.9,
					oldPrice: 95.9,
					inventory: 45,
				},
				{
					id: 'sku_bed_18_6',
					specs: [
						{ name: '尺寸', valueName: '双人(90x50cm)' },
						{ name: '颜色', valueName: '藏蓝' },
					],
					price: 55.9,
					oldPrice: 95.9,
					inventory: 40,
				},
			],
		},
		{
			name: '宿舍床帘顶片防尘',
			desc: '床帘配套顶片，防尘防灰，遮挡上方灯光',
			brand: { name: '遮光专家' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '90x190cm床适用' },
						{ name: '90x200cm床适用' },
					],
				},
				{
					name: '颜色',
					values: [{ name: '同色系灰' }, { name: '同色系蓝' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_19_1',
					specs: [
						{ name: '尺寸', valueName: '90x190cm床适用' },
						{ name: '颜色', valueName: '同色系灰' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_bed_19_2',
					specs: [
						{ name: '尺寸', valueName: '90x190cm床适用' },
						{ name: '颜色', valueName: '同色系蓝' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 95,
				},
				{
					id: 'sku_bed_19_3',
					specs: [
						{ name: '尺寸', valueName: '90x200cm床适用' },
						{ name: '颜色', valueName: '同色系灰' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 85,
				},
				{
					id: 'sku_bed_19_4',
					specs: [
						{ name: '尺寸', valueName: '90x200cm床适用' },
						{ name: '颜色', valueName: '同色系蓝' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 80,
				},
			],
		},
		{
			name: '宿舍专用枕套一对装',
			desc: '信封式开口，换洗方便，48x74cm标准尺寸',
			brand: { name: '棉柔坊' },
			specs: [
				{
					name: '材质',
					values: [{ name: '纯棉' }, { name: '水洗棉' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '条纹' },
						{ name: '格子' },
					],
				},
			],
			skus: [
				{
					id: 'sku_bed_20_1',
					specs: [
						{ name: '材质', valueName: '纯棉' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 90,
				},
				{
					id: 'sku_bed_20_2',
					specs: [
						{ name: '材质', valueName: '纯棉' },
						{ name: '颜色', valueName: '条纹' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 85,
				},
				{
					id: 'sku_bed_20_3',
					specs: [
						{ name: '材质', valueName: '纯棉' },
						{ name: '颜色', valueName: '格子' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 80,
				},
				{
					id: 'sku_bed_20_4',
					specs: [
						{ name: '材质', valueName: '水洗棉' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 100,
				},
				{
					id: 'sku_bed_20_5',
					specs: [
						{ name: '材质', valueName: '水洗棉' },
						{ name: '颜色', valueName: '条纹' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 95,
				},
				{
					id: 'sku_bed_20_6',
					specs: [
						{ name: '材质', valueName: '水洗棉' },
						{ name: '颜色', valueName: '格子' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 90,
				},
			],
		},
		{
			name: '宿舍床垫防滑固定器',
			desc: '床单床垫固定夹，防止床单乱跑，4个装',
			brand: { name: '固定王' },
			specs: [
				{
					name: '款式',
					values: [{ name: '三角夹款' }, { name: '长条夹款' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '透明' }] },
			],
			skus: [
				{
					id: 'sku_bed_21_1',
					specs: [
						{ name: '款式', valueName: '三角夹款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 200,
				},
				{
					id: 'sku_bed_21_2',
					specs: [
						{ name: '款式', valueName: '三角夹款' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 180,
				},
				{
					id: 'sku_bed_21_3',
					specs: [
						{ name: '款式', valueName: '长条夹款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_bed_21_4',
					specs: [
						{ name: '款式', valueName: '长条夹款' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 140,
				},
			],
		},
		{
			name: '宿舍床帘绑带一对装',
			desc: '磁吸式设计，白天收纳床帘，方便进出',
			brand: { name: '绑绑好' },
			specs: [
				{
					name: '款式',
					values: [{ name: '磁吸款' }, { name: '蝴蝶结款' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '灰色' },
						{ name: '米色' },
						{ name: '粉色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_bed_22_1',
					specs: [
						{ name: '款式', valueName: '磁吸款' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 180,
				},
				{
					id: 'sku_bed_22_2',
					specs: [
						{ name: '款式', valueName: '磁吸款' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 170,
				},
				{
					id: 'sku_bed_22_3',
					specs: [
						{ name: '款式', valueName: '磁吸款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 160,
				},
				{
					id: 'sku_bed_22_4',
					specs: [
						{ name: '款式', valueName: '蝴蝶结款' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 200,
				},
				{
					id: 'sku_bed_22_5',
					specs: [
						{ name: '款式', valueName: '蝴蝶结款' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 190,
				},
				{
					id: 'sku_bed_22_6',
					specs: [
						{ name: '款式', valueName: '蝴蝶结款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 180,
				},
			],
		},
		{
			name: '宿舍专用被套单件',
			desc: '150x200cm单人尺寸，拉链开口，多种花色',
			brand: { name: '被套专家' },
			specs: [
				{ name: '材质', values: [{ name: '纯棉' }, { name: '涤棉' }] },
				{
					name: '花色',
					values: [
						{ name: '纯色' },
						{ name: '几何' },
						{ name: '卡通' },
					],
				},
			],
			skus: [
				{
					id: 'sku_bed_23_1',
					specs: [
						{ name: '材质', valueName: '纯棉' },
						{ name: '花色', valueName: '纯色' },
					],
					price: 49.9,
					oldPrice: 85.9,
					inventory: 70,
				},
				{
					id: 'sku_bed_23_2',
					specs: [
						{ name: '材质', valueName: '纯棉' },
						{ name: '花色', valueName: '几何' },
					],
					price: 55.9,
					oldPrice: 95.9,
					inventory: 65,
				},
				{
					id: 'sku_bed_23_3',
					specs: [
						{ name: '材质', valueName: '纯棉' },
						{ name: '花色', valueName: '卡通' },
					],
					price: 55.9,
					oldPrice: 95.9,
					inventory: 60,
				},
				{
					id: 'sku_bed_23_4',
					specs: [
						{ name: '材质', valueName: '涤棉' },
						{ name: '花色', valueName: '纯色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 90,
				},
				{
					id: 'sku_bed_23_5',
					specs: [
						{ name: '材质', valueName: '涤棉' },
						{ name: '花色', valueName: '几何' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 85,
				},
				{
					id: 'sku_bed_23_6',
					specs: [
						{ name: '材质', valueName: '涤棉' },
						{ name: '花色', valueName: '卡通' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 80,
				},
			],
		},
		{
			name: '宿舍床帘挂钩免打孔',
			desc: '强力粘胶挂钩，挂床帘蚊帐，不伤床架',
			brand: { name: '粘粘挂' },
			specs: [
				{
					name: '数量',
					values: [{ name: '8个装' }, { name: '16个装' }],
				},
				{ name: '颜色', values: [{ name: '透明' }, { name: '白色' }] },
			],
			skus: [
				{
					id: 'sku_bed_24_1',
					specs: [
						{ name: '数量', valueName: '8个装' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 200,
				},
				{
					id: 'sku_bed_24_2',
					specs: [
						{ name: '数量', valueName: '8个装' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 190,
				},
				{
					id: 'sku_bed_24_3',
					specs: [
						{ name: '数量', valueName: '16个装' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 150,
				},
				{
					id: 'sku_bed_24_4',
					specs: [
						{ name: '数量', valueName: '16个装' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
			],
		},
		{
			name: '宿舍专用枕巾一对',
			desc: '纱布材质，吸汗透气，保护枕头清洁',
			brand: { name: '枕巾坊' },
			specs: [
				{ name: '层数', values: [{ name: '单层' }, { name: '双层' }] },
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '蓝色' },
						{ name: '粉色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_bed_25_1',
					specs: [
						{ name: '层数', valueName: '单层' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_bed_25_2',
					specs: [
						{ name: '层数', valueName: '单层' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 115,
				},
				{
					id: 'sku_bed_25_3',
					specs: [
						{ name: '层数', valueName: '单层' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_bed_25_4',
					specs: [
						{ name: '层数', valueName: '双层' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 90,
				},
				{
					id: 'sku_bed_25_5',
					specs: [
						{ name: '层数', valueName: '双层' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 85,
				},
				{
					id: 'sku_bed_25_6',
					specs: [
						{ name: '层数', valueName: '双层' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 80,
				},
			],
		},
		{
			name: '宿舍床垫保护套床笠',
			desc: '360度全包裹，防水防螨，保护床垫',
			brand: { name: '保护神' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '90x190cm' }, { name: '90x200cm' }],
				},
				{
					name: '功能',
					values: [{ name: '普通款' }, { name: '防水款' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_26_1',
					specs: [
						{ name: '尺寸', valueName: '90x190cm' },
						{ name: '功能', valueName: '普通款' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 80,
				},
				{
					id: 'sku_bed_26_2',
					specs: [
						{ name: '尺寸', valueName: '90x190cm' },
						{ name: '功能', valueName: '防水款' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 60,
				},
				{
					id: 'sku_bed_26_3',
					specs: [
						{ name: '尺寸', valueName: '90x200cm' },
						{ name: '功能', valueName: '普通款' },
					],
					price: 32.9,
					oldPrice: 58.0,
					inventory: 70,
				},
				{
					id: 'sku_bed_26_4',
					specs: [
						{ name: '尺寸', valueName: '90x200cm' },
						{ name: '功能', valueName: '防水款' },
					],
					price: 42.9,
					oldPrice: 75.9,
					inventory: 55,
				},
			],
		},
		{
			name: '宿舍床头手机挂袋',
			desc: '挂床侧放手机遥控器，布艺材质，多口袋设计',
			brand: { name: '挂袋王' },
			specs: [
				{
					name: '款式',
					values: [
						{ name: '单口袋' },
						{ name: '三口袋' },
						{ name: '五口袋' },
					],
				},
				{ name: '颜色', values: [{ name: '灰色' }, { name: '米色' }] },
			],
			skus: [
				{
					id: 'sku_bed_27_1',
					specs: [
						{ name: '款式', valueName: '单口袋' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 150,
				},
				{
					id: 'sku_bed_27_2',
					specs: [
						{ name: '款式', valueName: '单口袋' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 140,
				},
				{
					id: 'sku_bed_27_3',
					specs: [
						{ name: '款式', valueName: '三口袋' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_bed_27_4',
					specs: [
						{ name: '款式', valueName: '三口袋' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_bed_27_5',
					specs: [
						{ name: '款式', valueName: '五口袋' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_bed_27_6',
					specs: [
						{ name: '款式', valueName: '五口袋' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 95,
				},
			],
		},
		{
			name: '宿舍专用褥子垫被',
			desc: '棉花填充，厚实保暖，铺床必备',
			brand: { name: '暖棉棉' },
			specs: [
				{
					name: '重量',
					values: [{ name: '2斤' }, { name: '3斤' }, { name: '4斤' }],
				},
				{
					name: '尺寸',
					values: [{ name: '90x190cm' }, { name: '90x200cm' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_28_1',
					specs: [
						{ name: '重量', valueName: '2斤' },
						{ name: '尺寸', valueName: '90x190cm' },
					],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 60,
				},
				{
					id: 'sku_bed_28_2',
					specs: [
						{ name: '重量', valueName: '2斤' },
						{ name: '尺寸', valueName: '90x200cm' },
					],
					price: 49.9,
					oldPrice: 85.9,
					inventory: 55,
				},
				{
					id: 'sku_bed_28_3',
					specs: [
						{ name: '重量', valueName: '3斤' },
						{ name: '尺寸', valueName: '90x190cm' },
					],
					price: 59.9,
					oldPrice: 99.9,
					inventory: 50,
				},
				{
					id: 'sku_bed_28_4',
					specs: [
						{ name: '重量', valueName: '3斤' },
						{ name: '尺寸', valueName: '90x200cm' },
					],
					price: 65.9,
					oldPrice: 109.9,
					inventory: 45,
				},
				{
					id: 'sku_bed_28_5',
					specs: [
						{ name: '重量', valueName: '4斤' },
						{ name: '尺寸', valueName: '90x190cm' },
					],
					price: 75.9,
					oldPrice: 125.9,
					inventory: 35,
				},
				{
					id: 'sku_bed_28_6',
					specs: [
						{ name: '重量', valueName: '4斤' },
						{ name: '尺寸', valueName: '90x200cm' },
					],
					price: 82.9,
					oldPrice: 135.9,
					inventory: 30,
				},
			],
		},
		{
			name: '宿舍床帘遮光布单片',
			desc: '单独购买遮光布，可搭配支架使用，加厚遮光',
			brand: { name: '遮光大师' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '1.2x2.0m' }, { name: '1.5x2.0m' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '深灰' },
						{ name: '藏蓝' },
						{ name: '墨绿' },
					],
				},
			],
			skus: [
				{
					id: 'sku_bed_29_1',
					specs: [
						{ name: '尺寸', valueName: '1.2x2.0m' },
						{ name: '颜色', valueName: '深灰' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
				{
					id: 'sku_bed_29_2',
					specs: [
						{ name: '尺寸', valueName: '1.2x2.0m' },
						{ name: '颜色', valueName: '藏蓝' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 75,
				},
				{
					id: 'sku_bed_29_3',
					specs: [
						{ name: '尺寸', valueName: '1.2x2.0m' },
						{ name: '颜色', valueName: '墨绿' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 70,
				},
				{
					id: 'sku_bed_29_4',
					specs: [
						{ name: '尺寸', valueName: '1.5x2.0m' },
						{ name: '颜色', valueName: '深灰' },
					],
					price: 32.9,
					oldPrice: 58.0,
					inventory: 60,
				},
				{
					id: 'sku_bed_29_5',
					specs: [
						{ name: '尺寸', valueName: '1.5x2.0m' },
						{ name: '颜色', valueName: '藏蓝' },
					],
					price: 32.9,
					oldPrice: 58.0,
					inventory: 55,
				},
				{
					id: 'sku_bed_29_6',
					specs: [
						{ name: '尺寸', valueName: '1.5x2.0m' },
						{ name: '颜色', valueName: '墨绿' },
					],
					price: 32.9,
					oldPrice: 58.0,
					inventory: 50,
				},
			],
		},
		{
			name: '宿舍床头靠垫软包',
			desc: '三角造型，支撑腰背，可拆洗外套',
			brand: { name: '靠靠好' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '小号(45cm)' },
						{ name: '中号(55cm)' },
						{ name: '大号(65cm)' },
					],
				},
				{ name: '颜色', values: [{ name: '浅灰' }, { name: '粉色' }] },
			],
			skus: [
				{
					id: 'sku_bed_30_1',
					specs: [
						{ name: '尺寸', valueName: '小号(45cm)' },
						{ name: '颜色', valueName: '浅灰' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 70,
				},
				{
					id: 'sku_bed_30_2',
					specs: [
						{ name: '尺寸', valueName: '小号(45cm)' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 65,
				},
				{
					id: 'sku_bed_30_3',
					specs: [
						{ name: '尺寸', valueName: '中号(55cm)' },
						{ name: '颜色', valueName: '浅灰' },
					],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 60,
				},
				{
					id: 'sku_bed_30_4',
					specs: [
						{ name: '尺寸', valueName: '中号(55cm)' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 55,
				},
				{
					id: 'sku_bed_30_5',
					specs: [
						{ name: '尺寸', valueName: '大号(65cm)' },
						{ name: '颜色', valueName: '浅灰' },
					],
					price: 55.9,
					oldPrice: 95.9,
					inventory: 45,
				},
				{
					id: 'sku_bed_30_6',
					specs: [
						{ name: '尺寸', valueName: '大号(65cm)' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 55.9,
					oldPrice: 95.9,
					inventory: 40,
				},
			],
		},
		{
			name: '宿舍专用床单固定扣',
			desc: '床单防滑神器，四角固定，隐形设计',
			brand: { name: '固定扣' },
			specs: [
				{
					name: '数量',
					values: [{ name: '4个装' }, { name: '8个装' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '透明' }] },
			],
			skus: [
				{
					id: 'sku_bed_31_1',
					specs: [
						{ name: '数量', valueName: '4个装' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 200,
				},
				{
					id: 'sku_bed_31_2',
					specs: [
						{ name: '数量', valueName: '4个装' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 190,
				},
				{
					id: 'sku_bed_31_3',
					specs: [
						{ name: '数量', valueName: '8个装' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 150,
				},
				{
					id: 'sku_bed_31_4',
					specs: [
						{ name: '数量', valueName: '8个装' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 140,
				},
			],
		},
		{
			name: '宿舍床帘蚊帐一体式',
			desc: '遮光防蚊二合一，拉链设计，进出方便',
			brand: { name: '一体式' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '0.9m床' },
						{ name: '1.0m床' },
						{ name: '1.2m床' },
					],
				},
				{
					name: '开门',
					values: [{ name: '单开门' }, { name: '双开门' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_32_1',
					specs: [
						{ name: '尺寸', valueName: '0.9m床' },
						{ name: '开门', valueName: '单开门' },
					],
					price: 59.9,
					oldPrice: 99.9,
					inventory: 50,
				},
				{
					id: 'sku_bed_32_2',
					specs: [
						{ name: '尺寸', valueName: '0.9m床' },
						{ name: '开门', valueName: '双开门' },
					],
					price: 69.9,
					oldPrice: 115.9,
					inventory: 45,
				},
				{
					id: 'sku_bed_32_3',
					specs: [
						{ name: '尺寸', valueName: '1.0m床' },
						{ name: '开门', valueName: '单开门' },
					],
					price: 65.9,
					oldPrice: 109.9,
					inventory: 40,
				},
				{
					id: 'sku_bed_32_4',
					specs: [
						{ name: '尺寸', valueName: '1.0m床' },
						{ name: '开门', valueName: '双开门' },
					],
					price: 75.9,
					oldPrice: 125.9,
					inventory: 35,
				},
				{
					id: 'sku_bed_32_5',
					specs: [
						{ name: '尺寸', valueName: '1.2m床' },
						{ name: '开门', valueName: '单开门' },
					],
					price: 72.9,
					oldPrice: 119.9,
					inventory: 30,
				},
				{
					id: 'sku_bed_32_6',
					specs: [
						{ name: '尺寸', valueName: '1.2m床' },
						{ name: '开门', valueName: '双开门' },
					],
					price: 82.9,
					oldPrice: 135.9,
					inventory: 25,
				},
			],
		},
		{
			name: '宿舍专用床垫加厚款',
			desc: '10cm加厚海绵，软硬适中，回弹好',
			brand: { name: '厚垫王' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '90x190cm' }, { name: '90x200cm' }],
				},
				{
					name: '密度',
					values: [{ name: '标准密度' }, { name: '高密度' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_33_1',
					specs: [
						{ name: '尺寸', valueName: '90x190cm' },
						{ name: '密度', valueName: '标准密度' },
					],
					price: 79.9,
					oldPrice: 135.9,
					inventory: 40,
				},
				{
					id: 'sku_bed_33_2',
					specs: [
						{ name: '尺寸', valueName: '90x190cm' },
						{ name: '密度', valueName: '高密度' },
					],
					price: 99.9,
					oldPrice: 165.9,
					inventory: 35,
				},
				{
					id: 'sku_bed_33_3',
					specs: [
						{ name: '尺寸', valueName: '90x200cm' },
						{ name: '密度', valueName: '标准密度' },
					],
					price: 85.9,
					oldPrice: 145.9,
					inventory: 38,
				},
				{
					id: 'sku_bed_33_4',
					specs: [
						{ name: '尺寸', valueName: '90x200cm' },
						{ name: '密度', valueName: '高密度' },
					],
					price: 105.9,
					oldPrice: 175.9,
					inventory: 32,
				},
			],
		},
		{
			name: '宿舍床帘滑轮轨道',
			desc: '静音滑轮，拉动顺畅，安装简单',
			brand: { name: '顺滑轨' },
			specs: [
				{ name: '长度', values: [{ name: '1.9m' }, { name: '2.0m' }] },
				{ name: '颜色', values: [{ name: '白色' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_bed_34_1',
					specs: [
						{ name: '长度', valueName: '1.9m' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
				{
					id: 'sku_bed_34_2',
					specs: [
						{ name: '长度', valueName: '1.9m' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 75,
				},
				{
					id: 'sku_bed_34_3',
					specs: [
						{ name: '长度', valueName: '2.0m' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 21.9,
					oldPrice: 38.0,
					inventory: 70,
				},
				{
					id: 'sku_bed_34_4',
					specs: [
						{ name: '长度', valueName: '2.0m' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 21.9,
					oldPrice: 38.0,
					inventory: 65,
				},
			],
		},
		{
			name: '宿舍专用被子固定器',
			desc: '被角固定神器，防止被子跑位，无针安全',
			brand: { name: '固定神' },
			specs: [
				{
					name: '数量',
					values: [{ name: '4个装' }, { name: '8个装' }],
				},
				{ name: '颜色', values: [{ name: '透明' }, { name: '彩色' }] },
			],
			skus: [
				{
					id: 'sku_bed_35_1',
					specs: [
						{ name: '数量', valueName: '4个装' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 180,
				},
				{
					id: 'sku_bed_35_2',
					specs: [
						{ name: '数量', valueName: '4个装' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 160,
				},
				{
					id: 'sku_bed_35_3',
					specs: [
						{ name: '数量', valueName: '8个装' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'sku_bed_35_4',
					specs: [
						{ name: '数量', valueName: '8个装' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 120,
				},
			],
		},
		{
			name: '宿舍床头置物挂篮',
			desc: '布艺材质，放书籍杂物，挂钩设计',
			brand: { name: '挂篮王' },
			specs: [
				{
					name: '款式',
					values: [{ name: '单层款' }, { name: '双层款' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '灰色' },
						{ name: '米色' },
						{ name: '藏蓝' },
					],
				},
			],
			skus: [
				{
					id: 'sku_bed_36_1',
					specs: [
						{ name: '款式', valueName: '单层款' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_bed_36_2',
					specs: [
						{ name: '款式', valueName: '单层款' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 115,
				},
				{
					id: 'sku_bed_36_3',
					specs: [
						{ name: '款式', valueName: '单层款' },
						{ name: '颜色', valueName: '藏蓝' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_bed_36_4',
					specs: [
						{ name: '款式', valueName: '双层款' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_bed_36_5',
					specs: [
						{ name: '款式', valueName: '双层款' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 85,
				},
				{
					id: 'sku_bed_36_6',
					specs: [
						{ name: '款式', valueName: '双层款' },
						{ name: '颜色', valueName: '藏蓝' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
			],
		},
		{
			name: '宿舍床帘遮光帘头',
			desc: '遮挡顶部缝隙，增强遮光效果',
			brand: { name: '遮光帘' },
			specs: [
				{ name: '长度', values: [{ name: '1.2m' }, { name: '1.5m' }] },
				{ name: '颜色', values: [{ name: '深灰' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_bed_37_1',
					specs: [
						{ name: '长度', valueName: '1.2m' },
						{ name: '颜色', valueName: '深灰' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_bed_37_2',
					specs: [
						{ name: '长度', valueName: '1.2m' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 95,
				},
				{
					id: 'sku_bed_37_3',
					specs: [
						{ name: '长度', valueName: '1.5m' },
						{ name: '颜色', valueName: '深灰' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 85,
				},
				{
					id: 'sku_bed_37_4',
					specs: [
						{ name: '长度', valueName: '1.5m' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 80,
				},
			],
		},
		{
			name: '宿舍专用床垫收纳袋',
			desc: '换季收纳，防尘防潮，搬家打包神器',
			brand: { name: '收纳袋' },
			specs: [
				{ name: '尺寸', values: [{ name: '中号' }, { name: '大号' }] },
				{
					name: '材质',
					values: [{ name: '无纺布' }, { name: 'PEVA' }],
				},
			],
			skus: [
				{
					id: 'sku_bed_38_1',
					specs: [
						{ name: '尺寸', valueName: '中号' },
						{ name: '材质', valueName: '无纺布' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_bed_38_2',
					specs: [
						{ name: '尺寸', valueName: '中号' },
						{ name: '材质', valueName: 'PEVA' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 130,
				},
				{
					id: 'sku_bed_38_3',
					specs: [
						{ name: '尺寸', valueName: '大号' },
						{ name: '材质', valueName: '无纺布' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 120,
				},
				{
					id: 'sku_bed_38_4',
					specs: [
						{ name: '尺寸', valueName: '大号' },
						{ name: '材质', valueName: 'PEVA' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 100,
				},
			],
		},
		{
			name: '宿舍床头防撞条',
			desc: '海绵材质，防止撞头，柔软保护',
			brand: { name: '防撞条' },
			specs: [
				{ name: '长度', values: [{ name: '1米' }, { name: '2米' }] },
				{ name: '颜色', values: [{ name: '白色' }, { name: '灰色' }] },
			],
			skus: [
				{
					id: 'sku_bed_39_1',
					specs: [
						{ name: '长度', valueName: '1米' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 200,
				},
				{
					id: 'sku_bed_39_2',
					specs: [
						{ name: '长度', valueName: '1米' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 190,
				},
				{
					id: 'sku_bed_39_3',
					specs: [
						{ name: '长度', valueName: '2米' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 160,
				},
				{
					id: 'sku_bed_39_4',
					specs: [
						{ name: '长度', valueName: '2米' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 150,
				},
			],
		},
		{
			name: '宿舍床帘挂钩配件',
			desc: 'C型挂钩，挂床帘蚊帐，塑料材质不伤杆',
			brand: { name: '挂钩件' },
			specs: [
				{
					name: '数量',
					values: [{ name: '10个装' }, { name: '20个装' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_bed_40_1',
					specs: [
						{ name: '数量', valueName: '10个装' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 250,
				},
				{
					id: 'sku_bed_40_2',
					specs: [
						{ name: '数量', valueName: '10个装' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 240,
				},
				{
					id: 'sku_bed_40_3',
					specs: [
						{ name: '数量', valueName: '20个装' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 200,
				},
				{
					id: 'sku_bed_40_4',
					specs: [
						{ name: '数量', valueName: '20个装' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 190,
				},
			],
		},
	],
	洗漱用品: [
		{
			name: '便携旅行洗漱包分装套装',
			desc: '食品级硅胶分装瓶+防水洗漱包，出行必备',
			brand: { name: '旅途佳' },
			specs: [
				{
					name: '颜色',
					values: [
						{ name: '黑色' },
						{ name: '蓝色' },
						{ name: '粉色' },
					],
				},
				{
					name: '套装',
					values: [{ name: '3瓶装' }, { name: '5瓶装' }],
				},
			],
			skus: [
				{
					id: 'sku_wash_1_1',
					specs: [
						{ name: '颜色', valueName: '黑色' },
						{ name: '套装', valueName: '3瓶装' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
				{
					id: 'sku_wash_1_2',
					specs: [
						{ name: '颜色', valueName: '黑色' },
						{ name: '套装', valueName: '5瓶装' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 60,
				},
				{
					id: 'sku_wash_1_3',
					specs: [
						{ name: '颜色', valueName: '蓝色' },
						{ name: '套装', valueName: '3瓶装' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 75,
				},
				{
					id: 'sku_wash_1_4',
					specs: [
						{ name: '颜色', valueName: '蓝色' },
						{ name: '套装', valueName: '5瓶装' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 55,
				},
				{
					id: 'sku_wash_1_5',
					specs: [
						{ name: '颜色', valueName: '粉色' },
						{ name: '套装', valueName: '3瓶装' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_wash_1_6',
					specs: [
						{ name: '颜色', valueName: '粉色' },
						{ name: '套装', valueName: '5瓶装' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 65,
				},
			],
		},
		{
			name: '电动牙刷声波式充电款',
			desc: '5种清洁模式，IPX7防水，续航60天',
			brand: { name: '洁齿达' },
			specs: [
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '黑色' },
						{ name: '粉色' },
					],
				},
				{
					name: '配件',
					values: [{ name: '含4个刷头' }, { name: '含8个刷头' }],
				},
			],
			skus: [
				{
					id: 'sku_wash_2_1',
					specs: [
						{ name: '颜色', valueName: '白色' },
						{ name: '配件', valueName: '含4个刷头' },
					],
					price: 49.9,
					oldPrice: 89.9,
					inventory: 40,
				},
				{
					id: 'sku_wash_2_2',
					specs: [
						{ name: '颜色', valueName: '白色' },
						{ name: '配件', valueName: '含8个刷头' },
					],
					price: 59.9,
					oldPrice: 109.9,
					inventory: 30,
				},
				{
					id: 'sku_wash_2_3',
					specs: [
						{ name: '颜色', valueName: '黑色' },
						{ name: '配件', valueName: '含4个刷头' },
					],
					price: 49.9,
					oldPrice: 89.9,
					inventory: 35,
				},
				{
					id: 'sku_wash_2_4',
					specs: [
						{ name: '颜色', valueName: '黑色' },
						{ name: '配件', valueName: '含8个刷头' },
					],
					price: 59.9,
					oldPrice: 109.9,
					inventory: 25,
				},
				{
					id: 'sku_wash_2_5',
					specs: [
						{ name: '颜色', valueName: '粉色' },
						{ name: '配件', valueName: '含4个刷头' },
					],
					price: 49.9,
					oldPrice: 89.9,
					inventory: 50,
				},
				{
					id: 'sku_wash_2_6',
					specs: [
						{ name: '颜色', valueName: '粉色' },
						{ name: '配件', valueName: '含8个刷头' },
					],
					price: 59.9,
					oldPrice: 109.9,
					inventory: 35,
				},
			],
		},
		{
			name: '大容量按压式洗发水',
			desc: '500ml大容量，控油去屑，持久留香',
			brand: { name: '清扬' },
			specs: [
				{
					name: '功效',
					values: [
						{ name: '控油去屑' },
						{ name: '柔顺修护' },
						{ name: '深层清洁' },
					],
				},
				{
					name: '规格',
					values: [{ name: '500ml' }, { name: '500mlx2' }],
				},
			],
			skus: [
				{
					id: 'sku_wash_3_1',
					specs: [
						{ name: '功效', valueName: '控油去屑' },
						{ name: '规格', valueName: '500ml' },
					],
					price: 29.9,
					oldPrice: 45.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_3_2',
					specs: [
						{ name: '功效', valueName: '控油去屑' },
						{ name: '规格', valueName: '500mlx2' },
					],
					price: 49.9,
					oldPrice: 79.0,
					inventory: 60,
				},
				{
					id: 'sku_wash_3_3',
					specs: [
						{ name: '功效', valueName: '柔顺修护' },
						{ name: '规格', valueName: '500ml' },
					],
					price: 32.9,
					oldPrice: 48.0,
					inventory: 80,
				},
				{
					id: 'sku_wash_3_4',
					specs: [
						{ name: '功效', valueName: '柔顺修护' },
						{ name: '规格', valueName: '500mlx2' },
					],
					price: 55.9,
					oldPrice: 85.0,
					inventory: 50,
				},
				{
					id: 'sku_wash_3_5',
					specs: [
						{ name: '功效', valueName: '深层清洁' },
						{ name: '规格', valueName: '500ml' },
					],
					price: 29.9,
					oldPrice: 45.0,
					inventory: 90,
				},
				{
					id: 'sku_wash_3_6',
					specs: [
						{ name: '功效', valueName: '深层清洁' },
						{ name: '规格', valueName: '500mlx2' },
					],
					price: 49.9,
					oldPrice: 79.0,
					inventory: 55,
				},
			],
		},
		{
			name: '速干毛巾超细纤维运动巾',
			desc: '秒吸水速干，抗菌防臭，加厚款',
			brand: { name: '速干王' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '30x60cm' },
						{ name: '35x75cm' },
						{ name: '70x140cm' },
					],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '灰色' }] },
			],
			skus: [
				{
					id: 'sku_wash_4_1',
					specs: [
						{ name: '尺寸', valueName: '30x60cm' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_4_2',
					specs: [
						{ name: '尺寸', valueName: '30x60cm' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 140,
				},
				{
					id: 'sku_wash_4_3',
					specs: [
						{ name: '尺寸', valueName: '35x75cm' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 14.9,
					oldPrice: 25.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_4_4',
					specs: [
						{ name: '尺寸', valueName: '35x75cm' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 14.9,
					oldPrice: 25.0,
					inventory: 110,
				},
				{
					id: 'sku_wash_4_5',
					specs: [
						{ name: '尺寸', valueName: '70x140cm' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 25.9,
					oldPrice: 42.0,
					inventory: 80,
				},
				{
					id: 'sku_wash_4_6',
					specs: [
						{ name: '尺寸', valueName: '70x140cm' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 25.9,
					oldPrice: 42.0,
					inventory: 75,
				},
			],
		},
		{
			name: '洗面奶氨基酸温和洁面',
			desc: '氨基酸配方，温和不刺激，适合学生日常洁面',
			brand: { name: '芙丽芳丝' },
			specs: [
				{
					name: '肤质',
					values: [
						{ name: '油性肌肤' },
						{ name: '干性肌肤' },
						{ name: '敏感肌' },
					],
				},
				{ name: '规格', values: [{ name: '100g' }, { name: '150g' }] },
			],
			skus: [
				{
					id: 'sku_wash_5_1',
					specs: [
						{ name: '肤质', valueName: '油性肌肤' },
						{ name: '规格', valueName: '100g' },
					],
					price: 35.0,
					oldPrice: 55.0,
					inventory: 60,
				},
				{
					id: 'sku_wash_5_2',
					specs: [
						{ name: '肤质', valueName: '油性肌肤' },
						{ name: '规格', valueName: '150g' },
					],
					price: 45.0,
					oldPrice: 72.0,
					inventory: 45,
				},
				{
					id: 'sku_wash_5_3',
					specs: [
						{ name: '肤质', valueName: '干性肌肤' },
						{ name: '规格', valueName: '100g' },
					],
					price: 35.0,
					oldPrice: 55.0,
					inventory: 55,
				},
				{
					id: 'sku_wash_5_4',
					specs: [
						{ name: '肤质', valueName: '干性肌肤' },
						{ name: '规格', valueName: '150g' },
					],
					price: 45.0,
					oldPrice: 72.0,
					inventory: 40,
				},
				{
					id: 'sku_wash_5_5',
					specs: [
						{ name: '肤质', valueName: '敏感肌' },
						{ name: '规格', valueName: '100g' },
					],
					price: 39.0,
					oldPrice: 62.0,
					inventory: 70,
				},
				{
					id: 'sku_wash_5_6',
					specs: [
						{ name: '肤质', valueName: '敏感肌' },
						{ name: '规格', valueName: '150g' },
					],
					price: 49.0,
					oldPrice: 78.0,
					inventory: 50,
				},
			],
		},
		{
			name: '沐浴露持久留香沐浴乳',
			desc: '温和清洁，持久留香48小时，泡沫丰富',
			brand: { name: '舒肤佳' },
			specs: [
				{
					name: '香型',
					values: [
						{ name: '白茶清香' },
						{ name: '玫瑰花香' },
						{ name: '海洋清新' },
					],
				},
				{
					name: '规格',
					values: [{ name: '400ml' }, { name: '720ml' }],
				},
			],
			skus: [
				{
					id: 'sku_wash_6_1',
					specs: [
						{ name: '香型', valueName: '白茶清香' },
						{ name: '规格', valueName: '400ml' },
					],
					price: 22.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_wash_6_2',
					specs: [
						{ name: '香型', valueName: '白茶清香' },
						{ name: '规格', valueName: '720ml' },
					],
					price: 35.9,
					oldPrice: 55.0,
					inventory: 70,
				},
				{
					id: 'sku_wash_6_3',
					specs: [
						{ name: '香型', valueName: '玫瑰花香' },
						{ name: '规格', valueName: '400ml' },
					],
					price: 22.9,
					oldPrice: 35.0,
					inventory: 85,
				},
				{
					id: 'sku_wash_6_4',
					specs: [
						{ name: '香型', valueName: '玫瑰花香' },
						{ name: '规格', valueName: '720ml' },
					],
					price: 35.9,
					oldPrice: 55.0,
					inventory: 65,
				},
				{
					id: 'sku_wash_6_5',
					specs: [
						{ name: '香型', valueName: '海洋清新' },
						{ name: '规格', valueName: '400ml' },
					],
					price: 22.9,
					oldPrice: 35.0,
					inventory: 95,
				},
				{
					id: 'sku_wash_6_6',
					specs: [
						{ name: '香型', valueName: '海洋清新' },
						{ name: '规格', valueName: '720ml' },
					],
					price: 35.9,
					oldPrice: 55.0,
					inventory: 75,
				},
			],
		},
		{
			name: '折叠水杯硅胶便携杯',
			desc: '食品级硅胶，折叠后仅4cm，带盖防尘',
			brand: { name: '轻行' },
			specs: [
				{
					name: '容量',
					values: [
						{ name: '250ml' },
						{ name: '350ml' },
						{ name: '500ml' },
					],
				},
				{ name: '颜色', values: [{ name: '透明' }, { name: '绿色' }] },
			],
			skus: [
				{
					id: 'sku_wash_7_1',
					specs: [
						{ name: '容量', valueName: '250ml' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_7_2',
					specs: [
						{ name: '容量', valueName: '250ml' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_wash_7_3',
					specs: [
						{ name: '容量', valueName: '350ml' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 15.9,
					oldPrice: 26.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_7_4',
					specs: [
						{ name: '容量', valueName: '350ml' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 15.9,
					oldPrice: 26.0,
					inventory: 95,
				},
				{
					id: 'sku_wash_7_5',
					specs: [
						{ name: '容量', valueName: '500ml' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 19.9,
					oldPrice: 32.0,
					inventory: 80,
				},
				{
					id: 'sku_wash_7_6',
					specs: [
						{ name: '容量', valueName: '500ml' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 19.9,
					oldPrice: 32.0,
					inventory: 75,
				},
			],
		},
		{
			name: '洗衣液宿舍专用除菌款',
			desc: '深层洁净，除菌99.9%，低泡易漂洗',
			brand: { name: '蓝月亮' },
			specs: [
				{
					name: '功效',
					values: [
						{ name: '除菌除螨' },
						{ name: '深层洁净' },
						{ name: '柔顺护色' },
					],
				},
				{ name: '规格', values: [{ name: '1kg' }, { name: '2kg' }] },
			],
			skus: [
				{
					id: 'sku_wash_8_1',
					specs: [
						{ name: '功效', valueName: '除菌除螨' },
						{ name: '规格', valueName: '1kg' },
					],
					price: 15.9,
					oldPrice: 25.0,
					inventory: 110,
				},
				{
					id: 'sku_wash_8_2',
					specs: [
						{ name: '功效', valueName: '除菌除螨' },
						{ name: '规格', valueName: '2kg' },
					],
					price: 25.9,
					oldPrice: 42.0,
					inventory: 80,
				},
				{
					id: 'sku_wash_8_3',
					specs: [
						{ name: '功效', valueName: '深层洁净' },
						{ name: '规格', valueName: '1kg' },
					],
					price: 14.9,
					oldPrice: 23.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_8_4',
					specs: [
						{ name: '功效', valueName: '深层洁净' },
						{ name: '规格', valueName: '2kg' },
					],
					price: 23.9,
					oldPrice: 39.0,
					inventory: 75,
				},
				{
					id: 'sku_wash_8_5',
					specs: [
						{ name: '功效', valueName: '柔顺护色' },
						{ name: '规格', valueName: '1kg' },
					],
					price: 16.9,
					oldPrice: 27.0,
					inventory: 90,
				},
				{
					id: 'sku_wash_8_6',
					specs: [
						{ name: '功效', valueName: '柔顺护色' },
						{ name: '规格', valueName: '2kg' },
					],
					price: 27.9,
					oldPrice: 45.0,
					inventory: 65,
				},
			],
		},
		{
			name: '宿舍洗漱架置物架',
			desc: '免打孔壁挂，防水防潮，多层收纳',
			brand: { name: '空间大师' },
			specs: [
				{ name: '层数', values: [{ name: '双层' }, { name: '三层' }] },
				{
					name: '安装方式',
					values: [
						{ name: '吸盘式' },
						{ name: '粘贴式' },
						{ name: '落地式' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_9_1',
					specs: [
						{ name: '层数', valueName: '双层' },
						{ name: '安装方式', valueName: '吸盘式' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 70,
				},
				{
					id: 'sku_wash_9_2',
					specs: [
						{ name: '层数', valueName: '双层' },
						{ name: '安装方式', valueName: '粘贴式' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 85,
				},
				{
					id: 'sku_wash_9_3',
					specs: [
						{ name: '层数', valueName: '双层' },
						{ name: '安装方式', valueName: '落地式' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 60,
				},
				{
					id: 'sku_wash_9_4',
					specs: [
						{ name: '层数', valueName: '三层' },
						{ name: '安装方式', valueName: '吸盘式' },
					],
					price: 25.9,
					oldPrice: 42.0,
					inventory: 55,
				},
				{
					id: 'sku_wash_9_5',
					specs: [
						{ name: '层数', valueName: '三层' },
						{ name: '安装方式', valueName: '粘贴式' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 65,
				},
				{
					id: 'sku_wash_9_6',
					specs: [
						{ name: '层数', valueName: '三层' },
						{ name: '安装方式', valueName: '落地式' },
					],
					price: 29.9,
					oldPrice: 48.0,
					inventory: 45,
				},
			],
		},
		{
			name: '宿舍专用脸盆三件套',
			desc: '大中小号组合，加厚塑料，洗脸洗脚洗衣',
			brand: { name: '盆盆好' },
			specs: [
				{
					name: '颜色',
					values: [
						{ name: '蓝色' },
						{ name: '粉色' },
						{ name: '绿色' },
					],
				},
				{
					name: '材质',
					values: [{ name: '普通塑料' }, { name: '加厚塑料' }],
				},
			],
			skus: [
				{
					id: 'sku_wash_10_1',
					specs: [
						{ name: '颜色', valueName: '蓝色' },
						{ name: '材质', valueName: '普通塑料' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_10_2',
					specs: [
						{ name: '颜色', valueName: '蓝色' },
						{ name: '材质', valueName: '加厚塑料' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 80,
				},
				{
					id: 'sku_wash_10_3',
					specs: [
						{ name: '颜色', valueName: '粉色' },
						{ name: '材质', valueName: '普通塑料' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 95,
				},
				{
					id: 'sku_wash_10_4',
					specs: [
						{ name: '颜色', valueName: '粉色' },
						{ name: '材质', valueName: '加厚塑料' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 75,
				},
				{
					id: 'sku_wash_10_5',
					specs: [
						{ name: '颜色', valueName: '绿色' },
						{ name: '材质', valueName: '普通塑料' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_wash_10_6',
					specs: [
						{ name: '颜色', valueName: '绿色' },
						{ name: '材质', valueName: '加厚塑料' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 70,
				},
			],
		},
		{
			name: '牙刷杯漱口杯套装',
			desc: '带牙刷架设计，沥水防霉，情侣款可选',
			brand: { name: '杯杯净' },
			specs: [
				{
					name: '款式',
					values: [{ name: '单人款' }, { name: '双人款' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '蓝色' },
						{ name: '粉色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_11_1',
					specs: [
						{ name: '款式', valueName: '单人款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_11_2',
					specs: [
						{ name: '款式', valueName: '单人款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 140,
				},
				{
					id: 'sku_wash_11_3',
					specs: [
						{ name: '款式', valueName: '单人款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 135,
				},
				{
					id: 'sku_wash_11_4',
					specs: [
						{ name: '款式', valueName: '双人款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_11_5',
					specs: [
						{ name: '款式', valueName: '双人款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 95,
				},
				{
					id: 'sku_wash_11_6',
					specs: [
						{ name: '款式', valueName: '双人款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
			],
		},
		{
			name: '宿舍专用肥皂盒',
			desc: '双层沥水设计，带盖防尘，香皂肥皂通用',
			brand: { name: '皂盒家' },
			specs: [
				{
					name: '款式',
					values: [{ name: '单层款' }, { name: '双层款' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '蓝色' },
						{ name: '绿色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_12_1',
					specs: [
						{ name: '款式', valueName: '单层款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 200,
				},
				{
					id: 'sku_wash_12_2',
					specs: [
						{ name: '款式', valueName: '单层款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 190,
				},
				{
					id: 'sku_wash_12_3',
					specs: [
						{ name: '款式', valueName: '单层款' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 180,
				},
				{
					id: 'sku_wash_12_4',
					specs: [
						{ name: '款式', valueName: '双层款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_12_5',
					specs: [
						{ name: '款式', valueName: '双层款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 140,
				},
				{
					id: 'sku_wash_12_6',
					specs: [
						{ name: '款式', valueName: '双层款' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 135,
				},
			],
		},
		{
			name: '宿舍搓澡巾强力搓泥',
			desc: '双面设计，粗砂去泥细砂按摩，长条拉背款',
			brand: { name: '搓澡王' },
			specs: [
				{
					name: '款式',
					values: [{ name: '手套款' }, { name: '长条款' }],
				},
				{ name: '硬度', values: [{ name: '中砂' }, { name: '粗砂' }] },
			],
			skus: [
				{
					id: 'sku_wash_13_1',
					specs: [
						{ name: '款式', valueName: '手套款' },
						{ name: '硬度', valueName: '中砂' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 180,
				},
				{
					id: 'sku_wash_13_2',
					specs: [
						{ name: '款式', valueName: '手套款' },
						{ name: '硬度', valueName: '粗砂' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 170,
				},
				{
					id: 'sku_wash_13_3',
					specs: [
						{ name: '款式', valueName: '长条款' },
						{ name: '硬度', valueName: '中砂' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_13_4',
					specs: [
						{ name: '款式', valueName: '长条款' },
						{ name: '硬度', valueName: '粗砂' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 140,
				},
			],
		},
		{
			name: '宿舍专用浴球沐浴花',
			desc: '起泡丰富，柔软不伤肤，挂绳设计易晾干',
			brand: { name: '浴花坊' },
			specs: [
				{
					name: '大小',
					values: [{ name: '小号(50g)' }, { name: '大号(80g)' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '粉色' },
						{ name: '蓝色' },
						{ name: '紫色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_14_1',
					specs: [
						{ name: '大小', valueName: '小号(50g)' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 200,
				},
				{
					id: 'sku_wash_14_2',
					specs: [
						{ name: '大小', valueName: '小号(50g)' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 190,
				},
				{
					id: 'sku_wash_14_3',
					specs: [
						{ name: '大小', valueName: '小号(50g)' },
						{ name: '颜色', valueName: '紫色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 180,
				},
				{
					id: 'sku_wash_14_4',
					specs: [
						{ name: '大小', valueName: '大号(80g)' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 160,
				},
				{
					id: 'sku_wash_14_5',
					specs: [
						{ name: '大小', valueName: '大号(80g)' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_14_6',
					specs: [
						{ name: '大小', valueName: '大号(80g)' },
						{ name: '颜色', valueName: '紫色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 145,
				},
			],
		},
		{
			name: '宿舍牙杯牙刷架组合',
			desc: '壁挂式设计，沥水收纳一体，节省空间',
			brand: { name: '壁挂家' },
			specs: [
				{
					name: '位数',
					values: [{ name: '2位' }, { name: '3位' }, { name: '4位' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '灰色' }] },
			],
			skus: [
				{
					id: 'sku_wash_15_1',
					specs: [
						{ name: '位数', valueName: '2位' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_15_2',
					specs: [
						{ name: '位数', valueName: '2位' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_wash_15_3',
					specs: [
						{ name: '位数', valueName: '3位' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_15_4',
					specs: [
						{ name: '位数', valueName: '3位' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 95,
				},
				{
					id: 'sku_wash_15_5',
					specs: [
						{ name: '位数', valueName: '4位' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 80,
				},
				{
					id: 'sku_wash_15_6',
					specs: [
						{ name: '位数', valueName: '4位' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 75,
				},
			],
		},
		{
			name: '宿舍专用浴巾纯棉',
			desc: '70x140cm大浴巾，吸水速干，裹身不掉毛',
			brand: { name: '浴巾坊' },
			specs: [
				{ name: '克重', values: [{ name: '300g' }, { name: '400g' }] },
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '灰色' },
						{ name: '蓝色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_16_1',
					specs: [
						{ name: '克重', valueName: '300g' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
				{
					id: 'sku_wash_16_2',
					specs: [
						{ name: '克重', valueName: '300g' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 75,
				},
				{
					id: 'sku_wash_16_3',
					specs: [
						{ name: '克重', valueName: '300g' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 70,
				},
				{
					id: 'sku_wash_16_4',
					specs: [
						{ name: '克重', valueName: '400g' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 60,
				},
				{
					id: 'sku_wash_16_5',
					specs: [
						{ name: '克重', valueName: '400g' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 55,
				},
				{
					id: 'sku_wash_16_6',
					specs: [
						{ name: '克重', valueName: '400g' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 50,
				},
			],
		},
		{
			name: '宿舍洗漱台收纳架',
			desc: '多层置物，放牙杯洗面奶，台面整洁',
			brand: { name: '台面架' },
			specs: [
				{ name: '层数', values: [{ name: '2层' }, { name: '3层' }] },
				{
					name: '材质',
					values: [{ name: '塑料' }, { name: '不锈钢' }],
				},
			],
			skus: [
				{
					id: 'sku_wash_17_1',
					specs: [
						{ name: '层数', valueName: '2层' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_17_2',
					specs: [
						{ name: '层数', valueName: '2层' },
						{ name: '材质', valueName: '不锈钢' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
				{
					id: 'sku_wash_17_3',
					specs: [
						{ name: '层数', valueName: '3层' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 90,
				},
				{
					id: 'sku_wash_17_4',
					specs: [
						{ name: '层数', valueName: '3层' },
						{ name: '材质', valueName: '不锈钢' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 70,
				},
			],
		},
		{
			name: '宿舍专用干发帽',
			desc: '超细纤维，吸水速干，长发包头巾',
			brand: { name: '干发帽' },
			specs: [
				{
					name: '款式',
					values: [{ name: '纽扣款' }, { name: '松紧款' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '粉色' },
						{ name: '蓝色' },
						{ name: '紫色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_18_1',
					specs: [
						{ name: '款式', valueName: '纽扣款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_18_2',
					specs: [
						{ name: '款式', valueName: '纽扣款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 140,
				},
				{
					id: 'sku_wash_18_3',
					specs: [
						{ name: '款式', valueName: '纽扣款' },
						{ name: '颜色', valueName: '紫色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 135,
				},
				{
					id: 'sku_wash_18_4',
					specs: [
						{ name: '款式', valueName: '松紧款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 160,
				},
				{
					id: 'sku_wash_18_5',
					specs: [
						{ name: '款式', valueName: '松紧款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_18_6',
					specs: [
						{ name: '款式', valueName: '松紧款' },
						{ name: '颜色', valueName: '紫色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 145,
				},
			],
		},
		{
			name: '宿舍漱口杯便携套装',
			desc: '带盖防尘，旅行出差可用，附赠牙刷',
			brand: { name: '便携杯' },
			specs: [
				{
					name: '容量',
					values: [{ name: '300ml' }, { name: '500ml' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '绿色' },
						{ name: '粉色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_19_1',
					specs: [
						{ name: '容量', valueName: '300ml' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_19_2',
					specs: [
						{ name: '容量', valueName: '300ml' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 115,
				},
				{
					id: 'sku_wash_19_3',
					specs: [
						{ name: '容量', valueName: '300ml' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_wash_19_4',
					specs: [
						{ name: '容量', valueName: '500ml' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_19_5',
					specs: [
						{ name: '容量', valueName: '500ml' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 95,
				},
				{
					id: 'sku_wash_19_6',
					specs: [
						{ name: '容量', valueName: '500ml' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
			],
		},
		{
			name: '宿舍专用洗发水旅行装',
			desc: '小瓶装便携，控油去屑，出差旅行必备',
			brand: { name: '清扬' },
			specs: [
				{
					name: '规格',
					values: [{ name: '100ml' }, { name: '200ml' }],
				},
				{
					name: '功效',
					values: [
						{ name: '控油' },
						{ name: '去屑' },
						{ name: '柔顺' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_20_1',
					specs: [
						{ name: '规格', valueName: '100ml' },
						{ name: '功效', valueName: '控油' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_20_2',
					specs: [
						{ name: '规格', valueName: '100ml' },
						{ name: '功效', valueName: '去屑' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 145,
				},
				{
					id: 'sku_wash_20_3',
					specs: [
						{ name: '规格', valueName: '100ml' },
						{ name: '功效', valueName: '柔顺' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 140,
				},
				{
					id: 'sku_wash_20_4',
					specs: [
						{ name: '规格', valueName: '200ml' },
						{ name: '功效', valueName: '控油' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_20_5',
					specs: [
						{ name: '规格', valueName: '200ml' },
						{ name: '功效', valueName: '去屑' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 115,
				},
				{
					id: 'sku_wash_20_6',
					specs: [
						{ name: '规格', valueName: '200ml' },
						{ name: '功效', valueName: '柔顺' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
			],
		},
		{
			name: '宿舍牙膏美白防蛀',
			desc: '含氟配方，清新口气，大容量家庭装',
			brand: { name: '佳洁士' },
			specs: [
				{ name: '规格', values: [{ name: '120g' }, { name: '180g' }] },
				{
					name: '功效',
					values: [
						{ name: '美白' },
						{ name: '防蛀' },
						{ name: '抗敏' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_21_1',
					specs: [
						{ name: '规格', valueName: '120g' },
						{ name: '功效', valueName: '美白' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 130,
				},
				{
					id: 'sku_wash_21_2',
					specs: [
						{ name: '规格', valueName: '120g' },
						{ name: '功效', valueName: '防蛀' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 140,
				},
				{
					id: 'sku_wash_21_3',
					specs: [
						{ name: '规格', valueName: '120g' },
						{ name: '功效', valueName: '抗敏' },
					],
					price: 14.9,
					oldPrice: 25.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_21_4',
					specs: [
						{ name: '规格', valueName: '180g' },
						{ name: '功效', valueName: '美白' },
					],
					price: 16.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_wash_21_5',
					specs: [
						{ name: '规格', valueName: '180g' },
						{ name: '功效', valueName: '防蛀' },
					],
					price: 15.9,
					oldPrice: 26.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_21_6',
					specs: [
						{ name: '规格', valueName: '180g' },
						{ name: '功效', valueName: '抗敏' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 100,
				},
			],
		},
		{
			name: '宿舍专用梳子套装',
			desc: '气垫梳+尖尾梳组合，按摩头皮造型两用',
			brand: { name: '梳梳美' },
			specs: [
				{
					name: '款式',
					values: [{ name: '基础款' }, { name: '升级款' }],
				},
				{ name: '颜色', values: [{ name: '黑色' }, { name: '粉色' }] },
			],
			skus: [
				{
					id: 'sku_wash_22_1',
					specs: [
						{ name: '款式', valueName: '基础款' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_22_2',
					specs: [
						{ name: '款式', valueName: '基础款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 95,
				},
				{
					id: 'sku_wash_22_3',
					specs: [
						{ name: '款式', valueName: '升级款' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 80,
				},
				{
					id: 'sku_wash_22_4',
					specs: [
						{ name: '款式', valueName: '升级款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 75,
				},
			],
		},
		{
			name: '宿舍洗脸巾一次性',
			desc: '纯棉加厚，抽取式包装，替代毛巾更卫生',
			brand: { name: '洗脸巾' },
			specs: [
				{
					name: '规格',
					values: [{ name: '100抽' }, { name: '200抽' }],
				},
				{ name: '厚度', values: [{ name: '薄款' }, { name: '厚款' }] },
			],
			skus: [
				{
					id: 'sku_wash_23_1',
					specs: [
						{ name: '规格', valueName: '100抽' },
						{ name: '厚度', valueName: '薄款' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_23_2',
					specs: [
						{ name: '规格', valueName: '100抽' },
						{ name: '厚度', valueName: '厚款' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 130,
				},
				{
					id: 'sku_wash_23_3',
					specs: [
						{ name: '规格', valueName: '200抽' },
						{ name: '厚度', valueName: '薄款' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 120,
				},
				{
					id: 'sku_wash_23_4',
					specs: [
						{ name: '规格', valueName: '200抽' },
						{ name: '厚度', valueName: '厚款' },
					],
					price: 28.9,
					oldPrice: 49.9,
					inventory: 100,
				},
			],
		},
		{
			name: '宿舍专用剃须刀',
			desc: '三层刀片，润滑条设计，男士剃须必备',
			brand: { name: '吉列' },
			specs: [
				{
					name: '刀头',
					values: [{ name: '含2刀头' }, { name: '含4刀头' }],
				},
				{
					name: '款式',
					values: [{ name: '手动款' }, { name: '电动款' }],
				},
			],
			skus: [
				{
					id: 'sku_wash_24_1',
					specs: [
						{ name: '刀头', valueName: '含2刀头' },
						{ name: '款式', valueName: '手动款' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
				{
					id: 'sku_wash_24_2',
					specs: [
						{ name: '刀头', valueName: '含2刀头' },
						{ name: '款式', valueName: '电动款' },
					],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 60,
				},
				{
					id: 'sku_wash_24_3',
					specs: [
						{ name: '刀头', valueName: '含4刀头' },
						{ name: '款式', valueName: '手动款' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 70,
				},
				{
					id: 'sku_wash_24_4',
					specs: [
						{ name: '刀头', valueName: '含4刀头' },
						{ name: '款式', valueName: '电动款' },
					],
					price: 65.9,
					oldPrice: 109.9,
					inventory: 50,
				},
			],
		},
		{
			name: '宿舍沐浴露补充装',
			desc: '大袋补充装，倒入瓶装更环保，多种香型',
			brand: { name: '舒肤佳' },
			specs: [
				{
					name: '规格',
					values: [{ name: '400ml' }, { name: '720ml' }],
				},
				{
					name: '香型',
					values: [
						{ name: '原味' },
						{ name: '柠檬' },
						{ name: '薰衣草' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_25_1',
					specs: [
						{ name: '规格', valueName: '400ml' },
						{ name: '香型', valueName: '原味' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_25_2',
					specs: [
						{ name: '规格', valueName: '400ml' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 115,
				},
				{
					id: 'sku_wash_25_3',
					specs: [
						{ name: '规格', valueName: '400ml' },
						{ name: '香型', valueName: '薰衣草' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_wash_25_4',
					specs: [
						{ name: '规格', valueName: '720ml' },
						{ name: '香型', valueName: '原味' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_25_5',
					specs: [
						{ name: '规格', valueName: '720ml' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 95,
				},
				{
					id: 'sku_wash_25_6',
					specs: [
						{ name: '规格', valueName: '720ml' },
						{ name: '香型', valueName: '薰衣草' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 90,
				},
			],
		},
		{
			name: '宿舍专用洗手液',
			desc: '抑菌消毒，温和不伤手，按压瓶装',
			brand: { name: '滴露' },
			specs: [
				{
					name: '规格',
					values: [{ name: '250ml' }, { name: '500ml' }],
				},
				{
					name: '香型',
					values: [
						{ name: '原味' },
						{ name: '芦荟' },
						{ name: '柠檬' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_26_1',
					specs: [
						{ name: '规格', valueName: '250ml' },
						{ name: '香型', valueName: '原味' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 130,
				},
				{
					id: 'sku_wash_26_2',
					specs: [
						{ name: '规格', valueName: '250ml' },
						{ name: '香型', valueName: '芦荟' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 125,
				},
				{
					id: 'sku_wash_26_3',
					specs: [
						{ name: '规格', valueName: '250ml' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_26_4',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '香型', valueName: '原味' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 110,
				},
				{
					id: 'sku_wash_26_5',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '香型', valueName: '芦荟' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 105,
				},
				{
					id: 'sku_wash_26_6',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
			],
		},
		{
			name: '宿舍专用护发素',
			desc: '修复干枯毛躁，柔顺亮泽，大容量实惠',
			brand: { name: '潘婷' },
			specs: [
				{
					name: '规格',
					values: [{ name: '200ml' }, { name: '400ml' }],
				},
				{
					name: '功效',
					values: [
						{ name: '修复' },
						{ name: '柔顺' },
						{ name: '滋养' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_27_1',
					specs: [
						{ name: '规格', valueName: '200ml' },
						{ name: '功效', valueName: '修复' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_27_2',
					specs: [
						{ name: '规格', valueName: '200ml' },
						{ name: '功效', valueName: '柔顺' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 95,
				},
				{
					id: 'sku_wash_27_3',
					specs: [
						{ name: '规格', valueName: '200ml' },
						{ name: '功效', valueName: '滋养' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 90,
				},
				{
					id: 'sku_wash_27_4',
					specs: [
						{ name: '规格', valueName: '400ml' },
						{ name: '功效', valueName: '修复' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 80,
				},
				{
					id: 'sku_wash_27_5',
					specs: [
						{ name: '规格', valueName: '400ml' },
						{ name: '功效', valueName: '柔顺' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 75,
				},
				{
					id: 'sku_wash_27_6',
					specs: [
						{ name: '规格', valueName: '400ml' },
						{ name: '功效', valueName: '滋养' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 70,
				},
			],
		},
		{
			name: '宿舍专用身体乳',
			desc: '滋润保湿，秋冬必备，大瓶装耐用',
			brand: { name: '凡士林' },
			specs: [
				{
					name: '规格',
					values: [{ name: '200ml' }, { name: '400ml' }],
				},
				{
					name: '香型',
					values: [
						{ name: '原味' },
						{ name: '芦荟' },
						{ name: '燕麦' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_28_1',
					specs: [
						{ name: '规格', valueName: '200ml' },
						{ name: '香型', valueName: '原味' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 90,
				},
				{
					id: 'sku_wash_28_2',
					specs: [
						{ name: '规格', valueName: '200ml' },
						{ name: '香型', valueName: '芦荟' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 85,
				},
				{
					id: 'sku_wash_28_3',
					specs: [
						{ name: '规格', valueName: '200ml' },
						{ name: '香型', valueName: '燕麦' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 80,
				},
				{
					id: 'sku_wash_28_4',
					specs: [
						{ name: '规格', valueName: '400ml' },
						{ name: '香型', valueName: '原味' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 70,
				},
				{
					id: 'sku_wash_28_5',
					specs: [
						{ name: '规格', valueName: '400ml' },
						{ name: '香型', valueName: '芦荟' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 65,
				},
				{
					id: 'sku_wash_28_6',
					specs: [
						{ name: '规格', valueName: '400ml' },
						{ name: '香型', valueName: '燕麦' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 60,
				},
			],
		},
		{
			name: '宿舍专用棉签',
			desc: '双头设计，化妆卸妆清洁，大盒装',
			brand: { name: '棉签家' },
			specs: [
				{
					name: '数量',
					values: [{ name: '200支' }, { name: '500支' }],
				},
				{
					name: '款式',
					values: [
						{ name: '圆头' },
						{ name: '尖头' },
						{ name: '螺旋头' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_29_1',
					specs: [
						{ name: '数量', valueName: '200支' },
						{ name: '款式', valueName: '圆头' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 200,
				},
				{
					id: 'sku_wash_29_2',
					specs: [
						{ name: '数量', valueName: '200支' },
						{ name: '款式', valueName: '尖头' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 180,
				},
				{
					id: 'sku_wash_29_3',
					specs: [
						{ name: '数量', valueName: '200支' },
						{ name: '款式', valueName: '螺旋头' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 170,
				},
				{
					id: 'sku_wash_29_4',
					specs: [
						{ name: '数量', valueName: '500支' },
						{ name: '款式', valueName: '圆头' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_29_5',
					specs: [
						{ name: '数量', valueName: '500支' },
						{ name: '款式', valueName: '尖头' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 130,
				},
				{
					id: 'sku_wash_29_6',
					specs: [
						{ name: '数量', valueName: '500支' },
						{ name: '款式', valueName: '螺旋头' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 120,
				},
			],
		},
		{
			name: '宿舍专用化妆棉',
			desc: '纯棉不掉絮，卸妆湿敷两用，厚款省水',
			brand: { name: '化妆棉' },
			specs: [
				{
					name: '数量',
					values: [{ name: '100片' }, { name: '200片' }],
				},
				{ name: '厚度', values: [{ name: '薄款' }, { name: '厚款' }] },
			],
			skus: [
				{
					id: 'sku_wash_30_1',
					specs: [
						{ name: '数量', valueName: '100片' },
						{ name: '厚度', valueName: '薄款' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 180,
				},
				{
					id: 'sku_wash_30_2',
					specs: [
						{ name: '数量', valueName: '100片' },
						{ name: '厚度', valueName: '厚款' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 160,
				},
				{
					id: 'sku_wash_30_3',
					specs: [
						{ name: '数量', valueName: '200片' },
						{ name: '厚度', valueName: '薄款' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'sku_wash_30_4',
					specs: [
						{ name: '数量', valueName: '200片' },
						{ name: '厚度', valueName: '厚款' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 120,
				},
			],
		},
		{
			name: '宿舍专用牙线棒',
			desc: '超细滑线，清洁牙缝，独立包装便携',
			brand: { name: '牙线家' },
			specs: [
				{ name: '数量', values: [{ name: '50支' }, { name: '100支' }] },
				{
					name: '款式',
					values: [{ name: '细滑款' }, { name: '扁线款' }],
				},
			],
			skus: [
				{
					id: 'sku_wash_31_1',
					specs: [
						{ name: '数量', valueName: '50支' },
						{ name: '款式', valueName: '细滑款' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_31_2',
					specs: [
						{ name: '数量', valueName: '50支' },
						{ name: '款式', valueName: '扁线款' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 140,
				},
				{
					id: 'sku_wash_31_3',
					specs: [
						{ name: '数量', valueName: '100支' },
						{ name: '款式', valueName: '细滑款' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_31_4',
					specs: [
						{ name: '数量', valueName: '100支' },
						{ name: '款式', valueName: '扁线款' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 110,
				},
			],
		},
		{
			name: '宿舍专用漱口水',
			desc: '清新口气，杀菌除口臭，大瓶装耐用',
			brand: { name: '李施德林' },
			specs: [
				{
					name: '规格',
					values: [{ name: '250ml' }, { name: '500ml' }],
				},
				{
					name: '口味',
					values: [
						{ name: '冰蓝' },
						{ name: '绿茶' },
						{ name: '橙子' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_32_1',
					specs: [
						{ name: '规格', valueName: '250ml' },
						{ name: '口味', valueName: '冰蓝' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_32_2',
					specs: [
						{ name: '规格', valueName: '250ml' },
						{ name: '口味', valueName: '绿茶' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 115,
				},
				{
					id: 'sku_wash_32_3',
					specs: [
						{ name: '规格', valueName: '250ml' },
						{ name: '口味', valueName: '橙子' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_wash_32_4',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '口味', valueName: '冰蓝' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_32_5',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '口味', valueName: '绿茶' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 95,
				},
				{
					id: 'sku_wash_32_6',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '口味', valueName: '橙子' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 90,
				},
			],
		},
		{
			name: '宿舍专用去角质啫喱',
			desc: '温和去角质，深层清洁，面部身体两用',
			brand: { name: '去角质' },
			specs: [
				{ name: '规格', values: [{ name: '100g' }, { name: '200g' }] },
				{
					name: '功效',
					values: [
						{ name: '面部专用' },
						{ name: '身体专用' },
						{ name: '通用款' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_33_1',
					specs: [
						{ name: '规格', valueName: '100g' },
						{ name: '功效', valueName: '面部专用' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_33_2',
					specs: [
						{ name: '规格', valueName: '100g' },
						{ name: '功效', valueName: '身体专用' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 95,
				},
				{
					id: 'sku_wash_33_3',
					specs: [
						{ name: '规格', valueName: '100g' },
						{ name: '功效', valueName: '通用款' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 90,
				},
				{
					id: 'sku_wash_33_4',
					specs: [
						{ name: '规格', valueName: '200g' },
						{ name: '功效', valueName: '面部专用' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 80,
				},
				{
					id: 'sku_wash_33_5',
					specs: [
						{ name: '规格', valueName: '200g' },
						{ name: '功效', valueName: '身体专用' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 75,
				},
				{
					id: 'sku_wash_33_6',
					specs: [
						{ name: '规格', valueName: '200g' },
						{ name: '功效', valueName: '通用款' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 70,
				},
			],
		},
		{
			name: '宿舍专用面膜补水',
			desc: '玻尿酸补水，收缩毛孔，学生党平价',
			brand: { name: '面膜家' },
			specs: [
				{ name: '数量', values: [{ name: '10片' }, { name: '20片' }] },
				{
					name: '功效',
					values: [
						{ name: '补水' },
						{ name: '美白' },
						{ name: '修复' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_34_1',
					specs: [
						{ name: '数量', valueName: '10片' },
						{ name: '功效', valueName: '补水' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_34_2',
					specs: [
						{ name: '数量', valueName: '10片' },
						{ name: '功效', valueName: '美白' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 140,
				},
				{
					id: 'sku_wash_34_3',
					specs: [
						{ name: '数量', valueName: '10片' },
						{ name: '功效', valueName: '修复' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 130,
				},
				{
					id: 'sku_wash_34_4',
					specs: [
						{ name: '数量', valueName: '20片' },
						{ name: '功效', valueName: '补水' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_34_5',
					specs: [
						{ name: '数量', valueName: '20片' },
						{ name: '功效', valueName: '美白' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 110,
				},
				{
					id: 'sku_wash_34_6',
					specs: [
						{ name: '数量', valueName: '20片' },
						{ name: '功效', valueName: '修复' },
					],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 100,
				},
			],
		},
		{
			name: '宿舍专用洗面奶起泡器',
			desc: '电动起泡，泡沫绵密，深层清洁更省洗面奶',
			brand: { name: '起泡器' },
			specs: [
				{
					name: '款式',
					values: [{ name: '手动款' }, { name: '电动款' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '粉色' }] },
			],
			skus: [
				{
					id: 'sku_wash_35_1',
					specs: [
						{ name: '款式', valueName: '手动款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_35_2',
					specs: [
						{ name: '款式', valueName: '手动款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 140,
				},
				{
					id: 'sku_wash_35_3',
					specs: [
						{ name: '款式', valueName: '电动款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_35_4',
					specs: [
						{ name: '款式', valueName: '电动款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 95,
				},
			],
		},
		{
			name: '宿舍专用洗脸刷',
			desc: '软毛洁面刷，深层清洁毛孔，手动电动可选',
			brand: { name: '洗脸刷' },
			specs: [
				{
					name: '款式',
					values: [{ name: '手动款' }, { name: '电动款' }],
				},
				{ name: '刷毛', values: [{ name: '软毛' }, { name: '硅胶' }] },
			],
			skus: [
				{
					id: 'sku_wash_36_1',
					specs: [
						{ name: '款式', valueName: '手动款' },
						{ name: '刷毛', valueName: '软毛' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 130,
				},
				{
					id: 'sku_wash_36_2',
					specs: [
						{ name: '款式', valueName: '手动款' },
						{ name: '刷毛', valueName: '硅胶' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_36_3',
					specs: [
						{ name: '款式', valueName: '电动款' },
						{ name: '刷毛', valueName: '软毛' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 80,
				},
				{
					id: 'sku_wash_36_4',
					specs: [
						{ name: '款式', valueName: '电动款' },
						{ name: '刷毛', valueName: '硅胶' },
					],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 70,
				},
			],
		},
		{
			name: '宿舍专用浴帽防水',
			desc: '双层防水，洗澡护发，松紧可调',
			brand: { name: '浴帽家' },
			specs: [
				{ name: '数量', values: [{ name: '1个' }, { name: '3个装' }] },
				{
					name: '颜色',
					values: [
						{ name: '粉色' },
						{ name: '蓝色' },
						{ name: '白色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_37_1',
					specs: [
						{ name: '数量', valueName: '1个' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 200,
				},
				{
					id: 'sku_wash_37_2',
					specs: [
						{ name: '数量', valueName: '1个' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 190,
				},
				{
					id: 'sku_wash_37_3',
					specs: [
						{ name: '数量', valueName: '1个' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 180,
				},
				{
					id: 'sku_wash_37_4',
					specs: [
						{ name: '数量', valueName: '3个装' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_37_5',
					specs: [
						{ name: '数量', valueName: '3个装' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 140,
				},
				{
					id: 'sku_wash_37_6',
					specs: [
						{ name: '数量', valueName: '3个装' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 130,
				},
			],
		},
		{
			name: '宿舍专用搓背刷',
			desc: '长柄设计，搓背不求人，软毛不伤肤',
			brand: { name: '搓背刷' },
			specs: [
				{
					name: '款式',
					values: [{ name: '软毛款' }, { name: '中毛款' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '蓝色' }] },
			],
			skus: [
				{
					id: 'sku_wash_38_1',
					specs: [
						{ name: '款式', valueName: '软毛款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_38_2',
					specs: [
						{ name: '款式', valueName: '软毛款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_wash_38_3',
					specs: [
						{ name: '款式', valueName: '中毛款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_wash_38_4',
					specs: [
						{ name: '款式', valueName: '中毛款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 95,
				},
			],
		},
		{
			name: '宿舍专用分装瓶套装',
			desc: '旅行分装，按压泵头，洗发水沐浴露乳液',
			brand: { name: '分装瓶' },
			specs: [
				{
					name: '数量',
					values: [{ name: '3件套' }, { name: '5件套' }],
				},
				{
					name: '容量',
					values: [
						{ name: '30ml' },
						{ name: '50ml' },
						{ name: '100ml' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_39_1',
					specs: [
						{ name: '数量', valueName: '3件套' },
						{ name: '容量', valueName: '30ml' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_wash_39_2',
					specs: [
						{ name: '数量', valueName: '3件套' },
						{ name: '容量', valueName: '50ml' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 140,
				},
				{
					id: 'sku_wash_39_3',
					specs: [
						{ name: '数量', valueName: '3件套' },
						{ name: '容量', valueName: '100ml' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 130,
				},
				{
					id: 'sku_wash_39_4',
					specs: [
						{ name: '数量', valueName: '5件套' },
						{ name: '容量', valueName: '30ml' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_wash_39_5',
					specs: [
						{ name: '数量', valueName: '5件套' },
						{ name: '容量', valueName: '50ml' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 110,
				},
				{
					id: 'sku_wash_39_6',
					specs: [
						{ name: '数量', valueName: '5件套' },
						{ name: '容量', valueName: '100ml' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 100,
				},
			],
		},
		{
			name: '宿舍专用香皂',
			desc: '除菌香皂，洗手洗澡两用，经典香味',
			brand: { name: '舒肤佳' },
			specs: [
				{ name: '规格', values: [{ name: '100g' }, { name: '125g' }] },
				{
					name: '香型',
					values: [
						{ name: '纯白' },
						{ name: '柠檬' },
						{ name: '芦荟' },
					],
				},
			],
			skus: [
				{
					id: 'sku_wash_40_1',
					specs: [
						{ name: '规格', valueName: '100g' },
						{ name: '香型', valueName: '纯白' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 200,
				},
				{
					id: 'sku_wash_40_2',
					specs: [
						{ name: '规格', valueName: '100g' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 190,
				},
				{
					id: 'sku_wash_40_3',
					specs: [
						{ name: '规格', valueName: '100g' },
						{ name: '香型', valueName: '芦荟' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 180,
				},
				{
					id: 'sku_wash_40_4',
					specs: [
						{ name: '规格', valueName: '125g' },
						{ name: '香型', valueName: '纯白' },
					],
					price: 7.9,
					oldPrice: 14.0,
					inventory: 170,
				},
				{
					id: 'sku_wash_40_5',
					specs: [
						{ name: '规格', valueName: '125g' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 7.9,
					oldPrice: 14.0,
					inventory: 160,
				},
				{
					id: 'sku_wash_40_6',
					specs: [
						{ name: '规格', valueName: '125g' },
						{ name: '香型', valueName: '芦荟' },
					],
					price: 7.9,
					oldPrice: 14.0,
					inventory: 150,
				},
			],
		},
	],
	收纳整理: [
		{
			name: '宿舍衣柜收纳挂袋',
			desc: '悬挂式设计，6个大口袋，分类收纳内衣袜子',
			brand: { name: '收纳达人' },
			specs: [
				{ name: '层数', values: [{ name: '4层' }, { name: '6层' }] },
				{
					name: '颜色',
					values: [
						{ name: '灰色' },
						{ name: '米白' },
						{ name: '粉色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_store_1_1',
					specs: [
						{ name: '层数', valueName: '4层' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_store_1_2',
					specs: [
						{ name: '层数', valueName: '4层' },
						{ name: '颜色', valueName: '米白' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 85,
				},
				{
					id: 'sku_store_1_3',
					specs: [
						{ name: '层数', valueName: '4层' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 95,
				},
				{
					id: 'sku_store_1_4',
					specs: [
						{ name: '层数', valueName: '6层' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 70,
				},
				{
					id: 'sku_store_1_5',
					specs: [
						{ name: '层数', valueName: '6层' },
						{ name: '颜色', valueName: '米白' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 65,
				},
				{
					id: 'sku_store_1_6',
					specs: [
						{ name: '层数', valueName: '6层' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 75,
				},
			],
		},
		{
			name: '抽屉式收纳箱塑料整理箱',
			desc: '叠加使用，抽屉式取物，透明可视',
			brand: { name: '井然有序' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '小号(25x15x12)' },
						{ name: '中号(35x25x15)' },
						{ name: '大号(45x35x20)' },
					],
				},
				{ name: '颜色', values: [{ name: '透明' }, { name: '白色' }] },
			],
			skus: [
				{
					id: 'sku_store_2_1',
					specs: [
						{ name: '尺寸', valueName: '小号(25x15x12)' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_store_2_2',
					specs: [
						{ name: '尺寸', valueName: '小号(25x15x12)' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 130,
				},
				{
					id: 'sku_store_2_3',
					specs: [
						{ name: '尺寸', valueName: '中号(35x25x15)' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_store_2_4',
					specs: [
						{ name: '尺寸', valueName: '中号(35x25x15)' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_store_2_5',
					specs: [
						{ name: '尺寸', valueName: '大号(45x35x20)' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 70,
				},
				{
					id: 'sku_store_2_6',
					specs: [
						{ name: '尺寸', valueName: '大号(45x35x20)' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 60,
				},
			],
		},
		{
			name: '桌面收纳盒化妆品整理架',
			desc: '360度旋转，多格分区，宿舍桌面必备',
			brand: { name: '桌面管家' },
			specs: [
				{
					name: '款式',
					values: [
						{ name: '旋转款' },
						{ name: '阶梯款' },
						{ name: '翻盖款' },
					],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '粉色' }] },
			],
			skus: [
				{
					id: 'sku_store_3_1',
					specs: [
						{ name: '款式', valueName: '旋转款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
				{
					id: 'sku_store_3_2',
					specs: [
						{ name: '款式', valueName: '旋转款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 75,
				},
				{
					id: 'sku_store_3_3',
					specs: [
						{ name: '款式', valueName: '阶梯款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_store_3_4',
					specs: [
						{ name: '款式', valueName: '阶梯款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 85,
				},
				{
					id: 'sku_store_3_5',
					specs: [
						{ name: '款式', valueName: '翻盖款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 65,
				},
				{
					id: 'sku_store_3_6',
					specs: [
						{ name: '款式', valueName: '翻盖款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 60,
				},
			],
		},
		{
			name: '衣物收纳袋真空压缩袋',
			desc: '节省75%空间，防潮防尘，冬季衣物收纳神器',
			brand: { name: '压缩王' },
			specs: [
				{
					name: '规格',
					values: [
						{ name: '小号3件套' },
						{ name: '中号3件套' },
						{ name: '大号3件套' },
					],
				},
				{
					name: '配件',
					values: [{ name: '含手泵' }, { name: '含电泵' }],
				},
			],
			skus: [
				{
					id: 'sku_store_4_1',
					specs: [
						{ name: '规格', valueName: '小号3件套' },
						{ name: '配件', valueName: '含手泵' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_store_4_2',
					specs: [
						{ name: '规格', valueName: '小号3件套' },
						{ name: '配件', valueName: '含电泵' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
				{
					id: 'sku_store_4_3',
					specs: [
						{ name: '规格', valueName: '中号3件套' },
						{ name: '配件', valueName: '含手泵' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 100,
				},
				{
					id: 'sku_store_4_4',
					specs: [
						{ name: '规格', valueName: '中号3件套' },
						{ name: '配件', valueName: '含电泵' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 70,
				},
				{
					id: 'sku_store_4_5',
					specs: [
						{ name: '规格', valueName: '大号3件套' },
						{ name: '配件', valueName: '含手泵' },
					],
					price: 25.9,
					oldPrice: 42.0,
					inventory: 85,
				},
				{
					id: 'sku_store_4_6',
					specs: [
						{ name: '规格', valueName: '大号3件套' },
						{ name: '配件', valueName: '含电泵' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 60,
				},
			],
		},
		{
			name: '宿舍床底收纳箱带轮',
			desc: '扁平设计适合床底，带轮方便推拉，大容量',
			brand: { name: '空间大师' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '中号(60x40x18)' },
						{ name: '大号(80x50x22)' },
					],
				},
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '蓝色' },
						{ name: '粉色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_store_5_1',
					specs: [
						{ name: '尺寸', valueName: '中号(60x40x18)' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 25.9,
					oldPrice: 42.0,
					inventory: 60,
				},
				{
					id: 'sku_store_5_2',
					specs: [
						{ name: '尺寸', valueName: '中号(60x40x18)' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 25.9,
					oldPrice: 42.0,
					inventory: 55,
				},
				{
					id: 'sku_store_5_3',
					specs: [
						{ name: '尺寸', valueName: '中号(60x40x18)' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 25.9,
					oldPrice: 42.0,
					inventory: 50,
				},
				{
					id: 'sku_store_5_4',
					specs: [
						{ name: '尺寸', valueName: '大号(80x50x22)' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 35.9,
					oldPrice: 58.0,
					inventory: 40,
				},
				{
					id: 'sku_store_5_5',
					specs: [
						{ name: '尺寸', valueName: '大号(80x50x22)' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 35.9,
					oldPrice: 58.0,
					inventory: 35,
				},
				{
					id: 'sku_store_5_6',
					specs: [
						{ name: '尺寸', valueName: '大号(80x50x22)' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 35.9,
					oldPrice: 58.0,
					inventory: 30,
				},
			],
		},
		{
			name: '内衣裤收纳分格盒',
			desc: '24格分格设计，内衣袜子分类存放，防尘盖板',
			brand: { name: '整洁家' },
			specs: [
				{ name: '格数', values: [{ name: '12格' }, { name: '24格' }] },
				{
					name: '材质',
					values: [
						{ name: '无纺布' },
						{ name: '塑料' },
						{ name: '帆布' },
					],
				},
			],
			skus: [
				{
					id: 'sku_store_6_1',
					specs: [
						{ name: '格数', valueName: '12格' },
						{ name: '材质', valueName: '无纺布' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 130,
				},
				{
					id: 'sku_store_6_2',
					specs: [
						{ name: '格数', valueName: '12格' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_store_6_3',
					specs: [
						{ name: '格数', valueName: '12格' },
						{ name: '材质', valueName: '帆布' },
					],
					price: 15.9,
					oldPrice: 25.0,
					inventory: 90,
				},
				{
					id: 'sku_store_6_4',
					specs: [
						{ name: '格数', valueName: '24格' },
						{ name: '材质', valueName: '无纺布' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_store_6_5',
					specs: [
						{ name: '格数', valueName: '24格' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 100,
				},
				{
					id: 'sku_store_6_6',
					specs: [
						{ name: '格数', valueName: '24格' },
						{ name: '材质', valueName: '帆布' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 85,
				},
			],
		},
		{
			name: '鞋盒透明收纳盒',
			desc: '加厚透明材质，防尘防潮，可叠加省空间，鞋子一目了然',
			brand: { name: '鞋管家' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '女款(33x22x13)' },
						{ name: '男款(36x25x15)' },
					],
				},
				{
					name: '数量',
					values: [{ name: '6个装' }, { name: '12个装' }],
				},
			],
			skus: [
				{
					id: 'sku_store_7_1',
					specs: [
						{ name: '尺寸', valueName: '女款(33x22x13)' },
						{ name: '数量', valueName: '6个装' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 80,
				},
				{
					id: 'sku_store_7_2',
					specs: [
						{ name: '尺寸', valueName: '女款(33x22x13)' },
						{ name: '数量', valueName: '12个装' },
					],
					price: 49.9,
					oldPrice: 88.0,
					inventory: 60,
				},
				{
					id: 'sku_store_7_3',
					specs: [
						{ name: '尺寸', valueName: '男款(36x25x15)' },
						{ name: '数量', valueName: '6个装' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 70,
				},
				{
					id: 'sku_store_7_4',
					specs: [
						{ name: '尺寸', valueName: '男款(36x25x15)' },
						{ name: '数量', valueName: '12个装' },
					],
					price: 59.9,
					oldPrice: 105.0,
					inventory: 50,
				},
			],
		},
		{
			name: '数据线收纳包数码包',
			desc: '多层分区设计，收纳充电线耳机U盘，防水耐磨',
			brand: { name: '数码仓' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '单层款' },
						{ name: '双层款' },
						{ name: '三层款' },
					],
				},
				{
					name: '颜色',
					values: [
						{ name: '黑色' },
						{ name: '灰色' },
						{ name: '藏青' },
					],
				},
			],
			skus: [
				{
					id: 'sku_store_8_1',
					specs: [
						{ name: '尺寸', valueName: '单层款' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_store_8_2',
					specs: [
						{ name: '尺寸', valueName: '单层款' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 95,
				},
				{
					id: 'sku_store_8_3',
					specs: [
						{ name: '尺寸', valueName: '双层款' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 22.9,
					oldPrice: 40.0,
					inventory: 80,
				},
				{
					id: 'sku_store_8_4',
					specs: [
						{ name: '尺寸', valueName: '双层款' },
						{ name: '颜色', valueName: '藏青' },
					],
					price: 22.9,
					oldPrice: 40.0,
					inventory: 75,
				},
				{
					id: 'sku_store_8_5',
					specs: [
						{ name: '尺寸', valueName: '三层款' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 60,
				},
				{
					id: 'sku_store_8_6',
					specs: [
						{ name: '尺寸', valueName: '三层款' },
						{ name: '颜色', valueName: '藏青' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 55,
				},
			],
		},
		{
			name: '挂钩强力粘胶贴',
			desc: '免打孔强力粘钩，承重10kg，浴室厨房宿舍通用',
			brand: { name: '粘粘挂' },
			specs: [
				{
					name: '款式',
					values: [{ name: '普通挂钩' }, { name: '置物架挂钩' }],
				},
				{
					name: '数量',
					values: [
						{ name: '6个装' },
						{ name: '12个装' },
						{ name: '24个装' },
					],
				},
			],
			skus: [
				{
					id: 'sku_store_9_1',
					specs: [
						{ name: '款式', valueName: '普通挂钩' },
						{ name: '数量', valueName: '6个装' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 200,
				},
				{
					id: 'sku_store_9_2',
					specs: [
						{ name: '款式', valueName: '普通挂钩' },
						{ name: '数量', valueName: '12个装' },
					],
					price: 14.9,
					oldPrice: 25.0,
					inventory: 150,
				},
				{
					id: 'sku_store_9_3',
					specs: [
						{ name: '款式', valueName: '普通挂钩' },
						{ name: '数量', valueName: '24个装' },
					],
					price: 24.9,
					oldPrice: 42.0,
					inventory: 100,
				},
				{
					id: 'sku_store_9_4',
					specs: [
						{ name: '款式', valueName: '置物架挂钩' },
						{ name: '数量', valueName: '6个装' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_store_9_5',
					specs: [
						{ name: '款式', valueName: '置物架挂钩' },
						{ name: '数量', valueName: '12个装' },
					],
					price: 22.9,
					oldPrice: 40.0,
					inventory: 90,
				},
				{
					id: 'sku_store_9_6',
					specs: [
						{ name: '款式', valueName: '置物架挂钩' },
						{ name: '数量', valueName: '24个装' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 60,
				},
			],
		},
		{
			name: '桌面理线盒电线收纳',
			desc: '隐藏电源插排，桌面整洁美观，散热孔设计',
			brand: { name: '理线家' },
			specs: [
				{ name: '尺寸', values: [{ name: '小号' }, { name: '大号' }] },
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '黑色' },
						{ name: '原木色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_store_10_1',
					specs: [
						{ name: '尺寸', valueName: '小号' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
				{
					id: 'sku_store_10_2',
					specs: [
						{ name: '尺寸', valueName: '小号' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 75,
				},
				{
					id: 'sku_store_10_3',
					specs: [
						{ name: '尺寸', valueName: '小号' },
						{ name: '颜色', valueName: '原木色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 70,
				},
				{
					id: 'sku_store_10_4',
					specs: [
						{ name: '尺寸', valueName: '大号' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 60,
				},
				{
					id: 'sku_store_10_5',
					specs: [
						{ name: '尺寸', valueName: '大号' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 55,
				},
				{
					id: 'sku_store_10_6',
					specs: [
						{ name: '尺寸', valueName: '大号' },
						{ name: '颜色', valueName: '原木色' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 50,
				},
			],
		},
		{
			name: '化妆刷收纳筒笔筒',
			desc: '多格分类，防尘盖设计，桌面文具化妆刷通用',
			brand: { name: '妆台管家' },
			specs: [
				{ name: '格数', values: [{ name: '3格' }, { name: '5格' }] },
				{
					name: '材质',
					values: [{ name: '塑料' }, { name: '亚克力' }],
				},
			],
			skus: [
				{
					id: 'sku_store_11_1',
					specs: [
						{ name: '格数', valueName: '3格' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_store_11_2',
					specs: [
						{ name: '格数', valueName: '3格' },
						{ name: '材质', valueName: '亚克力' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 100,
				},
				{
					id: 'sku_store_11_3',
					specs: [
						{ name: '格数', valueName: '5格' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_store_11_4',
					specs: [
						{ name: '格数', valueName: '5格' },
						{ name: '材质', valueName: '亚克力' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 90,
				},
			],
		},
		{
			name: '折叠收纳箱布艺可水洗',
			desc: '牛津布材质，可折叠省空间，装衣服杂物',
			brand: { name: '布收纳' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '小号(26L)' },
						{ name: '中号(39L)' },
						{ name: '大号(56L)' },
					],
				},
				{ name: '颜色', values: [{ name: '灰色' }, { name: '米色' }] },
			],
			skus: [
				{
					id: 'sku_store_12_1',
					specs: [
						{ name: '尺寸', valueName: '小号(26L)' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_store_12_2',
					specs: [
						{ name: '尺寸', valueName: '小号(26L)' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 95,
				},
				{
					id: 'sku_store_12_3',
					specs: [
						{ name: '尺寸', valueName: '中号(39L)' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 85,
				},
				{
					id: 'sku_store_12_4',
					specs: [
						{ name: '尺寸', valueName: '中号(39L)' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 80,
				},
				{
					id: 'sku_store_12_5',
					specs: [
						{ name: '尺寸', valueName: '大号(56L)' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 70,
				},
				{
					id: 'sku_store_12_6',
					specs: [
						{ name: '尺寸', valueName: '大号(56L)' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 65,
				},
			],
		},
		{
			name: '证件收纳包卡包',
			desc: '多层卡位，收纳身份证银行卡学生证，防盗刷',
			brand: { name: '证件管家' },
			specs: [
				{
					name: '卡位',
					values: [{ name: '20卡位' }, { name: '40卡位' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '黑色' },
						{ name: '粉色' },
						{ name: '蓝色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_store_13_1',
					specs: [
						{ name: '卡位', valueName: '20卡位' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_store_13_2',
					specs: [
						{ name: '卡位', valueName: '20卡位' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 115,
				},
				{
					id: 'sku_store_13_3',
					specs: [
						{ name: '卡位', valueName: '20卡位' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_store_13_4',
					specs: [
						{ name: '卡位', valueName: '40卡位' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 95,
				},
				{
					id: 'sku_store_13_5',
					specs: [
						{ name: '卡位', valueName: '40卡位' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 90,
				},
				{
					id: 'sku_store_13_6',
					specs: [
						{ name: '卡位', valueName: '40卡位' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 85,
				},
			],
		},
		{
			name: '书架桌面小型置物架',
			desc: '桌上迷你书架，分层收纳课本资料，节省桌面',
			brand: { name: '书立家' },
			specs: [
				{ name: '层数', values: [{ name: '2层' }, { name: '3层' }] },
				{ name: '材质', values: [{ name: '塑料' }, { name: '木质' }] },
			],
			skus: [
				{
					id: 'sku_store_14_1',
					specs: [
						{ name: '层数', valueName: '2层' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_store_14_2',
					specs: [
						{ name: '层数', valueName: '2层' },
						{ name: '材质', valueName: '木质' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 80,
				},
				{
					id: 'sku_store_14_3',
					specs: [
						{ name: '层数', valueName: '3层' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 90,
				},
				{
					id: 'sku_store_14_4',
					specs: [
						{ name: '层数', valueName: '3层' },
						{ name: '材质', valueName: '木质' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 70,
				},
			],
		},
		{
			name: '衣柜分层隔板置物架',
			desc: '免钉安装，分层收纳衣物，扩容衣柜空间',
			brand: { name: '分层架' },
			specs: [
				{
					name: '长度',
					values: [
						{ name: '伸缩款(38-55cm)' },
						{ name: '伸缩款(55-90cm)' },
					],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '米色' }] },
			],
			skus: [
				{
					id: 'sku_store_15_1',
					specs: [
						{ name: '长度', valueName: '伸缩款(38-55cm)' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 85,
				},
				{
					id: 'sku_store_15_2',
					specs: [
						{ name: '长度', valueName: '伸缩款(38-55cm)' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
				{
					id: 'sku_store_15_3',
					specs: [
						{ name: '长度', valueName: '伸缩款(55-90cm)' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 75,
				},
				{
					id: 'sku_store_15_4',
					specs: [
						{ name: '长度', valueName: '伸缩款(55-90cm)' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 70,
				},
			],
		},
		{
			name: '首饰收纳盒耳饰盒',
			desc: '分格设计，耳环项链戒指分类，防尘防氧化',
			brand: { name: '首饰家' },
			specs: [
				{
					name: '层数',
					values: [
						{ name: '单层' },
						{ name: '双层' },
						{ name: '三层' },
					],
				},
				{ name: '颜色', values: [{ name: '粉色' }, { name: '白色' }] },
			],
			skus: [
				{
					id: 'sku_store_16_1',
					specs: [
						{ name: '层数', valueName: '单层' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_store_16_2',
					specs: [
						{ name: '层数', valueName: '单层' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 115,
				},
				{
					id: 'sku_store_16_3',
					specs: [
						{ name: '层数', valueName: '双层' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_store_16_4',
					specs: [
						{ name: '层数', valueName: '双层' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 95,
				},
				{
					id: 'sku_store_16_5',
					specs: [
						{ name: '层数', valueName: '三层' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 85,
				},
				{
					id: 'sku_store_16_6',
					specs: [
						{ name: '层数', valueName: '三层' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
			],
		},
		{
			name: '挂钩贴强力粘钩',
			desc: '免打孔粘钩，承重5kg，门后挂衣钩',
			brand: { name: '粘粘钩' },
			specs: [
				{
					name: '数量',
					values: [{ name: '10个装' }, { name: '20个装' }],
				},
				{
					name: '款式',
					values: [{ name: '透明款' }, { name: '彩色款' }],
				},
			],
			skus: [
				{
					id: 'sku_store_17_1',
					specs: [
						{ name: '数量', valueName: '10个装' },
						{ name: '款式', valueName: '透明款' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 200,
				},
				{
					id: 'sku_store_17_2',
					specs: [
						{ name: '数量', valueName: '10个装' },
						{ name: '款式', valueName: '彩色款' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 180,
				},
				{
					id: 'sku_store_17_3',
					specs: [
						{ name: '数量', valueName: '20个装' },
						{ name: '款式', valueName: '透明款' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 160,
				},
				{
					id: 'sku_store_17_4',
					specs: [
						{ name: '数量', valueName: '20个装' },
						{ name: '款式', valueName: '彩色款' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 150,
				},
			],
		},
		{
			name: '收纳篮塑料手提篮',
			desc: '洗澡篮子，装洗漱用品，镂空沥水设计',
			brand: { name: '洗澡篮' },
			specs: [
				{ name: '大小', values: [{ name: '小号' }, { name: '大号' }] },
				{
					name: '颜色',
					values: [
						{ name: '蓝色' },
						{ name: '粉色' },
						{ name: '绿色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_store_18_1',
					specs: [
						{ name: '大小', valueName: '小号' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 150,
				},
				{
					id: 'sku_store_18_2',
					specs: [
						{ name: '大小', valueName: '小号' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 145,
				},
				{
					id: 'sku_store_18_3',
					specs: [
						{ name: '大小', valueName: '小号' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 140,
				},
				{
					id: 'sku_store_18_4',
					specs: [
						{ name: '大小', valueName: '大号' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 130,
				},
				{
					id: 'sku_store_18_5',
					specs: [
						{ name: '大小', valueName: '大号' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 125,
				},
				{
					id: 'sku_store_18_6',
					specs: [
						{ name: '大小', valueName: '大号' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
			],
		},
		{
			name: 'S型裤架多层裤夹',
			desc: '一个顶五个，多层挂裤子，节省衣柜空间',
			brand: { name: '裤架王' },
			specs: [
				{ name: '层数', values: [{ name: '5层' }, { name: '7层' }] },
				{ name: '颜色', values: [{ name: '白色' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_store_19_1',
					specs: [
						{ name: '层数', valueName: '5层' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_store_19_2',
					specs: [
						{ name: '层数', valueName: '5层' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 115,
				},
				{
					id: 'sku_store_19_3',
					specs: [
						{ name: '层数', valueName: '7层' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_store_19_4',
					specs: [
						{ name: '层数', valueName: '7层' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 95,
				},
			],
		},
		{
			name: '桌面收纳架化妆品架',
			desc: '阶梯式收纳，口红护肤品眼影盘，一目了然',
			brand: { name: '妆台架' },
			specs: [
				{ name: '层数', values: [{ name: '3层' }, { name: '4层' }] },
				{
					name: '材质',
					values: [{ name: '塑料' }, { name: '亚克力' }],
				},
			],
			skus: [
				{
					id: 'sku_store_20_1',
					specs: [
						{ name: '层数', valueName: '3层' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 110,
				},
				{
					id: 'sku_store_20_2',
					specs: [
						{ name: '层数', valueName: '3层' },
						{ name: '材质', valueName: '亚克力' },
					],
					price: 28.9,
					oldPrice: 49.9,
					inventory: 90,
				},
				{
					id: 'sku_store_20_3',
					specs: [
						{ name: '层数', valueName: '4层' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 100,
				},
				{
					id: 'sku_store_20_4',
					specs: [
						{ name: '层数', valueName: '4层' },
						{ name: '材质', valueName: '亚克力' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 80,
				},
			],
		},
		{
			name: '被子收纳袋搬家打包袋',
			desc: '超大容量，装棉被厚衣服，防水防潮',
			brand: { name: '打包袋' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '中号(60x40)' }, { name: '大号(80x60)' }],
				},
				{
					name: '材质',
					values: [{ name: '无纺布' }, { name: '牛津布' }],
				},
			],
			skus: [
				{
					id: 'sku_store_21_1',
					specs: [
						{ name: '尺寸', valueName: '中号(60x40)' },
						{ name: '材质', valueName: '无纺布' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_store_21_2',
					specs: [
						{ name: '尺寸', valueName: '中号(60x40)' },
						{ name: '材质', valueName: '牛津布' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 130,
				},
				{
					id: 'sku_store_21_3',
					specs: [
						{ name: '尺寸', valueName: '大号(80x60)' },
						{ name: '材质', valueName: '无纺布' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 120,
				},
				{
					id: 'sku_store_21_4',
					specs: [
						{ name: '尺寸', valueName: '大号(80x60)' },
						{ name: '材质', valueName: '牛津布' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 100,
				},
			],
		},
		{
			name: '衣架防滑无痕衣架',
			desc: '宽肩设计，挂衣不起包，防滑不掉落',
			brand: { name: '衣架家' },
			specs: [
				{
					name: '数量',
					values: [{ name: '10个装' }, { name: '20个装' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '灰色' },
						{ name: '粉色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_store_22_1',
					specs: [
						{ name: '数量', valueName: '10个装' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 200,
				},
				{
					id: 'sku_store_22_2',
					specs: [
						{ name: '数量', valueName: '10个装' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 190,
				},
				{
					id: 'sku_store_22_3',
					specs: [
						{ name: '数量', valueName: '10个装' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 180,
				},
				{
					id: 'sku_store_22_4',
					specs: [
						{ name: '数量', valueName: '20个装' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 160,
				},
				{
					id: 'sku_store_22_5',
					specs: [
						{ name: '数量', valueName: '20个装' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 150,
				},
				{
					id: 'sku_store_22_6',
					specs: [
						{ name: '数量', valueName: '20个装' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 140,
				},
			],
		},
		{
			name: '电线固定器理线夹',
			desc: '固定走线，告别凌乱，背胶粘贴',
			brand: { name: '理线夹' },
			specs: [
				{
					name: '数量',
					values: [{ name: '20个装' }, { name: '40个装' }],
				},
				{
					name: '款式',
					values: [{ name: '单孔款' }, { name: '双孔款' }],
				},
			],
			skus: [
				{
					id: 'sku_store_23_1',
					specs: [
						{ name: '数量', valueName: '20个装' },
						{ name: '款式', valueName: '单孔款' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 200,
				},
				{
					id: 'sku_store_23_2',
					specs: [
						{ name: '数量', valueName: '20个装' },
						{ name: '款式', valueName: '双孔款' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 180,
				},
				{
					id: 'sku_store_23_3',
					specs: [
						{ name: '数量', valueName: '40个装' },
						{ name: '款式', valueName: '单孔款' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 160,
				},
				{
					id: 'sku_store_23_4',
					specs: [
						{ name: '数量', valueName: '40个装' },
						{ name: '款式', valueName: '双孔款' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 150,
				},
			],
		},
		{
			name: '抽屉分隔板自由组合',
			desc: '自由裁剪，分隔抽屉空间，分类收纳小物',
			brand: { name: '分隔板' },
			specs: [
				{
					name: '数量',
					values: [{ name: '4片装' }, { name: '8片装' }],
				},
				{ name: '高度', values: [{ name: '5cm' }, { name: '10cm' }] },
			],
			skus: [
				{
					id: 'sku_store_24_1',
					specs: [
						{ name: '数量', valueName: '4片装' },
						{ name: '高度', valueName: '5cm' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_store_24_2',
					specs: [
						{ name: '数量', valueName: '4片装' },
						{ name: '高度', valueName: '10cm' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'sku_store_24_3',
					specs: [
						{ name: '数量', valueName: '8片装' },
						{ name: '高度', valueName: '5cm' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 130,
				},
				{
					id: 'sku_store_24_4',
					specs: [
						{ name: '数量', valueName: '8片装' },
						{ name: '高度', valueName: '10cm' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 120,
				},
			],
		},
		{
			name: '门后挂钩挂衣架',
			desc: '免钉门后挂，挂包挂衣，不伤门',
			brand: { name: '门后架' },
			specs: [
				{ name: '钩数', values: [{ name: '5钩' }, { name: '8钩' }] },
				{ name: '颜色', values: [{ name: '白色' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_store_25_1',
					specs: [
						{ name: '钩数', valueName: '5钩' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 130,
				},
				{
					id: 'sku_store_25_2',
					specs: [
						{ name: '钩数', valueName: '5钩' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 125,
				},
				{
					id: 'sku_store_25_3',
					specs: [
						{ name: '钩数', valueName: '8钩' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 110,
				},
				{
					id: 'sku_store_25_4',
					specs: [
						{ name: '钩数', valueName: '8钩' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 105,
				},
			],
		},
		{
			name: '收纳凳子储物凳',
			desc: '可坐可储物，折叠设计，宿舍多功能',
			brand: { name: '储物凳' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '小号(30cm)' }, { name: '大号(38cm)' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '灰色' },
						{ name: '米色' },
						{ name: '蓝色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_store_26_1',
					specs: [
						{ name: '尺寸', valueName: '小号(30cm)' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 80,
				},
				{
					id: 'sku_store_26_2',
					specs: [
						{ name: '尺寸', valueName: '小号(30cm)' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 75,
				},
				{
					id: 'sku_store_26_3',
					specs: [
						{ name: '尺寸', valueName: '小号(30cm)' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 70,
				},
				{
					id: 'sku_store_26_4',
					specs: [
						{ name: '尺寸', valueName: '大号(38cm)' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 60,
				},
				{
					id: 'sku_store_26_5',
					specs: [
						{ name: '尺寸', valueName: '大号(38cm)' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 55,
				},
				{
					id: 'sku_store_26_6',
					specs: [
						{ name: '尺寸', valueName: '大号(38cm)' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 50,
				},
			],
		},
		{
			name: '证件照收纳册相册',
			desc: '收纳一寸两寸照片，证件照名片收集',
			brand: { name: '相册家' },
			specs: [
				{
					name: '容量',
					values: [{ name: '装120张' }, { name: '装240张' }],
				},
				{ name: '颜色', values: [{ name: '蓝色' }, { name: '粉色' }] },
			],
			skus: [
				{
					id: 'sku_store_27_1',
					specs: [
						{ name: '容量', valueName: '装120张' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_store_27_2',
					specs: [
						{ name: '容量', valueName: '装120张' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 145,
				},
				{
					id: 'sku_store_27_3',
					specs: [
						{ name: '容量', valueName: '装240张' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 130,
				},
				{
					id: 'sku_store_27_4',
					specs: [
						{ name: '容量', valueName: '装240张' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 125,
				},
			],
		},
		{
			name: '冰箱侧挂架磁吸收纳',
			desc: '吸附冰箱侧面，放保鲜膜垃圾袋，节省空间',
			brand: { name: '磁吸架' },
			specs: [
				{
					name: '款式',
					values: [{ name: '单层款' }, { name: '双层款' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_store_28_1',
					specs: [
						{ name: '款式', valueName: '单层款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_store_28_2',
					specs: [
						{ name: '款式', valueName: '单层款' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 95,
				},
				{
					id: 'sku_store_28_3',
					specs: [
						{ name: '款式', valueName: '双层款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 85,
				},
				{
					id: 'sku_store_28_4',
					specs: [
						{ name: '款式', valueName: '双层款' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 80,
				},
			],
		},
		{
			name: '包包收纳挂袋',
			desc: '门后挂包，透明可视，防尘防压',
			brand: { name: '包包家' },
			specs: [
				{ name: '格数', values: [{ name: '6格' }, { name: '10格' }] },
				{
					name: '款式',
					values: [{ name: '双面款' }, { name: '单面款' }],
				},
			],
			skus: [
				{
					id: 'sku_store_29_1',
					specs: [
						{ name: '格数', valueName: '6格' },
						{ name: '款式', valueName: '双面款' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 90,
				},
				{
					id: 'sku_store_29_2',
					specs: [
						{ name: '格数', valueName: '6格' },
						{ name: '款式', valueName: '单面款' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 100,
				},
				{
					id: 'sku_store_29_3',
					specs: [
						{ name: '格数', valueName: '10格' },
						{ name: '款式', valueName: '双面款' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 80,
				},
				{
					id: 'sku_store_29_4',
					specs: [
						{ name: '格数', valueName: '10格' },
						{ name: '款式', valueName: '单面款' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 90,
				},
			],
		},
		{
			name: '桌面垃圾桶迷你',
			desc: '桌上小垃圾桶，果皮纸屑，按压弹盖',
			brand: { name: '桌面桶' },
			specs: [
				{ name: '容量', values: [{ name: '0.5L' }, { name: '1L' }] },
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '粉色' },
						{ name: '蓝色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_store_30_1',
					specs: [
						{ name: '容量', valueName: '0.5L' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_store_30_2',
					specs: [
						{ name: '容量', valueName: '0.5L' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 145,
				},
				{
					id: 'sku_store_30_3',
					specs: [
						{ name: '容量', valueName: '0.5L' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 140,
				},
				{
					id: 'sku_store_30_4',
					specs: [
						{ name: '容量', valueName: '1L' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 130,
				},
				{
					id: 'sku_store_30_5',
					specs: [
						{ name: '容量', valueName: '1L' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 125,
				},
				{
					id: 'sku_store_30_6',
					specs: [
						{ name: '容量', valueName: '1L' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
			],
		},
		{
			name: '袜子收纳盒分格',
			desc: '15格设计，袜子内裤分类，抽屉式拿取',
			brand: { name: '袜子盒' },
			specs: [
				{
					name: '格数',
					values: [
						{ name: '10格' },
						{ name: '15格' },
						{ name: '24格' },
					],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '米色' }] },
			],
			skus: [
				{
					id: 'sku_store_31_1',
					specs: [
						{ name: '格数', valueName: '10格' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_store_31_2',
					specs: [
						{ name: '格数', valueName: '10格' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 145,
				},
				{
					id: 'sku_store_31_3',
					specs: [
						{ name: '格数', valueName: '15格' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'sku_store_31_4',
					specs: [
						{ name: '格数', valueName: '15格' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 135,
				},
				{
					id: 'sku_store_31_5',
					specs: [
						{ name: '格数', valueName: '24格' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 120,
				},
				{
					id: 'sku_store_31_6',
					specs: [
						{ name: '格数', valueName: '24格' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 115,
				},
			],
		},
		{
			name: '书架落地简易置物架',
			desc: '多层书架，放课本资料，宿舍简易书柜',
			brand: { name: '书架家' },
			specs: [
				{ name: '层数', values: [{ name: '3层' }, { name: '4层' }] },
				{ name: '材质', values: [{ name: '塑料' }, { name: '铁艺' }] },
			],
			skus: [
				{
					id: 'sku_store_32_1',
					specs: [
						{ name: '层数', valueName: '3层' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 80,
				},
				{
					id: 'sku_store_32_2',
					specs: [
						{ name: '层数', valueName: '3层' },
						{ name: '材质', valueName: '铁艺' },
					],
					price: 55.9,
					oldPrice: 95.9,
					inventory: 60,
				},
				{
					id: 'sku_store_32_3',
					specs: [
						{ name: '层数', valueName: '4层' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 70,
				},
				{
					id: 'sku_store_32_4',
					specs: [
						{ name: '层数', valueName: '4层' },
						{ name: '材质', valueName: '铁艺' },
					],
					price: 69.9,
					oldPrice: 119.9,
					inventory: 50,
				},
			],
		},
		{
			name: '收纳袋挂袋墙挂式',
			desc: '门后墙壁挂袋，多层口袋，收纳杂物',
			brand: { name: '挂袋家' },
			specs: [
				{
					name: '层数',
					values: [{ name: '3层' }, { name: '4层' }, { name: '5层' }],
				},
				{ name: '颜色', values: [{ name: '粉色' }, { name: '蓝色' }] },
			],
			skus: [
				{
					id: 'sku_store_33_1',
					specs: [
						{ name: '层数', valueName: '3层' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_store_33_2',
					specs: [
						{ name: '层数', valueName: '3层' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 115,
				},
				{
					id: 'sku_store_33_3',
					specs: [
						{ name: '层数', valueName: '4层' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 110,
				},
				{
					id: 'sku_store_33_4',
					specs: [
						{ name: '层数', valueName: '4层' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 105,
				},
				{
					id: 'sku_store_33_5',
					specs: [
						{ name: '层数', valueName: '5层' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 100,
				},
				{
					id: 'sku_store_33_6',
					specs: [
						{ name: '层数', valueName: '5层' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 95,
				},
			],
		},
		{
			name: '眼镜收纳盒多格',
			desc: '收纳多副眼镜太阳镜，防尘防压',
			brand: { name: '眼镜盒' },
			specs: [
				{ name: '格数', values: [{ name: '3格' }, { name: '5格' }] },
				{ name: '材质', values: [{ name: '塑料' }, { name: '皮质' }] },
			],
			skus: [
				{
					id: 'sku_store_34_1',
					specs: [
						{ name: '格数', valueName: '3格' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_store_34_2',
					specs: [
						{ name: '格数', valueName: '3格' },
						{ name: '材质', valueName: '皮质' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
				{
					id: 'sku_store_34_3',
					specs: [
						{ name: '格数', valueName: '5格' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 90,
				},
				{
					id: 'sku_store_34_4',
					specs: [
						{ name: '格数', valueName: '5格' },
						{ name: '材质', valueName: '皮质' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 70,
				},
			],
		},
		{
			name: '插排固定器壁挂',
			desc: '固定插排路由器，无痕粘贴，桌面整洁',
			brand: { name: '固定器' },
			specs: [
				{
					name: '数量',
					values: [{ name: '2个装' }, { name: '4个装' }],
				},
				{
					name: '款式',
					values: [{ name: '普通款' }, { name: '绕线款' }],
				},
			],
			skus: [
				{
					id: 'sku_store_35_1',
					specs: [
						{ name: '数量', valueName: '2个装' },
						{ name: '款式', valueName: '普通款' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 200,
				},
				{
					id: 'sku_store_35_2',
					specs: [
						{ name: '数量', valueName: '2个装' },
						{ name: '款式', valueName: '绕线款' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 180,
				},
				{
					id: 'sku_store_35_3',
					specs: [
						{ name: '数量', valueName: '4个装' },
						{ name: '款式', valueName: '普通款' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 160,
				},
				{
					id: 'sku_store_35_4',
					specs: [
						{ name: '数量', valueName: '4个装' },
						{ name: '款式', valueName: '绕线款' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 140,
				},
			],
		},
		{
			name: '帽子收纳架挂钩',
			desc: '门后挂帽子， clips设计，不变形',
			brand: { name: '帽子架' },
			specs: [
				{ name: '数量', values: [{ name: '5夹' }, { name: '10夹' }] },
				{ name: '颜色', values: [{ name: '白色' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_store_36_1',
					specs: [
						{ name: '数量', valueName: '5夹' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_store_36_2',
					specs: [
						{ name: '数量', valueName: '5夹' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 115,
				},
				{
					id: 'sku_store_36_3',
					specs: [
						{ name: '数量', valueName: '10夹' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_store_36_4',
					specs: [
						{ name: '数量', valueName: '10夹' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 95,
				},
			],
		},
		{
			name: '腰带收纳架',
			desc: '挂皮带围巾，节省衣柜空间，整齐美观',
			brand: { name: '腰带架' },
			specs: [
				{ name: '位数', values: [{ name: '5位' }, { name: '10位' }] },
				{ name: '材质', values: [{ name: '塑料' }, { name: '实木' }] },
			],
			skus: [
				{
					id: 'sku_store_37_1',
					specs: [
						{ name: '位数', valueName: '5位' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_store_37_2',
					specs: [
						{ name: '位数', valueName: '5位' },
						{ name: '材质', valueName: '实木' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_store_37_3',
					specs: [
						{ name: '位数', valueName: '10位' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'sku_store_37_4',
					specs: [
						{ name: '位数', valueName: '10位' },
						{ name: '材质', valueName: '实木' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 110,
				},
			],
		},
		{
			name: '冰箱收纳盒保鲜盒',
			desc: '食物保鲜，透明可视，可叠加',
			brand: { name: '保鲜盒' },
			specs: [
				{ name: '容量', values: [{ name: '1.5L' }, { name: '3L' }] },
				{
					name: '数量',
					values: [{ name: '2个装' }, { name: '4个装' }],
				},
			],
			skus: [
				{
					id: 'sku_store_38_1',
					specs: [
						{ name: '容量', valueName: '1.5L' },
						{ name: '数量', valueName: '2个装' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 100,
				},
				{
					id: 'sku_store_38_2',
					specs: [
						{ name: '容量', valueName: '1.5L' },
						{ name: '数量', valueName: '4个装' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 80,
				},
				{
					id: 'sku_store_38_3',
					specs: [
						{ name: '容量', valueName: '3L' },
						{ name: '数量', valueName: '2个装' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 90,
				},
				{
					id: 'sku_store_38_4',
					specs: [
						{ name: '容量', valueName: '3L' },
						{ name: '数量', valueName: '4个装' },
					],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 70,
				},
			],
		},
		{
			name: '毛巾架免打孔',
			desc: '粘贴式毛巾架，浴室卫生间，挂毛巾浴巾',
			brand: { name: '毛巾架' },
			specs: [
				{
					name: '长度',
					values: [{ name: '单杆(40cm)' }, { name: '双杆(60cm)' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '银色' }] },
			],
			skus: [
				{
					id: 'sku_store_39_1',
					specs: [
						{ name: '长度', valueName: '单杆(40cm)' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_store_39_2',
					specs: [
						{ name: '长度', valueName: '单杆(40cm)' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 130,
				},
				{
					id: 'sku_store_39_3',
					specs: [
						{ name: '长度', valueName: '双杆(60cm)' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 120,
				},
				{
					id: 'sku_store_39_4',
					specs: [
						{ name: '长度', valueName: '双杆(60cm)' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 110,
				},
			],
		},
		{
			name: '遥控器收纳盒桌面',
			desc: '茶几桌面收纳，遥控器手机小物件',
			brand: { name: '遥控器盒' },
			specs: [
				{ name: '格数', values: [{ name: '3格' }, { name: '5格' }] },
				{ name: '材质', values: [{ name: '塑料' }, { name: '木质' }] },
			],
			skus: [
				{
					id: 'sku_store_40_1',
					specs: [
						{ name: '格数', valueName: '3格' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_store_40_2',
					specs: [
						{ name: '格数', valueName: '3格' },
						{ name: '材质', valueName: '木质' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 120,
				},
				{
					id: 'sku_store_40_3',
					specs: [
						{ name: '格数', valueName: '5格' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'sku_store_40_4',
					specs: [
						{ name: '格数', valueName: '5格' },
						{ name: '材质', valueName: '木质' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 110,
				},
			],
		},
	],
	清洁用品: [
		{
			name: '宿舍扫把簸箕套装',
			desc: '软毛扫帚不伤地板，簸箕带梳齿可去毛发，可站立收纳',
			brand: { name: '洁净家' },
			specs: [
				{
					name: '款式',
					values: [{ name: '基础款' }, { name: '加长杆款' }],
				},
				{ name: '颜色', values: [{ name: '蓝色' }, { name: '灰色' }] },
			],
			skus: [
				{
					id: 'sku_clean_1_1',
					specs: [
						{ name: '款式', valueName: '基础款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
				{
					id: 'sku_clean_1_2',
					specs: [
						{ name: '款式', valueName: '基础款' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 75,
				},
				{
					id: 'sku_clean_1_3',
					specs: [
						{ name: '款式', valueName: '加长杆款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 60,
				},
				{
					id: 'sku_clean_1_4',
					specs: [
						{ name: '款式', valueName: '加长杆款' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 55,
				},
			],
		},
		{
			name: '平板拖把免手洗',
			desc: '360度旋转拖头，干湿两用，刮水板设计免手洗',
			brand: { name: '轻松拖' },
			specs: [
				{
					name: '杆长',
					values: [
						{ name: '标准杆(110cm)' },
						{ name: '加长杆(130cm)' },
					],
				},
				{
					name: '配置',
					values: [{ name: '含2块布' }, { name: '含4块布' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_2_1',
					specs: [
						{ name: '杆长', valueName: '标准杆(110cm)' },
						{ name: '配置', valueName: '含2块布' },
					],
					price: 29.9,
					oldPrice: 49.9,
					inventory: 70,
				},
				{
					id: 'sku_clean_2_2',
					specs: [
						{ name: '杆长', valueName: '标准杆(110cm)' },
						{ name: '配置', valueName: '含4块布' },
					],
					price: 39.9,
					oldPrice: 65.0,
					inventory: 50,
				},
				{
					id: 'sku_clean_2_3',
					specs: [
						{ name: '杆长', valueName: '加长杆(130cm)' },
						{ name: '配置', valueName: '含2块布' },
					],
					price: 35.9,
					oldPrice: 59.9,
					inventory: 45,
				},
				{
					id: 'sku_clean_2_4',
					specs: [
						{ name: '杆长', valueName: '加长杆(130cm)' },
						{ name: '配置', valueName: '含4块布' },
					],
					price: 45.9,
					oldPrice: 75.0,
					inventory: 35,
				},
			],
		},
		{
			name: '垃圾袋加厚手提式',
			desc: '背心式手提设计，加厚不易破，宿舍必备',
			brand: { name: '袋袋平安' },
			specs: [
				{
					name: '厚度',
					values: [
						{ name: '常规款' },
						{ name: '加厚款' },
						{ name: '特厚款' },
					],
				},
				{
					name: '数量',
					values: [{ name: '100只装' }, { name: '200只装' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_3_1',
					specs: [
						{ name: '厚度', valueName: '常规款' },
						{ name: '数量', valueName: '100只装' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_clean_3_2',
					specs: [
						{ name: '厚度', valueName: '常规款' },
						{ name: '数量', valueName: '200只装' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_clean_3_3',
					specs: [
						{ name: '厚度', valueName: '加厚款' },
						{ name: '数量', valueName: '100只装' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 130,
				},
				{
					id: 'sku_clean_3_4',
					specs: [
						{ name: '厚度', valueName: '加厚款' },
						{ name: '数量', valueName: '200只装' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_3_5',
					specs: [
						{ name: '厚度', valueName: '特厚款' },
						{ name: '数量', valueName: '100只装' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_clean_3_6',
					specs: [
						{ name: '厚度', valueName: '特厚款' },
						{ name: '数量', valueName: '200只装' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
			],
		},
		{
			name: '宿舍垃圾桶带盖',
			desc: '按压弹盖设计，防异味，圆形大容量',
			brand: { name: '洁净达' },
			specs: [
				{
					name: '容量',
					values: [{ name: '8L' }, { name: '12L' }, { name: '15L' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '灰色' },
						{ name: '蓝色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_clean_4_1',
					specs: [
						{ name: '容量', valueName: '8L' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_4_2',
					specs: [
						{ name: '容量', valueName: '8L' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 85,
				},
				{
					id: 'sku_clean_4_3',
					specs: [
						{ name: '容量', valueName: '8L' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 80,
				},
				{
					id: 'sku_clean_4_4',
					specs: [
						{ name: '容量', valueName: '12L' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 70,
				},
				{
					id: 'sku_clean_4_5',
					specs: [
						{ name: '容量', valueName: '12L' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 65,
				},
				{
					id: 'sku_clean_4_6',
					specs: [
						{ name: '容量', valueName: '15L' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 29.9,
					oldPrice: 49.9,
					inventory: 50,
				},
			],
		},
		{
			name: '除螨喷雾剂',
			desc: '植物萃取，除螨率99%，床上沙发可用，安全无刺激',
			brand: { name: '净螨专家' },
			specs: [
				{
					name: '规格',
					values: [{ name: '300ml单瓶装' }, { name: '300ml双瓶装' }],
				},
				{
					name: '香型',
					values: [{ name: '无香型' }, { name: '薰衣草' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_5_1',
					specs: [
						{ name: '规格', valueName: '300ml单瓶装' },
						{ name: '香型', valueName: '无香型' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_5_2',
					specs: [
						{ name: '规格', valueName: '300ml单瓶装' },
						{ name: '香型', valueName: '薰衣草' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 95,
				},
				{
					id: 'sku_clean_5_3',
					specs: [
						{ name: '规格', valueName: '300ml双瓶装' },
						{ name: '香型', valueName: '无香型' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 70,
				},
				{
					id: 'sku_clean_5_4',
					specs: [
						{ name: '规格', valueName: '300ml双瓶装' },
						{ name: '香型', valueName: '薰衣草' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 65,
				},
			],
		},
		{
			name: '洁厕灵马桶清洁剂',
			desc: '强效去污除菌，挂壁持久，清香除臭',
			brand: { name: '洁厕王' },
			specs: [
				{
					name: '规格',
					values: [
						{ name: '500g单瓶装' },
						{ name: '500gx2瓶' },
						{ name: '500gx3瓶' },
					],
				},
			],
			skus: [
				{
					id: 'sku_clean_6_1',
					specs: [{ name: '规格', valueName: '500g单瓶装' }],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_clean_6_2',
					specs: [{ name: '规格', valueName: '500gx2瓶' }],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_6_3',
					specs: [{ name: '规格', valueName: '500gx3瓶' }],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 70,
				},
			],
		},
		{
			name: '玻璃清洁剂喷雾',
			desc: '一喷一擦即亮，不留水痕，镜子窗户适用',
			brand: { name: '晶亮' },
			specs: [
				{
					name: '规格',
					values: [{ name: '400ml单瓶' }, { name: '400ml+补充装' }],
				},
				{
					name: '赠品',
					values: [{ name: '标准装' }, { name: '含刮水器' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_7_1',
					specs: [
						{ name: '规格', valueName: '400ml单瓶' },
						{ name: '赠品', valueName: '标准装' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_7_2',
					specs: [
						{ name: '规格', valueName: '400ml单瓶' },
						{ name: '赠品', valueName: '含刮水器' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 75,
				},
				{
					id: 'sku_clean_7_3',
					specs: [
						{ name: '规格', valueName: '400ml+补充装' },
						{ name: '赠品', valueName: '标准装' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 60,
				},
				{
					id: 'sku_clean_7_4',
					specs: [
						{ name: '规格', valueName: '400ml+补充装' },
						{ name: '赠品', valueName: '含刮水器' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 45,
				},
			],
		},
		{
			name: '百洁布洗碗海绵',
			desc: '双面双效，一面百洁布一面海绵，去污不伤器皿',
			brand: { name: '洁净多' },
			specs: [
				{
					name: '数量',
					values: [
						{ name: '5片装' },
						{ name: '10片装' },
						{ name: '20片装' },
					],
				},
				{ name: '颜色', values: [{ name: '彩色' }, { name: '绿色' }] },
			],
			skus: [
				{
					id: 'sku_clean_8_1',
					specs: [
						{ name: '数量', valueName: '5片装' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 200,
				},
				{
					id: 'sku_clean_8_2',
					specs: [
						{ name: '数量', valueName: '5片装' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 180,
				},
				{
					id: 'sku_clean_8_3',
					specs: [
						{ name: '数量', valueName: '10片装' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 150,
				},
				{
					id: 'sku_clean_8_4',
					specs: [
						{ name: '数量', valueName: '10片装' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 140,
				},
				{
					id: 'sku_clean_8_5',
					specs: [
						{ name: '数量', valueName: '20片装' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_8_6',
					specs: [
						{ name: '数量', valueName: '20片装' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
			],
		},
		{
			name: '粘毛器滚筒可撕式',
			desc: '轻松粘除衣物灰尘毛发，可撕式替换纸，随撕随用',
			brand: { name: '粘粘乐' },
			specs: [
				{ name: '手柄', values: [{ name: '短柄' }, { name: '长柄' }] },
				{
					name: '卷数',
					values: [
						{ name: '1卷(60撕)' },
						{ name: '3卷(180撕)' },
						{ name: '5卷(300撕)' },
					],
				},
			],
			skus: [
				{
					id: 'sku_clean_9_1',
					specs: [
						{ name: '手柄', valueName: '短柄' },
						{ name: '卷数', valueName: '1卷(60撕)' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 150,
				},
				{
					id: 'sku_clean_9_2',
					specs: [
						{ name: '手柄', valueName: '短柄' },
						{ name: '卷数', valueName: '3卷(180撕)' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_clean_9_3',
					specs: [
						{ name: '手柄', valueName: '短柄' },
						{ name: '卷数', valueName: '5卷(300撕)' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_9_4',
					specs: [
						{ name: '手柄', valueName: '长柄' },
						{ name: '卷数', valueName: '1卷(60撕)' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_9_5',
					specs: [
						{ name: '手柄', valueName: '长柄' },
						{ name: '卷数', valueName: '3卷(180撕)' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 80,
				},
				{
					id: 'sku_clean_9_6',
					specs: [
						{ name: '手柄', valueName: '长柄' },
						{ name: '卷数', valueName: '5卷(300撕)' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 60,
				},
			],
		},
		{
			name: '宿舍拖把桶旋转脱水',
			desc: '手压旋转脱水，免手洗，干湿两用',
			brand: { name: '旋转桶' },
			specs: [
				{ name: '配置', values: [{ name: '单桶' }, { name: '双桶' }] },
				{ name: '颜色', values: [{ name: '蓝色' }, { name: '粉色' }] },
			],
			skus: [
				{
					id: 'sku_clean_10_1',
					specs: [
						{ name: '配置', valueName: '单桶' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 60,
				},
				{
					id: 'sku_clean_10_2',
					specs: [
						{ name: '配置', valueName: '单桶' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 55,
				},
				{
					id: 'sku_clean_10_3',
					specs: [
						{ name: '配置', valueName: '双桶' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 49.9,
					oldPrice: 85.9,
					inventory: 45,
				},
				{
					id: 'sku_clean_10_4',
					specs: [
						{ name: '配置', valueName: '双桶' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 49.9,
					oldPrice: 85.9,
					inventory: 40,
				},
			],
		},
		{
			name: '宿舍专用除尘掸鸡毛掸',
			desc: '静电吸附灰尘，可伸缩长杆，不掉毛',
			brand: { name: '除尘掸' },
			specs: [
				{
					name: '款式',
					values: [{ name: '短款' }, { name: '可伸缩款' }],
				},
				{
					name: '替换头',
					values: [{ name: '含1个' }, { name: '含3个' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_11_1',
					specs: [
						{ name: '款式', valueName: '短款' },
						{ name: '替换头', valueName: '含1个' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_11_2',
					specs: [
						{ name: '款式', valueName: '短款' },
						{ name: '替换头', valueName: '含3个' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 85,
				},
				{
					id: 'sku_clean_11_3',
					specs: [
						{ name: '款式', valueName: '可伸缩款' },
						{ name: '替换头', valueName: '含1个' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_11_4',
					specs: [
						{ name: '款式', valueName: '可伸缩款' },
						{ name: '替换头', valueName: '含3个' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 75,
				},
			],
		},
		{
			name: '宿舍地板清洁剂',
			desc: '瓷砖木地板通用，去污留香，大瓶装',
			brand: { name: '地板净' },
			specs: [
				{ name: '规格', values: [{ name: '500ml' }, { name: '1L' }] },
				{
					name: '香型',
					values: [
						{ name: '柠檬' },
						{ name: '薰衣草' },
						{ name: '无香' },
					],
				},
			],
			skus: [
				{
					id: 'sku_clean_12_1',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_12_2',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '香型', valueName: '薰衣草' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 95,
				},
				{
					id: 'sku_clean_12_3',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '香型', valueName: '无香' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_12_4',
					specs: [
						{ name: '规格', valueName: '1L' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
				{
					id: 'sku_clean_12_5',
					specs: [
						{ name: '规格', valueName: '1L' },
						{ name: '香型', valueName: '薰衣草' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 75,
				},
				{
					id: 'sku_clean_12_6',
					specs: [
						{ name: '规格', valueName: '1L' },
						{ name: '香型', valueName: '无香' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 70,
				},
			],
		},
		{
			name: '宿舍专用除湿袋吸湿',
			desc: '挂式吸湿袋，衣柜防潮防霉，可替换',
			brand: { name: '除湿袋' },
			specs: [
				{
					name: '数量',
					values: [{ name: '5袋装' }, { name: '10袋装' }],
				},
				{
					name: '规格',
					values: [
						{ name: '标准款(230g)' },
						{ name: '加大款(500g)' },
					],
				},
			],
			skus: [
				{
					id: 'sku_clean_13_1',
					specs: [
						{ name: '数量', valueName: '5袋装' },
						{ name: '规格', valueName: '标准款(230g)' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_clean_13_2',
					specs: [
						{ name: '数量', valueName: '5袋装' },
						{ name: '规格', valueName: '加大款(500g)' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 120,
				},
				{
					id: 'sku_clean_13_3',
					specs: [
						{ name: '数量', valueName: '10袋装' },
						{ name: '规格', valueName: '标准款(230g)' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 130,
				},
				{
					id: 'sku_clean_13_4',
					specs: [
						{ name: '数量', valueName: '10袋装' },
						{ name: '规格', valueName: '加大款(500g)' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 100,
				},
			],
		},
		{
			name: '宿舍专用除湿盒',
			desc: '盒装吸湿，房间衣柜除湿，重复使用',
			brand: { name: '除湿盒' },
			specs: [
				{
					name: '数量',
					values: [{ name: '3盒装' }, { name: '6盒装' }],
				},
				{
					name: '规格',
					values: [{ name: '标准款' }, { name: '大容量款' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_14_1',
					specs: [
						{ name: '数量', valueName: '3盒装' },
						{ name: '规格', valueName: '标准款' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_14_2',
					specs: [
						{ name: '数量', valueName: '3盒装' },
						{ name: '规格', valueName: '大容量款' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 85,
				},
				{
					id: 'sku_clean_14_3',
					specs: [
						{ name: '数量', valueName: '6盒装' },
						{ name: '规格', valueName: '标准款' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_14_4',
					specs: [
						{ name: '数量', valueName: '6盒装' },
						{ name: '规格', valueName: '大容量款' },
					],
					price: 42.9,
					oldPrice: 72.0,
					inventory: 75,
				},
			],
		},
		{
			name: '宿舍专用防虫樟脑丸',
			desc: '衣柜防蛀防霉，驱虫防蟑螂，天然香型',
			brand: { name: '樟脑丸' },
			specs: [
				{
					name: '数量',
					values: [{ name: '20粒装' }, { name: '50粒装' }],
				},
				{
					name: '香型',
					values: [
						{ name: '薰衣草' },
						{ name: '柠檬' },
						{ name: '无香' },
					],
				},
			],
			skus: [
				{
					id: 'sku_clean_15_1',
					specs: [
						{ name: '数量', valueName: '20粒装' },
						{ name: '香型', valueName: '薰衣草' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 150,
				},
				{
					id: 'sku_clean_15_2',
					specs: [
						{ name: '数量', valueName: '20粒装' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 145,
				},
				{
					id: 'sku_clean_15_3',
					specs: [
						{ name: '数量', valueName: '20粒装' },
						{ name: '香型', valueName: '无香' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 140,
				},
				{
					id: 'sku_clean_15_4',
					specs: [
						{ name: '数量', valueName: '50粒装' },
						{ name: '香型', valueName: '薰衣草' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_clean_15_5',
					specs: [
						{ name: '数量', valueName: '50粒装' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 115,
				},
				{
					id: 'sku_clean_15_6',
					specs: [
						{ name: '数量', valueName: '50粒装' },
						{ name: '香型', valueName: '无香' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
			],
		},
		{
			name: '宿舍专用鞋刷洗衣刷',
			desc: '软硬双刷，鞋刷衣刷两用，长柄省力',
			brand: { name: '鞋刷家' },
			specs: [
				{
					name: '款式',
					values: [{ name: '软毛刷' }, { name: '硬毛刷' }],
				},
				{ name: '数量', values: [{ name: '单支' }, { name: '2支装' }] },
			],
			skus: [
				{
					id: 'sku_clean_16_1',
					specs: [
						{ name: '款式', valueName: '软毛刷' },
						{ name: '数量', valueName: '单支' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 200,
				},
				{
					id: 'sku_clean_16_2',
					specs: [
						{ name: '款式', valueName: '软毛刷' },
						{ name: '数量', valueName: '2支装' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 160,
				},
				{
					id: 'sku_clean_16_3',
					specs: [
						{ name: '款式', valueName: '硬毛刷' },
						{ name: '数量', valueName: '单支' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 190,
				},
				{
					id: 'sku_clean_16_4',
					specs: [
						{ name: '款式', valueName: '硬毛刷' },
						{ name: '数量', valueName: '2支装' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 150,
				},
			],
		},
		{
			name: '宿舍专用漂白剂白色',
			desc: '衣物去黄增白，彩色衣物不可用，大瓶装',
			brand: { name: '漂白水' },
			specs: [
				{ name: '规格', values: [{ name: '500ml' }, { name: '1L' }] },
				{
					name: '功效',
					values: [{ name: '普通漂白' }, { name: '强效漂白' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_17_1',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '功效', valueName: '普通漂白' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_17_2',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '功效', valueName: '强效漂白' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_17_3',
					specs: [
						{ name: '规格', valueName: '1L' },
						{ name: '功效', valueName: '普通漂白' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 85,
				},
				{
					id: 'sku_clean_17_4',
					specs: [
						{ name: '规格', valueName: '1L' },
						{ name: '功效', valueName: '强效漂白' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 75,
				},
			],
		},
		{
			name: '宿舍专用彩漂剂彩色',
			desc: '彩色衣物去渍护色，去黄去霉斑，增艳',
			brand: { name: '彩漂液' },
			specs: [
				{ name: '规格', values: [{ name: '500ml' }, { name: '1L' }] },
				{
					name: '功效',
					values: [{ name: '普通彩漂' }, { name: '增艳彩漂' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_18_1',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '功效', valueName: '普通彩漂' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_18_2',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '功效', valueName: '增艳彩漂' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_18_3',
					specs: [
						{ name: '规格', valueName: '1L' },
						{ name: '功效', valueName: '普通彩漂' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 85,
				},
				{
					id: 'sku_clean_18_4',
					specs: [
						{ name: '规格', valueName: '1L' },
						{ name: '功效', valueName: '增艳彩漂' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 75,
				},
			],
		},
		{
			name: '宿舍专用衣领净',
			desc: '领口袖口去渍，喷雾设计，预处理污渍',
			brand: { name: '衣领净' },
			specs: [
				{
					name: '规格',
					values: [{ name: '200ml' }, { name: '500ml' }],
				},
				{
					name: '喷头',
					values: [{ name: '普通喷头' }, { name: '泡沫喷头' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_19_1',
					specs: [
						{ name: '规格', valueName: '200ml' },
						{ name: '喷头', valueName: '普通喷头' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_clean_19_2',
					specs: [
						{ name: '规格', valueName: '200ml' },
						{ name: '喷头', valueName: '泡沫喷头' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_19_3',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '喷头', valueName: '普通喷头' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 90,
				},
				{
					id: 'sku_clean_19_4',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '喷头', valueName: '泡沫喷头' },
					],
					price: 28.9,
					oldPrice: 49.9,
					inventory: 80,
				},
			],
		},
		{
			name: '宿舍专用洗衣机清洁剂',
			desc: '滚筒波轮通用，除垢除菌，洗衣机槽清洗',
			brand: { name: '机槽净' },
			specs: [
				{
					name: '规格',
					values: [{ name: '125g*3袋' }, { name: '125g*6袋' }],
				},
				{
					name: '功效',
					values: [
						{ name: '除垢型' },
						{ name: '除菌型' },
						{ name: '全能型' },
					],
				},
			],
			skus: [
				{
					id: 'sku_clean_20_1',
					specs: [
						{ name: '规格', valueName: '125g*3袋' },
						{ name: '功效', valueName: '除垢型' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_20_2',
					specs: [
						{ name: '规格', valueName: '125g*3袋' },
						{ name: '功效', valueName: '除菌型' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 95,
				},
				{
					id: 'sku_clean_20_3',
					specs: [
						{ name: '规格', valueName: '125g*3袋' },
						{ name: '功效', valueName: '全能型' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_20_4',
					specs: [
						{ name: '规格', valueName: '125g*6袋' },
						{ name: '功效', valueName: '除垢型' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
				{
					id: 'sku_clean_20_5',
					specs: [
						{ name: '规格', valueName: '125g*6袋' },
						{ name: '功效', valueName: '除菌型' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 75,
				},
				{
					id: 'sku_clean_20_6',
					specs: [
						{ name: '规格', valueName: '125g*6袋' },
						{ name: '功效', valueName: '全能型' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 70,
				},
			],
		},
		{
			name: '宿舍专用管道疏通剂',
			desc: '溶解堵塞物，疏通下水道马桶，除臭养护',
			brand: { name: '疏通王' },
			specs: [
				{ name: '规格', values: [{ name: '300g' }, { name: '600g' }] },
				{
					name: '功效',
					values: [{ name: '普通疏通' }, { name: '强力疏通' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_21_1',
					specs: [
						{ name: '规格', valueName: '300g' },
						{ name: '功效', valueName: '普通疏通' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_21_2',
					specs: [
						{ name: '规格', valueName: '300g' },
						{ name: '功效', valueName: '强力疏通' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_21_3',
					specs: [
						{ name: '规格', valueName: '600g' },
						{ name: '功效', valueName: '普通疏通' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 85,
				},
				{
					id: 'sku_clean_21_4',
					specs: [
						{ name: '规格', valueName: '600g' },
						{ name: '功效', valueName: '强力疏通' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 75,
				},
			],
		},
		{
			name: '宿舍专用空气清新剂',
			desc: '喷雾除臭，持久留香，房间厕所除味',
			brand: { name: '清新剂' },
			specs: [
				{
					name: '规格',
					values: [{ name: '320ml' }, { name: '500ml' }],
				},
				{
					name: '香型',
					values: [
						{ name: '柠檬' },
						{ name: '茉莉' },
						{ name: '海洋' },
					],
				},
			],
			skus: [
				{
					id: 'sku_clean_22_1',
					specs: [
						{ name: '规格', valueName: '320ml' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_clean_22_2',
					specs: [
						{ name: '规格', valueName: '320ml' },
						{ name: '香型', valueName: '茉莉' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 115,
				},
				{
					id: 'sku_clean_22_3',
					specs: [
						{ name: '规格', valueName: '320ml' },
						{ name: '香型', valueName: '海洋' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_clean_22_4',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_22_5',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '香型', valueName: '茉莉' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 95,
				},
				{
					id: 'sku_clean_22_6',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '香型', valueName: '海洋' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 90,
				},
			],
		},
		{
			name: '宿舍专用固体清香剂',
			desc: '放置式除臭，衣柜厕所房间，持久散香',
			brand: { name: '清香剂' },
			specs: [
				{
					name: '数量',
					values: [{ name: '3盒装' }, { name: '6盒装' }],
				},
				{
					name: '香型',
					values: [
						{ name: '薰衣草' },
						{ name: '柠檬' },
						{ name: '玫瑰' },
					],
				},
			],
			skus: [
				{
					id: 'sku_clean_23_1',
					specs: [
						{ name: '数量', valueName: '3盒装' },
						{ name: '香型', valueName: '薰衣草' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 130,
				},
				{
					id: 'sku_clean_23_2',
					specs: [
						{ name: '数量', valueName: '3盒装' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 125,
				},
				{
					id: 'sku_clean_23_3',
					specs: [
						{ name: '数量', valueName: '3盒装' },
						{ name: '香型', valueName: '玫瑰' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_clean_23_4',
					specs: [
						{ name: '数量', valueName: '6盒装' },
						{ name: '香型', valueName: '薰衣草' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 110,
				},
				{
					id: 'sku_clean_23_5',
					specs: [
						{ name: '数量', valueName: '6盒装' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 105,
				},
				{
					id: 'sku_clean_23_6',
					specs: [
						{ name: '数量', valueName: '6盒装' },
						{ name: '香型', valueName: '玫瑰' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 100,
				},
			],
		},
		{
			name: '宿舍专用鞋油黑色',
			desc: '黑色皮鞋保养，上光护理，防水防污',
			brand: { name: '鞋油王' },
			specs: [
				{ name: '规格', values: [{ name: '30g' }, { name: '50g' }] },
				{
					name: '配置',
					values: [{ name: '单支' }, { name: '含鞋刷' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_24_1',
					specs: [
						{ name: '规格', valueName: '30g' },
						{ name: '配置', valueName: '单支' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 150,
				},
				{
					id: 'sku_clean_24_2',
					specs: [
						{ name: '规格', valueName: '30g' },
						{ name: '配置', valueName: '含鞋刷' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 130,
				},
				{
					id: 'sku_clean_24_3',
					specs: [
						{ name: '规格', valueName: '50g' },
						{ name: '配置', valueName: '单支' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 140,
				},
				{
					id: 'sku_clean_24_4',
					specs: [
						{ name: '规格', valueName: '50g' },
						{ name: '配置', valueName: '含鞋刷' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 120,
				},
			],
		},
		{
			name: '宿舍专用鞋油无色',
			desc: '无色通用，各色皮鞋保养，上光护理',
			brand: { name: '万能油' },
			specs: [
				{ name: '规格', values: [{ name: '30g' }, { name: '50g' }] },
				{
					name: '配置',
					values: [{ name: '单支' }, { name: '含鞋刷' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_25_1',
					specs: [
						{ name: '规格', valueName: '30g' },
						{ name: '配置', valueName: '单支' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 150,
				},
				{
					id: 'sku_clean_25_2',
					specs: [
						{ name: '规格', valueName: '30g' },
						{ name: '配置', valueName: '含鞋刷' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 130,
				},
				{
					id: 'sku_clean_25_3',
					specs: [
						{ name: '规格', valueName: '50g' },
						{ name: '配置', valueName: '单支' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 140,
				},
				{
					id: 'sku_clean_25_4',
					specs: [
						{ name: '规格', valueName: '50g' },
						{ name: '配置', valueName: '含鞋刷' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 120,
				},
			],
		},
		{
			name: '宿舍专用小白鞋清洁剂',
			desc: '一擦即白，免水洗，增白去黄',
			brand: { name: '小白鞋' },
			specs: [
				{
					name: '规格',
					values: [{ name: '100ml' }, { name: '200ml' }],
				},
				{
					name: '配置',
					values: [{ name: '单瓶' }, { name: '含增白剂' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_26_1',
					specs: [
						{ name: '规格', valueName: '100ml' },
						{ name: '配置', valueName: '单瓶' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_clean_26_2',
					specs: [
						{ name: '规格', valueName: '100ml' },
						{ name: '配置', valueName: '含增白剂' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 100,
				},
				{
					id: 'sku_clean_26_3',
					specs: [
						{ name: '规格', valueName: '200ml' },
						{ name: '配置', valueName: '单瓶' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 110,
				},
				{
					id: 'sku_clean_26_4',
					specs: [
						{ name: '规格', valueName: '200ml' },
						{ name: '配置', valueName: '含增白剂' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 90,
				},
			],
		},
		{
			name: '宿舍专用鞋袜除臭剂',
			desc: '喷雾除臭，杀菌防臭，鞋柜鞋内去味',
			brand: { name: '除臭剂' },
			specs: [
				{
					name: '规格',
					values: [{ name: '100ml' }, { name: '260ml' }],
				},
				{
					name: '香型',
					values: [
						{ name: '无香' },
						{ name: '薄荷' },
						{ name: '柠檬' },
					],
				},
			],
			skus: [
				{
					id: 'sku_clean_27_1',
					specs: [
						{ name: '规格', valueName: '100ml' },
						{ name: '香型', valueName: '无香' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_clean_27_2',
					specs: [
						{ name: '规格', valueName: '100ml' },
						{ name: '香型', valueName: '薄荷' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 115,
				},
				{
					id: 'sku_clean_27_3',
					specs: [
						{ name: '规格', valueName: '100ml' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_clean_27_4',
					specs: [
						{ name: '规格', valueName: '260ml' },
						{ name: '香型', valueName: '无香' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_27_5',
					specs: [
						{ name: '规格', valueName: '260ml' },
						{ name: '香型', valueName: '薄荷' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 95,
				},
				{
					id: 'sku_clean_27_6',
					specs: [
						{ name: '规格', valueName: '260ml' },
						{ name: '香型', valueName: '柠檬' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
			],
		},
		{
			name: '宿舍专用皮革清洁剂',
			desc: '皮包皮衣皮鞋清洁，去污保养上光',
			brand: { name: '皮革净' },
			specs: [
				{
					name: '规格',
					values: [{ name: '150ml' }, { name: '300ml' }],
				},
				{
					name: '配置',
					values: [{ name: '单瓶' }, { name: '含护理油' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_28_1',
					specs: [
						{ name: '规格', valueName: '150ml' },
						{ name: '配置', valueName: '单瓶' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_28_2',
					specs: [
						{ name: '规格', valueName: '150ml' },
						{ name: '配置', valueName: '含护理油' },
					],
					price: 28.9,
					oldPrice: 49.9,
					inventory: 80,
				},
				{
					id: 'sku_clean_28_3',
					specs: [
						{ name: '规格', valueName: '300ml' },
						{ name: '配置', valueName: '单瓶' },
					],
					price: 28.9,
					oldPrice: 49.9,
					inventory: 90,
				},
				{
					id: 'sku_clean_28_4',
					specs: [
						{ name: '规格', valueName: '300ml' },
						{ name: '配置', valueName: '含护理油' },
					],
					price: 42.9,
					oldPrice: 72.0,
					inventory: 70,
				},
			],
		},
		{
			name: '宿舍专用不锈钢清洁剂',
			desc: '去污除锈，水龙头水槽清洁，光亮如新',
			brand: { name: '不锈钢净' },
			specs: [
				{ name: '规格', values: [{ name: '250g' }, { name: '500g' }] },
				{
					name: '配置',
					values: [{ name: '单瓶' }, { name: '含清洁布' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_29_1',
					specs: [
						{ name: '规格', valueName: '250g' },
						{ name: '配置', valueName: '单瓶' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_clean_29_2',
					specs: [
						{ name: '规格', valueName: '250g' },
						{ name: '配置', valueName: '含清洁布' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 95,
				},
				{
					id: 'sku_clean_29_3',
					specs: [
						{ name: '规格', valueName: '500g' },
						{ name: '配置', valueName: '单瓶' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_29_4',
					specs: [
						{ name: '规格', valueName: '500g' },
						{ name: '配置', valueName: '含清洁布' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 80,
				},
			],
		},
		{
			name: '宿舍专用瓷砖清洁剂',
			desc: '去污除垢，地砖墙砖清洁，光亮防滑',
			brand: { name: '瓷砖净' },
			specs: [
				{ name: '规格', values: [{ name: '500ml' }, { name: '1L' }] },
				{
					name: '功效',
					values: [{ name: '普通清洁' }, { name: '强效除垢' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_30_1',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '功效', valueName: '普通清洁' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_30_2',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '功效', valueName: '强效除垢' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_30_3',
					specs: [
						{ name: '规格', valueName: '1L' },
						{ name: '功效', valueName: '普通清洁' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 85,
				},
				{
					id: 'sku_clean_30_4',
					specs: [
						{ name: '规格', valueName: '1L' },
						{ name: '功效', valueName: '强效除垢' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 75,
				},
			],
		},
		{
			name: '宿舍专用除胶剂',
			desc: '去除不干胶标签，汽车家用除胶，不伤表面',
			brand: { name: '除胶王' },
			specs: [
				{
					name: '规格',
					values: [{ name: '100ml' }, { name: '450ml' }],
				},
				{
					name: '喷头',
					values: [{ name: '普通喷头' }, { name: '泡沫喷头' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_31_1',
					specs: [
						{ name: '规格', valueName: '100ml' },
						{ name: '喷头', valueName: '普通喷头' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_clean_31_2',
					specs: [
						{ name: '规格', valueName: '100ml' },
						{ name: '喷头', valueName: '泡沫喷头' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_31_3',
					specs: [
						{ name: '规格', valueName: '450ml' },
						{ name: '喷头', valueName: '普通喷头' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 90,
				},
				{
					id: 'sku_clean_31_4',
					specs: [
						{ name: '规格', valueName: '450ml' },
						{ name: '喷头', valueName: '泡沫喷头' },
					],
					price: 28.9,
					oldPrice: 49.9,
					inventory: 80,
				},
			],
		},
		{
			name: '宿舍专用除霉剂',
			desc: '墙体除霉，瓷砖缝隙，洗衣机胶圈除霉',
			brand: { name: '除霉王' },
			specs: [
				{ name: '规格', values: [{ name: '120g' }, { name: '500g' }] },
				{
					name: '喷头',
					values: [{ name: '喷雾瓶' }, { name: '啫喱管' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_32_1',
					specs: [
						{ name: '规格', valueName: '120g' },
						{ name: '喷头', valueName: '喷雾瓶' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_clean_32_2',
					specs: [
						{ name: '规格', valueName: '120g' },
						{ name: '喷头', valueName: '啫喱管' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 105,
				},
				{
					id: 'sku_clean_32_3',
					specs: [
						{ name: '规格', valueName: '500g' },
						{ name: '喷头', valueName: '喷雾瓶' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_32_4',
					specs: [
						{ name: '规格', valueName: '500g' },
						{ name: '喷头', valueName: '啫喱管' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 85,
				},
			],
		},
		{
			name: '宿舍专用重油污清洁剂',
			desc: '厨房油烟机清洁，强力去油，一喷即净',
			brand: { name: '油污净' },
			specs: [
				{ name: '规格', values: [{ name: '400ml' }, { name: '1L' }] },
				{
					name: '喷头',
					values: [{ name: '普通喷头' }, { name: '泡沫喷头' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_33_1',
					specs: [
						{ name: '规格', valueName: '400ml' },
						{ name: '喷头', valueName: '普通喷头' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_33_2',
					specs: [
						{ name: '规格', valueName: '400ml' },
						{ name: '喷头', valueName: '泡沫喷头' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_33_3',
					specs: [
						{ name: '规格', valueName: '1L' },
						{ name: '喷头', valueName: '普通喷头' },
					],
					price: 28.9,
					oldPrice: 49.9,
					inventory: 80,
				},
				{
					id: 'sku_clean_33_4',
					specs: [
						{ name: '规格', valueName: '1L' },
						{ name: '喷头', valueName: '泡沫喷头' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 70,
				},
			],
		},
		{
			name: '宿舍专用水垢清洁剂',
			desc: '去除水垢水渍，水龙头水壶清洁，光亮如新',
			brand: { name: '水垢净' },
			specs: [
				{ name: '规格', values: [{ name: '250g' }, { name: '500g' }] },
				{ name: '形态', values: [{ name: '粉末' }, { name: '液体' }] },
			],
			skus: [
				{
					id: 'sku_clean_34_1',
					specs: [
						{ name: '规格', valueName: '250g' },
						{ name: '形态', valueName: '粉末' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_clean_34_2',
					specs: [
						{ name: '规格', valueName: '250g' },
						{ name: '形态', valueName: '液体' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_clean_34_3',
					specs: [
						{ name: '规格', valueName: '500g' },
						{ name: '形态', valueName: '粉末' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_34_4',
					specs: [
						{ name: '规格', valueName: '500g' },
						{ name: '形态', valueName: '液体' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 90,
				},
			],
		},
		{
			name: '宿舍专用空调清洁剂',
			desc: '清洗空调滤网散热片，除菌除臭，免拆洗',
			brand: { name: '空调净' },
			specs: [
				{ name: '规格', values: [{ name: '500ml' }, { name: '1L' }] },
				{
					name: '配置',
					values: [{ name: '单瓶' }, { name: '含导管' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_35_1',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '配置', valueName: '单瓶' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 90,
				},
				{
					id: 'sku_clean_35_2',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '配置', valueName: '含导管' },
					],
					price: 28.9,
					oldPrice: 49.9,
					inventory: 80,
				},
				{
					id: 'sku_clean_35_3',
					specs: [
						{ name: '规格', valueName: '1L' },
						{ name: '配置', valueName: '单瓶' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 75,
				},
				{
					id: 'sku_clean_35_4',
					specs: [
						{ name: '规格', valueName: '1L' },
						{ name: '配置', valueName: '含导管' },
					],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 65,
				},
			],
		},
		{
			name: '宿舍专用纱窗清洁剂',
			desc: '免拆洗纱窗，一喷即净，去污除灰',
			brand: { name: '纱窗净' },
			specs: [
				{
					name: '规格',
					values: [{ name: '300ml' }, { name: '500ml' }],
				},
				{
					name: '喷头',
					values: [{ name: '普通喷头' }, { name: '泡沫喷头' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_36_1',
					specs: [
						{ name: '规格', valueName: '300ml' },
						{ name: '喷头', valueName: '普通喷头' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_clean_36_2',
					specs: [
						{ name: '规格', valueName: '300ml' },
						{ name: '喷头', valueName: '泡沫喷头' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 90,
				},
				{
					id: 'sku_clean_36_3',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '喷头', valueName: '普通喷头' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 85,
				},
				{
					id: 'sku_clean_36_4',
					specs: [
						{ name: '规格', valueName: '500ml' },
						{ name: '喷头', valueName: '泡沫喷头' },
					],
					price: 28.9,
					oldPrice: 49.9,
					inventory: 75,
				},
			],
		},
		{
			name: '宿舍专用地板蜡',
			desc: '木地板保养上光，防滑耐磨，持久保护',
			brand: { name: '地板蜡' },
			specs: [
				{ name: '规格', values: [{ name: '300g' }, { name: '500g' }] },
				{ name: '光泽', values: [{ name: '高光' }, { name: '哑光' }] },
			],
			skus: [
				{
					id: 'sku_clean_37_1',
					specs: [
						{ name: '规格', valueName: '300g' },
						{ name: '光泽', valueName: '高光' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
				{
					id: 'sku_clean_37_2',
					specs: [
						{ name: '规格', valueName: '300g' },
						{ name: '光泽', valueName: '哑光' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 75,
				},
				{
					id: 'sku_clean_37_3',
					specs: [
						{ name: '规格', valueName: '500g' },
						{ name: '光泽', valueName: '高光' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 70,
				},
				{
					id: 'sku_clean_37_4',
					specs: [
						{ name: '规格', valueName: '500g' },
						{ name: '光泽', valueName: '哑光' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 65,
				},
			],
		},
		{
			name: '宿舍专用地毯清洁剂',
			desc: '免水洗地毯，去污除味，干洗即净',
			brand: { name: '地毯净' },
			specs: [
				{
					name: '规格',
					values: [{ name: '350ml' }, { name: '650ml' }],
				},
				{ name: '喷头', values: [{ name: '喷雾' }, { name: '泡沫' }] },
			],
			skus: [
				{
					id: 'sku_clean_38_1',
					specs: [
						{ name: '规格', valueName: '350ml' },
						{ name: '喷头', valueName: '喷雾' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 90,
				},
				{
					id: 'sku_clean_38_2',
					specs: [
						{ name: '规格', valueName: '350ml' },
						{ name: '喷头', valueName: '泡沫' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 85,
				},
				{
					id: 'sku_clean_38_3',
					specs: [
						{ name: '规格', valueName: '650ml' },
						{ name: '喷头', valueName: '喷雾' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 75,
				},
				{
					id: 'sku_clean_38_4',
					specs: [
						{ name: '规格', valueName: '650ml' },
						{ name: '喷头', valueName: '泡沫' },
					],
					price: 42.9,
					oldPrice: 72.0,
					inventory: 70,
				},
			],
		},
		{
			name: '宿舍专用静电除尘纸',
			desc: '一次性除尘纸，吸附灰尘毛发，平板拖把适用',
			brand: { name: '除尘纸' },
			specs: [
				{ name: '数量', values: [{ name: '20片' }, { name: '40片' }] },
				{ name: '尺寸', values: [{ name: '小号' }, { name: '大号' }] },
			],
			skus: [
				{
					id: 'sku_clean_39_1',
					specs: [
						{ name: '数量', valueName: '20片' },
						{ name: '尺寸', valueName: '小号' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_clean_39_2',
					specs: [
						{ name: '数量', valueName: '20片' },
						{ name: '尺寸', valueName: '大号' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'sku_clean_39_3',
					specs: [
						{ name: '数量', valueName: '40片' },
						{ name: '尺寸', valueName: '小号' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 130,
				},
				{
					id: 'sku_clean_39_4',
					specs: [
						{ name: '数量', valueName: '40片' },
						{ name: '尺寸', valueName: '大号' },
					],
					price: 28.9,
					oldPrice: 49.9,
					inventory: 120,
				},
			],
		},
		{
			name: '宿舍专用懒人抹布',
			desc: '干湿两用，一次性抹布，厨房清洁洗碗',
			brand: { name: '懒人布' },
			specs: [
				{ name: '数量', values: [{ name: '50片' }, { name: '100片' }] },
				{
					name: '尺寸',
					values: [{ name: '20x20cm' }, { name: '25x25cm' }],
				},
			],
			skus: [
				{
					id: 'sku_clean_40_1',
					specs: [
						{ name: '数量', valueName: '50片' },
						{ name: '尺寸', valueName: '20x20cm' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_clean_40_2',
					specs: [
						{ name: '数量', valueName: '50片' },
						{ name: '尺寸', valueName: '25x25cm' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'sku_clean_40_3',
					specs: [
						{ name: '数量', valueName: '100片' },
						{ name: '尺寸', valueName: '20x20cm' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 130,
				},
				{
					id: 'sku_clean_40_4',
					specs: [
						{ name: '数量', valueName: '100片' },
						{ name: '尺寸', valueName: '25x25cm' },
					],
					price: 28.9,
					oldPrice: 49.9,
					inventory: 120,
				},
			],
		},
	],
	文具用品: [
		{
			name: '中性笔按动式0.5mm',
			desc: '顺滑不断墨，速干不晕染，学生考试专用',
			brand: { name: '晨光' },
			specs: [
				{
					name: '颜色',
					values: [
						{ name: '黑色' },
						{ name: '蓝色' },
						{ name: '红色' },
					],
				},
				{
					name: '数量',
					values: [{ name: '3支装' }, { name: '12支装' }],
				},
			],
			skus: [
				{
					id: 'sku_stationery_1_1',
					specs: [
						{ name: '颜色', valueName: '黑色' },
						{ name: '数量', valueName: '3支装' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_1_2',
					specs: [
						{ name: '颜色', valueName: '黑色' },
						{ name: '数量', valueName: '12支装' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_1_3',
					specs: [
						{ name: '颜色', valueName: '蓝色' },
						{ name: '数量', valueName: '3支装' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_1_4',
					specs: [
						{ name: '颜色', valueName: '蓝色' },
						{ name: '数量', valueName: '12支装' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'sku_stationery_1_5',
					specs: [
						{ name: '颜色', valueName: '红色' },
						{ name: '数量', valueName: '3支装' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 160,
				},
				{
					id: 'sku_stationery_1_6',
					specs: [
						{ name: '颜色', valueName: '红色' },
						{ name: '数量', valueName: '12支装' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
			],
		},
		{
			name: 'A4打印纸复印纸',
			desc: '70g标准厚度，双面打印不卡纸，整箱实惠装',
			brand: { name: '得力' },
			specs: [
				{ name: '克重', values: [{ name: '70g' }, { name: '80g' }] },
				{
					name: '包装',
					values: [
						{ name: '100张' },
						{ name: '500张' },
						{ name: '5包(2500张)' },
					],
				},
			],
			skus: [
				{
					id: 'sku_stationery_2_1',
					specs: [
						{ name: '克重', valueName: '70g' },
						{ name: '包装', valueName: '100张' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_2_2',
					specs: [
						{ name: '克重', valueName: '70g' },
						{ name: '包装', valueName: '500张' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_stationery_2_3',
					specs: [
						{ name: '克重', valueName: '70g' },
						{ name: '包装', valueName: '5包(2500张)' },
					],
					price: 89.9,
					oldPrice: 149.9,
					inventory: 50,
				},
				{
					id: 'sku_stationery_2_4',
					specs: [
						{ name: '克重', valueName: '80g' },
						{ name: '包装', valueName: '100张' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 120,
				},
				{
					id: 'sku_stationery_2_5',
					specs: [
						{ name: '克重', valueName: '80g' },
						{ name: '包装', valueName: '500张' },
					],
					price: 24.9,
					oldPrice: 42.0,
					inventory: 80,
				},
				{
					id: 'sku_stationery_2_6',
					specs: [
						{ name: '克重', valueName: '80g' },
						{ name: '包装', valueName: '5包(2500张)' },
					],
					price: 109.9,
					oldPrice: 179.9,
					inventory: 35,
				},
			],
		},
		{
			name: '笔记本子加厚记事本',
			desc: 'B5大号，80张加厚纸张，线装不掉页',
			brand: { name: '齐心' },
			specs: [
				{
					name: '规格',
					values: [{ name: 'B5(大)' }, { name: 'A5(中)' }],
				},
				{ name: '页数', values: [{ name: '80页' }, { name: '120页' }] },
				{
					name: '颜色',
					values: [
						{ name: '蓝色' },
						{ name: '绿色' },
						{ name: '灰色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_stationery_3_1',
					specs: [
						{ name: '规格', valueName: 'B5(大)' },
						{ name: '页数', valueName: '80页' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 100,
				},
				{
					id: 'sku_stationery_3_2',
					specs: [
						{ name: '规格', valueName: 'B5(大)' },
						{ name: '页数', valueName: '80页' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 95,
				},
				{
					id: 'sku_stationery_3_3',
					specs: [
						{ name: '规格', valueName: 'B5(大)' },
						{ name: '页数', valueName: '120页' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 80,
				},
				{
					id: 'sku_stationery_3_4',
					specs: [
						{ name: '规格', valueName: 'A5(中)' },
						{ name: '页数', valueName: '80页' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 120,
				},
				{
					id: 'sku_stationery_3_5',
					specs: [
						{ name: '规格', valueName: 'A5(中)' },
						{ name: '页数', valueName: '120页' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 9.9,
					oldPrice: 16.0,
					inventory: 90,
				},
			],
		},
		{
			name: '荧光笔标记笔套装',
			desc: '淡色系护眼，双头设计，重点标记不渗透',
			brand: { name: '斑马' },
			specs: [
				{
					name: '数量',
					values: [
						{ name: '3色套装' },
						{ name: '5色套装' },
						{ name: '10色套装' },
					],
				},
				{
					name: '色系',
					values: [{ name: '淡色系' }, { name: '荧光系' }],
				},
			],
			skus: [
				{
					id: 'sku_stationery_4_1',
					specs: [
						{ name: '数量', valueName: '3色套装' },
						{ name: '色系', valueName: '淡色系' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_stationery_4_2',
					specs: [
						{ name: '数量', valueName: '3色套装' },
						{ name: '色系', valueName: '荧光系' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 110,
				},
				{
					id: 'sku_stationery_4_3',
					specs: [
						{ name: '数量', valueName: '5色套装' },
						{ name: '色系', valueName: '淡色系' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_stationery_4_4',
					specs: [
						{ name: '数量', valueName: '5色套装' },
						{ name: '色系', valueName: '荧光系' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 85,
				},
				{
					id: 'sku_stationery_4_5',
					specs: [
						{ name: '数量', valueName: '10色套装' },
						{ name: '色系', valueName: '淡色系' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 60,
				},
				{
					id: 'sku_stationery_4_6',
					specs: [
						{ name: '数量', valueName: '10色套装' },
						{ name: '色系', valueName: '荧光系' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 55,
				},
			],
		},
		{
			name: '修正带大容量涂改带',
			desc: '静音顺滑，覆盖力强，学生考试改错必备',
			brand: { name: '普乐士' },
			specs: [
				{ name: '长度', values: [{ name: '12米' }, { name: '30米' }] },
				{ name: '宽度', values: [{ name: '5mm' }, { name: '6mm' }] },
			],
			skus: [
				{
					id: 'sku_stationery_5_1',
					specs: [
						{ name: '长度', valueName: '12米' },
						{ name: '宽度', valueName: '5mm' },
					],
					price: 4.9,
					oldPrice: 9.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_5_2',
					specs: [
						{ name: '长度', valueName: '12米' },
						{ name: '宽度', valueName: '6mm' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 160,
				},
				{
					id: 'sku_stationery_5_3',
					specs: [
						{ name: '长度', valueName: '30米' },
						{ name: '宽度', valueName: '5mm' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_stationery_5_4',
					specs: [
						{ name: '长度', valueName: '30米' },
						{ name: '宽度', valueName: '6mm' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 100,
				},
			],
		},
		{
			name: '订书机省力型',
			desc: '一指按压，可订50页，附赠订书钉',
			brand: { name: '得力' },
			specs: [
				{
					name: '颜色',
					values: [
						{ name: '黑色' },
						{ name: '白色' },
						{ name: '蓝色' },
					],
				},
				{
					name: '配置',
					values: [
						{ name: '单机' },
						{ name: '含1000钉' },
						{ name: '含2000钉+起钉器' },
					],
				},
			],
			skus: [
				{
					id: 'sku_stationery_6_1',
					specs: [
						{ name: '颜色', valueName: '黑色' },
						{ name: '配置', valueName: '单机' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_stationery_6_2',
					specs: [
						{ name: '颜色', valueName: '黑色' },
						{ name: '配置', valueName: '含1000钉' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 80,
				},
				{
					id: 'sku_stationery_6_3',
					specs: [
						{ name: '颜色', valueName: '白色' },
						{ name: '配置', valueName: '单机' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 90,
				},
				{
					id: 'sku_stationery_6_4',
					specs: [
						{ name: '颜色', valueName: '蓝色' },
						{ name: '配置', valueName: '含2000钉+起钉器' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 60,
				},
			],
		},
		{
			name: '剪刀办公剪纸刀',
			desc: '不锈钢材质，手工剪纸剪线头，安全圆头',
			brand: { name: '张小泉' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '小号(12cm)' },
						{ name: '中号(15cm)' },
						{ name: '大号(18cm)' },
					],
				},
				{ name: '颜色', values: [{ name: '蓝色' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_stationery_7_1',
					specs: [
						{ name: '尺寸', valueName: '小号(12cm)' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_7_2',
					specs: [
						{ name: '尺寸', valueName: '小号(12cm)' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 140,
				},
				{
					id: 'sku_stationery_7_3',
					specs: [
						{ name: '尺寸', valueName: '中号(15cm)' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 7.9,
					oldPrice: 14.0,
					inventory: 120,
				},
				{
					id: 'sku_stationery_7_4',
					specs: [
						{ name: '尺寸', valueName: '中号(15cm)' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 7.9,
					oldPrice: 14.0,
					inventory: 110,
				},
				{
					id: 'sku_stationery_7_5',
					specs: [
						{ name: '尺寸', valueName: '大号(18cm)' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 90,
				},
				{
					id: 'sku_stationery_7_6',
					specs: [
						{ name: '尺寸', valueName: '大号(18cm)' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 85,
				},
			],
		},
		{
			name: '回形针曲别针',
			desc: '镀镍防锈，文件资料整理分类，彩色可选',
			brand: { name: '得力' },
			specs: [
				{
					name: '数量',
					values: [{ name: '100枚' }, { name: '200枚' }],
				},
				{ name: '颜色', values: [{ name: '银色' }, { name: '彩色' }] },
			],
			skus: [
				{
					id: 'sku_stationery_8_1',
					specs: [
						{ name: '数量', valueName: '100枚' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 3.9,
					oldPrice: 7.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_8_2',
					specs: [
						{ name: '数量', valueName: '100枚' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 4.9,
					oldPrice: 9.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_8_3',
					specs: [
						{ name: '数量', valueName: '200枚' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_8_4',
					specs: [
						{ name: '数量', valueName: '200枚' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 130,
				},
			],
		},
		{
			name: '文件袋透明拉链袋',
			desc: 'A4尺寸，防水防尘，资料试卷分类收纳',
			brand: { name: '晨光' },
			specs: [
				{
					name: '厚度',
					values: [{ name: '普通款' }, { name: '加厚款' }],
				},
				{
					name: '数量',
					values: [
						{ name: '5个装' },
						{ name: '10个装' },
						{ name: '20个装' },
					],
				},
				{ name: '颜色', values: [{ name: '透明' }, { name: '混色' }] },
			],
			skus: [
				{
					id: 'sku_stationery_9_1',
					specs: [
						{ name: '厚度', valueName: '普通款' },
						{ name: '数量', valueName: '5个装' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_stationery_9_2',
					specs: [
						{ name: '厚度', valueName: '普通款' },
						{ name: '数量', valueName: '5个装' },
						{ name: '颜色', valueName: '混色' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 100,
				},
				{
					id: 'sku_stationery_9_3',
					specs: [
						{ name: '厚度', valueName: '普通款' },
						{ name: '数量', valueName: '10个装' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 17.9,
					oldPrice: 32.0,
					inventory: 80,
				},
				{
					id: 'sku_stationery_9_4',
					specs: [
						{ name: '厚度', valueName: '加厚款' },
						{ name: '数量', valueName: '10个装' },
						{ name: '颜色', valueName: '混色' },
					],
					price: 22.9,
					oldPrice: 40.0,
					inventory: 60,
				},
				{
					id: 'sku_stationery_9_5',
					specs: [
						{ name: '厚度', valueName: '加厚款' },
						{ name: '数量', valueName: '20个装' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 40,
				},
			],
		},
		{
			name: '2B铅笔考试专用涂卡笔',
			desc: '考试涂卡专用，浓度标准，易擦除，12支装',
			brand: { name: '得力' },
			specs: [
				{
					name: '数量',
					values: [{ name: '6支装' }, { name: '12支装' }],
				},
				{
					name: '附赠',
					values: [{ name: '无橡皮' }, { name: '含橡皮' }],
				},
			],
			skus: [
				{
					id: 'sku_stationery_10_1',
					specs: [
						{ name: '数量', valueName: '6支装' },
						{ name: '附赠', valueName: '无橡皮' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_10_2',
					specs: [
						{ name: '数量', valueName: '6支装' },
						{ name: '附赠', valueName: '含橡皮' },
					],
					price: 7.9,
					oldPrice: 14.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_10_3',
					specs: [
						{ name: '数量', valueName: '12支装' },
						{ name: '附赠', valueName: '无橡皮' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 160,
				},
				{
					id: 'sku_stationery_10_4',
					specs: [
						{ name: '数量', valueName: '12支装' },
						{ name: '附赠', valueName: '含橡皮' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 150,
				},
			],
		},
		{
			name: '橡皮擦无屑干净不留痕',
			desc: '美术绘图专用，擦拭干净，少屑易清理',
			brand: { name: '樱花' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '小号' },
						{ name: '中号' },
						{ name: '大号' },
					],
				},
				{
					name: '类型',
					values: [{ name: '普通款' }, { name: '美术款' }],
				},
			],
			skus: [
				{
					id: 'sku_stationery_11_1',
					specs: [
						{ name: '尺寸', valueName: '小号' },
						{ name: '类型', valueName: '普通款' },
					],
					price: 3.9,
					oldPrice: 7.0,
					inventory: 250,
				},
				{
					id: 'sku_stationery_11_2',
					specs: [
						{ name: '尺寸', valueName: '小号' },
						{ name: '类型', valueName: '美术款' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_11_3',
					specs: [
						{ name: '尺寸', valueName: '中号' },
						{ name: '类型', valueName: '普通款' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 220,
				},
				{
					id: 'sku_stationery_11_4',
					specs: [
						{ name: '尺寸', valueName: '中号' },
						{ name: '类型', valueName: '美术款' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_11_5',
					specs: [
						{ name: '尺寸', valueName: '大号' },
						{ name: '类型', valueName: '普通款' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_11_6',
					specs: [
						{ name: '尺寸', valueName: '大号' },
						{ name: '类型', valueName: '美术款' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
			],
		},
		{
			name: '直尺套尺四件套',
			desc: '含直尺三角板量角器，透明刻度清晰，学生绘图',
			brand: { name: '晨光' },
			specs: [
				{
					name: '长度',
					values: [
						{ name: '15cm' },
						{ name: '20cm' },
						{ name: '30cm' },
					],
				},
				{ name: '材质', values: [{ name: '塑料' }, { name: '金属' }] },
			],
			skus: [
				{
					id: 'sku_stationery_12_1',
					specs: [
						{ name: '长度', valueName: '15cm' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_12_2',
					specs: [
						{ name: '长度', valueName: '15cm' },
						{ name: '材质', valueName: '金属' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_12_3',
					specs: [
						{ name: '长度', valueName: '20cm' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_12_4',
					specs: [
						{ name: '长度', valueName: '20cm' },
						{ name: '材质', valueName: '金属' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 140,
				},
				{
					id: 'sku_stationery_12_5',
					specs: [
						{ name: '长度', valueName: '30cm' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 160,
				},
				{
					id: 'sku_stationery_12_6',
					specs: [
						{ name: '长度', valueName: '30cm' },
						{ name: '材质', valueName: '金属' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
			],
		},
		{
			name: '圆规学生考试绘图用',
			desc: '金属材质，带替换笔芯，数学几何绘图',
			brand: { name: '得力' },
			specs: [
				{
					name: '款式',
					values: [{ name: '简易款' }, { name: '专业款' }],
				},
				{
					name: '附赠',
					values: [{ name: '含铅芯' }, { name: '含笔芯套装' }],
				},
			],
			skus: [
				{
					id: 'sku_stationery_13_1',
					specs: [
						{ name: '款式', valueName: '简易款' },
						{ name: '附赠', valueName: '含铅芯' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_13_2',
					specs: [
						{ name: '款式', valueName: '简易款' },
						{ name: '附赠', valueName: '含笔芯套装' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_13_3',
					specs: [
						{ name: '款式', valueName: '专业款' },
						{ name: '附赠', valueName: '含铅芯' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'sku_stationery_13_4',
					specs: [
						{ name: '款式', valueName: '专业款' },
						{ name: '附赠', valueName: '含笔芯套装' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 120,
				},
			],
		},
		{
			name: '便利贴便签纸彩色',
			desc: '多色可选，粘性强劲，标记备忘，办公学习',
			brand: { name: '3M' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '76x76mm' }, { name: '76x50mm' }],
				},
				{
					name: '数量',
					values: [{ name: '100张/本' }, { name: '200张/本' }],
				},
			],
			skus: [
				{
					id: 'sku_stationery_14_1',
					specs: [
						{ name: '尺寸', valueName: '76x76mm' },
						{ name: '数量', valueName: '100张/本' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_14_2',
					specs: [
						{ name: '尺寸', valueName: '76x76mm' },
						{ name: '数量', valueName: '200张/本' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 160,
				},
				{
					id: 'sku_stationery_14_3',
					specs: [
						{ name: '尺寸', valueName: '76x50mm' },
						{ name: '数量', valueName: '100张/本' },
					],
					price: 4.9,
					oldPrice: 9.0,
					inventory: 220,
				},
				{
					id: 'sku_stationery_14_4',
					specs: [
						{ name: '尺寸', valueName: '76x50mm' },
						{ name: '数量', valueName: '200张/本' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 180,
				},
			],
		},
		{
			name: '胶水固体胶棒',
			desc: 'PVP材质，粘性强， dries快，手工办公',
			brand: { name: '得力' },
			specs: [
				{
					name: '规格',
					values: [{ name: '9g' }, { name: '21g' }, { name: '36g' }],
				},
				{ name: '数量', values: [{ name: '单支' }, { name: '3支装' }] },
			],
			skus: [
				{
					id: 'sku_stationery_15_1',
					specs: [
						{ name: '规格', valueName: '9g' },
						{ name: '数量', valueName: '单支' },
					],
					price: 2.9,
					oldPrice: 5.0,
					inventory: 300,
				},
				{
					id: 'sku_stationery_15_2',
					specs: [
						{ name: '规格', valueName: '9g' },
						{ name: '数量', valueName: '3支装' },
					],
					price: 7.9,
					oldPrice: 14.0,
					inventory: 250,
				},
				{
					id: 'sku_stationery_15_3',
					specs: [
						{ name: '规格', valueName: '21g' },
						{ name: '数量', valueName: '单支' },
					],
					price: 4.9,
					oldPrice: 9.0,
					inventory: 280,
				},
				{
					id: 'sku_stationery_15_4',
					specs: [
						{ name: '规格', valueName: '21g' },
						{ name: '数量', valueName: '3支装' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 220,
				},
				{
					id: 'sku_stationery_15_5',
					specs: [
						{ name: '规格', valueName: '36g' },
						{ name: '数量', valueName: '单支' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_15_6',
					specs: [
						{ name: '规格', valueName: '36g' },
						{ name: '数量', valueName: '3支装' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 160,
				},
			],
		},
		{
			name: '透明胶带封箱胶带',
			desc: '高粘力，不易断，封箱打包，办公家用',
			brand: { name: '得力' },
			specs: [
				{
					name: '宽度',
					values: [
						{ name: '24mm' },
						{ name: '45mm' },
						{ name: '60mm' },
					],
				},
				{ name: '长度', values: [{ name: '30米' }, { name: '100米' }] },
			],
			skus: [
				{
					id: 'sku_stationery_16_1',
					specs: [
						{ name: '宽度', valueName: '24mm' },
						{ name: '长度', valueName: '30米' },
					],
					price: 3.9,
					oldPrice: 7.0,
					inventory: 250,
				},
				{
					id: 'sku_stationery_16_2',
					specs: [
						{ name: '宽度', valueName: '24mm' },
						{ name: '长度', valueName: '100米' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_16_3',
					specs: [
						{ name: '宽度', valueName: '45mm' },
						{ name: '长度', valueName: '30米' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 220,
				},
				{
					id: 'sku_stationery_16_4',
					specs: [
						{ name: '宽度', valueName: '45mm' },
						{ name: '长度', valueName: '100米' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_16_5',
					specs: [
						{ name: '宽度', valueName: '60mm' },
						{ name: '长度', valueName: '30米' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_16_6',
					specs: [
						{ name: '宽度', valueName: '60mm' },
						{ name: '长度', valueName: '100米' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 120,
				},
			],
		},
		{
			name: '双面胶带海绵胶',
			desc: '强力双面胶，泡沫海绵，手工装饰固定',
			brand: { name: '得力' },
			specs: [
				{ name: '宽度', values: [{ name: '12mm' }, { name: '24mm' }] },
				{ name: '长度', values: [{ name: '3米' }, { name: '5米' }] },
			],
			skus: [
				{
					id: 'sku_stationery_17_1',
					specs: [
						{ name: '宽度', valueName: '12mm' },
						{ name: '长度', valueName: '3米' },
					],
					price: 4.9,
					oldPrice: 9.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_17_2',
					specs: [
						{ name: '宽度', valueName: '12mm' },
						{ name: '长度', valueName: '5米' },
					],
					price: 7.9,
					oldPrice: 14.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_17_3',
					specs: [
						{ name: '宽度', valueName: '24mm' },
						{ name: '长度', valueName: '3米' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 160,
				},
				{
					id: 'sku_stationery_17_4',
					specs: [
						{ name: '宽度', valueName: '24mm' },
						{ name: '长度', valueName: '5米' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 140,
				},
			],
		},
		{
			name: '燕尾夹长尾夹文件夹',
			desc: '金属材质，强力夹持，试卷资料整理',
			brand: { name: '得力' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '15mm' },
						{ name: '19mm' },
						{ name: '25mm' },
					],
				},
				{
					name: '数量',
					values: [{ name: '12个装' }, { name: '24个装' }],
				},
			],
			skus: [
				{
					id: 'sku_stationery_18_1',
					specs: [
						{ name: '尺寸', valueName: '15mm' },
						{ name: '数量', valueName: '12个装' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_18_2',
					specs: [
						{ name: '尺寸', valueName: '15mm' },
						{ name: '数量', valueName: '24个装' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_18_3',
					specs: [
						{ name: '尺寸', valueName: '19mm' },
						{ name: '数量', valueName: '12个装' },
					],
					price: 7.9,
					oldPrice: 14.0,
					inventory: 190,
				},
				{
					id: 'sku_stationery_18_4',
					specs: [
						{ name: '尺寸', valueName: '19mm' },
						{ name: '数量', valueName: '24个装' },
					],
					price: 13.9,
					oldPrice: 24.0,
					inventory: 170,
				},
				{
					id: 'sku_stationery_18_5',
					specs: [
						{ name: '尺寸', valueName: '25mm' },
						{ name: '数量', valueName: '12个装' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_18_6',
					specs: [
						{ name: '尺寸', valueName: '25mm' },
						{ name: '数量', valueName: '24个装' },
					],
					price: 17.9,
					oldPrice: 32.0,
					inventory: 160,
				},
			],
		},
		{
			name: '图钉按钉彩色工字钉',
			desc: '软木板照片墙，固定便签，色彩丰富',
			brand: { name: '得力' },
			specs: [
				{ name: '数量', values: [{ name: '35枚' }, { name: '80枚' }] },
				{
					name: '颜色',
					values: [{ name: '彩色' }, { name: '金属色' }],
				},
			],
			skus: [
				{
					id: 'sku_stationery_19_1',
					specs: [
						{ name: '数量', valueName: '35枚' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 4.9,
					oldPrice: 9.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_19_2',
					specs: [
						{ name: '数量', valueName: '35枚' },
						{ name: '颜色', valueName: '金属色' },
					],
					price: 3.9,
					oldPrice: 7.0,
					inventory: 220,
				},
				{
					id: 'sku_stationery_19_3',
					specs: [
						{ name: '数量', valueName: '80枚' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_19_4',
					specs: [
						{ name: '数量', valueName: '80枚' },
						{ name: '颜色', valueName: '金属色' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 200,
				},
			],
		},
		{
			name: '大头针定位针固定针',
			desc: '金属大头针，固定布料纸张，服装立裁',
			brand: { name: '得力' },
			specs: [
				{ name: '长度', values: [{ name: '24mm' }, { name: '30mm' }] },
				{ name: '数量', values: [{ name: '50枚' }, { name: '100枚' }] },
			],
			skus: [
				{
					id: 'sku_stationery_20_1',
					specs: [
						{ name: '长度', valueName: '24mm' },
						{ name: '数量', valueName: '50枚' },
					],
					price: 3.9,
					oldPrice: 7.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_20_2',
					specs: [
						{ name: '长度', valueName: '24mm' },
						{ name: '数量', valueName: '100枚' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_20_3',
					specs: [
						{ name: '长度', valueName: '30mm' },
						{ name: '数量', valueName: '50枚' },
					],
					price: 4.9,
					oldPrice: 9.0,
					inventory: 190,
				},
				{
					id: 'sku_stationery_20_4',
					specs: [
						{ name: '长度', valueName: '30mm' },
						{ name: '数量', valueName: '100枚' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 170,
				},
			],
		},
		{
			name: '计算器学生考试用',
			desc: '双电源，大屏显示，函数计算，考试专用',
			brand: { name: '卡西欧' },
			specs: [
				{
					name: '功能',
					values: [{ name: '基础款' }, { name: '科学款' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '黑色' },
						{ name: '白色' },
						{ name: '粉色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_stationery_21_1',
					specs: [
						{ name: '功能', valueName: '基础款' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_21_2',
					specs: [
						{ name: '功能', valueName: '基础款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'sku_stationery_21_3',
					specs: [
						{ name: '功能', valueName: '基础款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 130,
				},
				{
					id: 'sku_stationery_21_4',
					specs: [
						{ name: '功能', valueName: '科学款' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 100,
				},
				{
					id: 'sku_stationery_21_5',
					specs: [
						{ name: '功能', valueName: '科学款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 95,
				},
				{
					id: 'sku_stationery_21_6',
					specs: [
						{ name: '功能', valueName: '科学款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 90,
				},
			],
		},
		{
			name: '活页本可拆卸笔记本',
			desc: 'B5活页设计，随意增减内页，方便整理',
			brand: { name: '国誉' },
			specs: [
				{ name: '规格', values: [{ name: 'B5' }, { name: 'A5' }] },
				{ name: '页数', values: [{ name: '40页' }, { name: '60页' }] },
			],
			skus: [
				{
					id: 'sku_stationery_22_1',
					specs: [
						{ name: '规格', valueName: 'B5' },
						{ name: '页数', valueName: '40页' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_22_2',
					specs: [
						{ name: '规格', valueName: 'B5' },
						{ name: '页数', valueName: '60页' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'sku_stationery_22_3',
					specs: [
						{ name: '规格', valueName: 'A5' },
						{ name: '页数', valueName: '40页' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 160,
				},
				{
					id: 'sku_stationery_22_4',
					specs: [
						{ name: '规格', valueName: 'A5' },
						{ name: '页数', valueName: '60页' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
			],
		},
		{
			name: '活页纸替芯内页',
			desc: 'B5/A5规格，横线方格空白可选，替换装',
			brand: { name: '国誉' },
			specs: [
				{ name: '规格', values: [{ name: 'B5' }, { name: 'A5' }] },
				{
					name: '内页',
					values: [
						{ name: '横线' },
						{ name: '方格' },
						{ name: '空白' },
					],
				},
			],
			skus: [
				{
					id: 'sku_stationery_23_1',
					specs: [
						{ name: '规格', valueName: 'B5' },
						{ name: '内页', valueName: '横线' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_23_2',
					specs: [
						{ name: '规格', valueName: 'B5' },
						{ name: '内页', valueName: '方格' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 170,
				},
				{
					id: 'sku_stationery_23_3',
					specs: [
						{ name: '规格', valueName: 'B5' },
						{ name: '内页', valueName: '空白' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 160,
				},
				{
					id: 'sku_stationery_23_4',
					specs: [
						{ name: '规格', valueName: 'A5' },
						{ name: '内页', valueName: '横线' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 190,
				},
				{
					id: 'sku_stationery_23_5',
					specs: [
						{ name: '规格', valueName: 'A5' },
						{ name: '内页', valueName: '方格' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_23_6',
					specs: [
						{ name: '规格', valueName: 'A5' },
						{ name: '内页', valueName: '空白' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 170,
				},
			],
		},
		{
			name: '单词本英语记忆本',
			desc: '遮挡设计，艾宾浩斯记忆曲线，背单词神器',
			brand: { name: '晨光' },
			specs: [
				{
					name: '大小',
					values: [{ name: '口袋本' }, { name: '标准本' }],
				},
				{ name: '页数', values: [{ name: '80页' }, { name: '120页' }] },
			],
			skus: [
				{
					id: 'sku_stationery_24_1',
					specs: [
						{ name: '大小', valueName: '口袋本' },
						{ name: '页数', valueName: '80页' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_24_2',
					specs: [
						{ name: '大小', valueName: '口袋本' },
						{ name: '页数', valueName: '120页' },
					],
					price: 7.9,
					oldPrice: 14.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_24_3',
					specs: [
						{ name: '大小', valueName: '标准本' },
						{ name: '页数', valueName: '80页' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 190,
				},
				{
					id: 'sku_stationery_24_4',
					specs: [
						{ name: '大小', valueName: '标准本' },
						{ name: '页数', valueName: '120页' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 170,
				},
			],
		},
		{
			name: '错题本改错本整理本',
			desc: '科目分类，活页设计，初高中学生纠错',
			brand: { name: '得力' },
			specs: [
				{
					name: '科目',
					values: [
						{ name: '数学' },
						{ name: '英语' },
						{ name: '综合' },
					],
				},
				{ name: '规格', values: [{ name: 'B5' }, { name: 'A4' }] },
			],
			skus: [
				{
					id: 'sku_stationery_25_1',
					specs: [
						{ name: '科目', valueName: '数学' },
						{ name: '规格', valueName: 'B5' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_25_2',
					specs: [
						{ name: '科目', valueName: '数学' },
						{ name: '规格', valueName: 'A4' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 140,
				},
				{
					id: 'sku_stationery_25_3',
					specs: [
						{ name: '科目', valueName: '英语' },
						{ name: '规格', valueName: 'B5' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_25_4',
					specs: [
						{ name: '科目', valueName: '英语' },
						{ name: '规格', valueName: 'A4' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 140,
				},
				{
					id: 'sku_stationery_25_5',
					specs: [
						{ name: '科目', valueName: '综合' },
						{ name: '规格', valueName: 'B5' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 160,
				},
				{
					id: 'sku_stationery_25_6',
					specs: [
						{ name: '科目', valueName: '综合' },
						{ name: '规格', valueName: 'A4' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
			],
		},
		{
			name: '草稿纸空白草稿本',
			desc: '米黄色护眼纸，演算打草，大学生考研用',
			brand: { name: '晨光' },
			specs: [
				{ name: '规格', values: [{ name: 'B5' }, { name: 'A4' }] },
				{
					name: '页数',
					values: [{ name: '100页' }, { name: '200页' }],
				},
			],
			skus: [
				{
					id: 'sku_stationery_26_1',
					specs: [
						{ name: '规格', valueName: 'B5' },
						{ name: '页数', valueName: '100页' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_26_2',
					specs: [
						{ name: '规格', valueName: 'B5' },
						{ name: '页数', valueName: '200页' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_26_3',
					specs: [
						{ name: '规格', valueName: 'A4' },
						{ name: '页数', valueName: '100页' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 190,
				},
				{
					id: 'sku_stationery_26_4',
					specs: [
						{ name: '规格', valueName: 'A4' },
						{ name: '页数', valueName: '200页' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 170,
				},
			],
		},
		{
			name: '信纸信封套装',
			desc: '复古文艺信纸，表白情书，含火漆印章',
			brand: { name: '纸先生' },
			specs: [
				{
					name: '数量',
					values: [
						{ name: '信纸8张+信封4个' },
						{ name: '信纸16张+信封8个' },
					],
				},
				{
					name: '风格',
					values: [
						{ name: '复古风' },
						{ name: '简约风' },
						{ name: '可爱风' },
					],
				},
			],
			skus: [
				{
					id: 'sku_stationery_27_1',
					specs: [
						{ name: '数量', valueName: '信纸8张+信封4个' },
						{ name: '风格', valueName: '复古风' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_stationery_27_2',
					specs: [
						{ name: '数量', valueName: '信纸8张+信封4个' },
						{ name: '风格', valueName: '简约风' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_stationery_27_3',
					specs: [
						{ name: '数量', valueName: '信纸8张+信封4个' },
						{ name: '风格', valueName: '可爱风' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_stationery_27_4',
					specs: [
						{ name: '数量', valueName: '信纸16张+信封8个' },
						{ name: '风格', valueName: '复古风' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_stationery_27_5',
					specs: [
						{ name: '数量', valueName: '信纸16张+信封8个' },
						{ name: '风格', valueName: '简约风' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 85,
				},
				{
					id: 'sku_stationery_27_6',
					specs: [
						{ name: '数量', valueName: '信纸16张+信封8个' },
						{ name: '风格', valueName: '可爱风' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
			],
		},
		{
			name: '明信片贺卡卡纸',
			desc: '空白DIY卡纸，节日贺卡，手绘创作',
			brand: { name: '纸艺家' },
			specs: [
				{ name: '数量', values: [{ name: '10张' }, { name: '20张' }] },
				{
					name: '材质',
					values: [
						{ name: '白卡纸' },
						{ name: '牛皮纸' },
						{ name: '彩色卡纸' },
					],
				},
			],
			skus: [
				{
					id: 'sku_stationery_28_1',
					specs: [
						{ name: '数量', valueName: '10张' },
						{ name: '材质', valueName: '白卡纸' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_28_2',
					specs: [
						{ name: '数量', valueName: '10张' },
						{ name: '材质', valueName: '牛皮纸' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 140,
				},
				{
					id: 'sku_stationery_28_3',
					specs: [
						{ name: '数量', valueName: '10张' },
						{ name: '材质', valueName: '彩色卡纸' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 130,
				},
				{
					id: 'sku_stationery_28_4',
					specs: [
						{ name: '数量', valueName: '20张' },
						{ name: '材质', valueName: '白卡纸' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_stationery_28_5',
					specs: [
						{ name: '数量', valueName: '20张' },
						{ name: '材质', valueName: '牛皮纸' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_stationery_28_6',
					specs: [
						{ name: '数量', valueName: '20张' },
						{ name: '材质', valueName: '彩色卡纸' },
					],
					price: 17.9,
					oldPrice: 32.0,
					inventory: 100,
				},
			],
		},
		{
			name: '便签本可撕便条纸',
			desc: '无粘性便签，随手记，可立式设计',
			brand: { name: '晨光' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '75x75mm' }, { name: '100x100mm' }],
				},
				{
					name: '页数',
					values: [{ name: '100页' }, { name: '200页' }],
				},
			],
			skus: [
				{
					id: 'sku_stationery_29_1',
					specs: [
						{ name: '尺寸', valueName: '75x75mm' },
						{ name: '页数', valueName: '100页' },
					],
					price: 4.9,
					oldPrice: 9.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_29_2',
					specs: [
						{ name: '尺寸', valueName: '75x75mm' },
						{ name: '页数', valueName: '200页' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_29_3',
					specs: [
						{ name: '尺寸', valueName: '100x100mm' },
						{ name: '页数', valueName: '100页' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 190,
				},
				{
					id: 'sku_stationery_29_4',
					specs: [
						{ name: '尺寸', valueName: '100x100mm' },
						{ name: '页数', valueName: '200页' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 170,
				},
			],
		},
		{
			name: '索引贴标签贴指示贴',
			desc: '透明荧光索引，分类标记，重点标注',
			brand: { name: '3M' },
			specs: [
				{
					name: '数量',
					values: [{ name: '100张' }, { name: '200张' }],
				},
				{ name: '颜色', values: [{ name: '单色' }, { name: '混色' }] },
			],
			skus: [
				{
					id: 'sku_stationery_30_1',
					specs: [
						{ name: '数量', valueName: '100张' },
						{ name: '颜色', valueName: '单色' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_30_2',
					specs: [
						{ name: '数量', valueName: '100张' },
						{ name: '颜色', valueName: '混色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 160,
				},
				{
					id: 'sku_stationery_30_3',
					specs: [
						{ name: '数量', valueName: '200张' },
						{ name: '颜色', valueName: '单色' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_30_4',
					specs: [
						{ name: '数量', valueName: '200张' },
						{ name: '颜色', valueName: '混色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
			],
		},
		{
			name: '尺子套装含波浪线',
			desc: '学生绘图套尺，含波浪线尺，四件套',
			brand: { name: '晨光' },
			specs: [
				{ name: '长度', values: [{ name: '15cm' }, { name: '20cm' }] },
				{ name: '材质', values: [{ name: '塑料' }, { name: '金属' }] },
			],
			skus: [
				{
					id: 'sku_stationery_31_1',
					specs: [
						{ name: '长度', valueName: '15cm' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 200,
				},
				{
					id: 'sku_stationery_31_2',
					specs: [
						{ name: '长度', valueName: '15cm' },
						{ name: '材质', valueName: '金属' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_31_3',
					specs: [
						{ name: '长度', valueName: '20cm' },
						{ name: '材质', valueName: '塑料' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_31_4',
					specs: [
						{ name: '长度', valueName: '20cm' },
						{ name: '材质', valueName: '金属' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 140,
				},
			],
		},
		{
			name: '美术素描本绘画本',
			desc: '8K/16K素描纸，160g加厚，美术生专用',
			brand: { name: '马力' },
			specs: [
				{ name: '规格', values: [{ name: '8K' }, { name: '16K' }] },
				{ name: '页数', values: [{ name: '20页' }, { name: '40页' }] },
			],
			skus: [
				{
					id: 'sku_stationery_32_1',
					specs: [
						{ name: '规格', valueName: '8K' },
						{ name: '页数', valueName: '20页' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_stationery_32_2',
					specs: [
						{ name: '规格', valueName: '8K' },
						{ name: '页数', valueName: '40页' },
					],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 90,
				},
				{
					id: 'sku_stationery_32_3',
					specs: [
						{ name: '规格', valueName: '16K' },
						{ name: '页数', valueName: '20页' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 120,
				},
				{
					id: 'sku_stationery_32_4',
					specs: [
						{ name: '规格', valueName: '16K' },
						{ name: '页数', valueName: '40页' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 110,
				},
			],
		},
		{
			name: '彩铅水溶性彩色铅笔',
			desc: '48色/72色彩铅，涂色绘画，美术设计',
			brand: { name: '辉柏嘉' },
			specs: [
				{
					name: '色数',
					values: [
						{ name: '36色' },
						{ name: '48色' },
						{ name: '72色' },
					],
				},
				{
					name: '类型',
					values: [{ name: '油性' }, { name: '水溶性' }],
				},
			],
			skus: [
				{
					id: 'sku_stationery_33_1',
					specs: [
						{ name: '色数', valueName: '36色' },
						{ name: '类型', valueName: '油性' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 100,
				},
				{
					id: 'sku_stationery_33_2',
					specs: [
						{ name: '色数', valueName: '36色' },
						{ name: '类型', valueName: '水溶性' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 90,
				},
				{
					id: 'sku_stationery_33_3',
					specs: [
						{ name: '色数', valueName: '48色' },
						{ name: '类型', valueName: '油性' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 85,
				},
				{
					id: 'sku_stationery_33_4',
					specs: [
						{ name: '色数', valueName: '48色' },
						{ name: '类型', valueName: '水溶性' },
					],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 75,
				},
				{
					id: 'sku_stationery_33_5',
					specs: [
						{ name: '色数', valueName: '72色' },
						{ name: '类型', valueName: '油性' },
					],
					price: 55.9,
					oldPrice: 95.9,
					inventory: 60,
				},
				{
					id: 'sku_stationery_33_6',
					specs: [
						{ name: '色数', valueName: '72色' },
						{ name: '类型', valueName: '水溶性' },
					],
					price: 69.9,
					oldPrice: 119.9,
					inventory: 50,
				},
			],
		},
		{
			name: '马克笔双头油性套装',
			desc: '美术设计专用，双头粗细，动漫绘画',
			brand: { name: 'Touch' },
			specs: [
				{
					name: '色数',
					values: [
						{ name: '30色' },
						{ name: '40色' },
						{ name: '60色' },
					],
				},
				{
					name: '笔头',
					values: [{ name: '圆头+斜头' }, { name: '软头+斜头' }],
				},
			],
			skus: [
				{
					id: 'sku_stationery_34_1',
					specs: [
						{ name: '色数', valueName: '30色' },
						{ name: '笔头', valueName: '圆头+斜头' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 80,
				},
				{
					id: 'sku_stationery_34_2',
					specs: [
						{ name: '色数', valueName: '30色' },
						{ name: '笔头', valueName: '软头+斜头' },
					],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 70,
				},
				{
					id: 'sku_stationery_34_3',
					specs: [
						{ name: '色数', valueName: '40色' },
						{ name: '笔头', valueName: '圆头+斜头' },
					],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 75,
				},
				{
					id: 'sku_stationery_34_4',
					specs: [
						{ name: '色数', valueName: '40色' },
						{ name: '笔头', valueName: '软头+斜头' },
					],
					price: 59.9,
					oldPrice: 102.0,
					inventory: 65,
				},
				{
					id: 'sku_stationery_34_5',
					specs: [
						{ name: '色数', valueName: '60色' },
						{ name: '笔头', valueName: '圆头+斜头' },
					],
					price: 65.9,
					oldPrice: 112.0,
					inventory: 60,
				},
				{
					id: 'sku_stationery_34_6',
					specs: [
						{ name: '色数', valueName: '60色' },
						{ name: '笔头', valueName: '软头+斜头' },
					],
					price: 85.9,
					oldPrice: 145.0,
					inventory: 50,
				},
			],
		},
		{
			name: '卷笔刀削笔器手摇',
			desc: '自动进铅，削尖即停，美术素描专用',
			brand: { name: '得力' },
			specs: [
				{
					name: '款式',
					values: [{ name: '基础款' }, { name: '自动款' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '蓝色' },
						{ name: '粉色' },
						{ name: '白色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_stationery_35_1',
					specs: [
						{ name: '款式', valueName: '基础款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 100,
				},
				{
					id: 'sku_stationery_35_2',
					specs: [
						{ name: '款式', valueName: '基础款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 95,
				},
				{
					id: 'sku_stationery_35_3',
					specs: [
						{ name: '款式', valueName: '基础款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 90,
				},
				{
					id: 'sku_stationery_35_4',
					specs: [
						{ name: '款式', valueName: '自动款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 28.9,
					oldPrice: 49.9,
					inventory: 80,
				},
				{
					id: 'sku_stationery_35_5',
					specs: [
						{ name: '款式', valueName: '自动款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 28.9,
					oldPrice: 49.9,
					inventory: 75,
				},
				{
					id: 'sku_stationery_35_6',
					specs: [
						{ name: '款式', valueName: '自动款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 28.9,
					oldPrice: 49.9,
					inventory: 70,
				},
			],
		},
		{
			name: '桌面吸尘器迷你',
			desc: '吸橡皮屑灰尘，USB充电，学生桌面清洁',
			brand: { name: '天文' },
			specs: [
				{
					name: '款式',
					values: [{ name: '电池款' }, { name: '充电款' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '粉色' },
						{ name: '蓝色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_stationery_36_1',
					specs: [
						{ name: '款式', valueName: '电池款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_stationery_36_2',
					specs: [
						{ name: '款式', valueName: '电池款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 115,
				},
				{
					id: 'sku_stationery_36_3',
					specs: [
						{ name: '款式', valueName: '电池款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_stationery_36_4',
					specs: [
						{ name: '款式', valueName: '充电款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 100,
				},
				{
					id: 'sku_stationery_36_5',
					specs: [
						{ name: '款式', valueName: '充电款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 95,
				},
				{
					id: 'sku_stationery_36_6',
					specs: [
						{ name: '款式', valueName: '充电款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 90,
				},
			],
		},
		{
			name: '电动橡皮擦高光橡皮',
			desc: '电池驱动，精准擦除，美术高光细节',
			brand: { name: '天文' },
			specs: [
				{
					name: '配置',
					values: [{ name: '单机' }, { name: '含替换芯' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '粉色' }] },
			],
			skus: [
				{
					id: 'sku_stationery_37_1',
					specs: [
						{ name: '配置', valueName: '单机' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_37_2',
					specs: [
						{ name: '配置', valueName: '单机' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 140,
				},
				{
					id: 'sku_stationery_37_3',
					specs: [
						{ name: '配置', valueName: '含替换芯' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 130,
				},
				{
					id: 'sku_stationery_37_4',
					specs: [
						{ name: '配置', valueName: '含替换芯' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 120,
				},
			],
		},
		{
			name: '护指绷带写字护指',
			desc: '防磨手指，写字护指，自粘绷带',
			brand: { name: '护指带' },
			specs: [
				{ name: '数量', values: [{ name: '3卷' }, { name: '5卷' }] },
				{ name: '颜色', values: [{ name: '肤色' }, { name: '彩色' }] },
			],
			skus: [
				{
					id: 'sku_stationery_38_1',
					specs: [
						{ name: '数量', valueName: '3卷' },
						{ name: '颜色', valueName: '肤色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 180,
				},
				{
					id: 'sku_stationery_38_2',
					specs: [
						{ name: '数量', valueName: '3卷' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 11.9,
					oldPrice: 20.0,
					inventory: 160,
				},
				{
					id: 'sku_stationery_38_3',
					specs: [
						{ name: '数量', valueName: '5卷' },
						{ name: '颜色', valueName: '肤色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_38_4',
					specs: [
						{ name: '数量', valueName: '5卷' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 140,
				},
			],
		},
		{
			name: '书立书架桌面书挡',
			desc: 'L型书立，金属材质，稳固不倒，桌面收纳',
			brand: { name: '得力' },
			specs: [
				{
					name: '数量',
					values: [{ name: '2片装' }, { name: '4片装' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '黑色' },
						{ name: '白色' },
						{ name: '粉色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_stationery_39_1',
					specs: [
						{ name: '数量', valueName: '2片装' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_39_2',
					specs: [
						{ name: '数量', valueName: '2片装' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 140,
				},
				{
					id: 'sku_stationery_39_3',
					specs: [
						{ name: '数量', valueName: '2片装' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 130,
				},
				{
					id: 'sku_stationery_39_4',
					specs: [
						{ name: '数量', valueName: '4片装' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 17.9,
					oldPrice: 32.0,
					inventory: 120,
				},
				{
					id: 'sku_stationery_39_5',
					specs: [
						{ name: '数量', valueName: '4片装' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 17.9,
					oldPrice: 32.0,
					inventory: 110,
				},
				{
					id: 'sku_stationery_39_6',
					specs: [
						{ name: '数量', valueName: '4片装' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 17.9,
					oldPrice: 32.0,
					inventory: 100,
				},
			],
		},
		{
			name: '试卷收纳袋风琴包',
			desc: '多层分类，A3/A4试卷，手提便携',
			brand: { name: '得力' },
			specs: [
				{ name: '层数', values: [{ name: '8层' }, { name: '13层' }] },
				{
					name: '颜色',
					values: [
						{ name: '蓝色' },
						{ name: '粉色' },
						{ name: '绿色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_stationery_40_1',
					specs: [
						{ name: '层数', valueName: '8层' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_stationery_40_2',
					specs: [
						{ name: '层数', valueName: '8层' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 140,
				},
				{
					id: 'sku_stationery_40_3',
					specs: [
						{ name: '层数', valueName: '8层' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 130,
				},
				{
					id: 'sku_stationery_40_4',
					specs: [
						{ name: '层数', valueName: '13层' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 120,
				},
				{
					id: 'sku_stationery_40_5',
					specs: [
						{ name: '层数', valueName: '13层' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 110,
				},
				{
					id: 'sku_stationery_40_6',
					specs: [
						{ name: '层数', valueName: '13层' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 100,
				},
			],
		},
	],
	装饰用品: [
		{
			name: 'LED小彩灯串灯',
			desc: 'USB供电，8种闪烁模式，宿舍氛围营造神器',
			brand: { name: '星光' },
			specs: [
				{
					name: '长度',
					values: [
						{ name: '3米20灯' },
						{ name: '5米50灯' },
						{ name: '10米100灯' },
					],
				},
				{
					name: '颜色',
					values: [
						{ name: '暖白' },
						{ name: '彩色' },
						{ name: '蓝白' },
					],
				},
			],
			skus: [
				{
					id: 'sku_decor_1_1',
					specs: [
						{ name: '长度', valueName: '3米20灯' },
						{ name: '颜色', valueName: '暖白' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_decor_1_2',
					specs: [
						{ name: '长度', valueName: '3米20灯' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 140,
				},
				{
					id: 'sku_decor_1_3',
					specs: [
						{ name: '长度', valueName: '5米50灯' },
						{ name: '颜色', valueName: '暖白' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_decor_1_4',
					specs: [
						{ name: '长度', valueName: '5米50灯' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_decor_1_5',
					specs: [
						{ name: '长度', valueName: '10米100灯' },
						{ name: '颜色', valueName: '蓝白' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_1_6',
					specs: [
						{ name: '长度', valueName: '10米100灯' },
						{ name: '颜色', valueName: '暖白' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 75,
				},
			],
		},
		{
			name: '宿舍墙贴画ins风',
			desc: '防水可移除，不伤墙面，网红拍照背景',
			brand: { name: '贴贴乐' },
			specs: [
				{
					name: '主题',
					values: [
						{ name: '绿植风' },
						{ name: '星空风' },
						{ name: '文字励志' },
					],
				},
				{
					name: '尺寸',
					values: [
						{ name: '小(30x40cm)' },
						{ name: '中(50x70cm)' },
						{ name: '大(70x100cm)' },
					],
				},
			],
			skus: [
				{
					id: 'sku_decor_2_1',
					specs: [
						{ name: '主题', valueName: '绿植风' },
						{ name: '尺寸', valueName: '小(30x40cm)' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_2_2',
					specs: [
						{ name: '主题', valueName: '绿植风' },
						{ name: '尺寸', valueName: '中(50x70cm)' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_2_3',
					specs: [
						{ name: '主题', valueName: '星空风' },
						{ name: '尺寸', valueName: '小(30x40cm)' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 95,
				},
				{
					id: 'sku_decor_2_4',
					specs: [
						{ name: '主题', valueName: '星空风' },
						{ name: '尺寸', valueName: '大(70x100cm)' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 60,
				},
				{
					id: 'sku_decor_2_5',
					specs: [
						{ name: '主题', valueName: '文字励志' },
						{ name: '尺寸', valueName: '中(50x70cm)' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_2_6',
					specs: [
						{ name: '主题', valueName: '文字励志' },
						{ name: '尺寸', valueName: '大(70x100cm)' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 55,
				},
			],
		},
		{
			name: '桌面绿植小盆栽',
			desc: '仿真多肉，无需浇水，陶瓷花盆，桌面点缀',
			brand: { name: '绿意' },
			specs: [
				{
					name: '款式',
					values: [
						{ name: '仙人掌' },
						{ name: '多肉组合' },
						{ name: '小雏菊' },
					],
				},
				{
					name: '花盆',
					values: [
						{ name: '白瓷盆' },
						{ name: '木盆' },
						{ name: '水泥盆' },
					],
				},
			],
			skus: [
				{
					id: 'sku_decor_3_1',
					specs: [
						{ name: '款式', valueName: '仙人掌' },
						{ name: '花盆', valueName: '白瓷盆' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_decor_3_2',
					specs: [
						{ name: '款式', valueName: '仙人掌' },
						{ name: '花盆', valueName: '木盆' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_3_3',
					specs: [
						{ name: '款式', valueName: '多肉组合' },
						{ name: '花盆', valueName: '白瓷盆' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_3_4',
					specs: [
						{ name: '款式', valueName: '多肉组合' },
						{ name: '花盆', valueName: '水泥盆' },
					],
					price: 22.9,
					oldPrice: 40.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_3_5',
					specs: [
						{ name: '款式', valueName: '小雏菊' },
						{ name: '花盆', valueName: '白瓷盆' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_decor_3_6',
					specs: [
						{ name: '款式', valueName: '小雏菊' },
						{ name: '花盆', valueName: '木盆' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 95,
				},
			],
		},
		{
			name: '照片墙夹子麻绳套装',
			desc: 'DIY照片墙，送木夹子和麻绳，记录美好时光',
			brand: { name: '记忆' },
			specs: [
				{
					name: '长度',
					values: [
						{ name: '3米' },
						{ name: '5米' },
						{ name: '10米' },
					],
				},
				{
					name: '配件',
					values: [
						{ name: '含10夹' },
						{ name: '含20夹' },
						{ name: '含30夹+灯串' },
					],
				},
			],
			skus: [
				{
					id: 'sku_decor_4_1',
					specs: [
						{ name: '长度', valueName: '3米' },
						{ name: '配件', valueName: '含10夹' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 130,
				},
				{
					id: 'sku_decor_4_2',
					specs: [
						{ name: '长度', valueName: '3米' },
						{ name: '配件', valueName: '含20夹' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_decor_4_3',
					specs: [
						{ name: '长度', valueName: '5米' },
						{ name: '配件', valueName: '含20夹' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_4_4',
					specs: [
						{ name: '长度', valueName: '5米' },
						{ name: '配件', valueName: '含30夹+灯串' },
					],
					price: 22.9,
					oldPrice: 40.0,
					inventory: 70,
				},
				{
					id: 'sku_decor_4_5',
					specs: [
						{ name: '长度', valueName: '10米' },
						{ name: '配件', valueName: '含30夹+灯串' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 55,
				},
			],
		},
		{
			name: '宿舍地毯床边毯',
			desc: '柔软亲肤，防滑底背，可机洗，ins风图案',
			brand: { name: '暖脚' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '40x60cm' },
						{ name: '50x80cm' },
						{ name: '60x120cm' },
					],
				},
				{
					name: '图案',
					values: [
						{ name: '几何纹' },
						{ name: '卡通动物' },
						{ name: '纯色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_decor_5_1',
					specs: [
						{ name: '尺寸', valueName: '40x60cm' },
						{ name: '图案', valueName: '几何纹' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_5_2',
					specs: [
						{ name: '尺寸', valueName: '40x60cm' },
						{ name: '图案', valueName: '卡通动物' },
					],
					price: 22.9,
					oldPrice: 40.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_5_3',
					specs: [
						{ name: '尺寸', valueName: '50x80cm' },
						{ name: '图案', valueName: '几何纹' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_5_4',
					specs: [
						{ name: '尺寸', valueName: '50x80cm' },
						{ name: '图案', valueName: '纯色' },
					],
					price: 27.9,
					oldPrice: 48.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_5_5',
					specs: [
						{ name: '尺寸', valueName: '60x120cm' },
						{ name: '图案', valueName: '卡通动物' },
					],
					price: 45.9,
					oldPrice: 78.0,
					inventory: 50,
				},
				{
					id: 'sku_decor_5_6',
					specs: [
						{ name: '尺寸', valueName: '60x120cm' },
						{ name: '图案', valueName: '纯色' },
					],
					price: 42.9,
					oldPrice: 72.0,
					inventory: 55,
				},
			],
		},
		{
			name: '创意台灯床头灯',
			desc: '三档调光，护眼LED，造型可爱，USB充电',
			brand: { name: '亮亮' },
			specs: [
				{
					name: '款式',
					values: [
						{ name: '云朵款' },
						{ name: '星星款' },
						{ name: '月亮款' },
					],
				},
				{
					name: '供电',
					values: [{ name: '插电款' }, { name: '充电款' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_6_1',
					specs: [
						{ name: '款式', valueName: '云朵款' },
						{ name: '供电', valueName: '插电款' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_6_2',
					specs: [
						{ name: '款式', valueName: '云朵款' },
						{ name: '供电', valueName: '充电款' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 65,
				},
				{
					id: 'sku_decor_6_3',
					specs: [
						{ name: '款式', valueName: '星星款' },
						{ name: '供电', valueName: '插电款' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_6_4',
					specs: [
						{ name: '款式', valueName: '星星款' },
						{ name: '供电', valueName: '充电款' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 60,
				},
				{
					id: 'sku_decor_6_5',
					specs: [
						{ name: '款式', valueName: '月亮款' },
						{ name: '供电', valueName: '插电款' },
					],
					price: 32.9,
					oldPrice: 58.0,
					inventory: 70,
				},
				{
					id: 'sku_decor_6_6',
					specs: [
						{ name: '款式', valueName: '月亮款' },
						{ name: '供电', valueName: '充电款' },
					],
					price: 42.9,
					oldPrice: 75.0,
					inventory: 55,
				},
			],
		},
		{
			name: '墙面置物架免打孔',
			desc: '挂墙收纳，放手机眼镜，宿舍神器',
			brand: { name: '上墙' },
			specs: [
				{ name: '层数', values: [{ name: '单层' }, { name: '双层' }] },
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '黑色' },
						{ name: '原木色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_decor_7_1',
					specs: [
						{ name: '层数', valueName: '单层' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 120,
				},
				{
					id: 'sku_decor_7_2',
					specs: [
						{ name: '层数', valueName: '单层' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_decor_7_3',
					specs: [
						{ name: '层数', valueName: '单层' },
						{ name: '颜色', valueName: '原木色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 95,
				},
				{
					id: 'sku_decor_7_4',
					specs: [
						{ name: '层数', valueName: '双层' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_7_5',
					specs: [
						{ name: '层数', valueName: '双层' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_7_6',
					specs: [
						{ name: '层数', valueName: '双层' },
						{ name: '颜色', valueName: '原木色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 65,
				},
			],
		},
		{
			name: '香薰蜡烛礼盒装',
			desc: '大豆蜡天然香氛，助眠放松，浪漫氛围',
			brand: { name: '香遇' },
			specs: [
				{
					name: '香味',
					values: [
						{ name: '薰衣草' },
						{ name: '白茶' },
						{ name: '玫瑰' },
					],
				},
				{
					name: '规格',
					values: [
						{ name: '单杯装' },
						{ name: '双杯礼盒' },
						{ name: '三杯礼盒' },
					],
				},
			],
			skus: [
				{
					id: 'sku_decor_8_1',
					specs: [
						{ name: '香味', valueName: '薰衣草' },
						{ name: '规格', valueName: '单杯装' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_8_2',
					specs: [
						{ name: '香味', valueName: '白茶' },
						{ name: '规格', valueName: '单杯装' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 85,
				},
				{
					id: 'sku_decor_8_3',
					specs: [
						{ name: '香味', valueName: '玫瑰' },
						{ name: '规格', valueName: '单杯装' },
					],
					price: 22.9,
					oldPrice: 40.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_8_4',
					specs: [
						{ name: '香味', valueName: '薰衣草' },
						{ name: '规格', valueName: '双杯礼盒' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 60,
				},
				{
					id: 'sku_decor_8_5',
					specs: [
						{ name: '香味', valueName: '白茶' },
						{ name: '规格', valueName: '三杯礼盒' },
					],
					price: 49.9,
					oldPrice: 88.0,
					inventory: 45,
				},
				{
					id: 'sku_decor_8_6',
					specs: [
						{ name: '香味', valueName: '玫瑰' },
						{ name: '规格', valueName: '双杯礼盒' },
					],
					price: 39.9,
					oldPrice: 70.0,
					inventory: 55,
				},
			],
		},
		{
			name: '挂布背景布 tapestry',
			desc: '大尺寸墙面装饰，ins风图案，可机洗',
			brand: { name: '布布' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '100x70cm' },
						{ name: '150x100cm' },
						{ name: '200x150cm' },
					],
				},
				{
					name: '图案',
					values: [
						{ name: '日落风景' },
						{ name: '抽象艺术' },
						{ name: '星空宇宙' },
					],
				},
			],
			skus: [
				{
					id: 'sku_decor_9_1',
					specs: [
						{ name: '尺寸', valueName: '100x70cm' },
						{ name: '图案', valueName: '日落风景' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_9_2',
					specs: [
						{ name: '尺寸', valueName: '100x70cm' },
						{ name: '图案', valueName: '抽象艺术' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 95,
				},
				{
					id: 'sku_decor_9_3',
					specs: [
						{ name: '尺寸', valueName: '150x100cm' },
						{ name: '图案', valueName: '星空宇宙' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_9_4',
					specs: [
						{ name: '尺寸', valueName: '150x100cm' },
						{ name: '图案', valueName: '日落风景' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 70,
				},
				{
					id: 'sku_decor_9_5',
					specs: [
						{ name: '尺寸', valueName: '200x150cm' },
						{ name: '图案', valueName: '抽象艺术' },
					],
					price: 49.9,
					oldPrice: 88.0,
					inventory: 50,
				},
				{
					id: 'sku_decor_9_6',
					specs: [
						{ name: '尺寸', valueName: '200x150cm' },
						{ name: '图案', valueName: '星空宇宙' },
					],
					price: 49.9,
					oldPrice: 88.0,
					inventory: 45,
				},
			],
		},
		{
			name: '墙面洞洞板免打孔',
			desc: '亚克力材质，自由组合配件，收纳展示两不误',
			brand: { name: '洞洞家' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '小号(40x60cm)' },
						{ name: '大号(60x80cm)' },
					],
				},
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '黑色' },
						{ name: '灰色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_decor_10_1',
					specs: [
						{ name: '尺寸', valueName: '小号(40x60cm)' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_10_2',
					specs: [
						{ name: '尺寸', valueName: '小号(40x60cm)' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_10_3',
					specs: [
						{ name: '尺寸', valueName: '大号(60x80cm)' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 45.9,
					oldPrice: 78.0,
					inventory: 60,
				},
				{
					id: 'sku_decor_10_4',
					specs: [
						{ name: '尺寸', valueName: '大号(60x80cm)' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 45.9,
					oldPrice: 78.0,
					inventory: 55,
				},
			],
		},
		{
			name: '铁丝网格照片墙',
			desc: '黑色铁艺网格，附赠木夹和灯串，ins风拍照墙',
			brand: { name: '铁艺风' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '40x60cm' }, { name: '60x90cm' }],
				},
				{
					name: '配件',
					values: [{ name: '含20夹' }, { name: '含30夹+灯串' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_11_1',
					specs: [
						{ name: '尺寸', valueName: '40x60cm' },
						{ name: '配件', valueName: '含20夹' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_11_2',
					specs: [
						{ name: '尺寸', valueName: '40x60cm' },
						{ name: '配件', valueName: '含30夹+灯串' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 70,
				},
				{
					id: 'sku_decor_11_3',
					specs: [
						{ name: '尺寸', valueName: '60x90cm' },
						{ name: '配件', valueName: '含20夹' },
					],
					price: 28.9,
					oldPrice: 48.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_11_4',
					specs: [
						{ name: '尺寸', valueName: '60x90cm' },
						{ name: '配件', valueName: '含30夹+灯串' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 60,
				},
			],
		},
		{
			name: '北欧风静音挂钟',
			desc: '石英机芯走时准确，无滴答声，极简百搭',
			brand: { name: '时光机' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '10英寸' }, { name: '12英寸' }],
				},
				{ name: '颜色', values: [{ name: '纯白' }, { name: '黑框' }] },
			],
			skus: [
				{
					id: 'sku_decor_12_1',
					specs: [
						{ name: '尺寸', valueName: '10英寸' },
						{ name: '颜色', valueName: '纯白' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 85,
				},
				{
					id: 'sku_decor_12_2',
					specs: [
						{ name: '尺寸', valueName: '10英寸' },
						{ name: '颜色', valueName: '黑框' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_12_3',
					specs: [
						{ name: '尺寸', valueName: '12英寸' },
						{ name: '颜色', valueName: '纯白' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_12_4',
					specs: [
						{ name: '尺寸', valueName: '12英寸' },
						{ name: '颜色', valueName: '黑框' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 70,
				},
			],
		},
		{
			name: '桌面小闹钟学生用',
			desc: '夜光指针，轻触贪睡，闹铃响亮不迟到',
			brand: { name: '晨光' },
			specs: [
				{
					name: '款式',
					values: [{ name: '复古款' }, { name: '数字款' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '粉色' },
						{ name: '绿色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_decor_13_1',
					specs: [
						{ name: '款式', valueName: '复古款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_13_2',
					specs: [
						{ name: '款式', valueName: '复古款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_13_3',
					specs: [
						{ name: '款式', valueName: '数字款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 85,
				},
				{
					id: 'sku_decor_13_4',
					specs: [
						{ name: '款式', valueName: '数字款' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 80,
				},
			],
		},
		{
			name: '宿舍门牌贴创意',
			desc: '亚克力材质防水防褪色，可定制名字，免打孔',
			brand: { name: '门牌君' },
			specs: [
				{ name: '形状', values: [{ name: '方形' }, { name: '拱形' }] },
				{
					name: '风格',
					values: [{ name: '极简风' }, { name: '可爱风' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_14_1',
					specs: [
						{ name: '形状', valueName: '方形' },
						{ name: '风格', valueName: '极简风' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_decor_14_2',
					specs: [
						{ name: '形状', valueName: '方形' },
						{ name: '风格', valueName: '可爱风' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_decor_14_3',
					specs: [
						{ name: '形状', valueName: '拱形' },
						{ name: '风格', valueName: '极简风' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_14_4',
					specs: [
						{ name: '形状', valueName: '拱形' },
						{ name: '风格', valueName: '可爱风' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
			],
		},
		{
			name: '磨砂窗户静电贴纸',
			desc: '防偷窥保护隐私，静电吸附免胶水，透光不透人',
			brand: { name: '窗卫士' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '45x200cm' }, { name: '60x200cm' }],
				},
				{
					name: '图案',
					values: [{ name: '磨砂纯色' }, { name: '方格纹' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_15_1',
					specs: [
						{ name: '尺寸', valueName: '45x200cm' },
						{ name: '图案', valueName: '磨砂纯色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_decor_15_2',
					specs: [
						{ name: '尺寸', valueName: '45x200cm' },
						{ name: '图案', valueName: '方格纹' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_15_3',
					specs: [
						{ name: '尺寸', valueName: '60x200cm' },
						{ name: '图案', valueName: '磨砂纯色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_15_4',
					specs: [
						{ name: '尺寸', valueName: '60x200cm' },
						{ name: '图案', valueName: '方格纹' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 80,
				},
			],
		},
		{
			name: '小熊伴睡小夜灯',
			desc: '硅胶拍打变光，柔和不刺眼，起夜喂奶床头灯',
			brand: { name: '伴睡熊' },
			specs: [
				{
					name: '款式',
					values: [{ name: '充电款' }, { name: '插电款' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '黄色' }] },
			],
			skus: [
				{
					id: 'sku_decor_16_1',
					specs: [
						{ name: '款式', valueName: '充电款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_16_2',
					specs: [
						{ name: '款式', valueName: '充电款' },
						{ name: '颜色', valueName: '黄色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_16_3',
					specs: [
						{ name: '款式', valueName: '插电款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 110,
				},
				{
					id: 'sku_decor_16_4',
					specs: [
						{ name: '款式', valueName: '插电款' },
						{ name: '颜色', valueName: '黄色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
			],
		},
		{
			name: '硅藻泥吸水地垫',
			desc: '天然硅藻土，秒吸水干爽，防滑底部，浴室宿舍',
			brand: { name: '干爽家' },
			specs: [
				{ name: '厚度', values: [{ name: '1.5cm' }, { name: '2cm' }] },
				{ name: '颜色', values: [{ name: '灰色' }, { name: '粉色' }] },
			],
			skus: [
				{
					id: 'sku_decor_17_1',
					specs: [
						{ name: '厚度', valueName: '1.5cm' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_17_2',
					specs: [
						{ name: '厚度', valueName: '1.5cm' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_17_3',
					specs: [
						{ name: '厚度', valueName: '2cm' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 35.9,
					oldPrice: 60.0,
					inventory: 60,
				},
				{
					id: 'sku_decor_17_4',
					specs: [
						{ name: '厚度', valueName: '2cm' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 35.9,
					oldPrice: 60.0,
					inventory: 55,
				},
			],
		},
		{
			name: '浴室防滑垫吸盘',
			desc: '强力吸盘固定不移位，速干透气，防霉防菌',
			brand: { name: '安全垫' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '40x60cm' }, { name: '50x80cm' }],
				},
				{ name: '颜色', values: [{ name: '蓝色' }, { name: '白色' }] },
			],
			skus: [
				{
					id: 'sku_decor_18_1',
					specs: [
						{ name: '尺寸', valueName: '40x60cm' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_18_2',
					specs: [
						{ name: '尺寸', valueName: '40x60cm' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 85,
				},
				{
					id: 'sku_decor_18_3',
					specs: [
						{ name: '尺寸', valueName: '50x80cm' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 70,
				},
				{
					id: 'sku_decor_18_4',
					specs: [
						{ name: '尺寸', valueName: '50x80cm' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 65,
				},
			],
		},
		{
			name: '桌面树脂小摆件',
			desc: '可爱动物造型，手工上色不掉漆，书桌点缀',
			brand: { name: '萌物社' },
			specs: [
				{
					name: '造型',
					values: [
						{ name: '猫咪' },
						{ name: '小狗' },
						{ name: '兔子' },
					],
				},
				{ name: '尺寸', values: [{ name: '小号' }, { name: '大号' }] },
			],
			skus: [
				{
					id: 'sku_decor_19_1',
					specs: [
						{ name: '造型', valueName: '猫咪' },
						{ name: '尺寸', valueName: '小号' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_19_2',
					specs: [
						{ name: '造型', valueName: '猫咪' },
						{ name: '尺寸', valueName: '大号' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_19_3',
					specs: [
						{ name: '造型', valueName: '小狗' },
						{ name: '尺寸', valueName: '小号' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 95,
				},
				{
					id: 'sku_decor_19_4',
					specs: [
						{ name: '造型', valueName: '兔子' },
						{ name: '尺寸', valueName: '大号' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 75,
				},
			],
		},
		{
			name: '创意钥匙扣挂件',
			desc: '金属电镀防褪色，可刻字，送同学朋友礼物',
			brand: { name: '挂饰坊' },
			specs: [
				{
					name: '款式',
					values: [{ name: '简约圆牌' }, { name: '复古方形' }],
				},
				{ name: '颜色', values: [{ name: '银色' }, { name: '金色' }] },
			],
			skus: [
				{
					id: 'sku_decor_20_1',
					specs: [
						{ name: '款式', valueName: '简约圆牌' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_decor_20_2',
					specs: [
						{ name: '款式', valueName: '简约圆牌' },
						{ name: '颜色', valueName: '金色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 110,
				},
				{
					id: 'sku_decor_20_3',
					specs: [
						{ name: '款式', valueName: '复古方形' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_20_4',
					specs: [
						{ name: '款式', valueName: '复古方形' },
						{ name: '颜色', valueName: '金色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 90,
				},
			],
		},
		{
			name: '窗台风铃挂饰',
			desc: '铜管风铃声音清脆，阳台窗户装饰，送人佳品',
			brand: { name: '风铃语' },
			specs: [
				{
					name: '长度',
					values: [{ name: '短款(30cm)' }, { name: '长款(50cm)' }],
				},
				{
					name: '颜色',
					values: [{ name: '古铜色' }, { name: '银色' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_21_1',
					specs: [
						{ name: '长度', valueName: '短款(30cm)' },
						{ name: '颜色', valueName: '古铜色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_21_2',
					specs: [
						{ name: '长度', valueName: '短款(30cm)' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_21_3',
					specs: [
						{ name: '长度', valueName: '长款(50cm)' },
						{ name: '颜色', valueName: '古铜色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 65,
				},
				{
					id: 'sku_decor_21_4',
					specs: [
						{ name: '长度', valueName: '长款(50cm)' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 60,
				},
			],
		},
		{
			name: '沙发靠垫抱枕套',
			desc: '纯棉亚麻面料，亲肤透气，可拆洗，不含芯',
			brand: { name: '布艺家' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '45x45cm' }, { name: '60x60cm' }],
				},
				{ name: '颜色', values: [{ name: '米白' }, { name: '咖色' }] },
			],
			skus: [
				{
					id: 'sku_decor_22_1',
					specs: [
						{ name: '尺寸', valueName: '45x45cm' },
						{ name: '颜色', valueName: '米白' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_22_2',
					specs: [
						{ name: '尺寸', valueName: '45x45cm' },
						{ name: '颜色', valueName: '咖色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 85,
				},
				{
					id: 'sku_decor_22_3',
					specs: [
						{ name: '尺寸', valueName: '60x60cm' },
						{ name: '颜色', valueName: '米白' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_22_4',
					specs: [
						{ name: '尺寸', valueName: '60x60cm' },
						{ name: '颜色', valueName: '咖色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 75,
				},
			],
		},
		{
			name: '带灯化妆镜支架款',
			desc: '三色光调节，高清银镜，可放桌面，化妆神器',
			brand: { name: '美妆镜' },
			specs: [
				{
					name: '电源',
					values: [{ name: '充电款' }, { name: '插电款' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '粉色' }] },
			],
			skus: [
				{
					id: 'sku_decor_23_1',
					specs: [
						{ name: '电源', valueName: '充电款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 45.9,
					oldPrice: 78.0,
					inventory: 70,
				},
				{
					id: 'sku_decor_23_2',
					specs: [
						{ name: '电源', valueName: '充电款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 45.9,
					oldPrice: 78.0,
					inventory: 65,
				},
				{
					id: 'sku_decor_23_3',
					specs: [
						{ name: '电源', valueName: '插电款' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_23_4',
					specs: [
						{ name: '电源', valueName: '插电款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 70,
				},
			],
		},
		{
			name: '墙面免钉软木板',
			desc: '图钉易固定，留言备忘照片墙，环保无味',
			brand: { name: '软木墙' },
			specs: [
				{ name: '厚度', values: [{ name: '1cm' }, { name: '2cm' }] },
				{
					name: '尺寸',
					values: [{ name: '40x60cm' }, { name: '60x90cm' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_24_1',
					specs: [
						{ name: '厚度', valueName: '1cm' },
						{ name: '尺寸', valueName: '40x60cm' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_24_2',
					specs: [
						{ name: '厚度', valueName: '1cm' },
						{ name: '尺寸', valueName: '60x90cm' },
					],
					price: 28.9,
					oldPrice: 48.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_24_3',
					specs: [
						{ name: '厚度', valueName: '2cm' },
						{ name: '尺寸', valueName: '40x60cm' },
					],
					price: 25.9,
					oldPrice: 42.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_24_4',
					specs: [
						{ name: '厚度', valueName: '2cm' },
						{ name: '尺寸', valueName: '60x90cm' },
					],
					price: 38.9,
					oldPrice: 65.0,
					inventory: 60,
				},
			],
		},
		{
			name: '千纸鹤折纸套装',
			desc: '彩色渐变折纸，附赠挂线，手工DIY装饰',
			brand: { name: '折纸社' },
			specs: [
				{
					name: '数量',
					values: [{ name: '100张装' }, { name: '300张装' }],
				},
				{
					name: '类型',
					values: [{ name: '普通款' }, { name: '镭射款' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_25_1',
					specs: [
						{ name: '数量', valueName: '100张装' },
						{ name: '类型', valueName: '普通款' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 120,
				},
				{
					id: 'sku_decor_25_2',
					specs: [
						{ name: '数量', valueName: '100张装' },
						{ name: '类型', valueName: '镭射款' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_25_3',
					specs: [
						{ name: '数量', valueName: '300张装' },
						{ name: '类型', valueName: '普通款' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_25_4',
					specs: [
						{ name: '数量', valueName: '300张装' },
						{ name: '类型', valueName: '镭射款' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 80,
				},
			],
		},
		{
			name: '墙面相框组合套装',
			desc: '不规则排列白框，挂墙展示照片，大学生宿舍',
			brand: { name: '相框墙' },
			specs: [
				{
					name: '片数',
					values: [{ name: '6片装' }, { name: '10片装' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_decor_26_1',
					specs: [
						{ name: '片数', valueName: '6片装' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 70,
				},
				{
					id: 'sku_decor_26_2',
					specs: [
						{ name: '片数', valueName: '6片装' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 65,
				},
				{
					id: 'sku_decor_26_3',
					specs: [
						{ name: '片数', valueName: '10片装' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 55,
				},
				{
					id: 'sku_decor_26_4',
					specs: [
						{ name: '片数', valueName: '10片装' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 50,
				},
			],
		},
		{
			name: '玻璃水培花瓶',
			desc: '透明玻璃材质，水养绿萝铜钱草，桌面清透',
			brand: { name: '玻璃瓶' },
			specs: [
				{ name: '形状', values: [{ name: '圆形' }, { name: '方形' }] },
				{
					name: '容量',
					values: [{ name: '小号(200ml)' }, { name: '大号(500ml)' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_27_1',
					specs: [
						{ name: '形状', valueName: '圆形' },
						{ name: '容量', valueName: '小号(200ml)' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 110,
				},
				{
					id: 'sku_decor_27_2',
					specs: [
						{ name: '形状', valueName: '圆形' },
						{ name: '容量', valueName: '大号(500ml)' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_27_3',
					specs: [
						{ name: '形状', valueName: '方形' },
						{ name: '容量', valueName: '小号(200ml)' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_27_4',
					specs: [
						{ name: '形状', valueName: '方形' },
						{ name: '容量', valueName: '大号(500ml)' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 80,
				},
			],
		},
		{
			name: '仿真绿植假花',
			desc: '高仿真度不褪色，免打理，书桌柜子装饰',
			brand: { name: '假花坊' },
			specs: [
				{
					name: '种类',
					values: [{ name: '绿萝' }, { name: '尤加利叶' }],
				},
				{ name: '高度', values: [{ name: '30cm' }, { name: '50cm' }] },
			],
			skus: [
				{
					id: 'sku_decor_28_1',
					specs: [
						{ name: '种类', valueName: '绿萝' },
						{ name: '高度', valueName: '30cm' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_28_2',
					specs: [
						{ name: '种类', valueName: '绿萝' },
						{ name: '高度', valueName: '50cm' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 85,
				},
				{
					id: 'sku_decor_28_3',
					specs: [
						{ name: '种类', valueName: '尤加利叶' },
						{ name: '高度', valueName: '30cm' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_28_4',
					specs: [
						{ name: '种类', valueName: '尤加利叶' },
						{ name: '高度', valueName: '50cm' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 75,
				},
			],
		},
		{
			name: '电池款星星灯串',
			desc: '3节5号电池供电，铜线灯串柔软可弯曲，露营装饰',
			brand: { name: '星光' },
			specs: [
				{
					name: '长度',
					values: [{ name: '2米20灯' }, { name: '5米50灯' }],
				},
				{ name: '颜色', values: [{ name: '暖白' }, { name: '彩色' }] },
			],
			skus: [
				{
					id: 'sku_decor_29_1',
					specs: [
						{ name: '长度', valueName: '2米20灯' },
						{ name: '颜色', valueName: '暖白' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 120,
				},
				{
					id: 'sku_decor_29_2',
					specs: [
						{ name: '长度', valueName: '2米20灯' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 110,
				},
				{
					id: 'sku_decor_29_3',
					specs: [
						{ name: '长度', valueName: '5米50灯' },
						{ name: '颜色', valueName: '暖白' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_29_4',
					specs: [
						{ name: '长度', valueName: '5米50灯' },
						{ name: '颜色', valueName: '彩色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 85,
				},
			],
		},
		{
			name: '窗帘绑带磁吸式',
			desc: '免打孔磁吸设计，一秒收起窗帘，简约美观',
			brand: { name: '绑带王' },
			specs: [
				{
					name: '材质',
					values: [{ name: '天鹅绒' }, { name: '棉麻' }],
				},
				{ name: '颜色', values: [{ name: '米色' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_decor_30_1',
					specs: [
						{ name: '材质', valueName: '天鹅绒' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 130,
				},
				{
					id: 'sku_decor_30_2',
					specs: [
						{ name: '材质', valueName: '天鹅绒' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_decor_30_3',
					specs: [
						{ name: '材质', valueName: '棉麻' },
						{ name: '颜色', valueName: '米色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_decor_30_4',
					specs: [
						{ name: '材质', valueName: '棉麻' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
			],
		},
		{
			name: '桌面防烫隔热垫',
			desc: '硅胶材质耐高温，波纹设计，茶杯垫饭桌垫',
			brand: { name: '隔热家' },
			specs: [
				{ name: '形状', values: [{ name: '圆形' }, { name: '方形' }] },
				{
					name: '颜色',
					values: [{ name: '灰色' }, { name: '咖啡色' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_31_1',
					specs: [
						{ name: '形状', valueName: '圆形' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_decor_31_2',
					specs: [
						{ name: '形状', valueName: '圆形' },
						{ name: '颜色', valueName: '咖啡色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 110,
				},
				{
					id: 'sku_decor_31_3',
					specs: [
						{ name: '形状', valueName: '方形' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_31_4',
					specs: [
						{ name: '形状', valueName: '方形' },
						{ name: '颜色', valueName: '咖啡色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 90,
				},
			],
		},
		{
			name: '玻璃桌面收纳托盘',
			desc: '金色边框透明玻璃，放香水化妆品，高级感',
			brand: { name: '托盘家' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '20x15cm' }, { name: '25x20cm' }],
				},
				{ name: '边框', values: [{ name: '金色' }, { name: '银色' }] },
			],
			skus: [
				{
					id: 'sku_decor_32_1',
					specs: [
						{ name: '尺寸', valueName: '20x15cm' },
						{ name: '边框', valueName: '金色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 85,
				},
				{
					id: 'sku_decor_32_2',
					specs: [
						{ name: '尺寸', valueName: '20x15cm' },
						{ name: '边框', valueName: '银色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_32_3',
					specs: [
						{ name: '尺寸', valueName: '25x20cm' },
						{ name: '边框', valueName: '金色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 70,
				},
				{
					id: 'sku_decor_32_4',
					specs: [
						{ name: '尺寸', valueName: '25x20cm' },
						{ name: '边框', valueName: '银色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 65,
				},
			],
		},
		{
			name: '创意陶瓷笔筒',
			desc: '手工陶瓷釉面，放笔化妆刷，桌面艺术摆件',
			brand: { name: '陶瓷坊' },
			specs: [
				{
					name: '形状',
					values: [{ name: '圆柱形' }, { name: '不规则形' }],
				},
				{
					name: '颜色',
					values: [{ name: '白色' }, { name: '莫兰迪绿' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_33_1',
					specs: [
						{ name: '形状', valueName: '圆柱形' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_33_2',
					specs: [
						{ name: '形状', valueName: '圆柱形' },
						{ name: '颜色', valueName: '莫兰迪绿' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 85,
				},
				{
					id: 'sku_decor_33_3',
					specs: [
						{ name: '形状', valueName: '不规则形' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_33_4',
					specs: [
						{ name: '形状', valueName: '不规则形' },
						{ name: '颜色', valueName: '莫兰迪绿' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 70,
				},
			],
		},
		{
			name: '桌面小型香薰机',
			desc: '超声波雾化，静音运行，滴入精油放松身心',
			brand: { name: '香薰机' },
			specs: [
				{
					name: '容量',
					values: [{ name: '150ml' }, { name: '300ml' }],
				},
				{
					name: '颜色',
					values: [{ name: '白色' }, { name: '木纹色' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_34_1',
					specs: [
						{ name: '容量', valueName: '150ml' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_34_2',
					specs: [
						{ name: '容量', valueName: '150ml' },
						{ name: '颜色', valueName: '木纹色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_34_3',
					specs: [
						{ name: '容量', valueName: '300ml' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 65,
				},
				{
					id: 'sku_decor_34_4',
					specs: [
						{ name: '容量', valueName: '300ml' },
						{ name: '颜色', valueName: '木纹色' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 60,
				},
			],
		},
		{
			name: '干花花束摆件',
			desc: '天然植物风干处理，永不凋谢，书房装饰',
			brand: { name: '干花店' },
			specs: [
				{
					name: '种类',
					values: [{ name: '勿忘我' }, { name: '绣球花' }],
				},
				{
					name: '包装',
					values: [{ name: '简约牛皮纸' }, { name: '透明玻璃纸' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_35_1',
					specs: [
						{ name: '种类', valueName: '勿忘我' },
						{ name: '包装', valueName: '简约牛皮纸' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_35_2',
					specs: [
						{ name: '种类', valueName: '勿忘我' },
						{ name: '包装', valueName: '透明玻璃纸' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_35_3',
					specs: [
						{ name: '种类', valueName: '绣球花' },
						{ name: '包装', valueName: '简约牛皮纸' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_35_4',
					specs: [
						{ name: '种类', valueName: '绣球花' },
						{ name: '包装', valueName: '透明玻璃纸' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 70,
				},
			],
		},
		{
			name: '防水马赛克贴纸',
			desc: '自粘式防水防油，贴厨房浴室柜子，翻新神器',
			brand: { name: '贴新家' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '30x300cm' }, { name: '60x300cm' }],
				},
				{
					name: '颜色',
					values: [{ name: '纯白方格' }, { name: '黑色方格' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_36_1',
					specs: [
						{ name: '尺寸', valueName: '30x300cm' },
						{ name: '颜色', valueName: '纯白方格' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_36_2',
					specs: [
						{ name: '尺寸', valueName: '30x300cm' },
						{ name: '颜色', valueName: '黑色方格' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 95,
				},
				{
					id: 'sku_decor_36_3',
					specs: [
						{ name: '尺寸', valueName: '60x300cm' },
						{ name: '颜色', valueName: '纯白方格' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 85,
				},
				{
					id: 'sku_decor_36_4',
					specs: [
						{ name: '尺寸', valueName: '60x300cm' },
						{ name: '颜色', valueName: '黑色方格' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
			],
		},
		{
			name: '墙面立体墙贴',
			desc: 'EVA海绵材质，防撞软萌，儿童房宿舍装饰',
			brand: { name: '立体贴' },
			specs: [
				{
					name: '图案',
					values: [{ name: '云朵月亮' }, { name: '树木动物' }],
				},
				{
					name: '尺寸',
					values: [{ name: '小套装' }, { name: '大套装' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_37_1',
					specs: [
						{ name: '图案', valueName: '云朵月亮' },
						{ name: '尺寸', valueName: '小套装' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 85,
				},
				{
					id: 'sku_decor_37_2',
					specs: [
						{ name: '图案', valueName: '云朵月亮' },
						{ name: '尺寸', valueName: '大套装' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 70,
				},
				{
					id: 'sku_decor_37_3',
					specs: [
						{ name: '图案', valueName: '树木动物' },
						{ name: '尺寸', valueName: '小套装' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 80,
				},
				{
					id: 'sku_decor_37_4',
					specs: [
						{ name: '图案', valueName: '树木动物' },
						{ name: '尺寸', valueName: '大套装' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 65,
				},
			],
		},
		{
			name: '桌面胡桃木收纳盘',
			desc: '原木质感，放钥匙零食，客厅宿舍茶几收纳',
			brand: { name: '原木风' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '20x15cm' }, { name: '30x20cm' }],
				},
				{
					name: '形状',
					values: [{ name: '长方形' }, { name: '椭圆形' }],
				},
			],
			skus: [
				{
					id: 'sku_decor_38_1',
					specs: [
						{ name: '尺寸', valueName: '20x15cm' },
						{ name: '形状', valueName: '长方形' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 75,
				},
				{
					id: 'sku_decor_38_2',
					specs: [
						{ name: '尺寸', valueName: '20x15cm' },
						{ name: '形状', valueName: '椭圆形' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 70,
				},
				{
					id: 'sku_decor_38_3',
					specs: [
						{ name: '尺寸', valueName: '30x20cm' },
						{ name: '形状', valueName: '长方形' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 60,
				},
				{
					id: 'sku_decor_38_4',
					specs: [
						{ name: '尺寸', valueName: '30x20cm' },
						{ name: '形状', valueName: '椭圆形' },
					],
					price: 32.9,
					oldPrice: 55.0,
					inventory: 55,
				},
			],
		},
		{
			name: '手账胶带装饰贴',
			desc: '和纸胶带可撕，手账日记装饰，多款花色混发',
			brand: { name: '手账社' },
			specs: [
				{
					name: '数量',
					values: [{ name: '5卷装' }, { name: '10卷装' }],
				},
				{ name: '宽度', values: [{ name: '1.5cm' }, { name: '3cm' }] },
			],
			skus: [
				{
					id: 'sku_decor_39_1',
					specs: [
						{ name: '数量', valueName: '5卷装' },
						{ name: '宽度', valueName: '1.5cm' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_decor_39_2',
					specs: [
						{ name: '数量', valueName: '5卷装' },
						{ name: '宽度', valueName: '3cm' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_decor_39_3',
					specs: [
						{ name: '数量', valueName: '10卷装' },
						{ name: '宽度', valueName: '1.5cm' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_decor_39_4',
					specs: [
						{ name: '数量', valueName: '10卷装' },
						{ name: '宽度', valueName: '3cm' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 80,
				},
			],
		},
		{
			name: '可爱毛绒挂件',
			desc: '小动物造型，可挂书包钥匙，捏捏解压软萌',
			brand: { name: '毛绒厂' },
			specs: [
				{
					name: '造型',
					values: [
						{ name: '小鸭子' },
						{ name: '小兔子' },
						{ name: '小青蛙' },
					],
				},
				{ name: '大小', values: [{ name: '5cm' }, { name: '10cm' }] },
			],
			skus: [
				{
					id: 'sku_decor_40_1',
					specs: [
						{ name: '造型', valueName: '小鸭子' },
						{ name: '大小', valueName: '5cm' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 150,
				},
				{
					id: 'sku_decor_40_2',
					specs: [
						{ name: '造型', valueName: '小鸭子' },
						{ name: '大小', valueName: '10cm' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_decor_40_3',
					specs: [
						{ name: '造型', valueName: '小兔子' },
						{ name: '大小', valueName: '5cm' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 140,
				},
				{
					id: 'sku_decor_40_4',
					specs: [
						{ name: '造型', valueName: '小青蛙' },
						{ name: '大小', valueName: '10cm' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
			],
		},
	],
	生活用品: [
		{
			name: '电热水壶宿舍小功率',
			desc: '600W低功率，1.2L容量，自动断电，宿舍可用',
			brand: { name: '热水侠' },
			specs: [
				{ name: '功率', values: [{ name: '600W' }, { name: '800W' }] },
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '粉色' },
						{ name: '蓝色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_life_1_1',
					specs: [
						{ name: '功率', valueName: '600W' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 80,
				},
				{
					id: 'sku_life_1_2',
					specs: [
						{ name: '功率', valueName: '600W' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 75,
				},
				{
					id: 'sku_life_1_3',
					specs: [
						{ name: '功率', valueName: '600W' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 70,
				},
				{
					id: 'sku_life_1_4',
					specs: [
						{ name: '功率', valueName: '800W' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 45.9,
					oldPrice: 78.0,
					inventory: 60,
				},
				{
					id: 'sku_life_1_5',
					specs: [
						{ name: '功率', valueName: '800W' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 45.9,
					oldPrice: 78.0,
					inventory: 55,
				},
			],
		},
		{
			name: '插线板多功能插座',
			desc: '3位5孔+3USB，线长3米，过载保护，宿舍必备',
			brand: { name: '安全电' },
			specs: [
				{
					name: '插位',
					values: [
						{ name: '3位基础款' },
						{ name: '4位标准款' },
						{ name: '6位扩展款' },
					],
				},
				{
					name: '线长',
					values: [
						{ name: '1.8米' },
						{ name: '3米' },
						{ name: '5米' },
					],
				},
			],
			skus: [
				{
					id: 'sku_life_2_1',
					specs: [
						{ name: '插位', valueName: '3位基础款' },
						{ name: '线长', valueName: '1.8米' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 100,
				},
				{
					id: 'sku_life_2_2',
					specs: [
						{ name: '插位', valueName: '3位基础款' },
						{ name: '线长', valueName: '3米' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 90,
				},
				{
					id: 'sku_life_2_3',
					specs: [
						{ name: '插位', valueName: '4位标准款' },
						{ name: '线长', valueName: '3米' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 75,
				},
				{
					id: 'sku_life_2_4',
					specs: [
						{ name: '插位', valueName: '4位标准款' },
						{ name: '线长', valueName: '5米' },
					],
					price: 42.9,
					oldPrice: 75.0,
					inventory: 60,
				},
				{
					id: 'sku_life_2_5',
					specs: [
						{ name: '插位', valueName: '6位扩展款' },
						{ name: '线长', valueName: '3米' },
					],
					price: 49.9,
					oldPrice: 88.0,
					inventory: 50,
				},
				{
					id: 'sku_life_2_6',
					specs: [
						{ name: '插位', valueName: '6位扩展款' },
						{ name: '线长', valueName: '5米' },
					],
					price: 59.9,
					oldPrice: 102.0,
					inventory: 40,
				},
			],
		},
		{
			name: '保温杯不锈钢大容量',
			desc: '304不锈钢，500ml大容量，24小时保温',
			brand: { name: '暖暖杯' },
			specs: [
				{
					name: '容量',
					values: [
						{ name: '350ml' },
						{ name: '500ml' },
						{ name: '750ml' },
					],
				},
				{
					name: '颜色',
					values: [
						{ name: '黑色' },
						{ name: '白色' },
						{ name: '粉色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_life_3_1',
					specs: [
						{ name: '容量', valueName: '350ml' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 90,
				},
				{
					id: 'sku_life_3_2',
					specs: [
						{ name: '容量', valueName: '350ml' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 85,
				},
				{
					id: 'sku_life_3_3',
					specs: [
						{ name: '容量', valueName: '350ml' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 80,
				},
				{
					id: 'sku_life_3_4',
					specs: [
						{ name: '容量', valueName: '500ml' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 75,
				},
				{
					id: 'sku_life_3_5',
					specs: [
						{ name: '容量', valueName: '500ml' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 70,
				},
				{
					id: 'sku_life_3_6',
					specs: [
						{ name: '容量', valueName: '750ml' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 45.9,
					oldPrice: 78.0,
					inventory: 55,
				},
			],
		},
		{
			name: '雨伞折叠晴雨两用',
			desc: '8骨加固，防紫外线UPF50+，一键开合',
			brand: { name: '遮天' },
			specs: [
				{
					name: '伞骨',
					values: [{ name: '8骨' }, { name: '10骨加固' }],
				},
				{
					name: '颜色',
					values: [
						{ name: '黑色' },
						{ name: '藏青' },
						{ name: '粉色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_life_4_1',
					specs: [
						{ name: '伞骨', valueName: '8骨' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 22.9,
					oldPrice: 40.0,
					inventory: 120,
				},
				{
					id: 'sku_life_4_2',
					specs: [
						{ name: '伞骨', valueName: '8骨' },
						{ name: '颜色', valueName: '藏青' },
					],
					price: 22.9,
					oldPrice: 40.0,
					inventory: 110,
				},
				{
					id: 'sku_life_4_3',
					specs: [
						{ name: '伞骨', valueName: '8骨' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 22.9,
					oldPrice: 40.0,
					inventory: 100,
				},
				{
					id: 'sku_life_4_4',
					specs: [
						{ name: '伞骨', valueName: '10骨加固' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 32.9,
					oldPrice: 58.0,
					inventory: 80,
				},
				{
					id: 'sku_life_4_5',
					specs: [
						{ name: '伞骨', valueName: '10骨加固' },
						{ name: '颜色', valueName: '藏青' },
					],
					price: 32.9,
					oldPrice: 58.0,
					inventory: 75,
				},
				{
					id: 'sku_life_4_6',
					specs: [
						{ name: '伞骨', valueName: '10骨加固' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 32.9,
					oldPrice: 58.0,
					inventory: 70,
				},
			],
		},
		{
			name: '小风扇USB充电',
			desc: '三档风速，静音设计，可夹可立，续航8小时',
			brand: { name: '凉风' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '4寸' }, { name: '6寸' }, { name: '8寸' }],
				},
				{
					name: '供电',
					values: [{ name: 'USB直插' }, { name: '充电款' }],
				},
			],
			skus: [
				{
					id: 'sku_life_5_1',
					specs: [
						{ name: '尺寸', valueName: '4寸' },
						{ name: '供电', valueName: 'USB直插' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 150,
				},
				{
					id: 'sku_life_5_2',
					specs: [
						{ name: '尺寸', valueName: '4寸' },
						{ name: '供电', valueName: '充电款' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 120,
				},
				{
					id: 'sku_life_5_3',
					specs: [
						{ name: '尺寸', valueName: '6寸' },
						{ name: '供电', valueName: 'USB直插' },
					],
					price: 22.9,
					oldPrice: 40.0,
					inventory: 100,
				},
				{
					id: 'sku_life_5_4',
					specs: [
						{ name: '尺寸', valueName: '6寸' },
						{ name: '供电', valueName: '充电款' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 80,
				},
				{
					id: 'sku_life_5_5',
					specs: [
						{ name: '尺寸', valueName: '8寸' },
						{ name: '供电', valueName: '充电款' },
					],
					price: 45.9,
					oldPrice: 78.0,
					inventory: 60,
				},
			],
		},
		{
			name: '眼罩睡眠遮光透气',
			desc: '3D立体不压眼，可调节松紧，送耳塞',
			brand: { name: '好眠' },
			specs: [
				{
					name: '款式',
					values: [
						{ name: '普通款' },
						{ name: '3D立体款' },
						{ name: '冰敷款' },
					],
				},
				{
					name: '颜色',
					values: [
						{ name: '黑色' },
						{ name: '灰色' },
						{ name: '粉色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_life_6_1',
					specs: [
						{ name: '款式', valueName: '普通款' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 200,
				},
				{
					id: 'sku_life_6_2',
					specs: [
						{ name: '款式', valueName: '普通款' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 180,
				},
				{
					id: 'sku_life_6_3',
					specs: [
						{ name: '款式', valueName: '3D立体款' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 150,
				},
				{
					id: 'sku_life_6_4',
					specs: [
						{ name: '款式', valueName: '3D立体款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'sku_life_6_5',
					specs: [
						{ name: '款式', valueName: '冰敷款' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_life_6_6',
					specs: [
						{ name: '款式', valueName: '冰敷款' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 95,
				},
			],
		},
		{
			name: '耳塞防噪音睡眠',
			desc: '慢回弹记忆棉，降噪35dB，宿舍吵闹必备',
			brand: { name: '静界' },
			specs: [
				{
					name: '对数',
					values: [
						{ name: '2对装' },
						{ name: '5对装' },
						{ name: '10对装' },
					],
				},
				{
					name: '颜色',
					values: [
						{ name: '肤色' },
						{ name: '橙色' },
						{ name: '绿色' },
					],
				},
			],
			skus: [
				{
					id: 'sku_life_7_1',
					specs: [
						{ name: '对数', valueName: '2对装' },
						{ name: '颜色', valueName: '肤色' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 200,
				},
				{
					id: 'sku_life_7_2',
					specs: [
						{ name: '对数', valueName: '2对装' },
						{ name: '颜色', valueName: '橙色' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 180,
				},
				{
					id: 'sku_life_7_3',
					specs: [
						{ name: '对数', valueName: '2对装' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 6.9,
					oldPrice: 12.0,
					inventory: 170,
				},
				{
					id: 'sku_life_7_4',
					specs: [
						{ name: '对数', valueName: '5对装' },
						{ name: '颜色', valueName: '肤色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_life_7_5',
					specs: [
						{ name: '对数', valueName: '5对装' },
						{ name: '颜色', valueName: '橙色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 140,
				},
				{
					id: 'sku_life_7_6',
					specs: [
						{ name: '对数', valueName: '5对装' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 130,
				},
				{
					id: 'sku_life_7_7',
					specs: [
						{ name: '对数', valueName: '10对装' },
						{ name: '颜色', valueName: '肤色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_life_7_8',
					specs: [
						{ name: '对数', valueName: '10对装' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
			],
		},
		{
			name: '镜子化妆镜台式',
			desc: '高清镜面，360度旋转，宿舍桌面梳妆镜',
			brand: { name: '明镜' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '小号(15cm)' },
						{ name: '中号(20cm)' },
						{ name: '大号(25cm)' },
					],
				},
				{
					name: '功能',
					values: [{ name: '普通款' }, { name: 'LED灯款' }],
				},
			],
			skus: [
				{
					id: 'sku_life_8_1',
					specs: [
						{ name: '尺寸', valueName: '小号(15cm)' },
						{ name: '功能', valueName: '普通款' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 150,
				},
				{
					id: 'sku_life_8_2',
					specs: [
						{ name: '尺寸', valueName: '小号(15cm)' },
						{ name: '功能', valueName: 'LED灯款' },
					],
					price: 22.9,
					oldPrice: 40.0,
					inventory: 100,
				},
				{
					id: 'sku_life_8_3',
					specs: [
						{ name: '尺寸', valueName: '中号(20cm)' },
						{ name: '功能', valueName: '普通款' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 120,
				},
				{
					id: 'sku_life_8_4',
					specs: [
						{ name: '尺寸', valueName: '中号(20cm)' },
						{ name: '功能', valueName: 'LED灯款' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 80,
				},
				{
					id: 'sku_life_8_5',
					specs: [
						{ name: '尺寸', valueName: '大号(25cm)' },
						{ name: '功能', valueName: '普通款' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 90,
				},
				{
					id: 'sku_life_8_6',
					specs: [
						{ name: '尺寸', valueName: '大号(25cm)' },
						{ name: '功能', valueName: 'LED灯款' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 60,
				},
			],
		},
		{
			name: '针线盒套装',
			desc: '针线剪刀顶针齐全，便携收纳盒，缝补必备',
			brand: { name: '巧手' },
			specs: [
				{
					name: '配置',
					values: [
						{ name: '基础款(10色线)' },
						{ name: '标准款(24色线)' },
						{ name: '豪华款(40色线+工具)' },
					],
				},
				{ name: '颜色', values: [{ name: '粉色' }, { name: '蓝色' }] },
			],
			skus: [
				{
					id: 'sku_life_9_1',
					specs: [
						{ name: '配置', valueName: '基础款(10色线)' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 200,
				},
				{
					id: 'sku_life_9_2',
					specs: [
						{ name: '配置', valueName: '基础款(10色线)' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 190,
				},
				{
					id: 'sku_life_9_3',
					specs: [
						{ name: '配置', valueName: '标准款(24色线)' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 150,
				},
				{
					id: 'sku_life_9_4',
					specs: [
						{ name: '配置', valueName: '标准款(24色线)' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 140,
				},
				{
					id: 'sku_life_9_5',
					specs: [
						{ name: '配置', valueName: '豪华款(40色线+工具)' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 100,
				},
				{
					id: 'sku_life_9_6',
					specs: [
						{ name: '配置', valueName: '豪华款(40色线+工具)' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 95,
				},
			],
		},
		{
			name: '密码锁自行车锁',
			desc: '高强度锌合金锁芯，防剪防撬，3位密码',
			brand: { name: '锁安心' },
			specs: [
				{ name: '长度', values: [{ name: '60cm' }, { name: '90cm' }] },
				{ name: '颜色', values: [{ name: '黑色' }, { name: '蓝色' }] },
			],
			skus: [
				{
					id: 'sku_life_10_1',
					specs: [
						{ name: '长度', valueName: '60cm' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_life_10_2',
					specs: [
						{ name: '长度', valueName: '60cm' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_life_10_3',
					specs: [
						{ name: '长度', valueName: '90cm' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
				{
					id: 'sku_life_10_4',
					specs: [
						{ name: '长度', valueName: '90cm' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 75,
				},
			],
		},
		{
			name: '宿舍伸缩晾衣杆',
			desc: '免打孔伸缩固定，阳台衣柜晾衣，承重强',
			brand: { name: '晾衣王' },
			specs: [
				{
					name: '长度',
					values: [{ name: '70-120cm' }, { name: '100-180cm' }],
				},
				{
					name: '材质',
					values: [{ name: '不锈钢' }, { name: '太空铝' }],
				},
			],
			skus: [
				{
					id: 'sku_life_11_1',
					specs: [
						{ name: '长度', valueName: '70-120cm' },
						{ name: '材质', valueName: '不锈钢' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_life_11_2',
					specs: [
						{ name: '长度', valueName: '70-120cm' },
						{ name: '材质', valueName: '太空铝' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 75,
				},
				{
					id: 'sku_life_11_3',
					specs: [
						{ name: '长度', valueName: '100-180cm' },
						{ name: '材质', valueName: '不锈钢' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 80,
				},
				{
					id: 'sku_life_11_4',
					specs: [
						{ name: '长度', valueName: '100-180cm' },
						{ name: '材质', valueName: '太空铝' },
					],
					price: 29.9,
					oldPrice: 50.0,
					inventory: 65,
				},
			],
		},
		{
			name: '简易多层鞋架',
			desc: '管状组装防尘，收纳常穿鞋子，宿舍门后可用',
			brand: { name: '鞋架家' },
			specs: [
				{ name: '层数', values: [{ name: '4层' }, { name: '6层' }] },
				{ name: '颜色', values: [{ name: '白色' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_life_12_1',
					specs: [
						{ name: '层数', valueName: '4层' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
				{
					id: 'sku_life_12_2',
					specs: [
						{ name: '层数', valueName: '4层' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 75,
				},
				{
					id: 'sku_life_12_3',
					specs: [
						{ name: '层数', valueName: '6层' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 28.9,
					oldPrice: 48.0,
					inventory: 65,
				},
				{
					id: 'sku_life_12_4',
					specs: [
						{ name: '层数', valueName: '6层' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 28.9,
					oldPrice: 48.0,
					inventory: 60,
				},
			],
		},
		{
			name: '旋转免打孔晾鞋架',
			desc: '挂墙360度旋转，晾晒单鞋不占地，防风防滑',
			brand: { name: '旋转鞋架' },
			specs: [
				{ name: '位数', values: [{ name: '8位' }, { name: '12位' }] },
				{ name: '颜色', values: [{ name: '白色' }, { name: '灰色' }] },
			],
			skus: [
				{
					id: 'sku_life_13_1',
					specs: [
						{ name: '位数', valueName: '8位' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 85,
				},
				{
					id: 'sku_life_13_2',
					specs: [
						{ name: '位数', valueName: '8位' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 80,
				},
				{
					id: 'sku_life_13_3',
					specs: [
						{ name: '位数', valueName: '12位' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 70,
				},
				{
					id: 'sku_life_13_4',
					specs: [
						{ name: '位数', valueName: '12位' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 65,
				},
			],
		},
		{
			name: '衣服除毛刷静电刷',
			desc: '去除宠物毛发灰尘，可水洗循环使用，不伤衣物',
			brand: { name: '净毛器' },
			specs: [
				{
					name: '款式',
					values: [{ name: '标准款' }, { name: '长柄款' }],
				},
				{ name: '颜色', values: [{ name: '蓝色' }, { name: '灰色' }] },
			],
			skus: [
				{
					id: 'sku_life_14_1',
					specs: [
						{ name: '款式', valueName: '标准款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_life_14_2',
					specs: [
						{ name: '款式', valueName: '标准款' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 110,
				},
				{
					id: 'sku_life_14_3',
					specs: [
						{ name: '款式', valueName: '长柄款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_life_14_4',
					specs: [
						{ name: '款式', valueName: '长柄款' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 85,
				},
			],
		},
		{
			name: '塑料提水桶加厚',
			desc: '食品级PP材质，圆桶带提手，打水洗衣服',
			brand: { name: '好桶' },
			specs: [
				{ name: '容量', values: [{ name: '8L' }, { name: '12L' }] },
				{ name: '颜色', values: [{ name: '蓝色' }, { name: '白色' }] },
			],
			skus: [
				{
					id: 'sku_life_15_1',
					specs: [
						{ name: '容量', valueName: '8L' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_life_15_2',
					specs: [
						{ name: '容量', valueName: '8L' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_life_15_3',
					specs: [
						{ name: '容量', valueName: '12L' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_life_15_4',
					specs: [
						{ name: '容量', valueName: '12L' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 85,
				},
			],
		},
		{
			name: '户外便携小手电筒',
			desc: '强光变焦防水，USB充电，停电夜间出行必备',
			brand: { name: '强光手电' },
			specs: [
				{
					name: '档位',
					values: [{ name: '3档调光' }, { name: '5档调光' }],
				},
				{
					name: '颜色',
					values: [{ name: '黑色' }, { name: '军绿色' }],
				},
			],
			skus: [
				{
					id: 'sku_life_16_1',
					specs: [
						{ name: '档位', valueName: '3档调光' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_life_16_2',
					specs: [
						{ name: '档位', valueName: '3档调光' },
						{ name: '颜色', valueName: '军绿色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 85,
				},
				{
					id: 'sku_life_16_3',
					specs: [
						{ name: '档位', valueName: '5档调光' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 75,
				},
				{
					id: 'sku_life_16_4',
					specs: [
						{ name: '档位', valueName: '5档调光' },
						{ name: '颜色', valueName: '军绿色' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 70,
				},
			],
		},
		{
			name: '便携充电宝10000毫安',
			desc: '轻薄机身带线，双向快充，飞机高铁可带',
			brand: { name: '能量源' },
			specs: [
				{
					name: '容量',
					values: [{ name: '10000mAh' }, { name: '20000mAh' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_life_17_1',
					specs: [
						{ name: '容量', valueName: '10000mAh' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 80,
				},
				{
					id: 'sku_life_17_2',
					specs: [
						{ name: '容量', valueName: '10000mAh' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 39.9,
					oldPrice: 68.0,
					inventory: 75,
				},
				{
					id: 'sku_life_17_3',
					specs: [
						{ name: '容量', valueName: '20000mAh' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 59.9,
					oldPrice: 99.0,
					inventory: 60,
				},
				{
					id: 'sku_life_17_4',
					specs: [
						{ name: '容量', valueName: '20000mAh' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 59.9,
					oldPrice: 99.0,
					inventory: 55,
				},
			],
		},
		{
			name: '三合一快充数据线',
			desc: 'Type-C/安卓/苹果三头，尼龙编织不断裂',
			brand: { name: '线材家' },
			specs: [
				{ name: '长度', values: [{ name: '1米' }, { name: '1.5米' }] },
				{ name: '颜色', values: [{ name: '白色' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_life_18_1',
					specs: [
						{ name: '长度', valueName: '1米' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 150,
				},
				{
					id: 'sku_life_18_2',
					specs: [
						{ name: '长度', valueName: '1米' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 140,
				},
				{
					id: 'sku_life_18_3',
					specs: [
						{ name: '长度', valueName: '1.5米' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_life_18_4',
					specs: [
						{ name: '长度', valueName: '1.5米' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
			],
		},
		{
			name: '多功能转换插头',
			desc: '全球通用，含多国标准插脚，出差旅行必备',
			brand: { name: '环球通' },
			specs: [
				{
					name: '接口',
					values: [{ name: '新国标' }, { name: '美标/欧标/英标' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_life_19_1',
					specs: [
						{ name: '接口', valueName: '新国标' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_life_19_2',
					specs: [
						{ name: '接口', valueName: '新国标' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_life_19_3',
					specs: [
						{ name: '接口', valueName: '美标/欧标/英标' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 75,
				},
				{
					id: 'sku_life_19_4',
					specs: [
						{ name: '接口', valueName: '美标/欧标/英标' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 25.9,
					oldPrice: 45.0,
					inventory: 70,
				},
			],
		},
		{
			name: '小号衣服粘毛滚筒',
			desc: '撕拉式设计，粘毛除尘，换季清理衣物床单',
			brand: { name: '净衣宝' },
			specs: [
				{ name: '层数', values: [{ name: '30层' }, { name: '60层' }] },
				{ name: '宽度', values: [{ name: '10cm' }, { name: '15cm' }] },
			],
			skus: [
				{
					id: 'sku_life_20_1',
					specs: [
						{ name: '层数', valueName: '30层' },
						{ name: '宽度', valueName: '10cm' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 150,
				},
				{
					id: 'sku_life_20_2',
					specs: [
						{ name: '层数', valueName: '30层' },
						{ name: '宽度', valueName: '15cm' },
					],
					price: 7.9,
					oldPrice: 14.0,
					inventory: 130,
				},
				{
					id: 'sku_life_20_3',
					specs: [
						{ name: '层数', valueName: '60层' },
						{ name: '宽度', valueName: '10cm' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 120,
				},
				{
					id: 'sku_life_20_4',
					specs: [
						{ name: '层数', valueName: '60层' },
						{ name: '宽度', valueName: '15cm' },
					],
					price: 10.9,
					oldPrice: 18.0,
					inventory: 110,
				},
			],
		},
		{
			name: '抽取式桌面纸巾盒',
			desc: '防尘防潮，单手抽取，宿舍桌面客厅适用',
			brand: { name: '纸巾盒' },
			specs: [
				{ name: '材质', values: [{ name: '塑料' }, { name: '硅胶' }] },
				{ name: '颜色', values: [{ name: '白色' }, { name: '绿色' }] },
			],
			skus: [
				{
					id: 'sku_life_21_1',
					specs: [
						{ name: '材质', valueName: '塑料' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_life_21_2',
					specs: [
						{ name: '材质', valueName: '塑料' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 110,
				},
				{
					id: 'sku_life_21_3',
					specs: [
						{ name: '材质', valueName: '硅胶' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_life_21_4',
					specs: [
						{ name: '材质', valueName: '硅胶' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 85,
				},
			],
		},
		{
			name: '湿厕纸便携装',
			desc: '纯水湿厕纸，温和不刺激，如厕清洁更干净',
			brand: { name: '舒洁' },
			specs: [
				{
					name: '规格',
					values: [{ name: '40抽便携' }, { name: '80抽家庭装' }],
				},
				{
					name: '数量',
					values: [{ name: '1包' }, { name: '3包组合' }],
				},
			],
			skus: [
				{
					id: 'sku_life_22_1',
					specs: [
						{ name: '规格', valueName: '40抽便携' },
						{ name: '数量', valueName: '1包' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 130,
				},
				{
					id: 'sku_life_22_2',
					specs: [
						{ name: '规格', valueName: '40抽便携' },
						{ name: '数量', valueName: '3包组合' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 100,
				},
				{
					id: 'sku_life_22_3',
					specs: [
						{ name: '规格', valueName: '80抽家庭装' },
						{ name: '数量', valueName: '1包' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_life_22_4',
					specs: [
						{ name: '规格', valueName: '80抽家庭装' },
						{ name: '数量', valueName: '3包组合' },
					],
					price: 29.9,
					oldPrice: 52.0,
					inventory: 80,
				},
			],
		},
		{
			name: '卷筒卫生纸实惠装',
			desc: '四层加厚不易破，无荧光剂，学生宿舍囤货',
			brand: { name: '维达' },
			specs: [
				{
					name: '克重',
					values: [{ name: '140g/卷' }, { name: '180g/卷' }],
				},
				{
					name: '数量',
					values: [{ name: '10卷' }, { name: '27卷整箱' }],
				},
			],
			skus: [
				{
					id: 'sku_life_23_1',
					specs: [
						{ name: '克重', valueName: '140g/卷' },
						{ name: '数量', valueName: '10卷' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_life_23_2',
					specs: [
						{ name: '克重', valueName: '140g/卷' },
						{ name: '数量', valueName: '27卷整箱' },
					],
					price: 35.9,
					oldPrice: 62.0,
					inventory: 60,
				},
				{
					id: 'sku_life_23_3',
					specs: [
						{ name: '克重', valueName: '180g/卷' },
						{ name: '数量', valueName: '10卷' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_life_23_4',
					specs: [
						{ name: '克重', valueName: '180g/卷' },
						{ name: '数量', valueName: '27卷整箱' },
					],
					price: 45.9,
					oldPrice: 78.0,
					inventory: 50,
				},
			],
		},
		{
			name: '手提式加厚垃圾袋',
			desc: '背心式设计提手不脏手，不易破漏，宿舍日常',
			brand: { name: '妙洁' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '中号(45x50cm)' },
						{ name: '大号(60x70cm)' },
					],
				},
				{
					name: '数量',
					values: [{ name: '100只' }, { name: '200只' }],
				},
			],
			skus: [
				{
					id: 'sku_life_24_1',
					specs: [
						{ name: '尺寸', valueName: '中号(45x50cm)' },
						{ name: '数量', valueName: '100只' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_life_24_2',
					specs: [
						{ name: '尺寸', valueName: '中号(45x50cm)' },
						{ name: '数量', valueName: '200只' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_life_24_3',
					specs: [
						{ name: '尺寸', valueName: '大号(60x70cm)' },
						{ name: '数量', valueName: '100只' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_life_24_4',
					specs: [
						{ name: '尺寸', valueName: '大号(60x70cm)' },
						{ name: '数量', valueName: '200只' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 85,
				},
			],
		},
		{
			name: '一次性保鲜膜套',
			desc: '弹力硅胶头套，套碗碟防串味，微波炉可用',
			brand: { name: '保鲜膜' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '常规款' }, { name: '加大款' }],
				},
				{
					name: '数量',
					values: [{ name: '50个装' }, { name: '100个装' }],
				},
			],
			skus: [
				{
					id: 'sku_life_25_1',
					specs: [
						{ name: '尺寸', valueName: '常规款' },
						{ name: '数量', valueName: '50个装' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 130,
				},
				{
					id: 'sku_life_25_2',
					specs: [
						{ name: '尺寸', valueName: '常规款' },
						{ name: '数量', valueName: '100个装' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_life_25_3',
					specs: [
						{ name: '尺寸', valueName: '加大款' },
						{ name: '数量', valueName: '50个装' },
					],
					price: 10.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_life_25_4',
					specs: [
						{ name: '尺寸', valueName: '加大款' },
						{ name: '数量', valueName: '100个装' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 95,
				},
			],
		},
		{
			name: '滑动切割器保鲜膜',
			desc: '一拉即切不卡顿，带刀片收纳，厨房宿舍适用',
			brand: { name: '切膜器' },
			specs: [
				{
					name: '规格',
					values: [{ name: '20cm宽' }, { name: '30cm宽' }],
				},
				{ name: '长度', values: [{ name: '50米' }, { name: '100米' }] },
			],
			skus: [
				{
					id: 'sku_life_26_1',
					specs: [
						{ name: '规格', valueName: '20cm宽' },
						{ name: '长度', valueName: '50米' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_life_26_2',
					specs: [
						{ name: '规格', valueName: '20cm宽' },
						{ name: '长度', valueName: '100米' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 85,
				},
				{
					id: 'sku_life_26_3',
					specs: [
						{ name: '规格', valueName: '30cm宽' },
						{ name: '长度', valueName: '50米' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_life_26_4',
					specs: [
						{ name: '规格', valueName: '30cm宽' },
						{ name: '长度', valueName: '100米' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 75,
				},
			],
		},
		{
			name: '硅胶折叠饭盒',
			desc: '食品级硅胶可折叠，微波炉加热，带餐具',
			brand: { name: '折叠盒' },
			specs: [
				{
					name: '容量',
					values: [{ name: '800ml' }, { name: '1200ml' }],
				},
				{ name: '颜色', values: [{ name: '绿色' }, { name: '粉色' }] },
			],
			skus: [
				{
					id: 'sku_life_27_1',
					specs: [
						{ name: '容量', valueName: '800ml' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 90,
				},
				{
					id: 'sku_life_27_2',
					specs: [
						{ name: '容量', valueName: '800ml' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 85,
				},
				{
					id: 'sku_life_27_3',
					specs: [
						{ name: '容量', valueName: '1200ml' },
						{ name: '颜色', valueName: '绿色' },
					],
					price: 28.9,
					oldPrice: 48.0,
					inventory: 75,
				},
				{
					id: 'sku_life_27_4',
					specs: [
						{ name: '容量', valueName: '1200ml' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 28.9,
					oldPrice: 48.0,
					inventory: 70,
				},
			],
		},
		{
			name: '便携不锈钢餐具套装',
			desc: '筷子勺子叉子三件套，带收纳管，食堂带饭',
			brand: { name: '餐具家' },
			specs: [
				{
					name: '材质',
					values: [{ name: '304不锈钢' }, { name: '钛合金' }],
				},
				{ name: '颜色', values: [{ name: '银色' }, { name: '金色' }] },
			],
			skus: [
				{
					id: 'sku_life_28_1',
					specs: [
						{ name: '材质', valueName: '304不锈钢' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_life_28_2',
					specs: [
						{ name: '材质', valueName: '304不锈钢' },
						{ name: '颜色', valueName: '金色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_life_28_3',
					specs: [
						{ name: '材质', valueName: '钛合金' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 85,
				},
				{
					id: 'sku_life_28_4',
					specs: [
						{ name: '材质', valueName: '钛合金' },
						{ name: '颜色', valueName: '金色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 80,
				},
			],
		},
		{
			name: '大容量吨吨桶水杯',
			desc: '刻度可视化饮水，提手便携，宿舍运动补水',
			brand: { name: '吨吨杯' },
			specs: [
				{ name: '容量', values: [{ name: '1.5L' }, { name: '2L' }] },
				{ name: '颜色', values: [{ name: '透明' }, { name: '白色' }] },
			],
			skus: [
				{
					id: 'sku_life_29_1',
					specs: [
						{ name: '容量', valueName: '1.5L' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 90,
				},
				{
					id: 'sku_life_29_2',
					specs: [
						{ name: '容量', valueName: '1.5L' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 85,
				},
				{
					id: 'sku_life_29_3',
					specs: [
						{ name: '容量', valueName: '2L' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 80,
				},
				{
					id: 'sku_life_29_4',
					specs: [
						{ name: '容量', valueName: '2L' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 22.9,
					oldPrice: 38.0,
					inventory: 75,
				},
			],
		},
		{
			name: '桌面迷你饮水机',
			desc: '加热制冷两用，适配桶装水，宿舍懒人喝水',
			brand: { name: '饮水机' },
			specs: [
				{
					name: '功能',
					values: [{ name: '单加热' }, { name: '加热+制冷' }],
				},
				{ name: '颜色', values: [{ name: '白色' }, { name: '粉色' }] },
			],
			skus: [
				{
					id: 'sku_life_30_1',
					specs: [
						{ name: '功能', valueName: '单加热' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 49.9,
					oldPrice: 85.0,
					inventory: 60,
				},
				{
					id: 'sku_life_30_2',
					specs: [
						{ name: '功能', valueName: '单加热' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 49.9,
					oldPrice: 85.0,
					inventory: 55,
				},
				{
					id: 'sku_life_30_3',
					specs: [
						{ name: '功能', valueName: '加热+制冷' },
						{ name: '颜色', valueName: '白色' },
					],
					price: 69.9,
					oldPrice: 118.0,
					inventory: 45,
				},
				{
					id: 'sku_life_30_4',
					specs: [
						{ name: '功能', valueName: '加热+制冷' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 69.9,
					oldPrice: 118.0,
					inventory: 40,
				},
			],
		},
		{
			name: '指甲刀七件套套装',
			desc: '不锈钢材质防锈，含指甲剪死皮剪等，皮套收纳',
			brand: { name: '修甲套装' },
			specs: [
				{
					name: '配置',
					values: [{ name: '7件套' }, { name: '12件套' }],
				},
				{ name: '颜色', values: [{ name: '银色' }, { name: '金色' }] },
			],
			skus: [
				{
					id: 'sku_life_31_1',
					specs: [
						{ name: '配置', valueName: '7件套' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_life_31_2',
					specs: [
						{ name: '配置', valueName: '7件套' },
						{ name: '颜色', valueName: '金色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 90,
				},
				{
					id: 'sku_life_31_3',
					specs: [
						{ name: '配置', valueName: '12件套' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
				{
					id: 'sku_life_31_4',
					specs: [
						{ name: '配置', valueName: '12件套' },
						{ name: '颜色', valueName: '金色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 75,
				},
			],
		},
		{
			name: '不锈钢挖耳勺七件套',
			desc: '防滑磨砂手柄，多款式耳勺，带收纳盒',
			brand: { name: '耳勺王' },
			specs: [
				{
					name: '款式',
					values: [{ name: '基础款' }, { name: '带灯款' }],
				},
				{ name: '颜色', values: [{ name: '银色' }, { name: '金色' }] },
			],
			skus: [
				{
					id: 'sku_life_32_1',
					specs: [
						{ name: '款式', valueName: '基础款' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_life_32_2',
					specs: [
						{ name: '款式', valueName: '基础款' },
						{ name: '颜色', valueName: '金色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 110,
				},
				{
					id: 'sku_life_32_3',
					specs: [
						{ name: '款式', valueName: '带灯款' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_life_32_4',
					specs: [
						{ name: '款式', valueName: '带灯款' },
						{ name: '颜色', valueName: '金色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 85,
				},
			],
		},
		{
			name: '气垫按摩梳防静电',
			desc: '气垫回弹舒缓头皮，防静电打结，男女通用',
			brand: { name: '梳子家' },
			specs: [
				{
					name: '功能',
					values: [{ name: '普通款' }, { name: '卷发款' }],
				},
				{
					name: '颜色',
					values: [{ name: '黑色' }, { name: '咖啡色' }],
				},
			],
			skus: [
				{
					id: 'sku_life_33_1',
					specs: [
						{ name: '功能', valueName: '普通款' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
				{
					id: 'sku_life_33_2',
					specs: [
						{ name: '功能', valueName: '普通款' },
						{ name: '颜色', valueName: '咖啡色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_life_33_3',
					specs: [
						{ name: '功能', valueName: '卷发款' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_life_33_4',
					specs: [
						{ name: '功能', valueName: '卷发款' },
						{ name: '颜色', valueName: '咖啡色' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 85,
				},
			],
		},
		{
			name: '大肠发圈头绳',
			desc: '真丝材质不扯发，高弹力不勒头，多色装',
			brand: { name: '发饰坊' },
			specs: [
				{
					name: '材质',
					values: [{ name: '真丝' }, { name: '天鹅绒' }],
				},
				{
					name: '数量',
					values: [{ name: '3个装' }, { name: '6个装' }],
				},
			],
			skus: [
				{
					id: 'sku_life_34_1',
					specs: [
						{ name: '材质', valueName: '真丝' },
						{ name: '数量', valueName: '3个装' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 130,
				},
				{
					id: 'sku_life_34_2',
					specs: [
						{ name: '材质', valueName: '真丝' },
						{ name: '数量', valueName: '6个装' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 100,
				},
				{
					id: 'sku_life_34_3',
					specs: [
						{ name: '材质', valueName: '天鹅绒' },
						{ name: '数量', valueName: '3个装' },
					],
					price: 7.9,
					oldPrice: 14.0,
					inventory: 140,
				},
				{
					id: 'sku_life_34_4',
					specs: [
						{ name: '材质', valueName: '天鹅绒' },
						{ name: '数量', valueName: '6个装' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 110,
				},
			],
		},
		{
			name: '硅胶钥匙扣零钱包',
			desc: '伸缩扣设计，防丢拉链头，宿舍门禁卡收纳',
			brand: { name: '防丢扣' },
			specs: [
				{
					name: '长度',
					values: [{ name: '短款(30cm)' }, { name: '长款(60cm)' }],
				},
				{ name: '颜色', values: [{ name: '黑色' }, { name: '银色' }] },
			],
			skus: [
				{
					id: 'sku_life_35_1',
					specs: [
						{ name: '长度', valueName: '短款(30cm)' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 150,
				},
				{
					id: 'sku_life_35_2',
					specs: [
						{ name: '长度', valueName: '短款(30cm)' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 140,
				},
				{
					id: 'sku_life_35_3',
					specs: [
						{ name: '长度', valueName: '长款(60cm)' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 120,
				},
				{
					id: 'sku_life_35_4',
					specs: [
						{ name: '长度', valueName: '长款(60cm)' },
						{ name: '颜色', valueName: '银色' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 110,
				},
			],
		},
		{
			name: '一次性长柄雨衣',
			desc: 'EVA加厚材质，长袖长款不湿身，雨天骑行',
			brand: { name: '雨衣王' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '单人款' }, { name: '双人款' }],
				},
				{ name: '颜色', values: [{ name: '透明' }, { name: '蓝色' }] },
			],
			skus: [
				{
					id: 'sku_life_36_1',
					specs: [
						{ name: '尺寸', valueName: '单人款' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_life_36_2',
					specs: [
						{ name: '尺寸', valueName: '单人款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 95,
				},
				{
					id: 'sku_life_36_3',
					specs: [
						{ name: '尺寸', valueName: '双人款' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 80,
				},
				{
					id: 'sku_life_36_4',
					specs: [
						{ name: '尺寸', valueName: '双人款' },
						{ name: '颜色', valueName: '蓝色' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 75,
				},
			],
		},
		{
			name: '手机防水袋触屏',
			desc: 'IPX8级防水，可触屏拍照，漂流游泳必备',
			brand: { name: '防水袋' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '常规款(6.5寸)' },
						{ name: '大号(7.5寸)' },
					],
				},
				{ name: '颜色', values: [{ name: '透明' }, { name: '黑色' }] },
			],
			skus: [
				{
					id: 'sku_life_37_1',
					specs: [
						{ name: '尺寸', valueName: '常规款(6.5寸)' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 120,
				},
				{
					id: 'sku_life_37_2',
					specs: [
						{ name: '尺寸', valueName: '常规款(6.5寸)' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 110,
				},
				{
					id: 'sku_life_37_3',
					specs: [
						{ name: '尺寸', valueName: '大号(7.5寸)' },
						{ name: '颜色', valueName: '透明' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_life_37_4',
					specs: [
						{ name: '尺寸', valueName: '大号(7.5寸)' },
						{ name: '颜色', valueName: '黑色' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 90,
				},
			],
		},
		{
			name: '便携保温便当袋',
			desc: '铝箔内胆保温保冷，提手设计，带饭通勤',
			brand: { name: '便当袋' },
			specs: [
				{ name: '容量', values: [{ name: '单层' }, { name: '双层' }] },
				{ name: '颜色', values: [{ name: '灰色' }, { name: '粉色' }] },
			],
			skus: [
				{
					id: 'sku_life_38_1',
					specs: [
						{ name: '容量', valueName: '单层' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 85,
				},
				{
					id: 'sku_life_38_2',
					specs: [
						{ name: '容量', valueName: '单层' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
				{
					id: 'sku_life_38_3',
					specs: [
						{ name: '容量', valueName: '双层' },
						{ name: '颜色', valueName: '灰色' },
					],
					price: 28.9,
					oldPrice: 48.0,
					inventory: 70,
				},
				{
					id: 'sku_life_38_4',
					specs: [
						{ name: '容量', valueName: '双层' },
						{ name: '颜色', valueName: '粉色' },
					],
					price: 28.9,
					oldPrice: 48.0,
					inventory: 65,
				},
			],
		},
		{
			name: '冰箱冰袋保鲜 Repeat',
			desc: '生物冰袋蓄冷保冷，冷藏运输，医疗降温',
			brand: { name: '冰袋厂' },
			specs: [
				{ name: '规格', values: [{ name: '100g' }, { name: '250g' }] },
				{
					name: '数量',
					values: [{ name: '6个装' }, { name: '12个装' }],
				},
			],
			skus: [
				{
					id: 'sku_life_39_1',
					specs: [
						{ name: '规格', valueName: '100g' },
						{ name: '数量', valueName: '6个装' },
					],
					price: 9.9,
					oldPrice: 18.0,
					inventory: 110,
				},
				{
					id: 'sku_life_39_2',
					specs: [
						{ name: '规格', valueName: '100g' },
						{ name: '数量', valueName: '12个装' },
					],
					price: 15.9,
					oldPrice: 28.0,
					inventory: 90,
				},
				{
					id: 'sku_life_39_3',
					specs: [
						{ name: '规格', valueName: '250g' },
						{ name: '数量', valueName: '6个装' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 100,
				},
				{
					id: 'sku_life_39_4',
					specs: [
						{ name: '规格', valueName: '250g' },
						{ name: '数量', valueName: '12个装' },
					],
					price: 19.9,
					oldPrice: 35.0,
					inventory: 80,
				},
			],
		},
		{
			name: '一次性PE透明手套',
			desc: '食品级材质，左右手通用，吃小龙虾打扫卫生',
			brand: { name: '手套家' },
			specs: [
				{
					name: '克重',
					values: [
						{ name: '薄款(0.03mm)' },
						{ name: '加厚(0.05mm)' },
					],
				},
				{
					name: '数量',
					values: [{ name: '100只' }, { name: '300只' }],
				},
			],
			skus: [
				{
					id: 'sku_life_40_1',
					specs: [
						{ name: '克重', valueName: '薄款(0.03mm)' },
						{ name: '数量', valueName: '100只' },
					],
					price: 5.9,
					oldPrice: 10.0,
					inventory: 150,
				},
				{
					id: 'sku_life_40_2',
					specs: [
						{ name: '克重', valueName: '薄款(0.03mm)' },
						{ name: '数量', valueName: '300只' },
					],
					price: 12.9,
					oldPrice: 22.0,
					inventory: 120,
				},
				{
					id: 'sku_life_40_3',
					specs: [
						{ name: '克重', valueName: '加厚(0.05mm)' },
						{ name: '数量', valueName: '100只' },
					],
					price: 8.9,
					oldPrice: 15.0,
					inventory: 130,
				},
				{
					id: 'sku_life_40_4',
					specs: [
						{ name: '克重', valueName: '加厚(0.05mm)' },
						{ name: '数量', valueName: '300只' },
					],
					price: 18.9,
					oldPrice: 32.0,
					inventory: 100,
				},
			],
		},
	],
};
