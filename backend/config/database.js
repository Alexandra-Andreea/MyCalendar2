import mongoose from "mongoose";
import config from "../../config";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(config.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`[database.js]: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;