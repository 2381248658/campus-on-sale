// src/seed/utils.ts

export const randomNum = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const randomFloat = (min: number, max: number) =>
	Number((Math.random() * (max - min) + min).toFixed(2));

// 辅助函数：生成复杂的 SKU 笛卡尔积
export function generateSkus(specsDef: any[], priceRange: [number, number]) {
	const skuList: any[] = [];
	const valueArrays = specsDef.map((spec: any) => spec.values);

	function cartesianProduct(
		arr: any[][],
		index: number = 0,
		current: any[] = [],
	): any[] {
		if (index === arr.length) return [current];
		const result: any[] = [];
		for (const item of arr[index]) {
			result.push(
				...cartesianProduct(arr, index + 1, [...current, item]),
			);
		}
		return result;
	}

	const combinations = cartesianProduct(valueArrays);

	combinations.forEach((combo: any, idx: number) => {
		// 🛠️ 优化：使用传入的具体分类价格区间，而不是死代码 100-5000
		const basePrice = randomFloat(priceRange[0], priceRange[1]);
		skuList.push({
			id: `sku_${Date.now()}_${randomNum(1000, 9999)}_${idx}`,
			inventory: randomNum(10, 500),
			price: basePrice,
			oldPrice:
				basePrice +
				randomFloat(priceRange[0] * 0.2, priceRange[1] * 0.3),
			specs: combo.map((c: any) => ({
				name: c.specName,
				valueName: c.name,
			})),
		});
	});

	return skuList;
}
