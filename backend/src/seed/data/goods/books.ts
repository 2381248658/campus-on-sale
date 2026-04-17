import type { GoodsDataMap } from '../../types.js';

export const booksGoods: GoodsDataMap = {
	专业课教材: [
		{
			name: 'C程序设计现代方法(第2版)',
			desc: '计算机专业核心教材，C语言入门经典，代码示例丰富',
			brand: { name: '人民邮电出版社' },
			specs: [
				{
					name: '版本',
					values: [{ name: '平装版' }, { name: '精装版' }],
				},
				{
					name: '新旧',
					values: [{ name: '全新' }, { name: '9成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_major_1_1',
					specs: [
						{ name: '版本', valueName: '平装版' },
						{ name: '新旧', valueName: '全新' },
					],
					price: 45.9,
					oldPrice: 69.0,
					inventory: 30,
				},
				{
					id: 'sku_book_major_1_2',
					specs: [
						{ name: '版本', valueName: '平装版' },
						{ name: '新旧', valueName: '9成新' },
					],
					price: 28.9,
					oldPrice: 45.0,
					inventory: 15,
				},
				{
					id: 'sku_book_major_1_3',
					specs: [
						{ name: '版本', valueName: '精装版' },
						{ name: '新旧', valueName: '全新' },
					],
					price: 59.9,
					oldPrice: 89.0,
					inventory: 20,
				},
				{
					id: 'sku_book_major_1_4',
					specs: [
						{ name: '版本', valueName: '精装版' },
						{ name: '新旧', valueName: '9成新' },
					],
					price: 35.9,
					oldPrice: 55.0,
					inventory: 10,
				},
			],
		},
		{
			name: '数据结构与算法分析(C语言描述)',
			desc: '严蔚敏经典教材，考研必备，算法详解透彻',
			brand: { name: '清华大学出版社' },
			specs: [
				{
					name: '版本',
					values: [{ name: '第3版' }, { name: '第2版' }],
				},
				{
					name: '配套',
					values: [{ name: '教材+习题解析' }, { name: '仅教材' }],
				},
			],
			skus: [
				{
					id: 'sku_book_major_2_1',
					specs: [
						{ name: '版本', valueName: '第3版' },
						{ name: '配套', valueName: '教材+习题解析' },
					],
					price: 52.9,
					oldPrice: 79.0,
					inventory: 25,
				},
				{
					id: 'sku_book_major_2_2',
					specs: [
						{ name: '版本', valueName: '第3版' },
						{ name: '配套', valueName: '仅教材' },
					],
					price: 39.9,
					oldPrice: 59.0,
					inventory: 40,
				},
				{
					id: 'sku_book_major_2_3',
					specs: [
						{ name: '版本', valueName: '第2版' },
						{ name: '配套', valueName: '仅教材' },
					],
					price: 29.9,
					oldPrice: 45.0,
					inventory: 15,
				},
			],
		},
		{
			name: '操作系统概念(恐龙书)',
			desc: 'Silberschatz经典著作，OS原理权威教材， Abraham Silberschatz著',
			brand: { name: '高等教育出版社' },
			specs: [
				{
					name: '版本',
					values: [{ name: '第9版' }, { name: '第8版' }],
				},
				{
					name: '语言',
					values: [{ name: '中文版' }, { name: '英文影印版' }],
				},
			],
			skus: [
				{
					id: 'sku_book_major_3_1',
					specs: [
						{ name: '版本', valueName: '第9版' },
						{ name: '语言', valueName: '中文版' },
					],
					price: 69.9,
					oldPrice: 99.0,
					inventory: 20,
				},
				{
					id: 'sku_book_major_3_2',
					specs: [
						{ name: '版本', valueName: '第9版' },
						{ name: '语言', valueName: '英文影印版' },
					],
					price: 59.9,
					oldPrice: 89.0,
					inventory: 15,
				},
				{
					id: 'sku_book_major_3_3',
					specs: [
						{ name: '版本', valueName: '第8版' },
						{ name: '语言', valueName: '中文版' },
					],
					price: 45.9,
					oldPrice: 69.0,
					inventory: 10,
				},
			],
		},
		{
			name: '计算机网络(谢希仁第8版)',
			desc: '国内计算机网络权威教材，考研408指定参考书',
			brand: { name: '电子工业出版社' },
			specs: [
				{
					name: '规格',
					values: [{ name: '教材' }, { name: '教材+习题册' }],
				},
				{
					name: '新旧',
					values: [{ name: '全新' }, { name: '二手有笔记' }],
				},
			],
			skus: [
				{
					id: 'sku_book_major_4_1',
					specs: [
						{ name: '规格', valueName: '教材' },
						{ name: '新旧', valueName: '全新' },
					],
					price: 42.9,
					oldPrice: 65.0,
					inventory: 35,
				},
				{
					id: 'sku_book_major_4_2',
					specs: [
						{ name: '规格', valueName: '教材' },
						{ name: '新旧', valueName: '二手有笔记' },
					],
					price: 22.9,
					oldPrice: 35.0,
					inventory: 20,
				},
				{
					id: 'sku_book_major_4_3',
					specs: [
						{ name: '规格', valueName: '教材+习题册' },
						{ name: '新旧', valueName: '全新' },
					],
					price: 55.9,
					oldPrice: 85.0,
					inventory: 25,
				},
			],
		},
		{
			name: '计算机组成原理(唐朔飞)',
			desc: '硬件基础经典教材，配合MOOC学习效果更佳',
			brand: { name: '高等教育出版社' },
			specs: [
				{
					name: '版本',
					values: [{ name: '第3版' }, { name: '第2版' }],
				},
				{
					name: '配套',
					values: [{ name: '单本教材' }, { name: '教材+学习指导' }],
				},
			],
			skus: [
				{
					id: 'sku_book_major_5_1',
					specs: [
						{ name: '版本', valueName: '第3版' },
						{ name: '配套', valueName: '单本教材' },
					],
					price: 46.9,
					oldPrice: 69.0,
					inventory: 30,
				},
				{
					id: 'sku_book_major_5_2',
					specs: [
						{ name: '版本', valueName: '第3版' },
						{ name: '配套', valueName: '教材+学习指导' },
					],
					price: 62.9,
					oldPrice: 95.0,
					inventory: 20,
				},
				{
					id: 'sku_book_major_5_3',
					specs: [
						{ name: '版本', valueName: '第2版' },
						{ name: '配套', valueName: '单本教材' },
					],
					price: 32.9,
					oldPrice: 49.0,
					inventory: 12,
				},
			],
		},
		{
			name: '软件工程导论(张海藩)',
			desc: '软件工程经典教材，涵盖软件开发全生命周期',
			brand: { name: '清华大学出版社' },
			specs: [
				{
					name: '版本',
					values: [{ name: '第6版' }, { name: '第5版' }],
				},
			],
			skus: [
				{
					id: 'sku_book_major_6_1',
					specs: [{ name: '版本', valueName: '第6版' }],
					price: 39.9,
					oldPrice: 59.0,
					inventory: 28,
				},
				{
					id: 'sku_book_major_6_2',
					specs: [{ name: '版本', valueName: '第5版' }],
					price: 25.9,
					oldPrice: 39.0,
					inventory: 8,
				},
			],
		},
		{
			name: '数据库系统概论(王珊)',
			desc: '数据库原理经典教材，SQL与关系理论详解',
			brand: { name: '高等教育出版社' },
			specs: [
				{
					name: '版本',
					values: [{ name: '第5版' }, { name: '第4版' }],
				},
				{
					name: '套装',
					values: [{ name: '单本' }, { name: '教材+习题解析' }],
				},
			],
			skus: [
				{
					id: 'sku_book_major_7_1',
					specs: [
						{ name: '版本', valueName: '第5版' },
						{ name: '套装', valueName: '单本' },
					],
					price: 43.9,
					oldPrice: 65.0,
					inventory: 32,
				},
				{
					id: 'sku_book_major_7_2',
					specs: [
						{ name: '版本', valueName: '第5版' },
						{ name: '套装', valueName: '教材+习题解析' },
					],
					price: 58.9,
					oldPrice: 88.0,
					inventory: 18,
				},
				{
					id: 'sku_book_major_7_3',
					specs: [
						{ name: '版本', valueName: '第4版' },
						{ name: '套装', valueName: '单本' },
					],
					price: 29.9,
					oldPrice: 45.0,
					inventory: 10,
				},
			],
		},
		{
			name: 'Java核心技术卷I',
			desc: 'Java学习必读，Cay Horstmann著，覆盖Java SE 8-11',
			brand: { name: '机械工业出版社' },
			specs: [
				{
					name: '版本',
					values: [{ name: '第11版' }, { name: '第10版' }],
				},
				{
					name: '套装',
					values: [{ name: '卷I' }, { name: '卷I+卷II套装' }],
				},
			],
			skus: [
				{
					id: 'sku_book_major_8_1',
					specs: [
						{ name: '版本', valueName: '第11版' },
						{ name: '套装', valueName: '卷I' },
					],
					price: 79.9,
					oldPrice: 119.0,
					inventory: 25,
				},
				{
					id: 'sku_book_major_8_2',
					specs: [
						{ name: '版本', valueName: '第11版' },
						{ name: '套装', valueName: '卷I+卷II套装' },
					],
					price: 149.9,
					oldPrice: 229.0,
					inventory: 15,
				},
				{
					id: 'sku_book_major_8_3',
					specs: [
						{ name: '版本', valueName: '第10版' },
						{ name: '套装', valueName: '卷I' },
					],
					price: 59.9,
					oldPrice: 89.0,
					inventory: 8,
				},
			],
		},
		{
			name: '深入理解计算机系统(CSAPP)',
			desc: '程序员必读经典，CMU计算机系统导论教材',
			brand: { name: '机械工业出版社' },
			specs: [
				{
					name: '版本',
					values: [{ name: '原书第3版' }, { name: '原书第2版' }],
				},
				{
					name: '语言',
					values: [{ name: '中文版' }, { name: '英文版' }],
				},
			],
			skus: [
				{
					id: 'sku_book_major_9_1',
					specs: [
						{ name: '版本', valueName: '原书第3版' },
						{ name: '语言', valueName: '中文版' },
					],
					price: 109.9,
					oldPrice: 169.0,
					inventory: 20,
				},
				{
					id: 'sku_book_major_9_2',
					specs: [
						{ name: '版本', valueName: '原书第3版' },
						{ name: '语言', valueName: '英文版' },
					],
					price: 129.9,
					oldPrice: 199.0,
					inventory: 12,
				},
				{
					id: 'sku_book_major_9_3',
					specs: [
						{ name: '版本', valueName: '原书第2版' },
						{ name: '语言', valueName: '中文版' },
					],
					price: 89.9,
					oldPrice: 139.0,
					inventory: 5,
				},
			],
		},
	],
	公共课教材: [
		{
			name: '高等数学（第七版）上册',
			desc: '同济大学数学系编，大一必修，有少量课堂笔记',
			brand: { name: '高等教育出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '八成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_pub_1_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 15.0,
					oldPrice: 46.0,
					inventory: 8,
				},
				{
					id: 'sku_book_pub_1_2',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 10.0,
					oldPrice: 46.0,
					inventory: 5,
				},
			],
		},
		{
			name: '高等数学（第七版）下册',
			desc: '配套上册，部分课后习题有铅笔解答痕迹',
			brand: { name: '高等教育出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '八成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_pub_2_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 15.0,
					oldPrice: 46.0,
					inventory: 6,
				},
				{
					id: 'sku_book_pub_2_2',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 10.0,
					oldPrice: 46.0,
					inventory: 4,
				},
			],
		},
		{
			name: '线性代数（第六版）',
			desc: '同济版经典教材，矩阵章节有高亮笔记',
			brand: { name: '高等教育出版社' },
			specs: [
				{
					name: '成色',
					values: [
						{ name: '全新未拆' },
						{ name: '九成新' },
						{ name: '八成新' },
					],
				},
			],
			skus: [
				{
					id: 'sku_book_pub_3_1',
					specs: [{ name: '成色', valueName: '全新未拆' }],
					price: 28.0,
					oldPrice: 35.0,
					inventory: 3,
				},
				{
					id: 'sku_book_pub_3_2',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 12.0,
					oldPrice: 35.0,
					inventory: 10,
				},
				{
					id: 'sku_book_pub_3_3',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 8.0,
					oldPrice: 35.0,
					inventory: 6,
				},
			],
		},
		{
			name: '概率论与数理统计（第五版）',
			desc: '浙大版，内夹往年期末考试真题小抄',
			brand: { name: '高等教育出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '八成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_pub_4_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 13.0,
					oldPrice: 38.0,
					inventory: 12,
				},
				{
					id: 'sku_book_pub_4_2',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 8.0,
					oldPrice: 38.0,
					inventory: 7,
				},
			],
		},
		{
			name: '大学物理学（第五版）',
			desc: '力学、热学部分，文科物理必修，无笔记',
			brand: { name: '高等教育出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '全新未拆' }, { name: '九成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_pub_5_1',
					specs: [{ name: '成色', valueName: '全新未拆' }],
					price: 30.0,
					oldPrice: 45.0,
					inventory: 5,
				},
				{
					id: 'sku_book_pub_5_2',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 15.0,
					oldPrice: 45.0,
					inventory: 8,
				},
			],
		},
		{
			name: '大学英语综合教程1（第三版）',
			desc: '大一英语精读教材，附送全新练习册',
			brand: { name: '上海外语教育出版社' },
			specs: [
				{
					name: '规格',
					values: [
						{ name: '仅学生用书' },
						{ name: '学生用书+练习册' },
					],
				},
			],
			skus: [
				{
					id: 'sku_book_pub_6_1',
					specs: [{ name: '规格', valueName: '仅学生用书' }],
					price: 15.0,
					oldPrice: 52.0,
					inventory: 10,
				},
				{
					id: 'sku_book_pub_6_2',
					specs: [{ name: '规格', valueName: '学生用书+练习册' }],
					price: 20.0,
					oldPrice: 68.0,
					inventory: 6,
				},
			],
		},
		{
			name: '马克思主义基本原理概论（2023版）',
			desc: '思政必修课教材，重点段落已用彩笔标注',
			brand: { name: '高等教育出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '八成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_pub_7_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 10.0,
					oldPrice: 28.0,
					inventory: 15,
				},
				{
					id: 'sku_book_pub_7_2',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 5.0,
					oldPrice: 28.0,
					inventory: 10,
				},
			],
		},
		{
			name: '中国近现代史纲要（2023版）',
			desc: '历史脉络清晰，有时间轴手写笔记',
			brand: { name: '高等教育出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '全新' }, { name: '九成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_pub_8_1',
					specs: [{ name: '成色', valueName: '全新' }],
					price: 22.0,
					oldPrice: 30.0,
					inventory: 8,
				},
				{
					id: 'sku_book_pub_8_2',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 12.0,
					oldPrice: 30.0,
					inventory: 12,
				},
			],
		},
		{
			name: '思想道德与法治（2023版）',
			desc: '大一新生思政课，书角有轻微磨损',
			brand: { name: '高等教育出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '八成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_pub_9_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 11.0,
					oldPrice: 29.0,
					inventory: 20,
				},
				{
					id: 'sku_book_pub_9_2',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 6.0,
					oldPrice: 29.0,
					inventory: 15,
				},
			],
		},
	],
	辅导资料: [
		{
			name: '张宇考研数学基础30讲',
			desc: '基础阶段复习神器，涵盖高数线代概率，有视频课码',
			brand: { name: '北京理工大学出版社' },
			specs: [
				{
					name: '科目',
					values: [{ name: '数学一/二' }, { name: '数学三' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tut_1_1',
					specs: [{ name: '科目', valueName: '数学一/二' }],
					price: 35.0,
					oldPrice: 68.0,
					inventory: 15,
				},
				{
					id: 'sku_book_tut_1_2',
					specs: [{ name: '科目', valueName: '数学三' }],
					price: 35.0,
					oldPrice: 68.0,
					inventory: 10,
				},
			],
		},
		{
			name: '李永乐考研数学复习全书',
			desc: '知识体系全面，例题经典，适合强化阶段',
			brand: { name: '国家行政学院出版社' },
			specs: [
				{
					name: '版本',
					values: [{ name: '2024版' }, { name: '2023版' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tut_2_1',
					specs: [{ name: '版本', valueName: '2024版' }],
					price: 45.0,
					oldPrice: 89.0,
					inventory: 20,
				},
				{
					id: 'sku_book_tut_2_2',
					specs: [{ name: '版本', valueName: '2023版' }],
					price: 20.0,
					oldPrice: 75.0,
					inventory: 8,
				},
			],
		},
		{
			name: '王树森考研数学真题大全解',
			desc: '按考点分类编排，解析详细，强化刷题必备',
			brand: { name: '北京理工大学出版社' },
			specs: [
				{
					name: '科目',
					values: [{ name: '数学一' }, { name: '数学二/三' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tut_3_1',
					specs: [{ name: '科目', valueName: '数学一' }],
					price: 38.0,
					oldPrice: 78.0,
					inventory: 18,
				},
				{
					id: 'sku_book_tut_3_2',
					specs: [{ name: '科目', valueName: '数学二/三' }],
					price: 35.0,
					oldPrice: 75.0,
					inventory: 15,
				},
			],
		},
		{
			name: '张剑黄皮书英语一历年真题',
			desc: '考研英语一必备，解析透彻，赠送答题卡',
			brand: { name: '世界图书出版公司' },
			specs: [
				{
					name: '规格',
					values: [{ name: '试卷版' }, { name: '试卷+解析版' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tut_4_1',
					specs: [{ name: '规格', valueName: '试卷版' }],
					price: 25.0,
					oldPrice: 48.0,
					inventory: 25,
				},
				{
					id: 'sku_book_tut_4_2',
					specs: [{ name: '规格', valueName: '试卷+解析版' }],
					price: 42.0,
					oldPrice: 85.0,
					inventory: 20,
				},
			],
		},
		{
			name: '肖秀荣1000题思想政治理论',
			desc: '选择题专项突破，覆盖所有大纲考点',
			brand: { name: '北京航空航天大学出版社' },
			specs: [
				{
					name: '版本',
					values: [{ name: '2024版' }, { name: '2023版' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tut_5_1',
					specs: [{ name: '版本', valueName: '2024版' }],
					price: 35.0,
					oldPrice: 62.0,
					inventory: 30,
				},
				{
					id: 'sku_book_tut_5_2',
					specs: [{ name: '版本', valueName: '2023版' }],
					price: 15.0,
					oldPrice: 55.0,
					inventory: 12,
				},
			],
		},
		{
			name: '408计算机学科专业基础核心笔记',
			desc: '四科合一，知识点高度浓缩，冲刺背诵神器',
			brand: { name: '天勤计算机考研' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '八成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tut_6_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 55.0,
					oldPrice: 108.0,
					inventory: 12,
				},
				{
					id: 'sku_book_tut_6_2',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 35.0,
					oldPrice: 108.0,
					inventory: 8,
				},
			],
		},
		{
			name: '王道考研408历年真题解析',
			desc: '王道出品必属精品，解析详细，代码可扫码运行',
			brand: { name: '电子工业出版社' },
			specs: [
				{
					name: '年份',
					values: [{ name: '近10年' }, { name: '近15年' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tut_7_1',
					specs: [{ name: '年份', valueName: '近10年' }],
					price: 45.0,
					oldPrice: 89.0,
					inventory: 22,
				},
				{
					id: 'sku_book_tut_7_2',
					specs: [{ name: '年份', valueName: '近15年' }],
					price: 60.0,
					oldPrice: 119.0,
					inventory: 15,
				},
			],
		},
		{
			name: '六级英语备考指南（星火英语）',
			desc: '词汇语法翻译听力全涵盖，过级无忧',
			brand: { name: '上海交通大学出版社' },
			specs: [
				{
					name: '配套',
					values: [{ name: '仅真题' }, { name: '真题+词汇手册' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tut_8_1',
					specs: [{ name: '配套', valueName: '仅真题' }],
					price: 20.0,
					oldPrice: 45.0,
					inventory: 25,
				},
				{
					id: 'sku_book_tut_8_2',
					specs: [{ name: '配套', valueName: '真题+词汇手册' }],
					price: 30.0,
					oldPrice: 68.0,
					inventory: 18,
				},
			],
		},
		{
			name: '教师资格证综合素质教材（中公）',
			desc: '包含考点精讲与历年真题，笔试面试适用',
			brand: { name: '人民出版社' },
			specs: [
				{ name: '学段', values: [{ name: '小学' }, { name: '中学' }] },
			],
			skus: [
				{
					id: 'sku_book_tut_9_1',
					specs: [{ name: '学段', valueName: '小学' }],
					price: 25.0,
					oldPrice: 58.0,
					inventory: 20,
				},
				{
					id: 'sku_book_tut_9_2',
					specs: [{ name: '学段', valueName: '中学' }],
					price: 28.0,
					oldPrice: 62.0,
					inventory: 15,
				},
			],
		},
	],
	考试真题: [
		{
			name: '近十年高数期末考试真题汇总',
			desc: '本校历年期末卷整理，附标准答案，期末救命',
			brand: { name: '校内打印版' },
			specs: [
				{
					name: '学期',
					values: [{ name: '上学期' }, { name: '下学期' }],
				},
			],
			skus: [
				{
					id: 'sku_book_exam_1_1',
					specs: [{ name: '学期', valueName: '上学期' }],
					price: 10.0,
					oldPrice: 25.0,
					inventory: 50,
				},
				{
					id: 'sku_book_exam_1_2',
					specs: [{ name: '学期', valueName: '下学期' }],
					price: 10.0,
					oldPrice: 25.0,
					inventory: 45,
				},
			],
		},
		{
			name: 'C语言程序设计期末复习题库',
			desc: '指针、链表、文件操作专项训练，含易错题解析',
			brand: { name: '学霸笔记' },
			specs: [
				{
					name: '内容',
					values: [{ name: '仅题库' }, { name: '题库+模拟卷' }],
				},
			],
			skus: [
				{
					id: 'sku_book_exam_2_1',
					specs: [{ name: '内容', valueName: '仅题库' }],
					price: 12.0,
					oldPrice: 30.0,
					inventory: 35,
				},
				{
					id: 'sku_book_exam_2_2',
					specs: [{ name: '内容', valueName: '题库+模拟卷' }],
					price: 18.0,
					oldPrice: 45.0,
					inventory: 25,
				},
			],
		},
		{
			name: '数据结构考研名校真题集',
			desc: '收录清北复交等985高校真题，含详细代码解答',
			brand: { name: '王道论坛' },
			specs: [
				{
					name: '年份',
					values: [{ name: '近5年' }, { name: '近10年' }],
				},
			],
			skus: [
				{
					id: 'sku_book_exam_3_1',
					specs: [{ name: '年份', valueName: '近5年' }],
					price: 25.0,
					oldPrice: 55.0,
					inventory: 20,
				},
				{
					id: 'sku_book_exam_3_2',
					specs: [{ name: '年份', valueName: '近10年' }],
					price: 38.0,
					oldPrice: 80.0,
					inventory: 15,
				},
			],
		},
		{
			name: '计算机网络408历年真题及解析',
			desc: '按年份编排，附带详细解题步骤和思维导图',
			brand: { name: '天勤考研' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '八成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_exam_4_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 22.0,
					oldPrice: 45.0,
					inventory: 18,
				},
				{
					id: 'sku_book_exam_4_2',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 15.0,
					oldPrice: 45.0,
					inventory: 10,
				},
			],
		},
		{
			name: '线性代数期末突击80题',
			desc: '期末考前刷题专用，覆盖行列式、特征值等核心考点',
			brand: { name: '打印装订版' },
			specs: [
				{
					name: '配套',
					values: [{ name: '仅题目' }, { name: '题目+详细解析' }],
				},
			],
			skus: [
				{
					id: 'sku_book_exam_5_1',
					specs: [{ name: '配套', valueName: '仅题目' }],
					price: 5.0,
					oldPrice: 15.0,
					inventory: 60,
				},
				{
					id: 'sku_book_exam_5_2',
					specs: [{ name: '配套', valueName: '题目+详细解析' }],
					price: 8.0,
					oldPrice: 20.0,
					inventory: 45,
				},
			],
		},
		{
			name: '概率论期末必刷题库',
			desc: '随机变量与分布函数重点突破，附带公式表',
			brand: { name: '学霸整理' },
			specs: [
				{
					name: '版本',
					values: [{ name: 'A4打印版' }, { name: 'B5胶装版' }],
				},
			],
			skus: [
				{
					id: 'sku_book_exam_6_1',
					specs: [{ name: '版本', valueName: 'A4打印版' }],
					price: 6.0,
					oldPrice: 15.0,
					inventory: 55,
				},
				{
					id: 'sku_book_exam_6_2',
					specs: [{ name: '版本', valueName: 'B5胶装版' }],
					price: 10.0,
					oldPrice: 20.0,
					inventory: 40,
				},
			],
		},
		{
			name: '软件工程期末复习提纲及题库',
			desc: 'UML图、测试用例设计专项，重点突出',
			brand: { name: '班级共享版' },
			specs: [
				{
					name: '内容',
					values: [{ name: '提纲+题库' }, { name: '仅题库' }],
				},
			],
			skus: [
				{
					id: 'sku_book_exam_7_1',
					specs: [{ name: '内容', valueName: '提纲+题库' }],
					price: 12.0,
					oldPrice: 25.0,
					inventory: 30,
				},
				{
					id: 'sku_book_exam_7_2',
					specs: [{ name: '内容', valueName: '仅题库' }],
					price: 8.0,
					oldPrice: 18.0,
					inventory: 25,
				},
			],
		},
		{
			name: '六级英语真题试卷精编',
			desc: '精编近10年听力、阅读、翻译真题，附听力音频链接',
			brand: { name: '新东方' },
			specs: [
				{
					name: '规格',
					values: [{ name: '试卷装' }, { name: '试卷+解析装' }],
				},
			],
			skus: [
				{
					id: 'sku_book_exam_8_1',
					specs: [{ name: '规格', valueName: '试卷装' }],
					price: 15.0,
					oldPrice: 35.0,
					inventory: 40,
				},
				{
					id: 'sku_book_exam_8_2',
					specs: [{ name: '规格', valueName: '试卷+解析装' }],
					price: 25.0,
					oldPrice: 58.0,
					inventory: 30,
				},
			],
		},
		{
			name: '考研政治近10年真题卷',
			desc: '按照套卷形式排版，模拟真实考场环境',
			brand: { name: '肖秀荣团队' },
			specs: [
				{
					name: '版本',
					values: [{ name: '试卷版' }, { name: '试卷+答题卡' }],
				},
			],
			skus: [
				{
					id: 'sku_book_exam_9_1',
					specs: [{ name: '版本', valueName: '试卷版' }],
					price: 15.0,
					oldPrice: 32.0,
					inventory: 35,
				},
				{
					id: 'sku_book_exam_9_2',
					specs: [{ name: '版本', valueName: '试卷+答题卡' }],
					price: 18.0,
					oldPrice: 38.0,
					inventory: 28,
				},
			],
		},
	],
	参考书籍: [
		{
			name: '算法导论（原书第4版）',
			desc: '算法神书CLRS，计算机科学必读，全译本',
			brand: { name: '机械工业出版社' },
			specs: [
				{ name: '装帧', values: [{ name: '平装' }, { name: '精装' }] },
			],
			skus: [
				{
					id: 'sku_book_ref_1_1',
					specs: [{ name: '装帧', valueName: '平装' }],
					price: 68.0,
					oldPrice: 128.0,
					inventory: 12,
				},
				{
					id: 'sku_book_ref_1_2',
					specs: [{ name: '装帧', valueName: '精装' }],
					price: 89.0,
					oldPrice: 168.0,
					inventory: 8,
				},
			],
		},
		{
			name: '代码大全（第2版）',
			desc: '软件构建实践指南，程序员进阶必读',
			brand: { name: '电子工业出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '八成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ref_2_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 65.0,
					oldPrice: 128.0,
					inventory: 10,
				},
				{
					id: 'sku_book_ref_2_2',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 45.0,
					oldPrice: 128.0,
					inventory: 6,
				},
			],
		},
		{
			name: '深入浅出设计模式',
			desc: '以幽默风趣的语言讲解23种设计模式，代码示例丰富',
			brand: { name: '人民邮电出版社' },
			specs: [
				{
					name: '语言',
					values: [{ name: 'Java版' }, { name: 'C#/C++版' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ref_3_1',
					specs: [{ name: '语言', valueName: 'Java版' }],
					price: 45.0,
					oldPrice: 89.0,
					inventory: 15,
				},
				{
					id: 'sku_book_ref_3_2',
					specs: [{ name: '语言', valueName: 'C#/C++版' }],
					price: 40.0,
					oldPrice: 79.0,
					inventory: 8,
				},
			],
		},
		{
			name: '黑客与画家',
			desc: 'Paul Graham著，探讨创业与技术趋势，启发性强',
			brand: { name: '人民邮电出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '全新' }, { name: '九成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ref_4_1',
					specs: [{ name: '成色', valueName: '全新' }],
					price: 35.0,
					oldPrice: 59.0,
					inventory: 10,
				},
				{
					id: 'sku_book_ref_4_2',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 18.0,
					oldPrice: 59.0,
					inventory: 5,
				},
			],
		},
		{
			name: '人月神话',
			desc: '软件工程管理圣经，经典著作，揭示项目困境',
			brand: { name: '清华大学出版社' },
			specs: [
				{
					name: '版本',
					values: [{ name: '精装版' }, { name: '平装版' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ref_5_1',
					specs: [{ name: '版本', valueName: '精装版' }],
					price: 48.0,
					oldPrice: 78.0,
					inventory: 6,
				},
				{
					id: 'sku_book_ref_5_2',
					specs: [{ name: '版本', valueName: '平装版' }],
					price: 28.0,
					oldPrice: 55.0,
					inventory: 9,
				},
			],
		},
		{
			name: '重构：改善既有代码的设计',
			desc: 'Martin Fowler名著，教你写出干净的代码',
			brand: { name: '人民邮电出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '八成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ref_6_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 45.0,
					oldPrice: 99.0,
					inventory: 8,
				},
				{
					id: 'sku_book_ref_6_2',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 30.0,
					oldPrice: 99.0,
					inventory: 5,
				},
			],
		},
		{
			name: '程序员修炼之道',
			desc: '从新手到专家的进阶指南，涵盖技术与人生态度',
			brand: { name: '电子工业出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '八成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ref_7_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 38.0,
					oldPrice: 69.0,
					inventory: 12,
				},
				{
					id: 'sku_book_ref_7_2',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 22.0,
					oldPrice: 69.0,
					inventory: 7,
				},
			],
		},
		{
			name: 'TCP/IP详解 卷1：协议',
			desc: '网络底层原理必读，深入理解网络协议栈',
			brand: { name: '机械工业出版社' },
			specs: [
				{
					name: '版本',
					values: [{ name: '中文版' }, { name: '英文影印版' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ref_8_1',
					specs: [{ name: '版本', valueName: '中文版' }],
					price: 55.0,
					oldPrice: 89.0,
					inventory: 9,
				},
				{
					id: 'sku_book_ref_8_2',
					specs: [{ name: '版本', valueName: '英文影印版' }],
					price: 65.0,
					oldPrice: 109.0,
					inventory: 6,
				},
			],
		},
		{
			name: '未来简史',
			desc: '尤瓦尔·赫拉利畅销巨作，拓宽认知边界',
			brand: { name: '中信出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '八成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ref_9_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 25.0,
					oldPrice: 68.0,
					inventory: 15,
				},
				{
					id: 'sku_book_ref_9_2',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 15.0,
					oldPrice: 68.0,
					inventory: 10,
				},
			],
		},
	],
	外文原版: [
		{
			name: 'Introduction to Algorithms (CLRS)',
			desc: 'MIT经典教材原版，全英文，适合CS深造',
			brand: { name: 'MIT Press' },
			specs: [
				{
					name: 'Edition',
					values: [{ name: '4th Edition' }, { name: '3rd Edition' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ori_1_1',
					specs: [{ name: 'Edition', valueName: '4th Edition' }],
					price: 150.0,
					oldPrice: 498.0,
					inventory: 5,
				},
				{
					id: 'sku_book_ori_1_2',
					specs: [{ name: 'Edition', valueName: '3rd Edition' }],
					price: 80.0,
					oldPrice: 380.0,
					inventory: 3,
				},
			],
		},
		{
			name: 'Computer Networking: A Top-Down Approach',
			desc: 'Kurose & Ross原版，自顶向下学习网络',
			brand: { name: 'Pearson' },
			specs: [
				{
					name: 'Edition',
					values: [{ name: '8th Edition' }, { name: '7th Edition' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ori_2_1',
					specs: [{ name: 'Edition', valueName: '8th Edition' }],
					price: 120.0,
					oldPrice: 450.0,
					inventory: 6,
				},
				{
					id: 'sku_book_ori_2_2',
					specs: [{ name: 'Edition', valueName: '7th Edition' }],
					price: 65.0,
					oldPrice: 380.0,
					inventory: 4,
				},
			],
		},
		{
			name: 'Operating System Concepts (Dinosaur Book)',
			desc: 'Silberschatz原版英文第10版，无删减内容',
			brand: { name: 'Wiley' },
			specs: [
				{
					name: 'Condition',
					values: [{ name: 'Brand New' }, { name: 'Like New' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ori_3_1',
					specs: [{ name: 'Condition', valueName: 'Brand New' }],
					price: 135.0,
					oldPrice: 510.0,
					inventory: 4,
				},
				{
					id: 'sku_book_ori_3_2',
					specs: [{ name: 'Condition', valueName: 'Like New' }],
					price: 80.0,
					oldPrice: 450.0,
					inventory: 3,
				},
			],
		},
		{
			name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
			desc: 'Robert C. Martin原著，代码整洁之道原版',
			brand: { name: 'Prentice Hall' },
			specs: [
				{
					name: 'Condition',
					values: [{ name: 'Like New' }, { name: 'Good' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ori_4_1',
					specs: [{ name: 'Condition', valueName: 'Like New' }],
					price: 65.0,
					oldPrice: 240.0,
					inventory: 8,
				},
				{
					id: 'sku_book_ori_4_2',
					specs: [{ name: 'Condition', valueName: 'Good' }],
					price: 45.0,
					oldPrice: 200.0,
					inventory: 5,
				},
			],
		},
		{
			name: 'Design Patterns: Elements of Reusable OOP Software',
			desc: 'GoF四人帮原著，面向对象设计模式圣经',
			brand: { name: 'Addison-Wesley' },
			specs: [
				{
					name: 'Condition',
					values: [{ name: 'Like New' }, { name: 'Acceptable' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ori_5_1',
					specs: [{ name: 'Condition', valueName: 'Like New' }],
					price: 75.0,
					oldPrice: 280.0,
					inventory: 6,
				},
				{
					id: 'sku_book_ori_5_2',
					specs: [{ name: 'Condition', valueName: 'Acceptable' }],
					price: 50.0,
					oldPrice: 250.0,
					inventory: 4,
				},
			],
		},
		{
			name: 'The Pragmatic Programmer',
			desc: '程序员务实之道20周年纪念版，实用主义编程',
			brand: { name: 'Addison-Wesley' },
			specs: [
				{
					name: 'Edition',
					values: [
						{ name: '20th Anniversary' },
						{ name: '1st Edition' },
					],
				},
			],
			skus: [
				{
					id: 'sku_book_ori_6_1',
					specs: [{ name: 'Edition', valueName: '20th Anniversary' }],
					price: 88.0,
					oldPrice: 320.0,
					inventory: 7,
				},
				{
					id: 'sku_book_ori_6_2',
					specs: [{ name: 'Edition', valueName: '1st Edition' }],
					price: 55.0,
					oldPrice: 250.0,
					inventory: 3,
				},
			],
		},
		{
			name: 'Structure and Interpretation of Computer Programs (SICP)',
			desc: 'MIT魔法书原版，LISP/Scheme编程精髓',
			brand: { name: 'MIT Press' },
			specs: [
				{
					name: 'Edition',
					values: [{ name: '2nd Edition' }, { name: '1st Edition' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ori_7_1',
					specs: [{ name: 'Edition', valueName: '2nd Edition' }],
					price: 95.0,
					oldPrice: 360.0,
					inventory: 5,
				},
				{
					id: 'sku_book_ori_7_2',
					specs: [{ name: 'Edition', valueName: '1st Edition' }],
					price: 60.0,
					oldPrice: 280.0,
					inventory: 2,
				},
			],
		},
		{
			name: 'Artificial Intelligence: A Modern Approach (AIMA)',
			desc: 'AI领域最权威教材，覆盖机器学习与深度学习',
			brand: { name: 'Pearson' },
			specs: [
				{
					name: 'Edition',
					values: [{ name: '4th Edition' }, { name: '3rd Edition' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ori_8_1',
					specs: [{ name: 'Edition', valueName: '4th Edition' }],
					price: 140.0,
					oldPrice: 520.0,
					inventory: 4,
				},
				{
					id: 'sku_book_ori_8_2',
					specs: [{ name: 'Edition', valueName: '3rd Edition' }],
					price: 85.0,
					oldPrice: 450.0,
					inventory: 3,
				},
			],
		},
		{
			name: 'Deep Learning (Ian Goodfellow)',
			desc: '花书原版，深度学习领域奠基之作',
			brand: { name: 'MIT Press' },
			specs: [
				{
					name: 'Condition',
					values: [{ name: 'Like New' }, { name: 'Good' }],
				},
			],
			skus: [
				{
					id: 'sku_book_ori_9_1',
					specs: [{ name: 'Condition', valueName: 'Like New' }],
					price: 120.0,
					oldPrice: 450.0,
					inventory: 6,
				},
				{
					id: 'sku_book_ori_9_2',
					specs: [{ name: 'Condition', valueName: 'Good' }],
					price: 75.0,
					oldPrice: 380.0,
					inventory: 4,
				},
			],
		},
	],
	工具书: [
		{
			name: '新华字典（第12版）',
			desc: '实用权威的现代汉语规范字典，学习必备',
			brand: { name: '商务印书馆' },
			specs: [
				{
					name: '装帧',
					values: [{ name: '双色本' }, { name: '单色本' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tool_1_1',
					specs: [{ name: '装帧', valueName: '双色本' }],
					price: 22.0,
					oldPrice: 39.9,
					inventory: 20,
				},
				{
					id: 'sku_book_tool_1_2',
					specs: [{ name: '装帧', valueName: '单色本' }],
					price: 18.0,
					oldPrice: 32.0,
					inventory: 15,
				},
			],
		},
		{
			name: '现代汉语词典（第7版）',
			desc: '国务院指示编写，现代汉语词汇权威宝典',
			brand: { name: '商务印书馆' },
			specs: [
				{ name: '装帧', values: [{ name: '精装' }, { name: '平装' }] },
			],
			skus: [
				{
					id: 'sku_book_tool_2_1',
					specs: [{ name: '装帧', valueName: '精装' }],
					price: 45.0,
					oldPrice: 85.0,
					inventory: 12,
				},
				{
					id: 'sku_book_tool_2_2',
					specs: [{ name: '装帧', valueName: '平装' }],
					price: 30.0,
					oldPrice: 65.0,
					inventory: 18,
				},
			],
		},
		{
			name: '牛津高阶英汉双解词典（第10版）',
			desc: '英语专业必备，释义精准，例句丰富',
			brand: { name: '商务印书馆' },
			specs: [
				{
					name: '规格',
					values: [{ name: '缩印版' }, { name: '大字本' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tool_3_1',
					specs: [{ name: '规格', valueName: '缩印版' }],
					price: 55.0,
					oldPrice: 118.0,
					inventory: 15,
				},
				{
					id: 'sku_book_tool_3_2',
					specs: [{ name: '规格', valueName: '大字本' }],
					price: 78.0,
					oldPrice: 168.0,
					inventory: 8,
				},
			],
		},
		{
			name: '朗文当代高级英语辞典',
			desc: '英语进阶与专八必备，纯正英式英语',
			brand: { name: '外语教学与研究出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '八成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tool_4_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 60.0,
					oldPrice: 138.0,
					inventory: 10,
				},
				{
					id: 'sku_book_tool_4_2',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 40.0,
					oldPrice: 138.0,
					inventory: 6,
				},
			],
		},
		{
			name: '古汉语常用字字典（第5版）',
			desc: '王力主编，古文阅读扫盲神器，中文系必备',
			brand: { name: '商务印书馆' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '全新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tool_5_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 15.0,
					oldPrice: 32.0,
					inventory: 12,
				},
				{
					id: 'sku_book_tool_5_2',
					specs: [{ name: '成色', valueName: '全新' }],
					price: 28.0,
					oldPrice: 32.0,
					inventory: 8,
				},
			],
		},
		{
			name: 'Python编程从入门到实践（第3版）',
			desc: '手把手教Python，零基础跨考自学指南',
			brand: { name: '中国电力出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '八成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tool_6_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 45.0,
					oldPrice: 89.0,
					inventory: 14,
				},
				{
					id: 'sku_book_tool_6_2',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 28.0,
					oldPrice: 89.0,
					inventory: 9,
				},
			],
		},
		{
			name: 'JavaScript高级程序设计（第4版）',
			desc: '红宝书，前端开发必备工具书，涵盖ES6+',
			brand: { name: '人民邮电出版社' },
			specs: [
				{
					name: '成色',
					values: [{ name: '九成新' }, { name: '八成新' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tool_7_1',
					specs: [{ name: '成色', valueName: '九成新' }],
					price: 55.0,
					oldPrice: 129.0,
					inventory: 11,
				},
				{
					id: 'sku_book_tool_7_2',
					specs: [{ name: '成色', valueName: '八成新' }],
					price: 35.0,
					oldPrice: 129.0,
					inventory: 7,
				},
			],
		},
		{
			name: '英汉技术大词典',
			desc: '涵盖计算机、机械、电子等技术词汇，翻译必备',
			brand: { name: '国防工业出版社' },
			specs: [
				{
					name: '版本',
					values: [{ name: '精装版' }, { name: '平装版' }],
				},
			],
			skus: [
				{
					id: 'sku_book_tool_8_1',
					specs: [{ name: '版本', valueName: '精装版' }],
					price: 65.0,
					oldPrice: 120.0,
					inventory: 5,
				},
				{
					id: 'sku_book_tool_8_2',
					specs: [{ name: '版本', valueName: '平装版' }],
					price: 45.0,
					oldPrice: 98.0,
					inventory: 8,
				},
			],
		},
		{
			name: '成语词典（双色本）',
			desc: '收录成语4万条，释义详尽，公文写作必备',
			brand: { name: '商务印书馆' },
			specs: [
				{ name: '装帧', values: [{ name: '精装' }, { name: '平装' }] },
			],
			skus: [
				{
					id: 'sku_book_tool_9_1',
					specs: [{ name: '装帧', valueName: '精装' }],
					price: 35.0,
					oldPrice: 68.0,
					inventory: 10,
				},
				{
					id: 'sku_book_tool_9_2',
					specs: [{ name: '装帧', valueName: '平装' }],
					price: 22.0,
					oldPrice: 48.0,
					inventory: 18,
				},
			],
		},
	],
};
