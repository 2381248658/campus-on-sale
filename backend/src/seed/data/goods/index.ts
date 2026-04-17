import type { GoodsDataMap } from '../../types.js';
import { dormitoryGoods } from './dormitory.js';
import { snacksGoods } from './snacks.js';
import { booksGoods } from './books.js';
import { deliveryGoods } from './delivery.js';
import { rentalGoods } from './rental.js';
import { recommendGoods } from './recommend.js';
import { electronicsGoods } from './electronics.js';

export const allGoodsData: GoodsDataMap = {
	...dormitoryGoods,
	...snacksGoods,
	...booksGoods,
	...deliveryGoods,
	...rentalGoods,
	...recommendGoods,
	...electronicsGoods,
};
