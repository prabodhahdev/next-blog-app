import mongoose from 'mongoose'; 

export const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://prabodaharshani95:harshani95@nextjsblog.ctw3x.mongodb.net/nextjs-blogapp', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected");
    } catch (error) {
        console.error("Database connection error:", error);
        throw new Error("Failed to connect to the database");
    }
};
