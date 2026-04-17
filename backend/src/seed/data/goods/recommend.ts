import type { GoodsDataMap } from '../../types.js';

export const recommendGoods: GoodsDataMap = {
	学习好物: [
		{
			name: '护眼LED折叠台灯',
			desc: '无频闪护眼，三档调光，折叠便携，适合宿舍夜间学习',
			brand: { name: '欧普' },
			specs: [
				{
					name: '颜色',
					values: [
						{ name: '白色' },
						{ name: '黑色' },
						{ name: '绿色' },
					],
				},
			],
			skus: [
				{
					id: 'recommend_1_1_1',
					specs: [{ name: '颜色', valueName: '白色' }],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 150,
				},
				{
					id: 'recommend_1_1_2',
					specs: [{ name: '颜色', valueName: '黑色' }],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 120,
				},
				{
					id: 'recommend_1_1_3',
					specs: [{ name: '颜色', valueName: '绿色' }],
					price: 42.9,
					oldPrice: 72.9,
					inventory: 100,
				},
			],
		},
		{
			name: '桌面读书架',
			desc: '解放颈椎，多角度可调节，稳固不晃动',
			brand: { name: '得力' },
			specs: [
				{
					name: '材质',
					values: [{ name: '实木' }, { name: '铝合金' }],
				},
			],
			skus: [
				{
					id: 'recommend_1_2_1',
					specs: [{ name: '材质', valueName: '实木' }],
					price: 29.9,
					oldPrice: 49.9,
					inventory: 200,
				},
				{
					id: 'recommend_1_2_2',
					specs: [{ name: '材质', valueName: '铝合金' }],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 150,
				},
			],
		},
		{
			name: '慢回弹记忆棉坐垫',
			desc: '久坐不累，透气蜂窝孔设计，保护尾椎',
			brand: { name: '8H' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '标准款(45x40)' },
						{ name: '加大款(50x45)' },
					],
				},
			],
			skus: [
				{
					id: 'recommend_1_3_1',
					specs: [{ name: '尺寸', valueName: '标准款(45x40)' }],
					price: 49.9,
					oldPrice: 89.9,
					inventory: 180,
				},
				{
					id: 'recommend_1_3_2',
					specs: [{ name: '尺寸', valueName: '加大款(50x45)' }],
					price: 69.9,
					oldPrice: 119.9,
					inventory: 120,
				},
			],
		},
		{
			name: '莫兰迪色荧光笔套装',
			desc: '护眼柔和色系，不晕染，重点标记必备',
			brand: { name: '斑马' },
			specs: [
				{
					name: '支数',
					values: [
						{ name: '5支装' },
						{ name: '8支装' },
						{ name: '12支装' },
					],
				},
			],
			skus: [
				{
					id: 'recommend_1_4_1',
					specs: [{ name: '支数', valueName: '5支装' }],
					price: 15.9,
					oldPrice: 25.9,
					inventory: 300,
				},
				{
					id: 'recommend_1_4_2',
					specs: [{ name: '支数', valueName: '8支装' }],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 250,
				},
				{
					id: 'recommend_1_4_3',
					specs: [{ name: '支数', valueName: '12支装' }],
					price: 32.9,
					oldPrice: 55.9,
					inventory: 200,
				},
			],
		},
		{
			name: '番茄钟电子计时器',
			desc: '物理倒计时，静音不扰人，专治拖延症',
			brand: { name: '静音大师' },
			specs: [
				{
					name: '功能',
					values: [{ name: '基础款' }, { name: '带背光款' }],
				},
			],
			skus: [
				{
					id: 'recommend_1_5_1',
					specs: [{ name: '功能', valueName: '基础款' }],
					price: 19.9,
					oldPrice: 35.9,
					inventory: 200,
				},
				{
					id: 'recommend_1_5_2',
					specs: [{ name: '功能', valueName: '带背光款' }],
					price: 29.9,
					oldPrice: 49.9,
					inventory: 150,
				},
			],
		},
		{
			name: 'A4网格活页本',
			desc: '可拆卸内页，适合各科目错题整理和知识梳理',
			brand: { name: '国誉' },
			specs: [
				{ name: '张数', values: [{ name: '40张' }, { name: '80张' }] },
			],
			skus: [
				{
					id: 'recommend_1_6_1',
					specs: [{ name: '张数', valueName: '40张' }],
					price: 18.9,
					oldPrice: 28.9,
					inventory: 250,
				},
				{
					id: 'recommend_1_6_2',
					specs: [{ name: '张数', valueName: '80张' }],
					price: 28.9,
					oldPrice: 45.9,
					inventory: 200,
				},
			],
		},
		{
			name: '零压静音耳塞',
			desc: '慢回弹海绵，有效隔绝呼噜声，宿舍午休神器',
			brand: { name: '安耳悠' },
			specs: [
				{
					name: '数量',
					values: [{ name: '5副装' }, { name: '10副装' }],
				},
			],
			skus: [
				{
					id: 'recommend_1_7_1',
					specs: [{ name: '数量', valueName: '5副装' }],
					price: 15.9,
					oldPrice: 25.9,
					inventory: 300,
				},
				{
					id: 'recommend_1_7_2',
					specs: [{ name: '数量', valueName: '10副装' }],
					price: 25.9,
					oldPrice: 45.9,
					inventory: 250,
				},
			],
		},
		{
			name: '桌面多功能收纳盒',
			desc: '笔筒+抽屉+手机槽，桌面整洁效率高',
			brand: { name: '得力' },
			specs: [
				{
					name: '大小',
					values: [
						{ name: '小号' },
						{ name: '大号' },
						{ name: '加宽款' },
					],
				},
			],
			skus: [
				{
					id: 'recommend_1_8_1',
					specs: [{ name: '大小', valueName: '小号' }],
					price: 19.9,
					oldPrice: 35.9,
					inventory: 180,
				},
				{
					id: 'recommend_1_8_2',
					specs: [{ name: '大小', valueName: '大号' }],
					price: 29.9,
					oldPrice: 49.9,
					inventory: 150,
				},
				{
					id: 'recommend_1_8_3',
					specs: [{ name: '大小', valueName: '加宽款' }],
					price: 39.9,
					oldPrice: 65.9,
					inventory: 100,
				},
			],
		},
		{
			name: '便利贴+索引贴组合',
			desc: '横线便利贴与透明索引贴，书本贴标签做笔记超好用',
			brand: { name: '3M' },
			specs: [
				{
					name: '类型',
					values: [{ name: '基础组合' }, { name: '豪华组合' }],
				},
			],
			skus: [
				{
					id: 'recommend_1_9_1',
					specs: [{ name: '类型', valueName: '基础组合' }],
					price: 12.9,
					oldPrice: 22.9,
					inventory: 300,
				},
				{
					id: 'recommend_1_9_2',
					specs: [{ name: '类型', valueName: '豪华组合' }],
					price: 24.9,
					oldPrice: 42.9,
					inventory: 200,
				},
			],
		},
	],
	生活神器: [
		{
			name: '桌面迷你加湿器',
			desc: '静音补水，缓解空调房干燥，体型小巧不占地',
			brand: { name: '小熊' },
			specs: [
				{
					name: '容量',
					values: [{ name: '500ml' }, { name: '800ml' }],
				},
			],
			skus: [
				{
					id: 'recommend_2_1_1',
					specs: [{ name: '容量', valueName: '500ml' }],
					price: 29.9,
					oldPrice: 49.9,
					inventory: 200,
				},
				{
					id: 'recommend_2_1_2',
					specs: [{ name: '容量', valueName: '800ml' }],
					price: 39.9,
					oldPrice: 65.9,
					inventory: 150,
				},
			],
		},
		{
			name: '3D立体遮光眼罩',
			desc: '不压眼球，零压感设计，完全遮挡光线',
			brand: { name: '零听' },
			specs: [
				{ name: '材质', values: [{ name: '冰丝' }, { name: '真丝' }] },
			],
			skus: [
				{
					id: 'recommend_2_2_1',
					specs: [{ name: '材质', valueName: '冰丝' }],
					price: 19.9,
					oldPrice: 35.9,
					inventory: 250,
				},
				{
					id: 'recommend_2_2_2',
					specs: [{ name: '材质', valueName: '真丝' }],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 150,
				},
			],
		},
		{
			name: '防雷防涌排插',
			desc: '6位插座+4个USB接口，安全守护宿舍电器',
			brand: { name: '公牛' },
			specs: [
				{ name: '孔位数', values: [{ name: '6孔' }, { name: '8孔' }] },
			],
			skus: [
				{
					id: 'recommend_2_3_1',
					specs: [{ name: '孔位数', valueName: '6孔' }],
					price: 39.9,
					oldPrice: 59.9,
					inventory: 200,
				},
				{
					id: 'recommend_2_3_2',
					specs: [{ name: '孔位数', valueName: '8孔' }],
					price: 49.9,
					oldPrice: 79.9,
					inventory: 150,
				},
			],
		},
		{
			name: '床边悬挂收纳篮',
			desc: '免打孔挂在床边，放手机遥控器，拿取超方便',
			brand: { name: '懒人角落' },
			specs: [
				{ name: '层数', values: [{ name: '单层' }, { name: '双层' }] },
			],
			skus: [
				{
					id: 'recommend_2_4_1',
					specs: [{ name: '层数', valueName: '单层' }],
					price: 15.9,
					oldPrice: 29.9,
					inventory: 300,
				},
				{
					id: 'recommend_2_4_2',
					specs: [{ name: '层数', valueName: '双层' }],
					price: 25.9,
					oldPrice: 45.9,
					inventory: 200,
				},
			],
		},
		{
			name: '透明旋转化妆品收纳盒',
			desc: '360度旋转，找东西一目了然，宿舍梳妆台必备',
			brand: { name: '美丽雅' },
			specs: [
				{ name: '大小', values: [{ name: '小号' }, { name: '大号' }] },
			],
			skus: [
				{
					id: 'recommend_2_5_1',
					specs: [{ name: '大小', valueName: '小号' }],
					price: 29.9,
					oldPrice: 49.9,
					inventory: 180,
				},
				{
					id: 'recommend_2_5_2',
					specs: [{ name: '大小', valueName: '大号' }],
					price: 49.9,
					oldPrice: 85.9,
					inventory: 120,
				},
			],
		},
		{
			name: '可折叠桌面小风扇',
			desc: '静音大风力，USB供电，不用时折叠收纳',
			brand: { name: '美的' },
			specs: [
				{
					name: '款式',
					values: [{ name: '有绳款' }, { name: '无线款' }],
				},
			],
			skus: [
				{
					id: 'recommend_2_6_1',
					specs: [{ name: '款式', valueName: '有绳款' }],
					price: 25.9,
					oldPrice: 45.9,
					inventory: 250,
				},
				{
					id: 'recommend_2_6_2',
					specs: [{ name: '款式', valueName: '无线款' }],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 150,
				},
			],
		},
		{
			name: '免安装桌洞挂帘',
			desc: '遮挡桌下空间，隐藏杂物，宿舍整洁利器',
			brand: { name: '宿舍粉' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '标准单桌' }, { name: '加长连桌' }],
				},
			],
			skus: [
				{
					id: 'recommend_2_7_1',
					specs: [{ name: '尺寸', valueName: '标准单桌' }],
					price: 15.9,
					oldPrice: 28.9,
					inventory: 200,
				},
				{
					id: 'recommend_2_7_2',
					specs: [{ name: '尺寸', valueName: '加长连桌' }],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 150,
				},
			],
		},
		{
			name: '墙上洞洞板套装',
			desc: '自由组合配件，利用垂直空间，解放桌面',
			brand: { name: '奈高' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '30x30cm' }, { name: '40x60cm' }],
				},
			],
			skus: [
				{
					id: 'recommend_2_8_1',
					specs: [{ name: '尺寸', valueName: '30x30cm' }],
					price: 29.9,
					oldPrice: 49.9,
					inventory: 150,
				},
				{
					id: 'recommend_2_8_2',
					specs: [{ name: '尺寸', valueName: '40x60cm' }],
					price: 55.9,
					oldPrice: 95.9,
					inventory: 100,
				},
			],
		},
		{
			name: '宿舍多层小推车',
			desc: '万向轮带刹车，放零食护肤品，移动收纳',
			brand: { name: '宜家风格' },
			specs: [
				{
					name: '层数',
					values: [
						{ name: '二层' },
						{ name: '三层' },
						{ name: '四层' },
					],
				},
			],
			skus: [
				{
					id: 'recommend_2_9_1',
					specs: [{ name: '层数', valueName: '二层' }],
					price: 35.9,
					oldPrice: 59.9,
					inventory: 150,
				},
				{
					id: 'recommend_2_9_2',
					specs: [{ name: '层数', valueName: '三层' }],
					price: 49.9,
					oldPrice: 79.9,
					inventory: 120,
				},
				{
					id: 'recommend_2_9_3',
					specs: [{ name: '层数', valueName: '四层' }],
					price: 65.9,
					oldPrice: 109.9,
					inventory: 80,
				},
			],
		},
	],
	备考干货: [
		{
			name: '英语四级真题卷',
			desc: '含历年真题及详解，附赠听力音频，过级必备',
			brand: { name: '星火英语' },
			specs: [
				{
					name: '套装',
					values: [{ name: '真题卷' }, { name: '真题卷+词汇手册' }],
				},
			],
			skus: [
				{
					id: 'recommend_3_1_1',
					specs: [{ name: '套装', valueName: '真题卷' }],
					price: 19.9,
					oldPrice: 35.9,
					inventory: 500,
				},
				{
					id: 'recommend_3_1_2',
					specs: [{ name: '套装', valueName: '真题卷+词汇手册' }],
					price: 29.9,
					oldPrice: 55.9,
					inventory: 400,
				},
			],
		},
		{
			name: '英语六级真题试卷',
			desc: '最新版真题汇编，解析详尽，助力高分突破',
			brand: { name: '新东方' },
			specs: [
				{
					name: '套装',
					values: [{ name: '仅真题' }, { name: '真题+预测卷' }],
				},
			],
			skus: [
				{
					id: 'recommend_3_2_1',
					specs: [{ name: '套装', valueName: '仅真题' }],
					price: 22.9,
					oldPrice: 39.9,
					inventory: 450,
				},
				{
					id: 'recommend_3_2_2',
					specs: [{ name: '套装', valueName: '真题+预测卷' }],
					price: 32.9,
					oldPrice: 59.9,
					inventory: 350,
				},
			],
		},
		{
			name: '考研英语真题逐词逐句精讲',
			desc: '句句图解，适合基础薄弱同学，扫清阅读障碍',
			brand: { name: '考研帮' },
			specs: [
				{
					name: '版本',
					values: [{ name: '基础版' }, { name: '强化版' }],
				},
			],
			skus: [
				{
					id: 'recommend_3_3_1',
					specs: [{ name: '版本', valueName: '基础版' }],
					price: 39.9,
					oldPrice: 68.9,
					inventory: 300,
				},
				{
					id: 'recommend_3_3_2',
					specs: [{ name: '版本', valueName: '强化版' }],
					price: 49.9,
					oldPrice: 85.9,
					inventory: 250,
				},
			],
		},
		{
			name: '考研政治核心考点笔记',
			desc: '学长整理的背诵版笔记，重点突出，提分快',
			brand: { name: '腿姐' },
			specs: [
				{
					name: '类型',
					values: [
						{ name: '背诵手册' },
						{ name: '真题精讲' },
						{ name: '冲刺预测卷' },
					],
				},
			],
			skus: [
				{
					id: 'recommend_3_4_1',
					specs: [{ name: '类型', valueName: '背诵手册' }],
					price: 25.9,
					oldPrice: 45.9,
					inventory: 400,
				},
				{
					id: 'recommend_3_4_2',
					specs: [{ name: '类型', valueName: '真题精讲' }],
					price: 35.9,
					oldPrice: 65.9,
					inventory: 300,
				},
				{
					id: 'recommend_3_4_3',
					specs: [{ name: '类型', valueName: '冲刺预测卷' }],
					price: 15.9,
					oldPrice: 28.9,
					inventory: 500,
				},
			],
		},
		{
			name: '教师资格证综合素质教材',
			desc: '包含考点梳理和历年真题，科一备考专用',
			brand: { name: '中公教育' },
			specs: [
				{
					name: '学段',
					values: [
						{ name: '幼教' },
						{ name: '小学' },
						{ name: '中学' },
					],
				},
			],
			skus: [
				{
					id: 'recommend_3_5_1',
					specs: [{ name: '学段', valueName: '幼教' }],
					price: 29.9,
					oldPrice: 52.9,
					inventory: 200,
				},
				{
					id: 'recommend_3_5_2',
					specs: [{ name: '学段', valueName: '小学' }],
					price: 29.9,
					oldPrice: 52.9,
					inventory: 250,
				},
				{
					id: 'recommend_3_5_3',
					specs: [{ name: '学段', valueName: '中学' }],
					price: 32.9,
					oldPrice: 58.9,
					inventory: 200,
				},
			],
		},
		{
			name: '计算机二级MS题库',
			desc: '真题模拟软件激活码+解析，刷题过级必买',
			brand: { name: '未来教育' },
			specs: [
				{
					name: '科目',
					values: [
						{ name: 'MS Office' },
						{ name: 'Python' },
						{ name: 'C语言' },
					],
				},
			],
			skus: [
				{
					id: 'recommend_3_6_1',
					specs: [{ name: '科目', valueName: 'MS Office' }],
					price: 25.9,
					oldPrice: 45.9,
					inventory: 400,
				},
				{
					id: 'recommend_3_6_2',
					specs: [{ name: '科目', valueName: 'Python' }],
					price: 25.9,
					oldPrice: 45.9,
					inventory: 350,
				},
				{
					id: 'recommend_3_6_3',
					specs: [{ name: '科目', valueName: 'C语言' }],
					price: 25.9,
					oldPrice: 45.9,
					inventory: 300,
				},
			],
		},
		{
			name: '公考行测思维导图',
			desc: '将复杂考点可视化，理清解题逻辑和套路',
			brand: { name: '粉笔' },
			specs: [
				{
					name: '类型',
					values: [{ name: '纸质版' }, { name: '电子版' }],
				},
			],
			skus: [
				{
					id: 'recommend_3_7_1',
					specs: [{ name: '类型', valueName: '纸质版' }],
					price: 35.9,
					oldPrice: 65.9,
					inventory: 200,
				},
				{
					id: 'recommend_3_7_2',
					specs: [{ name: '类型', valueName: '电子版' }],
					price: 12.9,
					oldPrice: 25.9,
					inventory: 999,
				},
			],
		},
		{
			name: '雅思听力机经词汇',
			desc: '场景分类词汇，匹配真题考点，听力提分必备',
			brand: { name: '新东方' },
			specs: [
				{
					name: '版本',
					values: [{ name: '基础词汇' }, { name: '核心高频词' }],
				},
			],
			skus: [
				{
					id: 'recommend_3_8_1',
					specs: [{ name: '版本', valueName: '基础词汇' }],
					price: 28.9,
					oldPrice: 48.9,
					inventory: 150,
				},
				{
					id: 'recommend_3_8_2',
					specs: [{ name: '版本', valueName: '核心高频词' }],
					price: 38.9,
					oldPrice: 68.9,
					inventory: 120,
				},
			],
		},
		{
			name: '期末复习高数速成讲义',
			desc: '本校学长总结的期末划重点，考前突击神器',
			brand: { name: '校园打印社' },
			specs: [
				{
					name: '科目',
					values: [
						{ name: '上册(微积分)' },
						{ name: '下册(线代概率)' },
					],
				},
			],
			skus: [
				{
					id: 'recommend_3_9_1',
					specs: [{ name: '科目', valueName: '上册(微积分)' }],
					price: 15.9,
					oldPrice: 30.9,
					inventory: 500,
				},
				{
					id: 'recommend_3_9_2',
					specs: [{ name: '科目', valueName: '下册(线代概率)' }],
					price: 15.9,
					oldPrice: 30.9,
					inventory: 450,
				},
			],
		},
	],
	校园攻略: [
		{
			name: '新生校园手绘地图',
			desc: '精美手绘，标注食堂、快递点、教学楼，防迷路',
			brand: { name: '校学生会' },
			specs: [
				{
					name: '材质',
					values: [{ name: '纸质版' }, { name: '亚克力板版' }],
				},
			],
			skus: [
				{
					id: 'recommend_4_1_1',
					specs: [{ name: '材质', valueName: '纸质版' }],
					price: 10,
					oldPrice: 18,
					inventory: 1000,
				},
				{
					id: 'recommend_4_1_2',
					specs: [{ name: '材质', valueName: '亚克力板版' }],
					price: 25.9,
					oldPrice: 45.9,
					inventory: 300,
				},
			],
		},
		{
			name: '选课避坑指南手册',
			desc: '各门课程给分情况、考勤要求、作业量全解析',
			brand: { name: '学长说' },
			specs: [
				{
					name: '版本',
					values: [
						{ name: '通识课版' },
						{ name: '专业课版' },
						{ name: '全合成集' },
					],
				},
			],
			skus: [
				{
					id: 'recommend_4_2_1',
					specs: [{ name: '版本', valueName: '通识课版' }],
					price: 12.9,
					oldPrice: 22.9,
					inventory: 600,
				},
				{
					id: 'recommend_4_2_2',
					specs: [{ name: '版本', valueName: '专业课版' }],
					price: 19.9,
					oldPrice: 35.9,
					inventory: 400,
				},
				{
					id: 'recommend_4_2_3',
					specs: [{ name: '版本', valueName: '全合成集' }],
					price: 29.9,
					oldPrice: 55.9,
					inventory: 500,
				},
			],
		},
		{
			name: '周边外卖美食测评册',
			desc: '真实试吃评价，避雷推荐，拯救选择困难症',
			brand: { name: '吃货小分队' },
			specs: [
				{
					name: '分类',
					values: [
						{ name: '快餐简餐' },
						{ name: '奶茶甜品' },
						{ name: '聚餐精选' },
					],
				},
			],
			skus: [
				{
					id: 'recommend_4_3_1',
					specs: [{ name: '分类', valueName: '快餐简餐' }],
					price: 10,
					oldPrice: 18,
					inventory: 800,
				},
				{
					id: 'recommend_4_3_2',
					specs: [{ name: '分类', valueName: '奶茶甜品' }],
					price: 10,
					oldPrice: 18,
					inventory: 800,
				},
				{
					id: 'recommend_4_3_3',
					specs: [{ name: '分类', valueName: '聚餐精选' }],
					price: 15.9,
					oldPrice: 28.9,
					inventory: 500,
				},
			],
		},
		{
			name: '奖学金申请攻略',
			desc: '国奖、校奖申请条件及材料准备全流程拆解',
			brand: { name: '学霸笔记' },
			specs: [
				{
					name: '类型',
					values: [{ name: '电子版' }, { name: '纸质版' }],
				},
			],
			skus: [
				{
					id: 'recommend_4_4_1',
					specs: [{ name: '类型', valueName: '电子版' }],
					price: 9.9,
					oldPrice: 19.9,
					inventory: 999,
				},
				{
					id: 'recommend_4_4_2',
					specs: [{ name: '类型', valueName: '纸质版' }],
					price: 18.9,
					oldPrice: 35.9,
					inventory: 400,
				},
			],
		},
		{
			name: '社团面试通关秘籍',
			desc: '学生会及热门社团历年面试真题及应答技巧',
			brand: { name: '校园达人' },
			specs: [
				{
					name: '方向',
					values: [{ name: '外联宣传部' }, { name: '秘书处纪检部' }],
				},
			],
			skus: [
				{
					id: 'recommend_4_5_1',
					specs: [{ name: '方向', valueName: '外联宣传部' }],
					price: 12.9,
					oldPrice: 22.9,
					inventory: 500,
				},
				{
					id: 'recommend_4_5_2',
					specs: [{ name: '方向', valueName: '秘书处纪检部' }],
					price: 12.9,
					oldPrice: 22.9,
					inventory: 450,
				},
			],
		},
		{
			name: '考研本校vs跨校选择指南',
			desc: '分析本校保底与跨校冲刺的利弊，提供择校思路',
			brand: { name: '考研帮' },
			specs: [
				{
					name: '专业',
					values: [{ name: '理工科' }, { name: '文科类' }],
				},
			],
			skus: [
				{
					id: 'recommend_4_6_1',
					specs: [{ name: '专业', valueName: '理工科' }],
					price: 19.9,
					oldPrice: 35.9,
					inventory: 300,
				},
				{
					id: 'recommend_4_6_2',
					specs: [{ name: '专业', valueName: '文科类' }],
					price: 19.9,
					oldPrice: 35.9,
					inventory: 280,
				},
			],
		},
		{
			name: '简历模板与面试话术集',
			desc: '针对春招秋招，含大厂通用模板及高频面试题解析',
			brand: { name: '求职帮' },
			specs: [
				{
					name: '行业',
					values: [{ name: '互联网版' }, { name: '国企事业编版' }],
				},
			],
			skus: [
				{
					id: 'recommend_4_7_1',
					specs: [{ name: '行业', valueName: '互联网版' }],
					price: 15.9,
					oldPrice: 28.9,
					inventory: 600,
				},
				{
					id: 'recommend_4_7_2',
					specs: [{ name: '行业', valueName: '国企事业编版' }],
					price: 15.9,
					oldPrice: 28.9,
					inventory: 500,
				},
			],
		},
		{
			name: '宿舍床品防坑选购清单',
			desc: '尺寸解析、材质对比、价格参考，少花冤枉钱',
			brand: { name: '生活委员' },
			specs: [
				{
					name: '形式',
					values: [{ name: '电子表格' }, { name: '打印册子' }],
				},
			],
			skus: [
				{
					id: 'recommend_4_8_1',
					specs: [{ name: '形式', valueName: '电子表格' }],
					price: 5.9,
					oldPrice: 10.9,
					inventory: 999,
				},
				{
					id: 'recommend_4_8_2',
					specs: [{ name: '形式', valueName: '打印册子' }],
					price: 12.9,
					oldPrice: 22.9,
					inventory: 500,
				},
			],
		},
		{
			name: '毕业求职时间轴手册',
			desc: '从大三下到大四毕业，每个月该做什么一目了然',
			brand: { name: '学长说' },
			specs: [
				{
					name: '版本',
					values: [{ name: '考研党版' }, { name: '就业党版' }],
				},
			],
			skus: [
				{
					id: 'recommend_4_9_1',
					specs: [{ name: '版本', valueName: '考研党版' }],
					price: 14.9,
					oldPrice: 25.9,
					inventory: 500,
				},
				{
					id: 'recommend_4_9_2',
					specs: [{ name: '版本', valueName: '就业党版' }],
					price: 14.9,
					oldPrice: 25.9,
					inventory: 500,
				},
			],
		},
	],
};
