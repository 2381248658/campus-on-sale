import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI as string);
		console.log('✅ MongoDB连接成功');
	} catch (err) {
		console.error('❌ MongoDB连接失败:', err);
		process.exit(1);
	}
};

export default connectDB;
