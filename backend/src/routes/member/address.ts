import express from 'express';
import { Address } from '../../models/Address.js';

const router = express.Router();

const phoneReg = /^1[3-9]\d{9}$/;

// 获取地址列表
router.get('/', async (req, res) => {
	try {
		const userId = req.userId!;
		const list = await Address.find({ userId }).sort({ isDefault: -1, createdAt: -1 }).lean();
		res.json({ code: '1', msg: '操作成功', result: list });
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 新增地址
router.post('/', async (req, res) => {
	try {
		const userId = req.userId!;
		const {
			receiver,
			contact,
			provinceCode = '',
			cityCode = '',
			countyCode = '',
			address,
			fullLocation = '',
			isDefault = 0,
		} = req.body;

		if (!receiver || !contact || !address) {
			return res.status(400).json({ code: '400', msg: '收货人/手机号/详细地址不能为空' });
		}
		if (!phoneReg.test(contact)) {
			return res.status(400).json({ code: '400', msg: '手机号格式不正确' });
		}

		if (Number(isDefault) === 1) {
			await Address.updateMany({ userId }, { $set: { isDefault: 0 } });
		}

		const created = await Address.create({
			userId,
			receiver,
			contact,
			provinceCode,
			cityCode,
			countyCode,
			address,
			fullLocation,
			isDefault: Number(isDefault) === 1 ? 1 : 0,
		});

		res.json({ code: '1', msg: '新增成功', result: created });
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 编辑地址
router.put('/:id', async (req, res) => {
	try {
		const userId = req.userId!;
		const { id } = req.params;
		const {
			receiver,
			contact,
			provinceCode = '',
			cityCode = '',
			countyCode = '',
			address,
			fullLocation = '',
			isDefault = 0,
		} = req.body;

		if (!receiver || !contact || !address) {
			return res.status(400).json({ code: '400', msg: '收货人/手机号/详细地址不能为空' });
		}
		if (!phoneReg.test(contact)) {
			return res.status(400).json({ code: '400', msg: '手机号格式不正确' });
		}

		const target = await Address.findOne({ _id: id, userId });
		if (!target) {
			return res.status(404).json({ code: '404', msg: '地址不存在' });
		}

		if (Number(isDefault) === 1) {
			await Address.updateMany({ userId }, { $set: { isDefault: 0 } });
		}

		target.receiver = receiver;
		target.contact = contact;
		target.provinceCode = provinceCode;
		target.cityCode = cityCode;
		target.countyCode = countyCode;
		target.address = address;
		target.fullLocation = fullLocation;
		target.isDefault = Number(isDefault) === 1 ? 1 : 0;
		await target.save();

		res.json({ code: '1', msg: '更新成功', result: target });
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 删除地址
router.delete('/:id', async (req, res) => {
	try {
		const userId = req.userId!;
		const { id } = req.params;
		const deleted = await Address.findOneAndDelete({ _id: id, userId });
		if (!deleted) {
			return res.status(404).json({ code: '404', msg: '地址不存在' });
		}

		// 若删除的是默认地址，自动将最新一条置为默认
		if (deleted.isDefault === 1) {
			const fallback = await Address.findOne({ userId }).sort({ createdAt: -1 });
			if (fallback) {
				fallback.isDefault = 1;
				await fallback.save();
			}
		}

		res.json({ code: '1', msg: '删除成功', result: null });
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

// 设为默认地址
router.put('/:id/default', async (req, res) => {
	try {
		const userId = req.userId!;
		const { id } = req.params;
		const exists = await Address.findOne({ _id: id, userId });
		if (!exists) {
			return res.status(404).json({ code: '404', msg: '地址不存在' });
		}

		await Address.updateMany({ userId }, { $set: { isDefault: 0 } });
		await Address.updateOne({ _id: id, userId }, { $set: { isDefault: 1 } });
		res.json({ code: '1', msg: '设置成功', result: null });
	} catch (error) {
		res.status(500).json({ code: '500', msg: '服务器错误' });
	}
});

export default router;
