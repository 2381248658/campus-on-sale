import type { GoodsDataMap } from '../../types.js';

export const electronicsGoods: GoodsDataMap = {
	手机配件: [
		{
			name: '液态硅胶防摔手机壳',
			desc: '亲肤手感，全包防摔，孔位精准，多款机型可选',
			brand: { name: '绿联' },
			specs: [
				{
					name: '颜色',
					values: [
						{ name: '暗夜黑' },
						{ name: '薄荷绿' },
						{ name: '雾霾蓝' },
					],
				},
			],
			skus: [
				{
					id: 'elec_1_1_1',
					specs: [{ name: '颜色', valueName: '暗夜黑' }],
					price: 29.9,
					oldPrice: 49.9,
					inventory: 500,
				},
				{
					id: 'elec_1_1_2',
					specs: [{ name: '颜色', valueName: '薄荷绿' }],
					price: 29.9,
					oldPrice: 49.9,
					inventory: 400,
				},
				{
					id: 'elec_1_1_3',
					specs: [{ name: '颜色', valueName: '雾霾蓝' }],
					price: 29.9,
					oldPrice: 49.9,
					inventory: 450,
				},
			],
		},
		{
			name: '高透防指纹钢化膜',
			desc: '9H硬度，电镀疏油层，贴膜无气泡，防指纹防刮',
			brand: { name: '闪魔' },
			specs: [
				{
					name: '功能',
					values: [
						{ name: '高透版' },
						{ name: '防窥版' },
						{ name: '磨砂版' },
					],
				},
			],
			skus: [
				{
					id: 'elec_1_2_1',
					specs: [{ name: '功能', valueName: '高透版' }],
					price: 15.9,
					oldPrice: 29.9,
					inventory: 800,
				},
				{
					id: 'elec_1_2_2',
					specs: [{ name: '功能', valueName: '防窥版' }],
					price: 25.9,
					oldPrice: 45.9,
					inventory: 600,
				},
				{
					id: 'elec_1_2_3',
					specs: [{ name: '功能', valueName: '磨砂版' }],
					price: 19.9,
					oldPrice: 35.9,
					inventory: 700,
				},
			],
		},
		{
			name: '氮化镓快充充电器',
			desc: '小巧便携不占插孔，支持多协议快充，智能温控',
			brand: { name: '倍思' },
			specs: [
				{
					name: '功率',
					values: [{ name: '20W单口' }, { name: '65W双口' }],
				},
			],
			skus: [
				{
					id: 'elec_1_3_1',
					specs: [{ name: '功率', valueName: '20W单口' }],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 400,
				},
				{
					id: 'elec_1_3_2',
					specs: [{ name: '功率', valueName: '65W双口' }],
					price: 79.9,
					oldPrice: 129.9,
					inventory: 300,
				},
			],
		},
		{
			name: '磁吸无线充电宝',
			desc: '强力磁吸不脱落，轻薄便携，支持有线无线双重输出',
			brand: { name: '安克' },
			specs: [
				{
					name: '容量',
					values: [
						{ name: '5000mAh' },
						{ name: '10000mAh' },
						{ name: '20000mAh' },
					],
				},
			],
			skus: [
				{
					id: 'elec_1_4_1',
					specs: [{ name: '容量', valueName: '5000mAh' }],
					price: 69.9,
					oldPrice: 99.9,
					inventory: 350,
				},
				{
					id: 'elec_1_4_2',
					specs: [{ name: '容量', valueName: '10000mAh' }],
					price: 99.9,
					oldPrice: 159.9,
					inventory: 250,
				},
				{
					id: 'elec_1_4_3',
					specs: [{ name: '容量', valueName: '20000mAh' }],
					price: 149.9,
					oldPrice: 229.9,
					inventory: 200,
				},
			],
		},
		{
			name: '车载磁吸手机支架',
			desc: '万向球调节，稳固不晃，单手操作秒取秒放',
			brand: { name: '京造' },
			specs: [
				{
					name: '安装方式',
					values: [{ name: '出风口' }, { name: '吸盘式' }],
				},
			],
			skus: [
				{
					id: 'elec_1_5_1',
					specs: [{ name: '安装方式', valueName: '出风口' }],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 300,
				},
				{
					id: 'elec_1_5_2',
					specs: [{ name: '安装方式', valueName: '吸盘式' }],
					price: 49.9,
					oldPrice: 79.9,
					inventory: 250,
				},
			],
		},
		{
			name: '编织快充数据线',
			desc: '尼龙编织防缠绕，耐用不断裂，充电传输二合一',
			brand: { name: '绿联' },
			specs: [
				{
					name: '长度',
					values: [
						{ name: '1米' },
						{ name: '1.5米' },
						{ name: '2米' },
					],
				},
			],
			skus: [
				{
					id: 'elec_1_6_1',
					specs: [{ name: '长度', valueName: '1米' }],
					price: 15.9,
					oldPrice: 29.9,
					inventory: 600,
				},
				{
					id: 'elec_1_6_2',
					specs: [{ name: '长度', valueName: '1.5米' }],
					price: 19.9,
					oldPrice: 35.9,
					inventory: 500,
				},
				{
					id: 'elec_1_6_3',
					specs: [{ name: '长度', valueName: '2米' }],
					price: 24.9,
					oldPrice: 42.9,
					inventory: 450,
				},
			],
		},
		{
			name: '桌面多模无线充电板',
			desc: '支持手机/耳机/手表同时充电，桌面整洁好帮手',
			brand: { name: '贝尔金' },
			specs: [
				{
					name: '类型',
					values: [{ name: '二合一' }, { name: '三合一' }],
				},
			],
			skus: [
				{
					id: 'elec_1_7_1',
					specs: [{ name: '类型', valueName: '二合一' }],
					price: 89.9,
					oldPrice: 149.9,
					inventory: 200,
				},
				{
					id: 'elec_1_7_2',
					specs: [{ name: '类型', valueName: '三合一' }],
					price: 159.9,
					oldPrice: 249.9,
					inventory: 150,
				},
			],
		},
		{
			name: '半导体手机散热背夹',
			desc: '秒降温，不伤手机，打游戏防降频不掉帧',
			brand: { name: '黑鲨' },
			specs: [
				{
					name: '款式',
					values: [{ name: '基础静音版' }, { name: 'RGB风扇版' }],
				},
			],
			skus: [
				{
					id: 'elec_1_8_1',
					specs: [{ name: '款式', valueName: '基础静音版' }],
					price: 59.9,
					oldPrice: 99.9,
					inventory: 250,
				},
				{
					id: 'elec_1_8_2',
					specs: [{ name: '款式', valueName: 'RGB风扇版' }],
					price: 79.9,
					oldPrice: 129.9,
					inventory: 200,
				},
			],
		},
		{
			name: '高速TF内存卡',
			desc: '读速高达100MB/s，手机扩容、行车记录仪、监控专用',
			brand: { name: '闪迪' },
			specs: [
				{
					name: '容量',
					values: [
						{ name: '64GB' },
						{ name: '128GB' },
						{ name: '256GB' },
					],
				},
			],
			skus: [
				{
					id: 'elec_1_9_1',
					specs: [{ name: '容量', valueName: '64GB' }],
					price: 39.9,
					oldPrice: 59.9,
					inventory: 400,
				},
				{
					id: 'elec_1_9_2',
					specs: [{ name: '容量', valueName: '128GB' }],
					price: 59.9,
					oldPrice: 89.9,
					inventory: 350,
				},
				{
					id: 'elec_1_9_3',
					specs: [{ name: '容量', valueName: '256GB' }],
					price: 99.9,
					oldPrice: 149.9,
					inventory: 300,
				},
			],
		},
	],
	电脑外设: [
		{
			name: '红轴机械键盘',
			desc: '段落感轻盈，长时间打字不累，青轴的平替',
			brand: { name: '樱桃' },
			specs: [
				{
					name: '轴体',
					values: [
						{ name: '红轴' },
						{ name: '茶轴' },
						{ name: '黑轴' },
					],
				},
			],
			skus: [
				{
					id: 'elec_2_1_1',
					specs: [{ name: '轴体', valueName: '红轴' }],
					price: 199.9,
					oldPrice: 349.9,
					inventory: 200,
				},
				{
					id: 'elec_2_1_2',
					specs: [{ name: '轴体', valueName: '茶轴' }],
					price: 199.9,
					oldPrice: 349.9,
					inventory: 180,
				},
				{
					id: 'elec_2_1_3',
					specs: [{ name: '轴体', valueName: '黑轴' }],
					price: 189.9,
					oldPrice: 329.9,
					inventory: 150,
				},
			],
		},
		{
			name: '电竞有线鼠标',
			desc: '高回报率，轻量化设计，抓握舒适，FPS游戏利器',
			brand: { name: '罗技' },
			specs: [
				{
					name: '版本',
					values: [{ name: '办公基础版' }, { name: '电竞版' }],
				},
			],
			skus: [
				{
					id: 'elec_2_2_1',
					specs: [{ name: '版本', valueName: '办公基础版' }],
					price: 69.9,
					oldPrice: 119.9,
					inventory: 300,
				},
				{
					id: 'elec_2_2_2',
					specs: [{ name: '版本', valueName: '电竞版' }],
					price: 149.9,
					oldPrice: 249.9,
					inventory: 200,
				},
			],
		},
		{
			name: '超大桌面鼠标垫',
			desc: '锁边防卷边，细面顺滑，可覆盖整个键盘鼠标区域',
			brand: { name: '蜜蜂' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '60x30cm' },
						{ name: '80x40cm' },
						{ name: '90x40cm' },
					],
				},
			],
			skus: [
				{
					id: 'elec_2_3_1',
					specs: [{ name: '尺寸', valueName: '60x30cm' }],
					price: 29.9,
					oldPrice: 49.9,
					inventory: 400,
				},
				{
					id: 'elec_2_3_2',
					specs: [{ name: '尺寸', valueName: '80x40cm' }],
					price: 39.9,
					oldPrice: 65.9,
					inventory: 350,
				},
				{
					id: 'elec_2_3_3',
					specs: [{ name: '尺寸', valueName: '90x40cm' }],
					price: 49.9,
					oldPrice: 79.9,
					inventory: 300,
				},
			],
		},
		{
			name: '防震笔记本内胆包',
			desc: '加厚海绵内衬，防摔防刮，多尺寸可选',
			brand: { name: '泰摩' },
			specs: [
				{
					name: '尺寸',
					values: [
						{ name: '13.3英寸' },
						{ name: '14英寸' },
						{ name: '15.6英寸' },
					],
				},
			],
			skus: [
				{
					id: 'elec_2_4_1',
					specs: [{ name: '尺寸', valueName: '13.3英寸' }],
					price: 39.9,
					oldPrice: 69.9,
					inventory: 250,
				},
				{
					id: 'elec_2_4_2',
					specs: [{ name: '尺寸', valueName: '14英寸' }],
					price: 45.9,
					oldPrice: 75.9,
					inventory: 250,
				},
				{
					id: 'elec_2_4_3',
					specs: [{ name: '尺寸', valueName: '15.6英寸' }],
					price: 49.9,
					oldPrice: 85.9,
					inventory: 200,
				},
			],
		},
		{
			name: '显示器屏幕挂灯',
			desc: '非对称光路，不反光不伤眼，USB供电即插即用',
			brand: { name: '明基' },
			specs: [
				{
					name: '功能',
					values: [{ name: '基础调光版' }, { name: '无线遥控版' }],
				},
			],
			skus: [
				{
					id: 'elec_2_5_1',
					specs: [{ name: '功能', valueName: '基础调光版' }],
					price: 129.9,
					oldPrice: 199.9,
					inventory: 180,
				},
				{
					id: 'elec_2_5_2',
					specs: [{ name: '功能', valueName: '无线遥控版' }],
					price: 179.9,
					oldPrice: 279.9,
					inventory: 120,
				},
			],
		},
		{
			name: '铝合金笔记本支架',
			desc: '6档高度调节，中空散热，符合人体工学护颈椎',
			brand: { name: '绿联' },
			specs: [
				{
					name: '款式',
					values: [
						{ name: '折叠便携款' },
						{ name: '固定加高款' },
						{ name: '带USB集线器款' },
					],
				},
			],
			skus: [
				{
					id: 'elec_2_6_1',
					specs: [{ name: '款式', valueName: '折叠便携款' }],
					price: 59.9,
					oldPrice: 99.9,
					inventory: 200,
				},
				{
					id: 'elec_2_6_2',
					specs: [{ name: '款式', valueName: '固定加高款' }],
					price: 79.9,
					oldPrice: 129.9,
					inventory: 150,
				},
				{
					id: 'elec_2_6_3',
					specs: [{ name: '款式', valueName: '带USB集线器款' }],
					price: 109.9,
					oldPrice: 179.9,
					inventory: 100,
				},
			],
		},
		{
			name: '高清网络摄像头',
			desc: '1080P画质，自动对焦，内置麦克风，网课开会必备',
			brand: { name: '罗技' },
			specs: [
				{
					name: '清晰度',
					values: [{ name: '720P' }, { name: '1080P' }],
				},
			],
			skus: [
				{
					id: 'elec_2_7_1',
					specs: [{ name: '清晰度', valueName: '720P' }],
					price: 89.9,
					oldPrice: 149.9,
					inventory: 150,
				},
				{
					id: 'elec_2_7_2',
					specs: [{ name: '清晰度', valueName: '1080P' }],
					price: 159.9,
					oldPrice: 249.9,
					inventory: 100,
				},
			],
		},
		{
			name: '桌面电容麦克风',
			desc: '心型指向收音，自带 DSP 降噪，直播录音好声音',
			brand: { name: '得胜' },
			specs: [
				{
					name: '类型',
					values: [{ name: '聊天办公款' }, { name: '直播录音款' }],
				},
			],
			skus: [
				{
					id: 'elec_2_8_1',
					specs: [{ name: '类型', valueName: '聊天办公款' }],
					price: 99.9,
					oldPrice: 169.9,
					inventory: 180,
				},
				{
					id: 'elec_2_8_2',
					specs: [{ name: '类型', valueName: '直播录音款' }],
					price: 199.9,
					oldPrice: 329.9,
					inventory: 120,
				},
			],
		},
		{
			name: 'Type-C多功能扩展坞',
			desc: '满足轻薄本接口需求，支持PD快充、4K投屏、读卡',
			brand: { name: '绿联' },
			specs: [
				{
					name: '接口数量',
					values: [
						{ name: '6合1' },
						{ name: '9合1' },
						{ name: '12合1' },
					],
				},
			],
			skus: [
				{
					id: 'elec_2_9_1',
					specs: [{ name: '接口数量', valueName: '6合1' }],
					price: 89.9,
					oldPrice: 149.9,
					inventory: 250,
				},
				{
					id: 'elec_2_9_2',
					specs: [{ name: '接口数量', valueName: '9合1' }],
					price: 149.9,
					oldPrice: 239.9,
					inventory: 200,
				},
				{
					id: 'elec_2_9_3',
					specs: [{ name: '接口数量', valueName: '12合1' }],
					price: 199.9,
					oldPrice: 329.9,
					inventory: 150,
				},
			],
		},
	],
	智能穿戴: [
		{
			name: '运动健康智能手环',
			desc: '全天候心率血氧监测，100+运动模式，长续航',
			brand: { name: '小米' },
			specs: [
				{
					name: '版本',
					values: [{ name: '标准版' }, { name: 'NFC版' }],
				},
			],
			skus: [
				{
					id: 'elec_3_1_1',
					specs: [{ name: '版本', valueName: '标准版' }],
					price: 159.9,
					oldPrice: 249.9,
					inventory: 300,
				},
				{
					id: 'elec_3_1_2',
					specs: [{ name: '版本', valueName: 'NFC版' }],
					price: 199.9,
					oldPrice: 299.9,
					inventory: 250,
				},
			],
		},
		{
			name: '大屏智能运动手表',
			desc: '独立GPS定位，蓝牙通话，支持安装第三方APP',
			brand: { name: '华为' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '42mm标准表盘' }, { name: '46mm大表盘' }],
				},
			],
			skus: [
				{
					id: 'elec_3_2_1',
					specs: [{ name: '尺寸', valueName: '42mm标准表盘' }],
					price: 299.9,
					oldPrice: 499.9,
					inventory: 200,
				},
				{
					id: 'elec_3_2_2',
					specs: [{ name: '尺寸', valueName: '46mm大表盘' }],
					price: 349.9,
					oldPrice: 599.9,
					inventory: 150,
				},
			],
		},
		{
			name: '真无线降噪蓝牙耳机',
			desc: '主动降噪深度达40dB，通透模式，续航持久',
			brand: { name: '漫步者' },
			specs: [
				{
					name: '款式',
					values: [
						{ name: '半入耳舒适款' },
						{ name: '入耳式降噪款' },
					],
				},
			],
			skus: [
				{
					id: 'elec_3_3_1',
					specs: [{ name: '款式', valueName: '半入耳舒适款' }],
					price: 99.9,
					oldPrice: 169.9,
					inventory: 400,
				},
				{
					id: 'elec_3_3_2',
					specs: [{ name: '款式', valueName: '入耳式降噪款' }],
					price: 169.9,
					oldPrice: 299.9,
					inventory: 300,
				},
			],
		},
		{
			name: '骨传导运动耳机',
			desc: '不入耳佩戴，稳固不掉，游泳可用，保护听力',
			brand: { name: '韶音' },
			specs: [
				{
					name: '防水等级',
					values: [
						{ name: 'IPX5日常防水' },
						{ name: 'IPX8游泳防水' },
					],
				},
			],
			skus: [
				{
					id: 'elec_3_4_1',
					specs: [{ name: '防水等级', valueName: 'IPX5日常防水' }],
					price: 259.9,
					oldPrice: 399.9,
					inventory: 180,
				},
				{
					id: 'elec_3_4_2',
					specs: [{ name: '防水等级', valueName: 'IPX8游泳防水' }],
					price: 399.9,
					oldPrice: 629.9,
					inventory: 120,
				},
			],
		},
		{
			name: '智能音频眼镜',
			desc: '日常眼镜外观，开放式定向音响，随时接听电话听歌',
			brand: { name: '雷鸟' },
			specs: [
				{
					name: '功能',
					values: [{ name: '基础音频版' }, { name: 'AR显示版' }],
				},
			],
			skus: [
				{
					id: 'elec_3_5_1',
					specs: [{ name: '功能', valueName: '基础音频版' }],
					price: 499.9,
					oldPrice: 799.9,
					inventory: 100,
				},
				{
					id: 'elec_3_5_2',
					specs: [{ name: '功能', valueName: 'AR显示版' }],
					price: 899.9,
					oldPrice: 1499.9,
					inventory: 50,
				},
			],
		},
		{
			name: 'VR一体机',
			desc: '4K超清屏，6DoF沉浸式游戏观影，校园宿舍娱乐机',
			brand: { name: 'PICO' },
			specs: [
				{
					name: '存储',
					values: [{ name: '128GB' }, { name: '256GB' }],
				},
			],
			skus: [
				{
					id: 'elec_3_6_1',
					specs: [{ name: '存储', valueName: '128GB' }],
					price: 699.9,
					oldPrice: 1099.9,
					inventory: 80,
				},
				{
					id: 'elec_3_6_2',
					specs: [{ name: '存储', valueName: '256GB' }],
					price: 799.9,
					oldPrice: 1299.9,
					inventory: 60,
				},
			],
		},
		{
			name: '智能指环',
			desc: '黑科技穿戴，测睡眠、测心率，比手表更轻便',
			brand: { name: 'Oura' },
			specs: [
				{
					name: '材质',
					values: [{ name: '钛合金银色' }, { name: '钛合金黑色' }],
				},
			],
			skus: [
				{
					id: 'elec_3_7_1',
					specs: [{ name: '材质', valueName: '钛合金银色' }],
					price: 299.9,
					oldPrice: 499.9,
					inventory: 100,
				},
				{
					id: 'elec_3_7_2',
					specs: [{ name: '材质', valueName: '钛合金黑色' }],
					price: 329.9,
					oldPrice: 549.9,
					inventory: 80,
				},
			],
		},
		{
			name: '高精度智能体脂秤',
			desc: '多项身体数据精准测量，APP多维度记录身体变化',
			brand: { name: '有品' },
			specs: [
				{
					name: '功能',
					values: [{ name: '基础称重版' }, { name: '心率+体脂版' }],
				},
			],
			skus: [
				{
					id: 'elec_3_8_1',
					specs: [{ name: '功能', valueName: '基础称重版' }],
					price: 59.9,
					oldPrice: 99.9,
					inventory: 300,
				},
				{
					id: 'elec_3_8_2',
					specs: [{ name: '功能', valueName: '心率+体脂版' }],
					price: 109.9,
					oldPrice: 179.9,
					inventory: 200,
				},
			],
		},
		{
			name: '智能门锁',
			desc: '指纹、密码、NFC卡、钥匙四合一开锁，宿舍柜门/租房皆可',
			brand: { name: '鹿客' },
			specs: [
				{
					name: '类型',
					values: [{ name: '抽屉/柜门小锁' }, { name: '木门标准锁' }],
				},
			],
			skus: [
				{
					id: 'elec_3_9_1',
					specs: [{ name: '类型', valueName: '抽屉/柜门小锁' }],
					price: 89.9,
					oldPrice: 149.9,
					inventory: 200,
				},
				{
					id: 'elec_3_9_2',
					specs: [{ name: '类型', valueName: '木门标准锁' }],
					price: 399.9,
					oldPrice: 699.9,
					inventory: 80,
				},
			],
		},
	],
	影音设备: [
		{
			name: '2.0桌面音箱',
			desc: '高音清亮低音沉稳，适合听歌看剧，体积小巧不占地',
			brand: { name: '漫步者' },
			specs: [
				{
					name: '声道',
					values: [
						{ name: '2.0基础款' },
						{ name: '2.1重低音款' },
						{ name: 'RGB电竞款' },
					],
				},
			],
			skus: [
				{
					id: 'elec_4_1_1',
					specs: [{ name: '声道', valueName: '2.0基础款' }],
					price: 99.9,
					oldPrice: 169.9,
					inventory: 250,
				},
				{
					id: 'elec_4_1_2',
					specs: [{ name: '声道', valueName: '2.1重低音款' }],
					price: 159.9,
					oldPrice: 259.9,
					inventory: 200,
				},
				{
					id: 'elec_4_1_3',
					specs: [{ name: '声道', valueName: 'RGB电竞款' }],
					price: 199.9,
					oldPrice: 329.9,
					inventory: 150,
				},
			],
		},
		{
			name: '便携户外蓝牙音箱',
			desc: '防水防摔，大音量超长续航，宿舍聚会、户外野餐带得走',
			brand: { name: 'JBL' },
			specs: [
				{
					name: '大小',
					values: [{ name: '迷你随身款' }, { name: '大功率派对款' }],
				},
			],
			skus: [
				{
					id: 'elec_4_2_1',
					specs: [{ name: '大小', valueName: '迷你随身款' }],
					price: 149.9,
					oldPrice: 249.9,
					inventory: 200,
				},
				{
					id: 'elec_4_2_2',
					specs: [{ name: '大小', valueName: '大功率派对款' }],
					price: 299.9,
					oldPrice: 499.9,
					inventory: 120,
				},
			],
		},
		{
			name: '头戴式主动降噪耳机',
			desc: '沉浸式降噪，可折叠设计，适合图书馆自习降噪',
			brand: { name: '索尼' },
			specs: [
				{
					name: '连接方式',
					values: [{ name: '蓝牙版' }, { name: '蓝牙+有线双模版' }],
				},
			],
			skus: [
				{
					id: 'elec_4_3_1',
					specs: [{ name: '连接方式', valueName: '蓝牙版' }],
					price: 349.9,
					oldPrice: 599.9,
					inventory: 150,
				},
				{
					id: 'elec_4_3_2',
					specs: [{ name: '连接方式', valueName: '蓝牙+有线双模版' }],
					price: 399.9,
					oldPrice: 699.9,
					inventory: 100,
				},
			],
		},
		{
			name: 'RGB拾音氛围灯',
			desc: '音频律动模式，神光同步，打造沉浸式电竞桌面',
			brand: { name: '雷蛇' },
			specs: [
				{
					name: '形状',
					values: [{ name: '棱镜方块' }, { name: '灯带' }],
				},
			],
			skus: [
				{
					id: 'elec_4_4_1',
					specs: [{ name: '形状', valueName: '棱镜方块' }],
					price: 129.9,
					oldPrice: 199.9,
					inventory: 180,
				},
				{
					id: 'elec_4_4_2',
					specs: [{ name: '形状', valueName: '灯带' }],
					price: 89.9,
					oldPrice: 149.9,
					inventory: 200,
				},
			],
		},
		{
			name: '便携家用投影仪',
			desc: '宿舍变身私人影院，自动对焦梯形校正，接口丰富',
			brand: { name: '极米' },
			specs: [
				{
					name: '分辨率',
					values: [
						{ name: '720P基础款' },
						{ name: '1080P标准款' },
						{ name: '4K高亮款' },
					],
				},
			],
			skus: [
				{
					id: 'elec_4_5_1',
					specs: [{ name: '分辨率', valueName: '720P基础款' }],
					price: 499.9,
					oldPrice: 799.9,
					inventory: 80,
				},
				{
					id: 'elec_4_5_2',
					specs: [{ name: '分辨率', valueName: '1080P标准款' }],
					price: 799.9,
					oldPrice: 1299.9,
					inventory: 60,
				},
				{
					id: 'elec_4_5_3',
					specs: [{ name: '分辨率', valueName: '4K高亮款' }],
					price: 1399.9,
					oldPrice: 2199.9,
					inventory: 30,
				},
			],
		},
		{
			name: '直播美颜补光灯',
			desc: '冷暖双色温调节，手机直播、视频面试提升气色',
			brand: { name: '南光' },
			specs: [
				{
					name: '类型',
					values: [{ name: '三脚架圆盘灯' }, { name: '手持棒灯' }],
				},
			],
			skus: [
				{
					id: 'elec_4_6_1',
					specs: [{ name: '类型', valueName: '三脚架圆盘灯' }],
					price: 59.9,
					oldPrice: 99.9,
					inventory: 300,
				},
				{
					id: 'elec_4_6_2',
					specs: [{ name: '类型', valueName: '手持棒灯' }],
					price: 45.9,
					oldPrice: 79.9,
					inventory: 250,
				},
			],
		},
		{
			name: 'AI智能录音笔',
			desc: '录音转文字，AI自动生成会议纪要，课堂记录神器',
			brand: { name: '科大讯飞' },
			specs: [
				{
					name: '功能',
					values: [{ name: '基础录音款' }, { name: '转写旗舰款' }],
				},
			],
			skus: [
				{
					id: 'elec_4_7_1',
					specs: [{ name: '功能', valueName: '基础录音款' }],
					price: 199.9,
					oldPrice: 329.9,
					inventory: 150,
				},
				{
					id: 'elec_4_7_2',
					specs: [{ name: '功能', valueName: '转写旗舰款' }],
					price: 399.9,
					oldPrice: 699.9,
					inventory: 80,
				},
			],
		},
		{
			name: '电子纸智能相框',
			desc: '护眼墨水屏，APP远程推送照片，送同学送情侣好礼物',
			brand: { name: '海信' },
			specs: [
				{
					name: '尺寸',
					values: [{ name: '5.8英寸' }, { name: '10.3英寸' }],
				},
			],
			skus: [
				{
					id: 'elec_4_8_1',
					specs: [{ name: '尺寸', valueName: '5.8英寸' }],
					price: 399.9,
					oldPrice: 599.9,
					inventory: 100,
				},
				{
					id: 'elec_4_8_2',
					specs: [{ name: '尺寸', valueName: '10.3英寸' }],
					price: 699.9,
					oldPrice: 1099.9,
					inventory: 60,
				},
			],
		},
		{
			name: '无线K歌麦克风',
			desc: '内置混响音效，连接手机随时K歌，宿舍娱乐消遣',
			brand: { name: '唱吧' },
			specs: [
				{
					name: '套餐',
					values: [{ name: '单麦克风' }, { name: '双麦合唱套装' }],
				},
			],
			skus: [
				{
					id: 'elec_4_9_1',
					specs: [{ name: '套餐', valueName: '单麦克风' }],
					price: 69.9,
					oldPrice: 119.9,
					inventory: 250,
				},
				{
					id: 'elec_4_9_2',
					specs: [{ name: '套餐', valueName: '双麦合唱套装' }],
					price: 119.9,
					oldPrice: 199.9,
					inventory: 200,
				},
			],
		},
	],
};
