import type { GoodsDataMap } from '../../types.js';

export const deliveryGoods: GoodsDataMap = {
	快递代取: [
		{
			name: '校内快递代取',
			desc: '帮您到校内快递点取件并送到宿舍楼下，支持菜鸟、丰巢等',
			brand: { name: '校园跑腿王' },
			specs: [
				{
					name: '服务类型',
					values: [
						{ name: '普通代取' },
						{ name: '加急代取' },
						{ name: '预约代取' },
					],
				},
			],
			skus: [
				{
					id: 'delivery_1_1_1',
					specs: [{ name: '服务类型', valueName: '普通代取' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_1_1_2',
					specs: [{ name: '服务类型', valueName: '加急代取' }],
					price: 5,
					oldPrice: 8,
					inventory: 999,
				},
				{
					id: 'delivery_1_1_3',
					specs: [{ name: '服务类型', valueName: '预约代取' }],
					price: 4,
					oldPrice: 6,
					inventory: 999,
				},
			],
		},
		{
			name: '菜鸟驿站代取',
			desc: '专业代取菜鸟驿站包裹，当天取件当天送达',
			brand: { name: '校园跑腿王' },
			specs: [
				{
					name: '距离',
					values: [{ name: '近距离' }, { name: '远距离' }],
				},
			],
			skus: [
				{
					id: 'delivery_1_2_1',
					specs: [{ name: '距离', valueName: '近距离' }],
					price: 2,
					oldPrice: 4,
					inventory: 999,
				},
				{
					id: 'delivery_1_2_2',
					specs: [{ name: '距离', valueName: '远距离' }],
					price: 4,
					oldPrice: 6,
					inventory: 999,
				},
			],
		},
		{
			name: '京东快递代取',
			desc: '代取京东校园快递，支持大件及重物',
			brand: { name: '飞毛腿' },
			specs: [
				{
					name: '服务类型',
					values: [{ name: '普通代取' }, { name: '加急代取' }],
				},
			],
			skus: [
				{
					id: 'delivery_1_3_1',
					specs: [{ name: '服务类型', valueName: '普通代取' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_1_3_2',
					specs: [{ name: '服务类型', valueName: '加急代取' }],
					price: 6,
					oldPrice: 10,
					inventory: 999,
				},
			],
		},
		{
			name: '顺丰快递代取',
			desc: '代取顺丰快递点包裹，安全可靠',
			brand: { name: '飞毛腿' },
			specs: [
				{
					name: '服务类型',
					values: [{ name: '普通代取' }, { name: '加急代取' }],
				},
			],
			skus: [
				{
					id: 'delivery_1_4_1',
					specs: [{ name: '服务类型', valueName: '普通代取' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_1_4_2',
					specs: [{ name: '服务类型', valueName: '加急代取' }],
					price: 6,
					oldPrice: 10,
					inventory: 999,
				},
			],
		},
		{
			name: '大件快递代取',
			desc: '代取大件快递，如行李箱、家电等，提供手推车服务',
			brand: { name: '闪电侠' },
			specs: [
				{
					name: '物品大小',
					values: [
						{ name: '小件(5kg以内)' },
						{ name: '中件(5-15kg)' },
						{ name: '大件(15kg以上)' },
					],
				},
			],
			skus: [
				{
					id: 'delivery_1_5_1',
					specs: [{ name: '物品大小', valueName: '小件(5kg以内)' }],
					price: 3,
					oldPrice: 5,
					inventory: 500,
				},
				{
					id: 'delivery_1_5_2',
					specs: [{ name: '物品大小', valueName: '中件(5-15kg)' }],
					price: 8,
					oldPrice: 12,
					inventory: 300,
				},
				{
					id: 'delivery_1_5_3',
					specs: [{ name: '物品大小', valueName: '大件(15kg以上)' }],
					price: 15,
					oldPrice: 20,
					inventory: 200,
				},
			],
		},
		{
			name: '多件快递代取',
			desc: '一次帮你取多个快递，打包送到宿舍',
			brand: { name: '闪电侠' },
			specs: [
				{
					name: '件数',
					values: [
						{ name: '1-2件' },
						{ name: '3-5件' },
						{ name: '6件以上' },
					],
				},
			],
			skus: [
				{
					id: 'delivery_1_6_1',
					specs: [{ name: '件数', valueName: '1-2件' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_1_6_2',
					specs: [{ name: '件数', valueName: '3-5件' }],
					price: 6,
					oldPrice: 10,
					inventory: 500,
				},
				{
					id: 'delivery_1_6_3',
					specs: [{ name: '件数', valueName: '6件以上' }],
					price: 10,
					oldPrice: 15,
					inventory: 300,
				},
			],
		},
		{
			name: '夜间快递代取',
			desc: '晚间时段代取快递服务，21点后也可下单',
			brand: { name: '夜猫跑腿' },
			specs: [
				{
					name: '时段',
					values: [{ name: '21:00-23:00' }, { name: '23:00后' }],
				},
			],
			skus: [
				{
					id: 'delivery_1_7_1',
					specs: [{ name: '时段', valueName: '21:00-23:00' }],
					price: 5,
					oldPrice: 8,
					inventory: 500,
				},
				{
					id: 'delivery_1_7_2',
					specs: [{ name: '时段', valueName: '23:00后' }],
					price: 8,
					oldPrice: 12,
					inventory: 300,
				},
			],
		},
		{
			name: '雨天快递代取',
			desc: '下雨天不用出门，帮你取快递送到楼下',
			brand: { name: '夜猫跑腿' },
			specs: [
				{
					name: '距离',
					values: [{ name: '近距离' }, { name: '远距离' }],
				},
			],
			skus: [
				{
					id: 'delivery_1_8_1',
					specs: [{ name: '距离', valueName: '近距离' }],
					price: 5,
					oldPrice: 8,
					inventory: 500,
				},
				{
					id: 'delivery_1_8_2',
					specs: [{ name: '距离', valueName: '远距离' }],
					price: 8,
					oldPrice: 12,
					inventory: 300,
				},
			],
		},
		{
			name: '快递代取月卡',
			desc: '包月代取服务，不限次数，每月最多30次',
			brand: { name: '校园跑腿王' },
			specs: [
				{
					name: '套餐',
					values: [
						{ name: '基础月卡(10次)' },
						{ name: '畅享月卡(30次)' },
					],
				},
			],
			skus: [
				{
					id: 'delivery_1_9_1',
					specs: [{ name: '套餐', valueName: '基础月卡(10次)' }],
					price: 20,
					oldPrice: 30,
					inventory: 200,
				},
				{
					id: 'delivery_1_9_2',
					specs: [{ name: '套餐', valueName: '畅享月卡(30次)' }],
					price: 45,
					oldPrice: 60,
					inventory: 100,
				},
			],
		},
	],
	外卖代买: [
		{
			name: '食堂外卖代取',
			desc: '帮你去食堂打饭并送到宿舍，不用排队等候',
			brand: { name: '吃货帮' },
			specs: [
				{
					name: '距离',
					values: [{ name: '近食堂' }, { name: '远食堂' }],
				},
			],
			skus: [
				{
					id: 'delivery_2_1_1',
					specs: [{ name: '距离', valueName: '近食堂' }],
					price: 2,
					oldPrice: 4,
					inventory: 999,
				},
				{
					id: 'delivery_2_1_2',
					specs: [{ name: '距离', valueName: '远食堂' }],
					price: 4,
					oldPrice: 6,
					inventory: 999,
				},
			],
		},
		{
			name: '校外外卖代取',
			desc: '帮你去校门口取外卖送到宿舍楼下',
			brand: { name: '吃货帮' },
			specs: [
				{
					name: '取件点',
					values: [{ name: '校内取餐柜' }, { name: '校门口' }],
				},
			],
			skus: [
				{
					id: 'delivery_2_2_1',
					specs: [{ name: '取件点', valueName: '校内取餐柜' }],
					price: 2,
					oldPrice: 4,
					inventory: 999,
				},
				{
					id: 'delivery_2_2_2',
					specs: [{ name: '取件点', valueName: '校门口' }],
					price: 4,
					oldPrice: 6,
					inventory: 999,
				},
			],
		},
		{
			name: '奶茶饮品代买',
			desc: '帮你去校内或周边奶茶店购买饮品',
			brand: { name: '外卖小哥' },
			specs: [
				{
					name: '数量',
					values: [{ name: '1-2杯' }, { name: '3-5杯' }],
				},
			],
			skus: [
				{
					id: 'delivery_2_3_1',
					specs: [{ name: '数量', valueName: '1-2杯' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_2_3_2',
					specs: [{ name: '数量', valueName: '3-5杯' }],
					price: 5,
					oldPrice: 8,
					inventory: 500,
				},
			],
		},
		{
			name: '水果代买',
			desc: '帮你去水果店代买新鲜水果，可指定品种',
			brand: { name: '外卖小哥' },
			specs: [
				{
					name: '重量',
					values: [{ name: '2斤以内' }, { name: '2-5斤' }],
				},
			],
			skus: [
				{
					id: 'delivery_2_4_1',
					specs: [{ name: '重量', valueName: '2斤以内' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_2_4_2',
					specs: [{ name: '重量', valueName: '2-5斤' }],
					price: 5,
					oldPrice: 8,
					inventory: 500,
				},
			],
		},
		{
			name: '药品代买',
			desc: '帮你去药店代买常用药品，感冒药、创可贴等',
			brand: { name: '饭来张口' },
			specs: [
				{
					name: '距离',
					values: [{ name: '校内药店' }, { name: '校外药店' }],
				},
			],
			skus: [
				{
					id: 'delivery_2_5_1',
					specs: [{ name: '距离', valueName: '校内药店' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_2_5_2',
					specs: [{ name: '距离', valueName: '校外药店' }],
					price: 6,
					oldPrice: 10,
					inventory: 500,
				},
			],
		},
		{
			name: '夜宵代买',
			desc: '深夜饿了？帮你买烧烤、泡面、炸鸡等夜宵',
			brand: { name: '饭来张口' },
			specs: [
				{
					name: '时段',
					values: [{ name: '22:00前' }, { name: '22:00后' }],
				},
			],
			skus: [
				{
					id: 'delivery_2_6_1',
					specs: [{ name: '时段', valueName: '22:00前' }],
					price: 4,
					oldPrice: 6,
					inventory: 999,
				},
				{
					id: 'delivery_2_6_2',
					specs: [{ name: '时段', valueName: '22:00后' }],
					price: 7,
					oldPrice: 10,
					inventory: 500,
				},
			],
		},
		{
			name: '日用品代买',
			desc: '帮你去超市代买纸巾、洗衣液等日用品',
			brand: { name: '吃货帮' },
			specs: [
				{
					name: '物品大小',
					values: [{ name: '小件' }, { name: '大件' }],
				},
			],
			skus: [
				{
					id: 'delivery_2_7_1',
					specs: [{ name: '物品大小', valueName: '小件' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_2_7_2',
					specs: [{ name: '物品大小', valueName: '大件' }],
					price: 6,
					oldPrice: 10,
					inventory: 500,
				},
			],
		},
		{
			name: '多家店代买',
			desc: '需要买多家店的东西？一次性帮你搞定',
			brand: { name: '外卖小哥' },
			specs: [
				{
					name: '店铺数',
					values: [{ name: '1-2家' }, { name: '3家以上' }],
				},
			],
			skus: [
				{
					id: 'delivery_2_8_1',
					specs: [{ name: '店铺数', valueName: '1-2家' }],
					price: 5,
					oldPrice: 8,
					inventory: 999,
				},
				{
					id: 'delivery_2_8_2',
					specs: [{ name: '店铺数', valueName: '3家以上' }],
					price: 10,
					oldPrice: 15,
					inventory: 300,
				},
			],
		},
		{
			name: '超市购物代买',
			desc: '帮你去校园超市或便利店代购商品',
			brand: { name: '饭来张口' },
			specs: [
				{
					name: '购物量',
					values: [
						{ name: '少量(3件以内)' },
						{ name: '大量(3件以上)' },
					],
				},
			],
			skus: [
				{
					id: 'delivery_2_9_1',
					specs: [{ name: '购物量', valueName: '少量(3件以内)' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_2_9_2',
					specs: [{ name: '购物量', valueName: '大量(3件以上)' }],
					price: 6,
					oldPrice: 10,
					inventory: 500,
				},
			],
		},
	],
	打印代送: [
		{
			name: '黑白打印代送',
			desc: '帮您打印黑白文件并送到宿舍，清晰度高',
			brand: { name: '快印站' },
			specs: [
				{
					name: '页数',
					values: [
						{ name: '1-10页' },
						{ name: '11-50页' },
						{ name: '50页以上' },
					],
				},
			],
			skus: [
				{
					id: 'delivery_3_1_1',
					specs: [{ name: '页数', valueName: '1-10页' }],
					price: 2,
					oldPrice: 4,
					inventory: 999,
				},
				{
					id: 'delivery_3_1_2',
					specs: [{ name: '页数', valueName: '11-50页' }],
					price: 5,
					oldPrice: 8,
					inventory: 999,
				},
				{
					id: 'delivery_3_1_3',
					specs: [{ name: '页数', valueName: '50页以上' }],
					price: 10,
					oldPrice: 15,
					inventory: 500,
				},
			],
		},
		{
			name: '彩色打印代送',
			desc: '高清彩色打印，适合PPT、海报等彩色文件',
			brand: { name: '快印站' },
			specs: [
				{
					name: '页数',
					values: [{ name: '1-10页' }, { name: '11-50页' }],
				},
			],
			skus: [
				{
					id: 'delivery_3_2_1',
					specs: [{ name: '页数', valueName: '1-10页' }],
					price: 5,
					oldPrice: 8,
					inventory: 999,
				},
				{
					id: 'delivery_3_2_2',
					specs: [{ name: '页数', valueName: '11-50页' }],
					price: 12,
					oldPrice: 18,
					inventory: 500,
				},
			],
		},
		{
			name: '复印代送',
			desc: '证件、资料复印服务，支持缩放复印',
			brand: { name: '学霸打印' },
			specs: [
				{
					name: '份数',
					values: [{ name: '1-5份' }, { name: '6-20份' }],
				},
			],
			skus: [
				{
					id: 'delivery_3_3_1',
					specs: [{ name: '份数', valueName: '1-5份' }],
					price: 2,
					oldPrice: 4,
					inventory: 999,
				},
				{
					id: 'delivery_3_3_2',
					specs: [{ name: '份数', valueName: '6-20份' }],
					price: 5,
					oldPrice: 8,
					inventory: 500,
				},
			],
		},
		{
			name: '装订代送',
			desc: '打印后装订服务，支持订书钉装订和胶装',
			brand: { name: '学霸打印' },
			specs: [
				{
					name: '装订方式',
					values: [{ name: '订书钉装订' }, { name: '胶装' }],
				},
			],
			skus: [
				{
					id: 'delivery_3_4_1',
					specs: [{ name: '装订方式', valueName: '订书钉装订' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_3_4_2',
					specs: [{ name: '装订方式', valueName: '胶装' }],
					price: 8,
					oldPrice: 12,
					inventory: 500,
				},
			],
		},
		{
			name: '证件照代送',
			desc: '帮您打印证件照，支持一寸、二寸多种规格',
			brand: { name: '文印社' },
			specs: [
				{ name: '尺寸', values: [{ name: '一寸' }, { name: '二寸' }] },
			],
			skus: [
				{
					id: 'delivery_3_5_1',
					specs: [{ name: '尺寸', valueName: '一寸' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_3_5_2',
					specs: [{ name: '尺寸', valueName: '二寸' }],
					price: 5,
					oldPrice: 8,
					inventory: 999,
				},
			],
		},
		{
			name: '海报打印代送',
			desc: '高清海报打印，适合社团活动、课程展示',
			brand: { name: '文印社' },
			specs: [{ name: '尺寸', values: [{ name: 'A4' }, { name: 'A3' }] }],
			skus: [
				{
					id: 'delivery_3_6_1',
					specs: [{ name: '尺寸', valueName: 'A4' }],
					price: 5,
					oldPrice: 8,
					inventory: 999,
				},
				{
					id: 'delivery_3_6_2',
					specs: [{ name: '尺寸', valueName: 'A3' }],
					price: 10,
					oldPrice: 15,
					inventory: 500,
				},
			],
		},
		{
			name: '论文打印代送',
			desc: '毕业论文打印装订一站式服务，支持查重格式调整',
			brand: { name: '快印站' },
			specs: [
				{
					name: '页数',
					values: [{ name: '30页以内' }, { name: '30页以上' }],
				},
			],
			skus: [
				{
					id: 'delivery_3_7_1',
					specs: [{ name: '页数', valueName: '30页以内' }],
					price: 8,
					oldPrice: 12,
					inventory: 999,
				},
				{
					id: 'delivery_3_7_2',
					specs: [{ name: '页数', valueName: '30页以上' }],
					price: 15,
					oldPrice: 20,
					inventory: 500,
				},
			],
		},
		{
			name: '资料打印代送',
			desc: '课堂资料、复习资料打印并送到宿舍',
			brand: { name: '学霸打印' },
			specs: [
				{ name: '颜色', values: [{ name: '黑白' }, { name: '彩色' }] },
			],
			skus: [
				{
					id: 'delivery_3_8_1',
					specs: [{ name: '颜色', valueName: '黑白' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_3_8_2',
					specs: [{ name: '颜色', valueName: '彩色' }],
					price: 8,
					oldPrice: 12,
					inventory: 500,
				},
			],
		},
		{
			name: '加急打印代送',
			desc: '1小时内加急打印并送达，适合临时需求',
			brand: { name: '文印社' },
			specs: [
				{
					name: '加急程度',
					values: [{ name: '30分钟内' }, { name: '1小时内' }],
				},
			],
			skus: [
				{
					id: 'delivery_3_9_1',
					specs: [{ name: '加急程度', valueName: '30分钟内' }],
					price: 10,
					oldPrice: 15,
					inventory: 300,
				},
				{
					id: 'delivery_3_9_2',
					specs: [{ name: '加急程度', valueName: '1小时内' }],
					price: 6,
					oldPrice: 10,
					inventory: 500,
				},
			],
		},
	],
	文件代交: [
		{
			name: '作业代交',
			desc: '帮您把作业交到老师办公室或指定地点',
			brand: { name: '办事通' },
			specs: [
				{ name: '地点', values: [{ name: '同楼' }, { name: '跨楼' }] },
			],
			skus: [
				{
					id: 'delivery_4_1_1',
					specs: [{ name: '地点', valueName: '同楼' }],
					price: 2,
					oldPrice: 4,
					inventory: 999,
				},
				{
					id: 'delivery_4_1_2',
					specs: [{ name: '地点', valueName: '跨楼' }],
					price: 4,
					oldPrice: 6,
					inventory: 999,
				},
			],
		},
		{
			name: '申请表代交',
			desc: '帮您提交各类申请表到院办或相关部门',
			brand: { name: '办事通' },
			specs: [
				{
					name: '部门',
					values: [{ name: '院办' }, { name: '教务处' }],
				},
			],
			skus: [
				{
					id: 'delivery_4_2_1',
					specs: [{ name: '部门', valueName: '院办' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_4_2_2',
					specs: [{ name: '部门', valueName: '教务处' }],
					price: 5,
					oldPrice: 8,
					inventory: 999,
				},
			],
		},
		{
			name: '报名表代交',
			desc: '帮您提交社团、比赛等报名表到指定地点',
			brand: { name: '跑腿达人' },
			specs: [
				{ name: '地点', values: [{ name: '校内' }, { name: '校外' }] },
			],
			skus: [
				{
					id: 'delivery_4_3_1',
					specs: [{ name: '地点', valueName: '校内' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_4_3_2',
					specs: [{ name: '地点', valueName: '校外' }],
					price: 8,
					oldPrice: 12,
					inventory: 500,
				},
			],
		},
		{
			name: '材料代交',
			desc: '帮您提交各类纸质材料到指定办公室',
			brand: { name: '跑腿达人' },
			specs: [
				{
					name: '距离',
					values: [{ name: '近距离' }, { name: '远距离' }],
				},
			],
			skus: [
				{
					id: 'delivery_4_4_1',
					specs: [{ name: '距离', valueName: '近距离' }],
					price: 3,
					oldPrice: 5,
					inventory: 999,
				},
				{
					id: 'delivery_4_4_2',
					specs: [{ name: '距离', valueName: '远距离' }],
					price: 5,
					oldPrice: 8,
					inventory: 999,
				},
			],
		},
		{
			name: '表格代填代交',
			desc: '帮您填写简单表格并提交，省时省力',
			brand: { name: '万能跑腿' },
			specs: [
				{
					name: '复杂度',
					values: [{ name: '简单表格' }, { name: '复杂表格' }],
				},
			],
			skus: [
				{
					id: 'delivery_4_5_1',
					specs: [{ name: '复杂度', valueName: '简单表格' }],
					price: 5,
					oldPrice: 8,
					inventory: 999,
				},
				{
					id: 'delivery_4_5_2',
					specs: [{ name: '复杂度', valueName: '复杂表格' }],
					price: 10,
					oldPrice: 15,
					inventory: 300,
				},
			],
		},
		{
			name: '证明代开代送',
			desc: '帮您去相关部门开具在读证明、成绩单等',
			brand: { name: '万能跑腿' },
			specs: [
				{
					name: '类型',
					values: [{ name: '在读证明' }, { name: '成绩单' }],
				},
			],
			skus: [
				{
					id: 'delivery_4_6_1',
					specs: [{ name: '类型', valueName: '在读证明' }],
					price: 5,
					oldPrice: 8,
					inventory: 999,
				},
				{
					id: 'delivery_4_6_2',
					specs: [{ name: '类型', valueName: '成绩单' }],
					price: 8,
					oldPrice: 12,
					inventory: 500,
				},
			],
		},
		{
			name: '图书代还',
			desc: '帮您把借阅的图书归还到图书馆',
			brand: { name: '办事通' },
			specs: [
				{
					name: '地点',
					values: [{ name: '本馆' }, { name: '跨校区' }],
				},
			],
			skus: [
				{
					id: 'delivery_4_7_1',
					specs: [{ name: '地点', valueName: '本馆' }],
					price: 2,
					oldPrice: 4,
					inventory: 999,
				},
				{
					id: 'delivery_4_7_2',
					specs: [{ name: '地点', valueName: '跨校区' }],
					price: 8,
					oldPrice: 12,
					inventory: 300,
				},
			],
		},
		{
			name: '快递代寄',
			desc: '帮您打包并寄出快递，支持多家快递公司',
			brand: { name: '跑腿达人' },
			specs: [
				{
					name: '快递类型',
					values: [{ name: '普通寄递' }, { name: '加急寄递' }],
				},
			],
			skus: [
				{
					id: 'delivery_4_8_1',
					specs: [{ name: '快递类型', valueName: '普通寄递' }],
					price: 5,
					oldPrice: 8,
					inventory: 999,
				},
				{
					id: 'delivery_4_8_2',
					specs: [{ name: '快递类型', valueName: '加急寄递' }],
					price: 10,
					oldPrice: 15,
					inventory: 500,
				},
			],
		},
		{
			name: '多份文件代交',
			desc: '需要交多个地方的文件，一次性帮你搞定',
			brand: { name: '万能跑腿' },
			specs: [
				{
					name: '份数',
					values: [{ name: '1-3份' }, { name: '4份以上' }],
				},
			],
			skus: [
				{
					id: 'delivery_4_9_1',
					specs: [{ name: '份数', valueName: '1-3份' }],
					price: 5,
					oldPrice: 8,
					inventory: 999,
				},
				{
					id: 'delivery_4_9_2',
					specs: [{ name: '份数', valueName: '4份以上' }],
					price: 10,
					oldPrice: 15,
					inventory: 300,
				},
			],
		},
	],
};
