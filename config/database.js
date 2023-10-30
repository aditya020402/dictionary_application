import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect(
        process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }).then((data)=>{console.log(`mongodb is connect with server at ${data.connection.host}`)}
        ).catch((error)=>console.log(error))
}

export default connectDB;