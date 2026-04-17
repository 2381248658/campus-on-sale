import mongoose from "mongoose";
import { Category } from "../models/Category.js";
import { Goods } from "../models/Goods.js";
import { Banner } from "../models/Banner.js";
import { categoryTree, bannerUrls, allGoodsData } from "./data/index.js";
import type { CategoryMap, GoodsTemplate } from "./types.js";

let goodsCounter = 0;

export async function loadCategories(): Promise<CategoryMap> {
  console.log("📂 创建分类体系...");
  const categoryMap: CategoryMap = {};

  for (const topCat of categoryTree) {
    const topCategory = await Category.create({
      name: topCat.name,
      subtitle: topCat.subtitle,
      picture: `https://picsum.photos/seed/cat_${topCat.name}/150/150`,
    });

    for (const subName of topCat.subs) {
      const subCategory = await Category.create({
        name: subName,
        picture: `https://picsum.photos/seed/sub_${subName}/150/150`,
        parentId: topCategory._id,
      });

      categoryMap[subName] = {
        topId: topCategory._id,
        topName: topCat.name,
        subId: subCategory._id,
      };
    }
  }

  const topCount = categoryTree.length;
  const subCount = Object.keys(categoryMap).length;
  console.log(
    `✅ 分类创建完毕：${topCount} 个一级分类，${subCount} 个二级分类`,
  );
  return categoryMap;
}

export async function loadBanners(): Promise<number> {
  console.log("🎠 创建轮播图...");
  await Banner.create(bannerUrls.map((img) => ({ imgUrl: img })));
  console.log(`✅ 轮播图创建完毕：${bannerUrls.length} 张`);
  return bannerUrls.length;
}

function buildGoodsDoc(
  template: GoodsTemplate,
  categoryId: mongoose.Types.ObjectId,
  topName: string,
) {
  goodsCounter++;

  const fallbackMainPicture = `https://picsum.photos/seed/goods_${goodsCounter}/800/800`;
  const mainPicture = template.picture || fallbackMainPicture;

  const fallbackMainPictures = [
    mainPicture,
    `https://picsum.photos/seed/goods_${goodsCounter}_2/800/800`,
    `https://picsum.photos/seed/goods_${goodsCounter}_3/800/800`,
    `https://picsum.photos/seed/goods_${goodsCounter}_4/800/800`,
    `https://picsum.photos/seed/goods_${goodsCounter}_5/800/800`,
  ];

  const fallbackDescPictures = Array.from(
    { length: 10 },
    (_, idx) =>
      `https://picsum.photos/seed/detail_${goodsCounter}_${idx}/1200/800`,
  );

  return {
    name: template.name,
    desc: template.desc,
    price: template.skus[0].price,
    oldPrice: template.skus[0].oldPrice,
    picture: mainPicture,
    mainPictures: template.mainPictures || fallbackMainPictures,
    orderNum: goodsCounter,
    inventory: template.skus.reduce((acc, sku) => acc + sku.inventory, 0),
    salesCount: Math.floor(goodsCounter * 37.5),
    commentCount: Math.floor(goodsCounter * 5.2),
    collectCount: Math.floor(goodsCounter * 12.8),
    categoryId: new mongoose.Types.ObjectId(categoryId),
    brand: template.brand,
    specs: template.specs,
    skus: template.skus,
    details: {
      pictures: template.descPictures || fallbackDescPictures,
      properties: [
        {
          name: "成色",
          value: topName === "二手教材" ? "九成新" : "全新",
        },
        { name: "发货地", value: "本校区当面交易" },
      ],
    },
  };
}

export async function loadGoods(
  categoryMap: CategoryMap,
): Promise<{ count: number; skuCount: number }> {
  console.log("🛍️  开始生成商品数据...");

  const goodsToInsert: ReturnType<typeof buildGoodsDoc>[] = [];
  let totalSkus = 0;

  for (const [subName, catInfo] of Object.entries(categoryMap)) {
    const templates = allGoodsData[subName];
    if (!templates || templates.length === 0) {
      console.log(`⚠️  分类「${subName}」暂无商品数据，跳过`);
      continue;
    }

    for (const template of templates) {
      const doc = buildGoodsDoc(template, catInfo.subId, catInfo.topName);
      goodsToInsert.push(doc);
      totalSkus += template.skus.length;
    }
  }

  if (goodsToInsert.length > 0) {
    await Goods.insertMany(goodsToInsert);
  }

  console.log(
    `✅ 商品生成完毕：${goodsToInsert.length} 个商品，${totalSkus} 个 SKU`,
  );
  return { count: goodsToInsert.length, skuCount: totalSkus };
}
