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
		const basePrice = randomFloat(priceRange[0], priceRange[1]);
		skuList.push({
			id: `sku_${Date.now()}_${randomNum(1000, 9999)}_${idx}`,
			inventory: randomNum(10, 500),
			price: basePrice,
			oldPrice: Number((basePrice * randomFloat(1.2, 1.5)).toFixed(2)),
			specs: combo.map((c: any) => ({
				name: c.specName,
				valueName: c.name,
			})),
		});
	});

	return skuList;
}
