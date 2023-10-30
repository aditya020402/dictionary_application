import express from "express";
import wordRouter from "./routes/wordroute.js"
const app = express();

//using middleware 
app.use(express.json());

//using routes
app.use("/api/v1/word",wordRouter);

export default app;