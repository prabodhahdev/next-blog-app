import mongoose from 'mongoos';

export const ConnectDB =async ()=>{
    await mongoose.connect('mongodb+srv://prabodaharshani95:harshani95@nextjsblog.ctw3x.mongodb.net/nextjs-blogapp')
    console.log("Database Connected");
}