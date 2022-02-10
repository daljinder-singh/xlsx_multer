import mongoose from 'mongoose';
const connectionString = 'mongodb://localhost:27017/xlsx';

const connection = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(connectionString, connectionParams);
        console.log("connected to database");
    } catch (error) {
        console.log(error);
    }
};

export default connection;