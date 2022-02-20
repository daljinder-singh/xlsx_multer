import mongoose from 'mongoose';
const { Schema } = mongoose;

const User = new Schema({
    FirstName: {
        required: true,
        type: String,
    },
    LastName: {
        required: true,
        type: String,
    },
    Gender: {
        required: true,
        type: String,
        enum : ['Male','Female'],
    },
    Country: {
        required: true,
        type: String,
    },
    Age: {
        required: true,
        type: Number
    }, 
    
}, { timestamps: true })
const models = mongoose.model('excelUser', User, 'excelUser' );
export default models;
