import mongoose from 'mongoose';

const Quantums = new mongoose.Schema({
    Title: {
		type: String,
		required: true,
	}
})

export default mongoose.model('Quantums',Quantums);