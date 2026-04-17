# Seed 数据填充指南

本文档帮助开发者快速理解和使用 seed 文件夹进行数据库填充。

---

## 一、快速开始

```bash
# 进入后端目录
cd client/campus-on-sale/backend

# 运行 seed（保留已有数据，追加新数据）
npm run seed

# 运行 seed（清空数据库后重新填充）
npm run seed:reset
```

---

## 二、文件结构

```
backend/src/seed/
├── index.ts          # 入口文件，执行 seed 命令
├── loader.ts         # 数据加载逻辑，将数据写入数据库
├── types.ts          # TypeScript 类型定义
└── data/
    ├── categories.ts # 分类数据（一级分类 + 二级分类）
    ├── banners.ts    # 轮播图数据
    ├── index.ts      # 数据导出入口
    └── goods/
        ├── index.ts        # 合并所有商品数据
        ├── dormitory.ts    # 宿舍百货（280个商品）
        ├── snacks.ts       # 校园零食（63个商品）
        ├── books.ts        # 二手教材（63个商品）
        ├── delivery.ts     # 代取服务（36个商品）
        ├── rental.ts       # 数码租赁（36个商品）
        ├── recommend.ts    # 学长推荐（36个商品）
        └── electronics.ts  # 电子产品（36个商品）
```

---

## 三、核心文件说明

### 3.1 types.ts - 类型定义

定义了商品数据的 TypeScript 类型，确保数据格式正确。

```typescript
// SKU 项
export interface SkuItem {
  id: string;                                    // SKU 唯一标识
  specs: Array<{ name: string; valueName: string }>; // 规格组合
  price: number;                                 // 价格
  oldPrice: number;                              // 原价
  inventory: number;                             // 库存
}

// 商品模板
export interface GoodsTemplate {
  name: string;              // 商品名称
  desc: string;              // 商品描述
  brand: { name: string };   // 品牌
  specs: SpecDef[];          // 规格定义
  skus: SkuItem[];           // SKU 列表
  picture?: string;          // 主图 URL（可选）
  mainPictures?: string[];   // 主图列表 5张（可选）
  descPictures?: string[];   // 详情图列表 10张（可选）
}
```

### 3.2 loader.ts - 数据加载器

负责将数据写入数据库，核心函数：

| 函数 | 作用 |
|------|------|
| `loadCategories()` | 创建分类体系 |
| `loadBanners()` | 创建轮播图 |
| `loadGoods()` | 创建商品数据 |
| `buildGoodsDoc()` | 构建商品文档（支持自定义图片） |

**图片回退逻辑**：如果商品数据中没有提供图片，会自动使用 picsum.photos 占位图。

### 3.3 index.ts - 入口文件

执行流程：
1. 连接数据库
2. 检查 `--reset` 参数决定是否清空数据库
3. 依次加载分类、轮播图、商品数据
4. 断开数据库连接

---

## 四、如何添加/修改商品数据

### 4.1 添加新商品

在对应的商品文件中添加商品数据，例如 `dormitory.ts`：

```typescript
export const dormitoryGoods: GoodsDataMap = {
  床上用品: [
    {
      name: "学生宿舍床帘遮光帘",
      desc: "适合90x190cm宿舍床铺，遮光率95%",
      brand: { name: "睡得香" },
      specs: [
        {
          name: "颜色",
          values: [{ name: "星空蓝" }, { name: "樱花粉" }],
        },
        {
          name: "尺寸",
          values: [{ name: "单人(90x190)" }, { name: "加长(90x200)" }],
        },
      ],
      skus: [
        {
          id: "sku_bed_1_1",
          specs: [
            { name: "颜色", valueName: "星空蓝" },
            { name: "尺寸", valueName: "单人(90x190)" },
          ],
          price: 49.9,
          oldPrice: 79.9,
          inventory: 100,
        },
        // ... 更多 SKU
      ],
    },
  ],
};
```

### 4.2 使用自定义图片

在商品数据中添加可选的图片字段：

```typescript
{
  name: "学生宿舍床帘遮光帘",
  desc: "...",
  brand: { name: "睡得香" },
  specs: [...],
  skus: [...],
  // 自定义图片（可选）
  picture: "https://your-cdn.com/bed_curtain_main.jpg",
  mainPictures: [
    "https://your-cdn.com/bed_curtain_1.jpg",
    "https://your-cdn.com/bed_curtain_2.jpg",
    "https://your-cdn.com/bed_curtain_3.jpg",
    "https://your-cdn.com/bed_curtain_4.jpg",
    "https://your-cdn.com/bed_curtain_5.jpg",
  ],
  descPictures: [
    "https://your-cdn.com/bed_curtain_desc_1.jpg",
    // ... 共 10 张详情图
  ],
}
```

**注意**：如果不提供图片字段，会自动使用 picsum.photos 占位图。

---

## 五、数据规范

### 5.1 SKU 数量要求

| 分类 | SKU 数量 |
|------|----------|
| 宿舍百货 | 4-6 个 |
| 其他分类 | 2-4 个 |

### 5.2 价格范围参考

| 分类 | 价格范围 |
|------|----------|
| 宿舍百货 | ¥10-100 |
| 校园零食 | ¥5-50 |
| 二手教材 | ¥10-80 |
| 代取服务 | ¥2-20 |
| 数码租赁 | ¥10-200/天 |
| 学长推荐 | ¥10-200 |
| 电子产品 | ¥50-1000 |

### 5.3 SKU ID 命名规范

```
格式：{分类缩写}_{商品序号}_{SKU序号}

示例：
- sku_bed_1_1  → 床上用品_第1个商品_第1个SKU
- snack_2_3_1   → 零食_第2个商品_第3个SKU
```

---

## 六、分类对照表

| 一级分类 | 二级分类 | 商品文件 |
|----------|----------|----------|
| 宿舍百货 | 床上用品、洗漱用品、收纳整理、清洁用品、文具用品、装饰用品、生活用品 | dormitory.ts |
| 校园零食 | 膨化食品、饼干糕点、饮料饮品、坚果炒货、方便速食、糖果巧克力、水果零食 | snacks.ts |
| 二手教材 | 专业课教材、公共课教材、辅导资料、考试真题、参考书籍、外文原版、工具书 | books.ts |
| 代取服务 | 快递代取、外卖代买、打印代送、文件代交 | delivery.ts |
| 数码租赁 | 笔记本租赁、相机租赁、平板租赁、配件租赁 | rental.ts |
| 学长推荐 | 学习好物、生活神器、备考干货、校园攻略 | recommend.ts |
| 电子产品 | 手机配件、电脑外设、智能穿戴、影音设备 | electronics.ts |

---

## 七、常见问题

### Q1: 如何只更新部分商品？

直接修改对应的商品文件，然后运行 `npm run seed:reset` 重新填充。

### Q2: 如何替换占位图为真实图片？

在商品数据中添加 `picture`、`mainPictures`、`descPictures` 字段，提供真实图片 URL。

### Q3: 修改 types.ts 会影响数据库吗？

不会。types.ts 只影响 TypeScript 编译时的类型检查，不影响数据库结构。

### Q4: 如何查看填充结果？

```bash
# 连接 MongoDB 查看数据
mongosh
use campus-on-sale
db.goods.countDocuments()
db.categories.countDocuments()
```

---

## 八、数据统计

| 数据类型 | 数量 |
|----------|------|
| 一级分类 | 7 个 |
| 二级分类 | 37 个 |
| 轮播图 | 7 张 |
| 商品总数 | 550 个 |
| SKU 总数 | ~2000 个 |
