import mongoose, { Schema } from 'mongoose';

const User = new mongoose.Schema({
    Name: {
		type: String,
		required: true,
	},
	Surname: {
		type: String,
		required: true,
	},
	Patronymic: {
		type: String,
		required: true,
	},
    Email: [
        {
            type: Schema.Types.ObjectId,
			required: true,
            ref: 'Email'
        },
    ],
    Quantum:[
        {
            type: Schema.Types.ObjectId,
            require: true,
            ref: 'Quantums'
        }
    ],
    Date:{
        type: Date,
		required: true,
    }
})

export default mongoose.model('User',User);