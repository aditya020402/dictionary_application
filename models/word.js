import mongoose from "mongoose";

const schema = new mongoose.Schema({
    word:{
        type:String,
        required:true,
    },
    meaning:{
        type:String,
        required:true,
    }
});
export const Word = mongoose.model("Word",schema);