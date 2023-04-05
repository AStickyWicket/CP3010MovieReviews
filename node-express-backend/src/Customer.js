import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const customerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    movie: {
        type: String,
        required: [true, 'Movie is required'],
    },
    email: {
        type: String,
        required: [true,'Email is required'],
    }
})

const Customer = model('Info', customerSchema);
export default Customer;