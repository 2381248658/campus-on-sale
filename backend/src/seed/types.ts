import type { Types } from 'mongoose';

export interface SkuItem {
	id: string;
	specs: Array<{ name: string; valueName: string }>;
	price: number;
	oldPrice: number;
	inventory: number;
}

export interface SpecValue {
	name: string;
	picture?: string;
	desc?: string;
}

export interface SpecDef {
	name: string;
	values: SpecValue[];
}

export interface GoodsTemplate {
	name: string;
	desc: string;
	brand: { name: string };
	specs: SpecDef[];
	skus: SkuItem[];
	picture?: string;
	mainPictures?: string[];
	descPictures?: string[];
}

export interface CategoryTreeItem {
	name: string;
	subtitle: string;
	subs: string[];
}

export interface GoodsDataMap {
	[subCategoryName: string]: GoodsTemplate[];
}

export interface CategoryMapItem {
	topId: Types.ObjectId;
	topName: string;
	subId: Types.ObjectId;
}

export interface CategoryMap {
	[subName: string]: CategoryMapItem;
}
