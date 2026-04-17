import mongoose from "mongoose";
import dotenv from "dotenv";
import { loadCategories, loadBanners, loadGoods } from "./loader.js";

dotenv.config();

const isReset = process.argv.includes("--reset");

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("\n🚀 连接数据库成功...");

    if (isReset) {
      console.log("🗑️  检测到 --reset 参数，清空旧数据...");
      await mongoose.connection.dropDatabase();
    }

    const categoryMap = await loadCategories();
    const bannerCount = await loadBanners();
    const { count, skuCount } = await loadGoods(categoryMap);

    const topCount = Object.values(categoryMap).filter(
      (v, i, arr) => arr.findIndex((item) => item.topId === v.topId) === i,
    ).length;
    const subCount = Object.keys(categoryMap).length;

    console.log(`\n✅ 数据初始化彻底完成！`);
    console.log(`📊 数据统计：`);
    console.log(`   - 轮播图: ${bannerCount} 张`);
    console.log(`   - 一级分类: ${topCount} 个`);
    console.log(`   - 二级分类: ${subCount} 个`);
    console.log(`   - 商品总数: ${count} 个`);
    console.log(`   - SKU总数: ${skuCount} 个`);
  } catch (error) {
    console.error("❌ 数据初始化失败:", error);
  } finally {
    await mongoose.disconnect();
  }
}

main();
