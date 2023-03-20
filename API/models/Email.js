import mongoose from 'mongoose';

const Email = new mongoose.Schema({
    Title: {
		type: String,
		required: true,
	}
})

export default mongoose.model('Email',Email);