import {Word} from '../models/word.js';
import axios from "axios";




export const checkingWork = (req,res) => {
    res.status(200).json({
        message:"Route is working fine",
    })
};


export const findWord = async(req,res,next) => {
    try{
        const to_find = req.params.id;
        const res1 = await Word.findOne({"word":{$regex:to_find}});
        if(!res1){
            const options = {
                method: 'GET',
                url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
                params: { term: to_find },
                headers: {
                    'X-RapidAPI-Key': 'b1b7028923msha68f729d6e80c5dp18151bjsn6b59d4dd4526',
                    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
                }
            }
            const result = await axios.request(options);
            const val = result.data.list[0].definition;
            await Word.create({
                word:to_find,
                meaning:val,
            })
            res.status(200).json({
                success:true,
                val,
            })
        }
        else{
            res.status(200).json({
                success:true,
                message:"word found in the database",
                res1,
            })
        }
    }
    catch(error){
        next(error);
    }
}