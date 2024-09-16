import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import cors from "cors"
import route from "./routes/userRoute.js";


dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());


const PORT = process.env.PORT || 3000 ;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("DB Connected Succesfully");
    app.listen(PORT,()=>{
        console.log(`Server is running on port : ${PORT}`);
    })
}).catch((err)=>console.log(err));


app.use("/api",route);
