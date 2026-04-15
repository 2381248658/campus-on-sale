// src/seed/banner.seed.ts
import { Banner } from '../models/Banner.js';

export async function seedBanner() {
	console.log('🎠 创建轮播图...');
	const bannerImgs = [
		'https://picsum.photos/seed/banner_summer/1240/500',
		'https://picsum.photos/seed/banner_digital/1240/500',
		'https://picsum.photos/seed/banner_books/1240/500',
		'https://picsum.photos/seed/banner_snacks/1240/500',
		'https://picsum.photos/seed/banner_sports/1240/500',
		'https://picsum.photos/seed/banner_beauty/1240/500',
		'https://picsum.photos/seed/banner_campus/1240/500',
	];
	await Banner.create(
		bannerImgs.map((img: string) => ({
			imgUrl: img,
		})),
	);
	return bannerImgs.length;
}
