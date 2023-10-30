import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/database.js";


dotenv.config({
    path:'./config/config.env'
}) 


connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`the server is working on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});