import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.Mongo_Url)
        console.log("db connect successfully");
    } catch (error) {
        console.log(error)
    }

}
export default connectDb